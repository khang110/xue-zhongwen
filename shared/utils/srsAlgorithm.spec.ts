import { describe, expect, it } from 'vitest'
import { computeNextState, createInitialCardState } from './srsAlgorithm'

const NOW = new Date('2026-08-15T00:00:00.000Z')

describe('createInitialCardState', () => {
  it('khởi tạo thẻ mới với ease=2.5, interval=0, dueDate=hôm nay', () => {
    const state = createInitialCardState('L1-001', NOW)
    expect(state).toEqual({
      itemId: 'L1-001',
      easeFactor: 2.5,
      intervalDays: 0,
      repetitions: 0,
      dueDate: '2026-08-15',
      lapses: 0
    })
  })
})

describe('computeNextState', () => {
  it('Good lần đầu -> interval=1 ngày, repetitions=1', () => {
    const initial = createInitialCardState('L1-001', NOW)
    const next = computeNextState(initial, 2, NOW)
    expect(next.repetitions).toBe(1)
    expect(next.intervalDays).toBe(1)
    expect(next.dueDate).toBe('2026-08-16')
    expect(next.easeFactor).toBe(2.5)
  })

  it('Good lần thứ hai -> interval=6 ngày, repetitions=2', () => {
    const afterFirst = computeNextState(createInitialCardState('L1-001', NOW), 2, NOW)
    const afterSecond = computeNextState(afterFirst, 2, NOW)
    expect(afterSecond.repetitions).toBe(2)
    expect(afterSecond.intervalDays).toBe(6)
    expect(afterSecond.dueDate).toBe('2026-08-21')
  })

  it('Good lần thứ ba trở đi -> interval = interval trước * ease', () => {
    let state = createInitialCardState('L1-001', NOW)
    state = computeNextState(state, 2, NOW) // interval 1
    state = computeNextState(state, 2, NOW) // interval 6
    state = computeNextState(state, 2, NOW) // interval round(6*2.5)=15
    expect(state.intervalDays).toBe(15)
    expect(state.repetitions).toBe(3)
    // quality=4 giữ nguyên ease theo công thức SM-2 chuẩn
    expect(state.easeFactor).toBe(2.5)
  })

  it('Again -> reset repetitions=0, interval=1, lapses+=1, ease giảm 0.2', () => {
    let state = createInitialCardState('L1-001', NOW)
    state = computeNextState(state, 2, NOW) // Good: rep=1, interval=1, ease=2.5
    state = computeNextState(state, 2, NOW) // Good: rep=2, interval=6, ease=2.5
    const afterAgain = computeNextState(state, 0, NOW)
    expect(afterAgain.repetitions).toBe(0)
    expect(afterAgain.intervalDays).toBe(1)
    expect(afterAgain.lapses).toBe(1)
    expect(afterAgain.easeFactor).toBe(2.3)
    expect(afterAgain.dueDate).toBe('2026-08-16')
  })

  it('Hard -> interval tăng nhẹ (x1.2, tối thiểu +1 ngày), ease giảm 0.15', () => {
    let state = createInitialCardState('L1-001', NOW)
    state = computeNextState(state, 2, NOW) // interval=1
    state = computeNextState(state, 2, NOW) // interval=6
    const afterHard = computeNextState(state, 1, NOW)
    expect(afterHard.intervalDays).toBe(Math.round(6 * 1.2)) // 7
    expect(afterHard.easeFactor).toBe(2.35)
  })

  it('Hard trên thẻ mới (interval=0) vẫn cho interval tối thiểu 1 ngày', () => {
    const initial = createInitialCardState('L1-001', NOW)
    const afterHard = computeNextState(initial, 1, NOW)
    expect(afterHard.intervalDays).toBe(1)
  })

  it('Easy -> interval xa hơn Good 1.3 lần, ease tăng thêm 0.15', () => {
    let good = createInitialCardState('L1-001', NOW)
    good = computeNextState(good, 2, NOW) // interval=1
    good = computeNextState(good, 2, NOW) // interval=6
    const goodThird = computeNextState(good, 2, NOW) // interval=15, ease=2.5

    let easy = createInitialCardState('L1-002', NOW)
    easy = computeNextState(easy, 2, NOW)
    easy = computeNextState(easy, 2, NOW)
    const easyThird = computeNextState(easy, 3, NOW)

    expect(easyThird.intervalDays).toBe(Math.round(goodThird.intervalDays * 1.3))
    expect(easyThird.easeFactor).toBe(2.65) // 2.5 + 0.15
  })

  it('Ease factor không bao giờ xuống dưới sàn 1.3 dù bấm Again liên tục', () => {
    let state = createInitialCardState('L1-001', NOW)
    for (let i = 0; i < 20; i++) {
      state = computeNextState(state, 0, NOW)
    }
    expect(state.easeFactor).toBe(1.3)
    expect(state.lapses).toBe(20)
  })

  it('lastReviewedAt được ghi lại đúng thời điểm chấm điểm', () => {
    const state = computeNextState(createInitialCardState('L1-001', NOW), 2, NOW)
    expect(state.lastReviewedAt).toBe(NOW.toISOString())
  })
})
