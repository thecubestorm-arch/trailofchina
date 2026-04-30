import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Preplanned China Trips | Trail of China',
  description:
    'Choose a ready-made China itinerary for 7, 10, or 14 days with realistic transport, pacing, and budget guidance.',
}

const tripPages = [
  {
    title: '7-Day Route',
    description: "Beijing, Xi'an, and Shanghai in one efficient week.",
    href: '/plan-your-trip/preplanned-trips/7-day-route',
  },
  {
    title: '10-Day Route',
    description: 'Adds Chengdu pandas and Yangshuo karst scenery.',
    href: '/plan-your-trip/preplanned-trips/10-day-route',
  },
  {
    title: '14-Day Route',
    description: 'Grand loop with extra rest days and deeper city time.',
    href: '/plan-your-trip/preplanned-trips/14-day-route',
  },
]

const relatedArticles = [
  {
    title: 'Best Time to Visit China',
    description: 'Match your route with the right season and avoid the busiest holiday periods.',
    href: '/plan-your-trip/best-time-to-visit',
  },
  {
    title: 'Budget Guide',
    description: 'See what these itineraries cost at budget, mid-range, and luxury levels.',
    href: '/plan-your-trip/budget',
  },
  {
    title: 'Trip.com Guide',
    description: 'Use the easiest booking tool for trains, hotels, flights, and attraction tickets.',
    href: '/china-basics/what-apps-to-use/trip-com',
  },
]

export default function PreplannedTripsPage() {
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
              { label: 'Preplanned Trips' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="行" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Preplanned Trips
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">行程</span>
            <span className="text-lg">• Plan Your Trip</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">7, 10, and 14 days</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Fast to relaxed pacing</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Built for first-time visitors</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          Start with a proven route, then personalize the edges instead of building your first China trip from zero.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-routes/1600/900"
            alt="China trip planning map"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with China route planning image</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">How These Routes Work</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Start with a proven route and adjust from there. These itineraries are designed for first-time visitors,
              balancing major highlights, efficient high-speed train legs, and realistic daily pace.
            </p>
            <p>
              7 Days: Fast. Best for first-time visitors. Travel style: City highlights + iconic landmarks.
            </p>
            <p>
              10 Days: Moderate. Best for travelers who want variety. Travel style: History + food + scenery.
            </p>
            <p>
              14 Days: Relaxed. Best for families / slow travel. Travel style: Depth, flexibility, and recovery days.
            </p>
          </div>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Pages in This Section</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {tripPages.map((page) => (
                <Link key={page.href} href={page.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Book train tickets 10-14 days early for peak departure times.</p>
            <p>Keep day 1 and final day lighter to absorb jet lag and delays.</p>
            <p>National holidays can double transport demand and hotel prices.</p>
            <p>If this is your first China trip, 10 days is usually the best balance.</p>
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
          icon="🧭"
          title="Need Help Picking the Right Route?"
          description="Compare timing, budget, and pacing before you lock in trains and hotels."
          buttonText="Check Trip Costs →"
          buttonHref="/plan-your-trip/budget"
          variant="secondary"
        />
      </main>
    </div>
  )
}
