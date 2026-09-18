import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    config: null as any,
    ready: false,
  }),
  actions: {
    async loadConfig() {
      if (this.ready) return this.config
      const { data } = await useFetch('/api/public/config')
      this.config = data.value || null
      this.ready = true
      return this.config
    },
  },
})
