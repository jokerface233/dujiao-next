<template>
  <div class="shell">
    <header class="topbar">
      <div class="container nav">
        <NuxtLink to="/" class="brand">Dujiao-Next</NuxtLink>
        <nav class="menu">
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/cart">Cart</NuxtLink>
          <NuxtLink to="/auth/login">Login</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="page-shell">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.shell {
  min-height: 100vh;
  background: #f6f7fb;
  color: #0f172a;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
}

.container {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #0f172a;
  text-decoration: none;
}

.menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu a {
  color: #334155;
  text-decoration: none;
  font-weight: 600;
}

.page-shell {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2rem 0 4rem;
}
</style>
