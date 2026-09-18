import { defineStore } from 'pinia'

export interface AuthUser {
  id?: number | string
  email?: string
  name?: string
  nickname?: string
  avatar?: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as AuthUser | null,
    token: '' as string,
    hydrated: false,
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token || state.user),
  },
  actions: {
    hydrate() {
      if (!import.meta.client) return
      const cookie = useCookie('user_token')
      const rawUser = localStorage.getItem('nuxt-user')
      this.token = cookie.value || ''
      if (rawUser) {
        try {
          this.user = JSON.parse(rawUser)
        } catch {
          this.user = null
        }
      }
      this.hydrated = true
    },
    setSession(user: AuthUser | null, token?: string) {
      this.user = user
      if (token) {
        this.token = token
        const cookie = useCookie('user_token', { maxAge: 60 * 60 * 24 * 7, sameSite: 'lax' })
        cookie.value = token
      }
      if (import.meta.client) {
        localStorage.setItem('nuxt-user', JSON.stringify(user || {}))
      }
    },
    async login(email: string, password: string) {
      const demoUser: AuthUser = {
        id: 'demo-user',
        email,
        name: email.split('@')[0] || 'Demo User',
      }

      this.setSession(demoUser, 'demo-token-for-nuxt-poc')
      return demoUser
    },
    logout() {
      this.user = null
      this.token = ''
      if (import.meta.client) {
        localStorage.removeItem('nuxt-user')
      }
      const cookie = useCookie('user_token')
      cookie.value = null
      return navigateTo('/auth/login')
    },
  },
})
