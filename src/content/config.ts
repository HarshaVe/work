import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.string(),
    role: z.string(),
    dates: z.string(),
    tags: z.array(z.string()),
    featured: z.object({
      regulated: z.boolean().default(false),
      systems: z.boolean().default(false),
      enterprise: z.boolean().default(false),
      ai: z.boolean().default(false),
    }),
    order: z.number().default(99),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { portfolio, blog };