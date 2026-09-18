<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: post } = await useFetch(`/api/v1/public/posts/${slug.value || 'welcome-to-dujiao-next'}`)
const postDetail = computed(() => post.value?.data || post.value || null)
useSeoMeta({
  title: () => postDetail.value?.title || 'Blog Post',
  description: () => postDetail.value?.summary || 'Blog detail page'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <NuxtLink to="/blog">← Back to blog</NuxtLink>
      <article v-if="postDetail" class="card mt-4">
        <h1>{{ postDetail.title }}</h1>
        <p>{{ postDetail.summary || postDetail.description }}</p>
        <div v-html="postDetail.content || ''" />
      </article>
    </div>
  </div>
</template>
