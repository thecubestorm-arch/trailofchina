import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles';
import ToursCTA from '@/components/ToursCTA';

export const metadata: Metadata = {
  title: 'Day Trips from Guangzhou | Foshan & Shenzhen',
  description: 'The best day trips from Guangzhou: Foshan (30 min metro) for wing chun and Lingnan culture, or Shenzhen (30 min bullet train) for tech and electronics.',
  openGraph: {
    title: 'Day Trips from Guangzhou - Trail of China',
    description: 'Foshan in 30 min by metro, Shenzhen in 30 min by bullet train.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Day Trips from Guangzhou - Trail of China' }],
  },
};

export default function GuangzhouDayTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Guangzhou', href: '/destinations/guangzhou' },
            { label: 'Day Trips' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Day Trips from Guangzhou</h1>
          <Link href="/destinations/guangzhou" className="inline-flex items-center gap-1 mt-2 text-[#af5d32] hover:underline text-sm">
            ← Back to Guangzhou
          </Link>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Guangzhou sits at the heart of the Pearl River Delta — 30 minutes by metro gets you to Foshan for
            wing chun kung fu and Lingnan culture, and 30 minutes by bullet train gets you to Shenzhen for
            electronics markets and the Hong Kong border. These are the day trips worth the journey.
          </p>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <Link href="/destinations/guangzhou/day-trips/foshan" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Foshan (佛山) — Wing Chun, Pottery & Lingnan Culture</h3>
              <p className="text-gray-700 mb-2">
                30 minutes by metro — the birthplace of wing chun kung fu (Bruce Lee&apos;s ancestral home),
                the Ancestral Temple with live martial arts performances, and Shiwan pottery district where
                artisans have been making ceramic roof figurines for 600 years.
              </p>
              <p className="text-sm text-[#64748b]">🕐 30 min metro | 💰 Metro ¥7 + Temple ¥20 | 🚇 Guangfo Line from Xilang | Best for: Culture, martial arts, pottery</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/guangzhou/day-trips/shenzhen" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Shenzhen (深圳) — China&apos;s Silicon Valley</h3>
              <p className="text-gray-700 mb-2">
                30 minutes by bullet train — a city that was a fishing village 40 years ago and is now China&apos;s
                tech capital. Huaqiangbei electronics market, Ping An Finance Centre observation deck, and
                15 minutes from the Hong Kong border.
              </p>
              <p className="text-sm text-[#64748b]">🕐 30 min bullet train | 💰 ¥80–120 one-way | 🚄 From Guangzhou East/South | Best for: Tech, skyline, Hong Kong access</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Choosing Your Day Trip</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Culture lovers:</strong> Foshan. Ancestral Temple, Lingnan Tiandi, and Shiwan pottery — 1,400 years of history.</li>
            <li><strong>Tech enthusiasts:</strong> Shenzhen. Electronics markets, futuristic skyline, and Hong Kong access.</li>
            <li><strong>Short on time:</strong> Foshan via metro (no train booking needed). Shenzhen requires bullet train tickets.</li>
            <li><strong>Two days available?</strong> Do both. Foshan one day, Shenzhen the next. They&apos;re in opposite directions.</li>
          </ul>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Guangzhou Trip"
            description="Our step-by-step itinerary includes day trip logistics — train schedules, metro routes, and what to pack."
            buttonText="See Guangzhou itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Guangzhou" />
        <RelatedArticles articles={[
          { title: 'Canton Tower', description: "Walk outside at 488 meters.", href: '/destinations/guangzhou/what-to-do/canton-tower' },
          { title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum' },
          { title: 'Where to Stay in Guangzhou', description: 'Best neighborhoods for every budget.', href: '/destinations/guangzhou/where-to-stay' },
          { title: 'Guangzhou Local Tips', description: 'Metro survival and dim sum etiquette.', href: '/destinations/guangzhou/local-tips' },
        ]} />
      </main>
    </div>
  );
}