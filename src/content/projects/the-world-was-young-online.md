---
title: "The World Was Young — Online"
summary: "A real-time, collaborative worldbuilding card game for 1–6 players: a shared hand-inked map, turn-based card play, and a chronicle that remembers every beat of the world's creation."
tags: ["TypeScript", "React", "Node", "PostgreSQL", "Socket.IO", "Cloudflare"]
year: 2026
role: "Full-stack engineer"
context: "Small team (3 devs) · 66 commits of mine"
status: "Live · invite alpha"
link: "https://www.theworldwasyoung.online"
featured: true
order: 1
---

## What it is

*The World Was Young* is a storytelling card game: players draw cards across
three Ages and, together, build a world: continents, peoples, ruins, wars.
The online version puts the whole table in the browser. There's a lobby,
turn-based draws, a shared parchment map you ink, stamp and label together,
a history timeline you can scrub through, and an archive of finished worlds.

We ran an alpha alongside the physical game at **Gen Con 2026**, and it's now
live behind invite codes.

**Stack:** a TypeScript monorepo. A pure shared game engine (event-sourced),
an Express + Socket.IO server on PostgreSQL (Drizzle) with Better Auth, a
Vite + React client, and a Cloudflare Worker in front of everything. Hosted
on Render.

## What I built

I joined as one of three developers and ended up owning most of the work
that took it from "runs on our laptops" to "real people can sign up and
play":

- **Moved auth and storage from SQLite to Postgres + Better Auth.** I wrote
  the migrations, provisioned Render Postgres, and made production fail fast
  on a missing `DATABASE_URL` instead of silently booting.
- **Guest and Member accounts.** Guests join a table with just a name and a
  table code. Members keep their worlds across sessions and can host. I also
  added self-serve account deletion, with a browser regression test so it
  stays working.
- **Invite codes.** I replaced one shared signup secret with per-code,
  max-use, expiring invites managed from an admin API, and added Cloudflare
  Turnstile on signup.
- **"Report a problem" → GitHub Issues.** Players can file a bug from inside
  the game and it lands in our issue tracker, so real reports reach us
  without anyone copy-pasting from email.
- **A Cloudflare "gatekeeper" Worker.** One KV flag switches the whole domain
  between `live`, `coming_soon`, `billing_paused` and `draining`. I added a
  cron watchdog that checks Render bandwidth every 30 minutes and drains new
  games before we blow through the plan. It never flips back to live on its
  own, because that should be a human decision.

## Bugs real players found

A multiplayer game with real people at real tables finds bugs you'd never
hit alone. A few I tracked down:

- **Concurrent event collisions.** Two players acting at once could both try
  to append event `#n`. I serialized appends per game, then later made
  "validate the intent" and "append the event" a single step, so nothing can
  sneak in between them.
- **Races around reopening the lobby.** Changing seats or dealing while the
  host reopened the lobby could leave the table in a state the rules don't
  allow. I closed those races and split our end-to-end test into stages so
  this flow is now covered.
- **Lost drafts.** If a save failed, shared text fields could lose what
  someone had just typed. Now every intent gets an answer, and unsaved
  drafts survive until the server confirms them.

## Caring about how it feels

Some of my favourite commits are small ones:

- *"Say why the map went dead when you scrub into history."* The map going
  read-only was correct, but it felt broken. Now it tells you why.
- *"Let the next draw take the spotlight off the last turn."*
- *"Give the path tool a finish button beside the newest anchor."*
- *"Keep the map editor off the landing page's critical path."* I also
  shipped card art at its drawn size and split cache headers by content type
  so first loads are fast.

## How we worked

Every change goes through code review (one of my commits is literally
*"Fix invite-code review findings"*). CI runs lint, typecheck, a protocol-
level e2e test that plays complete solo and two-player games, accessibility
checks with axe, and a dependency audit. I learned a lot from working inside
a codebase I didn't start, and from the bar those checks set.
