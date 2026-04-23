import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preplanned China Trips | Trail of China',
  description: 'Choose a ready-made China itinerary for 7, 10, or 14 days with realistic transport, pacing, and budget guidance.',
};

export default function PreplannedTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Preplanned Trips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Start with a proven route and adjust from there. These itineraries are designed for first-time visitors,
            balancing major highlights, efficient high-speed train legs, and realistic daily pace.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Link href="/plan-your-trip/preplanned-trips/7-day-route" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-2xl font-semibold mb-2">7-Day Route</h3>
              <p className="text-gray-600 mb-4">Beijing, Xi&apos;an, and Shanghai in one efficient week.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 2 high-speed train legs</li>
                <li>• Best for first visit, limited vacation days</li>
                <li>• Mid-range total: ~¥8,500-11,500</li>
              </ul>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">View itinerary →</span>
            </div>
          </Link>

          <Link href="/plan-your-trip/preplanned-trips/10-day-route" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🐼</div>
              <h3 className="text-2xl font-semibold mb-2">10-Day Route</h3>
              <p className="text-gray-600 mb-4">Adds Chengdu pandas and Yangshuo karst scenery.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Mix of train + one domestic flight</li>
                <li>• Culture, food, and nature balance</li>
                <li>• Mid-range total: ~¥12,500-16,500</li>
              </ul>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">View itinerary →</span>
            </div>
          </Link>

          <Link href="/plan-your-trip/preplanned-trips/14-day-route" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🏯</div>
              <h3 className="text-2xl font-semibold mb-2">14-Day Route</h3>
              <p className="text-gray-600 mb-4">Grand loop with extra rest days and deeper city time.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Comfortable pace with buffer time</li>
                <li>• Better for photographers and families</li>
                <li>• Mid-range total: ~¥17,500-23,000</li>
              </ul>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">View itinerary →</span>
            </div>
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How To Choose</h2>
          <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
            <table className="w-full min-w-[620px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Trip</th>
                  <th className="text-left py-2">Daily Pace</th>
                  <th className="text-left py-2">Best For</th>
                  <th className="text-left py-2">Travel Style</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-2">7 Days</td>
                  <td>Fast</td>
                  <td>First-time visitors</td>
                  <td>City highlights + iconic landmarks</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">10 Days</td>
                  <td>Moderate</td>
                  <td>Travelers who want variety</td>
                  <td>History + food + scenery</td>
                </tr>
                <tr>
                  <td className="py-2">14 Days</td>
                  <td>Relaxed</td>
                  <td>Families / slow travel</td>
                  <td>Depth, flexibility, and recovery days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book train tickets 10-14 days early for peak departure times.</li>
            <li>• Keep day 1 and final day lighter to absorb jet lag and delays.</li>
            <li>• National holidays can double transport demand and hotel prices.</li>
            <li>• If this is your first China trip, 10 days is usually the best balance.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
