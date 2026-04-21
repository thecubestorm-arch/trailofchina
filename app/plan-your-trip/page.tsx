import { Metadata } from 'next'
import { FeatureCard } from '@/components/FeatureCard'

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
  },
  {
    title: 'Travel Planner',
    description: 'Build your own route based on pace, interests, and trip length',
    icon: '✏️',
    href: '/plan-your-trip/travel-planner',
  },
  {
    title: 'Interactive Map',
    description: 'See destination relationships and plan transfers visually',
    icon: '🧭',
    href: '/interactive-map',
  },
]

export default function PlanYourTripPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Plan Your Trip</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Ready to visit China? Choose a preplanned route, customize your own itinerary, or explore the map view to build a practical trip.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <FeatureCard key={card.href} {...card} />
          ))}
        </div>
      </main>
    </div>
  )
}
