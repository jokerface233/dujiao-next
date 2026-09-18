<script setup lang="ts">
useSeoMeta({
  title: 'Login',
  description: 'User login page in the Nuxt storefront migration.'
})

const email = ref('')
const password = ref('')
const redirect = computed(() => useRoute().query.redirect ? String(useRoute().query.redirect) : '/me')
const login = () => {
  const token = 'demo-token-for-nuxt-poc'
  const cookie = useCookie('user_token', { maxAge: 60 * 60 * 24 * 7 })
  cookie.value = token
  navigateTo(redirect.value)
}
</script>

<template>
  <div class="page">
    <div class="container narrow">
      <div class="card form-card">
        <h1>Login</h1>
        <label>
          <span>Email</span>
          <input v-model="email" type="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Password</span>
          <input v-model="password" type="password" placeholder="••••••••" />
        </label>
        <button class="primary-button" @click="login">Login</button>
        <NuxtLink to="/auth/register">Register</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.narrow {
  max-width: 520px;
}
.form-card {
  padding: 1.5rem;
}
label {
  display: block;
  margin-top: 1rem;
}
label span {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
input {
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
  font: inherit;
}
.primary-button {
  width: 100%;
  margin-top: 1.25rem;
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
</style>
