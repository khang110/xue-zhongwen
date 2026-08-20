export default defineOAuthGoogleEventHandler({
  config: {
    scope: ['email', 'profile']
  },
  async onSuccess(event, { user }) {
    const config = useRuntimeConfig()
    const allowedEmail = config.allowedGoogleEmail

    if (!allowedEmail || user.email !== allowedEmail) {
      throw createError({ statusCode: 403, statusMessage: 'Tài khoản Google này không được phép truy cập.' })
    }

    await setUserSession(event, {
      user: {
        email: user.email,
        name: user.name,
        avatar: user.picture
      }
    })

    return sendRedirect(event, '/')
  },
  onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/login?error=oauth')
  }
})
