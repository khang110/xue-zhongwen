// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: '當代中文課程 3 — Sổ tay từ vựng & ngữ pháp'
    }
  },

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
      'Noto Serif': [400, 600, 700],
      'Noto Sans': [400, 500, 600],
      'Be Vietnam Pro': [400, 600, 700, 800]
    },
    display: 'swap'
  },

  nitro: {
    experimental: {
      database: false
    }
  }
})
