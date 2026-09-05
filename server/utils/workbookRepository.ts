import { useDb } from '../database/connection'

interface WorkbookProgressRow {
  exercise_id: string
  state: string
  updated_at: string
}

export interface WorkbookProgressRecord {
  exerciseId: string
  state: unknown
  updatedAt: string
}

/** Bài làm đã lưu của user cho các bài tập có id nằm trong `ids`. */
export function getWorkbookProgress(userId: number, ids: string[]): WorkbookProgressRecord[] {
  if (ids.length === 0) return []
  const db = useDb()
  const placeholders = ids.map(() => '?').join(',')
  const rows = db
    .prepare(
      `SELECT exercise_id, state, updated_at FROM workbook_progress WHERE user_id = ? AND exercise_id IN (${placeholders})`
    )
    .all(userId, ...ids) as unknown as WorkbookProgressRow[]
  return rows.map((r) => ({
    exerciseId: r.exercise_id,
    state: JSON.parse(r.state) as unknown,
    updatedAt: r.updated_at
  }))
}

/** Toàn bộ bài làm đã lưu của user (cho trang cá nhân / export). */
export function getAllWorkbookProgress(userId: number): WorkbookProgressRecord[] {
  const db = useDb()
  const rows = db
    .prepare(
      'SELECT exercise_id, state, updated_at FROM workbook_progress WHERE user_id = ? ORDER BY updated_at DESC'
    )
    .all(userId) as unknown as WorkbookProgressRow[]
  return rows.map((r) => ({
    exerciseId: r.exercise_id,
    state: JSON.parse(r.state) as unknown,
    updatedAt: r.updated_at
  }))
}

export function upsertWorkbookProgress(
  userId: number,
  exerciseId: string,
  state: unknown,
  updatedAtIso: string
): void {
  const db = useDb()
  db.prepare(
    `
    INSERT INTO workbook_progress (user_id, exercise_id, state, updated_at)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(user_id, exercise_id) DO UPDATE SET
      state = excluded.state,
      updated_at = excluded.updated_at
  `
  ).run(userId, exerciseId, JSON.stringify(state), updatedAtIso)
}

export function deleteWorkbookProgress(userId: number, exerciseId: string): void {
  const db = useDb()
  db.prepare('DELETE FROM workbook_progress WHERE user_id = ? AND exercise_id = ?').run(userId, exerciseId)
}
