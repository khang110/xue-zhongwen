export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; password?: string }>(event)
  const email = body?.email?.trim().toLowerCase()
  const password = body?.password

  if (!email || !password) {
    throw createError({ statusCode: 400, statusMessage: 'Vui lòng nhập email và mật khẩu.' })
  }

  const record = findUserByEmail(email)
  if (!record || !record.passwordHash || !(await verifyPassword(record.passwordHash, password))) {
    throw createError({ statusCode: 401, statusMessage: 'Email hoặc mật khẩu không đúng.' })
  }

  await setUserSession(event, {
    user: {
      id: record.id,
      email: record.email,
      name: record.name ?? undefined,
      avatar: record.avatar ?? undefined
    }
  })

  return { ok: true }
})
