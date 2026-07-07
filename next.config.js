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

        // Flatten destination redirects: anything under /destinations/[city]/[subhub] → /destinations/[city]
        let dest = redirectTarget;
        const destMatch = dest.match(/^\/destinations\/([^\/]+)\/(.+)$/);
        if (destMatch) {
          dest = `/destinations/${destMatch[1]}`;
        }
        redirectMap.set(url, dest);
      }
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
