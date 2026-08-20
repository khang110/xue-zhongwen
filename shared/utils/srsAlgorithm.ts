import type { SrsCardState, SrsGrade } from '../../types/srs'

const MIN_EASE = 1.3
const DEFAULT_EASE = 2.5

function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setUTCDate(result.getUTCDate() + days)
  return result
}

/** Trạng thái ban đầu cho 1 thẻ chưa từng được ôn. */
export function createInitialCardState(itemId: string, now: Date = new Date()): SrsCardState {
  return {
    itemId,
    easeFactor: DEFAULT_EASE,
    intervalDays: 0,
    repetitions: 0,
    dueDate: toIsoDate(now),
    lapses: 0
  }
}

/** Công thức ease factor chuẩn SM-2 cho 1 mức chất lượng (0-5). */
function sm2EaseFactor(ease: number, quality: number): number {
  const next = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  return Math.max(MIN_EASE, next)
}

/**
 * Tính trạng thái SRS tiếp theo sau khi người dùng chấm điểm 1 thẻ.
 * SM-2 rút gọn với 4 mức: Again(0) / Hard(1) / Good(2) / Easy(3).
 * Hàm thuần - không phụ thuộc storage, chạy được cả ở server lẫn trong unit test.
 */
export function computeNextState(
  current: SrsCardState,
  grade: SrsGrade,
  now: Date = new Date()
): SrsCardState {
  let intervalDays: number
  let repetitions = current.repetitions
  let easeFactor: number
  let lapses = current.lapses

  switch (grade) {
    case 0: {
      // Again: quên hoàn toàn - học lại từ đầu
      repetitions = 0
      intervalDays = 1
      lapses += 1
      easeFactor = Math.max(MIN_EASE, current.easeFactor - 0.2)
      break
    }
    case 1: {
      // Hard: nhớ nhưng khó - tăng nhẹ khoảng cách ôn
      const baseInterval = Math.max(current.intervalDays, 1)
      const minInterval = current.intervalDays + 1
      intervalDays = Math.max(minInterval, Math.round(baseInterval * 1.2))
      easeFactor = Math.max(MIN_EASE, current.easeFactor - 0.15)
      break
    }
    case 2: {
      // Good: SM-2 chuẩn với quality=4
      if (repetitions === 0) intervalDays = 1
      else if (repetitions === 1) intervalDays = 6
      else intervalDays = Math.round(current.intervalDays * current.easeFactor)
      repetitions += 1
      easeFactor = sm2EaseFactor(current.easeFactor, 4)
      break
    }
    case 3: {
      // Easy: như Good nhưng khoảng cách ôn xa hơn và ease tăng thêm
      if (repetitions === 0) intervalDays = 1
      else if (repetitions === 1) intervalDays = 6
      else intervalDays = Math.round(current.intervalDays * current.easeFactor)
      intervalDays = Math.round(intervalDays * 1.3)
      repetitions += 1
      easeFactor = sm2EaseFactor(current.easeFactor, 4) + 0.15
      break
    }
  }

  return {
    itemId: current.itemId,
    easeFactor: Math.round(easeFactor * 100) / 100,
    intervalDays,
    repetitions,
    dueDate: toIsoDate(addDays(now, intervalDays)),
    lastReviewedAt: now.toISOString(),
    lapses
  }
}
