import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Where to Eat in Chengdu | Hotpot, Noodles, and Local Classics',
  description:
    'Chengdu food guide covering hotpot, mapo tofu, kung pao chicken, dan dan noodles, and where to eat near key sights.',
};

export default function ChengduWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chengdu', href: '/destinations/chengdu' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Eat in Chengdu</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu is one of China&apos;s top food cities, and flavor here is built around heat, fragrance,
            and numbness. The key word is <strong>málà (麻辣)</strong>: málá = numbing-spicy from Sichuan
            peppercorn (花椒) plus chili oil. Start medium, then level up over several meals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-Try Dishes and Spots</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. Sichuan Hotpot (四川火锅)</h3>
              <p className="text-gray-700 mb-2">
                Bubbling red broth loaded with chili and peppercorn. Order a split pot (鸳鸯锅) if you want
                one mild side for recovery between spicy bites.
              </p>
              <p className="text-sm text-gray-600">🕐 Best at dinner | 💰 Mid to high by ingredients | 📍 Popular across Jinjiang and Chunxi</p>
            </article>

            <article className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Mapo Tofu (麻婆豆腐)</h3>
              <p className="text-gray-700 mb-2">
                Soft tofu in aromatic chili-bean sauce with minced meat and peppercorn fragrance.
                One of the core dishes to judge a Sichuan kitchen.
              </p>
              <p className="text-sm text-gray-600">🕐 Lunch or dinner | 💰 Budget friendly | 📍 Traditional Sichuan restaurants citywide</p>
            </article>

            <article className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. Kung Pao Chicken (宫保鸡丁)</h3>
              <p className="text-gray-700 mb-2">
                The Chengdu original balances sweet, sour, chili heat, and roasted peanuts.
                Local versions are usually more layered than overseas adaptations.
              </p>
              <p className="text-sm text-gray-600">🕐 Lunch is ideal | 💰 Budget to mid | 📍 Family-style eateries near Wenshu and Wuhou</p>
            </article>

            <article className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">4. Dan Dan Noodles (担担面)</h3>
              <p className="text-gray-700 mb-2">
                Wheat noodles with chili oil, sesame, pickled greens, and minced topping.
                Portions are small, so pair with dumplings or cold dishes.
              </p>
              <p className="text-sm text-gray-600">🕐 Great for breakfast or light lunch | 💰 Low cost | 📍 Local noodle shops everywhere</p>
            </article>

            <article className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">5. Specific Restaurant Ideas</h3>
              <p className="text-gray-700 mb-2">
                Consider brands with strong local reputation such as Lao Ma Tou Hotpot (老码头火锅)
                for classic style, or Ming Ting Fan Dian (明婷饭店) for home-style Sichuan intensity.
              </p>
              <p className="text-sm text-gray-600">🕐 Reserve peak hours | 💰 Varies by venue | 📍 Multiple districts</p>
            </article>

            <article className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">6. Jinli Street Snacks (锦里小吃)</h3>
              <p className="text-gray-700 mb-2">
                Sample rabbit head (兔头), sweet rice cakes, and skewers. It is more touristy,
                but still useful for quick tasting rounds.
              </p>
              <p className="text-sm text-gray-600">🕐 Late afternoon onward | 💰 Pay per snack | 📍 Jinli Ancient Street</p>
            </article>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Morning noodle lanes near Wenshu:</strong> Short menus, high turnover, very local taste.</li>
            <li><strong>Community hotpot strips:</strong> Less polished decor, often better broth depth.</li>
            <li><strong>Late-night chuanchuan (串串):</strong> Skewers priced by stick for budget variety.</li>
            <li><strong>Tea + snack courtyards:</strong> Good way to cool down between spicy meals.</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Ask for "wēi là" (微辣, mild spice) if you are new to Sichuan heat.</li>
            <li>• Balance spicy dishes with iced soy milk or plum juice.</li>
            <li>• Use our <Link href="/destinations/chengdu/what-to-do" className="underline">What to Do page</Link> to eat near your sightseeing route.</li>
            <li>• Book dinner early on Fridays and Saturdays in central districts.</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-12">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tourist Traps to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Menus without clear prices near top tourist lanes.</li>
            <li>• "Authentic hotpot" spots with no local diners during prime dinner hours.</li>
            <li>• Ordering maximum spice on your first meal and losing the next day.</li>
          </ul>
        </div>

        <div>
          <Link href="/destinations/chengdu" className="text-[var(--accent)] font-medium hover:underline">
            ← Back to Chengdu Guide
          </Link>
        </div>

        <section className="mt-8 pt-8 border-t" aria-labelledby="explore-in-detail">
          <h2 id="explore-in-detail" className="text-xl font-semibold mb-3 text-gray-900">Explore in Detail</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/destinations/chengdu/where-to-eat/sichuan-hotpot" className="text-[var(--accent)] hover:underline">
              Sichuan Hotpot →
            </Link>
            <Link href="/destinations/chengdu/where-to-eat/mapo-tofu" className="text-[var(--accent)] hover:underline">
              Mapo Tofu →
            </Link>
            <Link href="/destinations/chengdu/where-to-eat/dan-dan-noodles" className="text-[var(--accent)] hover:underline">
              Dan Dan Noodles →
            </Link>
            <Link href="/destinations/chengdu/where-to-eat/kung-pao-chicken" className="text-[var(--accent)] hover:underline">
              Kung Pao Chicken →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
