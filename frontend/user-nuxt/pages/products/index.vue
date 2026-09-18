<script setup lang="ts">
const { data: products } = await useFetch('/api/v1/public/products')
const items = computed(() => {
  const raw = products.value?.data || products.value || []
  return Array.isArray(raw) ? raw : []
})
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
