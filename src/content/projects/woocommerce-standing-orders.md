---
title: "Standing Orders for My Bible First"
summary: "A data-driven WooCommerce order panel for a curriculum publisher's quarterly products: print, digital, or a recurring standing order, rendered from product data instead of hard-coded IDs and prices."
tags: ["PHP", "WordPress", "WooCommerce", "JavaScript"]
year: 2026
role: "Developer"
context: "Freelance · Magnify Marketing Agency"
status: "Production"
order: 10
---

## The problem

My Bible First sells curriculum in quarterly sequences. Customers choose a
one-time print order, a digital copy, or a *standing order* that ships each
new quarter automatically. The original picker had product IDs, prices and
URLs hard-coded into it, so every new product meant editing code.

## What I built

A companion plugin that renders the order panel from product metadata
(sequence name, number of quarters, cycle start year), dropped onto any
grouped product page with a shortcode:

```
[mbf_order_panel formats="onetime,standing" default="standing"]
```

It works out the grouped parent from a child page, shows only the formats a
product supports, and guards the entry point of the subscription rotation
queue so bad input never reaches it.

## Why it matters

Adding a new quarterly product is now a content task, not a code change.
This is a live store with real customers, so I kept the split of
responsibilities with the existing plugin explicit and documented. The new
plugin owns the front end, and the old one keeps the admin fields and queue
logic.
