import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preplanned Trips in China | Trail of China',
  description: 'Choose a 7, 10, or 14-day China itinerary with city-by-city routes, transport, daily highlights, and budget guidance.',
};

export default function PreplannedTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Preplanned China Trips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Use these tested routes if you want a smooth first trip through China. Each plan includes
            daily highlights, practical transport choices, hotel areas, and realistic costs.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/plan-your-trip/preplanned-trips/7-day-route" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 h-full hover:border-red-500 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🧭</div>
              <h2 className="text-2xl font-semibold mb-2">7-Day Route</h2>
              <p className="text-gray-600 mb-4">Beijing → Xi&apos;an → Shanghai</p>
              <p className="text-sm text-gray-700">Best for first-time visitors with limited vacation time.</p>
              <span className="text-red-600 font-medium mt-4 inline-block">View itinerary →</span>
            </div>
          </Link>

          <Link href="/plan-your-trip/preplanned-trips/10-day-route" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 h-full hover:border-red-500 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🚄</div>
              <h2 className="text-2xl font-semibold mb-2">10-Day Route</h2>
              <p className="text-gray-600 mb-4">Adds Chengdu and Yangshuo</p>
              <p className="text-sm text-gray-700">Balanced plan with history, food, pandas, and scenery.</p>
              <span className="text-red-600 font-medium mt-4 inline-block">View itinerary →</span>
            </div>
          </Link>

          <Link href="/plan-your-trip/preplanned-trips/14-day-route" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 h-full hover:border-red-500 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🌏</div>
              <h2 className="text-2xl font-semibold mb-2">14-Day Grand Tour</h2>
              <p className="text-gray-600 mb-4">Classic multi-city circuit</p>
              <p className="text-sm text-gray-700">More depth in every destination without feeling rushed.</p>
              <span className="text-red-600 font-medium mt-4 inline-block">View itinerary →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book trains as soon as sales open (usually 15 days before departure).</li>
            <li>• Keep at least one low-intensity evening after each intercity transfer day.</li>
            <li>• Prioritize hotels near metro lines instead of famous landmarks.</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Scam Alerts</h3>
          <ul className="text-red-900 space-y-2">
            <li>• Avoid unofficial tour sellers near train stations and major squares.</li>
            <li>• Only buy attraction tickets from official mini-programs, venue windows, or trusted apps.</li>
            <li>• If a driver refuses meter or quoted app fare and asks cash only, exit and book another ride.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
