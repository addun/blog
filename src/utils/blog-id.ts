import type { CollectionEntry } from "astro:content";

export function getBlogPostPath(entry: CollectionEntry<"blog">): string {
  return `/blog/${entry.data.id}/${entry.slug}/`;
}
