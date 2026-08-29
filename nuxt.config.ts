// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-auth-utils',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  googleFonts: {
    families: {
      'Noto Serif TC': [400, 500, 600, 700],
      'IBM Plex Sans': [400, 500, 600, 700],
      'IBM Plex Mono': [400, 500]
    },
    display: 'swap'
  },

  nitro: {
    experimental: {
      database: false
    }
  }
})
