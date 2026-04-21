'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right'

type FadeInProps = {
  children: ReactNode
  delay?: number
  direction?: Direction
}

const directions: Record<Direction, { y: number; x: number }> = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { y: 0, x: 30 },
  right: { y: 0, x: -30 },
}

export function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
