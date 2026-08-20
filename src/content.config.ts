import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    sku: z.string().optional(),
    // 产品图集：home(居家)/studio(摄影棚)/outdoor(户外)
    gallery: z
      .object({
        home: z.string().optional(),
        studio: z.string().optional(),
        outdoor: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { products };
