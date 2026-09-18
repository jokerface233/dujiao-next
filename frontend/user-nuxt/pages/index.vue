<script setup lang="ts">
const { data: config } = await useFetch('/api/public/config')
const siteName = computed(() => config.value?.brand?.site_name || 'Dujiao-Next')
useSeoMeta({
  title: 'Home',
  description: 'Dujiao-Next storefront homepage rendered by Nuxt SSR',
  ogTitle: 'Dujiao-Next',
  ogDescription: 'Dujiao-Next storefront homepage rendered by Nuxt SSR'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <section class="hero">
        <span class="tag">Nuxt SSR POC</span>
        <h1>{{ siteName }}</h1>
        <p>
          Welcome to the Nuxt migration POC for the storefront. This page is used to validate
          SSR rendering, SEO metadata, and route mapping before replacing the Vue SPA gradually.
        </p>
        <div class="link-row">
          <NuxtLink to="/products" class="primary">Browse Products</NuxtLink>
          <NuxtLink to="/blog">Read Blog</NuxtLink>
        </div>
      </section>

      <div class="grid">
        <article class="card">
          <h3>SEO</h3>
          <p>Public pages can be rendered on the server and cached with Nuxt route rules.</p>
        </article>
        <article class="card">
          <h3>Hybrid Rendering</h3>
          <p>Authenticated and cart pages can stay client-only while public pages remain SSR.</p>
        </article>
        <article class="card">
          <h3>Go API</h3>
          <p>The Nuxt app keeps using the existing backend without forcing a full rewrite.</p>
        </article>
      </div>
    </div>
  </div>
</template>
