import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Reproduce the legacy collection id so URLs are unchanged by the Content Layer
// migration. Legacy precedence: an explicit `slug` frontmatter field wins;
// otherwise the file path relative to the base, with the extension stripped and
// `<dir>/index` collapsed to `<dir>`. `data` here is the unvalidated frontmatter
// (the `slug` key isn't in the schema, so it's dropped from the final entry).
const fileSlug = (entry: string) => entry.replace(/\.(md|mdx)$/, "").replace(/\/index$/, "");
const legacyId = ({ entry, data }: { entry: string; data: Record<string, unknown> }) =>
  typeof data.slug === "string" && data.slug.length > 0 ? data.slug : fileSlug(entry);

// A custom `pattern` replaces the loader's built-in defaults, including its
// exclusion of underscore-prefixed entries, so re-add it here to keep drafts
// (e.g. _pt-baby) out of the build.
const pattern = ["**/*.{md,mdx}", "!**/_*", "!**/_*/**"];

const blogCollection = defineCollection({
  loader: glob({ pattern, base: "./src/content/blog", generateId: legacyId }),
  schema: ({ image }) =>
    z.object({
      id: z.string().length(6),
      oldId: z.number().optional(),
      title: z.string(),
      description: z.string(),
      tags: z.array(reference("tags")),
      thumbnail: image(),
      date: z.coerce.date(),
      modified: z.coerce.date(),
      repository: z.string().nullable().optional(),
    }),
});

const tagCollection = defineCollection({
  loader: glob({ pattern, base: "./src/content/tags", generateId: legacyId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: image(),
    }),
});

export const collections = {
  blog: blogCollection,
  tags: tagCollection,
};
