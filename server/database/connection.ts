import { DatabaseSync } from 'node:sqlite'
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const DB_PATH = join(process.cwd(), 'server', 'database', 'app.db')

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS srs_cards (
  item_id           TEXT PRIMARY KEY,
  ease_factor       REAL NOT NULL DEFAULT 2.5,
  interval_days     INTEGER NOT NULL DEFAULT 0,
  repetitions       INTEGER NOT NULL DEFAULT 0,
  due_date          TEXT NOT NULL,
  last_reviewed_at  TEXT,
  lapses            INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS review_log (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  item_id      TEXT NOT NULL,
  reviewed_at  TEXT NOT NULL,
  grade        INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_srs_cards_due_date ON srs_cards (due_date);
CREATE INDEX IF NOT EXISTS idx_review_log_item_id ON review_log (item_id);
`

let _db: DatabaseSync | null = null

/**
 * Lazily opens (and migrates) the single-file SQLite database used to store
 * this single user's SRS progress. Safe to call from any server route.
 */
export function useDb(): DatabaseSync {
  if (_db) return _db

  const dir = dirname(DB_PATH)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

  _db = new DatabaseSync(DB_PATH)
  _db.exec(SCHEMA_SQL)
  return _db
}
