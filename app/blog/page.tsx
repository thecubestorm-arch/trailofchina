import type { Metadata } from 'next'
import BlogPageClient from './BlogPageClient'
import { makeMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'China Travel Blog',
  description:
    'Expert guides, destination insights, and practical tips for planning your first trip to China.',
  path: '/blog',
})

export default function BlogPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BlogPageClient />
    </>
  )
}
