import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'About | Trail of China',
  description: 'Learn why Trail of China exists, who is behind it, and what expertise shapes every recommendation.',
  alternates: {
    canonical: '/about',
  },
}

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/china-basics', label: 'China Basics' },
  { href: '/destinations', label: 'Destinations' },
]

const credentials = [
  {
    marker: '01',
    stat: '4+ trips',
    detail: 'Repeated travel across China, testing advice against the real friction first-time visitors run into.',
  },
  {
    marker: '02',
    stat: 'Family in China',
    detail: 'Direct family ties create context that goes beyond a tourist checklist or one-off city break.',
  },
  {
    marker: '03',
    stat: 'Mandarin speaker',
    detail: 'Language access helps turn complicated local systems into clear, practical guidance.',
  },
  {
    marker: '04',
    stat: 'Local contacts',
    detail: 'Recommendations are informed by people on the ground, not only by internet research.',
  },
]

const team = [
  {
    initial: 'R',
    name: 'Ruijie',
    role: 'The local expertise engine behind every recommendation.',
    bio: 'Family originally from Shanghai. Speaks fluent Chinese, German, and English. Has visited China 20+ times — from major cities to smaller local stops that most travelers never see.',
  },
  {
    initial: 'S',
    name: 'Sascha',
    role: 'The one who remembers what it feels like to arrive in China for the first time.',
    bio: 'From Switzerland. Has been to China 4 times and is learning Chinese. Fell in love with the country — the food, the pace, the way a chaotic street suddenly makes sense. Building Trail of China so others can experience that same discovery.',
  },
]

const coverage = [
  'Visas and entry rules',
  'Internet access and eSIM choices',
  'Alipay, WeChat Pay, and card realities',
  'High-speed trains and station workflow',
  'City-to-city route planning',
  'Apps, maps, taxis, and local transit',
]

const quotes = [
  '“Exactly the kind of practical guidance a skeptical first-timer wants before booking.”',
  '“It explains the systems behind the trip, not just the highlights.”',
]

export default function AboutPage() {
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
      <div className="bg-[radial-gradient(circle_at_top_left,rgba(175,93,50,0.16),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(26,58,74,0.12),transparent_24%),linear-gradient(180deg,#fbf7f1_0%,#f5f1ea_48%,#efe7dc_100%)]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
          <nav className="mb-10 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 hover:border-[var(--primary)] hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(255,248,240,0.82)_45%,rgba(175,93,50,0.08))] px-6 py-14 shadow-[0_24px_80px_rgba(50,41,30,0.12)] sm:px-10 lg:px-14 lg:py-20">
            <ChineseWatermark character="旅" />
            <div className="relative z-10 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--primary)]">
                About Trail of China
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                We Fell in Love with China So You Can Too
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Trail of China is a Zurich-based guide for first-time Western travelers who want China to feel legible,
                practical, and much less intimidating from the first visa question onward.
              </p>
            </div>
          </section>

          <section className="py-12 lg:py-16">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Credentials</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                Practical trust signals, not generic claims
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {credentials.map((item) => (
                <article
                  key={item.marker}
                  className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.1)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">{item.marker}</span>
                    <span className="h-3 w-3 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl font-bold text-[var(--foreground)]">{item.stat}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="py-2 lg:py-4">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Team</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                The people behind the guidance
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {team.map((person) => (
                <article
                  key={person.name}
                  className="rounded-[1.9rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.1)] sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div
                      className="flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[linear-gradient(135deg,#1a3a4a,#af5d32)] text-3xl font-serif text-white shadow-[0_16px_30px_rgba(26,58,74,0.18)]"
                      aria-hidden="true"
                    >
                      {person.initial}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-[var(--foreground)]">{person.name}</h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                        {person.role}
                      </p>
                      <p className="mt-4 text-base leading-8 text-[var(--muted)]">{person.bio}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
            <article className="rounded-[1.9rem] border border-[var(--line)] bg-[#1a3a4a] p-6 text-[#f5f1ea] shadow-[0_20px_60px_rgba(26,58,74,0.24)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c9b1]">Mission</p>
              <h2 className="mt-4 font-serif text-3xl font-bold">Help Western tourists navigate China confidently</h2>
              <p className="mt-4 text-base leading-8 text-[#f3ebe3]">
                Trail of China translates a high-friction planning process into something structured, scannable, and
                far easier to trust before you ever board the plane.
              </p>
            </article>

            <article className="rounded-[1.9rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,250,243,0.96),rgba(175,93,50,0.08))] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">What We Cover</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {coverage.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(255,252,247,0.74)] px-4 py-4">
                    <p className="text-base font-medium leading-7 text-[var(--foreground)]">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="py-2 lg:py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Reader Signals</p>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {quotes.map((quote) => (
                <blockquote
                  key={quote}
                  className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)]"
                >
                  <div className="border-l-4 border-[var(--primary)] pl-5 font-serif text-2xl leading-9 text-[var(--foreground)]">
                    {quote}
                  </div>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="py-12 lg:py-16">
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Company</p>
              <div className="mt-4 space-y-3 text-[var(--muted)]">
                <p className="font-serif text-2xl text-[var(--foreground)]">BuetikoferDigital</p>
                <p>Zurich, Switzerland</p>
                <p>nDSG / GDPR mindful operations for an international audience.</p>
                <a href="mailto:buetikoferdigital@gmail.com" className="text-[var(--primary)] hover:opacity-80">
                  buetikoferdigital@gmail.com
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(120deg,rgba(26,58,74,0.96),rgba(26,58,74,0.86)_52%,rgba(175,93,50,0.88))] px-6 py-10 text-[#f5f1ea] shadow-[0_24px_80px_rgba(26,58,74,0.22)] sm:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f3d7c6]">Next Step</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl font-bold sm:text-4xl">Start Planning Your Trip</h2>
                <p className="mt-3 text-base leading-7 text-[#f3ebe3]">
                  Move from inspiration to logistics with guides for visas, routes, apps, payments, and first-time
                  traveler decisions.
                </p>
              </div>
              <Link
                href="/plan-your-trip"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#f5f1ea] px-6 py-3 font-semibold text-[#1a3a4a] hover:-translate-y-0.5"
              >
                Start Planning Your Trip
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
