import type { Metadata } from 'next'
import DestinationsV8Client from './DestinationsV8Client'
import { makeMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Explore China Destinations',
  description: "Discover China's top destinations — Beijing, Shanghai, Xi'an, Chengdu, and Chongqing. Interactive map with photo galleries and city previews.",

  path: '/destinations',
})

export default function DestinationsPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <DestinationsV8Client />
    </>
  )
}
