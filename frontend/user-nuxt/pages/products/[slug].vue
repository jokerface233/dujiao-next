<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: product } = await useFetch(`/api/v1/public/products/${slug.value || 'demo-product'}`)
const productDetail = computed(() => product.value?.data || product.value || null)

useSeoMeta({
  title: () => productDetail.value?.name || 'Product Detail',
  description: () => productDetail.value?.description || 'Product detail page'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <NuxtLink to="/products">← Back to products</NuxtLink>
      <div v-if="productDetail" class="card mt-4">
        <span class="tag">{{ productDetail.category || 'Featured' }}</span>
        <h1>{{ productDetail.name }}</h1>
        <p>{{ productDetail.description }}</p>
        <p class="mt-4"><strong>{{ productDetail.price || productDetail.sale_price || '$0.00' }}</strong></p>
      </div>
    </div>
  </div>
</template>
