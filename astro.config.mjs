// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 站点正式地址（SEO：canonical / sitemap / OG 依赖此配置）
  site: 'https://onepenut.com',
  integrations: [
    sitemap({
      lastmod: new Date(),
      // 自动生成 sitemap-index.xml，包含所有静态页面
      serialize(item) {
        // 排除无需索引的页面
        if (item.url.includes('/admin/')) {
          return undefined;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
