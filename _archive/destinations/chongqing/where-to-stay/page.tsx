import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Stay in Chongqing',
  description:
    'Best areas to stay in Chongqing for first-timers and return visits: Jiefangbei, Nanbin Road, and Hongyadong surroundings.',
  openGraph: {
    title: 'Where to Stay in Chongqing - Trail of China',
    description: 'Best neighborhoods and hotels in Chongqing.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Where to Stay in Chongqing - Trail of China' }],
  },
};

export default function ChongqingWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chongqing', href: '/destinations/chongqing' },
            { label: 'Where to Stay' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Stay in Chongqing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Choose your base by transport access and elevation, not just map distance. In Chongqing,
            different street levels can make short routes feel long.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Areas</h2>

          <div className="space-y-6">
            <Link href="/destinations/chongqing/where-to-stay/jiefangbei" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">1. Jiefangbei (解放碑)</h3>
              <p className="text-gray-700 mb-2">
                The most convenient city-center base: malls, food streets, metro connections, and easy access
                to major attractions.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥400-1500/night | 🚇 Lines 1, 2, 6 | 🎯 Best for: First-timers, maximum convenience</p>
            </Link>

            <Link href="/destinations/chongqing/where-to-stay/hongyadong-area" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">2. Hongyadong Area (洪崖洞)</h3>
              <p className="text-gray-700 mb-2">
                Iconic stilt-house complex with spectacular night views. Touristy but visually unmatched
                — perfect for a 1-2 night splurge.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥300-2000/night | 🚇 Xiaoshizi (Line 1/6) | 🎯 Best for: Short scenic stays, photographers</p>
            </Link>

            <Link href="/destinations/chongqing/where-to-stay/cuntan" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">3. Cuntan / Nan&apos;an (南岸)</h3>
              <p className="text-gray-700 mb-2">
                Across the river with local flavor, budget prices, and skyline views of downtown without
                the downtown prices. More authentic Chongqing.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥150-600/night | 🚇 Cuntan (Line 10), Nanping (Line 3) | 🎯 Best for: Budget, local vibe</p>
            </Link>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">4. Nanbin Road (南滨路)</h3>
              <p className="text-gray-700 mb-2">
                Riverside hotels with skyline-facing views and a slower evening vibe. Great for couples and
                travelers prioritizing scenery.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Best for evenings and views | 💰 Mid to high range | 📍 Nan&apos;an riverfront</p>
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
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tips to Know</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Choosing by skyline photo only without checking transport links</li>
            <li>• Booking steep hillside properties with poor taxi drop-off access</li>
            <li>• Ignoring humidity and AC quality in older low-cost buildings</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Jiefangbei', description: 'Downtown core — shopping, food, and nightlife.', href: '/destinations/chongqing/where-to-stay/jiefangbei'},
          {title: 'Hongyadong Area', description: 'Stay near the iconic lit-up cliff houses.', href: '/destinations/chongqing/where-to-stay/hongyadong-area'},
          {title: 'What to Do in Chongqing', description: 'Hongya Cave, Liziba, and more.', href: '/destinations/chongqing/what-to-do'},
          {title: 'How to Get Around', description: 'Metro and monorail tips for the 3D city.', href: '/china-basics/how-to-get-around'},
        ]} />
      </main>
    </div>
  );
}