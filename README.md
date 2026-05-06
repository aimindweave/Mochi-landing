# Mochi

A tiny console for AI pets that actually live with you.

**Live**: https://aimindweave.github.io/Mochi/

**Stage**: Pre-launch · Kickstarter Q4 2026 · Ships Q1 2027 · Early-bird $399 (retail $449) · No subscription, ever.

---

## What this is

Single-page landing page for **Mochi** — a $399 desktop console with three AI pet companions (Cap, Otto, and a third). Frontier-AI–powered, local-first by default, with a physical kill switch for full network isolation.

- **3 pet companions**: distinct personalities living in a tiny world inside the console — they remember you, create things, and develop relationships with each other over time.
- **Hybrid AI**: local model handles everyday interactions; frontier model (Claude/GPT-level) powers weekly letters, original artwork, and long-term memory synthesis.
- **Privacy**: physical kill switch on the back · all data local by default · no subscription, no in-app purchases.
- **Hardware**: palm-sized · 5″ color screen · USB-C · matte ABS · 5 colorways (Oat, Sage, Blush, Fog, Plum).

## Run locally

```bash
pnpm install
pnpm dev      # vite dev server on http://localhost:3000
```

Build:

```bash
pnpm build    # output → dist/public
pnpm preview  # serve the build locally
```

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS v4**
- **wouter** (lightweight client routing)
- **framer-motion** (scroll/in-view animations)
- **shadcn/ui** primitives (built on Radix)

## Deployment

GitHub Pages via Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). Every push to `main` builds and deploys automatically.

Two pieces of plumbing keep paths working without manual updates:

- **Vite `base`** is resolved from `process.env.GITHUB_REPOSITORY` at build time (so renaming the repo, or moving to a custom domain, doesn't break asset paths).
- **wouter `Router`** uses `import.meta.env.BASE_URL` so client-side routes match the deployment prefix.

## Want to help?

Several integrations are stubbed and need real implementation before paid traffic. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full open-task list, including:

- 📧 **Real waitlist backend** (form currently only sets local React state)
- 💳 **Pre-order / Kickstarter integration** (Stripe pre-order or KS link-out)
- 🧹 **Strip Manus runtime plugins** from production build
- 📷 **Real product photography** (current images are renders)
- 🌐 **Custom domain** (currently on `aimindweave.github.io/Mochi/`)
- 📊 **Analytics wiring** (umami placeholder is unresolved in the deployed HTML)

## Brand notes

"Mochi" is the brand. The repo's `ideas.md` is design-direction brainstorm from when this was codenamed "Petbox" — keep it for context, but the live LP reflects the chosen direction.

## Sister project

- [aimindweave/Mira](https://github.com/aimindweave/Mira) — Memory Frame landing page (Mira is a separate brand by the same maker).
