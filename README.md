# ONEPENUT

Premium pet travel products brand website — carriers, harnesses and travel
essentials for cats and dogs. B2B showcase with WhatsApp inquiry.

## Stack

- Astro
- Tailwind CSS (v4, `@theme` custom palette)
- Content Collections
- Cloudflare Pages (Git integration, auto-deploy)

## Structure

- `src/pages` - pages (home, products, product detail, about, contact)
- `src/components` - Header, Footer, Hero, ProductCard/Grid, WhatsAppButton
- `src/content/products` - product markdown data
- `src/consts.ts` - brand, contact & category configuration
- `src/styles/global.css` - Tailwind theme & brand palette

## Configuration

Edit `src/consts.ts` to update:

- `CONTACT.whatsapp` - WhatsApp number (currently a placeholder, replace with real one)
- `CONTACT.email` - contact email
- `SITE` - brand name, tagline, SEO title/description

## Development

```bash
npm install
npm run dev
```

## Deploy

Pushed to `main` on GitHub → Cloudflare Pages auto-builds & deploys
(`npm run build`, output `dist/`). No local build needed.

Live: https://onepenut.pages.dev
