# Apartment Air Guide (AEOForge Site D)

Dogfood site for AEOForge Phase 1 proof harness — **niche tag:** `indoor-air-quality`.

Standalone repo: `flammin4skin/aeoforge-site-d`

## Stack

- Next.js 16 App Router
- Tailwind CSS 4
- Content in `lib/articles.ts` (repo-first publish path)

## Local dev

```bash
pnpm install
pnpm dev
```

Opens at http://localhost:3010

## Vercel

Deployed on Vercel. Set **Production** env after first deploy:

```
NEXT_PUBLIC_SITE_URL=https://<your-project>.vercel.app
```

Redeploy so canonicals, sitemap, and Open Graph use the live URL.

## AEOForge onboarding

Run `/onboarding` on aeoforged.com with the live Vercel URL, then mint a handoff for agent work in this repo.

## Pages (6)

| Slug | Role |
|------|------|
| `/indoor-air-quality-apartments` | Pillar |
| `/what-is-co2-ppm-indoors` | Definition |
| `/what-are-vocs-home-air` | Definition |
| `/ventilate-apartment-without-losing-heat` | How-to |
| `/co2-monitor-vs-air-quality-monitor` | Comparison |
| `/where-place-air-quality-monitor-apartment` | How-to |
