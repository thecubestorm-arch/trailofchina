'use client'

import type { ReactNode } from 'react'
import { Children } from 'react'
import { motion } from 'framer-motion'

type StaggerContainerProps = {
  children: ReactNode
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
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
