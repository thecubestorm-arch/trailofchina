import Link from 'next/link'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '@/lib/blog-data'
import RelatedArticles from '@/components/RelatedArticles'
import ShareButtons from '@/components/ShareButtons'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Blog Post' }
  return {
    title: `${post.title}`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.imageUrl }],
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#1a3a4a] mb-4">Post not found</h1>
        </div>
      </div>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.imageUrl,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Trail of China',
    },
  }

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
            <li>
              <Link href="/blog" className="text-[#af5d32] hover:underline">Blog</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#1a3a4a] line-clamp-1" aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link
              href={`/blog/category/${categorySlug(post.category)}`}
              className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold hover:underline"
            >
              {post.category}
            </Link>
            <span className="text-[#5d6a73] text-sm">
              {formatDate(post.date)} · {post.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Share Buttons */}
          <ShareButtons title={post.title} slug={post.slug} />

          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            loading="eager"
          />

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <div className="prose max-w-none">
            <p className="text-lg text-[#5d6a73] mb-8 leading-relaxed">
              {post.description}
            </p>

            <div className="markdown-body text-[#1a3a4a]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a] mt-10 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mt-8 mb-3">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="font-serif text-lg font-bold text-[#1a3a4a] mt-6 mb-2">{children}</h4>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 leading-relaxed">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-[#1a3a4a]">{children}</strong>
                  ),
                  a: ({ href, children }) => (
                    <a href={href} className="text-[#af5d32] hover:underline">{children}</a>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  hr: () => <hr className="border-t border-[#ebe4d8] my-8" />,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#af5d32] pl-4 italic text-[#5d6a73] my-6">{children}</blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#ebe4d8]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f5f1ea] rounded-full px-3 py-1 text-sm text-[#1a3a4a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {post.relatedArticles && post.relatedArticles.length > 0 && (
            <div className="mt-10">
              <RelatedArticles articles={post.relatedArticles} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
