import { useDb } from '../database/connection'
import type { SrsCardState, SrsGrade } from '../../types/srs'

interface SrsCardRow {
  item_id: string
  ease_factor: number
  interval_days: number
  repetitions: number
  due_date: string
  last_reviewed_at: string | null
  lapses: number
}

function rowToState(row: SrsCardRow): SrsCardState {
  return {
    itemId: row.item_id,
    easeFactor: row.ease_factor,
    intervalDays: row.interval_days,
    repetitions: row.repetitions,
    dueDate: row.due_date,
    lastReviewedAt: row.last_reviewed_at ?? undefined,
    lapses: row.lapses
  }
}

export function getCardsByIds(userId: number, ids: string[]): SrsCardState[] {
  if (ids.length === 0) return []
  const db = useDb()
  const placeholders = ids.map(() => '?').join(',')
  const rows = db
    .prepare(`SELECT * FROM srs_cards WHERE user_id = ? AND item_id IN (${placeholders})`)
    .all(userId, ...ids) as unknown as SrsCardRow[]
  return rows.map(rowToState)
}

export function getCard(userId: number, itemId: string): SrsCardState | undefined {
  const db = useDb()
  const row = db.prepare('SELECT * FROM srs_cards WHERE user_id = ? AND item_id = ?').get(
    userId,
    itemId
  ) as unknown as SrsCardRow | undefined
  return row ? rowToState(row) : undefined
}

/** Trong số các itemId cho trước, trả về những id đã đến hạn ôn (due_date <= asOf) hoặc chưa từng ôn. */
export function getDueCardIds(userId: number, ids: string[], asOfIsoDate: string): string[] {
  if (ids.length === 0) return []
  const existing = getCardsByIds(userId, ids)
  const existingIds = new Set(existing.map((c) => c.itemId))
  const due = existing.filter((c) => c.dueDate <= asOfIsoDate).map((c) => c.itemId)
  const neverReviewed = ids.filter((id) => !existingIds.has(id))
  return [...due, ...neverReviewed]
}

export function upsertCard(userId: number, state: SrsCardState): void {
  const db = useDb()
  db.prepare(
    `
    INSERT INTO srs_cards (user_id, item_id, ease_factor, interval_days, repetitions, due_date, last_reviewed_at, lapses)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id, item_id) DO UPDATE SET
      ease_factor = excluded.ease_factor,
      interval_days = excluded.interval_days,
      repetitions = excluded.repetitions,
      due_date = excluded.due_date,
      last_reviewed_at = excluded.last_reviewed_at,
      lapses = excluded.lapses
  `
  ).run(
    userId,
    state.itemId,
    state.easeFactor,
    state.intervalDays,
    state.repetitions,
    state.dueDate,
    state.lastReviewedAt ?? null,
    state.lapses
  )
}

export function logReview(userId: number, itemId: string, grade: SrsGrade, reviewedAtIso: string): void {
  const db = useDb()
  db.prepare('INSERT INTO review_log (user_id, item_id, reviewed_at, grade) VALUES (?, ?, ?, ?)').run(
    userId,
    itemId,
    reviewedAtIso,
    grade
  )
}
