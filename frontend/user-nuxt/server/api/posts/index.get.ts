export default defineEventHandler(() => [
  {
    slug: 'welcome-to-dujiao-next',
    title: 'Welcome to Dujiao-Next',
    summary: 'The storefront has been migrated to Nuxt for better SSR and SEO performance.',
    content: '<p>We are starting the Nuxt migration for the public storefront while retaining the Go backend for business logic and APIs.</p>'
  },
  {
    slug: 'seo-and-hybrid-rendering',
    title: 'SEO and Hybrid Rendering',
    summary: 'Public pages can render on the server while cart and personal pages stay client-side.',
    content: '<p>By using Nuxt route rules, the storefront can keep SEO-friendly public pages without forcing private screens into SSR.</p>'
  }
])
