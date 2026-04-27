import type { Metadata } from 'next'
import DestinationsV6Client from './DestinationsV6Client'

export const metadata: Metadata = {
  title: 'Explore China Destinations | Trail of China',
  description: 'Discover China\'s top destinations — Shanghai, Beijing, Xi\'an, Chengdu, and Chongqing. Interactive map with city previews.',
}

export default function DestinationsV6Page() {
  return <DestinationsV6Client />
}