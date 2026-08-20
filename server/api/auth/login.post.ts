export default defineEventHandler(async (event) => {
  const body = await readBody<{ password?: string }>(event)
  const password = body?.password

  if (!password) {
    throw createError({ statusCode: 400, statusMessage: 'Thiếu mật khẩu' })
  }

  const config = useRuntimeConfig()
  if (!config.authPasswordHash || !config.authPasswordSalt) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Chưa cấu hình mật khẩu đăng nhập (NUXT_AUTH_PASSWORD_HASH/SALT trong .env)'
    })
  }

  const ok = verifyAuthPassword(password, config.authPasswordHash, config.authPasswordSalt)
  if (!ok) {
    throw createError({ statusCode: 401, statusMessage: 'Sai mật khẩu' })
  }

  await setUserSession(event, {
    user: { loggedIn: true }
  })

  return { ok: true }
})
