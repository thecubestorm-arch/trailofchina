import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Where to Eat in Xi’an | Street Food, Noodles, and Muslim Quarter Picks",
  description:
    "A practical Xi’an food guide covering yangroupaomo, roujiamo, liangpi, biangbiang noodles, and how to eat well around the Muslim Quarter.",
};

export default function XianWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: "Xi’an", href: '/destinations/xian' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Eat in Xi&apos;an</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an is one of China&apos;s strongest food cities. Focus on Shaanxi staples, eat at peak
            hours, and use the Muslim Quarter for sampling rather than every meal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Must-Try Foods</h2>
          <p className="text-[#64748b] mb-6">Click any dish for the full guide</p>

          <div className="space-y-4">
            <Link href="/destinations/xian/where-to-eat/yangroupaomo" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🐑 Yangroupaomo (羊肉泡馍)</h3>
              <p className="text-gray-700 mb-2">
                A rich mutton broth served with torn flatbread. Traditional shops let you break the
                bread pieces yourself before they add soup and lamb.
              </p>
              <p className="text-sm text-[#64748b]">📍 Muslim Quarter side streets near Beiyuanmen | 💰 ¥25-45 per bowl</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/where-to-eat/roujiamo" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🥙 Roujiamo (肉夹馍)</h3>
              <p className="text-gray-700 mb-2">
                Crisp baked bun stuffed with chopped braised meat. Pork is most common, but in
                Muslim areas you&apos;ll also find beef or lamb versions.
              </p>
              <p className="text-sm text-[#64748b]">📍 Stalls around Bell Tower and Muslim Quarter | 💰 ¥10-20 each</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/where-to-eat/liangpi" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🥢 Liangpi (凉皮)</h3>
              <p className="text-gray-700 mb-2">
                Cold wheat or rice noodles dressed with vinegar, chili oil, garlic, and cucumber.
                Refreshing and spicy, especially useful in warmer months.
              </p>
              <p className="text-sm text-[#64748b]">📍 Small noodle shops near universities and old town lanes | 💰 ¥8-18 per bowl</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/where-to-eat/biangbiang-noodles" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🍝 Biangbiang Noodles</h3>
              <p className="text-gray-700 mb-2">
                Wide hand-pulled noodles with chili, garlic, and vegetables, often topped with
                braised meat. One of the defining Shaanxi comfort dishes.
              </p>
              <p className="text-sm text-[#64748b]">📍 Casual noodle restaurants inside the City Wall | 💰 ¥18-35 per bowl</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Muslim Quarter Strategy</h2>
          <p className="text-gray-700 leading-relaxed">
            The Muslim Quarter is excellent for street snacks and people-watching. For higher
            consistency, go one or two streets behind the busiest pedestrian lane where prices are
            better and queues are more local.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Recommendations</h2>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">🍜 Budget (Under ¥30)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Morning-only roujiamo counters:</strong> Near local markets, best before 10am</li>
                <li><strong>Tiny liangpi shops:</strong> Just outside major gate intersections</li>
                <li><strong>Muslim Quarter side streets:</strong> One block behind the main strip for better prices</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥30-100)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Family-run yangroupaomo shops:</strong> Hand-torn bread service, ¥30-50/person</li>
                <li><strong>Noodle restaurants inside City Wall:</strong> Biangbiang and more, ¥25-50/person</li>
                <li><strong>Evening Muslim Quarter sit-down:</strong> Grilled meats and soups, ¥40-80/person</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Follow lines where locals queue at lunch and dinner peaks</li>
            <li>• Ask for less chili (少辣) if you&apos;re spice-sensitive</li>
            <li>• Carry cashless payment options; many stalls are mobile-pay first</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tips to Know</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Overpriced skewers on the busiest Muslim Quarter strip</li>
            <li>• Aggressive hawkers pushing low-quality &quot;famous local&quot; combos</li>
          </ul>
        </div>
        <RelatedArticles articles={[
          {title: 'Roujiamo', description: 'The Chinese hamburger — savory, crispy, and cheap.', href: '/destinations/xian/where-to-eat/roujiamo'},
          {title: 'Biangbiang Noodles', description: 'Wide, hand-pulled belt noodles with chili oil.', href: '/destinations/xian/where-to-eat/biangbiang-noodles'},
          {title: 'What to Do in Xi’an', description: 'Terracotta Warriors, City Wall, and Muslim Quarter.', href: '/destinations/xian/what-to-do'},
          {title: 'Xi’an Local Tips', description: 'City Wall bike rentals and market tips.', href: '/destinations/xian/local-tips'},
        ]} />
      </main>
    </div>
  );
}