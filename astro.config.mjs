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
      // 不给全局 lastmod：此前用 lastmod: new Date() 会让每次构建把全部 131 个
      // URL 都标成「刚刚修改过」，等于谎报更新频率。搜索引擎对不可信的 lastmod
      // 会直接忽略，反而降低 sitemap 的可信度。宁可不写，也不要写错。
      // 若日后要写，就按内容真实的修改日期逐条生成。
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
