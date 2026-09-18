# Dujiao-Next Nuxt Migration POC

This folder is a progressive storefront migration starting from the public pages.

## Current status

- SSR public pages enabled for home, products, categories, blog
- Client-only routes for cart, checkout, pay, auth, personal pages
- Demo API endpoints under `server/api`
- Pinia store for cart and app config
- Middleware and route guard for protected routes

## Next steps

1. Replace demo data with actual Go API swagger contracts
2. Migrate current Vue SPA pages into `pages/` gradually
3. Replace localStorage auth with HttpOnly Cookie in the real backend
4. Move Tiptap / Google / Telegram / browser-only code into client plugins
5. Switch route rules to final SSR/CSR split once API contracts are stable

## Run locally

```bash
cd frontend/user-nuxt
npm install
npm run dev
```

## Notes

This POC is intentionally conservative:
- public pages render on the server to improve SEO
- private pages remain client-side until the auth model is upgraded
- backend remains Go-first, with Nuxt acting as a frontend layer
