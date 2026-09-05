export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const body = await readBody<{ exerciseId?: string; state?: unknown }>(event)
  const exerciseId = body?.exerciseId

  if (!exerciseId || typeof exerciseId !== 'string' || body?.state == null) {
    throw createError({ statusCode: 400, statusMessage: 'exerciseId hoặc state không hợp lệ' })
  }

  if (JSON.stringify(body.state).length > 20_000) {
    throw createError({ statusCode: 413, statusMessage: 'Nội dung bài làm quá dài' })
  }

  const updatedAt = new Date().toISOString()
  upsertWorkbookProgress(user.id, exerciseId, body.state, updatedAt)

  return { ok: true, updatedAt }
})
