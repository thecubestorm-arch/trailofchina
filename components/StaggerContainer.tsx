'use client'

import type { ReactNode } from 'react'
import { Children } from 'react'
import { motion, Variants } from 'framer-motion'

type StaggerContainerProps = {
  children: ReactNode
  className?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className={className}>
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StaggerContainer
