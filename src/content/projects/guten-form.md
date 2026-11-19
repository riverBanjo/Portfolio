---
title: "Guten Form"
summary: "A form builder made of Gutenberg blocks: drop a form into the WordPress editor, add fields inside it, and submissions post back over AJAX. An early side project where I taught myself how the block editor works."
tags: ["React", "WordPress / Gutenberg", "JavaScript", "PHP"]
year: 2022
role: "Solo"
context: "Solo · side project"
status: "Learning project"
repo: "https://github.com/riverBanjo/guten-form"
order: 12
---

## Why I built it

Gutenberg blocks are React components that live inside the WordPress
editor. Before writing them for a living, I wanted to understand how
they really work beyond a single static block, so I built a form builder
out of them.

## How it works

- **A parent `Form` block** uses `InnerBlocks` with an allow-list, so the
  only things you can drop inside a form are form fields.
- **Field blocks** (single-line text and a submit button) declare the form as
  their `parent`, so they only show up in the inserter when you're inside a
  form. Each block can only go where it makes sense.
- **Submissions post over AJAX** to WordPress, with success and failure
  messages shown inline. The form resets afterwards, so the page never
  reloads.

## Looking back

This was 2022 and it shows: it uses jQuery for the submit and has only two
field types. But it's where I learned the block editor's model of
parent/child blocks, `edit` vs. `save`, and the build step. That's exactly
what I went on to use building custom blocks professionally at Groundworks.
If I rebuilt it today I'd use the block editor's own data APIs and
`fetch`, add validation, and store submissions properly.
