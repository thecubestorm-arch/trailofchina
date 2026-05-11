import type { Metadata } from 'next'
import PlanYourTripClient from './PlanYourTripClient'

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
  return <PlanYourTripClient />
}
