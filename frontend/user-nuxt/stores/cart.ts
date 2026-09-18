import { defineStore } from 'pinia'

interface CartItem {
  id: number | string
  name: string
  price: number
  qty: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    loaded: false,
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.qty * item.price, 0),
  },
  actions: {
    load() {
      if (!import.meta.client) return
      const raw = localStorage.getItem('nuxt-cart')
      if (raw) {
        try {
          this.items = JSON.parse(raw)
        } catch {
          this.items = []
        }
      }
      this.loaded = true
    },
    persist() {
      if (!import.meta.client) return
      localStorage.setItem('nuxt-cart', JSON.stringify(this.items))
    },
    addItem(item: CartItem) {
      const existing = this.items.find((i) => i.id === item.id)
      if (existing) {
        existing.qty += item.qty
      } else {
        this.items.push(item)
      }
      this.persist()
    },
    removeItem(id: number | string) {
      this.items = this.items.filter((i) => i.id !== id)
      this.persist()
    },
    clear() {
      this.items = []
      this.persist()
    },
  },
})
