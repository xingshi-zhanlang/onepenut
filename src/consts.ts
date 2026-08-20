// 站点全局配置：品牌与联系方式
// ⚠️ TODO: 替换 WhatsApp 号码为真实号码
export const SITE = {
  name: 'ONEPENUT',
  tagline: 'Pet Travel Essentials',
  slogan: 'Travel together, stay comfortable.',
  title: 'ONEPENUT | Premium Pet Travel Products',
  description:
    'ONEPENUT designs premium pet carriers, harnesses and travel essentials for cats and dogs. Wholesale, OEM and ODM support for global partners.',
  url: 'https://onepenut.pages.dev',
} as const;

// TODO: 替换为真实 WhatsApp 号码（含国家代码，如 8613800138000）
export const CONTACT = {
  whatsapp: '8613800138000', // 占位符，请替换
  whatsappDisplay: '+86 138 0013 8000',
  email: 'sales@onepenut.com',
  address: 'ONEPENUT Pet Products Co., Ltd. · China',
} as const;

// WhatsApp 询盘链接（预填默认消息）
export const whatsappLink = (msg: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

// 导航
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// 产品分类
export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  tagline: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'new-arrivals',
    name: 'New Arrivals',
    description:
      'Latest designs — fresh from the studio, ready for wholesale and OEM.',
    tagline: 'Fresh from the studio',
  },
  {
    slug: 'carrier-bags',
    name: 'Carrier Bags',
    description:
      'Airline-approved and everyday pet carriers. Backpacks, totes, sling bags and travel carriers for cats and dogs.',
    tagline: 'Carry your companion',
  },
  {
    slug: 'cat-products',
    name: 'Cat Products',
    description:
      'Cat harnesses, leashes and travel gear designed for feline comfort and safety.',
    tagline: 'Made for cats',
  },
  {
    slug: 'dog-travel',
    name: 'Dog Travel',
    description:
      'Dog harnesses, leashes and travel accessories for every adventure.',
    tagline: 'Adventure together',
  },
  {
    slug: 'functional',
    name: 'Functional Gear',
    description:
      'Pet travel bowls, strollers and essentials for every journey.',
    tagline: 'Thoughtful essentials',
  },
];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);

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
