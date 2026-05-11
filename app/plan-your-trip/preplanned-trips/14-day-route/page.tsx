import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: '14-Day Grand China Tour',
  description:
    "The ultimate 2-week China itinerary covering all highlights: Beijing, Xi'an, Chengdu, Yangshuo, Shanghai, and more.",

  path: '/plan-your-trip/preplanned-trips/14-day-route',
})

const relatedArticles = [
  {
    title: '10-Day Extended China Route',
    description: 'Add Chengdu pandas and Yangshuo karst to the classic circuit.',
    href: '/plan-your-trip/preplanned-trips/10-day-route',
  },
  {
    title: '7-Day China Route',
    description: "A practical one-week China itinerary covering Beijing, Xi'an, and Shanghai.",
    href: '/plan-your-trip/preplanned-trips/7-day-route',
  },
  {
    title: 'Budget Guide',
    description: 'How much to budget for your China trip, with cost breakdowns by city.',
    href: '/plan-your-trip/budget',
  },
  {
    title: 'Visa Guide',
    description: 'Everything you need to know about China visa requirements and application.',
    href: '/china-basics/how-china-differs/visa-guide',
  },
]

export default function FourteenDayRoutePage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Preplanned Trips", path: "/plan-your-trip/preplanned-trips" }, { name: "14 Day Route", path: "/plan-your-trip/preplanned-trips/14-day-route" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
              { label: '14-Day Route' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="日" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            14-Day Grand China Tour
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">十四日</span>
            <span className="text-lg">• Plan Your Trip • Preplanned Trips</span>
          </div>
        <AuthorByline />
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Relaxed pace</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Extra buffer time</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Estimated budget: $1800-3000</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          Two weeks is where a China itinerary stops feeling like a checklist and starts feeling like a trip.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-14-day-route/1600/900"
            alt="14-day China itinerary overview"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Route Overview</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              The complete China experience. Two weeks to explore imperial capitals, ancient warriors, pandas,
              stunning landscapes, and modern megacities at a comfortable pace.
            </p>
            <p>
              Beijing - Xi&apos;an - Chengdu - Yangshuo - Shanghai (+ Hangzhou day trip).
            </p>
            <p>
              Duration: 14 days | Best for: Comprehensive experience.
            </p>
            <p>Estimated budget: $1800-3000 per person.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Day-by-Day Itinerary</h2>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 1-4: Beijing</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Forbidden City, Great Wall, Summer Palace, Temple of Heaven, Hutongs.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 5-6: Xi&apos;an</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Terracotta Warriors, City Wall, Muslim Quarter, Big Wild Goose Pagoda.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 7-8: Chengdu</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Panda Base, Jinli Street, People&apos;s Park, Sichuan opera.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 9-11: Yangshuo</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Li River cruise, rock climbing, countryside cycling, Xingping village.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 12-13: Shanghai</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>The Bund, Yu Garden, French Concession, Shanghai Tower.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">
            Day 14: Hangzhou Day Trip + Departure
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>West Lake, Longjing tea plantations, return to Shanghai for flight.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>This pace allows for relaxation and spontaneity.</p>
            <p>Consider breaking up Shanghai/Hangzhou with an overnight in Suzhou.</p>
            <p>Book all trains and flights in advance for better prices.</p>
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
          icon="🏯"
          title="Ready to Price This Route Out?"
          description="Use the budget guide to turn this 14-day outline into a realistic booking plan."
          buttonText="See the Budget Guide →"
          buttonHref="/plan-your-trip/budget"
          variant="secondary"
        />
      </main>
    </div>
    </>
  )
}
