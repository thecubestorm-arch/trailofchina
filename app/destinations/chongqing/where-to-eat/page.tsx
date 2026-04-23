import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Where to Eat in Chongqing | Trail of China',
  description:
    'A practical food guide to Chongqing: hotpot, xiaomian, grilled fish, Bayi Road, and trusted local-style spots.',
};

export default function ChongqingWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chongqing', href: '/destinations/chongqing' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Eat in Chongqing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing cuisine is bold and unapologetically spicy. Expect deeper málà intensity than Chengdu,
            especially at traditional neighborhood spots.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-Try Foods and Places</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. Chongqing Hotpot (重庆火锅)</h3>
              <p className="text-gray-700 mb-2">
                The city&apos;s signature meal: rich red broth, intense chili, and numbing peppercorn heat. It is
                usually spicier and oilier than Chengdu-style versions.
              </p>
              <p className="text-sm text-gray-600">🕐 Best for dinner | 💰 ~¥80-180 per person | 📍 Jiefangbei, Guanyinqiao, Nanbin Road</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Xiaomian (小面)</h3>
              <p className="text-gray-700 mb-2">
                Everyday Chongqing noodles with chili oil, sesame, garlic, and pickled vegetables. Fast,
                cheap, and ideal for breakfast or late lunch.
              </p>
              <p className="text-sm text-gray-600">🕐 Morning to mid-afternoon | 💰 ~¥8-20 | 📍 Found in every neighborhood</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. Grilled Fish (烤鱼)</h3>
              <p className="text-gray-700 mb-2">
                Whole fish grilled then simmered in seasoned broth with vegetables, tofu, and noodles. Great
                for groups and sharing.
              </p>
              <p className="text-sm text-gray-600">🕐 Lunch and dinner | 💰 ~¥70-180 per fish | 📍 Popular on Nanbin Road</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">4. Bayi Road Night Market (八一路好吃街)</h3>
              <p className="text-gray-700 mb-2">
                A dense street-food corridor for skewers, potato twists, spicy cold dishes, and local sweets.
                Useful for trying many snacks in one place.
              </p>
              <p className="text-sm text-gray-600">🕐 18:00-late | 💰 ~¥10-60 | 📍 Near Jiefangbei pedestrian area</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">5. Local-Style Restaurant Picks</h3>
              <p className="text-gray-700 mb-2">
                Try high-volume local chains and busy neighborhood kitchens for consistency. Commonly
                recommended options include <strong>Cygnet Hotpot (鸿姐老火锅)</strong>, <strong>Qinma Hotpot (秦妈火锅)</strong>, and
                long-running xiaomian shops around Jiefangbei and Shapingba.
              </p>
              <p className="text-sm text-gray-600">🕐 Peak at dinner | 💰 Varies by venue | 📍 Multiple branches citywide</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Community xiaomian stalls:</strong> Often better than heavily marketed shops</li>
            <li><strong>Hotpot with yuan-yang broth:</strong> Split pot lets you control heat level</li>
            <li><strong>Early-evening barbecue lanes:</strong> Better ingredient turnover than very late hours</li>
            <li><strong>Riverside grilled fish clusters:</strong> Excellent night views with dinner</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• "Mild" is still spicy in Chongqing - ask for very low heat if needed</li>
            <li>• Order fewer dishes first; portions can be larger than expected</li>
            <li>• Keep a milk tea or soy drink nearby for heat relief</li>
            <li>• Busy restaurants with quick table turnover are usually safest bets</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-8">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tourist Traps to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Empty "famous" hotpot shops with aggressive street promoters</li>
            <li>• Ordering maximum spice level on your first Chongqing meal</li>
            <li>• Assuming every high-rated listing is recent or locally trusted</li>
          </ul>
        </div>

        <section className="mt-8 pt-8 border-t" aria-labelledby="explore-in-detail">
          <h2 id="explore-in-detail" className="text-xl font-semibold mb-3 text-gray-900">Explore in Detail</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/destinations/chongqing/where-to-eat/chongqing-hotpot" className="text-[var(--accent)] hover:underline">
              Chongqing Hotpot →
            </Link>
            <Link href="/destinations/chongqing/where-to-eat/xiaomian" className="text-[var(--accent)] hover:underline">
              Xiaomian →
            </Link>
            <Link href="/destinations/chongqing/where-to-eat/grilled-fish" className="text-[var(--accent)] hover:underline">
              Grilled Fish →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
