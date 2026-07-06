import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Eat in Chengdu | Hotpot, Noodles, and Local Classics',
  description:
    'Chengdu food guide covering hotpot, mapo tofu, kung pao chicken, dan dan noodles, and where to eat near key sights.',
  openGraph: {
    title: 'Where to Eat in Chengdu - Trail of China',
    description: 'Hotpot, noodles, and local classics in Chengdu.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Where to Eat in Chengdu - Trail of China' }],
  },
};

export default function ChengduWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chengdu', href: '/destinations/chengdu' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Eat in Chengdu</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu is one of China&apos;s top food cities, and flavor here is built around heat, fragrance,
            and numbness. The key word is <strong>málà (麻辣)</strong>: málá = numbing-spicy from Sichuan
            peppercorn (花椒) plus chili oil. Start medium, then level up over several meals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Must-Try Foods</h2>
          <p className="text-[#64748b] mb-6">Click any dish for the full guide</p>

          <div className="space-y-4">
            <Link href="/destinations/chengdu/where-to-eat/sichuan-hotpot" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🌶️ Sichuan Hotpot (四川火锅)</h3>
              <p className="text-gray-700 mb-2">
                Bubbling red broth loaded with chili and peppercorn. Order a split pot (鸳鸯锅) if you want
                one mild side for recovery between spicy bites.
              </p>
              <p className="text-sm text-[#64748b]">📍 Jinjiang and Chunxi districts | 💰 Mid to high</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/where-to-eat/mapo-tofu" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🧈 Mapo Tofu (麻婆豆腐)</h3>
              <p className="text-gray-700 mb-2">
                Soft tofu in aromatic chili-bean sauce with minced meat and peppercorn fragrance.
                One of the core dishes to judge a Sichuan kitchen.
              </p>
              <p className="text-sm text-[#64748b]">📍 Traditional Sichuan restaurants citywide | 💰 Budget friendly</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/where-to-eat/kung-pao-chicken" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🥜 Kung Pao Chicken (宫保鸡丁)</h3>
              <p className="text-gray-700 mb-2">
                The Chengdu original balances sweet, sour, chili heat, and roasted peanuts.
                Local versions are usually more layered than overseas adaptations.
              </p>
              <p className="text-sm text-[#64748b]">📍 Family-style eateries near Wenshu and Wuhou | 💰 Budget to mid</p>
              <span className="text-sm text-[var(--accent)] font-medium">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/where-to-eat/dan-dan-noodles" className="block border rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold">🍜 Dan Dan Noodles (担担面)</h3>
              <p className="text-gray-700 mb-2">
                Wheat noodles with chili oil, sesame, pickled greens, and minced topping.
                Portions are small, so pair with dumplings or cold dishes.
              </p>
              <p className="text-sm text-[#64748b]">📍 Local noodle shops everywhere | 💰 Low cost</p>
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
                <li><strong>Morning noodle lanes near Wenshu:</strong> Short menus, high turnover, very local taste</li>
                <li><strong>Community hotpot strips:</strong> Less polished decor, often better broth depth</li>
                <li><strong>Late-night chuanchuan (串串):</strong> Skewers priced by stick for budget variety</li>
                <li><strong>Tea + snack courtyards:</strong> Good way to cool down between spicy meals</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥50-200)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Lao Ma Tou Hotpot (老码头火锅)</strong> — Classic style hotpot, ¥80-130/person</li>
                <li><strong>Ming Ting Fan Dian (明婷饭店)</strong> — Home-style Sichuan intensity, ¥50-90/person</li>
                <li><strong>Jinli Street Snacks (锦里小吃)</strong> — Rabbit head, sweet rice cakes, skewers. Touristy but fun for sampling</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Ask for &quot;wēi là&quot; (微辣, mild spice) if you are new to Sichuan heat.</li>
            <li>• Balance spicy dishes with iced soy milk or plum juice.</li>
            <li>• Use our <Link href="/destinations/chengdu/what-to-do" className="underline">What to Do page</Link> to eat near your sightseeing route.</li>
            <li>• Book dinner early on Fridays and Saturdays in central districts.</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tips to Know</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• &quot;Authentic hotpot&quot; spots with no local diners during prime dinner hours.</li>
            <li>• Ordering maximum spice on your first meal and losing the next day.</li>
          </ul>
        </div>
        <RelatedArticles articles={[
          {title: 'Sichuan Hotpot', description: 'Numbing, spicy, and utterly addictive.', href: '/destinations/chengdu/where-to-eat/sichuan-hotpot'},
          {title: 'Mapo Tofu', description: 'Silken tofu in fiery chili oil — a Sichuan classic.', href: '/destinations/chengdu/where-to-eat/mapo-tofu'},
          {title: 'What to Do in Chengdu', description: 'Pandas, teahouses, and opera nights.', href: '/destinations/chengdu/what-to-do'},
          {title: 'Chengdu Local Tips', description: 'Chili tolerance and local etiquette.', href: '/destinations/chengdu/local-tips'},
        ]} />
      </main>
    </div>
  );
}