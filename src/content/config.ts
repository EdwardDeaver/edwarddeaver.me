import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    date: z.date(),
    author: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    date: z.date(),
    author: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});
const authorCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
  pages: pagesCollection,
  portfolio: portfolioCollection,
}