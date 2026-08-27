import { describe, expect, it } from 'vitest'
import {
  FREEZE_CAP,
  FREEZE_REGEN_INTERVAL_DAYS,
  createInitialStreakState,
  projectStreakState,
  recordActivity
} from './streakAlgorithm'
import type { StreakState } from '../../types/streak'

const DAY1 = new Date('2026-08-15T00:00:00.000Z') // hoạt động lần đầu
const DAY2 = new Date('2026-08-16T00:00:00.000Z') // +1 ngày
const DAY3 = new Date('2026-08-17T00:00:00.000Z') // +2 ngày
const DAY4 = new Date('2026-08-18T00:00:00.000Z') // +3 ngày

describe('recordActivity', () => {
  it('hoạt động đầu tiên -> currentStreak=1, longestStreak=1', () => {
    const state = recordActivity(createInitialStreakState(), DAY1)
    expect(state.currentStreak).toBe(1)
    expect(state.longestStreak).toBe(1)
    expect(state.lastActivityDate).toBe('2026-08-15')
  })

  it('gọi lại cùng ngày -> idempotent, state không đổi', () => {
    const first = recordActivity(createInitialStreakState(), DAY1)
    const second = recordActivity(first, DAY1)
    expect(second).toEqual(first)
  })

  it('gap 1 ngày -> currentStreak+1, không tốn lá chắn', () => {
    const day1 = recordActivity(createInitialStreakState(), DAY1)
    const day2 = recordActivity(day1, DAY2)
    expect(day2.currentStreak).toBe(2)
    expect(day2.longestStreak).toBe(2)
    expect(day2.freezesAvailable).toBe(day1.freezesAvailable)
  })

  it('gap 2 ngày (1 ngày bỏ lỡ) có đủ lá chắn -> streak tiếp tục, trừ 1 lá chắn', () => {
    const day1 = recordActivity(createInitialStreakState(), DAY1) // freezes=1
    const day3 = recordActivity(day1, DAY3) // bỏ lỡ DAY2
    expect(day3.currentStreak).toBe(2)
    expect(day3.freezesAvailable).toBe(0)
  })

  it('gap 2 ngày không đủ lá chắn -> reset về 1', () => {
    const noFreeze: StreakState = { ...recordActivity(createInitialStreakState(), DAY1), freezesAvailable: 0 }
    const broken = recordActivity(noFreeze, DAY3)
    expect(broken.currentStreak).toBe(1)
  })

  it('gap 3 ngày (2 ngày bỏ lỡ) chỉ có 1 lá chắn -> reset, không bù một phần', () => {
    const day1 = recordActivity(createInitialStreakState(), DAY1) // freezes=1
    const day4 = recordActivity(day1, DAY4) // bỏ lỡ DAY2, DAY3 = 2 ngày > 1 lá chắn
    expect(day4.currentStreak).toBe(1)
    expect(day4.freezesAvailable).toBe(1) // không bị tiêu vì streak đã reset
  })

  it('longestStreak giữ đỉnh cũ qua 1 lần reset', () => {
    let state = recordActivity(createInitialStreakState(), DAY1)
    state = recordActivity(state, DAY2) // streak=2, longest=2
    state = recordActivity(state, new Date('2026-09-01T00:00:00.000Z')) // gap lớn -> reset về 1
    expect(state.currentStreak).toBe(1)
    expect(state.longestStreak).toBe(2)
  })

  it('lá chắn tự hồi sau FREEZE_REGEN_INTERVAL_DAYS ngày dù không hoạt động', () => {
    let state = recordActivity(createInitialStreakState(), DAY1) // freezes=1, tốn ngay nếu dùng
    state = { ...state, freezesAvailable: 0 }
    const later = recordActivity(
      state,
      new Date(DAY1.getTime() + (FREEZE_REGEN_INTERVAL_DAYS + 1) * 86_400_000)
    )
    // Gap rất lớn nên streak vẫn reset, nhưng lá chắn phải được hồi trước khi tính gap
    expect(later.freezesAvailable).toBeGreaterThanOrEqual(1)
  })

  it('lá chắn không vượt FREEZE_CAP dù trôi qua nhiều chu kỳ liên tiếp', () => {
    let state = recordActivity(createInitialStreakState(), DAY1)
    state = { ...state, freezesAvailable: 0 }
    const muchLater = recordActivity(
      state,
      new Date(DAY1.getTime() + FREEZE_REGEN_INTERVAL_DAYS * 10 * 86_400_000)
    )
    expect(muchLater.freezesAvailable).toBeLessThanOrEqual(FREEZE_CAP)
  })

  it('mốc hồi lá chắn không cộng dồn sai sau khi bị tiêu', () => {
    const day1 = recordActivity(createInitialStreakState(), DAY1)
    expect(day1.lastFreezeRegenDate).toBe('2026-08-15')
    const day3 = recordActivity(day1, DAY3) // tốn lá chắn, mốc regen không đổi vì <7 ngày
    expect(day3.lastFreezeRegenDate).toBe('2026-08-15')
  })
})

describe('projectStreakState', () => {
  it('chưa từng hoạt động -> at-risk, currentStreak=0', () => {
    const p = projectStreakState(createInitialStreakState(), DAY1)
    expect(p.status).toBe('at-risk')
    expect(p.currentStreak).toBe(0)
  })

  it('đã hoạt động hôm nay -> done-today', () => {
    const state = recordActivity(createInitialStreakState(), DAY1)
    const p = projectStreakState(state, DAY1)
    expect(p.status).toBe('done-today')
    expect(p.currentStreak).toBe(1)
  })

  it('hoạt động gần nhất là hôm qua + có lá chắn -> protected, streak giữ nguyên', () => {
    const state = recordActivity(createInitialStreakState(), DAY1) // freezes=1
    const p = projectStreakState(state, DAY2)
    expect(p.status).toBe('protected')
    expect(p.currentStreak).toBe(1)
  })

  it('hoạt động gần nhất là hôm qua + hết lá chắn -> at-risk nhưng streak chưa reset', () => {
    const state: StreakState = { ...recordActivity(createInitialStreakState(), DAY1), freezesAvailable: 0 }
    const p = projectStreakState(state, DAY2)
    expect(p.status).toBe('at-risk')
    expect(p.currentStreak).toBe(1)
  })

  it('cách >=2 ngày không đủ lá chắn -> at-risk + streak=0 (đã đứt thật)', () => {
    const state: StreakState = { ...recordActivity(createInitialStreakState(), DAY1), freezesAvailable: 0 }
    const p = projectStreakState(state, DAY3)
    expect(p.status).toBe('at-risk')
    expect(p.currentStreak).toBe(0)
  })

  it('hàm thuần - không mutate state truyền vào', () => {
    const state = recordActivity(createInitialStreakState(), DAY1)
    const snapshot = { ...state }
    projectStreakState(state, DAY3)
    expect(state).toEqual(snapshot)
  })
})
