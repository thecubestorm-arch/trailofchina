import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: '10-Day China Itinerary | Trail of China',
  description:
    "Extended 10-day China route adding Chengdu pandas and Yangshuo karst mountains to the classic Beijing-Xi'an-Shanghai circuit.",
}

const relatedArticles = [
  {
    title: '7-Day China Route',
    description: "A practical one-week China itinerary covering Beijing, Xi'an, and Shanghai.",
    href: '/plan-your-trip/preplanned-trips/7-day-route',
  },
  {
    title: '14-Day Grand China Tour',
    description: 'The ultimate 2-week China itinerary covering all highlights at a comfortable pace.',
    href: '/plan-your-trip/preplanned-trips/14-day-route',
  },
  {
    title: 'Budget Guide',
    description: 'How much to budget for your China trip, with cost breakdowns by city.',
    href: '/plan-your-trip/budget',
  },
  {
    title: 'Best Time to Visit',
    description: 'When to go to China based on weather, crowds, and seasonal events.',
    href: '/plan-your-trip/best-time-to-visit',
  },
]

export default function TenDayRoutePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
      }}
    >
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Plan Your Trip', href: '/plan-your-trip' },
              { label: 'Preplanned Trips', href: '/plan-your-trip/preplanned-trips' },
              { label: '10-Day Route' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="日" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            10-Day Extended China Route
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">十日</span>
            <span className="text-lg">• Plan Your Trip • Preplanned Trips</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Moderate pace</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Train + one domestic flight</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Estimated budget: $1200-2000</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          This route keeps the classic highlights but finally gives nature and food some real room in the schedule.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-10-day-route/1600/900"
            alt="10-day China itinerary overview"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with itinerary overview image</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Route Overview</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              The classic route plus Chengdu&apos;s pandas and Yangshuo&apos;s stunning karst landscapes. Perfect for
              those wanting nature and wildlife alongside China&apos;s great cities.
            </p>
            <p>
              Beijing - Xi&apos;an - Chengdu - Yangshuo - Shanghai.
            </p>
            <p>
              Duration: 10 days | Best for: Nature &amp; culture mix.
            </p>
            <p>Estimated budget: $1200-2000 per person.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Day-by-Day Itinerary</h2>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 1-3: Beijing</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Forbidden City, Great Wall, Temple of Heaven.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 4-5: Xi&apos;an</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Terracotta Warriors, City Wall, Muslim Quarter.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 6-7: Chengdu</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Panda Base, spicy Sichuan food, People&apos;s Park.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 8-9: Yangshuo</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Li River cruise, karst peaks, countryside biking.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Day 10: Shanghai</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>The Bund, departure.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Panda Base: Arrive early (8am) when pandas are most active.</p>
            <p>Yangshuo: Stay 2 nights minimum to enjoy the scenery.</p>
            <p>Chengdu-Xi&apos;an flight: 1.5 hours vs 13 hours by train.</p>
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8] pt-8">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Related Articles</h2>
          <div className="divide-y divide-[#ebe4d8]">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href} className="block py-4 transition-opacity hover:opacity-80">
                <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">{article.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <ContextualCTA
          icon="🐼"
          title="Need the Complete Trip Ladder?"
          description="Compare the 7-day, 10-day, and 14-day versions before you book transport."
          buttonText="Browse All Routes →"
          buttonHref="/plan-your-trip/preplanned-trips"
          variant="secondary"
        />
      </main>
    </div>
  )
}
