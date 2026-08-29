import { useDb } from '../database/connection'

export interface UserRecord {
  id: number
  email: string
  passwordHash: string | null
  googleId: string | null
  name: string | null
  avatar: string | null
}

interface UserRow {
  id: number
  email: string
  password_hash: string | null
  google_id: string | null
  name: string | null
  avatar: string | null
}

function rowToRecord(row: UserRow): UserRecord {
  return {
    id: row.id,
    email: row.email,
    passwordHash: row.password_hash,
    googleId: row.google_id,
    name: row.name,
    avatar: row.avatar
  }
}

export function findUserByEmail(email: string): UserRecord | undefined {
  const db = useDb()
  const row = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as unknown as UserRow | undefined
  return row ? rowToRecord(row) : undefined
}

export function findUserByGoogleId(googleId: string): UserRecord | undefined {
  const db = useDb()
  const row = db.prepare('SELECT * FROM users WHERE google_id = ?').get(googleId) as unknown as
    | UserRow
    | undefined
  return row ? rowToRecord(row) : undefined
}

export function createUser(input: {
  email: string
  passwordHash?: string | null
  googleId?: string | null
  name?: string | null
  avatar?: string | null
}): UserRecord {
  const db = useDb()
  const result = db
    .prepare(
      'INSERT INTO users (email, password_hash, google_id, name, avatar, created_at) VALUES (?, ?, ?, ?, ?, ?)'
    )
    .run(
      input.email,
      input.passwordHash ?? null,
      input.googleId ?? null,
      input.name ?? null,
      input.avatar ?? null,
      new Date().toISOString()
    )

  return {
    id: Number(result.lastInsertRowid),
    email: input.email,
    passwordHash: input.passwordHash ?? null,
    googleId: input.googleId ?? null,
    name: input.name ?? null,
    avatar: input.avatar ?? null
  }
}

export function linkGoogleAccount(
  userId: number,
  googleId: string,
  name: string | null,
  avatar: string | null
): void {
  const db = useDb()
  db.prepare(
    'UPDATE users SET google_id = ?, name = COALESCE(?, name), avatar = COALESCE(?, avatar) WHERE id = ?'
  ).run(googleId, name, avatar, userId)
}
