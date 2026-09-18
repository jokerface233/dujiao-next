<template>
  <div class="page">
    <div class="container">
      <h1>My Account</h1>
      <p>Protected account screens stay client-side to avoid SSR leakage of private content.</p>
      <NuxtLink to="/auth/login">Login</NuxtLink>
    </div>
  </div>
</template>
