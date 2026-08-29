import { DatabaseSync } from 'node:sqlite'
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const DB_PATH = join(process.cwd(), 'server', 'database', 'app.db')

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  email         TEXT NOT NULL UNIQUE COLLATE NOCASE,
  password_hash TEXT,
  google_id     TEXT UNIQUE,
  name          TEXT,
  avatar        TEXT,
  created_at    TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_users_google_id ON users (google_id);

CREATE TABLE IF NOT EXISTS srs_cards (
  user_id           INTEGER NOT NULL REFERENCES users(id),
  item_id           TEXT NOT NULL,
  ease_factor       REAL NOT NULL DEFAULT 2.5,
  interval_days     INTEGER NOT NULL DEFAULT 0,
  repetitions       INTEGER NOT NULL DEFAULT 0,
  due_date          TEXT NOT NULL,
  last_reviewed_at  TEXT,
  lapses            INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, item_id)
);

CREATE TABLE IF NOT EXISTS review_log (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id      INTEGER NOT NULL REFERENCES users(id),
  item_id      TEXT NOT NULL,
  reviewed_at  TEXT NOT NULL,
  grade        INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_srs_cards_user_due ON srs_cards (user_id, due_date);
CREATE INDEX IF NOT EXISTS idx_review_log_user_item ON review_log (user_id, item_id);

CREATE TABLE IF NOT EXISTS streak_state (
  user_id                INTEGER PRIMARY KEY REFERENCES users(id),
  current_streak         INTEGER NOT NULL DEFAULT 0,
  longest_streak         INTEGER NOT NULL DEFAULT 0,
  last_activity_date     TEXT,
  freezes_available      INTEGER NOT NULL DEFAULT 0,
  last_freeze_regen_date TEXT
);

CREATE TABLE IF NOT EXISTS streak_activity_log (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id        INTEGER NOT NULL REFERENCES users(id),
  activity_date  TEXT NOT NULL,
  activity_type  TEXT NOT NULL,
  recorded_at    TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_streak_activity_log_user_date ON streak_activity_log (user_id, activity_date);
`

let _db: DatabaseSync | null = null

/**
 * Lazily opens (and migrates) the single-file SQLite database used to store
 * all users' accounts and SRS/streak progress. Safe to call from any server route.
 */
export function useDb(): DatabaseSync {
  if (_db) return _db

  const dir = dirname(DB_PATH)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

  _db = new DatabaseSync(DB_PATH)
  _db.exec('PRAGMA foreign_keys = ON')
  _db.exec(SCHEMA_SQL)
  return _db
}
