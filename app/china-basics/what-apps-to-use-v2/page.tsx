import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'
import FooterCTA from '@/components/FooterCTA'
import { Smartphone, Shield, Wifi, CheckCircle2, Circle, Plane, MapPin, CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Essential Apps for China | Trail of China',
  description:
    'Set up essential China travel apps before departure: Alipay, WeChat Pay, maps, travel booking, communication, and VPN access. Get started right.',
}

// Design tokens
const colors = {
  terracotta: '#af5d32',
  cream: '#f5f1ea',
  darkTeal: '#1a3a4a',
  muted: '#64748b',
  border: '#ebe4d8',
}

type AppItem = {
  id: string
  title: string
  icon: string
  preview: string
  href: string
  isEssential: boolean
  stepNumber: number
  tags: string[]
}

type Phase = {
  id: string
  label: string
  subtitle: string
  phaseIcon: React.ReactNode
  apps: AppItem[]
}

const phases: Phase[] = [
  {
    id: 'before-you-fly',
    label: 'Before You Fly',
    subtitle: 'Set these up at home — they need time and a stable connection',
    phaseIcon: <Plane size={18} />,
    apps: [
      {
        id: 'vpn',
        title: 'VPN Setup',
        icon: '🔐',
        preview: 'Install and test your VPN before entering China. Provider sites may be blocked after arrival, so prep early.',
        href: '/china-basics/what-apps-to-use/vpn',
        isEssential: true,
        stepNumber: 1,
        tags: ['🛡️ Access', '🧪 Pre-Trip Test'],
      },
      {
        id: 'payment',
        title: 'Payment Apps',
        icon: '💳',
        preview: 'Set up Alipay and WeChat Pay before departure so your first meals and metro rides are seamless.',
        href: '/china-basics/what-apps-to-use/payment',
        isEssential: true,
        stepNumber: 2,
        tags: ['💰 Alipay', '💬 WeChat Pay'],
      },
      {
        id: 'alipay',
        title: 'Alipay Guide',
        icon: '📱',
        preview: 'Step-by-step: download, international card linking, verification, and first QR payment with confidence.',
        href: '/china-basics/what-apps-to-use/alipay',
        isEssential: true,
        stepNumber: 3,
        tags: ['🔗 Card Linking', '📲 QR Payments'],
      },
      {
        id: 'wechat-pay',
        title: 'WeChat Pay Guide',
        icon: '💬',
        preview: 'Wallet activation, binding foreign cards, and using Mini Programs for peer-to-peer payments.',
        href: '/china-basics/what-apps-to-use/wechat-pay',
        isEssential: true,
        stepNumber: 4,
        tags: ['💳 Wallet Setup', '🌐 Mini Programs'],
      },
    ],
  },
  {
    id: 'when-you-land',
    label: 'When You Land',
    subtitle: 'These make your first hours in China effortless',
    phaseIcon: <MapPin size={18} />,
    apps: [
      {
        id: 'maps',
        title: 'Maps',
        icon: '🗺️',
        preview: 'Transit routing, walking directions, and address search in Chinese. Save key destinations offline.',
        href: '/china-basics/what-apps-to-use/maps',
        isEssential: true,
        stepNumber: 5,
        tags: ['📍 Navigation', '🚇 Transit', '🔤 Chinese Names'],
      },
      {
        id: 'didi',
        title: 'Didi Guide',
        icon: '🚕',
        preview: 'China\'s Uber for ride-hailing, bike sharing, and bus routes. Setup guide and safety tips included.',
        href: '/china-basics/what-apps-to-use/didi',
        isEssential: false,
        stepNumber: 6,
        tags: ['🚗 Ride-Hailing', '🚲 Bike Sharing'],
      },
      {
        id: 'meituan',
        title: 'Meituan Guide',
        icon: '🍔',
        preview: 'Food delivery, hotels, movie tickets, and group deals. China\'s everything super-app.',
        href: '/china-basics/what-apps-to-use/meituan',
        isEssential: false,
        stepNumber: 7,
        tags: ['🍕 Food Delivery', '🏨 Hotels', '🎯 Group Deals'],
      },
      {
        id: 'communication',
        title: 'Communication',
        icon: '💬',
        preview: 'WeChat for messaging and service chats. Configure before you fly so local coordination is easy.',
        href: '/china-basics/what-apps-to-use/communication',
        isEssential: true,
        stepNumber: 8,
        tags: ['💬 WeChat', '🌐 Translation', '📇 Contacts'],
      },
    ],
  },
  {
    id: 'for-booking',
    label: 'For Booking',
    subtitle: 'Plan and book your trips in China with English-friendly tools',
    phaseIcon: <CalendarCheck size={18} />,
    apps: [
      {
        id: 'trip-com',
        title: 'Trip.com Guide',
        icon: '🎫',
        preview: 'Book trains, hotels, flights, attractions, eSIMs, and airport transfers — all in English.',
        href: '/china-basics/what-apps-to-use/trip-com',
        isEssential: false,
        stepNumber: 9,
        tags: ['🚄 Trains', '🏨 Hotels', '✈️ Flights', '📱 eSIM'],
      },
      {
        id: 'travel',
        title: 'Travel Booking',
        icon: '🧳',
        preview: 'Booking apps that support passport details, foreign cards, and bilingual interfaces for trains and flights.',
        href: '/china-basics/what-apps-to-use/travel',
        isEssential: false,
        stepNumber: 10,
        tags: ['🚅 Trains', '✈️ Flights', '🏨 Hotels'],
      },
    ],
  },
]

const essentialCount = phases.reduce((acc, p) => acc + p.apps.filter(a => a.isEssential).length, 0)
const totalCount = phases.reduce((acc, p) => acc + p.apps.length, 0)

export default function WhatAppsToUseV2Page() {
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
            <CheckCircle2 size={14} />
            Essentials Checklist
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-5xl">
            What Apps to Use in China
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#64748b]">
            Follow the setup order below. The first 24 hours in China are much easier when
            payments, navigation, and transport tools are ready before you land.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-8 rounded-xl border border-[#ebe4d8] bg-[#f5f1ea]/50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#1a3a4a]">
                Essential Apps Progress
              </p>
              <p className="text-xs text-[#64748b]">
                {essentialCount} must-have apps to set up before and during your trip
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#af5d32]">
                0<span className="text-sm font-medium text-[#64748b]"> / {essentialCount}</span>
              </p>
              <p className="text-xs text-[#64748b]">completed</p>
            </div>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-[#af5d32] transition-all"
              style={{ width: '0%' }}
            />
          </div>
        </div>

        {/* Phase sections */}
        <div className="mt-10 space-y-12">
          {phases.map((phase) => (
            <section key={phase.id}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a3a4a] text-white">
                  {phase.phaseIcon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1a3a4a]">{phase.label}</h2>
                  <p className="text-sm text-[#64748b]">{phase.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {phase.apps.map((app) => (
                  <Link
                    key={app.id}
                    href={app.href}
                    className="group flex items-start gap-4 rounded-xl border border-[#ebe4d8] bg-white p-4 transition-all hover:border-[#af5d32]/30 hover:shadow-sm md:p-5"
                  >
                    {/* Step number badge */}
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold md:h-11 md:w-11 md:text-base ${
                        app.isEssential
                          ? 'bg-[#af5d32] text-white'
                          : 'bg-[#f5f1ea] text-[#64748b]'
                      }`}
                    >
                      {app.stepNumber}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-[#1a3a4a] md:text-xl">
                          {app.icon} {app.title}
                        </h3>
                        {app.isEssential && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#af5d32]/10 px-2.5 py-0.5 text-xs font-semibold text-[#af5d32]">
                            <CheckCircle2 size={12} />
                            Must-Have
                          </span>
                        )}
                        {!app.isEssential && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#f5f1ea] px-2.5 py-0.5 text-xs font-medium text-[#64748b]">
                            <Circle size={12} />
                            Nice-to-Have
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#64748b]">
                        {app.preview}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {app.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-[#f5f1ea] px-2 py-0.5 text-xs text-[#1a3a4a]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 self-center text-[#af5d32] opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-sm font-semibold">Read →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Topic chips */}
        <div className="mt-12">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#64748b]">
            Browse by Topic
          </h3>
          <div className="flex flex-wrap gap-2">
            {['💳 Payments', '🗺️ Navigation', '💬 Communication', '🛡️ VPN', '🍔 Food', '🚕 Transport', '🏨 Hotels'].map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#ebe4d8] bg-white px-4 py-2 text-sm text-[#1a3a4a] transition-colors hover:border-[#af5d32] hover:bg-[#fdf8f3]"
              >
                {topic}
              </span>
            ))}
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
