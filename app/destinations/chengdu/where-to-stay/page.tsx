import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Stay in Chengdu',
  description:
    'Best Chengdu neighborhoods for first-timers, culture seekers, and budget travelers with price and metro details.',
};

export default function ChengduWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chengdu', href: '/destinations/chengdu' },
            { label: 'Where to Stay' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Stay in Chengdu</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu is easy to navigate, but your neighborhood changes the entire vibe of your trip.
            Stay central for convenience, near temples for quiet evenings, or in the Tibetan Quarter for
            local character and lower prices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Areas for Visitors</h2>

          <div className="space-y-6">
            <Link href="/destinations/chengdu/where-to-stay/jinli-area" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">🏮 Jinli Area (锦里)</h3>
              <p className="text-gray-700 mb-2">
                Traditional, atmospheric quarter near Wuhou Shrine. Red lanterns, teahouses, Sichuan opera,
                and backpacker hostels to mid-range hotels. Magical at night.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥200-900/night | 🚇 Gaoshengqiao (Line 3) | 🎯 Best for: Culture, history, evening charm</p>
            </Link>

            <Link href="/destinations/chengdu/where-to-stay/chunxi-road" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">🏙️ Chunxi Road (春熙路)</h3>
              <p className="text-gray-700 mb-2">
                Central shopping and dining district with the IFS climbing panda. The most convenient base
                in Chengdu with Line 2/3 crossing right here.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥350-1200/night | 🚇 Chunxi Road (Line 2/3) | 🎯 Best for: First-timers, shoppers, convenience</p>
            </Link>

            <Link href="/destinations/chengdu/where-to-stay/wide-narrow-alley" className="block border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">🧳 Wide & Narrow Alleys (宽窄巷子)</h3>
              <p className="text-gray-700 mb-2">
                Boutique courtyard hotels, hipster coffee shops, and traditional Qing-dynasty lanes.
                The best of old and new Chengdu in one walkable area.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥400-1500/night | 🚇 Kuanzhai Xiangzi (Line 4) | 🎯 Best for: Atmosphere, design hotels, coffee</p>
            </Link>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🧿 Tibetan Quarter (Unique Culture, Budget-Friendly)</h3>
              <p className="text-gray-700 mb-3">
                A very different side of Chengdu with Tibetan eateries, prayer flags, and small guesthouses.
                Great for culture and value, though less polished than mainstream hotel districts.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Best for: repeat visitors and budget travelers</p>
              <p className="text-sm text-[#64748b]">💰 Typical stay: ¥120-450/night</p>
              <p className="text-sm text-[#64748b]">📍 Metro: Near Wenshu Monastery / north-central transfer routes</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <div className="bg-emerald-50 rounded-lg p-4">
            <ul className="text-gray-700 space-y-2">
              <li>• Small courtyard boutique hotels in old lanes often include tea tastings.</li>
              <li>• Family-run inns near Wenshu Monastery can be quieter than big chains downtown.</li>
              <li>• Some Tibetan Quarter stays include rooftop laundry and communal kitchens.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
            <ul className="text-amber-900 space-y-2">
              <li>• Prioritize a hotel within 8-10 minutes of a metro station.</li>
              <li>• Ask if rooms are non-smoking; older mid-range hotels can still permit smoking.</li>
              <li>• During holidays, central Chengdu prices jump fast, so book early.</li>
              <li>• If you plan multiple panda visits, choose north-side transport convenience.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <h3 className="font-semibold text-amber-800 mb-2">⚠️ Tips to Know</h3>
            <ul className="text-amber-900 space-y-2">
              <li>• Hotels listed as "near pandas" may still require 45+ minutes transit.</li>
              <li>• Ultra-cheap rooms around nightlife streets can be very noisy after midnight.</li>
              <li>• Some listings advertise metro proximity but mean bus-distance, not walking-distance.</li>
            </ul>
          </div>
        </section>

        <RelatedArticles articles={[
          {title: 'Chunxi Road', description: 'Shopping heart of Chengdu — central and convenient.', href: '/destinations/chengdu/where-to-stay/chunxi-road'},
          {title: 'Jinli Area', description: 'Near the famous Jinli Ancient Street — lively at night.', href: '/destinations/chengdu/where-to-stay/jinli-area'},
          {title: 'What to Do in Chengdu', description: 'Pandas, teahouses, and opera nights.', href: '/destinations/chengdu/what-to-do'},
          {title: 'How to Get Around', description: 'Metro, DiDi, and train tips.', href: '/china-basics/how-to-get-around'},
        ]} />
      </main>
    </div>
  );
}