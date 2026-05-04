import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'About V3 | Trail of China',
  description: 'A minimal editorial About page for Trail of China.',
  alternates: {
    canonical: '/about-v3',
  },
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/china-basics', label: 'China Basics' },
]

export default function AboutV3Page() {
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
      <div className="bg-[radial-gradient(circle_at_top,rgba(175,93,50,0.08),transparent_24%),linear-gradient(180deg,#faf6f0_0%,#f5f1ea_58%,#f0e9de_100%)]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-5 text-sm text-[var(--muted)]">
            <div className="font-medium text-[var(--foreground)]">Trail of China</div>
            <nav className="flex flex-wrap gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[var(--primary)]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <section className="relative py-16 sm:py-20 lg:py-24">
            <ChineseWatermark character="旅" />
            <div className="relative z-10 max-w-3xl">
              <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Trail of China
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Clear, grounded guidance for first-time Western travelers heading to China.
              </p>
            </div>
          </section>

          <section className="grid gap-10 border-t border-[var(--line)] py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 lg:py-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">Who We Are</p>
              <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
                Trail of China is published by BuetikoferDigital in Zurich, Switzerland.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">What We Do</p>
              <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
                We explain the systems that make a China trip work: visas, payments, internet, trains, apps, and route
                planning.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">Why It Works</p>
              <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
                The advice is shaped by 4+ trips, family in Beijing and Shanghai, Mandarin ability, and local contacts
                across the country.
              </p>
            </div>
          </section>

          <section className="grid gap-8 border-t border-[var(--line)] py-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">Mission</p>
              <p className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
                Help Western tourists navigate China confidently, from first visa to last dim sum.
              </p>
            </div>
            <div className="space-y-3 text-base leading-8 text-[var(--muted)]">
              <p>Built for travelers from Europe and the Americas.</p>
              <p>Based in Zurich, Switzerland.</p>
              <p>Privacy-aware and aligned with nDSG / GDPR expectations.</p>
              <a href="mailto:buetikoferdigital@gmail.com" className="text-[var(--primary)] hover:opacity-80">
                buetikoferdigital@gmail.com
              </a>
            </div>
          </section>

          <section className="border-t border-[var(--line)] py-8 text-sm text-[var(--muted)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>No fluff. Just practical context for a trip that feels more manageable.</p>
              <Link href="/plan-your-trip" className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
                Start Planning Your Trip
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
