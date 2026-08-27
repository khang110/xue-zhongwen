import type { StreakProjection, StreakState, StreakStatus } from '../../types/streak'

/** Số lá chắn tối đa được giữ trong kho cùng lúc. */
export const FREEZE_CAP = 1
/** Số ngày thực tế cần trôi qua (không phụ thuộc có hoạt động hay không) để hồi thêm 1 lá chắn. */
export const FREEZE_REGEN_INTERVAL_DAYS = 7
/** Số lá chắn cấp sẵn ngay từ đầu. */
export const INITIAL_FREEZES = 1

function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}

function addDaysIso(iso: string, days: number): string {
  const d = new Date(`${iso}T00:00:00.000Z`)
  d.setUTCDate(d.getUTCDate() + days)
  return toIsoDate(d)
}

function diffDaysIso(a: string, b: string): number {
  const ta = new Date(`${a}T00:00:00.000Z`).getTime()
  const tb = new Date(`${b}T00:00:00.000Z`).getTime()
  return Math.round((ta - tb) / 86_400_000)
}

/** Trạng thái ban đầu khi chưa từng có hoạt động nào được ghi nhận. */
export function createInitialStreakState(): StreakState {
  return {
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: null,
    freezesAvailable: INITIAL_FREEZES,
    lastFreezeRegenDate: null
  }
}

/** Hồi lá chắn theo thời gian thực đã trôi qua, không phụ thuộc hoạt động. Thuần, không mutate. */
function applyFreezeRegen(
  state: StreakState,
  asOfIso: string
): Pick<StreakState, 'freezesAvailable' | 'lastFreezeRegenDate'> {
  if (state.lastFreezeRegenDate === null) {
    return { freezesAvailable: state.freezesAvailable, lastFreezeRegenDate: asOfIso }
  }
  const elapsed = diffDaysIso(asOfIso, state.lastFreezeRegenDate)
  if (elapsed < FREEZE_REGEN_INTERVAL_DAYS) {
    return { freezesAvailable: state.freezesAvailable, lastFreezeRegenDate: state.lastFreezeRegenDate }
  }
  const intervals = Math.floor(elapsed / FREEZE_REGEN_INTERVAL_DAYS)
  return {
    freezesAvailable: Math.min(FREEZE_CAP, state.freezesAvailable + intervals),
    lastFreezeRegenDate: addDaysIso(state.lastFreezeRegenDate, intervals * FREEZE_REGEN_INTERVAL_DAYS)
  }
}

/**
 * Ghi nhận 1 hoạt động đạt điều kiện giữ streak, xảy ra vào ngày của `now`.
 * Thuần - không tự lưu DB, gọi lại nhiều lần trong cùng 1 ngày là an toàn (idempotent).
 */
export function recordActivity(state: StreakState, now: Date = new Date()): StreakState {
  const todayIso = toIsoDate(now)
  if (state.lastActivityDate === todayIso) return state

  const regen = applyFreezeRegen(state, todayIso)

  if (state.lastActivityDate === null) {
    return { currentStreak: 1, longestStreak: Math.max(state.longestStreak, 1), lastActivityDate: todayIso, ...regen }
  }

  const gapDays = diffDaysIso(todayIso, state.lastActivityDate)
  const missedDays = gapDays - 1

  if (missedDays <= regen.freezesAvailable) {
    const currentStreak = state.currentStreak + 1
    return {
      currentStreak,
      longestStreak: Math.max(state.longestStreak, currentStreak),
      lastActivityDate: todayIso,
      freezesAvailable: missedDays > 0 ? regen.freezesAvailable - missedDays : regen.freezesAvailable,
      lastFreezeRegenDate: regen.lastFreezeRegenDate
    }
  }

  // Bỏ lỡ nhiều hơn số lá chắn có thể bù -> đứt streak, không bù một phần
  return {
    currentStreak: 1,
    longestStreak: Math.max(state.longestStreak, 1),
    lastActivityDate: todayIso,
    freezesAvailable: regen.freezesAvailable,
    lastFreezeRegenDate: regen.lastFreezeRegenDate
  }
}

/**
 * Chiếu trạng thái hiện tại để hiển thị (GET status). Thuần, không tiêu lá chắn và
 * không ghi hoạt động - an toàn gọi lại nhiều lần trong ngày mà không ảnh hưởng dữ liệu.
 */
export function projectStreakState(state: StreakState, now: Date = new Date()): StreakProjection {
  const todayIso = toIsoDate(now)
  const regen = applyFreezeRegen(state, todayIso)

  if (state.lastActivityDate === null) {
    return { currentStreak: 0, longestStreak: state.longestStreak, freezesAvailable: regen.freezesAvailable, status: 'at-risk' }
  }
  if (state.lastActivityDate === todayIso) {
    return { currentStreak: state.currentStreak, longestStreak: state.longestStreak, freezesAvailable: regen.freezesAvailable, status: 'done-today' }
  }

  const daysSinceLastActivity = diffDaysIso(todayIso, state.lastActivityDate)
  const missedBeforeToday = daysSinceLastActivity - 1

  if (missedBeforeToday > regen.freezesAvailable) {
    // Đã đứt streak do những ngày trước đó, hôm nay làm gì cũng không "cứu" được số cũ
    return { currentStreak: 0, longestStreak: state.longestStreak, freezesAvailable: regen.freezesAvailable, status: 'at-risk' }
  }

  const missedIfSkippedToday = daysSinceLastActivity
  const status: StreakStatus = missedIfSkippedToday <= regen.freezesAvailable ? 'protected' : 'at-risk'
  return { currentStreak: state.currentStreak, longestStreak: state.longestStreak, freezesAvailable: regen.freezesAvailable, status }
}
