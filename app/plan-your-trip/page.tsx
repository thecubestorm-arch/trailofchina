import { Metadata } from 'next'
import { RelatedArticleCard } from '@/components/RelatedArticleCard'

export const metadata: Metadata = {
  title: 'Plan Your Trip | Trail of China',
  description: 'Plan your China trip with pre-made itineraries and custom travel planning tools.',
}

const cards = [
  {
    title: 'Preplanned Trips',
    description: 'Ready-made routes for first-time travelers who want a proven structure',
    icon: '🗺️',
    href: '/plan-your-trip/preplanned-trips',
    category: 'Trip Planning',
  },
  {
    title: 'Travel Planner',
    description: 'Build your own route based on pace, interests, and trip length',
    icon: '✏️',
    href: '/plan-your-trip/travel-planner',
    category: 'Trip Planning',
  },
  {
    title: 'Interactive Map',
    description: 'See destination relationships and plan transfers visually',
    icon: '🧭',
    href: '/interactive-map',
    category: 'Trip Planning',
  },
]

export default function PlanYourTripPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Plan Your Trip</h1>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Ready to visit China? Choose a preplanned route, customize your own itinerary, or explore the map view to build a practical trip.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-serif font-semibold text-[#1f2933]">Related Pages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <RelatedArticleCard key={card.href} {...card} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
