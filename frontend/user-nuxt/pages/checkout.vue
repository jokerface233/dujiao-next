<script setup lang="ts">
const cart = useCartStore()
const auth = useAuthStore()

onMounted(() => {
  cart.load()
  auth.hydrate()
})

const totalItems = computed(() => cart.totalItems)
const totalPrice = computed(() => cart.totalPrice)
useSeoMeta({
  title: 'Checkout',
  description: 'Client-side checkout flow for the Nuxt storefront migration.'
})
</script>

<template>
  <div class="page">
    <div class="container narrow">
      <div class="card form-card">
        <h1>Checkout</h1>
        <p>Items: {{ totalItems }}</p>
        <p>Total: ${{ totalPrice.toFixed(2) }}</p>
        <div v-if="cart.items.length === 0" class="mt-4">
          <NuxtLink to="/products">Browse products</NuxtLink>
        </div>
        <button v-else class="primary-button" @click="navigateTo('/pay')">Proceed to payment</button>
      </div>
    </div>
  </div>
</template>
