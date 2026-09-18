<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: category } = await usePublicApi(`/public/categories/${slug.value || 'featured'}`)
const categoryDetail = computed(() => category.value || null)
useSeoMeta({
  title: () => categoryDetail.value?.name || 'Category',
  description: () => categoryDetail.value?.description || 'Category landing page'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <h1>{{ categoryDetail?.name || 'Category' }}</h1>
      <p>{{ categoryDetail?.description || 'Category listing page' }}</p>
      <NuxtLink to="/products">Browse all products</NuxtLink>
    </div>
  </div>
</template>
