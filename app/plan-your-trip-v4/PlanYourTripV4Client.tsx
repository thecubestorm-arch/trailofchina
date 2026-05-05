'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'

const sections = [
  {
    category: 'Timing',
    icon: '🗓️',
    title: 'Best Time to Visit',
    decision: 'Start here if your dates are flexible',
    preview:
      'Use the seasons to your advantage before you book anything else. This guide shows month-by-month weather, crowd pressure, and the major holiday windows that can reshape your whole trip.',
    tags: ['🌸 Spring', '🍂 Autumn', '❄️ Winter'],
    href: '/plan-your-trip/best-time-to-visit',
  },
  {
    category: 'Budget',
    icon: '💰',
    title: 'Budget Guide',
    decision: 'Start here if cost determines your trip length',
    preview:
      'Set the financial frame first, then decide how many cities and travel days make sense. Compare daily spend, hotel tiers, transport costs, and what changes between budget, mid-range, and luxury trips.',
    tags: ['¥ Budget', '¥¥ Mid-Range', '¥¥¥ Luxury'],
    href: '/plan-your-trip/budget',
  },
  {
    category: 'Routes',
    icon: '🗺️',
    title: 'Preplanned Trips',
    decision: 'Start here if you want a proven route',
    preview:
      'Begin with an itinerary that already works in the real world. These ready-made 7, 10, and 14 day routes balance travel time, major highlights, and pacing so you do not have to assemble the backbone yourself.',
    tags: ['7️⃣ 7 Days', '🔟 10 Days', '1️⃣4️⃣ 14 Days'],
    href: '/plan-your-trip/preplanned-trips',
  },
  {
    category: 'Custom',
    icon: '✍️',
    title: 'Travel Planner',
    decision: 'Start here if you already know your constraints',
    preview:
      'If you already know your cities, time window, or priorities, build from those constraints directly. Shape the trip around duration, interests, and how fast or slow you want each stop to feel.',
    tags: ['🏙️ Cities', '⏱️ Duration', '🎯 Interests'],
    href: '/plan-your-trip/travel-planner',
  },
] as const

const routes = [
  {
    days: '7 Days',
    pace: 'Fast Paced',
    route: "Beijing → Xi'an → Shanghai",
    price: 'From ¥8,000',
    href: '/plan-your-trip/preplanned-trips/7-day-route',
  },
  {
    days: '10 Days',
    pace: 'Moderate',
    route: '+ Chengdu',
    price: 'From ¥12,000',
    href: '/plan-your-trip/preplanned-trips/10-day-route',
  },
  {
    days: '14 Days',
    pace: 'Relaxed',
    route: '+ Hangzhou',
    price: 'From ¥16,000',
    href: '/plan-your-trip/preplanned-trips/14-day-route',
  },
] as const

export default function PlanYourTripV4Client() {
  return (
    <main
      className="min-h-screen"
      style={
        {
          '--foreground': '#1a3a4a',
          '--muted': '#5f6f7a',
          '--primary': '#af5d32',
          '--line': '#ebe4d8',
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

          <header className="relative overflow-hidden border-b border-[var(--line)] pb-12">
            <ChineseWatermark character="行" />
            <div className="relative z-10 max-w-3xl pt-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">Decision Flow</p>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Plan Your China Trip
              </h1>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                Four paths, one destination. Start where it makes sense for you.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                Some travelers choose dates first, others choose budget or route. Use the sections below as the entry
                point that best matches how you already think about this trip.
              </p>
            </div>
          </header>

          <section>
            {sections.map((section, index) => (
              <div key={section.href}>
                <Link
                  href={section.href}
                  className="group block border-b border-[var(--line)] py-12 transition-colors duration-200 hover:bg-[#fdf8f3]"
                >
                  <article className="px-1 sm:px-2">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#af5d32] text-2xl text-[#f5f1ea] shadow-[0_10px_24px_rgba(175,93,50,0.2)]">
                        {section.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
                        <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                          {section.title}
                        </h2>
                        <p className="mt-2 text-sm font-medium text-[#af5d32]">{section.decision}</p>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">{section.preview}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {section.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#f5f1ea] px-3 py-1 text-sm text-[var(--foreground)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#af5d32]">
                          Explore
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>

                {index === 2 ? (
                  <section className="border-b border-[var(--line)] bg-[#1a3a4a] px-5 py-6 text-white sm:px-6">
                    <div className="flex flex-col gap-3">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#f0c9b1]">Route Comparison</p>
                      <div className="overflow-hidden rounded-2xl border border-[rgba(240,201,177,0.18)]">
                        {routes.map((route, routeIndex) => (
                          <Link
                            key={route.days}
                            href={route.href}
                            className={`grid gap-2 px-4 py-4 text-sm transition-colors hover:bg-[rgba(240,201,177,0.08)] md:grid-cols-[140px_140px_minmax(0,1fr)_130px] md:items-center md:gap-4 ${
                              routeIndex < routes.length - 1 ? 'border-b border-[rgba(240,201,177,0.16)]' : ''
                            }`}
                          >
                            <span className="font-semibold text-[#f0c9b1]">{route.days}</span>
                            <span>{route.pace}</span>
                            <span className="text-[#f5f1ea]">{route.route}</span>
                            <span className="font-medium text-[#f0c9b1]">{route.price}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </section>
                ) : null}
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-[2rem] bg-[#1a3a4a] px-6 py-8 text-[#f5f1ea] shadow-[0_24px_70px_rgba(26,58,74,0.22)] sm:px-8 sm:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#f0c9b1]">Need a starting point?</p>
                <h2 className="mt-3 font-serif text-3xl font-bold">Not sure where to start?</h2>
              </div>
              <Link
                href="/plan-your-trip/preplanned-trips"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#f5f1ea] transition-colors hover:text-[#f0c9b1]"
              >
                Browse our preplanned trips
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
