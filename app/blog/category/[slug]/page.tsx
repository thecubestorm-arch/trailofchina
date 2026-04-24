import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'
import CategoryPageClient from './CategoryPageClient'

type Params = Promise<{ slug: string }>

function slugToCategoryName(slug: string): string {
  switch (slug) {
    case 'travel-tech': return 'Travel Tech'
    case 'payment': return 'Payment'
    case 'city-guide': return 'City Guide'
    case 'food-guide': return 'Food Guide'
    case 'history-culture': return 'History & Culture'
    case 'china-basics': return 'China Basics'
    case 'practical-tips': return 'Practical Tips'
    case 'destinations': return 'Destinations'
    case 'visa': return 'Visa'
    default: return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
  }
}

export async function generateStaticParams() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))
  const slugMap: Record<string, string> = {
    'Travel Tech': 'travel-tech',
    'Payment': 'payment',
    'City Guide': 'city-guide',
    'Food Guide': 'food-guide',
    'History & Culture': 'history-culture',
    'China Basics': 'china-basics',
    'Practical Tips': 'practical-tips',
    'Destinations': 'destinations',
    'Visa': 'visa',
  }

  return categories.map((category) => ({
    slug: slugMap[category] || category.toLowerCase().replace(/ /g, '-'),
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const categoryName = slugToCategoryName(slug)
  return {
    title: `${categoryName} - Blog | Trail of China`,
    description: `Read our ${categoryName} guides and tips for China travel`,
    alternates: { canonical: `/blog/category/${slug}` },
  }
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params
  const categoryName = slugToCategoryName(slug)

  // Verify this is a valid known category
  const knownSlugs = [
    'travel-tech', 'payment', 'city-guide', 'food-guide',
    'history-culture', 'china-basics', 'practical-tips',
    'destinations', 'visa'
  ]
  if (!knownSlugs.includes(slug)) {
    notFound()
  }

  const posts = blogPosts.filter((post) => {
    const postSlug = post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
    return postSlug === slug
  })

  return <CategoryPageClient categoryName={categoryName} posts={posts} slug={slug} />
}
