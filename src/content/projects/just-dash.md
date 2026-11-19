---
title: "Just Dash"
summary: "A forward-running dodge game, built in Unity over a weekend to learn a new engine from zero."
tags: ["Unity", "C#", "Game dev"]
year: 2026
role: "Solo"
context: "Solo · weekend project"
status: "Playable in browser"
link: "https://oh-bro-games.itch.io/just-dash"
repo: "https://github.com/riverBanjo/Just-Dash"
featured: true
order: 3
---

## Why I built it

Most of my game work is in Godot. I wanted to find out how fast I could get
productive in an engine I'd never used, so I gave myself a weekend to go
from an empty Unity project to something playable.

## What's in it

- **Physics-based movement.** The player is pushed forward by forces rather
  than having its position set directly, on a low-friction ground material
  so steering feels slidey and committed.
- **A follow camera** that tracks the player.
- **Obstacles as a prefab,** so laying out a level is drag-and-drop.
- **Collision that ends the run.** I switched the player to *continuous*
  collision detection after noticing that at high speed it could tunnel
  straight through thin obstacles. That's a good example of something that
  "works" in a quick test and breaks once it's actually played.

## What I took from it

Commit small and often, even solo: fourteen commits over two days, each one
a single playable step. And a new codebase or tool is mostly unfamiliar
vocabulary. The concepts (game loop, physics, components) carry over.

## Next

It's now [playable in the browser on itch.io](https://oh-bro-games.itch.io/just-dash).
Next up: procedurally spawned obstacles and a distance score.
