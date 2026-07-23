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
