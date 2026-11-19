---
title: "JES Work — WordPress to Next.js"
summary: "Hired to build custom React Gutenberg blocks for JES Foundation Repair's lead-generating site, then helped move it from WordPress to Next.js and migrate its analytics to Cloudflare Zaraz."
tags: ["Next.js", "React", "WordPress / Gutenberg", "TypeScript", "Cloudflare Zaraz", "Playwright"]
year: 2026
role: "Developer"
context: "Groundworks · 4 years on the team"
status: "Production"
link: "https://jeswork.com"
featured: true
order: 2
---

## Context

I spent four years at Groundworks, the home-services company behind JES
Foundation Repair. jeswork.com is where JES's customers find them and
request inspections, so it brings in real leads every day. It was
originally a WordPress site.

I was hired to build **custom Gutenberg blocks in React**: the components
the marketing team used to assemble pages in the WordPress editor. That's
where I learned React in production, with people relying on my components
to do their jobs every day.

## Moving from WordPress to Next.js

Starting in late 2025, I helped move jeswork.com off WordPress onto a
**Next.js and React** application. That meant rebuilding pages and
components in the new stack while the old site kept serving customers.
Having built many of the original blocks, I knew what each one had to do
and how the marketing team actually used them.

We started the Next.js codebase from scratch, so the team set its own
conventions as we went: how components are structured, how pages are
built, and how changes get reviewed. Being there from the first commit
taught me why those decisions matter more than any single feature.

A migration like this can't break the things people rely on: forms, tracking
and the pages that bring in search traffic. Leads that quietly stop coming
in are the worst kind of bug, because nobody reports them.

## Analytics: making "it works" checkable

As part of the move, I helped **migrate analytics from Google Tag Manager to
Cloudflare Zaraz**, covering GA4, Meta and Google Ads events and consent mode.

Analytics migrations fail quietly: the site looks fine while conversions stop
being recorded. So I wrote a small Node + Playwright tool that checks a live
deployment against a checklist. It covers whether Zaraz is enabled, whether
the GTM migration is complete, whether consent mode is right, and whether page
views and custom events fire, plus duplicate firing and UTM propagation.

The checks that can't be automated (GA4 DebugView, Meta Events Manager, call
tracking attribution) are marked `manual-required` in the report, with
instructions on exactly what to look for, instead of being skipped silently.
If no Zaraz traffic is observed, the report treats that as a finding, not a
pass.

The bulk-update script refuses to run unless Zaraz is in preview mode, so
changes land as a draft that a person publishes.
