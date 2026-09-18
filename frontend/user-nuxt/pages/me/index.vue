<script setup lang="ts">
const auth = useAuthStore()
const cart = useCartStore()

onMounted(() => {
  auth.hydrate()
  cart.load()
})

const isAuthed = computed(() => auth.isAuthenticated)
</script>

<template>
  <div class="page">
    <div class="container">
      <h1>My Account</h1>
      <div v-if="isAuthed" class="card mt-4">
        <p>Welcome, {{ auth.user?.name || auth.user?.email || 'member' }}.</p>
        <button class="button-link" @click="auth.logout()">Logout</button>
      </div>
      <div v-else class="card mt-4">
        <p>Protected account screens stay client-side to avoid SSR leakage of private content.</p>
        <NuxtLink to="/auth/login">Login</NuxtLink>
      </div>
    </div>
  </div>
</template>
