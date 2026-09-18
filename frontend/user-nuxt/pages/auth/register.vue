<script setup lang="ts">
const auth = useAuthStore()
onMounted(() => auth.hydrate())
</script>

<template>
  <div class="page">
    <div class="container narrow">
      <div class="card form-card">
        <h1>Register</h1>
        <p>Registration stays client-only until the existing Go auth backend is migrated to cookie-based sessions.</p>
        <NuxtLink to="/auth/login">Back to login</NuxtLink>
      </div>
    </div>
  </div>
</template>
