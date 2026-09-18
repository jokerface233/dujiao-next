<script setup lang="ts">
const auth = useAuthStore()
onMounted(() => auth.hydrate())
</script>

<template>
  <div class="page">
    <div class="container narrow">
      <div class="card form-card">
        <h1>Payment</h1>
        <p>Payment flow stays client-only while the checkout flow is finalized around your current Go backend.</p>
      </div>
    </div>
  </div>
</template>
