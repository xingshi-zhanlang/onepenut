# ONEPENUT

Premium pet travel products for cats and dogs — carrier bags & backpacks,
harnesses & leashes, recovery collars, strollers, accessories, and
home-protection lines (pee pads, carpet tiles, washable absorbent mats).
**B2B showcase site**: no online payments; all inquiries go through WhatsApp.

Live: https://onepenut.com

## Stack

- **Astro 5** — static output (`dist/`), ~154 pages
- **Tailwind CSS 4** — brand palette via `@theme` in `src/styles/global.css`
  (cream / milk-tea / caramel / olive / dark-brown; Fraunces display + Inter body)
- **Content Collections** — 123 products + 3 blog guides, all in markdown
- **Cloudflare Pages** — Git integration, auto-deploy on push to `main`;
  exactly one Pages Function (`functions/api/whatsapp.js`) as WhatsApp proxy
- npm (`package-lock.json`)

## Structure

- `src/consts.ts` — single source of truth: `SITE`, `CONTACT`, `NAV_LINKS`,
  `B2B_LINKS`, 8 `CATEGORIES`, advantages, testimonials. Change brand/contact
  config **here only**, never in components.
- `src/content/products/` — one markdown file per product (frontmatter:
  title / image / category / sku / seo fields / keywords / gallery array;
  body: fixed spec sections). Schema in `src/content.config.ts`.
- `src/content/blog/` — buying guides (date fields feed Article schema).
- `src/data/` — `category-content.ts` (category landing copy) & `trade.ts`
  (trade terms, per-category override supported).
- `src/pages/` — home, `products/[slug]`, `collections/[category]`,
  `blog/[slug]`, plus B2B landing cluster: wholesale, moq-and-sampling,
  oem-odm, certifications, for-distributors, pet-pee-pad-manufacturer,
  pet-products-supplier-australia, senior-pet-care, 3 carrier sub-category
  pages, quote, about, factory, contact.
- `src/components/` — Header, Footer, Hero, CtaBand, ProductCard,
  ProductGrid, TradeTerms, FaqList, WhatsAppButton.
- `functions/api/whatsapp.js` — WhatsApp redirect proxy (see below).
- `public/_headers` — cache policy (hashed `/_astro/*` immutable 1y;
  images 7d). `public/_redirects` — 301s for slug/image normalization.
- `public/llms.txt`, `public/robots.txt` — crawler/GEO surface; sitemap is
  generated at build (no fake lastmod, `/admin/` excluded defensively).
- `scripts/indexnow.mjs` — IndexNow ping. `scripts/optimize-products.py` —
  batch image optimizer (Python 3 + Pillow).

## Configuration

**WhatsApp number** — never appears in frontend code. Pages link to
`/api/whatsapp?msg=...`; the Pages Function 302-redirects to `wa.me`.
Set the number via the `WHATSAPP_NUMBER` environment variable in Cloudflare
Pages (production **and** preview), or as `DEFAULT_NUMBER` in the function.
Recommended: env var only, keep the code default empty.

**Web3Forms** — public access key lives in `CONTACT.web3formsKey`.

## Local development

```bash
npm install
npm run dev
```

Before pushing: `npm run check` (type check) and `npm run build`.
CI runs both on every push / pull request.

## Deploy

Push to `main` → Cloudflare Pages auto-builds (`npm run build`) and deploys.
No manual steps, no local build required.

## Content discipline (keep enforcing)

- No airline/IATA certification claims — "airline approved" is explained
  with cabin-size facts, not asserted as certification
- No medical / therapeutic / "waterproof" claims; give measured values
  (e.g. hydrostatic head) instead
- `llms.txt` and structured data must stay in sync with real site facts —
  no invented data
