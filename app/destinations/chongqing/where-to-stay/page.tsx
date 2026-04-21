import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where to Stay in Chongqing | Trail of China',
  description:
    'Best areas to stay in Chongqing for first-timers and return visits: Jiefangbei, Nanbin Road, and Hongyadong surroundings.',
};

export default function ChongqingWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Stay in Chongqing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Choose your base by transport access and elevation, not just map distance. In Chongqing,
            different street levels can make short routes feel long.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Areas</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. Jiefangbei (解放碑)</h3>
              <p className="text-gray-700 mb-2">
                The most convenient city-center base: malls, food streets, metro connections, and easy access
                to major attractions.
              </p>
              <p className="text-sm text-gray-600">🕐 Best for 2-4 night stays | 💰 Mid to high range | 📍 Yuzhong District core</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Nanbin Road (南滨路)</h3>
              <p className="text-gray-700 mb-2">
                Riverside hotels with skyline-facing views and a slower evening vibe. Great for couples and
                travelers prioritizing scenery.
              </p>
              <p className="text-sm text-gray-600">🕐 Best for evenings and views | 💰 Mid to high range | 📍 Nan&apos;an riverfront</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. Hongyadong Area</h3>
              <p className="text-gray-700 mb-2">
                Ideal if you want iconic night scenery within walking distance. Expect crowds and more traffic
                noise, but unmatched nighttime atmosphere.
              </p>
              <p className="text-sm text-gray-600">🕐 Best for short scenic stays | 💰 Budget to upscale | 📍 Near Jialing riverbanks</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Small design hotels in old lanes:</strong> Better local character than chain towers</li>
            <li><strong>Serviced apartments near metro interchanges:</strong> Strong value for longer stays</li>
            <li><strong>High-floor rooms in quieter blocks:</strong> Less street noise at night</li>
            <li><strong>River-view breakfast terraces:</strong> Worth paying extra in fog-clear seasons</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Confirm the exact entrance level and nearest metro exit before booking</li>
            <li>• Ask hotels whether elevators connect directly to street level you need</li>
            <li>• If arriving late, share Chinese address text with your driver in advance</li>
            <li>• Prioritize Line 1/2/3 access if you plan multiple daily transfers</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-8">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tourist Traps to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Choosing by skyline photo only without checking transport links</li>
            <li>• Booking steep hillside properties with poor taxi drop-off access</li>
            <li>• Ignoring humidity and AC quality in older low-cost buildings</li>
          </ul>
        </div>

        <Link href="/destinations/chongqing" className="text-[var(--accent)] hover:underline">
          ← Back to Chongqing Guide
        </Link>
      </main>
    </div>
  );
}
