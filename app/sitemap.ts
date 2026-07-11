import type { MetadataRoute } from 'next'

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

const staticRoutes: SitemapEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/china-basics', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/destinations', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/plan-your-trip', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/imprint', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(createEntry)
}
