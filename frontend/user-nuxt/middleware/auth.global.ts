export default defineNuxtRouteMiddleware((to) => {
  const authCookie = useCookie('user_token')
  const isPrivate = to.path.startsWith('/me') || to.path.startsWith('/checkout') || to.path.startsWith('/pay')

  if (isPrivate && !authCookie.value) {
    return navigateTo(`/auth/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
})
