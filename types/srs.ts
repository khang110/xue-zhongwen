/** 0=Again, 1=Hard, 2=Good, 3=Easy */
export type SrsGrade = 0 | 1 | 2 | 3

export interface SrsCardState {
  /** trùng VocabItem.id */
  itemId: string
  easeFactor: number
  intervalDays: number
  repetitions: number
  /** ISO date string, vd "2026-08-20" */
  dueDate: string
  lastReviewedAt?: string
  lapses: number
}

export interface ReviewLogEntry {
  itemId: string
  reviewedAt: string
  grade: SrsGrade
}

export interface SrsStats {
  dueToday: number
  learned: number
  total: number
}
