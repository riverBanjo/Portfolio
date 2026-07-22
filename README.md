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
| `npm run deploy`    | Build and deploy to Cloudflare Pages via Wrangler |

## Deploying

This repo is connected to Cloudflare Pages via GitHub — pushing to `main` triggers an automatic build and deploy. Build command: `npm run build`. Output directory: `dist`.

To deploy manually instead, run `npm run deploy` (requires `npx wrangler login` once).
