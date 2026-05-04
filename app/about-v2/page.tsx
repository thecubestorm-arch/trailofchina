import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'About V2 | Trail of China',
  description: 'A credibility-focused overview of Trail of China with trust signals and practical coverage.',
  alternates: {
    canonical: '/about-v2',
  },
}

const credentials = [
  {
    marker: '01',
    stat: '4+ trips',
    detail: 'Repeated travel across China, testing the advice against real-world trip planning.',
  },
  {
    marker: '02',
    stat: 'Family in China',
    detail: 'Direct family connections in Beijing and Shanghai keep the guidance grounded in local reality.',
  },
  {
    marker: '03',
    stat: 'Mandarin speaker',
    detail: 'Language access helps translate on-the-ground systems into practical steps for Western travelers.',
  },
  {
    marker: '04',
    stat: 'Local contacts',
    detail: 'A broader network across the country adds context beyond a single city or one-off visit.',
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

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/china-basics', label: 'China Basics' },
  { href: '/destinations', label: 'Destinations' },
]

export default function AboutV2Page() {
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
      <div className="bg-[radial-gradient(circle_at_12%_10%,rgba(175,93,50,0.14),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(26,58,74,0.12),transparent_22%),linear-gradient(180deg,#faf6ef_0%,#f5f1ea_50%,#efe7dc_100%)]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
          <nav className="mb-10 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 hover:border-[var(--primary)] hover:text-[var(--foreground)]">
                {link.label}
              </Link>
            ))}
          </nav>

          <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(130deg,rgba(255,250,243,0.96),rgba(255,248,240,0.86)_48%,rgba(26,58,74,0.08))] px-6 py-14 shadow-[0_24px_80px_rgba(50,41,30,0.12)] sm:px-10 lg:px-14">
            <ChineseWatermark character="旅" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--primary)]">
                  Trust and Expertise
                </p>
                <h1 className="font-serif text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                  Why Trail of China?
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                  Because first-time travelers do not need vague inspiration. They need clear, tested guidance from
                  someone who understands both China and the concerns Western visitors bring with them.
                </p>
              </div>

              <div className="grid gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,252,247,0.72)] p-5 backdrop-blur">
                <div>
                  <p className="text-3xl font-serif font-bold text-[var(--foreground)]">BuetikoferDigital</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Zurich, Switzerland</p>
                </div>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Built for first-time Western travelers to China, with privacy-aware operations aligned to nDSG and
                  GDPR expectations.
                </p>
                <a href="mailto:buetikoferdigital@gmail.com" className="font-medium text-[var(--primary)] hover:opacity-80">
                  buetikoferdigital@gmail.com
                </a>
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Credentials</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                  Practical trust signals, not generic claims
                </h2>
              </div>
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

          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[1.9rem] border border-[var(--line)] bg-[#1a3a4a] p-6 text-[#f5f1ea] shadow-[0_20px_60px_rgba(26,58,74,0.24)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c9b1]">Mission</p>
              <h2 className="mt-4 font-serif text-3xl font-bold">Help Western tourists navigate China confidently</h2>
              <p className="mt-4 text-base leading-8 text-[#f3ebe3]">
                From the first visa step to the last dim sum meal, Trail of China translates a high-friction planning
                process into something structured, scannable, and much easier to trust.
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

          <section className="py-12 lg:py-16">
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

          <section className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(120deg,rgba(175,93,50,0.96),rgba(145,70,34,0.94)_52%,rgba(26,58,74,0.94))] px-6 py-10 text-[#f5f1ea] shadow-[0_24px_80px_rgba(50,41,30,0.18)] sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-[#f8ddd0]">Ready to Plan?</p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Plan Your China Trip</h2>
                <p className="mt-3 text-base leading-7 text-[#f7efe7]">
                  Start with the guides that remove the biggest first-timer risks: visas, internet, payment apps,
                  trains, and route choices.
                </p>
              </div>
              <Link
                href="/plan-your-trip"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#f5f1ea] px-6 py-3 font-semibold text-[#1a3a4a] hover:-translate-y-0.5"
              >
                Plan Your China Trip
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
