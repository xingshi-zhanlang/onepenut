// Cloudflare Pages Function：WhatsApp 安全跳转代理
// 🔒 作用：前端页面只输出 /api/whatsapp?msg=... 路径，不包含真实号码。
//    真实号码仅保存在此服务端文件中（或环境变量 WHATSAPP_NUMBER），
//    由本函数 302 重定向到 wa.me，防止爬虫从 HTML/JS 中抓取明文手机号。
//
// 修改号码：直接改下方 DEFAULT_NUMBER，或在 Cloudflare Pages 的
//    环境变量中设置 WHATSAPP_NUMBER（优先级更高，无需改代码）。
//
// 依赖：需要 @cloudflare/workers-types 或 wrangler 才能本地测试；
//    部署时 Cloudflare Pages 会自动识别 functions/ 目录，无需额外配置。

const DEFAULT_NUMBER = '8613259804291';

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const msg = url.searchParams.get('msg') || '';
  const number = (context.env && context.env.WHATSAPP_NUMBER) || DEFAULT_NUMBER;
  const target = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  return Response.redirect(target, 302);
}
