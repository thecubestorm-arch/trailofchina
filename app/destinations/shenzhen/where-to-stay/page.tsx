import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Stay in Shenzhen | Futian, Nanshan & Luohu Neighborhoods',
  description: 'Best areas to stay in Shenzhen: Futian for central convenience, Nanshan for tech and art, Luohu for Hong Kong border access. Budget hostels to luxury hotels.',
  openGraph: {
    title: 'Where to Stay in Shenzhen - Trail of China',
    description: 'Best neighborhoods and hotels in Shenzhen.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Where to Stay in Shenzhen - Trail of China' }],
  },
};

export default function ShenzhenWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shenzhen', href: '/destinations/shenzhen' },
            { label: 'Where to Stay' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Stay in Shenzhen</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shenzhen&apos;s three main districts offer very different experiences. Futian is the central business hub
            with the best metro connections. Nanshan is the tech district with art galleries and sea views.
            Luohu is the border crossing to Hong Kong and the budget option. Pair this with our{' '}
            <Link href="/destinations/shenzhen/what-to-do" className="underline text-[var(--accent)]">
              What to Do
            </Link>{' '}
            guide to minimize commute time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>

          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏢 Futian District (福田)</h3>
              <p className="text-gray-700 mb-2">
                Central business district with the best metro connections, Coco Park nightlife, and walking distance
                to Ping An Finance Centre and Lianhuashan Park. The most convenient base for first-time visitors.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥300–1500/night | 🚇 Metro: Civic Center, Shopping Park, Coco Park | 🎯 Best for: First-timers, business travelers, nightlife</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🎨 Nanshan District (南山)</h3>
              <p className="text-gray-700 mb-2">
                Tech district with OCT Loft art galleries, Sea World dining, and a more relaxed vibe. Home to Tencent
                and many startups. Great if you want galleries, cafés, and a neighborhood feel rather than skyscrapers.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥400–2000/night | 🚇 Metro: Window of the World, Houhai | 🎯 Best for: Art lovers, longer stays, tech workers</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🛃 Luohu District (罗湖)</h3>
              <p className="text-gray-700 mb-2">
                The border crossing to Hong Kong — walk across the Futian checkpoint and you&apos;re in a different country
                in 15 minutes. Budget hotels, Dongmen night market, and old Shenzhen atmosphere. Not the prettiest, but
                the most practical if you&apos;re day-tripping to Hong Kong.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥150–600/night | 🚇 Metro: Laojie, Luohu | 🎯 Best for: Budget travelers, Hong Kong day trips</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Recommendations</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">💰 Budget (Under ¥300)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Luohu guesthouses</strong> — Basic but clean, near border crossing. ¥100–200/night</li>
                <li><strong>Dongmen area hostels</strong> — Walking distance to night market. ¥80–150/bed, ¥200–300/double</li>
                <li><strong>Futian business hotels</strong> — Small rooms, great location. ¥200–300</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🏨 Mid-Range (¥300–800)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Courtyard by Marriott (Futian)</strong> — Reliable international standard. ¥500–700/night</li>
                <li><strong>Nanshan business hotels</strong> — Near OCT Loft and Sea World. ¥400–600</li>
                <li><strong>Huaqiangbei area hotels</strong> — Close to electronics market. ¥300–500</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold">⭐ Luxury (¥800+)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>The Ritz-Carlton (Futian)</strong> — Five-star with skyline views. ¥1200–2000/night</li>
                <li><strong>Park Hyatt (Futian)</strong> — Next to Ping An Finance Centre. ¥1000–1800</li>
                <li><strong>Marriott Nanshan</strong> — Sea views and tech district location. ¥800–1200</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• <strong>Futian is best for first-timers</strong> — central, connected, and close to everything</li>
            <li>• <strong>Nanshan is best for art and cafés</strong> — OCT Loft and Sea World are walkable</li>
            <li>• <strong>Luohu is best for Hong Kong day trips</strong> — walk across the border in 15 minutes</li>
            <li>• <strong>Metro proximity matters</strong> — Lines 1, 2, and 11 connect most key areas</li>
            <li>• <strong>WeChat Pay is accepted at check-in everywhere</strong> — some budget places don&apos;t take foreign cards</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Futian District', description: 'Central business district with best metro connections.', href: '/destinations/shenzhen/where-to-stay/futian-district'},
          {title: 'What to Do in Shenzhen', description: 'Top attractions and experiences.', href: '/destinations/shenzhen/what-to-do'},
          {title: 'Hong Kong Day Trip', description: 'Cross the border for a day trip.', href: '/destinations/shenzhen/day-trips/hong-kong'},
          {title: 'Shenzhen Local Tips', description: 'Metro, border crossings, and more.', href: '/destinations/shenzhen/local-tips'},
        ]} />
      </main>
    </div>
  );
}