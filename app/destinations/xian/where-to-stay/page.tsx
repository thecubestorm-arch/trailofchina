import Link from 'next/link';
import { Metadata } from 'next';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Where to Stay in Xi’an | Best Areas Inside and Outside the City Wall",
  description:
    "Neighborhood-by-neighborhood Xi’an stay guide with Bell Tower, Muslim Quarter, Yanta, and station-area options from budget to luxury.",
};

export default function XianWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Stay in Xi&apos;an</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Choose your base by travel style: inside the City Wall for atmosphere and walkability,
            outside for newer hotels, quieter streets, and easier access to rail connections.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Inside the City Wall</h2>
          <div className="space-y-4">
            <Link href="/destinations/xian/where-to-stay/bell-tower" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">🔔 Bell Tower Zone (钟楼)</h3>
              <p className="text-gray-700 mb-2">
                Most central base for first-time visitors. Great transport links and quick access to
                the wall gates, food streets, and major downtown landmarks.
              </p>
              <p className="text-sm text-gray-600">💰 ¥300-900/night | 🚇 Zhonglou (Line 2) | 🎯 Best for: First-timers, walk everywhere</p>
            </Link>

            <Link href="/destinations/xian/where-to-stay/muslim-quarter" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">🍢 Muslim Quarter (回民街)</h3>
              <p className="text-gray-700 mb-2">
                Food heaven and the city&apos;s most vibrant neighborhood. Walk to the Bell Tower, Drum Tower,
                and Great Mosque. Pick hotels one block off the main lanes to reduce night noise.
              </p>
              <p className="text-sm text-gray-600">💰 ¥220-700/night | 🚇 Zhonglou (Line 2) | 🎯 Best for: Food lovers, atmosphere seekers</p>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Outside the City Wall</h2>
          <div className="space-y-4">
            <Link href="/destinations/xian/where-to-stay/dayan-pagoda" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">⛩️ Dayan Pagoda Area (大雁塔)</h3>
              <p className="text-gray-700 mb-2">
                Modern district with malls, newer business hotels, and easier access to Big Wild
                Goose Pagoda and museum areas. Clean, quiet, and family-friendly.
              </p>
              <p className="text-sm text-gray-600">💰 ¥280-1200/night | 🚇 Dayan Pagoda (Line 3), Xiaozhai (Line 2/3) | 🎯 Best for: Families, longer stays</p>
            </Link>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🚂 Train Station Area</h3>
              <p className="text-gray-700">
                Practical and budget-friendly for early departures or short stopovers. Choose newer
                properties and read recent reviews for street comfort at night.
              </p>
              <p className="text-sm text-gray-600 mt-3">🕐 Best for: One-night transit stays</p>
              <p className="text-sm text-gray-600">💰 Typical range: ¥140-450 per night</p>
              <p className="text-sm text-gray-600">📍 Nearby: Xi&apos;an Railway Station, bus links to attractions</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Budget to Luxury Snapshot</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-900">Budget</h3>
              <p className="text-emerald-900 text-sm mt-1">Hostels and simple inns from around ¥120-250.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900">Mid-Range</h3>
              <p className="text-blue-900 text-sm mt-1">Reliable 3-4 star stays around ¥280-700.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900">Luxury</h3>
              <p className="text-purple-900 text-sm mt-1">International brands from roughly ¥900+.</p>
            </div>
          </div>
        </section>

        <div className="bg-emerald-50 rounded-lg p-4 mb-8">
          <h3 className="font-semibold text-emerald-900 mb-2">Hidden Gems</h3>
          <ul className="text-emerald-900 space-y-2">
            <li>• Boutique courtyard hotels tucked inside secondary lanes within the wall</li>
            <li>• New business hotels in Yanta with high value weekend rates</li>
            <li>• Guesthouses near quieter south gates for wall access without crowds</li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Confirm which rail station you need before booking</li>
            <li>• Request non-smoking rooms explicitly when reserving</li>
            <li>• Inside-the-wall hotels save time if your itinerary is old-town heavy</li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-10">
          <h3 className="font-semibold text-amber-800 mb-2">⚠️ Tips to Know</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Ultra-cheap station-area rooms with poor cleanliness records</li>
            <li>• Properties advertising central access but far from metro lines</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Bell Tower Area', description: 'Dead center — walk everywhere inside the Wall.', href: '/destinations/xian/where-to-stay/bell-tower'},
          {title: 'Muslim Quarter', description: 'Street food paradise — noisy, lively, delicious.', href: '/destinations/xian/where-to-stay/muslim-quarter'},
          {title: 'What to Do in Xi’an', description: 'Terracotta Warriors, City Wall, and more.', href: '/destinations/xian/what-to-do'},
          {title: 'How to Get Around', description: 'Trains, buses, and metro explained.', href: '/china-basics/how-to-get-around'},
        ]} />
      </main>
    </div>
  );
}