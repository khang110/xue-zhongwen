export type StreakActivityType = 'srs_review' | 'lesson_quiz' | 'lesson_writing'

export interface StreakState {
  currentStreak: number
  longestStreak: number
  /** ISO date "YYYY-MM-DD", null nếu chưa từng có hoạt động */
  lastActivityDate: string | null
  freezesAvailable: number
  /** Mốc ISO date dùng để tính chu kỳ hồi lá chắn, null nếu chưa từng tính */
  lastFreezeRegenDate: string | null
}

export type StreakStatus = 'done-today' | 'protected' | 'at-risk'

export interface StreakProjection {
  currentStreak: number
  longestStreak: number
  freezesAvailable: number
  status: StreakStatus
}
