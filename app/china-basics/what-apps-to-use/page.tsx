import type { Metadata } from 'next'
import { RelatedArticleCard } from '@/components/RelatedArticleCard'

export const metadata: Metadata = {
  title: 'What Apps to Use',
  description:
    'Set up the essential China travel apps before departure: payments, maps, bookings, communication, and VPN access.',
}

const cards = [
  {
    title: 'Payment Apps',
    description: 'Link your bank card to Alipay and WeChat Pay for smooth daily spending without cash stress.',
    icon: '💳',
    href: '/china-basics/what-apps-to-use/payment',
    category: 'China Basics',
  },
  {
    title: 'Maps',
    description: 'Use the right mapping apps for metro exits, Chinese place names, and city navigation.',
    icon: '🗺️',
    href: '/china-basics/what-apps-to-use/maps',
    category: 'China Basics',
  },
  {
    title: 'Travel Booking',
    description: 'Book trains, flights, and rides with tools that work well for international travelers.',
    icon: '🧳',
    href: '/china-basics/what-apps-to-use/travel',
    category: 'China Basics',
  },
  {
    title: 'Communication',
    description: 'Set up WeChat for messaging, mini-programs, and on-the-ground service coordination.',
    icon: '💬',
    href: '/china-basics/what-apps-to-use/communication',
    category: 'China Basics',
  },
  {
    title: 'VPN Setup',
    description: 'Prepare reliable VPN access before arrival so essential tools continue to work.',
    icon: '🔐',
    href: '/china-basics/what-apps-to-use/vpn',
    category: 'China Basics',
  },
]

export default function WhatAppsToUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">What Apps to Use in China</h1>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Install and configure these apps before takeoff. The first 24 hours in China are much easier when
            payments, navigation, and transport tools are ready.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-serif font-semibold text-[#1f2933]">Related Pages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <RelatedArticleCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-black text-slate-900">Setup Order That Works Best</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
            Do payments first, then maps, then travel booking. Keep screenshots of account confirmations in case SMS
            verification gets delayed while roaming.
          </p>
        </div>
      </main>
    </div>
  )
}
