#!/usr/bin/env node
/**
 * IndexNow 批量提交
 * ---------------------------------------------------------------------------
 * 作用：把站点 URL 主动推送给参与 IndexNow 的搜索引擎，无需注册站长账号。
 *      目前包括 Bing、Yandex、Seznam、Naver 等。
 *
 * 前置条件（缺一不可，否则搜索引擎会拒绝）：
 *   1. public/<KEY>.txt 已存在且内容就是 KEY 本身；
 *   2. 该文件已随站点部署，可通过 https://onepenut.com/<KEY>.txt 访问；
 *   3. 提交的 URL 全部属于该 host。
 *
 * 用法：
 *   node scripts/indexnow.mjs                # 提交 sitemap 里的全部 URL
 *   node scripts/indexnow.mjs --limit 20     # 只提交前 20 条（调试用）
 *   node scripts/indexnow.mjs --dry-run      # 只打印，不发送
 *
 * 注意：Google 不参与 IndexNow，仍需用 Search Console 提交 sitemap。
 */
import { readFileSync, existsSync, readdirSync, writeFileSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'onepenut.com';
const SITEMAP = join(ROOT, 'dist', 'sitemap-0.xml');
const PUBLIC_DIR = join(ROOT, 'public');

// IndexNow 单次请求上限：10000 个 URL。这里保守分批。
const BATCH_SIZE = 5000;

/** 从 public/ 里找出 32 位十六进制的密钥文件名 */
function findKey() {
  if (!existsSync(PUBLIC_DIR)) {
    throw new Error(`找不到 public 目录：${PUBLIC_DIR}`);
  }
  const candidate = readdirSync(PUBLIC_DIR).find((f) => /^[a-f0-9]{32}\.txt$/i.test(f));
  if (!candidate) {
    throw new Error(
      'public/ 里没有形如 <32位十六进制>.txt 的 IndexNow 密钥文件。\n' +
        '生成方法：python3 -c "import secrets;print(secrets.token_hex(16))" > public/<输出>.txt',
    );
  }
  const key = readFileSync(join(PUBLIC_DIR, candidate), 'utf8').trim();
  return { key, fileName: candidate };
}

/** 读取构建产物里的 sitemap，取出全部 URL */
function readUrls() {
  if (!existsSync(SITEMAP)) {
    throw new Error(`找不到 ${SITEMAP}，请先运行 npm run build`);
  }
  const xml = readFileSync(SITEMAP, 'utf8');
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) throw new Error('sitemap 里没有解析到任何 URL');
  return urls;
}

/**
 * 发送 JSON POST。
 * 优先用 curl：它默认读取 HTTP(S)_PROXY 环境变量，能走本机代理；
 * 而 Node 自带 fetch（undici）在 Node 24 之前不读代理环境变量，
 * 在需要代理的网络里会直接 fetch failed。curl 不可用时再退回 fetch。
 */
function postJson(endpoint, payload) {
  const json = JSON.stringify(payload);
  const tmp = join(tmpdir(), `indexnow-${process.pid}-${Date.now()}.json`);
  writeFileSync(tmp, json, 'utf8');

  const curl = spawnSync(
    'curl',
    ['-s', '-m', '60', '-o', '-', '-w', '\n%{http_code}', '-X', 'POST', endpoint,
      '-H', 'Content-Type: application/json; charset=utf-8',
      '--data-binary', `@${tmp}`],
    { encoding: 'utf8' },
  );
  try {
    unlinkSync(tmp);
  } catch {}

  if (!curl.error && curl.stdout) {
    const parts = String(curl.stdout).trimEnd().split('\n');
    const status = Number(parts.pop());
    if (Number.isFinite(status)) {
      return Promise.resolve({ status, text: parts.join('\n').slice(0, 200) });
    }
  }

  // 回退：Node 原生 fetch
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: json,
  })
    .then(async (res) => ({ status: res.status, text: (await res.text().catch(() => '')).slice(0, 200) }))
    .catch((err) => ({ status: 0, text: String(err).slice(0, 200) }));
}

async function submit(urls, { key, fileName }) {
  const body = {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${fileName}`,
    urlList: urls,
  };

  // 多端点轮询：api.indexnow.org 是官方共享端点，但部分网络环境下 POST 会被
  // 中间设备拦掉。Bing 与 Yandex 各自也有端点，任一返回 200/202 即视为成功。
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
  ];

  const results = [];
  for (const endpoint of endpoints) {
    const r = await postJson(endpoint, body);
    results.push({ endpoint, ...r });
    if (r.status === 200 || r.status === 202) {
      return { ok: true, acceptedBy: endpoint, status: r.status, results };
    }
  }
  return { ok: false, acceptedBy: null, status: 0, results };
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const limitIdx = args.indexOf('--limit');
const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : 0;

const keyInfo = findKey();
let urls = readUrls();
if (limit > 0) urls = urls.slice(0, limit);

console.log(`密钥文件 : public/${keyInfo.fileName}`);
console.log(`密钥     : ${keyInfo.key}`);
console.log(`待提交   : ${urls.length} 个 URL`);
console.log(`提交地址 : https://api.indexnow.org/indexnow`);
console.log('');

if (dryRun) {
  urls.slice(0, 10).forEach((u) => console.log('  ' + u));
  if (urls.length > 10) console.log(`  ... 其余 ${urls.length - 10} 条`);
  console.log('\n--dry-run：未发送。');
  process.exit(0);
}

let failed = 0;
for (let i = 0; i < urls.length; i += BATCH_SIZE) {
  const batch = urls.slice(i, i + BATCH_SIZE);
  const n = Math.floor(i / BATCH_SIZE) + 1;
  const total = Math.ceil(urls.length / BATCH_SIZE);

  let result;
  for (let attempt = 1; attempt <= 2; attempt++) {
    result = await submit(batch, keyInfo);
    if (result.ok) break;
    await new Promise((r) => setTimeout(r, 2000 * attempt));
  }

  if (result.ok) {
    console.log(`[${n}/${total}] ${batch.length} 条 → HTTP ${result.status} ✔ 已接受（${result.acceptedBy}）`);
  } else {
    console.log(`[${n}/${total}] ${batch.length} 条 → ✘ 全部端点失败`);
    result.results.forEach((r) => console.log(`         ${r.endpoint} → ${r.status} ${r.text}`));
    failed++;
  }
}

console.log('');
if (failed === 0) {
  console.log('全部提交完成。Bing 通常几小时到几天内抓取；Yandex / Seznam 类似。');
} else {
  console.log(`${failed} 个批次失败。常见原因：`);
  console.log('  403 → 密钥文件未部署或内容不匹配');
  console.log('  422 → URL 与 host 不一致，或密钥不属于该 host');
  console.log('  429 → 请求过于频繁，稍后重试');
  process.exitCode = 1;
}
