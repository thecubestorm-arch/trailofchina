import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'Plan Your Trip Variant 1 | Trail of China',
  description: 'Clean and consistent Plan Your Trip hub variant for comparing timing, budget, routes, and custom planning.',
  robots: {
    index: false,
    follow: false,
  },
}

const sections = [
  {
    category: 'Timing',
    icon: '🗓️',
    title: 'Best Time to Visit',
    preview:
      'Month-by-month climate guide, peak seasons, holidays to avoid, and ideal months for every region.',
    tags: ['🌸 Spring', '🍂 Autumn', '❄️ Winter'],
    href: '/plan-your-trip/best-time-to-visit',
    who: 'Choose this if your dates are flexible',
  },
  {
    category: 'Budget',
    icon: '💰',
    title: 'Budget Guide',
    preview:
      'What China actually costs — daily budgets, accommodation, food, transport, and money-saving tips for every style.',
    tags: ['¥ Budget', '¥¥ Mid-Range', '¥¥¥ Luxury'],
    href: '/plan-your-trip/budget',
    who: 'Choose this if cost determines your trip length',
  },
  {
    category: 'Routes',
    icon: '🗺️',
    title: 'Preplanned Trips',
    preview:
      "Ready-made itineraries for 7, 10, or 14 days covering China's highlights with realistic pacing.",
    tags: ['7️⃣ 7 Days', '🔟 10 Days', '1️⃣4️⃣ 14 Days'],
    href: '/plan-your-trip/preplanned-trips',
    who: 'Choose this if you want a proven route',
  },
  {
    category: 'Custom',
    icon: '✍️',
    title: 'Travel Planner',
    preview:
      "Build your own itinerary. Pick cities, set your pace, and we'll help create the perfect China trip.",
    tags: ['🏙️ Cities', '⏱️ Duration', '🎯 Interests'],
    href: '/plan-your-trip/travel-planner',
    who: 'Choose this if you already know your constraints',
  },
] as const

export default function PlanYourTripV1Page() {
  return (
    <main
      className="min-h-screen"
      style={
        {
          '--foreground': '#1a3a4a',
          '--muted': '#64748b',
          '--surface': 'rgba(255,252,247,0.86)',
          '--primary': '#af5d32',
          '--line': 'rgba(26,58,74,0.12)',
          '--background': '#f5f1ea',
        } as CSSProperties
      }
    >
      <div
        style={{
          background:
            'linear-gradient(0deg, rgba(245,241,234,0.75) 0%, rgba(245,241,234,0.2) 100%), #ffffff',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plan Your Trip' }]} />
          </div>

          <header className="relative mb-12 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(255,252,247,0.82)] px-6 py-10 shadow-[0_20px_60px_rgba(50,41,30,0.08)] sm:px-10 lg:py-14">
            <ChineseWatermark character="计" />
            <div className="relative z-10 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--primary)]">
                Plan Your Trip
              </p>
              <h1 className="font-serif text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Plan Your China Trip
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Four practical ways to begin. Start with timing, cost, a proven route, or a custom planner depending on
                what is already fixed in your trip.
              </p>
            </div>
          </header>

          <section className="grid gap-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_14px_40px_rgba(50,41,30,0.07)] transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--primary)]"
              >
                <article className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <span className="inline-flex rounded-full bg-[rgba(175,93,50,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
                      {section.category}
                    </span>
                    <h2 className="mt-4 font-serif text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                      <span className="mr-3">{section.icon}</span>
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{section.preview}</p>
                    <p className="mt-4 text-sm text-[var(--muted)]">
                      <span className="font-medium text-[var(--foreground)]">Who this is for:</span> {section.who}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 lg:items-end">
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {section.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[rgba(175,93,50,0.16)] bg-[rgba(175,93,50,0.08)] px-3 py-1 text-sm text-[var(--primary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)] group-hover:text-[var(--foreground)]">
                      Explore Section
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </section>

          <section className="mt-12 rounded-[1.5rem] border-l-4 border-[var(--primary)] bg-[rgba(255,252,247,0.92)] px-6 py-5 shadow-[0_10px_30px_rgba(50,41,30,0.05)]">
            <blockquote className="font-serif text-xl leading-8 text-[var(--foreground)]">
              If this is your first trip, start with a preplanned route and customize from there.
            </blockquote>
          </section>
        </div>
      </div>
    </main>
  )
}
