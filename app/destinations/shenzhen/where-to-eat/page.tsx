import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Eat in Shenzhen | Dim Sum, Hakka Food & Street Markets',
  description: 'Best places to eat in Shenzhen: dim sum, fresh seafood at Coco Park, Hakka cuisine, Chongqing hotpot, and Dongmen street food.',
  openGraph: {
    title: 'Where to Eat in Shenzhen - Trail of China',
    description: 'Dim sum, Hakka food, and street markets in Shenzhen.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Where to Eat in Shenzhen - Trail of China' }],
  },
};

export default function ShenzhenWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shenzhen', href: '/destinations/shenzhen' },
            { label: 'Where to Eat' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Eat in Shenzhen</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shenzhen is China&apos;s ultimate mashup city — a place where Cantonese dim sum, Hakka village food, 
            Chongqing hotpot, and street market chaos all exist within a few metro stops. The food here isn&apos;t 
            as famous as Guangzhou&apos;s, but it&apos;s more diverse. For practical tips on avoiding overpriced tourist traps, 
            see our{' '}
            <Link href="/destinations/shenzhen/local-tips" className="underline text-[var(--accent)]">
              Local Tips
            </Link>{' '}
            page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Must-Try Foods</h2>
          <p className="text-[#64748b] mb-6">Click any dish for the full guide</p>
          
          <div className="space-y-4">
            <Link href="/destinations/shenzhen/where-to-eat/dim-sum" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Dim Sum (早茶) — Cantonese Breakfast Tradition</h3>
              <p className="text-gray-700 mb-2">Har gow, siu mai, char siu bao — Shenzhen&apos;s Cantonese breakfast at its finest.
                Arrive before 9 AM on weekends for the freshest dishes and liveliest atmosphere.</p>
              <p className="text-sm text-[#64748b]">📍 Futian &amp; Nanshan | 💰 ¥50–100/person</p>
            </Link>

            <Link href="/destinations/shenzhen/where-to-eat/seafood-coco-park" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Seafood at Coco Park (海鲜) — Pick Your Fish</h3>
              <p className="text-gray-700 mb-2">Fresh seafood streets near Coco Park where you pick your fish from tanks and they cook it on the spot.
                The Cantonese steamed fish is the move.</p>
              <p className="text-sm text-[#64748b]">📍 Coco Park area | 💰 ¥100–200/person</p>
            </Link>

            <Link href="/destinations/shenzhen/where-to-eat/hakka-cuisine" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Hakka Cuisine (客家菜) — Shenzhen&apos;s Original Food</h3>
              <p className="text-gray-700 mb-2">Before Shenzhen was a tech hub, it was Hakka country. Salt-baked chicken, stuffed tofu, 
                and braised pork belly — hearty, savory, and nothing like Cantonese food.</p>
              <p className="text-sm text-[#64748b]">📍 Longgang &amp; Luohu | 💰 ¥40–80/person</p>
            </Link>

            <Link href="/destinations/shenzhen/where-to-eat/chongqing-hotpot" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Chongqing Hotpot in Shenzhen — The Mashup City Does Spicy</h3>
              <p className="text-gray-700 mb-2">Shenzhen&apos;s migrant population means authentic Chongqing hotpot without leaving the city.
                Boiling broth, mountains of chili, and beef offal — not for the faint of heart.</p>
              <p className="text-sm text-[#64748b]">📍 Multiple locations | 💰 ¥80–150/person</p>
            </Link>

            <Link href="/destinations/shenzhen/where-to-eat/street-food-dongmen" className="block border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold">Street Food at Dongmen (东门老街) — Night Market Chaos</h3>
              <p className="text-gray-700 mb-2">Luohu&apos;s busiest night market — stinky tofu, skewers, bubble tea, and cheap electronics.
                The sensory overload is half the fun. Come hungry and bring small bills.</p>
              <p className="text-sm text-[#64748b]">📍 Dongmen, Luohu | 💰 ¥10–30/person</p>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Recommendations</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">🍜 Budget (Under ¥50)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Dongmen Night Market</strong> — Stinky tofu, skewers, and bubble tea. ¥10–30</li>
                <li><strong>Hakka Village restaurants in Longgang</strong> — Salt-baked chicken and stuffed tofu. ¥30–50</li>
                <li><strong>Street dim sum stalls in Futian</strong> — Fresh har gow and siu mai. ¥20–40</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥50–200)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Tao Yuan Ming (桃源居)</strong> — Cantonese dim sum institution in Futian. ¥80–120/person</li>
                <li><strong>Haidilao (海底捞)</strong> — The hotpot chain with legendary service. ¥100–150/person</li>
                <li><strong>Seafood Street near Coco Park</strong> — Pick your fish, they cook it. ¥100–200/person</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• <strong>Dim sum is a morning thing</strong> — arrive before 9 AM on weekends for the best selection</li>
            <li>• <strong>Hakka food is Shenzhen&apos;s original cuisine</strong> — don&apos;t miss salt-baked chicken</li>
            <li>• <strong>Dongmen night market</strong> starts buzzing after 6 PM — come hungry and bring cash</li>
            <li>• <strong>Alipay works everywhere</strong> — even street stalls accept mobile payment</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Huaqiangbei', description: 'The world\'s largest electronics market.', href: '/destinations/shenzhen/what-to-do/huaqiangbei'},
          {title: 'What to Do in Shenzhen', description: 'Top attractions and experiences.', href: '/destinations/shenzhen/what-to-do'},
          {title: 'Where to Stay in Shenzhen', description: 'Best neighborhoods for every budget.', href: '/destinations/shenzhen/where-to-stay'},
          {title: 'Shenzhen Local Tips', description: 'Border crossings, metro hacks, and more.', href: '/destinations/shenzhen/local-tips'},
        ]} />
      </main>
    </div>
  );
}