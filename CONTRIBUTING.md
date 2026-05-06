# Contributing to Mochi

The site is a static React/Vite SPA on GitHub Pages — no backend currently runs in production. Several integrations are stubbed and need real implementation before launch.

If you can pick up any of the open tasks below, **open a GitHub issue first** to align on approach. Each task usually has 2–3 reasonable implementations.

---

## 🟢 Open task #1 — Real waitlist backend (currently stubbed)

### Current state
- The "Join waitlist" form in Hero and Final CTA sections only calls `setSubmitted(true)` in local React state — the email is never persisted or sent anywhere ([`Home.tsx`](client/src/pages/Home.tsx) — search for `useState("")` near `email`).
- `useWaitlistCount` ([`Home.tsx:34`](client/src/pages/Home.tsx#L34)) is a simulated incrementing counter, not real signups.

### What's needed
1. Pick an ESP — recommend **Loops** or **Resend** (both have generous free tiers and simple list management). Beehiiv / ConvertKit also work if you want broadcast email later.
2. Replace form submit handler to POST to ESP via API (probably wrapped in a serverless function for secret hygiene).
3. Replace `useWaitlistCount` with either:
   - real audience size from ESP API
   - or persisted count from a tiny DB (Cloudflare D1, Supabase, Upstash KV)

### Suggested architecture (lightweight)
- Vercel or Netlify Function — single endpoint `/api/waitlist`
- Function takes `{ email }`, calls ESP, returns updated count
- API keys in env vars, never committed

### Secrets needed
- `ESP_API_KEY`
- `ESP_PROVIDER` (e.g. `loops` / `resend`)

---

## 🟢 Open task #2 — Pre-order / Kickstarter integration

### Current state
- "Ships Q4 2026" copy is in Hero
- No purchase action on the page right now
- LP positions Kickstarter as the launch channel

### What's needed
- **Low effort**: link out to the Kickstarter page when it goes live (just a button URL update).
- **Higher effort**: standalone Stripe pre-order to lock in the $399 early-bird price *before* Kickstarter, reducing dependency on KS launch timing.

If Stripe is the path: same architecture as Mira's reservation system — see [aimindweave/Mira CONTRIBUTING.md](https://github.com/aimindweave/Mira/blob/main/CONTRIBUTING.md) §1 for a worked example.

### Secrets needed (Stripe path)
- `STRIPE_PUBLISHABLE_KEY` (frontend, but read from env)
- `STRIPE_SECRET_KEY` (backend only)
- `STRIPE_WEBHOOK_SECRET` (backend only)

---

## 🟢 Open task #3 — Strip Manus runtime plugins from production build

### Current state
[`vite.config.ts`](vite.config.ts) loads three Manus-only plugins:
- `vitePluginManusRuntime` (auth/runtime helpers)
- `vitePluginManusDebugCollector` (writes browser logs to `.manus-logs/`)
- `vitePluginStorageProxy` (proxies `/manus-storage/*` requests during dev)

These were added by Manus's authoring environment. They're dev-only and bloat the production bundle.

### What's needed
- Convert `defineConfig` to the function form: `defineConfig(({ command, mode }) => ({...}))`
- Conditionally include those plugins only when `mode === 'development'`
- Run `pnpm build` and confirm `dist/public/` still works
- Optional: also remove `vite-plugin-manus-runtime` and `vite-plugin-manus-debug-collector` from `package.json` if they're only ever needed in Manus's IDE

---

## 🟢 Open task #4 — `server/` directory: decide and act

### Current state
- [`server/index.ts`](server/index.ts) is an Express server that statically serves `dist/public`.
- It's only used in `pnpm start` (a production-like local flow).
- GitHub Pages doesn't run it.
- If/when the waitlist backend lands (task #1), that should be a serverless function — not Express.

### What's needed
- **Option A**: delete `server/` entirely + remove the esbuild bundling step from `package.json#scripts.build` + remove `pnpm start` script.
- **Option B**: keep it for local prod testing and add a `# Dev only` comment at the top of `server/index.ts`.

Pick one based on whether you intend to ever run a Node server in front of this. (Probably not, since GH Pages is the deployment target.)

---

## 🟢 Open task #5 — Real product photography

### Current state
All product images come from a Manus-hosted Cloudfront URL (see `IMAGES` const in [`Home.tsx:5–13`](client/src/pages/Home.tsx#L5)). These are AI renders, not real product shots.

For pre-launch / waitlist they're fine. **For paid traffic, replace with real photography.**

### What's needed
- Real product photos in 5 colorways: Oat, Sage, Blush, Fog, Plum
- 3 angles per colorway: front, three-quarter angle, back panel detail
- Lifestyle: console on a wooden desk in natural light, with hands interacting
- Replace URLs in the `IMAGES` const

### Photography brief
- Aesthetic reference: Playdate (Panic), Teenage Engineering OP-1
- Lighting: warm, directional, natural
- Background: warm cream / wood / matte ceramic surfaces

---

## 🟢 Open task #6 — Custom domain

### Current state
- LP is on `aimindweave.github.io/Mochi/`
- No `CNAME` file at repo root
- No DNS configured

### What's needed
1. Buy domain (candidates: `mochi.computer`, `mochi.studio`, `getmochi.com` — owner picks)
2. Add a `CNAME` file at the repo root containing just the domain (e.g. `mochi.computer`)
3. In your DNS provider:
   - Point apex `@` → GitHub Pages IPs (185.199.108.153 / 109 / 110 / 111)
   - Or point `www` → `aimindweave.github.io.` via CNAME
4. In GitHub repo Settings → Pages → Custom domain — paste the domain, click Save
5. Wait ~10 min for Let's Encrypt cert; flip on "Enforce HTTPS"

Once the custom domain is live, `import.meta.env.BASE_URL` becomes `/` — both Vite and wouter pick that up automatically with no code change needed.

---

## 🟢 Open task #7 — Analytics + Pixel slots

### Current state
- Deployed HTML contains an unresolved env var: `src="%VITE_ANALYTICS_ENDPOINT%/umami"` — Vite couldn't replace it because the env var isn't set at build time.
- No Meta Pixel / TikTok Pixel / GA4 wired up.

### What's needed
1. **Decide analytics tool**:
   - **Umami** (privacy-friendly, self-hosted or cloud) — matches the brand's "local-first, no tracking by default" position
   - **Plausible** (privacy-friendly, hosted)
   - **GA4** (free, but heavier and ad-tech aligned)
2. Set `VITE_ANALYTICS_ENDPOINT` as a GitHub Actions secret + reference it in `deploy.yml` env block
3. For paid traffic later: add Meta Pixel + TikTok Pixel hooks (placeholder slots), fire `Lead` event on form submit

### Honesty constraint
The brand is "privacy + local-first." Don't add tracking that conflicts — e.g. no fingerprinting, no third-party session-replay tools.

---

## How to work

1. **Open an issue first** describing what you want to do.
2. Fork + branch (e.g. `feat/waitlist-backend`).
3. Test locally:
   ```
   pnpm install
   pnpm dev
   # open http://localhost:3000
   ```
4. Send a PR to `main`. The Actions workflow will auto-deploy on merge.

## Honesty constraints — don't undo these

- ❌ No fake testimonials. Pre-launch — there are none yet.
- ❌ Don't promise specific dates beyond what the LP currently says ("Q4 2026 Kickstarter, Q1 2027 ships").
- ❌ Don't add subscription pricing, in-app purchases, or "premium tier" hooks. The brand commitment is `$399 one-time`.
- ❌ Don't ship tracking that contradicts the privacy stance (no fingerprinting, no session replay, no third-party data sharing without disclosure).
- ❌ Never commit secrets. Always use env vars + a `.env.example`.

## Need to reach Shayla?

Open a GitHub issue. For sensitive coordination (payment processor accounts, Kickstarter, hardware partners), message her directly via her main channel (not in the public repo).
