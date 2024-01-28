import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string().length(6),
      oldId: z.number(),
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
  type: "content",
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
