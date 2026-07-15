import { defineCollection } from 'astro:content';

import { z } from 'astro/zod';

import { glob, file } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    id: z.string()
  }),
});

const blogposts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    episode: z.number().optional(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
  })
});

export const collections = {
  pages,
  blogposts,
};
