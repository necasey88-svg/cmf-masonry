# CMF Masonry

Standalone marketing site for **CMF Masonry** — the masonry division of California Mantel &
Fireplace, split into its own brand/domain (`cmfmasonry.com`) so masonry stops competing for
attention with mantels and fireplaces on calmantel.com.

Sibling project to `../calmantel` and `../hearthline-supply` in this workspace. Intentionally a
separate codebase/repo/deploy, not a subpath of calmantel.com.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind v4 (CSS-first `@theme inline`, no
`tailwind.config.js`). `dev`/`build` are pinned to `--webpack` (matching both sibling projects in
this workspace — Turbopack is intentionally not used here).

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in GA4 ID, CallRail company ID, Web3Forms access key
npm run dev
```

Before committing: `npx tsc --noEmit` then `npx next build --webpack` (no CI is configured in this
workspace — a broken build is only caught by whoever builds locally, same as the other two
projects).

## Content ported from calmantel

- Services/benefits copy, supplier list, and the 14 real project photos (`public/gallery/`) were
  ported from `calmantel/src/app/masonry-new-page` and `calmantel/public/masonry-gallery` — same
  captions/alt text as the source (`src/lib/business-data.ts`), not fabricated.
- Supplier logos ported from `calmantel/public/brands/` (`public/brands/`).
- Contact info (Anaheim showroom, phone, hours) matches `calmantel`'s only masonry-capable
  location.

## Analytics — deliberately separate from calmantel

This site gets its **own** GA4 property (`G-DDNSCKQ3QC`, "CMF Masonry" property under the
"Claude - calmantel.com" GA4 account) and its **own** phone number, `(714) 886-3179`
(`BUSINESS.phone` in `src/lib/business-data.ts`) so paid/organic performance is attributable to
CMF Masonry, not blended into calmantel's numbers.

CallRail turned out simpler than originally assumed: the business runs a single CallRail
Company (`736627927`, same one calmantel.com's swap script already uses) with several tracking
numbers inside it — there's no separate "masonry Company" to create. The masonry-dedicated
number lives in that same company's "Google Ads Assets - Masonry" pool. Rather than fight
CallRail's dynamic-swap source-matching rules to make cmfmasonry.com reliably show the right
number, we just hardcoded that tracking number site-wide — simpler and no risk of showing the
wrong number to a visitor. `NEXT_PUBLIC_CALLRAIL_COMPANY_ID` in `.env.example` is left as an
optional future upgrade if per-channel dynamic swapping is wanted later.

Web3Forms access key is set (`WEB3FORMS_ACCESS_KEY`, its own form named "CMF Masonry - Estimate
Request", separate from calmantel's/hearthline's forms).

## Brand system (ported from a Codex prototype)

The logo mark (`src/components/BrandMark.tsx`, `public/favicon.svg`), the bone/clay/charcoal
palette and Georgia-serif typography in `globals.css`, the homepage hero/manifesto/services
treatment, and `public/og.png` were manually ported from a brand redesign Codex built in a
**separate, structurally-incompatible checkout** — a Vite/Cloudflare Workers "OpenAI Apps"
scaffold at `C:\Users\NatalieCasey\Documents\Codex\2026-07-22\cmf`, commit `cc4e7c9` ("Build CMF
Masonry brand and website"). It is not a git remote of this repo and can't be cherry-picked
directly; useful pieces were re-implemented by hand into this Next.js codebase instead.

That prototype also published itself to its own Cloudflare-based hosting with its own DNS
records — **do not point `cmfmasonry.com`'s DNS at that hosting.** This Next.js/Vercel
deployment is the single canonical site. The prototype's `mailto:info@cmfmasonry.com` contact
link and its own copies of the project photos were intentionally **not** ported — this site
keeps the real Web3Forms `/estimate` flow and the original gallery files with verified
captions/categorization.

## Outstanding

- No masonry photography exists beyond the 14 ported gallery images. Don't pad with stock/AI
  imagery — ask for real photos as projects are completed.

## Domain & deploy — status

- Domain `cmfmasonry.com` is registered via **Cloudflare Registrar** (DNS also lives at
  Cloudflare). Two CNAME records point it at Vercel (`@` and `www` → the Vercel-provided
  `*.vercel-dns-*.com` target), both set to **DNS only** (not proxied).
- GitHub: `necasey88-svg/cmf-masonry`. Vercel project imported from that repo, same manual
  pattern as `calmantel-website`/`manteldistribution` — no CI pipeline.
- `next.config.ts` sets `images.unoptimized = true` — the Vercel account's (Hobby-plan) shared
  Image Optimization transformation quota was already exhausted account-wide, which made every
  `<Image>` 402 on this project until optimization was disabled. All images here are already
  reasonably-sized static files, so this has no real downside. If `calmantel-website` or
  `manteldistribution` ever show broken images, this same quota is the first thing to check.
