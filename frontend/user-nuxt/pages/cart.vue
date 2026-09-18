<script setup lang="ts">
const cart = useCartStore()
const totalItems = computed(() => cart.totalItems)
const totalPrice = computed(() => cart.totalPrice)
useSeoMeta({
  title: 'Cart',
  description: 'Cart state for the Nuxt storefront migration.'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <h1>Cart</h1>
      <div v-if="cart.items.length === 0" class="card mt-4">
        <p>Your cart is empty.</p>
        <NuxtLink to="/products">Continue shopping</NuxtLink>
      </div>

      <div v-else class="mt-4">
        <div v-for="item in cart.items" :key="item.id" class="card mt-4">
          <h3>{{ item.name }}</h3>
          <p>Qty: {{ item.qty }}</p>
          <p>Price: ${{ item.price.toFixed(2) }}</p>
          <button class="button-link" @click="cart.removeItem(item.id)">Remove</button>
        </div>

        <div class="card mt-4">
          <p>Total items: {{ totalItems }}</p>
          <p>Total: ${{ totalPrice.toFixed(2) }}</p>
          <NuxtLink to="/checkout">Checkout</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
