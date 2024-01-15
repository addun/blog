import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    tags: z.array(reference("tags")),
    thumbnail: z.string(),
    repository: z.string().nullable().optional(),
  }),
});

const tagCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  tags: tagCollection,
};
