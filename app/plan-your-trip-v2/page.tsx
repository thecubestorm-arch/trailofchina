import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'Plan Your Trip Variant 2 | Trail of China',
  description: 'Decision-first Plan Your Trip hub variant that helps travelers choose the right planning path.',
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

const routeComparison = [
  { length: '7 Days', pace: 'Fast', cost: '$$', bestFor: 'First-timers with one week' },
  { length: '10 Days', pace: 'Balanced', cost: '$$-$$$', bestFor: 'Most travelers' },
  { length: '14 Days', pace: 'Relaxed', cost: '$$$', bestFor: 'Depth and recovery time' },
] as const

export default function PlanYourTripV2Page() {
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

          <header className="relative mb-10 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,252,247,0.95),rgba(255,248,240,0.9)_55%,rgba(175,93,50,0.12))] px-6 py-10 shadow-[0_20px_60px_rgba(50,41,30,0.08)] sm:px-10 lg:py-14">
            <ChineseWatermark character="计" />
            <div className="relative z-10 max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Plan Your China Trip
              </h1>
              <p className="mt-4 text-xl text-[var(--muted)]">
                Four paths, one destination. Start where it makes sense for you.
              </p>
              <div className="mt-6 max-w-2xl space-y-3 text-base leading-7 text-[var(--muted)]">
                <p>Some travelers begin with weather. Others begin with cost, pace, or a route that already works.</p>
                <p>
                  The right starting point depends on what is fixed first: your dates, your budget, your appetite for
                  planning, or how much hand-holding you want.
                </p>
              </div>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.href}
                className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_42px_rgba(50,41,30,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">{section.category}</p>
                    <h2 className="mt-3 font-serif text-2xl font-bold text-[var(--foreground)]">
                      <span className="mr-3">{section.icon}</span>
                      {section.title}
                    </h2>
                  </div>
                  <span className="rounded-full bg-[var(--primary)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f1ea]">
                    {section.who}
                  </span>
                </div>

                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{section.preview}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {section.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[rgba(175,93,50,0.08)] px-3 py-1 text-sm text-[var(--primary)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {section.category === 'Routes' ? (
                  <div className="mt-6 rounded-[1.25rem] border border-[rgba(175,93,50,0.14)] bg-[rgba(245,241,234,0.74)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">Route Comparison</p>
                    <div className="mt-4 grid gap-3">
                      {routeComparison.map((route) => (
                        <div
                          key={route.length}
                          className="grid gap-2 rounded-[1rem] border border-[var(--line)] bg-white/70 px-4 py-3 sm:grid-cols-[0.8fr_0.7fr_0.7fr_1fr]"
                        >
                          <span className="font-serif text-lg text-[var(--foreground)]">{route.length}</span>
                          <span className="text-sm text-[var(--muted)]">Pace: {route.pace}</span>
                          <span className="text-sm text-[var(--muted)]">Cost: {route.cost}</span>
                          <span className="text-sm text-[var(--muted)]">Best for: {route.bestFor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <Link
                  href={section.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)] hover:text-[var(--foreground)]"
                >
                  Start Here
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </section>

          <section className="mt-12 rounded-[1.75rem] border border-[var(--line)] bg-[#1a3a4a] px-6 py-8 text-[#f5f1ea] shadow-[0_20px_60px_rgba(26,58,74,0.18)] sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c9b1]">Not sure where to start?</p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl font-bold">Start with a preplanned route.</h2>
                <p className="mt-3 text-base leading-7 text-[#f3ebe3]">
                  It is the fastest way to get a realistic China trip on the page, then adjust hotels, cities, and pace
                  once the backbone is set.
                </p>
              </div>
              <Link
                href="/plan-your-trip/preplanned-trips"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f1ea] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1a3a4a] hover:bg-white"
              >
                Explore Routes
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
