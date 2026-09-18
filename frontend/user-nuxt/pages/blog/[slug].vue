<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: post } = await useFetch(`/api/posts/${slug.value || 'hello-world'}`)
useSeoMeta({
  title: () => post.value?.title || 'Blog Post',
  description: () => post.value?.summary || 'Blog detail page'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <NuxtLink to="/blog">← Back to blog</NuxtLink>
      <article v-if="post" class="card mt-4">
        <h1>{{ post.title }}</h1>
        <p>{{ post.summary }}</p>
        <div v-html="post.content" />
      </article>
    </div>
  </div>
</template>
