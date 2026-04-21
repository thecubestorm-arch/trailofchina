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
          <Link href="/plan-your-trip/preplanned-trips" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🗺️</div>
              <h2 className="text-2xl font-semibold mb-2">Pre-planned Trips</h2>
              <p className="text-gray-600">Ready-made itineraries for 7, 10, and 14 days.</p>
            </div>
          </Link>

          <div className="border-2 border-gray-200 rounded-xl p-6">
            <div className="text-4xl mb-4">✏️</div>
            <h2 className="text-2xl font-semibold mb-2">Custom Planner</h2>
            <p className="text-gray-600">Coming soon: Build your own itinerary.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
