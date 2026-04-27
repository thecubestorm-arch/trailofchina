import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'
import FooterCTA from '@/components/FooterCTA'
import { Smartphone, Shield, Wifi, CheckCircle2, CircleDot, Zap, Gauge, Plane, Luggage, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Essential Apps for China | Trail of China',
  description:
    'Set up essential China travel apps before departure: Alipay, WeChat Pay, maps, travel booking, communication, and VPN access. Get started right.',
}

type Difficulty = 'Easy' | 'Medium'

type TimelineApp = {
  id: string
  title: string
  emoji: string
  preview: string
  href: string
  difficulty: Difficulty
  tags: string[]
  setupTime: string
}

type Phase = {
  id: string
  label: string
  subtitle: string
  phaseIcon: React.ReactNode
  apps: TimelineApp[]
}

const phases: Phase[] = [
  {
    id: 'before-departure',
    label: 'Before Departure',
    subtitle: 'Set up at home — needs time and stable connection',
    phaseIcon: <Plane size={20} />,
    apps: [
      {
        id: 'vpn',
        title: 'VPN Setup',
        emoji: '🔐',
        preview: 'Install and test your VPN before entering China. Provider sites may be blocked after arrival.',
        href: '/china-basics/what-apps-to-use/vpn',
        difficulty: 'Easy',
        tags: ['🛡️ Access', '🧪 Pre-Trip Test'],
        setupTime: '10 min',
      },
      {
        id: 'payment',
        title: 'Payment Apps',
        emoji: '💳',
        preview: 'Set up Alipay and WeChat Pay before departure so your first meals and metro rides are seamless.',
        href: '/china-basics/what-apps-to-use/payment',
        difficulty: 'Medium',
        tags: ['💰 Alipay', '💬 WeChat Pay', '🏧 Card Linking'],
        setupTime: '20 min',
      },
      {
        id: 'alipay',
        title: 'Alipay Guide',
        emoji: '📱',
        preview: 'Step-by-step: download, international card linking, verification, and first QR payment.',
        href: '/china-basics/what-apps-to-use/alipay',
        difficulty: 'Medium',
        tags: ['🔗 Card Linking', '📲 QR Payments', '🚇 Transit'],
        setupTime: '15 min',
      },
      {
        id: 'wechat-pay',
        title: 'WeChat Pay Guide',
        emoji: '💬',
        preview: 'Wallet activation, binding foreign cards, and using Mini Programs for peer-to-peer payments.',
        href: '/china-basics/what-apps-to-use/wechat-pay',
        difficulty: 'Medium',
        tags: ['💳 Wallet Setup', '🌐 Mini Programs', '📱 P2P'],
        setupTime: '15 min',
      },
    ],
  },
  {
    id: 'at-the-airport',
    label: 'At the Airport',
    subtitle: 'Get connected and oriented before leaving the terminal',
    phaseIcon: <Luggage size={20} />,
    apps: [
      {
        id: 'communication',
        title: 'Communication',
        emoji: '💬',
        preview: 'WeChat for messaging and service chats. Configure before you fly so local coordination is easy.',
        href: '/china-basics/what-apps-to-use/communication',
        difficulty: 'Easy',
        tags: ['💬 WeChat', '🌐 Translation', '📇 Contacts'],
        setupTime: '5 min',
      },
      {
        id: 'maps',
        title: 'Maps',
        emoji: '🗺️',
        preview: 'Transit routing, walking directions, and address search in Chinese. Save key destinations offline.',
        href: '/china-basics/what-apps-to-use/maps',
        difficulty: 'Easy',
        tags: ['📍 Navigation', '🚇 Transit', '🔤 Chinese Names'],
        setupTime: '5 min',
      },
    ],
  },
  {
    id: 'in-china',
    label: 'In China',
    subtitle: 'Apps for daily life once you\'re settled',
    phaseIcon: <MapPin size={20} />,
    apps: [
      {
        id: 'didi',
        title: 'Didi Guide',
        emoji: '🚕',
        preview: 'China\'s Uber for ride-hailing, bike sharing, and bus routes. Setup guide and safety tips.',
        href: '/china-basics/what-apps-to-use/didi',
        difficulty: 'Easy',
        tags: ['🚗 Ride-Hailing', '🚲 Bike Sharing', '🛡️ Safety'],
        setupTime: '10 min',
      },
      {
        id: 'meituan',
        title: 'Meituan Guide',
        emoji: '🍔',
        preview: 'Food delivery, hotels, movie tickets, and group deals. China\'s everything super-app.',
        href: '/china-basics/what-apps-to-use/meituan',
        difficulty: 'Easy',
        tags: ['🍕 Food Delivery', '🏨 Hotels', '🎯 Group Deals'],
        setupTime: '10 min',
      },
      {
        id: 'trip-com',
        title: 'Trip.com Guide',
        emoji: '🎫',
        preview: 'Book trains, hotels, flights, attractions, eSIMs, and airport transfers — all in English.',
        href: '/china-basics/what-apps-to-use/trip-com',
        difficulty: 'Easy',
        tags: ['🚄 Trains', '🏨 Hotels', '✈️ Flights', '📱 eSIM'],
        setupTime: '5 min',
      },
      {
        id: 'travel',
        title: 'Travel Booking',
        emoji: '🧳',
        preview: 'Booking apps that support passport details, foreign cards, and bilingual interfaces.',
        href: '/china-basics/what-apps-to-use/travel',
        difficulty: 'Medium',
        tags: ['🚅 Trains', '✈️ Flights', '🏨 Hotels', '🧾 Confirmations'],
        setupTime: '10 min',
      },
    ],
  },
]

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  if (difficulty === 'Easy') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
        <Zap size={12} />
        Easy
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
      <Gauge size={12} />
      Medium
    </span>
  )
}

function TimelineDot({ isLast }: { isLast: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#af5d32] bg-white md:h-10 md:w-10">
        <div className="h-3 w-3 rounded-full bg-[#af5d32] md:h-3.5 md:w-3.5" />
      </div>
      {!isLast && (
        <div className="mt-1 h-full w-0.5 flex-1 bg-[#ebe4d8] md:hidden" />
      )}
    </div>
  )
}

export default function WhatAppsToUseV4Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="relative">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'China Basics', href: '/china-basics' },
              { label: 'What Apps to Use' },
            ]}
          />
          <ChineseWatermark character="应用" />
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#f5f1ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#af5d32]">
            <CircleDot size={14} />
            Timeline Journey
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-5xl">
            What Apps to Use in China
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#64748b]">
            Follow the timeline below. Install and configure apps in order — before departure, at the
            airport, and once you&apos;re settled in China.
          </p>
        </div>

        {/* Desktop: Horizontal Phase Overview */}
        <div className="mt-10 hidden md:block">
          <div className="flex items-start gap-0">
            {phases.map((phase, idx) => (
              <div key={phase.id} className="relative flex flex-1 items-start gap-0">
                <div className="flex flex-col items-center px-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      idx === 0 ? 'bg-[#af5d32] text-white' : 'border-2 border-[#ebe4d8] bg-white text-[#64748b]'
                    }`}
                  >
                    {phase.phaseIcon}
                  </div>
                  <p className="mt-3 text-center text-sm font-bold text-[#1a3a4a]">{phase.label}</p>
                  <p className="mt-1 text-center text-xs text-[#64748b]">{phase.apps.length} apps</p>
                </div>
                {idx < phases.length - 1 && (
                  <div className="mt-6 flex-1 border-t-2 border-dashed border-[#ebe4d8]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Sections */}
        <div className="mt-10 md:mt-14 space-y-10 md:space-y-16">
          {phases.map((phase, phaseIdx) => (
            <section key={phase.id}>
              {/* Phase Header */}
              <div className="mb-6 flex items-center gap-3 md:mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a3a4a] text-white md:h-12 md:w-12">
                  {phase.phaseIcon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1a3a4a] md:text-2xl">{phase.label}</h2>
                  <p className="text-sm text-[#64748b]">{phase.subtitle}</p>
                </div>
                <div className="ml-auto hidden rounded-full bg-[#f5f1ea] px-3 py-1 text-xs font-semibold text-[#64748b] md:block">
                  Phase {phaseIdx + 1} of {phases.length}
                </div>
              </div>

              {/* Mobile: Vertical timeline with connecting line */}
              <div className="md:hidden">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#ebe4d8]" />
                  <div className="space-y-4">
                    {phase.apps.map((app, appIdx) => (
                      <div key={app.id} className="relative flex gap-4">
                        <TimelineDot isLast={appIdx === phase.apps.length - 1} />
                        <div className="flex-1 pb-6">
                          <Link
                            href={app.href}
                            className="group block rounded-xl border border-[#ebe4d8] bg-white p-4 transition-all hover:border-[#af5d32]/30 hover:shadow-sm"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-lg font-bold text-[#1a3a4a]">
                                {app.emoji} {app.title}
                              </h3>
                              <div className="flex flex-col items-end gap-1">
                                <DifficultyBadge difficulty={app.difficulty} />
                                <span className="text-xs text-[#64748b]">{app.setupTime}</span>
                              </div>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{app.preview}</p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {app.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center rounded-md bg-[#f5f1ea] px-2 py-0.5 text-xs text-[#1a3a4a]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3">
                              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] transition-colors group-hover:gap-1.5">
                                Set Up →
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop: Horizontal cards */}
              <div className="hidden md:block">
                <div className="relative flex gap-6">
                  {/* Connecting line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#ebe4d8]" />
                  <div className="space-y-4 flex-1">
                    {phase.apps.map((app) => (
                      <Link
                        key={app.id}
                        href={app.href}
                        className="group flex items-start gap-5 rounded-xl border border-[#ebe4d8] bg-white p-5 transition-all hover:border-[#af5d32]/30 hover:shadow-sm"
                      >
                        {/* Timeline dot */}
                        <div className="relative z-10 mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#af5d32] bg-white">
                          <span className="text-xl">{app.emoji}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-bold text-[#1a3a4a]">{app.title}</h3>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <DifficultyBadge difficulty={app.difficulty} />
                              <span className="text-xs text-[#64748b]">{app.setupTime}</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{app.preview}</p>
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            {app.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-[#f5f1ea] px-2 py-0.5 text-xs text-[#1a3a4a]"
                              >
                                {tag}
                              </span>
                            ))}
                            <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] opacity-0 transition-opacity group-hover:opacity-100">
                              Set Up →
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Total Setup Time Summary */}
        <div className="mt-14 rounded-xl border border-[#ebe4d8] bg-[#f5f1ea]/50 p-6 md:p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="text-lg font-bold text-[#1a3a4a]">Total Setup Time</h3>
              <p className="mt-1 text-sm text-[#64748b]">
                Plan about 1 hour to get all essential apps ready before departure
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#af5d32]">6</p>
                <p className="text-xs text-[#64748b]">Easy steps</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#af5d32]">4</p>
                <p className="text-xs text-[#64748b]">Medium steps</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#af5d32]">~60m</p>
                <p className="text-xs text-[#64748b]">Total time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-14">
          <RelatedArticles
            articles={[
              {
                title: 'Payment Apps',
                description: 'Set up Alipay and WeChat Pay before you arrive.',
                href: '/china-basics/what-apps-to-use/payment',
              },
              {
                title: 'VPN Guide',
                description: 'Which VPNs work in China and how to set them up.',
                href: '/china-basics/what-apps-to-use/vpn',
              },
              {
                title: 'eSIM Setup',
                description: 'Get connected instantly with a travel eSIM.',
                href: '/china-basics/how-to-get-internet/esim',
              },
              {
                title: 'Censorship & Internet',
                description: 'What\'s blocked and how to stay connected.',
                href: '/china-basics/how-china-differs/censorship',
              },
            ]}
          />
        </div>

        {/* Footer CTA */}
        <div className="mt-14">
          <FooterCTA
            title="Need Help Setting Up?"
            subtitle="Our guides walk you through every app — step by step."
            quickInfo={[
              {
                icon: Smartphone,
                title: 'Payment Apps',
                description: 'Alipay & WeChat Pay — ',
                link: {
                  href: '/china-basics/what-apps-to-use/payment',
                  label: 'set up before you fly',
                },
              },
              {
                icon: Shield,
                title: 'VPN Guide',
                description: 'Install and test — ',
                link: {
                  href: '/china-basics/what-apps-to-use/vpn',
                  label: 'before you land',
                },
              },
              {
                icon: Wifi,
                title: 'Get Online',
                description: 'eSIM & internet — ',
                link: {
                  href: '/china-basics/how-to-get-internet',
                  label: 'stay connected',
                },
              },
            ]}
            trustText="Free guides · Updated regularly · Written by China travelers"
          />
        </div>
      </main>
    </div>
  )
}
