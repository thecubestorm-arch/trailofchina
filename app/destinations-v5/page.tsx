import type { Metadata } from 'next'
import DestinationsV5Client from './DestinationsV5Client'

export const metadata: Metadata = {
  title: 'Explore China — Find Your Perfect Destination | Trail of China',
  description: 'Discover China destinations like never before. Browse, search, and filter cities with an interactive map — just like Airbnb.',
}

export default function DestinationsV5Page() {
  return <DestinationsV5Client />
}