import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Stay in Shanghai | Best Neighborhoods, Hotels & Hostels',
  description:
    'Best areas to stay in Shanghai: the Bund, French Concession, Jing\'an, Xintiandi, and People\'s Square. Budget hostels to luxury hotels.',
};

export default function ShanghaiWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shanghai', href: '/destinations/shanghai' },
            { label: 'Where to Stay' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Stay in Shanghai</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai offers accommodation for every budget and style. Each neighborhood has a distinct
            character — choose based on what you want to experience. The key rule: stay near a Line 1, 2, or 10
            station to avoid traffic. Pair this with our{' '}
            <Link href="/destinations/shanghai/what-to-do" className="underline text-[var(--accent)]">
              What to Do
            </Link>{' '}
            guide to minimize commute time between sights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>

          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏛️ The Bund (外滩)</h3>
              <p className="text-gray-700 mb-2">
                Historic waterfront with colonial architecture. Wake up to Pudong skyline views.
                The most photogenic location in Shanghai, but the most expensive and tourist-heavy.
                Great for a 1-2 night splurge, then move somewhere more local.
              </p>
              <p className="text-sm text-gray-600">💰 ¥800-3000/night | 🚇 Metro: East Nanjing Road (Line 2/10) | 🎯 Best for: Honeymoons, short splurges</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🌳 French Concession (法租界)</h3>
              <p className="text-gray-700 mb-2">
                Tree-lined streets, Art Deco buildings, independent cafes, and vintage shops.
                The most livable neighborhood — quiet lanes a block from buzzing nightlife.
                Best for travelers who want to feel like locals, not tourists.
              </p>
              <p className="text-sm text-gray-600">💰 ¥400-1500/night | 🚇 Metro: South Shaanxi Road (Line 1/10/12) | 🎯 Best for: Culture, food, atmosphere</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏢 Jing’an (静安)</h3>
              <p className="text-gray-700 mb-2">
                Modern business district anchored by Jing’an Temple. High-end shopping (Plaza 66),
                great restaurants, and the best subway connections in the city.
                Busy during the day but quieter than People's Square.
              </p>
              <p className="text-sm text-gray-600">💰 ¥300-1000/night | 🚇 Metro: Jing’an Temple (Line 2/7) | 🎯 Best for: Convenience, shopping</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🎭 Xintiandi (新天地)</h3>
              <p className="text-gray-700 mb-2">
                Restored shikumen (stone-gate) houses turned into bars, restaurants, and boutiques.
                Clean, walkable, and well-connected. Slightly sanitized but undeniably attractive.
                Great for first-timers who want comfort and charm without rough edges.
              </p>
              <p className="text-sm text-gray-600">💰 ¥500-2000/night | 🚇 Metro: Xintiandi (Line 10/13) | 🎯 Best for: Couples, short stays</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🛍️ People's Square (人民广场)</h3>
              <p className="text-gray-700 mb-2">
                Central location with the most budget-friendly options. Walking distance to Nanjing Road,
                Shanghai Museum, and the Bund. Functional rather than atmospheric, but you can't beat
                the location for sightseeing.
              </p>
              <p className="text-sm text-gray-600">💰 ¥200-600/night | 🚇 Metro: People's Square (Line 1/2/8) | 🎯 Best for: Budget travelers, first-timers</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Recommendations</h2>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">💰 Budget & Hostels (Under ¥300)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Mingtown Etour Hostel</strong> — Clean hostel on Nanjing Road. ¥80-150/bed, ¥250/double. Social vibe</li>
                <li><strong>Phoenix Hostel</strong> — French Concession location, rooftop terrace. ¥60-120/bed</li>
                <li><strong>Shanghai Blue Mountain Youth Hostel</strong> — Near Yu Garden, reliable and cheap. ¥50-100/bed</li>
                <li><strong>Le Tour Traveler's Rest</strong> — Jing’an, friendly common room. ¥70-130/bed</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🏨 Mid-Range (¥300-800)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>The Sukhothai (素凯泰)</strong> — Thai-inspired design hotel in Jing’an. ¥600-800/night</li>
                <li><strong>Campanile Shanghai (静安)</strong> — French chain, clean modern rooms. ¥350-500</li>
                <li><strong>SSAW Boutique Hotel (世贸)</strong> — Multiple locations, good value. ¥400-600</li>
                <li><strong>Waterhouse Hotel</strong> — Industrial design near The Bund. ¥450-650</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold">⭐ Luxury (¥800+)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Peninsula Shanghai (半岛酒店)</strong> — Art deco elegance on the Bund. ¥2500+/night. Best views in the city</li>
                <li><strong>Waldorf Astoria</strong> — Heritage building on the Bund, modern tower behind. ¥1800-2500</li>
                <li><strong>Okura Garden Hotel (花园饭店)</strong> — French Concession classic with garden pool. ¥1000-1500</li>
                <li><strong>Andaz Xintiandi (安达仕)</strong> — Stylish and walkable. ¥800-1200</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• <strong>Metro proximity is key</strong> — Shanghai traffic can make 3km take 40 minutes. Stay within 500m of a Line 1, 2, or 10 station</li>
            <li>• <strong>Book early during Canton Fair</strong> (April and October) — prices triple and rooms sell out</li>
            <li>• <strong>French Concession</strong> is the best all-around neighborhood — walkable, authentic, well-connected</li>
            <li>• <strong>Check for construction</strong> — Shanghai builds constantly. Ask the hotel if there&apos;s a site nearby</li>
            <li>• <strong>Budget courtyard hotels</strong> in the French Concession offer the best value-for-atmosphere ratio</li>
            <li>• <strong>WeChat Pay</strong> is accepted everywhere at check-in — some smaller places don&apos;t take foreign credit cards</li>
            <li>• <strong>Plum rain season</strong> (mid-June to early July): rooms feel damp, pack moisture absorbers</li>
          </ul>
        </div>
        <RelatedArticles articles={[
          {title: 'The Bund Area', description: 'Iconic waterfront views and luxury hotels.', href: '/destinations/shanghai/where-to-stay/bund-area'},
          {title: 'Jing’an', description: 'Trendy cafes, temples, and great transport links.', href: '/destinations/shanghai/where-to-stay/jingan'},
          {title: 'What to Do in Shanghai', description: 'The Bund, Yu Garden, and more.', href: '/destinations/shanghai/what-to-do'},
          {title: 'How to Get Around', description: 'Metro, taxi, and ride-hailing tips.', href: '/china-basics/how-to-get-around'},
        ]} />
      </main>
    </div>
  );
}