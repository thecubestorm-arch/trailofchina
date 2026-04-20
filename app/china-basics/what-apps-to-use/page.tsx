import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Apps to Use',
  description:
    'Set up the essential China travel apps before departure: payments, maps, bookings, communication, and VPN access.',
}

const appCards = [
  {
    icon: '💳',
    title: 'Payment Apps',
    href: '/china-basics/what-apps-to-use/payment',
    description: 'Link your bank card to Alipay and WeChat Pay so you can handle daily spending without cash stress.',
  },
  {
    icon: '🗺️',
    title: 'Maps',
    href: '/china-basics/what-apps-to-use/maps',
    description: 'Use the right mapping apps for metro exits, Chinese place names, and walking routes in busy cities.',
  },
  {
    icon: '🧳',
    title: 'Travel Booking',
    href: '/china-basics/what-apps-to-use/travel',
    description: 'Book trains, flights, and rides with Trip.com and DiDi to keep your whole trip in one workflow.',
  },
  {
    icon: '💬',
    title: 'Communication',
    href: '/china-basics/what-apps-to-use/communication',
    description: 'Use WeChat for messaging, payments, and service mini-programs used by hotels and attractions.',
  },
  {
    icon: '🔐',
    title: 'VPN Setup',
    href: '/china-basics/what-apps-to-use/vpn',
    description: 'Prepare legal, reliable VPN options before arrival so your core tools keep working smoothly.',
  },
]

export default function WhatAppsToUsePage() {
  return (
    <section className="container-px mx-auto max-w-6xl py-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-china-red">China Basics</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">What Apps to Use in China</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
        Install and configure these apps before takeoff. The first 24 hours in China are much easier when payments,
        navigation, and transport tools are ready.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {appCards.map((card) => (
          <article key={card.title} className="card-base h-full">
            <p className="text-3xl" aria-hidden="true">
              {card.icon}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{card.description}</p>
            <Link href={card.href} className="mt-6 inline-flex text-sm font-bold text-china-red">
              Open guide →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-black text-slate-900">Setup Order That Works Best</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
          Do payments first, then maps, then travel booking. Keep screenshots of account confirmations in case SMS
          verification gets delayed while roaming.
        </p>
      </div>
    </section>
  )
}
