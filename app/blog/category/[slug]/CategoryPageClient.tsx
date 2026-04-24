'use client'

import Link from 'next/link'
import { BlogPost } from '@/lib/blog-data'
import RelatedArticles from '@/components/RelatedArticles'

type Props = {
  categoryName: string
  posts: BlogPost[]
  slug: string
}

export default function CategoryPageClient({ categoryName, posts, slug }: Props) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const categorySlug = (category: string) =>
    category.toLowerCase().replace(/ /g, '-')

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#64748b]">
            <li>
              <Link href="/" className="text-[#af5d32] hover:underline">Home</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/blog" className="text-[#af5d32] hover:underline">Blog</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#1a3a4a]" aria-current="page">{categoryName}</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-4">
            {categoryName}
          </h1>
          <p className="text-lg text-[#5d6a73] max-w-2xl mx-auto">
            {posts.length} article{posts.length !== 1 ? 's' : ''} in {categoryName}
          </p>
        </div>

        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-[#af5d32] hover:underline text-sm font-medium"
          >
            ← Back to Blog
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="font-serif text-2xl font-bold text-[#1a3a4a] mb-4">
              No posts found
            </h2>
            <p className="text-[#5d6a73] mb-6">
              There are no articles in the &quot;{categoryName}&quot; category yet.
            </p>
            <Link
              href="/blog"
              className="text-[#af5d32] hover:underline font-medium"
            >
              Browse all articles
            </Link>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12">
                <Link href={`/blog/${featuredPost.slug}`} className="group block">
                  <div className="relative bg-[#f5f1ea] rounded-xl overflow-hidden border border-[#ebe4d8] hover:border-[#af5d32] transition-colors duration-200">
                    <div className="md:flex">
                      <div className="md:w-1/2 relative h-64 md:h-auto">
                        <img
                          src={featuredPost.imageUrl}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                      <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Link
                            href={`/blog/category/${categorySlug(featuredPost.category)}`}
                            className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {featuredPost.category}
                          </Link>
                          <span className="text-[#5d6a73] text-sm">
                            {formatDate(featuredPost.date)} · {featuredPost.readingTime}
                          </span>
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-3 group-hover:text-[#af5d32] transition-colors duration-200">
                          {featuredPost.title}
                        </h2>
                        <p className="text-[#5d6a73] mb-4 leading-relaxed">
                          {featuredPost.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {featuredPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-white rounded-full px-3 py-1 text-sm text-[#1a3a4a]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Remaining Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {remainingPosts.map((post) => (
                <div key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="bg-[#f5f1ea] rounded-xl overflow-hidden border border-[#ebe4d8] hover:border-[#af5d32] transition-colors duration-200 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <Link
                            href={`/blog/category/${categorySlug(post.category)}`}
                            className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {post.category}
                          </Link>
                          <span className="text-[#5d6a73] text-sm">
                            {formatDate(post.date)} · {post.readingTime}
                          </span>
                        </div>
                        <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mb-2 group-hover:text-[#af5d32] transition-colors duration-200">
                          {post.title}
                        </h2>
                        <p className="text-[#5d6a73] mb-4 leading-relaxed flex-1">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="bg-white rounded-full px-3 py-1 text-sm text-[#1a3a4a]"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="bg-white rounded-full px-3 py-1 text-sm text-[#5d6a73]">
                              +{post.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-12">
          <RelatedArticles articles={[
            { title: 'China Basics', description: 'Essential knowledge every traveler needs — visas, apps, payments, and internet', href: '/china-basics/' },
            { title: 'Destinations', description: 'Explore Beijing, Shanghai, Chengdu, Xi\'an, Chongqing, and more', href: '/destinations/' },
            { title: 'Plan Your Trip', description: 'Itinerary planner and pre-planned trips for every travel style', href: '/plan-your-trip/' },
            { title: 'How China Differs', description: 'What surprises first-time visitors the most', href: '/china-basics/how-china-differs/' }
          ]} />
        </div>
      </div>
    </div>
  )
}
