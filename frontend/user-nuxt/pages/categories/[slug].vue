<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: category } = await useFetch(`/api/categories/${slug.value || 'featured'}`)
useSeoMeta({
  title: () => category.value?.name || 'Category',
  description: () => category.value?.description || 'Category landing page'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <h1>{{ category?.name || 'Category' }}</h1>
      <p>{{ category?.description || 'Category listing page' }}</p>
      <NuxtLink to="/products">Browse all products</NuxtLink>
    </div>
  </div>
</template>
