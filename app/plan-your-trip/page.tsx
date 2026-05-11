import type { Metadata } from 'next'
import PlanYourTripClient from './PlanYourTripClient'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Plan Your Trip - Itineraries, Budget & Travel Planning',
  description:
    'Everything you need to plan your China trip. Choose a preplanned route, check the best time to visit, set your budget, or build a custom itinerary.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/plan-your-trip',
  },
}

export default function PlanYourTripPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <PlanYourTripClient />
    </>
  )
}
