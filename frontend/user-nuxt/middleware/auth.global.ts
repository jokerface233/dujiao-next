export default defineNuxtRouteMiddleware((to, _from) => {
  const auth = useAuthStore()
  const isProtected = to.path.startsWith('/me') || to.path.startsWith('/checkout') || to.path.startsWith('/pay')

  if (isProtected && !auth.isAuthenticated) {
    return navigateTo(`/auth/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
})
