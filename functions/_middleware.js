// Cloudflare Pages Middleware：规范域名 301 收敛
//
// 目的：把重复站点全部 301 到主域 https://onepenut.com，避免搜索引擎
//       把 pages.dev 和 www 当成独立站点收录，分散权重。
//
// 覆盖范围：
//   1. onepenut.pages.dev        → https://onepenut.com  （生产部署的默认域）
//   2. main.onepenut.pages.dev   → https://onepenut.com  （生产分支别名）
//   3. www.onepenut.com          → https://onepenut.com  （www 副域）
//
// 注意：其余 <branch>.onepenut.pages.dev 是各分支的预览部署，故意不跳转，
//       否则预览链接会全部失效。如需连预览一起收敛，把 PREVIEW_BRANCH_HOSTS
//       改成匹配所有后缀即可。
//
// 说明：Pages 的 functions/ 会同时作用于 pages.dev 与自定义域，
//       所以 pages.dev → 主域这种「zone 规则接不住」的跳转只能放在这里做。

const PRIMARY_HOST = 'onepenut.com';

// 需要 301 到主域的 pages.dev 主机名（精确匹配）
const PAGES_DEV_HOSTS = new Set([
  'onepenut.pages.dev',
  'main.onepenut.pages.dev',
]);

// 需要 301 到主域的其它副域主机名（精确匹配）
const ALIAS_HOSTS = new Set([`www.${PRIMARY_HOST}`]);

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();

  // 已经是主域，直接放行
  if (host === PRIMARY_HOST) {
    return next();
  }

  if (PAGES_DEV_HOSTS.has(host) || ALIAS_HOSTS.has(host)) {
    url.protocol = 'https:';
    url.hostname = PRIMARY_HOST;
    url.port = '';

    // 保留 path + query，例如 /products?cat=dog → https://onepenut.com/products?cat=dog
    return Response.redirect(url.toString(), 301);
  }

  return next();
}
