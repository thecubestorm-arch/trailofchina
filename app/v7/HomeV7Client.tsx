'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Map,
  MoveRight,
  Route,
  Smartphone,
} from 'lucide-react'
import FooterCTA from '@/components/FooterCTA'
import ExploreChinaSection from '@/app/v7/ExploreChinaSection'

const trustSignals = [
  '4+ Trips to China',
  'Speaks Mandarin',
  'Family in Beijing & Shanghai',
  'Updated 2025',
]

const decisionCards = [
  {
    title: 'First time?',
    description: 'Start with a proven route built for a first China trip.',
    href: '/plan-your-trip/preplanned-trips/7-day-route',
    label: 'See the 7-day route',
    icon: Route,
  },
  {
    title: 'Already planning?',
    description: 'Build your trip around days, cities, and pacing.',
    href: '/plan-your-trip/travel-planner',
    label: 'Open the planner',
    icon: Map,
  },
  {
    title: 'Need apps?',
    description: 'Sort payments, maps, messaging, and VPN before you fly.',
    href: '/china-basics/what-apps-to-use',
    label: 'Get the app list',
    icon: Smartphone,
  },
  {
    title: 'Want the basics?',
    description: 'Read the practical stuff first so the rest makes sense.',
    href: '/china-basics',
    label: 'Learn the basics',
    icon: Globe,
  },
]

const trendingFaqs = [
  {
    question: 'Who can use China\'s visa-free entry right now?',
    answer:
      'China expanded visa-free entry for many passports during 2024 and 2025, with 15 to 30 days available depending on nationality and policy updates. Check the visa guide first because this is the rule set that changes fastest.',
    href: '/china-basics/how-china-differs/visa-guide',
    label: 'Check the visa guide',
  },
  {
    question: 'Do I need Alipay or WeChat Pay before I arrive?',
    answer:
      'Usually yes. China is heavily mobile-payment based, and foreign card verification can take time. The safest move is to set up Alipay and WeChat Pay at home so you are not troubleshooting at the airport or your first restaurant.',
    href: '/china-basics/what-apps-to-use/payment',
    label: 'See payment setup',
  },
  {
    question: 'How do I get internet access in China?',
    answer:
      'Most first-time travelers use an eSIM, roaming package, or local SIM. The key decision is making sure you have reliable data from the moment you land, because transport, translation, and payments all depend on it.',
    href: '/china-basics/how-to-get-internet',
    label: 'Compare internet options',
  },
  {
    question: 'What is the best time to visit China?',
    answer:
      'Spring and autumn are usually the easiest seasons for first trips because temperatures are milder and major sightseeing is more comfortable. It also helps to avoid peak domestic travel periods when transport and hotels get crowded.',
    href: '/plan-your-trip/best-time-to-visit',
    label: 'See best times to visit',
  },
  {
    question: 'Should I take trains or flights between major cities?',
    answer:
      'For classic first-trip routes such as Beijing, Xi\'an, and Shanghai, high-speed rail is often the simplest option. It is easier city-center to city-center, more predictable, and part of the China experience in its own right.',
    href: '/china-basics/how-to-get-around/city-to-city',
    label: 'Read the transport guide',
  },
]

const footerQuickInfo = [
  {
    icon: Smartphone,
    title: 'Apps Before You Fly',
    description: 'Set up payment, VPN, and maps at home with the ',
    link: { href: '/china-basics/what-apps-to-use', label: 'apps guide' },
  },
  {
    icon: Globe,
    title: 'Internet Setup',
    description: 'Pick between eSIM, roaming, and local SIM in the ',
    link: { href: '/china-basics/how-to-get-internet', label: 'internet guide' },
  },
  {
    icon: Route,
    title: 'First-Timer Route',
    description: 'Need a starting point? Use the ',
    link: { href: '/plan-your-trip/preplanned-trips/7-day-route', label: '7-day route' },
  },
]

function HomeV7ClientInner() {
  const [openFaq, setOpenFaq] = useState(0)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: trendingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1a3a4a]">
      <section className="relative flex min-h-[500px] items-end overflow-hidden md:min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/china-skyline/1920/1080')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl">
              Your First Trip to China
              <span className="block">Simplified</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              Wider visa-free entry, mobile-first travel tools, and fast trains make China easier
              to plan than it looks. Start here to sort the essentials before you commit to cities,
              routes, and bookings.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/plan-your-trip/preplanned-trips"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#af5d32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#97502b]"
              >
                Plan Your Trip
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/china-basics"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/80 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#1a3a4a]"
              >
                Explore China Basics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a3a4a]/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5 md:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-[#1a3a4a]/8 bg-[#f5f1ea] px-4 py-4 text-center text-sm font-semibold text-[#1a3a4a]"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#af5d32]">
            Decision Helper
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Not sure where to start?</h2>
          <p className="mt-3 text-base leading-7 text-[#1a3a4a]/72">
            Pick the problem you are trying to solve first. The goal here is to reduce friction,
            not send you through a giant directory.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {decisionCards.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-[1.5rem] border border-[#1a3a4a]/10 bg-white p-6 shadow-[0_18px_40px_rgba(26,58,74,0.06)] transition-all hover:-translate-y-1 hover:border-[#af5d32]/40 hover:shadow-[0_22px_46px_rgba(26,58,74,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#af5d32]/10 text-[#af5d32]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#1a3a4a]/68">{card.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#af5d32]">
                  {card.label}
                  <MoveRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-[#1a3a4a] py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:px-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1cbb4]">
              Trending Now
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What travelers are asking right now
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-white/72">
              These are the friction points that keep coming up: visa rules, apps, internet,
              seasonality, and transport choices.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <div className="space-y-3">
            {trendingFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/6 backdrop-blur-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold leading-6 text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-white/74">{faq.answer}</p>
                        <Link
                          href={faq.href}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f1cbb4] transition-colors hover:text-white"
                        >
                          {faq.label}
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ExploreChinaSection />

      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FooterCTA
            title="Ready to turn this into an actual route?"
            subtitle="Start with a preplanned trip if you want speed, or use the planner if you already know roughly how long you have."
            quickInfo={footerQuickInfo}
            trustText="Free guides · Mobile-first planning help · Written for first-time China travelers"
          />
        </div>
      </section>
    </main>
  )
}

export default HomeV7ClientInner
