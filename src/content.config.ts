import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    year: z.number(),
    role: z.string().optional(),
    /** Solo, team, or client work — shown so readers know what was mine. */
    context: z.string().optional(),
    /** Short state of the project, e.g. "Live · invite alpha". */
    status: z.string().optional(),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    /** Lower numbers sort first; ties fall back to year. */
    order: z.number().default(100),
    image: z.string().optional(),
  }),
});

export const collections = { projects };
