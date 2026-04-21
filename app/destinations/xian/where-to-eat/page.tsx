import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Where to Eat in Xi'an | Street Food, Noodles, and Muslim Quarter Picks",
  description:
    "A practical Xi'an food guide covering yangroupaomo, roujiamo, liangpi, biangbiang noodles, and how to eat well around the Muslim Quarter.",
};

export default function XianWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Eat in Xi&apos;an</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an is one of China&apos;s strongest food cities. Focus on Shaanxi staples, eat at peak
            hours, and use the Muslim Quarter for sampling rather than every meal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-Try Dishes</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Yangroupaomo (羊肉泡馍)</h3>
              <p className="text-gray-700">
                A rich mutton broth served with torn flatbread. Traditional shops let you break the
                bread pieces yourself before they add soup and lamb.
              </p>
              <p className="text-sm text-gray-600 mt-3">🕐 Best time: Lunch or late dinner when broth is freshest</p>
              <p className="text-sm text-gray-600">💰 Typical cost: ¥25-45 per bowl</p>
              <p className="text-sm text-gray-600">📍 Best area: Muslim Quarter side streets near Beiyuanmen</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Roujiamo (肉夹馍)</h3>
              <p className="text-gray-700">
                Crisp baked bun stuffed with chopped braised meat. Pork is most common, but in
                Muslim areas you&apos;ll also find beef or lamb versions.
              </p>
              <p className="text-sm text-gray-600 mt-3">🕐 Best time: Morning snack or quick midday bite</p>
              <p className="text-sm text-gray-600">💰 Typical cost: ¥10-20 each</p>
              <p className="text-sm text-gray-600">📍 Best area: Stalls around Bell Tower and Muslim Quarter</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Liangpi (凉皮)</h3>
              <p className="text-gray-700">
                Cold wheat or rice noodles dressed with vinegar, chili oil, garlic, and cucumber.
                It&apos;s refreshing and spicy, especially useful in warmer months.
              </p>
              <p className="text-sm text-gray-600 mt-3">🕐 Best time: Late morning to afternoon</p>
              <p className="text-sm text-gray-600">💰 Typical cost: ¥8-18 per bowl</p>
              <p className="text-sm text-gray-600">📍 Best area: Small noodle shops near universities and old town lanes</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Biangbiang Noodles</h3>
              <p className="text-gray-700">
                Wide hand-pulled noodles with chili, garlic, and vegetables, often topped with
                braised meat. This is one of the defining Shaanxi comfort dishes.
              </p>
              <p className="text-sm text-gray-600 mt-3">🕐 Best time: Dinner, especially on colder nights</p>
              <p className="text-sm text-gray-600">💰 Typical cost: ¥18-35 per bowl</p>
              <p className="text-sm text-gray-600">📍 Best area: Casual noodle restaurants inside the City Wall</p>
            </div>
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

        <div className="bg-emerald-50 rounded-lg p-4 mb-8">
          <h3 className="font-semibold text-emerald-900 mb-2">Hidden Gems</h3>
          <ul className="text-emerald-900 space-y-2">
            <li>• Morning-only roujiamo counters near local markets</li>
            <li>• Family-run yangroupaomo shops with hand-torn bread service</li>
            <li>• Tiny liangpi shops just outside major gate intersections</li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Follow lines where locals queue at lunch and dinner peaks</li>
            <li>• Ask for less chili (少辣) if you&apos;re spice-sensitive</li>
            <li>• Carry cashless payment options; many stalls are mobile-pay first</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-10">
          <h3 className="font-semibold text-red-800 mb-2">Tourist Traps</h3>
          <ul className="text-red-900 space-y-2">
            <li>• Overpriced skewers on the busiest Muslim Quarter strip</li>
            <li>• Menus without prices in multilingual tourist corridors</li>
            <li>• Aggressive hawkers pushing low-quality “famous local” combos</li>
          </ul>
        </div>

        <Link href="/destinations/xian" className="text-[var(--accent-strong)] hover:underline">
          ← Back to Xi&apos;an Guide
        </Link>
      </main>
    </div>
  );
}
