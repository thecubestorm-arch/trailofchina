import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles';
import ToursCTA from '@/components/ToursCTA';

export const metadata: Metadata = {
  title: 'Best Day Trips from Chongqing | Dazu Rock Carvings, Wulong Karst & More',
  description:
    'Escape Chongqing for a day: Dazu Rock Carvings with 50,000 Buddhist sculptures, Wulong Karst where Transformers filmed, and more. Transport guides, ticket prices, and insider tips.',
  openGraph: {
    title: 'Best Day Trips from Chongqing - Trail of China',
    description: 'Escape Chongqing for a day: Dazu Rock Carvings, Wulong Karst, and more UNESCO wonders.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Day Trips from Chongqing - Trail of China' }],
  },
};

export default function ChongqingDayTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chongqing', href: '/destinations/chongqing' },
            { label: 'Day Trips' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Day Trips from Chongqing</h1>
          <Link href="/destinations/chongqing" className="inline-flex items-center gap-1 mt-2 text-[#af5d32] hover:underline text-sm">
            ← Back to Chongqing
          </Link>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing&apos;s surroundings hide some of China&apos;s most extraordinary sights — and almost no foreign tourists
            know about them. Within three hours, you can stand beneath 31 meters of Reclining Buddha carved into a cliff,
            or walk through limestone bridges so vast they swallowed a river. Here are the day trips worth leaving the city for.
          </p>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <Link href="/destinations/chongqing/day-trips/dazu-rock-carvings" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Dazu Rock Carvings (大足石刻)</h3>
              <p className="text-gray-700 mb-2">
                50,000 stone carvings spanning 600 years — Buddhist, Confucian, and Taoist reliefs carved into
                sandstone cliffs. The 31-meter Reclining Buddha at Baoding Hill is one of China&apos;s great
                unsung masterpieces. Almost no foreign tourists visit. A certified guide costs ¥100 and turns
                a wall of figures into a vivid narrative.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:30–18:00 | 💰 ¥115 Baoding / ¥140 combo | 🚄 1.5h train from Chongqing | Best for: Art & history lovers</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chongqing/day-trips/wulong-karst" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Wulong Karst — Three Natural Bridges (武隆喀斯特)</h3>
              <p className="text-gray-700 mb-2">
                Three limestone bridges so massive they swallowed an entire river — this is where Transformers filmed,
                where Zhang Yimou shot Curse of the Golden Flower, and where you&apos;ll walk through caverns wider
                than cathedrals. Combine with Fairy Mountain (1,800m alpine meadow) for a full day that covers both
                geological drama and pastoral calm.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:00–17:00 | 💰 ¥125 Three Bridges / ¥60 Fairy Mountain | 🚄 2.5h train from Chongqing | Best for: Nature & drama</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Combining Day Trips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Dazu in one day, Wulong in another:</strong> Both require full days. Dazu is closer (1.5h by train) and more compact. Wulong is further (2.5h) but pairs naturally with Fairy Mountain. Don&apos;t try to combine them.</li>
            <li><strong>Dazu + Beishan combo:</strong> Baoding Hill in the morning (2–3h), Beishan in the afternoon (1h). The sites are 15 km apart — a taxi between them costs ¥20–30. This is a comfortable full day.</li>
            <li><strong>Wulong Three Bridges + Fairy Mountain:</strong> Start early with Three Bridges (2–3h), lunch in Wulong town, then Fairy Mountain in the afternoon (1–2h). The cool mountain air at 1,800m is a relief after the gorge humidity.</li>
          </ul>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Practical Tips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Book trains early:</strong> Chongqing to Dazu and Wulong trains sell out on weekends. Use 12306 or Trip.com at least 2 days ahead.</li>
            <li><strong>Start early:</strong> Both sites get tour groups from 10 AM onward. The first two hours after opening are the most peaceful.</li>
            <li><strong>Wear hiking shoes:</strong> Dazu involves lots of walking on stone paths. Wulong&apos;s gorge has wet boardwalks and stairs. Sneakers are the minimum; hiking shoes are better.</li>
            <li><strong>Bring water:</strong> Both sites have limited food options at elevated prices. Pack snacks and water from Chongqing.</li>
            <li><strong>Summer escape:</strong> Fairy Mountain at 1,800m is 15–20°C cooler than Chongqing. If you&apos;re visiting in July or August, Wulong is not just a day trip — it&apos;s a survival strategy.</li>
          </ul>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Chongqing Trip"
            description="See our curated itinerary with day trips, hotpot, and mountain city essentials all mapped out."
            buttonText="See Chongqing itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Chongqing" />
        <RelatedArticles articles={[
          { title: 'Chongqing Guide', description: 'Everything you need for Chongqing — hotpot, monorail, cliffside nights.', href: '/destinations/chongqing' },
          { title: 'Hongyadong', description: 'The iconic cliffside complex that defines Chongqing at night.', href: '/destinations/chongqing/what-to-do/hongyadong' },
          { title: 'Where to Eat in Chongqing', description: 'Hotpot, xiaomian, and the boldest flavors in China.', href: '/destinations/chongqing/where-to-eat' },
          { title: 'Chongqing Local Tips', description: 'Mountain city survival guide — stairs, 3D navigation, hotpot rules.', href: '/destinations/chongqing/local-tips' },
        ]} />
      </main>
    </div>
  );
}