# Deploying Sky Nest Constructions to Vercel

The site is configured to deploy to Vercel with zero extra steps.

## One-time setup

1. Push this repo to GitHub / GitLab / Bitbucket.
2. In Vercel → **Add New… → Project** → import the repo.
3. Leave every field at the defaults. `vercel.json` already sets:
   - Install: `bun install`
   - Build: `bun run build`
   - Output: `.output/public` (Nitro Vercel preset writes the function bundle to `.vercel/output` automatically)
   - `NITRO_PRESET=vercel` (switches the server build from Cloudflare to Vercel Functions)
4. Click **Deploy**.

## Custom domain `skynestconstructions.in`

1. Vercel → Project → **Settings → Domains** → add `skynestconstructions.in` and `www.skynestconstructions.in`.
2. At your registrar, set:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`
3. Vercel auto-issues SSL once DNS propagates.
4. Set `skynestconstructions.in` as **Primary** so `www` redirects to root.

## Environment variables

None required — the site is fully static / SSR with no secrets.
If you later add server functions that need keys, add them in Vercel → Settings → Environment Variables.

## Performance defaults already enabled

- Long-term immutable cache for `/assets/*` and image/font files
- 1h browser / 1d edge cache for `sitemap.xml`
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)
- Clean URLs, no trailing slash
- Edge SSR via Nitro Vercel preset (handles concurrent traffic automatically)

## Local production check

```bash
bun install
NITRO_PRESET=vercel bun run build
```

A successful build prints `[nitro] ✔ You can now deploy .vercel/output to vercel`.

## Notes

- Do **not** add `@vercel/*` adapter packages — Nitro (already bundled by `@lovable.dev/vite-tanstack-config`) produces the Vercel output natively when `NITRO_PRESET=vercel`.
- Do **not** change `vite.config.ts`; the preset switch happens via env var only.