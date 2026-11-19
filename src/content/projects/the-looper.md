---
title: "The Looper"
summary: "A Rust CLI that turns open GitHub issues into pull requests that have already been coded, gated, reviewed, tested and accepted by a pipeline of AI agents. It never merges: the last step is always a human."
tags: ["Rust", "CLI", "GitHub", "AI agents"]
year: 2026
role: "Solo"
context: "Solo · personal tool"
status: "In use on my own repos"
order: 11
---

## The idea

I wanted to understand what a good review process actually checks, so I
tried to encode one. For each open issue, the Looper runs a pipeline in its
own git worktree:

```
issue → coder → guard → build/test/lint → static review
      → reviewer → QA → stakeholder → pull request
```

Any failed step sends its findings back to the coder. If the budget runs
out, the PR still opens, as a draft marked **[needs human]**.

## Decisions I'm happy with

- **Only the orchestrator touches git.** Agents can edit files but are
  denied `commit`, `push`, `reset`, `checkout` and `gh`. That's a hard
  boundary, not a polite request.
- **The tests aren't written by the coder.** A separate QA agent writes them
  once, and a guard reverts any change the coder makes to QA-owned files.
- **The last step asks "did we build what the ticket meant?"**, not just
  "do the tests pass?"
- **It never merges.** A human reviews every PR.

## What I learned

Most of the work was deciding what "done" means and making each check
specific enough to fail usefully. That's the same thing I value in a good
code review.
