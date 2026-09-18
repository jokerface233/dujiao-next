export default defineNuxtConfig({
  compatibilityDate: '2025-07-25',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: 'Dujiao-Next',
      titleTemplate: '%s · Dujiao-Next',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Dujiao-Next storefront powered by Nuxt 3' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
      appName: 'Dujiao-Next'
    }
  },
  routeRules: {
    '/': { swr: 60 },
    '/products/**': { swr: 60 },
    '/blog/**': { swr: 60 },
    '/categories/**': { swr: 60 },
    '/about': { swr: 600 },
    '/terms': { swr: 600 },
    '/privacy': { swr: 600 },
    '/auth/**': { ssr: false },
    '/cart': { ssr: false },
    '/checkout': { ssr: false },
    '/pay': { ssr: false },
    '/me/**': { ssr: false }
  }
})
