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
    // 产品图集：支持两种形式
    // 1) 旧：{ home, studio, outdoor }（可继续用）
    // 2) 新：数组，任意张数（如主图/场景/卖点/细节/尺寸）
    gallery: z
      .union([
        z.object({
          home: z.string().optional(),
          studio: z.string().optional(),
          outdoor: z.string().optional(),
        }),
        z.array(z.string()),
      ])
      .optional(),
  }),
});

export const collections = { products };
