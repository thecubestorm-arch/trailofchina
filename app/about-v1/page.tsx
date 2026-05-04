import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'About V1 | Trail of China',
  description: 'A story-driven introduction to Trail of China and the people behind it.',
  alternates: {
    canonical: '/about-v1',
  },
}

const storySections = [
  {
    eyebrow: 'First Trip',
    title: 'China stopped feeling abstract the moment we landed.',
    body:
      'The first trip was not built around perfect logistics. It was built around curiosity, family tables, station platforms, and the sudden realization that China asks first-time visitors to learn a completely different travel rhythm. What looked overwhelming from Europe became manageable once the local logic clicked.',
  },
  {
    eyebrow: 'What We Learned',
    title: 'Confidence matters more than bravado.',
    body:
      'Western travelers rarely need more hype. They need practical context: how to handle payments, which apps matter, what trains feel like, when to ask for help, and how to avoid losing energy on avoidable mistakes. After 4+ trips, Mandarin conversations, and family ties in Beijing and Shanghai, the patterns became clear.',
  },
  {
    eyebrow: 'Why We Built This',
    title: 'Trail of China exists to make the first trip feel possible.',
    body:
      'BuetikoferDigital created Trail of China in Zurich for travelers from Europe and the Americas who want the excitement of China without the usual uncertainty. From the first visa question to the last dim sum meal, the goal is simple: turn a complex destination into a trip you can navigate calmly.',
  },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/china-basics', label: 'China Basics' },
  { href: '/destinations', label: 'Destinations' },
]

export default function AboutV1Page() {
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
              <Link key={link.href} href={link.href} className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 hover:border-[var(--primary)] hover:text-[var(--foreground)]">
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
                not intimidating.
              </p>
            </div>
          </section>

          <section className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
            <div className="space-y-8">
              {storySections.map((section) => (
                <article
                  key={section.eyebrow}
                  className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.1)] sm:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">{section.eyebrow}</p>
                  <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-[var(--foreground)] sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">{section.body}</p>
                </article>
              ))}
            </div>

            <div className="space-y-8">
              <aside className="rounded-[1.75rem] border border-[var(--line)] bg-[#1a3a4a] p-6 text-[#f5f1ea] shadow-[0_20px_60px_rgba(26,58,74,0.24)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c9b1]">Why Trust Us</p>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[#f2ebe3]">
                  <li>4+ trips across China, from major gateways to smaller local stops.</li>
                  <li>Family connections in Beijing and Shanghai.</li>
                  <li>Mandarin speaker with local contacts across the country.</li>
                  <li>Built for Western travelers from Europe and the Americas.</li>
                </ul>
              </aside>

              <blockquote className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 pl-8 text-lg italic leading-8 text-[var(--foreground)] shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                <div className="border-l-4 border-[var(--primary)] pl-5">
                  Before you book more cities, learn the four systems that shape the trip: visa rules, payments,
                  internet access, and trains. Once those make sense, China becomes dramatically easier.
                </div>
              </blockquote>

              <blockquote className="rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,250,243,0.98),rgba(175,93,50,0.08))] p-6 pl-8 text-lg italic leading-8 text-[var(--foreground)] shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                <div className="border-l-4 border-[var(--primary)] pl-5">
                  Our mission is to help you navigate China confidently, from the first visa form to the last dim sum
                  order.
                </div>
              </blockquote>

              <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
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
