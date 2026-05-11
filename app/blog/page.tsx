import type { Metadata } from 'next'
import BlogPageClient from './BlogPageClient'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'China Travel Blog',
  description:
    'Expert guides, destination insights, and practical tips for planning your first trip to China.',
  path: '/blog',
})

export default function BlogPage() {
  return <BlogPageClient />
}
