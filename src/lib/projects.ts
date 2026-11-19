import type { CollectionEntry } from "astro:content";

export function sortProjects(projects: CollectionEntry<"projects">[]) {
  return [...projects].sort(
    (a, b) => a.data.order - b.data.order || b.data.year - a.data.year,
  );
}
