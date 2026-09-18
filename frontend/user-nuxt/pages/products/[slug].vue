<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: product } = await useFetch(`/api/products/${slug.value || 'demo-product'}`)
useSeoMeta({
  title: () => product.value?.name || 'Product Detail',
  description: () => product.value?.description || 'Product detail page'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <NuxtLink to="/products">← Back to products</NuxtLink>
      <div v-if="product" class="card mt-4">
        <span class="tag">{{ product.category }}</span>
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p class="mt-4"><strong>{{ product.price }}</strong></p>
      </div>
    </div>
  </div>
</template>
