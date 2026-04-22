'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type FeatureCardProps = {
  title: string
  description: string
  href: string
  icon?: string
  eyebrow?: string
  image?: ReactNode
}

export function FeatureCard({ title, description, href, icon, eyebrow, image }: FeatureCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <article className="section-shell flex h-full flex-col overflow-hidden rounded-xl transition-all hover:-translate-y-1 hover:shadow-md" style={{ backgroundColor: '#fffaf3' }}>
        {image ? (
          <div className="aspect-video overflow-hidden">
            <motion.div
              className="flex h-full w-full items-center justify-center bg-[#ebe4d8] text-4xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {image}
            </motion.div>
          </div>
        ) : null}

        <div className="flex h-full flex-col justify-between p-6">
          <div>
            {icon ? (
              <p className="text-4xl" aria-hidden="true">
                {icon}
              </p>
            ) : null}
            {eyebrow ? <p className="mt-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#af5d32]">{eyebrow}</p> : null}
            <h3 className="mt-4 font-serif text-xl text-[var(--foreground)] sm:text-2xl">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
          </div>
          <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--foreground)]">
            <span className="group-hover:underline">Read more</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default FeatureCard
