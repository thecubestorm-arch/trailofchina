'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type AnimatedCardProps = {
  children: ReactNode
  href: string
  delay?: number
}

export function AnimatedCard({ children, href, delay = 0 }: AnimatedCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="h-full overflow-hidden rounded-2xl border border-[#ebe4d8] bg-[#fffaf3] transition-shadow duration-300 hover:shadow-xl"
      >
        {children}
      </motion.div>
    </Link>
  )
}

export default AnimatedCard
