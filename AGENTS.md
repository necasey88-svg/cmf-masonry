# CMF Masonry — agent handoff notes

This repo is the **live** cmfmasonry.com site: **Next.js (App Router) + Tailwind**,
deployed on **Vercel, auto-deploying on push to `main`** (`necasey88-svg/cmf-masonry`).
Merging to `main` **is** the deploy. Image optimization is intentionally **off**
(`images.unoptimized` in `next.config.ts`) because the Vercel Hobby team's
optimization quota is exhausted — pre-size any new images (JPEG, ~1600px) before
adding them under `public/`.

## Multi-agent sync (Codex ↔ Claude)

Codex builds in a sandbox that **cannot push to github.com**; Claude's local checkout
has push access and is the publish point. Historically Codex prototyped CMF in a
*separate* Vite/Cloudflare scaffold (`site-creator-vinext-starter`), which forced
every handoff to be a manual re-port. **As of 2026-07-23 we realigned Codex onto
this codebase** so future handoffs are ordinary cherry-picks.

Codex's CMF sandbox has a fetch-only remote pointing at Claude's checkout:
```
claude-local  ->  .../Desktop/Calmantel.com Rebuild/cmf-masonry   (fetch; push DISABLED)
```

**Codex: before starting new CMF work, adopt the live codebase** (only after saving
anything you still need from the old scaffold — a hard reset discards the working tree):
```
git fetch claude-local
git reset --hard claude-local/main   # cross-history reset is fine; run only on a clean/expendable tree
```
From then on: edit here, commit locally, and tell Claude "Codex has N commits ready."
Claude then fetches Codex's repo, cherry-picks the new commits, `npx tsc --noEmit`
+ `npm run build`, and `git push origin main` (which deploys).

## Known gotcha: named HTML entities in JSX text

Next's JSX transform decodes some named entities in JSX children (`&rarr;`, `&amp;`,
`&middot;` all work here) but not others — `&nearr;` silently renders as the literal
text `&nearr;` instead of ↗, with no build/typecheck error. Confirmed via rendered
DOM `innerHTML`, not just reading the source. Use numeric character references
(`&#8599;` for ↗, `&#8595;` for ↓, etc. — already used throughout this codebase)
instead of named entities you haven't confirmed render correctly.

## Known gotcha: host canonicalization, GSC "Redirect error", and the Vercel HTTP→HTTPS hop

The canonical host is `https://www.cmfmasonry.com`. `next.config.ts`'s `SITE_URL`
constant, `sitemap.ts`, `robots.ts`, and every page's `alternates.canonical` already
agree on this — verified 2026-09-17. The apex domain (`cmfmasonry.com`) is configured
in **Vercel Project → Domains** with `redirect: "www.cmfmasonry.com"` /
`redirectStatusCode: 308`, so `https://cmfmasonry.com/*` is a clean single-hop 308 to
the `www` host today.

Two things worth knowing before "fixing" this area again:

- **`http://` (plain) requests to the apex domain are an unavoidable 2-hop chain
  on Vercel** — `http://cmfmasonry.com/x` → 308 → `https://cmfmasonry.com/x`
  (protocol upgraded, host unchanged) → 308 → `https://www.cmfmasonry.com/x`. Vercel's
  edge always performs the same-host HTTP→HTTPS upgrade *before* evaluating the
  project-domain redirect, and Vercel has confirmed this ordering "cannot be changed
  per project" (see the Vercel community "Feature request: apply domain redirect
  before HTTP→HTTPS upgrade" thread). It is **not fixable from `next.config.ts` or
  `middleware.ts`** — those never run for a domain configured with the Vercel-level
  `redirect` property; the platform edge answers before the request reaches the app.
  Real browsers essentially never trigger this (they arrive via `https://` links, the
  sitemap, or HSTS-enforced upgrades already on the correct host), so it's a
  low-priority theoretical gap, not a live user-facing bug.
- Google Search Console flagged `https://cmfmasonry.com/{about,estimate,commercial,gallery}`
  as **"Redirect error"** (vs. the benign, expected "Page with redirect" status other
  apex URLs get) as of Sep 2026. Live testing found every one of those exact URLs
  (and their siblings) resolves as a clean single-hop 308 today. The domain-level
  redirect was only wired up 2026-07-30 and the app's own canonical-host fix landed
  2026-08-19 (`d61e7af`) — GSC's crawl data almost certainly predates one or both of
  those fixes. If this resurfaces, re-run the curl checks above (`curl -sSL -D -`
  against the exact flagged URLs) before assuming there's a live bug; if they're
  already clean, use GSC's "Validate Fix" / resubmit-sitemap flow rather than
  re-touching redirect config that already matches Vercel's own recommended setup
  (`www` primary + apex redirect domain).
- `cmf-masonry.vercel.app` (the stable Vercel-provided alias) had **no host
  redirect at all** and was serving every page with a 200 — a real duplicate-host
  bug, fixed in `next.config.ts` via a `redirects()` rule matching that exact
  hostname. Ephemeral preview URLs (`cmf-masonry-<hash>-*.vercel.app`,
  `cmf-masonry-git-<branch>-*.vercel.app`) don't match that exact host, so PR
  previews are unaffected.
