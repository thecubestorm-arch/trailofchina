import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles';
import ToursCTA from '@/components/ToursCTA';

export const metadata: Metadata = {
  title: 'Day Trips from Shenzhen | Hong Kong & Guangzhou',
  description: 'The best day trips from Shenzhen: walk to Hong Kong in 15 minutes, or take a 30-minute bullet train to Guangzhou. Transport guides, tickets, and insider tips.',
  openGraph: {
    title: 'Day Trips from Shenzhen - Trail of China',
    description: 'Hong Kong in 15 minutes, Guangzhou in 30 — day trips from Shenzhen.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Day Trips from Shenzhen - Trail of China' }],
  },
};

export default function ShenzhenDayTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shenzhen', href: '/destinations/shenzhen' },
            { label: 'Day Trips' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Day Trips from Shenzhen</h1>
          <Link href="/destinations/shenzhen" className="inline-flex items-center gap-1 mt-2 text-[#af5d32] hover:underline text-sm">
            ← Back to Shenzhen
          </Link>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shenzhen&apos;s location is its secret weapon. You&apos;re 15 minutes from Hong Kong on foot, 30 minutes from 
            Guangzhou by bullet train, and connected to the entire Greater Bay Area by high-speed rail. These are the day trips 
            worth the journey.
          </p>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <Link href="/destinations/shenzhen/day-trips/hong-kong" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Hong Kong (香港) — A Different Country by Lunch</h3>
              <p className="text-gray-700 mb-2">
                You&apos;re 15 minutes from Hong Kong — walk across the border at Futian, take the MTR to Central, and you&apos;re 
                in a different country by lunch. Victoria Peak, dim sum in Causeway Bay, and the Star Ferry all in one day.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Border opens 6:30 AM | 💰 MTR ~HK$50 to Central | 🚇 15 min walk across border | Best for: City experience, shopping, food</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/shenzhen/day-trips/guangzhou" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Guangzhou (广州) — 2,200 Years of History by Bullet Train</h3>
              <p className="text-gray-700 mb-2">
                Guangzhou is 30 minutes by bullet train — 2,200 years of history, the world&apos;s best dim sum, and the original 
                Cantonese cuisine all before dinner. The Chen Clan Ancestral Hall and Shamian Island are highlights.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Bullet train 30 min | 💰 ¥80–120 one way | 🚄 Shenzhen North to Guangzhou South | Best for: History, food, culture</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Choosing Your Day Trip</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>First-time visitors:</strong> Hong Kong. Walking across the border is an experience in itself, and the contrast between Shenzhen and Hong Kong is dramatic.</li>
            <li><strong>Food lovers:</strong> Guangzhou. The original Cantonese food city — better dim sum, better roast goose, better everything edible.</li>
            <li><strong>Short on time:</strong> Hong Kong via Futian checkpoint. No train booking needed — just walk across.</li>
            <li><strong>Two days available?</strong> Do both. Hong Kong one day, Guangzhou the next. They&apos;re in different directions from Shenzhen.</li>
          </ul>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Shenzhen Trip"
            description="Our step-by-step itinerary includes day trip logistics — border crossing times, train schedules, and what to pack."
            buttonText="See Shenzhen itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Shenzhen" />
        <RelatedArticles articles={[
          { title: 'Ping An Finance Centre', description: "China's 2nd tallest building with observation deck.", href: '/destinations/shenzhen/what-to-do/ping-an-finance-centre' },
          { title: 'Huaqiangbei', description: 'The world\'s largest electronics market.', href: '/destinations/shenzhen/what-to-do/huaqiangbei' },
          { title: 'Where to Stay in Shenzhen', description: 'Best neighborhoods for every budget.', href: '/destinations/shenzhen/where-to-stay' },
          { title: 'Shenzhen Local Tips', description: 'Border crossing details and metro tips.', href: '/destinations/shenzhen/local-tips' },
        ]} />
      </main>
    </div>
  );
}