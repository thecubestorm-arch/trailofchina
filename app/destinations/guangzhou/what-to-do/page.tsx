import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles'
import ToursCTA from '@/components/ToursCTA'

export const metadata: Metadata = {
  title: 'What to Do in Guangzhou',
  description: 'Top attractions in Guangzhou: Canton Tower, Shamian Island, Chen Clan Ancestral Hall, Beijing Road, and more.',
  openGraph: {
    title: 'What to Do in Guangzhou - Trail of China',
    description: 'Canton Tower, Shamian Island, and top Guangzhou attractions.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'What to Do in Guangzhou - Trail of China' }],
  },
};

export default function GuangzhouWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Guangzhou', href: '/destinations/guangzhou' },
            { label: 'What to Do' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">What to Do in Guangzhou</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Guangzhou isn&apos;t about flashy attractions — it&apos;s about depth. 2,200 years of history under your feet
            (literally, on Beijing Road), colonial architecture under banyan trees, the best food in China, and a skyline
            you can walk outside at 488 meters. Here are the things worth your time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>

          <div className="space-y-4">
            <Link href="/destinations/guangzhou/what-to-do/canton-tower" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Canton Tower (广州塔) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                The skywalk at 488 meters lets you walk outside with nothing between you and the Pearl River delta but air.
                Guangzhou&apos;s most iconic landmark, best at sunset.
              </p>
              <p className="text-sm text-[#64748b]">🕐 9:30–22:30 | 💰 ¥150–298 | 📍 Metro: Canton Tower (Line 3/APM)</p>
            </Link>

            <Link href="/destinations/guangzhou/what-to-do/shamian-island" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Shamian Island (沙面岛) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                150-year-old European buildings under banyan trees. Guangzhou&apos;s most peaceful escape —
                cross a bridge from the chaos and you&apos;re in a different century.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Always open | 💰 Free | 📍 Metro: Huangsha (Line 1)</p>
            </Link>

            <Link href="/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Chen Clan Ancestral Hall (陈家祠) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                The finest Lingnan architecture in China — ceramic roof ridges, wood carvings, and stone sculptures
                so detailed they take your breath away. And it&apos;s only ¥10.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:30–17:30 | 💰 ¥10 | 📍 Metro: Chen Clan Academy (Lines 1/8)</p>
            </Link>

            <Link href="/destinations/guangzhou/what-to-do/beijing-road" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">4. Beijing Road (北京路) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                A 2,000-year-old shopping street with glass panels in the floor revealing ancient road layers
                from the Tang, Song, and Ming dynasties. Shop where Romans walked the Silk Road.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Always open | 💰 Free | 📍 Metro: Beijing Road (Line 6)</p>
            </Link>

            <Link href="/destinations/guangzhou/what-to-do/yuexiu-park" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">5. Yuexiu Park (越秀公园) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                Guangzhou&apos;s green lung — the Five Rams Statue (city symbol), 600-year-old Zhenhai Tower,
                and morning tai chi with the locals. Free and authentic.
              </p>
              <p className="text-sm text-[#64748b]">🕐 6:00–22:00 | 💰 Free | 📍 Metro: Yuexiu Park (Line 2)</p>
            </Link>

            <Link href="/destinations/guangzhou/what-to-do/sacred-heart-cathedral" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">6. Sacred Heart Cathedral (石室圣心大教堂) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                A Gothic cathedral built entirely from granite in 1863 — Guangzhou&apos;s Notre-Dame,
                hiding in a neighborhood of dried seafood shops. The contrast is unforgettable.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:00–17:30 (closed Mon) | 💰 Free | 📍 Metro: Yide Road (Line 6)</p>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Want deeper local knowledge?</h2>
          <p className="text-gray-700 mb-3">
            Dim sum etiquette, Cantonese phrases, and Line 3 survival tips — everything you need
            to eat and navigate like a local.
          </p>
          <Link href="/destinations/guangzhou/local-tips" className="inline-block text-[#af5d32] font-medium hover:underline">
            Local Tips for Guangzhou →
          </Link>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Guangzhou Trip"
            description="Our step-by-step itinerary takes the guesswork out of your first visit."
            buttonText="See Guangzhou itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Guangzhou" />
        <RelatedArticles articles={[
          {title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum'},
          {title: 'Where to Stay', description: 'Best neighborhoods for every budget.', href: '/destinations/guangzhou/where-to-stay'},
          {title: 'Foshan Day Trip', description: '30 min by metro — wing chun and Lingnan culture.', href: '/destinations/guangzhou/day-trips/foshan'},
          {title: 'Guangzhou Local Tips', description: 'Dim sum etiquette, metro hacks, and more.', href: '/destinations/guangzhou/local-tips'},
        ]} />
      </main>
    </div>
  );
}