export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug') || 'featured'

  const categories: Record<string, any> = {
    featured: {
      name: 'Featured',
      slug: 'featured',
      description: 'Popular products and sale items for the public storefront.'
    },
    'new-arrivals': {
      name: 'New Arrivals',
      slug: 'new-arrivals',
      description: 'Fresh items that are updated frequently and should stay SEO friendly.'
    }
  }

  return categories[slug] || categories.featured
})
