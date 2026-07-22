# Portfolio

River Fisher's personal site, built with [Astro](https://astro.build) and Tailwind CSS, deployed on Cloudflare Pages.

## Structure

- `src/pages/` — routes (home, projects, about, contact)
- `src/content/projects/` — one markdown file per project; edit or delete the `example-*.md` files and add your own
- `src/components/`, `src/layouts/` — shared UI

## Commands

| Command           | Action                                   |
| :----------------- | :---------------------------------------- |
| `npm install`       | Install dependencies                      |
| `npm run dev`       | Start local dev server at `localhost:4321` |
| `npm run build`     | Build production site to `./dist/`        |
| `npm run preview`   | Preview the production build locally      |
| `npm run deploy:cli` | Build and deploy to Cloudflare Pages via Wrangler, bypassing GitHub |

## Deploying

This repo is connected to Cloudflare Pages via GitHub — pushing to `main` triggers an automatic build and deploy. Build command: `npm run build`, output directory `dist`, deploy command left empty (Cloudflare publishes the build output itself).

To deploy manually instead, run `npm run deploy:cli` (requires `npx wrangler login` once). Don't rename this script back to `deploy` — Cloudflare's Git build system auto-detects a script with that exact name and tries to run it as an extra deploy step, which fails because the CI-scoped token it injects isn't authorized for `wrangler pages deploy`.
