<script setup lang="ts">
const { data: posts } = await useFetch('/api/v1/public/posts')
const items = computed(() => {
  const raw = posts.value?.data || posts.value || []
  return Array.isArray(raw) ? raw : []
})
useSeoMeta({
  title: 'Blog',
  description: 'The newsroom and blog rendered with Nuxt server-side rendering.'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <h1>Blog</h1>
      <div class="grid">
        <article v-for="post in items" :key="post.slug || post.id" class="card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.summary || post.description }}</p>
          <NuxtLink :to="`/blog/${post.slug || post.id}`">Read more</NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>
