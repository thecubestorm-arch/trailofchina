import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Blog Post' }
  return {
    title: `${post.title} | Trail of China`,
    description: post.description
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#1f2933] mb-4">Post not found</h1>
          <Link href="/blog" className="text-[#af5d32] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-[#af5d32] hover:underline mb-8">
            ← Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-[#5d6a73] text-sm">
              {post.date} • {post.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1f2933] mb-6 leading-tight">
            {post.title}
          </h1>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <div className="prose max-w-none">
            <p className="text-lg text-[#5d6a73] mb-8 leading-relaxed">
              {post.description}
            </p>
            
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-[#1f2933] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#ebe4d8]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f5f1ea] rounded-full px-3 py-1 text-sm text-[#1f2933]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}