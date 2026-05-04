import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'Plan Your Trip Variant 3 | Trail of China',
  description: 'Visual, magazine-style Plan Your Trip hub variant with route timeline and route comparison.',
  alternates: {
    canonical: '/plan-your-trip-v3',
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

const routeStops = [
  { days: '7 Days', cities: "Beijing → Xi'an → Shanghai" },
  { days: '10 Days', cities: "Beijing → Xi'an → Chengdu → Shanghai" },
  { days: '14 Days', cities: "Beijing → Xi'an → Chengdu → Guilin → Shanghai" },
] as const

const comparisons = [
  {
    title: '7-Day Route',
    pace: 'Fast',
    cost: '$$',
    highlights: 'Imperial landmarks, Terracotta Army, Bund skyline',
    href: '/plan-your-trip/preplanned-trips/7-day-route',
  },
  {
    title: '10-Day Route',
    pace: 'Balanced',
    cost: '$$-$$$',
    highlights: 'Adds pandas, Sichuan food, and better breathing room',
    href: '/plan-your-trip/preplanned-trips/10-day-route',
  },
  {
    title: '14-Day Route',
    pace: 'Relaxed',
    cost: '$$$',
    highlights: 'More scenery, more margin, and a trip that feels less rushed',
    href: '/plan-your-trip/preplanned-trips/14-day-route',
  },
] as const

export default function PlanYourTripV3Page() {
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

          <header className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,252,247,0.94),rgba(255,248,240,0.86)_55%,rgba(26,58,74,0.08))] px-6 py-10 shadow-[0_24px_70px_rgba(50,41,30,0.09)] sm:px-10 lg:py-16">
            <ChineseWatermark character="行" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--primary)]">计划你的中国之旅</p>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Your China Trip Starts Here
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Start with the route backbone, then layer in season, cost, and your own constraints until the trip feels
                like yours instead of a generic checklist.
              </p>
            </div>

            <div className="relative z-10 mt-10 rounded-[1.75rem] border border-[rgba(175,93,50,0.18)] bg-[rgba(255,252,247,0.78)] p-5 sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {routeStops.map((stop, index) => (
                  <div key={stop.days} className="flex flex-1 items-start gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-[#f5f1ea]">
                        {index + 1}
                      </span>
                      {index < routeStops.length - 1 ? (
                        <span className="mt-3 hidden h-px w-24 bg-[rgba(175,93,50,0.28)] lg:block" aria-hidden="true" />
                      ) : null}
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[var(--foreground)]">{stop.days}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{stop.cities}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_rgba(50,41,30,0.08)] transition-transform duration-200 hover:-translate-y-1"
              >
                <article>
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-2xl text-[#f5f1ea] shadow-[0_12px_24px_rgba(175,93,50,0.22)]">
                      {section.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">{section.category}</p>
                      <h2 className="mt-2 font-serif text-2xl font-bold text-[var(--foreground)]">{section.title}</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[var(--muted)]">{section.preview}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {section.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[rgba(175,93,50,0.08)] px-3 py-1 text-sm text-[var(--primary)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)]">
                    <span className="font-medium text-[var(--foreground)]">Who this is for:</span> {section.who}
                  </p>
                </article>
              </Link>
            ))}
          </section>

          <section className="mt-12">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Route Comparison</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                Choose the trip shape before you optimize the details
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {comparisons.map((route) => (
                <article
                  key={route.title}
                  className="rounded-[1.8rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,252,247,0.95),rgba(245,241,234,0.82))] p-6 shadow-[0_18px_44px_rgba(50,41,30,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">{route.pace} Pace</p>
                  <h3 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)]">{route.title}</h3>
                  <p className="mt-3 text-sm text-[var(--muted)]">Cost range: {route.cost}</p>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{route.highlights}</p>
                  <Link
                    href={route.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)] hover:text-[var(--foreground)]"
                  >
                    View Route
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[2rem] bg-[#1a3a4a] px-6 py-8 text-[#f5f1ea] shadow-[0_24px_70px_rgba(26,58,74,0.22)] sm:px-8 sm:py-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c9b1]">Ready to plan?</p>
                <h2 className="mt-4 font-serif text-3xl font-bold">Start with a route.</h2>
                <p className="mt-3 text-base leading-7 text-[#f3ebe3]">
                  Once the route works, the rest gets easier: train legs, hotel splits, city balance, and realistic
                  travel days all start to click into place.
                </p>
              </div>
              <Link
                href="/plan-your-trip/preplanned-trips"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f1ea] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1a3a4a] hover:bg-white"
              >
                Start with Routes
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
