import type { Metadata } from 'next'
import DestinationsV8Client from './DestinationsV8Client'

export const metadata: Metadata = {
  title: 'Explore China Destinations | Trail of China',
  description: "Discover China's top destinations — Shanghai, Beijing, Xi'an, Chengdu, and Chongqing. Interactive map with photo galleries and city previews.",
}

export default function DestinationsPage() {
  return <DestinationsV8Client />
}
