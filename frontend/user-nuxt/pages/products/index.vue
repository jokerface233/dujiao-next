<script setup lang="ts">
const { data: products } = await useFetch('/api/products')
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
        <article v-for="product in products || []" :key="product.slug" class="card">
          <span class="tag">{{ product.category }}</span>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="mt-4"><strong>{{ product.price }}</strong></p>
          <NuxtLink :to="`/products/${product.slug}`">View product</NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>
