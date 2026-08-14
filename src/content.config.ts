import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      category: z.enum(['认知提升', '能力成长', '思维方法']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      author: z.string().default('站点作者'),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
