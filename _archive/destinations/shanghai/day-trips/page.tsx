import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles';
import ToursCTA from '@/components/ToursCTA';

export const metadata: Metadata = {
  title: 'Best Day Trips from Shanghai | Suzhou, Hangzhou, Zhujiajiao & More',
  description:
    'Escape Shanghai for a day: classical gardens in Suzhou, West Lake and tea country in Hangzhou, and a 1,700-year-old water town reachable by metro. Transport guides, ticket prices, and insider tips.',
  openGraph: {
    title: 'Best Day Trips from Shanghai - Trail of China',
    description: 'Escape Shanghai for a day: Suzhou gardens, Hangzhou tea country, and Zhujiajiao water town — all within easy reach.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Day Trips from Shanghai - Trail of China' }],
  },
};

export default function ShanghaiDayTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shanghai', href: '/destinations/shanghai' },
            { label: 'Day Trips' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Day Trips from Shanghai</h1>
          <Link href="/destinations/shanghai" className="inline-flex items-center gap-1 mt-2 text-[#af5d32] hover:underline text-sm">
            ← Back to Shanghai
          </Link>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai is surrounded by some of China&apos;s most rewarding day trips — and they&apos;re easier to reach
            than you&apos;d think. A 30-minute bullet train drops you in Suzhou&apos;s Ming dynasty gardens. An hour on
            the train and you&apos;re cycling around West Lake in Hangzhou. And Zhujiajiao, a 1,700-year-old water town,
            is on the metro. Here are the day trips worth the journey.
          </p>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <Link href="/destinations/shanghai/day-trips/suzhou" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Suzhou — Classical Gardens and Water Towns (苏州)</h3>
              <p className="text-gray-700 mb-2">
                30 minutes from Shanghai by bullet train, and you&apos;re in a city of UNESCO-listed Ming dynasty gardens,
                working silk workshops, and Tongli — a 1,000-year-old water town with stone bridges and canal houses.
                The Lion Grove Garden&apos;s rockery labyrinth alone is worth the trip.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Gardens 7:30–17:30 | 💰 ¥40–70 per garden | 🚄 30 min from Hongqiao | Best for: Gardens + water town combo</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/shanghai/day-trips/hangzhou" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Hangzhou — West Lake and Tea Country (杭州)</h3>
              <p className="text-gray-700 mb-2">
                Marco Polo called it &quot;the finest city in the world&quot; — and 700 years later, West Lake still earns the title.
                Bike the 15 km lakeside loop, explore Buddhist cave carvings at Lingyin Temple, and drink fresh-picked
                Longjing tea in the hills above the lake. A full, perfect day.
              </p>
              <p className="text-sm text-[#64748b]">🕐 West Lake 24h, Lingyin 7:00–18:00 | 💰 West Lake free, Lingyin ¥75 | 🚄 1h from Hongqiao | Best for: Nature + culture</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/shanghai/day-trips/zhujiajiao" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Zhujiajiao — Shanghai&apos;s Own Water Town (朱家角)</h3>
              <p className="text-gray-700 mb-2">
                No train booking needed — take Line 17 to the end and walk into a 1,700-year-old water town. 36 stone
                bridges, canal houses, and the best zongzi in Shanghai. The easiest and cheapest day trip you can take
                from the city, and genuinely worth it.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Old town always open | 💰 Free (sites ¥10–20) | 🚇 Line 17, 1h from center | Best for: Quick, easy escape</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Choosing Your Day Trip</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>First-time visitors:</strong> Suzhou. The gardens are world-class, Tongli is enchanting, and the bullet train makes it effortless.</li>
            <li><strong>Nature lovers and tea drinkers:</strong> Hangzhou. West Lake is stunning, Lingyin Temple is immersive, and Longjing tea village is a genuine experience you can&apos;t get elsewhere.</li>
            <li><strong>Short on time or planning:</strong> Zhujiajiao. No train booking, no schedule — just hop on Line 17 and go. Half-day friendly, metro accessible, and free to explore.</li>
            <li><strong>Two days available?</strong> Do Suzhou one day and Hangzhou the next. They&apos;re in opposite directions from Shanghai, and each deserves a full day.</li>
          </ul>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Shanghai Trip"
            description="See our curated itineraries with day trips built in — everything timed and mapped out."
            buttonText="See Shanghai itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Shanghai" />
        <RelatedArticles articles={[
          { title: 'The Bund', description: "Shanghai's most iconic waterfront promenade.", href: '/destinations/shanghai/what-to-do/bund' },
          { title: 'Yu Garden', description: 'A 400-year-old classical garden in Shanghai.', href: '/destinations/shanghai/what-to-do/yu-garden' },
          { title: 'French Concession', description: 'Tree-lined streets, Art Deco villas, and charming cafés.', href: '/destinations/shanghai/what-to-do/french-concession' },
          { title: 'Shanghai Local Tips', description: 'Insider advice for a smoother trip.', href: '/destinations/shanghai/local-tips' },
        ]} />
      </main>
    </div>
  );
}