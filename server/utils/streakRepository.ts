import { useDb } from '../database/connection'
import type { StreakActivityType, StreakState } from '../../types/streak'

interface StreakStateRow {
  current_streak: number
  longest_streak: number
  last_activity_date: string | null
  freezes_available: number
  last_freeze_regen_date: string | null
}

function rowToState(row: StreakStateRow): StreakState {
  return {
    currentStreak: row.current_streak,
    longestStreak: row.longest_streak,
    lastActivityDate: row.last_activity_date,
    freezesAvailable: row.freezes_available,
    lastFreezeRegenDate: row.last_freeze_regen_date
  }
}

export function getStreakState(userId: number): StreakState | undefined {
  const db = useDb()
  const row = db.prepare('SELECT * FROM streak_state WHERE user_id = ?').get(userId) as unknown as
    | StreakStateRow
    | undefined
  return row ? rowToState(row) : undefined
}

export function upsertStreakState(userId: number, state: StreakState): void {
  const db = useDb()
  db.prepare(
    `
    INSERT INTO streak_state (user_id, current_streak, longest_streak, last_activity_date, freezes_available, last_freeze_regen_date)
    VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET
      current_streak = excluded.current_streak,
      longest_streak = excluded.longest_streak,
      last_activity_date = excluded.last_activity_date,
      freezes_available = excluded.freezes_available,
      last_freeze_regen_date = excluded.last_freeze_regen_date
  `
  ).run(
    userId,
    state.currentStreak,
    state.longestStreak,
    state.lastActivityDate,
    state.freezesAvailable,
    state.lastFreezeRegenDate
  )
}

export function logStreakActivity(
  userId: number,
  activityDateIso: string,
  activityType: StreakActivityType,
  recordedAtIso: string
): void {
  const db = useDb()
  db.prepare(
    'INSERT INTO streak_activity_log (user_id, activity_date, activity_type, recorded_at) VALUES (?, ?, ?, ?)'
  ).run(userId, activityDateIso, activityType, recordedAtIso)
}
