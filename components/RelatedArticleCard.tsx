'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type RelatedArticleCardProps = {
  title: string
  description?: string
  href: string
  image?: string
  category?: string
  icon?: string
}

export function RelatedArticleCard({
  title,
  description,
  href,
  image,
  category,
  icon,
}: RelatedArticleCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-[#fffaf3]"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.28 }}
        className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-[#ebe4d8]"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl">{icon ?? '📄'}</div>
        )}
      </motion.div>

      <div className="min-w-0 flex-1">
        {category && (
          <span className="text-xs font-medium uppercase tracking-wide text-[#af5d32]">{category}</span>
        )}

        <h4 className="font-serif line-clamp-2 text-xl font-semibold text-[#1f2933] transition-colors group-hover:text-[#af5d32]">
          {title}
        </h4>

        {description && <p className="mt-1 line-clamp-2 text-sm text-[#5d6a73]">{description}</p>}

        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#af5d32] group-hover:underline">
          Read more
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
