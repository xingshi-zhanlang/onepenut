// 站点全局配置：品牌与联系方式
// 🔒 隐私说明：真实 WhatsApp 号码不写入前端代码/HTML，仅存于服务端函数
//    functions/whatsapp.js（或 Cloudflare 环境变量 WHATSAPP_NUMBER），
//    前端通过 /api/whatsapp?msg=... 由服务端 302 跳转，防止爬虫抓取明文号码。
export const SITE = {
  name: 'ONEPENUT',
  tagline: 'Pet Travel Essentials',
  slogan: 'Travel together, stay comfortable.',
  title: 'ONEPENUT | Premium Pet Travel Products',
  description:
    'ONEPENUT designs premium pet carriers, harnesses and travel essentials for cats and dogs. Wholesale, OEM and ODM support for global partners.',
  url: 'https://onepenut.com',
} as const;

export const CONTACT = {
  email: 'amy@onepenut.com',
  address: 'ONEPENUT Pet Products Co., Ltd. · China',
  // Web3Forms access key（公开 key，可用于客户端代码）
  web3formsKey: 'b344153d-527f-49f6-a5c8-5e25b5f4069b',
} as const;

// WhatsApp 询盘链接（预填默认消息）
// 安全实现：返回站内代理路径，由 Cloudflare Pages Function 服务端 302 跳转到 wa.me，
// 前端 HTML/JS 中不出现真实号码，避免被爬虫抓取明文手机号。
export const whatsappLink = (msg: string) =>
  `/api/whatsapp?msg=${encodeURIComponent(msg)}`;

// 导航
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/collections', label: 'Collections' },
  { href: '/factory', label: 'Factory' },
  { href: '/blog', label: 'Guides' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// 产品分类 —— 品牌 5 大核心品类
// ① 外出包/背包（品牌主打）② 胸背+牵引 ③ 伊丽莎白圈/防护 ④ 推车 ⑤ 功能配件/猫用品
export interface CategoryInfo {
  slug: string;
  /** 分类落地页路径（SEO：独立 URL，承载分类商业词） */
  path: string;
  name: string;
  description: string;
  tagline: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'carrier-bags',
    path: '/collections/pet-carrier-bags/',
    name: 'Carrier Bags & Backpacks',
    description:
      'Airline-approved pet carriers, backpacks, totes and travel bags for cats and dogs. The core of our travel collection.',
    tagline: 'Carry your companion',
    icon: 'M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 7h8M8 11h8M8 15h4',
  },
  {
    slug: 'harnesses-leashes',
    path: '/collections/pet-harnesses-leashes/',
    name: 'Harnesses & Leashes',
    description:
      'Escape-proof cat harnesses, no-pull dog harnesses, collars and bungee leashes. Comfortable, adjustable and training-friendly.',
    tagline: 'Walk with confidence',
    icon: 'M6 4h12M6 4v4m0-4V2M6 8h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8z',
  },
  {
    slug: 'recovery-collars',
    path: '/collections/pet-recovery-collars/',
    name: 'Recovery Collars',
    description:
      'Soft fabric Elizabethan collars, donut collars and cone alternatives — gentle post-surgery protection that pets actually tolerate.',
    tagline: 'Comfort after care',
    icon: 'M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zM12 6a6 6 0 0 0 0 12',
  },
  {
    slug: 'pet-strollers',
    path: '/collections/pet-strollers/',
    name: 'Pet Strollers',
    description:
      'Lightweight one-hand-fold pet strollers with sturdy aluminum frames. Built for senior pets, small dogs and travel.',
    tagline: 'Roll with ease',
    icon: 'M12 2v8m0 0l-3 3m3-3l3 3M5 15h14l-1 7H6l-1-7zM9 10h6',
  },
  {
    slug: 'accessories',
    path: '/collections/pet-accessories/',
    name: 'Accessories & Cat Gear',
    description:
      'Car seat belts, recovery suits, beds, bowls, toys and everyday essentials that complete every journey.',
    tagline: 'Thoughtful essentials',
    icon: 'M12 2l10 5-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);

// 分类落地页路径（不存在时兜底回产品总览，避免出现空链接）
export const getCategoryPath = (slug: string) =>
  getCategory(slug)?.path || '/products';

// 优势
export const ADVANTAGES = [
  {
    title: 'OEM / ODM',
    desc: 'Full custom service — materials, colors, logos, packaging and product design tailored to your brand.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'Quality Control',
    desc: 'Strict QC at every stage — material, in-production and pre-shipment inspection for consistent quality.',
    icon: 'M9 12l2 2 4-4M21 12c0 5-3.5 7.5-8.5 9.5C7.5 19.5 4 17 4 12V6l8.5-3.5L21 6v6z',
  },
  {
    title: 'Eco Materials',
    desc: 'RPET recycled fabric and durable nylon — sustainable products designed with nature in mind.',
    icon: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6',
  },
  {
    title: 'Global Logistics',
    desc: 'Reliable worldwide shipping with flexible terms. Experienced export team handles documentation end-to-end.',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  },
];

// 客户评价
export const TESTIMONIALS = [
  {
    quote:
      'ONEPENUT carriers became our best-sellers. The build quality and natural tones really stand out.',
    name: 'Sarah K.',
    role: 'Pet Retail Buyer · Germany',
  },
  {
    quote:
      'Smooth OEM process — they handled everything from sample to bulk. Lead times are reliable.',
    name: 'David L.',
    role: 'Brand Owner · USA',
  },
  {
    quote:
      'Great catalog depth across multiple lines. One-stop sourcing for our travel collection.',
    name: 'Marie T.',
    role: 'Distributor · France',
  },
];
