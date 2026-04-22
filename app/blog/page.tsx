import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog | Trail of China',
  description: 'Expert guides, destination insights, and travel tips for planning your first trip to China'
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1f2933] mb-4">
            The Traveler's Journal
          </h1>
          <p className="text-lg text-[#5d6a73] max-w-2xl mx-auto">
            Expert guides, destination insights, and practical tips for planning your first trip to China
          </p>
        </div>

        <div className="space-y-0">
          {blogPosts.map((post, index) => (
            <div key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="border-b border-[#ebe4d8] pb-8 hover:border-[#af5d32] transition-colors duration-200">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-[#5d6a73] text-sm">
                      {post.date} • {post.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1f2933] mb-3 group-hover:text-[#af5d32] transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-[#5d6a73] mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
