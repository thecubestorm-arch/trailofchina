import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Eat in Beijing | Peking Duck, Hutong Food & Local Eats',
  description:
    'Best places to eat in Beijing: Peking duck at Quanjude and Siji Minfu, hutong noodle shops, jianbing stands, and the Muslim Quarter. Budget to fine dining.',
};

export default function BeijingWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Beijing', href: '/destinations/beijing' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Eat in Beijing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing&apos;s food is hearty, wheat-heavy, and deeply tied to imperial history. Peking duck is the headline act, but the city&apos;s
            real depth shows in its hutong noodle shops, street-side jianbing carts, and the Muslim Quarter&apos;s lamb skewers.
            Pair this page with our{' '}
            <Link href="/destinations/beijing/local-tips" className="underline text-[var(--accent)]">
              Local Tips
            </Link>{' '}
            to avoid tourist-trap restaurants near major sights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Must-Try Foods</h2>
          <p className="text-gray-600 mb-6">Click any dish for the full guide</p>

          <div className="space-y-4">
            <Link href="/destinations/beijing/where-to-eat/peking-duck" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Peking Duck (北京烤鸭)</h3>
              <p className="text-gray-700 mb-2">
                Crispy lacquered skin, tender meat, wrapped in thin pancakes with scallion and sweet bean sauce.
                The dish dates to the imperial court and remains Beijing&apos;s defining meal.
              </p>
              <p className="text-sm text-gray-600">📍 Best: Quanjude (全聚德), Siji Minfu (四季民福), Da Dong (大董) | 💰 ¥150-300 per person</p>
            </Link>

            <Link href="/destinations/beijing/where-to-eat/jianbing" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Jianbing (煎饼)</h3>
              <p className="text-gray-700 mb-2">
                Savory crepe with egg, scallions, cilantro, and a crispy cracker (薄脆) folded inside.
                The best ones come from morning street carts near subway entrances.
              </p>
              <p className="text-sm text-gray-600">📍 Street carts, 6:00-9:00 AM | 💰 ¥8-15</p>
            </Link>

            <Link href="/destinations/beijing/where-to-eat/zhajiangmian" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Zhajiangmian (炸酱面)</h3>
              <p className="text-gray-700 mb-2">
                Beijing&apos;s signature noodle bowl: hand-pulled wheat noodles topped with fermented soybean paste
                and fresh vegetables (cucumber, bean sprouts, radish). Cheap, filling, and everywhere.
              </p>
              <p className="text-sm text-gray-600">📍 Old Beijing Noodle King (老北京炸酱面) | 💰 ¥20-35</p>
            </Link>

            <Link href="/destinations/beijing/where-to-eat/lamb-skewers" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Lamb Skewers (羊肉串) at Muslim Quarter (牛街)</h3>
              <p className="text-gray-700 mb-2">
                Cumin-dusted lamb skewers grilled over charcoal in the Niujie (Muslim Quarter) area.
                Come after 6 PM when the smoke and crowds make it feel like a festival.
              </p>
              <p className="text-sm text-gray-600">📍 Niujie (牛街), Xicheng | 💰 ¥3-5 per skewer</p>
            </Link>

            <Link href="/destinations/beijing/where-to-eat/baodu" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Baodu (爆肚) — Tripe Quick-Boil</h3>
              <p className="text-gray-700 mb-2">
                Sliced beef tripe blanched for seconds in boiling water, dipped in sesame paste.
                An old Beijing snack that sounds intimidating but has a clean, bouncy texture.
              </p>
              <p className="text-sm text-gray-600">📍 Baodu Feng (爆肚冯), Qianmen area | 💰 ¥25-40</p>
            </Link>

            <Link href="/destinations/beijing/where-to-eat/tanghulu" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Tanghulu (糖葫芦)</h3>
              <p className="text-gray-700 mb-2">
                Candied hawthorn berries on a stick — crunchy sugar shell, sour fruit inside.
                Available from street vendors everywhere, especially around temple fairs and Wangfujing.
              </p>
              <p className="text-sm text-gray-600">📍 Street vendors | 💰 ¥10-20</p>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Recommendations</h2>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">🍜 Budget (Under ¥50)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Jia Chang Cai (家常菜)</strong> — Home-style cooking, any hutong restaurant with red lanterns out front. ¥20-40/dish</li>
                <li><strong>Yunnan Road snack stalls</strong> — Jianbing, baozi, and soy milk breakfast. ¥8-15/item</li>
                <li><strong>Niujie lamb skewer stands</strong> — After-dark street grills. ¥3-5/skewer</li>
                <li><strong>Qing-Feng Steamed Dumpling Shop (庆丰包子铺)</strong> — Baozi and congee breakfast. ¥15-25</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥50-200)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Siji Minfu (四季民福)</strong> — Best Peking duck for the price. Multiple locations. ¥130/person. Reserve or wait 1hr+</li>
                <li><strong>Da Dong (大董)</strong> — Modern duck with artistic plating. ¥180/person. Great for dates</li>
                <li><strong>TRB Hutong</strong> — European fine dining inside a 600-year-old temple courtyard. ¥300+ lunch set</li>
                <li><strong>Zhengzhou Urn Chicken (郑州烩面)</strong> — Braised chicken and noodles in a clay urn. ¥50-80</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold">⭐ Fine Dining (¥200+)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Quanjude (全聚德) — Qianmen flagship</strong> — The original 1864 duck restaurant. Touristy but historic. ¥250+</li>
                <li><strong>Green T. House</strong> — Art-space restaurant with Chinese fusion. ¥300+/person</li>
                <li><strong>King&apos;s Joy (京兆尹)</strong> — Michelin-starred vegetarian in a hutong courtyard. ¥400+ tasting menu</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Siji Minfu has the best duck-to-price ratio — arrive before 11:30 AM or 5:00 PM to avoid 1h+ wait</li>
            <li>• Quanjude Qianmen is the original but most touristy; Siji Minfu and Da Dong are better food</li>
            <li>• Breakfast on the street (jianbing + soy milk) costs under ¥15 and is better than hotel buffets</li>
            <li>• Download Dianping (大众点评) — China&apos;s Yelp — to find nearby highly-rated restaurants</li>
            <li>• Hutong restaurants with hand-painted signs and no English menu = authentic and cheap</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-8">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ What to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• <strong>Wangfujing Snack Street</strong> — Overpriced novelty foods (scorpions, starfish). Not where locals eat. Walk 10 min to Niujie instead</li>
            <li>• <strong>Restaurants with picture menus near Forbidden City</strong> — 3x normal prices, bland food</li>
            <li>• <strong>Tea ceremony invitations</strong> — Friendly strangers invite you to tea; the bill is ¥500-2000</li>
            <li>• <strong>Tourist-trap duck restaurants</strong> near Qianmen with touts outside — go to Siji Minfu or Da Dong</li>
          </ul>
        </div>
        <RelatedArticles articles={[
          {title: 'Peking Duck', description: 'Beijing’s most iconic dish — crispy skin, tender meat.', href: '/destinations/beijing/where-to-eat/peking-duck'},
          {title: 'Jianbing', description: 'China’s favorite breakfast crepe — cheap and delicious.', href: '/destinations/beijing/where-to-eat/jianbing'},
          {title: 'What to Do in Beijing', description: 'Top attractions and must-see sights.', href: '/destinations/beijing/what-to-do'},
          {title: 'Beijing Local Tips', description: 'Insider advice for a smoother trip.', href: '/destinations/beijing/local-tips'},
        ]} />
      </main>
    </div>
  );
}