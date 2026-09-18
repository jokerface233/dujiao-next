<script setup lang="ts">
const { data: posts } = await useFetch('/api/posts')
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
        <article v-for="post in posts || []" :key="post.slug" class="card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.summary }}</p>
          <NuxtLink :to="`/blog/${post.slug}`">Read more</NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>
