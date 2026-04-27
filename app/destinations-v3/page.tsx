import type { Metadata } from 'next'
import DestinationsV3Client from './DestinationsV3Client'

export const metadata: Metadata = {
  title: 'Explore China — Fullscreen Map | Trail of China',
  description: 'Explore China destinations on a fullscreen interactive map. Click cities to discover attractions, food, and transport.',
}

export default function DestinationsV3Page() {
  return <DestinationsV3Client />
}