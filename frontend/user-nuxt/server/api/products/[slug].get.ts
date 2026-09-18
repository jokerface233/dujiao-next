export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug') || 'demo-product'

  const products: Record<string, any> = {
    'demo-product': {
      name: 'Dujiao-Next Pro',
      slug: 'demo-product',
      category: 'Featured',
      description: 'High-visibility product example used in the Nuxt migration POC.',
      price: '$49.00'
    },
    'commerce-starter': {
      name: 'Commerce Starter',
      slug: 'commerce-starter',
      category: 'New',
      description: 'A sample product detail page for validating server-side rendering.',
      price: '$29.00'
    },
    'growth-kit': {
      name: 'Growth Kit',
      slug: 'growth-kit',
      category: 'Popular',
      description: 'A product detail page for the test migration and SEO validation.',
      price: '$99.00'
    }
  }

  return products[slug] || products['demo-product']
})
