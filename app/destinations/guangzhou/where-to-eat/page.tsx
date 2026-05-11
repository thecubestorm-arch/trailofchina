import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Eat in Guangzhou | Dim Sum, Wonton Noodles & Roast Goose',
  description: 'Best places to eat in Guangzhou: dim sum (the city that invented it), wonton noodles, rice noodle rolls, roast goose, and Shunde cuisine.',
  openGraph: {
    title: 'Where to Eat in Guangzhou - Trail of China',
    description: 'Dim sum, wonton noodles, and the best Cantonese food in China.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Where to Eat in Guangzhou - Trail of China' }],
  },
};

export default function GuangzhouWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Guangzhou', href: '/destinations/guangzhou' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Eat in Guangzhou</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Guangzhou didn&apos;t just contribute to Cantonese cuisine — it <em>is</em> Cantonese cuisine. 
            Dim sum was invented here. Wonton noodles were perfected here. Roast goose was elevated to an art form here.
            And Shunde, a 30-minute metro ride away, is a UNESCO City of Gastronomy. For practical tips on 
            avoiding tourist traps, see our{' '}
            <Link href="/destinations/guangzhou/local-tips" className="underline text-[var(--accent)]">
              Local Tips
            </Link>{' '}
            page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Must-Try Foods</h2>
          <p className="text-[#64748b] mb-6">Click any dish for the full guide</p>

          <div className="space-y-4">
            <Link href="/destinations/guangzhou/where-to-eat/dim-sum" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Dim Sum (早茶/饮茶) — The City That Invented It</h3>
              <p className="text-gray-700 mb-2">Guangzhou INVENTED dim sum. Har gow, siu mai, char siu bao — the real thing, 
                in the city where it all started. Arrive before 8 AM on weekends for the best experience.</p>
              <p className="text-sm text-[#64748b]">📍 Yuexiu & Liwan | 💰 ¥50–120/person</p>
            </Link>

            <Link href="/destinations/guangzhou/where-to-eat/wonton-noodles" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Wonton Noodles (云吞面) — Cantonese Comfort Food</h3>
              <p className="text-gray-700 mb-2">Thin egg noodles, shrimp wontons, clear broth — perfected over centuries in Guangzhou. 
                The best bowls cost ¥15 and come from shops that have been making the same broth for generations.</p>
              <p className="text-sm text-[#64748b]">📍 Yuexiu & Liwan | 💰 ¥15–30/bowl</p>
            </Link>

            <Link href="/destinations/guangzhou/where-to-eat/rice-noodle-rolls" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Rice Noodle Rolls (肠粉) — The Breakfast Staple</h3>
              <p className="text-gray-700 mb-2">Cheung fun — silky rice noodle rolls with sweet soy sauce, made fresh on steam trays
                every morning. The best breakfast in Guangzhou for ¥8.</p>
              <p className="text-sm text-[#64748b]">📍 Yuexiu & Liwan | 💰 ¥8–15/plate</p>
            </Link>

            <Link href="/destinations/guangzhou/where-to-eat/roast-goose" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Roast Goose (烧鹅) — The Dish That Defines the City</h3>
              <p className="text-gray-700 mb-2">Whole goose, marinated in five-spice and soy, roasted until the skin cracks and the 
                meat melts. Peking duck has the fame, but Cantonese roast goose has the flavor.</p>
              <p className="text-sm text-[#64748b]">📍 Liwan District | 💰 ¥60–120/person</p>
            </Link>

            <Link href="/destinations/guangzhou/where-to-eat/shunde-cuisine" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Shunde Cuisine (顺德菜) — UNESCO City of Gastronomy</h3>
              <p className="text-gray-700 mb-2">Shunde is a UNESCO City of Gastronomy — and it&apos;s a suburb of Guangzhou. 
                30 minutes by metro and you&apos;re eating the best food in the food capital of China.</p>
              <p className="text-sm text-[#64748b]">📍 Shunde (30 min from Guangzhou) | 💰 ¥100–200/person</p>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Recommendations</h2>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">🍜 Budget (Under ¥50)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Wonton noodle shops in Liwan</strong> — ¥15–30 per bowl, same recipes for decades</li>
                <li><strong>Cheung fun stalls in Yuexiu</strong> — ¥8–15 per plate, made fresh on steam trays</li>
                <li><strong>Street dim sum in old neighborhoods</strong> — ¥3–8 per dish, no English menu</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥50–200)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Traditional dim sum restaurants in Yuexiu</strong> — ¥80–120/person, the full yum cha experience</li>
                <li><strong>Roast goose restaurants in Liwan</strong> — ¥60–120/person, whole goose carved tableside</li>
                <li><strong>Shunde restaurants in Guangzhou</strong> — ¥100–150/person, UNESCO-level cuisine without leaving the city</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Insider Secrets</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• <strong>Dim sum is a morning thing</strong> — arrive before 8 AM on weekends for the freshest dishes</li>
            <li>• <strong>Tap two fingers</strong> when someone pours your tea — it means "thank you" in Cantonese culture</li>
            <li>• <strong>Shunde is 30 minutes by metro</strong> — go there for the best food, not the tourist restaurants in Guangzhou</li>
            <li>• <strong>Avoid dim sum on Beijing Road</strong> — overpriced and mediocre. Walk 10 minutes into side streets for the real thing</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Canton Tower', description: 'Skywalk at 488 meters.', href: '/destinations/guangzhou/what-to-do/canton-tower'},
          {title: 'What to Do in Guangzhou', description: 'Top attractions.', href: '/destinations/guangzhou/what-to-do'},
          {title: 'Where to Stay', description: 'Best neighborhoods.', href: '/destinations/guangzhou/where-to-stay'},
          {title: 'Guangzhou Local Tips', description: 'Dim sum etiquette and more.', href: '/destinations/guangzhou/local-tips'},
        ]} />
      </main>
    </div>
  );
}