import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Plane, MessageCircle, CheckCircle } from 'lucide-react'
import ChineseWatermark from '@/components/ChineseWatermark'
import FooterEmailCTA from '@/components/FooterEmailCTA'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About — Trail of China',
  description: 'Hi, I\'m Sascha. I built Trail of China after three trips, countless mistakes, and one realization: first-time China travel shouldn\'t be this hard to figure out.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Trail of China',
    description: 'Why I built this site — from a Swiss first-timer who fell in love with China.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'About Trail of China' }],
  },
};

const mistakes = [
  'Arriving without a working VPN installed',
  'Trying to use a credit card at a street-food stall',
  'Buying the wrong train ticket class and standing for 6 hours',
  'Trusting Google Maps in a country that blocks Google',
  'Assuming English signs mean English help',
]

const trustSignals = [
  {
    icon: Plane,
    stat: '3 trips',
    detail: 'First in 2018, then 2023 and 2024. Each one taught me something the blogs left out.',
  },
  {
    icon: MapPin,
    stat: 'Family in Beijing & Shanghai',
    detail: 'My brother-in-law and sister-in-law live there. I don\'t just visit — I go home.',
  },
  {
    icon: MessageCircle,
    stat: 'Mandarin (enough)',
    detail: 'Not fluent, but I can order food, negotiate prices, and read a train ticket.',
  },
  {
    icon: CheckCircle,
    stat: 'Tested on the ground',
    detail: 'Every guide here was checked in real China, not researched from a Zurich café.',
  },
]

export default function AboutPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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

            {/* ── Hero ── */}
            <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(255,248,240,0.82)_45%,rgba(175,93,50,0.08))] px-6 py-14 shadow-[0_24px_80px_rgba(50,41,30,0.12)] sm:px-10 lg:px-14 lg:py-20">
              <ChineseWatermark character="旅" />
              <div className="relative z-10 max-w-3xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--primary)]">
                  About
                </p>
                <h1 className="font-serif text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                  Hi, I'm Sascha.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                  Swiss guy. China-obsessed. Building the guide I wish I'd had before my first trip.
                </p>
              </div>
            </section>

            {/* ── My China Story ── */}
            <section className="py-12 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">My Story</p>
                  <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                    I didn't plan to fall in love with China.
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-8 text-[var(--muted)]">
                    <p>
                      My first trip was 2018. Beijing, Shanghai, Chengdu. I did everything wrong — no VPN, no Alipay,
                      no idea how the trains worked. I stood in the wrong line at the station for 40 minutes.
                      I ate at a restaurant with a picture menu because I couldn't read anything else.
                    </p>
                    <p>
                      But somewhere between the hutongs of Beijing and the tea houses of Chengdu, something clicked.
                      I came back in 2023 and again in 2024. My brother-in-law lives in Beijing. My sister-in-law is in Shanghai.
                      I started learning Mandarin — not fluent, but enough to order food, ask for directions, and understand
                      why the app isn't working.
                    </p>
                    <p>
                      China is complicated. That's not a bug — it's the country. But it doesn't have to be
                      <em> confusing</em> for first-time visitors. That's why I built this.
                    </p>
                  </div>
                </div>

                {/* Trust signals */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  {trustSignals.map((item) => {
                    const Icon = item.icon
                    return (
                      <article
                        key={item.stat}
                        className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.1)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(175,93,50,0.12)]">
                            <Icon size={20} className="text-[var(--primary)]" />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-[var(--foreground)]">{item.stat}</h3>
                        </div>
                        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.detail}</p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* ── Mistakes I Made ── */}
            <section className="rounded-[1.9rem] border border-[var(--line)] bg-[#1a3a4a] p-6 text-[#f5f1ea] shadow-[0_20px_60px_rgba(26,58,74,0.24)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0c9b1]">The Hard Way</p>
              <h2 className="mt-4 font-serif text-3xl font-bold">Mistakes I made so you don't have to</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {mistakes.map((m) => (
                  <div key={m} className="flex items-start gap-3 rounded-xl bg-[rgba(255,252,247,0.08)] px-4 py-3">
                    <span className="mt-0.5 text-[#f0c9b1]">✕</span>
                    <span className="text-sm leading-6 text-[#f3ebe3]">{m}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Why This Site Exists ── */}
            <section className="py-12 lg:py-16">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">The Problem</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                  China travel planning is a mess.
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <article className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                  <h3 className="font-serif text-xl font-bold text-[var(--foreground)]">Language</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    Most resources are in Chinese or written by people who haven't been there in years.
                    The English content is often outdated or copy-pasted.
                  </p>
                </article>
                <article className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                  <h3 className="font-serif text-xl font-bold text-[var(--foreground)]">The Firewall</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    Google, WhatsApp, Instagram — all blocked. You need to prep before you land,
                    but most guides bury the VPN advice under fluffy travel inspiration.
                  </p>
                </article>
                <article className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                  <h3 className="font-serif text-xl font-bold text-[var(--foreground)]">Payments</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    China is basically cashless. Without Alipay or WeChat Pay, you'll struggle at restaurants,
                    shops, and even some train stations. Most guides skip the setup steps.
                  </p>
                </article>
              </div>
              <p className="mt-6 text-base leading-7 text-[var(--muted)]">
                I built Trail of China because I was frustrated. Every "ultimate guide" I found was either
                written by someone who'd never set foot in China, or it was a 5,000-word SEO article with
                no actual actionable steps. I wanted a site that tells you <em>exactly</em> what to do —
                tested, current, and written by someone who actually figured it out the hard way.
              </p>
            </section>

            {/* ── What I Do Differently ── */}
            <section className="py-2 lg:py-4">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">What Makes This Different</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                  Not another generic travel blog.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                  <span className="text-2xl">🧪</span>
                  <h3 className="mt-3 font-serif text-xl font-bold text-[var(--foreground)]">Tested on the ground</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">
                    Every guide, every app recommendation, every payment setup — I tried it myself.
                    In China. Recently. Not "research" from a Zurich apartment.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                  <span className="text-2xl">📅</span>
                  <h3 className="mt-3 font-serif text-xl font-bold text-[var(--foreground)]">Actually current (2026)</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">
                    China's rules change fast. Visa policies, app versions, payment methods — I keep this updated
                    because I go back regularly and my family lives there.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)]">
                  <span className="text-2xl">🛠️</span>
                  <h3 className="mt-3 font-serif text-xl font-bold text-[var(--foreground)]">Step-by-step, no fluff</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">
                    Screenshots, exact app names, the real order of operations.
                    If you follow the guide, it works. No guesswork.
                  </p>
                </div>
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="mt-12 rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(120deg,rgba(26,58,74,0.96),rgba(26,58,74,0.86)_52%,rgba(175,93,50,0.88))] px-6 py-10 text-[#f5f1ea] shadow-[0_24px_80px_rgba(26,58,74,0.22)] sm:px-10">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f3d7c6]">Ready?</p>
              <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-3xl font-bold sm:text-4xl">Start with the basics</h2>
                  <p className="mt-3 text-base leading-7 text-[#f3ebe3]">
                    Visa, eSIM, VPN, Alipay — the four things that will make or break your first day in China.
                    Get them right before you land.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/china-basics"
                    className="inline-flex w-fit items-center justify-center rounded-full bg-[#f5f1ea] px-6 py-3 font-semibold text-[#1a3a4a] hover:-translate-y-0.5 transition-transform"
                  >
                    China Basics
                  </Link>
                  <Link
                    href="/plan-your-trip"
                    className="inline-flex w-fit items-center justify-center rounded-full border border-[#f3d7c6] bg-transparent px-6 py-3 font-semibold text-[#f3d7c6] hover:bg-[rgba(245,241,234,0.1)] transition-colors"
                  >
                    See Trip Ideas
                  </Link>
                </div>
              </div>
            </section>

            {/* ── Company Info ── */}
            <section className="mt-12 py-2 lg:py-4">
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

            {/* ── Newsletter ── */}
            <section className="py-2 lg:py-4">
              <div className="rounded-[1.9rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(26,58,74,0.08))] p-6 shadow-[0_16px_40px_rgba(50,41,30,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Stay in the Loop</p>
                <div className="mt-4 max-w-3xl">
                  <FooterEmailCTA />
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  )
}
