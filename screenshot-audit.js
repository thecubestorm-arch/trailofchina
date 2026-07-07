#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');

const BASE_URL = 'https://www.trailofchina.com';
const OUTPUT_DIR = '/data/.openclaw/workspace/trailofchina/navbar-screenshots';
const REPORT_PATH = '/data/.openclaw/workspace/trailofchina/navbar-screenshot-report.md';

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 375, height: 812 };
const NAVBAR_HEIGHT = 200;
const TIMEOUT_MS = 45000;

const STATIC_PATHS = [
  '/',
  '/about',
  '/imprint',
  '/privacy',
  '/cookie-policy',
  '/blog',
  '/china-basics',
  '/china-basics/how-to-get-internet',
  '/china-basics/how-to-get-internet/airalo-esim',
  '/china-basics/how-to-get-internet/esim',
  '/china-basics/how-to-get-internet/holafly-esim',
  '/china-basics/how-to-get-internet/physical-sim',
  '/china-basics/what-apps-to-use',
  '/china-basics/what-apps-to-use/alipay',
  '/china-basics/what-apps-to-use/didi',
  '/china-basics/what-apps-to-use/maps',
  '/china-basics/what-apps-to-use/payment',
  '/china-basics/what-apps-to-use/travel',
  '/china-basics/what-apps-to-use/trip-com',
  '/china-basics/what-apps-to-use/vpn',
  '/china-basics/how-to-get-around/didi',
  '/china-basics/how-to-get-around/metro-subway',
  '/china-basics/how-to-get-around/taxi',
  '/china-basics/how-to-get-around/train',
  '/china-basics/best-time-to-visit',
  '/destinations',
  '/destinations/beijing',
  '/destinations/chengdu',
  '/destinations/chongqing',
  '/destinations/guangzhou',
  '/destinations/shanghai',
  '/destinations/shenzhen',
  '/destinations/xian',
  '/destinations/beijing/what-to-do/forbidden-city',
  '/destinations/beijing/what-to-do/great-wall',
  '/destinations/beijing/what-to-do/summer-palace',
  '/destinations/beijing/what-to-do/temple-of-heaven',
  '/destinations/beijing/what-to-do/hutong',
  '/destinations/shanghai/what-to-do/bund',
  '/destinations/shanghai/what-to-do/shanghai-tower',
  '/destinations/shanghai/what-to-do/yu-garden',
  '/destinations/shanghai/what-to-do/french-concession',
  '/destinations/shanghai/what-to-do/tianzifang',
  '/destinations/xian/what-to-do/terracotta-warriors',
  '/destinations/xian/what-to-do/city-wall',
  '/destinations/xian/what-to-do/big-wild-goose-pagoda',
  '/destinations/xian/what-to-do/muslim-quarter',
  '/destinations/xian/what-to-do/bell-tower',
  '/destinations/chengdu/what-to-do/giant-panda-base',
  '/destinations/chengdu/what-to-do/jinli-ancient-street',
  '/destinations/chengdu/what-to-do/wuhou-shrine',
  '/destinations/chengdu/what-to-do/peoples-park-teahouse',
  '/destinations/chengdu/what-to-do/sichuan-opera',
  '/destinations/chongqing/what-to-do/hongya-cave',
  '/destinations/chongqing/what-to-do/liziba-monorail',
  '/destinations/chongqing/what-to-do/three-gorges-museum',
  '/destinations/chongqing/what-to-do/ciqikou',
  '/destinations/chongqing/what-to-do/eling-park',
  '/destinations/guangzhou/what-to-do/canton-tower',
  '/destinations/guangzhou/what-to-do/shamian-island',
  '/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall',
  '/destinations/guangzhou/what-to-do/beijing-road',
  '/destinations/guangzhou/what-to-do/sacred-heart-cathedral',
  '/destinations/shenzhen/what-to-do/ping-an-finance-centre',
  '/destinations/shenzhen/what-to-do/window-of-the-world',
  '/destinations/shenzhen/what-to-do/oct-loft',
  '/destinations/shenzhen/what-to-do/huaqiangbei',
  '/destinations/shenzhen/what-to-do/dafen-oil-painting-village',
  '/plan-your-trip',
];

function normalizePath(inputPath) {
  if (!inputPath) return '/';
  const pathname = inputPath.split('?')[0].split('#')[0];
  if (pathname === '' || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function slugFromPath(pagePath) {
  if (pagePath === '/') return 'home';
  return pagePath.replace(/^\//, '').replace(/\//g, '--');
}

function asPageUrl(pagePath) {
  return `${BASE_URL}${pagePath}`;
}

function pickBlogPaths(candidates) {
  let postPath = null;
  let categoryPath = null;

  for (const p of candidates) {
    if (!p.startsWith('/blog/')) continue;
    if (!categoryPath && (p.startsWith('/blog/category/') || p.includes('/category/'))) {
      categoryPath = p;
      continue;
    }
    if (!postPath && !p.startsWith('/blog/category/')) {
      postPath = p;
    }
    if (postPath && categoryPath) break;
  }

  return { postPath, categoryPath };
}

async function createEngine() {
  try {
    const { chromium, devices } = require('playwright');
    const browser = await chromium.launch({ headless: true });
    return { kind: 'playwright', browser, devices };
  } catch (playwrightError) {
    try {
      const chromium = require('chromium');
      const { chromium: playwrightChromium, devices } = require('playwright-core');
      const browser = await playwrightChromium.launch({
        headless: true,
        executablePath: chromium.path,
        args: chromium.args || [],
      });
      return { kind: 'playwright-core', browser, devices };
    } catch (coreError) {
      const puppeteer = require('puppeteer');
      const browser = await puppeteer.launch({ headless: true });
      return { kind: 'puppeteer', browser, devices: null };
    }
  }
}

async function discoverBlogPaths(contextOrBrowser, engineKind) {
  const url = asPageUrl('/blog');
  const allPaths = new Set();

  if (engineKind === 'puppeteer') {
    const page = await contextOrBrowser.newPage();
    try {
      await page.setViewport(DESKTOP);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: TIMEOUT_MS });
      const hrefs = await page.$$eval('a[href]', (anchors) => anchors.map((a) => a.href));
      for (const href of hrefs) {
        try {
          const parsed = new URL(href);
          if (parsed.origin !== 'https://www.trailofchina.com') continue;
          allPaths.add(normalizePath(parsed.pathname));
        } catch {
          // Ignore invalid URL.
        }
      }
    } finally {
      await page.close();
    }
  } else {
    const page = await contextOrBrowser.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: TIMEOUT_MS });
      const hrefs = await page.$$eval('a[href]', (anchors) => anchors.map((a) => a.href));
      for (const href of hrefs) {
        try {
          const parsed = new URL(href);
          if (parsed.origin !== 'https://www.trailofchina.com') continue;
          allPaths.add(normalizePath(parsed.pathname));
        } catch {
          // Ignore invalid URL.
        }
      }
    } finally {
      await page.close();
    }
  }

  const { postPath, categoryPath } = pickBlogPaths([...allPaths]);
  return { postPath, categoryPath, candidateCount: allPaths.size };
}

async function captureWithPlaywright(desktopContext, mobileContext, pagePath, outputDir) {
  const slug = slugFromPath(pagePath);
  const desktopFile = `${slug}-desktop.png`;
  const mobileFile = `${slug}-mobile.png`;
  const targetUrl = asPageUrl(pagePath);

  const desktopPage = await desktopContext.newPage();
  const mobilePage = await mobileContext.newPage();

  try {
    await desktopPage.goto(targetUrl, { waitUntil: 'networkidle', timeout: TIMEOUT_MS });
    await desktopPage.screenshot({
      path: path.join(outputDir, desktopFile),
      clip: { x: 0, y: 0, width: DESKTOP.width, height: NAVBAR_HEIGHT },
    });

    await mobilePage.goto(targetUrl, { waitUntil: 'networkidle', timeout: TIMEOUT_MS });
    await mobilePage.screenshot({
      path: path.join(outputDir, mobileFile),
      clip: { x: 0, y: 0, width: MOBILE.width, height: NAVBAR_HEIGHT },
    });

    return { ok: true, desktopFile, mobileFile, error: '' };
  } catch (error) {
    return {
      ok: false,
      desktopFile,
      mobileFile,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    await Promise.all([desktopPage.close(), mobilePage.close()]);
  }
}

async function captureWithPuppeteer(browser, pagePath, outputDir) {
  const slug = slugFromPath(pagePath);
  const desktopFile = `${slug}-desktop.png`;
  const mobileFile = `${slug}-mobile.png`;
  const targetUrl = asPageUrl(pagePath);

  const desktopPage = await browser.newPage();
  const mobilePage = await browser.newPage();

  try {
    await desktopPage.setViewport(DESKTOP);
    await desktopPage.goto(targetUrl, { waitUntil: 'networkidle0', timeout: TIMEOUT_MS });
    await desktopPage.screenshot({
      path: path.join(outputDir, desktopFile),
      clip: { x: 0, y: 0, width: DESKTOP.width, height: NAVBAR_HEIGHT },
    });

    await mobilePage.setViewport({ ...MOBILE, isMobile: true, hasTouch: true });
    await mobilePage.goto(targetUrl, { waitUntil: 'networkidle0', timeout: TIMEOUT_MS });
    await mobilePage.screenshot({
      path: path.join(outputDir, mobileFile),
      clip: { x: 0, y: 0, width: MOBILE.width, height: NAVBAR_HEIGHT },
    });

    return { ok: true, desktopFile, mobileFile, error: '' };
  } catch (error) {
    return {
      ok: false,
      desktopFile,
      mobileFile,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    await Promise.all([desktopPage.close(), mobilePage.close()]);
  }
}

async function writeReport(rows, engineKind, blogDiscovery) {
  const now = new Date().toISOString();
  const successPages = rows.filter((row) => row.ok).length;
  const failedPages = rows.length - successPages;
  const successfulScreenshots = successPages * 2;

  const lines = [];
  lines.push('# Navbar Screenshot Report');
  lines.push('');
  lines.push(`- Generated: ${now}`);
  lines.push(`- Engine: ${engineKind}`);
  lines.push(`- Pages attempted: ${rows.length}`);
  lines.push(`- Pages succeeded: ${successPages}`);
  lines.push(`- Pages failed: ${failedPages}`);
  lines.push(`- Screenshots expected: ${rows.length * 2}`);
  lines.push(`- Screenshots created (from successful pages): ${successfulScreenshots}`);
  lines.push(`- Output directory: ${OUTPUT_DIR}`);
  lines.push(`- Blog discovery: ${blogDiscovery}`);
  lines.push('');
  lines.push('| Page URL | Desktop Screenshot | Mobile Screenshot | Status | Error |');
  lines.push('|---|---|---|---|---|');

  for (const row of rows) {
    lines.push(
      `| ${row.url} | ${row.desktopFile} | ${row.mobileFile} | ${row.ok ? 'OK' : 'FAILED'} | ${row.error || ''} |`
    );
  }

  lines.push('');
  lines.push('## Failed Pages');
  for (const row of rows.filter((r) => !r.ok)) {
    lines.push(`- ${row.url} -> ${row.error}`);
  }
  if (!rows.some((r) => !r.ok)) {
    lines.push('- None');
  }

  await fs.writeFile(REPORT_PATH, `${lines.join('\n')}\n`, 'utf8');
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const engine = await createEngine();
  const { browser, kind } = engine;

  let desktopContext;
  let mobileContext;

  try {
    const paths = [...STATIC_PATHS];

    if (kind === 'puppeteer') {
      const blog = await discoverBlogPaths(browser, kind);
      if (!blog.postPath || !blog.categoryPath) {
        throw new Error(
          `Could not discover both blog sample URLs from /blog. post=${blog.postPath || 'none'} category=${blog.categoryPath || 'none'} candidates=${blog.candidateCount}`
        );
      }
      paths.splice(6, 0, blog.postPath, blog.categoryPath);

      const seen = new Set();
      const deduped = paths.map(normalizePath).filter((p) => {
        if (seen.has(p)) return false;
        seen.add(p);
        return true;
      });

      if (deduped.length !== 71) {
        throw new Error(`Expected 71 total unique pages but got ${deduped.length}.`);
      }

      const results = [];
      for (const pagePath of deduped) {
        const capture = await captureWithPuppeteer(browser, pagePath, OUTPUT_DIR);
        const row = {
          path: pagePath,
          url: asPageUrl(pagePath),
          desktopFile: capture.desktopFile,
          mobileFile: capture.mobileFile,
          ok: capture.ok,
          error: capture.error,
        };
        results.push(row);
        process.stdout.write(`${capture.ok ? 'OK' : 'FAIL'} ${row.url}\n`);
      }

      await writeReport(
        results,
        kind,
        `post=${blog.postPath} category=${blog.categoryPath} candidates=${blog.candidateCount}`
      );

      const okPages = results.filter((r) => r.ok).length;
      const failPages = results.length - okPages;
      process.stdout.write(
        `Completed: pages=${results.length} ok=${okPages} failed=${failPages} screenshots=${okPages * 2} report=${REPORT_PATH}\n`
      );
      return;
    }

    desktopContext = await browser.newContext({ viewport: DESKTOP });
    mobileContext = await browser.newContext({
      ...(engine.devices && engine.devices['iPhone 12'] ? engine.devices['iPhone 12'] : {}),
      viewport: MOBILE,
      isMobile: true,
      hasTouch: true,
    });

    const blog = await discoverBlogPaths(desktopContext, kind);
    if (!blog.postPath || !blog.categoryPath) {
      throw new Error(
        `Could not discover both blog sample URLs from /blog. post=${blog.postPath || 'none'} category=${blog.categoryPath || 'none'} candidates=${blog.candidateCount}`
      );
    }

    paths.splice(6, 0, blog.postPath, blog.categoryPath);

    const seen = new Set();
    const deduped = paths.map(normalizePath).filter((p) => {
      if (seen.has(p)) return false;
      seen.add(p);
      return true;
    });

    if (deduped.length !== 71) {
      throw new Error(`Expected 71 total unique pages but got ${deduped.length}.`);
    }

    const results = [];
    for (const pagePath of deduped) {
      const capture = await captureWithPlaywright(desktopContext, mobileContext, pagePath, OUTPUT_DIR);
      const row = {
        path: pagePath,
        url: asPageUrl(pagePath),
        desktopFile: capture.desktopFile,
        mobileFile: capture.mobileFile,
        ok: capture.ok,
        error: capture.error,
      };
      results.push(row);
      process.stdout.write(`${capture.ok ? 'OK' : 'FAIL'} ${row.url}\n`);
    }

    await writeReport(
      results,
      kind,
      `post=${blog.postPath} category=${blog.categoryPath} candidates=${blog.candidateCount}`
    );

    const okPages = results.filter((r) => r.ok).length;
    const failPages = results.length - okPages;
    process.stdout.write(
      `Completed: pages=${results.length} ok=${okPages} failed=${failPages} screenshots=${okPages * 2} report=${REPORT_PATH}\n`
    );
  } finally {
    if (desktopContext) await desktopContext.close();
    if (mobileContext) await mobileContext.close();
    await browser.close();
  }
}

main().catch((error) => {
  process.stderr.write(`ERROR: ${error instanceof Error ? error.stack || error.message : String(error)}\n`);
  process.exit(1);
});
