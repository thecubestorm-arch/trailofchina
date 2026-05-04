import type { Metadata } from 'next'
import DestinationsV8Client from './DestinationsV8Client'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Explore China Destinations | Trail of China',
  description: "Discover China's top destinations — Shanghai, Beijing, Xi'an, Chengdu, and Chongqing. Interactive map with photo galleries and city previews.",

  path: '/destinations',
})

export default function DestinationsPage() {
  return <DestinationsV8Client />
}
