import { Metadata } from 'next';
import Link from 'next/link';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: "Xi’an Travel Guide | Trail of China",
  description:
    "Plan a complete Xi’an trip with this city guide covering Terracotta Warriors, food streets, best neighborhoods, and practical local tips for first-time visitors.",

  path: '/destinations/xian',
});

const sections = [
  {
    category: 'Guide Section',
    title: '📍 What to Do',
    preview:
      'Xi\'an is anchored by the Terracotta Warriors, but the city wall and Muslim Quarter are just as essential for first-time visitors. Pair a morning history stop with sunset cycling on the wall and an evening food walk through old lanes.',
    tags: ['Terracotta Warriors', 'City Wall', 'Muslim Quarter', 'Historic Core'],
    href: '/destinations/xian/what-to-do',
  },
  {
    category: 'Guide Section',
    title: '🍜 Where to Eat',
    preview:
      'Build your food list around biang biang noodles, roujiamo, and other Shaanxi staples served in simple, fast-moving local spots. The best meals are often near busy markets where turnover is high and flavors stay bold.',
    tags: ['Biang Biang Noodles', 'Roujiamo', 'Shaanxi Classics', 'Market Eats'],
    href: '/destinations/xian/where-to-eat',
  },
  {
    category: 'Guide Section',
    title: '🏨 Where to Stay',
    preview:
      'Staying near the Bell Tower keeps most key sights, transit links, and dining zones within easy reach. It is the most practical base if you want to mix sightseeing days with evening walks and quick food stops.',
    tags: ['Bell Tower', 'Central Base', 'Walkability', 'Transit Links'],
    href: '/destinations/xian/where-to-stay',
  },
  {
    category: 'Guide Section',
    title: '💡 Local Tips',
    preview:
      'Reserve Terracotta Warriors tickets in advance whenever possible, especially on weekends and public holidays. Go earlier in the day for smoother entry and more time back in the city for wall views and dinner.',
    tags: ['Advance Booking', 'Warriors Entry', 'Morning Visits', 'Crowd Control'],
    href: '/destinations/xian/local-tips',
  },
];

export default function XianPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative">
          <ChineseWatermark character="西安" />
          <h1 className="text-5xl font-bold mb-6 text-[#1a3a4a]">Xi&apos;an</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an was the capital for 13 dynasties and still feels like living history. You can spend the morning with the
            Terracotta Warriors (兵马俑), cycle a complete Ming city wall at sunset, then eat your way through the Muslim Quarter.
            It is one of China&apos;s easiest cities for first-time independent travel.
          </p>
        </section>

        <section aria-labelledby="xian-guide-sections">
          <h2 id="xian-guide-sections" className="text-2xl font-semibold mb-4 text-[#1a3a4a]">Explore Xi&apos;an</h2>
          {sections.map((section, index) => (
            <Link key={section.href} href={section.href} className={`block cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#fdf8f3] ${index < sections.length - 1 ? 'border-b border-[#ebe4d8] pb-8 mb-8' : ''}`}>
              <article className="py-8 px-6 -mx-6 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mt-3">{section.title}</h3>
              <p className="text-base md:text-lg text-[#4a5568] leading-relaxed mt-3">{section.preview}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f1ea] text-sm text-[#1a3a4a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-[#af5d32]">
                Read guide →</span>
            </article>
            </Link>
          ))}
        </section>

        <section aria-labelledby="xian-quick-tips" className="mb-8">
          <h2 id="xian-quick-tips" className="text-2xl font-semibold mb-4 text-[#1a3a4a]">Quick Tips</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
            <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Xi&apos;an</h3>
            <ul className="text-amber-900 space-y-2">
              <li>• Reach Terracotta Warriors at opening time to avoid major group-tour crowds.</li>
              <li>• The City Wall is a full 14 km loop, so carry water if biking in summer.</li>
              <li>• Muslim Quarter is busiest after dark; go hungry and bring cash for small stalls.</li>
              <li>• Pair this page with the detailed <Link href="/destinations/xian/what-to-do" className="underline">What to Do guide</Link> to plan your route efficiently.</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">✈️ Getting Here</h2>
          <div className="space-y-4">
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Airports</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>✈️ <strong>Xi'an Xianyang International Airport (XIY)</strong> — 40km NW, Airport Metro Line 14, 60min</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Train Stations</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>🚄 <strong>Xi'an North Station</strong> — High-speed to Beijing, Shanghai, Chengdu</li>
              </ul>
            </div>
            <p className="text-[#64748b]">
              For inter-city routes, see our <Link href="/china-basics/how-to-get-around/city-to-city" className="text-[#af5d32] font-semibold underline">City-to-City Transport Guide</Link>.
            </p>
          </div>
        </section>

        <RelatedArticles articles={[
          {title: 'What to Do in Xi’an', description: 'Terracotta Warriors, City Wall, and Muslim Quarter.', href: '/destinations/xian/what-to-do'},
          {title: 'Where to Eat in Xi’an', description: 'Roujiamo, biangbiang noodles, and yangroupaomo.', href: '/destinations/xian/where-to-eat'},
          {title: 'Where to Stay in Xi’an', description: 'Bell Tower, Muslim Quarter, and Dayan Pagoda areas.', href: '/destinations/xian/where-to-stay'},
          {title: 'Xi’an Local Tips', description: 'City Wall bike rentals, market haggling, and more.', href: '/destinations/xian/local-tips'},
        ]} />
      </main>
    </div>
  );
}
