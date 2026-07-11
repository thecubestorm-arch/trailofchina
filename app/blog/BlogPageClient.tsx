'use client'

import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const remainingPosts = blogPosts.slice(1)

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const categorySlug = (category: string) =>
    category.toLowerCase().replace(/ /g, '-')

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
            <li className="text-[#1a3a4a]" aria-current="page">Blog</li>
          </ol>
        </nav>

        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-4">
            China Travel Blog - The Traveler&apos;s Journal
          </h1>
          <p className="text-lg text-[#5d6a73] max-w-2xl mx-auto">
            Expert guides, destination insights, and practical tips for planning your first trip to China
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="group block">
              <div className="relative bg-[#f5f1ea] rounded-xl overflow-hidden border border-[#ebe4d8]">
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
                      <span className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold">
                        {featuredPost.category}
                      </span>
                      <span className="text-[#5d6a73] text-sm">
                        {formatDate(featuredPost.date)} · {featuredPost.readingTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-3">
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
            </div>
          </div>
        )}

        {/* Remaining Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {remainingPosts.map((post) => (
            <div key={post.slug} className="group">
              <div className="block">
                <div className="bg-[#f5f1ea] rounded-xl overflow-hidden border border-[#ebe4d8] h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-[#5d6a73] text-sm">
                        {formatDate(post.date)} · {post.readingTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mb-2">
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Link href="/china-basics/" className="block p-6 bg-[#f5f1ea] rounded-xl border border-[#ebe4d8] hover:border-[#af5d32] transition-colors">
            <h3 className="font-bold text-[#1a3a4a] mb-1">China Basics</h3>
            <p className="text-sm text-[#5d6a73]">Essential knowledge every traveler needs — visas, apps, payments, and internet</p>
          </Link>
          <Link href="/destinations/" className="block p-6 bg-[#f5f1ea] rounded-xl border border-[#ebe4d8] hover:border-[#af5d32] transition-colors">
            <h3 className="font-bold text-[#1a3a4a] mb-1">Destinations</h3>
            <p className="text-sm text-[#5d6a73]">Explore Beijing, Shanghai, Chengdu, Xi&apos;an, Chongqing, and more</p>
          </Link>
          <Link href="/plan-your-trip/" className="block p-6 bg-[#f5f1ea] rounded-xl border border-[#ebe4d8] hover:border-[#af5d32] transition-colors">
            <h3 className="font-bold text-[#1a3a4a] mb-1">Plan Your Trip</h3>
            <p className="text-sm text-[#5d6a73]">Itinerary planner and pre-planned trips for every travel style</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
