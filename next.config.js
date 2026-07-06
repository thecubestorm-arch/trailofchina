const fs = require('fs');
const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  async redirects() {
    const redirectMap = new Map();

    // SACRED PAGES: must never redirect
    const sacredPages = new Set([
      '/china-basics/how-to-get-internet/airalo-esim',
      '/china-basics/how-to-get-internet/holafly-esim',
      '/destinations/beijing/where-to-eat/jianbing',
      '/destinations/shanghai/what-to-do/shanghai-tower',
      '/destinations/shenzhen/what-to-do/ping-an-finance-centre',
    ]);

    // Read prune-plan-final.csv for ARCHIVE rows
    const csvPath = path.join(__dirname, 'docs', 'prune-plan-final.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const lines = csvContent.split('\n').slice(1); // skip header

    for (const line of lines) {
      if (!line.trim()) continue;
      const [url, decision, redirectTarget] = line.split(',');
      if (decision === 'ARCHIVE') {
        // Skip sacred pages and payment pages
        if (sacredPages.has(url)) continue;
        if (url.includes('/pay/') || url.includes('/payment/') || url.includes('alipay') || url.includes('wechat-pay')) continue;
        redirectMap.set(url, redirectTarget);
      }
    }

    // Known duplicate/alias pairs (keep existing)
    const aliasRedirects = [
      { source: '/destinations/chengdu/what-to-do/jinli', destination: '/destinations/chengdu/what-to-do/jinli-ancient-street' },
      { source: '/destinations/chengdu/what-to-do/kuanzhai-alley', destination: '/destinations/chengdu/what-to-do/wide-narrow-alleys' },
      { source: '/destinations/chengdu/what-to-do/panda-base', destination: '/destinations/chengdu/what-to-do/giant-panda-base' },
      { source: '/destinations/chengdu/where-to-eat/hotpot', destination: '/destinations/chengdu/where-to-eat/sichuan-hotpot' },
      { source: '/destinations/chengdu/where-to-stay/jinli', destination: '/destinations/chengdu/where-to-stay/jinli-area' },
      { source: '/destinations/chengdu/where-to-stay/wide-narrow-alley', destination: '/destinations/chengdu/where-to-stay/wide-narrow-alleys' },
      { source: '/destinations/xian/what-to-do/bell-tower', destination: '/destinations/xian/what-to-do/bell-drum-tower' },
      { source: '/destinations/xian/where-to-eat/yangroupaomo', destination: '/destinations/xian/where-to-eat/yangrou-paomo' },
    ];

    for (const alias of aliasRedirects) {
      redirectMap.set(alias.source, alias.destination);
    }

    // Convert Map to Next.js redirect entries
    const redirects = [];
    for (const [source, destination] of redirectMap) {
      redirects.push({
        source,
        destination,
        permanent: true,
      });
    }

    return redirects;
  }
}

module.exports = withNextIntl(nextConfig)
