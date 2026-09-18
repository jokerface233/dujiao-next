<script setup lang="ts">
const { data: products } = await usePublicApi('/public/products')
const items = computed(() => Array.isArray(products.value) ? products.value : [])
useSeoMeta({
  title: 'Products',
  description: 'Browse product listings from the Dujiao-Next storefront.'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <h1>Products</h1>
      <div class="grid">
        <article v-for="product in items" :key="product.slug || product.id" class="card">
          <span class="tag">{{ product.category || 'Featured' }}</span>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="mt-4"><strong>{{ product.price || product.sale_price || '$0.00' }}</strong></p>
          <NuxtLink :to="`/products/${product.slug || product.id}`">View product</NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>
