export default defineNuxtPlugin(() => {
  const cart = useCartStore()
  if (import.meta.client) {
    cart.load()
  }
})
