const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; password?: string; name?: string }>(event)
  const email = body?.email?.trim().toLowerCase()
  const password = body?.password
  const name = body?.name?.trim() || null

  if (!email || !password) {
    throw createError({ statusCode: 400, statusMessage: 'Vui lòng nhập email và mật khẩu.' })
  }
  if (!EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Email không hợp lệ.' })
  }
  if (password.length < 8) {
    throw createError({ statusCode: 400, statusMessage: 'Mật khẩu phải có ít nhất 8 ký tự.' })
  }
  if (findUserByEmail(email)) {
    throw createError({ statusCode: 409, statusMessage: 'Email này đã được đăng ký.' })
  }

  const passwordHash = await hashPassword(password)
  const record = createUser({ email, passwordHash, name })

  await setUserSession(event, {
    user: { id: record.id, email: record.email, name: record.name ?? undefined }
  })

  return { ok: true }
})
