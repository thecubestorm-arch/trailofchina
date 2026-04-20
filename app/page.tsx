import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'China Visa-Free 2025: Your Ultimate Travel Guide',
  description:
    'Start your first China trip with confidence. Explore visa-free updates, top destinations, practical essentials, and step-by-step planning support.',
}

const destinations = [
  {
    name: 'Shanghai',
    highlight: 'Skyline, day trips, modern China',
    summary: 'Best for first-time arrivals, food neighborhoods, and smooth transit.',
    href: '/destinations/shanghai',
  },
  {
    name: 'Beijing',
    highlight: 'History, hutongs, Great Wall access',
    summary: 'Imperial landmarks plus vibrant local streets and cultural depth.',
    href: '/destinations/beijing',
  },
  {
    name: "Xi'an",
    highlight: 'Terracotta Army and old city walls',
    summary: 'A compact city mixing deep history with a strong food scene.',
    href: '/destinations',
  },
  {
    name: 'Guilin',
    highlight: 'Karst mountains and river views',
    summary: 'Scenic base for nature-focused travelers and relaxed pacing.',
    href: '/destinations',
  },
  {
    name: 'Chengdu',
    highlight: 'Pandas, tea houses, Sichuan cuisine',
    summary: 'Ideal for slower days, spicy food, and nearby mountain escapes.',
    href: '/destinations',
  },
]

const faqs = [
  {
    question: 'Can I really enter China visa-free in 2025?',
    answer:
      'Many countries now have visa-free or transit-without-visa options. Always confirm your exact passport policy and entry duration before booking.',
  },
  {
    question: 'Can I use my normal apps and cards in China?',
    answer:
      'You can, but setup matters. Install key apps before flying, add backup payment options, and prepare an internet plan for uninterrupted access.',
  },
  {
    question: 'Is China friendly for first-time solo travelers?',
    answer:
      'Yes, especially in major cities. Transport is efficient, cities are generally safe, and translation apps make day-to-day navigation easier.',
  },
  {
    question: 'How many days should my first trip be?',
    answer:
      'Most first-time visitors do best with 10-14 days, combining two major cities with one slower destination.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Visa-Free Update 2025"
        title="China Visa-Free 2025: Your Ultimate Travel Guide"
        description="Everything a first-time visitor needs: entry basics, essential apps, payment setup, transport tactics, trusted city guides, and practical itineraries."
        primaryCta={{ label: 'Start With China Basics', href: '/china-basics' }}
        secondaryCta={{ label: 'Plan My Trip', href: '/plan-your-trip' }}
      />

      <section className="container-px mx-auto max-w-6xl">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-900 md:px-7 md:py-5 md:text-base">
          Trusted by 50,000+ travelers planning their first China trip.
        </div>
      </section>

      <section className="container-px mx-auto mt-14 max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Top 5 Destinations To Start With</h2>
            <p className="section-subtitle">Built for first-time visitors who want a balanced, low-stress route.</p>
          </div>
          <Link href="/destinations" className="hidden text-sm font-bold text-china-red md:inline-flex">
            View all destinations →
          </Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((city) => (
            <Link key={city.name} href={city.href} className="card-base block h-full">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">{city.highlight}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{city.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{city.summary}</p>
              <p className="mt-5 text-sm font-semibold text-china-red">Explore city guide →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto mt-16 max-w-4xl">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Quick answers to the questions most first-time visitors ask first.</p>
        <div className="mt-7 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="card-base group">
              <summary className="cursor-pointer list-none text-base font-bold text-slate-900 marker:hidden md:text-lg">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto mt-16 max-w-6xl">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10 md:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Before You Go</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Set up your phone, payments, and transport in 30 minutes.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            Follow our practical checklists so your first day in China feels smooth instead of stressful.
          </p>
          <div className="mt-7">
            <Link href="/china-basics" className="btn-secondary">
              Open The Before-You-Go Checklist
            </Link>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto mt-16 max-w-6xl pb-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">Get Weekly China Travel Updates</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Visa updates, route ideas, and practical travel tips. No spam, just useful guidance.
          </p>
          <form className="mt-6 flex flex-col gap-3 md:flex-row" aria-label="Newsletter signup">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-xl border border-slate-300 px-4 text-sm text-slate-900 outline-none ring-china-red/30 transition focus:ring-2"
            />
            <button type="button" className="btn-primary h-12">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
