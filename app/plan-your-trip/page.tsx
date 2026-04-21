import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plan Your Trip | Trail of China',
  description: 'Plan your China trip with pre-made itineraries and custom travel planning tools.',
};

export default function PlanYourTripPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Plan Your Trip</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Ready to visit China? Use our pre-made itineraries or plan your own custom adventure.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/plan-your-trip/preplanned-trips" className="block group h-full">
            <div className="h-full border-2 border-gray-200 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
              <div className="text-4xl mb-4">🗺️</div>
              <h2 className="text-2xl font-semibold mb-2">Pre-planned Trips</h2>
              <p className="text-gray-600">Ready-made itineraries for 7, 10, and 14 days.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-flex items-center gap-1">
                <span className="group-hover:underline">Read More</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>

          <Link href="/plan-your-trip/travel-planner" className="block group h-full">
            <div className="h-full border-2 border-gray-200 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
              <div className="text-4xl mb-4">✏️</div>
              <h2 className="text-2xl font-semibold mb-2">Custom Planner</h2>
              <p className="text-gray-600">Coming soon: Build your own itinerary.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-flex items-center gap-1">
                <span className="group-hover:underline">Read More</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
