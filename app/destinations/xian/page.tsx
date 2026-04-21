import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Xi'an Travel Guide | Trail of China",
  description:
    "Plan a complete Xi'an trip with this city guide covering Terracotta Warriors, food streets, best neighborhoods, and practical local tips for first-time visitors.",
};

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
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Xi&apos;an</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an was the capital for 13 dynasties and still feels like living history. You can spend the morning with the
            Terracotta Warriors (兵马俑), cycle a complete Ming city wall at sunset, then eat your way through the Muslim Quarter.
            It is one of China&apos;s easiest cities for first-time independent travel.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <article key={section.href} className={index < sections.length - 1 ? 'border-b border-[#ebe4d8] pb-8 mb-8' : ''}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1f2933] mt-3">{section.title}</h2>
              <p className="text-base md:text-lg text-[#4a5568] leading-relaxed mt-3">{section.preview}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f1ea] text-sm text-[#1f2933]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={section.href} className="inline-flex items-center gap-1 text-[#af5d32] font-semibold mt-4 hover:underline">
                Read guide →
              </Link>
            </article>
          ))}
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Xi&apos;an</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Reach Terracotta Warriors at opening time to avoid major group-tour crowds.</li>
            <li>• The City Wall is a full 14 km loop, so carry water if biking in summer.</li>
            <li>• Muslim Quarter is busiest after dark; go hungry and bring cash for small stalls.</li>
            <li>• Pair this page with the detailed <Link href="/destinations/xian/what-to-do" className="underline">What to Do guide</Link> to plan your route efficiently.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
