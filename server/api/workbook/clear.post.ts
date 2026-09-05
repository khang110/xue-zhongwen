export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const body = await readBody<{ exerciseId?: string }>(event)
  if (!body?.exerciseId || typeof body.exerciseId !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'exerciseId không hợp lệ' })
  }

  deleteWorkbookProgress(user.id, body.exerciseId)

  return { ok: true }
})
