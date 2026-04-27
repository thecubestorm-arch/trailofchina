import type { Metadata } from 'next'
import DestinationsV4Client from './DestinationsV4Client'

export const metadata: Metadata = {
  title: 'Explore China — Dashboard View | Trail of China',
  description: 'Browse China destinations with a split-panel view. Search, filter, and explore on an interactive map.',
}

export default function DestinationsV4Page() {
  return <DestinationsV4Client />
}