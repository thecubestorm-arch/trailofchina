'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'

const routeCards = [
  {
    badge: '7 Days',
    pace: 'Fast Paced',
    route: "Beijing → Xi'an → Shanghai",
    price: 'From ¥8,000',
    href: '/plan-your-trip/preplanned-trips/7-day-route',
    image: '/images/beijing/great-wall.jpg',
    alt: 'Great Wall winding across the hills outside Beijing',
  },
  {
    badge: '10 Days',
    pace: 'Moderate',
    route: "Beijing → Xi'an → Shanghai + Chengdu",
    price: 'From ¥12,000',
    href: '/plan-your-trip/preplanned-trips/10-day-route',
    image: '/images/chengdu/pandas.jpg',
    alt: 'Giant panda resting in Chengdu',
  },
  {
    badge: '14 Days',
    pace: 'Relaxed',
    route: "Beijing → Xi'an → Shanghai + Hangzhou",
    price: 'From ¥16,000',
    href: '/plan-your-trip/preplanned-trips/14-day-route',
    image: '/images/chongqing/skyline-night.jpg',
    alt: 'Chongqing skyline glowing at night above the river',
  },
] as const

const tools = [
  {
    icon: '🗓️',
    title: 'Best Time to Visit',
    decision: 'Start here if your dates are flexible',
    description: 'Use the climate, holiday calendar, and crowd levels to decide when the trip should happen.',
    tags: ['🌸 Spring', '🍂 Autumn', '❄️ Winter'],
    href: '/plan-your-trip/best-time-to-visit',
    image: '/images/beijing/forbidden-city.jpg',
    alt: 'Forbidden City rooftops in warm seasonal light',
  },
  {
    icon: '💰',
    title: 'Budget Guide',
    decision: 'Start here if cost determines your trip',
    description: 'Compare daily budgets, hotels, food, and transport before you commit to trip length.',
    tags: ['¥ Budget', '¥¥ Mid-Range', '¥¥¥ Luxury'],
    href: '/plan-your-trip/budget',
    image: '/images/general/chinese-food.jpg',
    alt: 'Shared Chinese dishes arranged on a dining table',
  },
  {
    icon: '🗺️',
    title: 'Preplanned Trips',
    decision: 'Start here if you want a proven route',
    description: 'See ready-made itineraries that already balance highlights, transfers, and realistic pacing.',
    tags: ['7️⃣ 7 Days', '🔟 10 Days', '1️⃣4️⃣ 14 Days'],
    href: '/plan-your-trip/preplanned-trips',
    image: '/images/general/high-speed-train.jpg',
    alt: 'High-speed train moving through the Chinese countryside',
  },
  {
    icon: '✍️',
    title: 'Travel Planner',
    decision: 'Start here if you know your constraints',
    description: 'Build around your city list, available days, and the specific interests you do not want to miss.',
    tags: ['🏙️ Cities', '⏱️ Duration', '🎯 Interests'],
    href: '/plan-your-trip/travel-planner',
    image: '/images/shanghai/bund-skyline.jpg',
    alt: 'The Bund skyline across the river in Shanghai',
  },
] as const

export default function PlanYourTripClient() {
  return (
    <main
      className="min-h-screen"
      style={
        {
          '--foreground': '#1a3a4a',
          '--muted': '#5f6f7a',
          '--primary': '#af5d32',
          '--line': '#ebe4d8',
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

          <header
            className="relative flex min-h-[320px] items-center overflow-hidden rounded-[2rem] px-6 py-10 md:min-h-[400px] md:px-10"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(26,58,74,0.7) 0%, rgba(26,58,74,0.5) 100%), url(/images/hero/china-hero.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            role="img"
            aria-label="Panoramic view of China used as the Plan Your Trip page hero image"
          >
            <div className="absolute inset-0 bg-[rgba(10,20,26,0.08)]" aria-hidden="true" />
            <div className="absolute opacity-[0.55]">
              <ChineseWatermark character="旅" />
            </div>
            <div className="relative z-10 max-w-3xl pt-3">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#f0c9b1]">计划你的中国之旅</p>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Your China Trip Starts Here
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#f5f1ea]">
                Everything you need to plan, budget, and book your first China trip.
              </p>
            </div>
          </header>

          <section className="mt-10 overflow-hidden rounded-[2rem] bg-[#1a3a4a] px-5 py-8 text-white shadow-[0_24px_70px_rgba(26,58,74,0.22)] sm:px-8 sm:py-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#f0c9b1]">Route Timeline</p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Choose Your Route</h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {routeCards.map((route) => (
                  <Link
                    key={route.badge}
                    href={route.href}
                    className="group overflow-hidden rounded-xl border-l-4 border-transparent bg-white text-[#1a3a4a] shadow-[0_16px_36px_rgba(8,19,26,0.22)] transition-all duration-200 hover:-translate-y-1 hover:border-[#af5d32]"
                  >
                    <img src={route.image} alt={route.alt} className="h-32 w-full object-cover" />
                    <div className="p-6">
                    <span className="inline-flex rounded-full bg-[#af5d32] px-3 py-1 text-sm font-semibold text-[#f5f1ea]">
                      {route.badge}
                    </span>
                    <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[#af5d32]">{route.pace}</p>
                    <p className="mt-3 font-serif text-2xl font-bold leading-tight">{route.route}</p>
                    <p className="mt-4 text-base text-[#5f6f7a]">{route.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/plan-your-trip/travel-planner"
                className="inline-flex items-center gap-2 self-start font-semibold text-[#f0c9b1] transition-colors hover:text-white"
              >
                Or customize your own route
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative overflow-hidden rounded-xl border border-[#ebe4d8] p-6 shadow-sm transition-colors duration-200 hover:bg-[#fdf8f3]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${tool.image})` }}
                  role="img"
                  aria-label={tool.alt}
                />
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.88)]" aria-hidden="true" />
                <article>
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#af5d32] text-xl text-[#f5f1ea] transition-transform duration-200 group-hover:scale-110">
                      {tool.icon}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#1a3a4a]">{tool.title}</h2>
                      <p className="mt-2 text-sm font-medium text-[#af5d32]">{tool.decision}</p>
                    </div>
                  </div>
                  <p className="relative z-10 mt-4 text-base leading-7 text-[#5f6f7a]">{tool.description}</p>
                  <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#f5f1ea] px-3 py-1 text-sm text-[#1a3a4a]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="relative z-10 mt-5 inline-flex items-center gap-2 font-semibold text-[#af5d32]">
                    Explore
                    <span aria-hidden="true">→</span>
                  </span>
                </article>
              </Link>
            ))}
          </section>

          <blockquote className="mt-12 rounded-r-lg border-l-4 border-[#af5d32] bg-[#fdf8f3] p-6 text-base leading-7 text-[#1a3a4a]">
            <p>💡 First time in China? Start with a preplanned 7-day route and customize from there.</p>
          </blockquote>

          <section
            className="relative mt-12 overflow-hidden rounded-[2rem] px-6 py-8 text-[#f5f1ea] shadow-[0_24px_70px_rgba(26,58,74,0.22)] sm:px-8 sm:py-10"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(26,58,74,0.78) 0%, rgba(26,58,74,0.6) 100%), url(/images/xian/terracotta-warriors.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            role="img"
            aria-label="Terracotta Warriors backdrop behind the preplanned trips call to action"
          >
            <div className="absolute inset-0 bg-[rgba(12,24,32,0.12)]" aria-hidden="true" />
            <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
