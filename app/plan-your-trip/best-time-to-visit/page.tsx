import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Best Time to Visit China — Month-by-Month Guide (2025) | Trail of China',
  description:
    'When is the best time to visit China? Month-by-month climate guide, peak seasons, holidays to avoid, and the ideal months for every region.',
  openGraph: {
    title: 'Best Time to Visit China — Month-by-Month Guide (2025)',
    description:
      'From cherry-blossom spring to golden autumn — find the perfect season for your China trip.',
    type: 'article',
  },
}

const relatedArticles = [
  {
    title: 'Budget Guide — Cost of Travel in China',
    description: 'Daily budgets, accommodation, food, and transport costs for every travel style.',
    href: '/plan-your-trip/budget',
  },
  {
    title: 'Preplanned Trips',
    description: "Ready-made 7, 10, and 14-day itineraries covering China's highlights.",
    href: '/plan-your-trip/preplanned-trips',
  },
  {
    title: 'China Visa Guide',
    description: 'Everything you need to know about visas and visa-free entry.',
    href: '/china-basics/how-china-differs/visa-guide',
  },
]

export default function BestTimeToVisitPage() {
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
              { label: 'Best Time to Visit' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="季" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Best Time to Visit China
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">四季</span>
            <span className="text-lg">• Plan Your Trip</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Spring and autumn win</span>
          <span className="text-[var(--muted)]">·</span>
          <span>October is peak</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Avoid major holidays</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          China is vast, so the right season depends as much on your route as on the calendar.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-seasons/1600/900"
            alt="Best time to visit China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with seasonal China photo</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why Timing Matters</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Spring (March-May): Mild temperatures, cherry blossoms, fewer crowds before summer peak.
            </p>
            <p>
              Summer (June-August): Hot and humid, but great for Tibet, Inner Mongolia, and beaches.
            </p>
            <p>
              Autumn (September-November): THE best time - comfortable temps, fall foliage, golden light.
            </p>
            <p>
              Winter (December-February): Cold but magical - Harbin Ice Festival, fewer tourists, lower prices.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Season by Season</h2>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Spring (March-May)</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Beijing 10-25C, Shanghai 12-25C, Chengdu 15-25C. Best for: Great Wall hiking, Shanghai strolling,
              Xi&apos;an exploring. Avoid: May Day holiday (first week of May) - huge crowds everywhere.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Summer (June-August)</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Beijing 25-35C, Shanghai 28-35C, Chengdu 25-30C. Best for: Tibet, Yunnan, Inner Mongolia - cooler
              highland destinations. Avoid: Chinese school holidays (July-August) plus extreme heat and humidity in
              eastern cities.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Autumn (September-November)</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Beijing 10-25C, Shanghai 15-28C. Best for: Everything - comfortable weather, clear skies, fall colors.
              October is THE month. Avoid: National Day holiday (Oct 1-7) - everything is booked solid and prices
              skyrocket.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Winter (December-February)</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Beijing -5 to 5C, Shanghai 3-10C. Best for: Harbin Ice Festival, hotpot season, fewer crowds, lower
              prices. Avoid: Chinese New Year (2-week period, dates vary by lunar calendar) - transport chaos,
              everything closed or packed.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Holidays to Avoid</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Chinese New Year (January-February, dates shift yearly), May Day (first week of May), and National Day
              (October 1-7). During these periods hotels, trains, and flights sell out weeks in advance and prices can
              triple. If you must travel then, book 2+ months ahead.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>
              Book 3+ months ahead for October travel - it is peak season for a reason and availability disappears fast.
            </p>
            <p>
              Chinese New Year dates shift every year (January-February) - check the lunar calendar before booking.
            </p>
            <p>
              Shoulder seasons (March, November) offer the best price-to-weather ratio - mild temps, lower prices,
              fewer crowds.
            </p>
            <p>South China (Guangxi, Yunnan) is pleasant year-round - your perfect winter escape when the north freezes.</p>
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
          icon="🗺️"
          title="See Our Pre-Planned Itineraries"
          description="Ready-made 7, 10, and 14-day itineraries covering China's highlights."
          buttonText="Browse Itineraries →"
          buttonHref="/plan-your-trip/preplanned-trips"
          variant="secondary"
        />
      </main>
    </div>
  )
}
