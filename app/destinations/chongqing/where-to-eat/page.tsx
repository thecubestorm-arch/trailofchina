import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Eat in Chongqing | Trail of China',
  description:
    'A practical food guide to Chongqing: hotpot, xiaomian, grilled fish, Bayi Road, and trusted local-style spots.',
};

export default function ChongqingWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chongqing', href: '/destinations/chongqing' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Eat in Chongqing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing cuisine is bold and unapologetically spicy. Expect deeper málà intensity than Chengdu,
            especially at traditional neighborhood spots.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Must-Try Foods</h2>
          <p className="text-[#64748b] mb-6">Click any dish for the full guide</p>

          <div className="space-y-4">
            <Link href="/destinations/chongqing/where-to-eat/chongqing-hotpot" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🌶️ Chongqing Hotpot (重庆火锅)</h3>
              <p className="text-gray-700 mb-2">
                The city&apos;s signature meal: rich red broth, intense chili, and numbing peppercorn heat.
                Usually spicier and oilier than Chengdu-style versions.
              </p>
              <p className="text-sm text-[#64748b]">📍 Jiefangbei, Guanyinqiao, Nanbin Road | 💰 ¥80-180/person</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/chongqing/where-to-eat/xiaomian" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🍜 Xiaomian (小面)</h3>
              <p className="text-gray-700 mb-2">
                Everyday Chongqing noodles with chili oil, sesame, garlic, and pickled vegetables. Fast,
                cheap, and ideal for breakfast or late lunch.
              </p>
              <p className="text-sm text-[#64748b]">📍 Found in every neighborhood | 💰 ¥8-20</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/chongqing/where-to-eat/grilled-fish" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🐟 Grilled Fish (烤鱼)</h3>
              <p className="text-gray-700 mb-2">
                Whole fish grilled then simmered in seasoned broth with vegetables, tofu, and noodles.
                Great for groups and sharing.
              </p>
              <p className="text-sm text-[#64748b]">📍 Popular on Nanbin Road | 💰 ¥70-180 per fish</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Recommendations</h2>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">🌶️ Budget (Under ¥50)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Community xiaomian stalls:</strong> Often better than heavily marketed shops</li>
                <li><strong>Bayi Road Night Market (八一路好吃街):</strong> Skewers, potato twists, spicy cold dishes, local sweets. ¥10-60</li>
                <li><strong>Early-evening barbecue lanes:</strong> Better ingredient turnover than very late hours</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥50-200)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Cygnet Hotpot (鸿姐老火锅)</strong> — High-volume local chain, ¥80-130/person</li>
                <li><strong>Qinma Hotpot (秦妈火锅)</strong> — Reliable citywide favorite, ¥70-120/person</li>
                <li><strong>Riverside grilled fish clusters:</strong> Excellent night views with dinner, ¥80-150/person</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• &quot;Mild&quot; is still spicy in Chongqing — ask for very low heat if needed</li>
            <li>• Order fewer dishes first; portions can be larger than expected</li>
            <li>• Keep a milk tea or soy drink nearby for heat relief</li>
            <li>• Busy restaurants with quick table turnover are usually safest bets</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tips to Know</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Ordering maximum spice level on your first Chongqing meal</li>
            <li>• Assuming every high-rated listing is recent or locally trusted</li>
          </ul>
        </div>
        <RelatedArticles articles={[
          {title: 'Chongqing Hotpot', description: 'Mala hotpot in its birthplace — not for the faint-hearted.', href: '/destinations/chongqing/where-to-eat/chongqing-hotpot'},
          {title: 'Xiaomian', description: 'Chongqing’s beloved spicy noodle soup.', href: '/destinations/chongqing/where-to-eat/xiaomian'},
          {title: 'What to Do in Chongqing', description: 'Hongya Cave, Liziba, and more.', href: '/destinations/chongqing/what-to-do'},
          {title: 'Chongqing Local Tips', description: 'Navigating the 3D city like a local.', href: '/destinations/chongqing/local-tips'},
        ]} />
      </main>
    </div>
  );
}