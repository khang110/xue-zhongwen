export default defineOAuthGoogleEventHandler({
  config: {
    scope: ['email', 'profile']
  },
  async onSuccess(event, { user: googleUser }) {
    if (!googleUser.email) {
      throw createError({ statusCode: 400, statusMessage: 'Tài khoản Google không có email.' })
    }

    const email = String(googleUser.email).trim().toLowerCase()
    const googleId = String(googleUser.sub)

    let record = findUserByGoogleId(googleId)
    if (!record) {
      const existingByEmail = findUserByEmail(email)
      if (existingByEmail) {
        linkGoogleAccount(existingByEmail.id, googleId, googleUser.name ?? null, googleUser.picture ?? null)
        record = {
          ...existingByEmail,
          googleId,
          name: googleUser.name ?? existingByEmail.name,
          avatar: googleUser.picture ?? existingByEmail.avatar
        }
      } else {
        record = createUser({
          email,
          googleId,
          name: googleUser.name ?? null,
          avatar: googleUser.picture ?? null
        })
      }
    }

    await setUserSession(event, {
      user: {
        id: record.id,
        email: record.email,
        name: record.name ?? undefined,
        avatar: record.avatar ?? undefined
      }
    })

    return sendRedirect(event, '/')
  },
  onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/login?error=oauth')
  }
})
