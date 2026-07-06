import type { MetadataRoute } from 'next'

import { blogPosts } from '@/lib/blog-data'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.trailofchina.com'
const defaultLastModified = new Date()

type SitemapEntry = {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
  lastModified?: Date
}

const createEntry = ({
  path,
  changeFrequency,
  priority,
  lastModified = defaultLastModified,
}: SitemapEntry): MetadataRoute.Sitemap[number] => ({
  url: `${BASE_URL}${path}`,
  lastModified,
  changeFrequency,
  priority,
})

// Kept URLs from prune-plan-final.csv
const staticRoutes: SitemapEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/china-basics', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/before-you-go', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/before-you-go/is-china-safe', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/before-you-go/packing-list', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-china-differs', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-china-differs/visa-guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-around', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-around/city-to-city', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-around/didi', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-around/metro-subway', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-around/plane', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-around/taxi', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-around/train', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-internet', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-internet/airalo-esim', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/china-basics/how-to-get-internet/esim', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/how-to-get-internet/holafly-esim', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/china-basics/how-to-get-internet/physical-sim', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/alipay', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/communication', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/didi', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/maps', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/meituan', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/payment', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/travel', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/trip-com', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/vpn', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/china-basics/what-apps-to-use/wechat-pay', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/destinations', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/beijing', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/destinations/beijing/day-trips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/beijing/local-experiences', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/beijing/local-tips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/beijing/transport-guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/beijing/what-to-do', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/beijing/where-to-eat', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/beijing/where-to-eat/jianbing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/destinations/beijing/where-to-stay', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chengdu', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/destinations/chengdu/day-trips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chengdu/local-experiences', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chengdu/local-tips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chengdu/what-to-do', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chengdu/where-to-eat', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chengdu/where-to-stay', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chongqing', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/destinations/chongqing/day-trips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chongqing/local-experiences', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chongqing/local-tips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chongqing/what-to-do', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chongqing/where-to-eat', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/chongqing/where-to-stay', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/guangzhou', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/destinations/shanghai', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/destinations/shanghai/day-trips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/shanghai/local-experiences', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/shanghai/local-tips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/shanghai/transport-guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/shanghai/what-to-do', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/shanghai/what-to-do/shanghai-tower', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/destinations/shanghai/where-to-eat', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/shanghai/where-to-stay', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/shenzhen', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/destinations/shenzhen/what-to-do/ping-an-finance-centre', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/destinations/xian', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/destinations/xian/day-trips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/xian/local-experiences', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/xian/local-tips', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/xian/what-to-do', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/xian/where-to-eat', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations/xian/where-to-stay', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/imprint', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/plan-your-trip', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/plan-your-trip/beijing-shanghai-xian', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/best-time-to-visit', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/budget', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/chengdu-chongqing', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/preplanned-trips', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/preplanned-trips/10-day-route', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/preplanned-trips/14-day-route', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/preplanned-trips/7-day-route', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/shanghai-hangzhou-suzhou', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/plan-your-trip/shenzhen-guangzhou-hongkong', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) =>
    createEntry({
      path: `/blog/${post.slug}`,
      changeFrequency: 'weekly',
      priority: 0.7,
      lastModified: new Date(post.date),
    })
  )

  return [...staticRoutes.map(createEntry), ...blogRoutes]
}
