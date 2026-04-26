import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'
import FooterCTA from '@/components/FooterCTA'
import {
  Smartphone,
  Shield,
  Wifi,
  ArrowRight,
  CreditCard,
  Map,
  MessageCircle,
  Plane,
  Hotel,
  Bike,
  UtensilsCrossed,
  Ticket,
  Car,
  Navigation,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Essential Apps for China | Trail of China',
  description:
    'Set up essential China travel apps before departure: Alipay, WeChat Pay, maps, travel booking, communication, and VPN access. Get started right.',
}

type Category = 'All' | 'Payment' | 'Navigation' | 'Communication' | 'Booking'

const categoryColors: Record<Exclude<Category, 'All'>, { bg: string; border: string; badge: string; accent: string; iconBg: string }> = {
  Payment: {
    bg: 'bg-emerald-50/60',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    accent: 'text-emerald-700',
    iconBg: 'bg-emerald-100',
  },
  Navigation: {
    bg: 'bg-sky-50/60',
    border: 'border-sky-200',
    badge: 'bg-sky-100 text-sky-700',
    accent: 'text-sky-700',
    iconBg: 'bg-sky-100',
  },
  Communication: {
    bg: 'bg-violet-50/60',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    accent: 'text-violet-700',
    iconBg: 'bg-violet-100',
  },
  Booking: {
    bg: 'bg-amber-50/60',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    accent: 'text-amber-700',
    iconBg: 'bg-amber-100',
  },
}

type AppCard = {
  id: string
  title: string
  icon: React.ReactNode
  emoji?: string
  preview: string
  href: string
  category: Exclude<Category, 'All'>
  tags: string[]
  isHero: boolean
  cta: string
}

const apps: AppCard[] = [
  {
    id: 'alipay',
    title: 'Alipay Guide',
    icon: <CreditCard size={24} />,
    emoji: '📱',
    preview: 'Step-by-step: download, international card linking, verification, and first QR payment with confidence.',
    href: '/china-basics/what-apps-to-use/alipay',
    category: 'Payment',
    tags: ['Setup', 'Card Linking', 'QR Payments'],
    isHero: true,
    cta: 'Set Up →',
  },
  {
    id: 'wechat-pay',
    title: 'WeChat Pay Guide',
    icon: <MessageCircle size={24} />,
    emoji: '💬',
    preview: 'Wallet activation, binding foreign cards, and using Mini Programs for peer-to-peer payments.',
    href: '/china-basics/what-apps-to-use/wechat-pay',
    category: 'Payment',
    tags: ['Wallet Setup', 'Mini Programs'],
    isHero: true,
    cta: 'Set Up →',
  },
  {
    id: 'vpn',
    title: 'VPN Setup',
    icon: <Shield size={24} />,
    emoji: '🔐',
    preview: 'Install and test before entering China. Provider sites may be blocked after arrival, so prep early.',
    href: '/china-basics/what-apps-to-use/vpn',
    category: 'Communication',
    tags: ['Access', 'Pre-Trip Test'],
    isHero: true,
    cta: 'Set Up →',
  },
  {
    id: 'maps',
    title: 'Maps',
    icon: <Map size={24} />,
    emoji: '🗺️',
    preview: 'Transit routing, walking directions, and address search in Chinese. Save key destinations offline.',
    href: '/china-basics/what-apps-to-use/maps',
    category: 'Navigation',
    tags: ['Navigation', 'Transit', 'Offline'],
    isHero: true,
    cta: 'Learn More →',
  },
  {
    id: 'payment',
    title: 'Payment Apps',
    icon: <CreditCard size={20} />,
    emoji: '💳',
    preview: 'Set up Alipay and WeChat Pay before departure so your first meals and metro rides are seamless.',
    href: '/china-basics/what-apps-to-use/payment',
    category: 'Payment',
    tags: ['Alipay', 'WeChat Pay'],
    isHero: false,
    cta: 'Learn More →',
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: <MessageCircle size={20} />,
    emoji: '💬',
    preview: 'WeChat for messaging and service chats. Configure before you fly so local coordination is easy.',
    href: '/china-basics/what-apps-to-use/communication',
    category: 'Communication',
    tags: ['WeChat', 'Translation', 'Contacts'],
    isHero: false,
    cta: 'Learn More →',
  },
  {
    id: 'didi',
    title: 'Didi Guide',
    icon: <Car size={20} />,
    emoji: '🚕',
    preview: 'China\'s Uber for ride-hailing, bike sharing, and bus routes. Setup guide and safety tips.',
    href: '/china-basics/what-apps-to-use/didi',
    category: 'Navigation',
    tags: ['Ride-Hailing', 'Bike Sharing'],
    isHero: false,
    cta: 'Learn More →',
  },
  {
    id: 'meituan',
    title: 'Meituan Guide',
    icon: <UtensilsCrossed size={20} />,
    emoji: '🍔',
    preview: 'Food delivery, hotels, movie tickets, and group deals. China\'s everything super-app.',
    href: '/china-basics/what-apps-to-use/meituan',
    category: 'Booking',
    tags: ['Food Delivery', 'Hotels', 'Deals'],
    isHero: false,
    cta: 'Learn More →',
  },
  {
    id: 'trip-com',
    title: 'Trip.com Guide',
    icon: <Ticket size={20} />,
    emoji: '🎫',
    preview: 'Book trains, hotels, flights, attractions, eSIMs, and airport transfers — all in English.',
    href: '/china-basics/what-apps-to-use/trip-com',
    category: 'Booking',
    tags: ['Trains', 'Hotels', 'Flights'],
    isHero: false,
    cta: 'Learn More →',
  },
  {
    id: 'travel',
    title: 'Travel Booking',
    icon: <Plane size={20} />,
    emoji: '🧳',
    preview: 'Booking apps that support passport details, foreign cards, and bilingual interfaces.',
    href: '/china-basics/what-apps-to-use/travel',
    category: 'Booking',
    tags: ['Trains', 'Flights', 'Hotels'],
    isHero: false,
    cta: 'Learn More →',
  },
]

const filters: Category[] = ['All', 'Payment', 'Navigation', 'Communication', 'Booking']

function AppCardComponent({ app }: { app: AppCard }) {
  const colors = categoryColors[app.category]
  const isHero = app.isHero

  return (
    <Link
      href={app.href}
      className={`group flex flex-col rounded-2xl border bg-white transition-all hover:shadow-md ${
        isHero
          ? `col-span-1 md:col-span-2 border-2 ${colors.border} ${colors.bg}`
          : `border-[#ebe4d8] hover:border-[#af5d32]/30`
      }`}
    >
      {/* Card Header */}
      <div
        className={`flex items-center gap-3 px-5 py-4 md:px-6 md:py-5 ${
          isHero ? `${colors.iconBg} rounded-t-2xl` : ''
        }`}
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            isHero ? 'bg-white shadow-sm' : colors.iconBg
          }`}
        >
          <span className={colors.accent}>{app.icon}</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-[#1a3a4a] md:text-xl truncate">
              {app.emoji && <span className="mr-1">{app.emoji}</span>}
              {app.title}
            </h3>
          </div>
          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${colors.badge}`}>
            {app.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col px-5 pb-5 md:px-6">
        <p className="text-sm leading-relaxed text-[#64748b]">{app.preview}</p>

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

        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#af5d32] transition-colors group-hover:gap-2">
            {app.cta}
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function WhatAppsToUseV3Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-5xl px-4 py-12">
        <div className="relative">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'China Basics', href: '/china-basics' },
              { label: 'What Apps to Use' },
            ]}
          />
          <ChineseWatermark character="应用" />
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-5xl">
            What Apps to Use in China
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#64748b]">
            Install and configure these apps before takeoff. The first 24 hours in China are much
            easier when payments, navigation, and transport tools are ready.
          </p>
        </div>

        {/* Featured Apps Row */}
        <div className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#64748b]">
            Featured Apps
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {apps
              .filter((a) => a.isHero)
              .map((app) => (
                <AppCardComponent key={app.id} app={app} />
              ))}
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-0 z-30 mt-10 -mx-4 border-b border-[#ebe4d8] bg-white/95 px-4 py-3 backdrop-blur-sm md:mx-0 md:rounded-xl md:border md:px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="mr-1 flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
              Filter:
            </span>
            {filters.map((filter) => {
              const isActive = filter === 'All'
              return (
                <Link
                  key={filter}
                  href={`#${filter.toLowerCase()}`}
                  className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1a3a4a] text-white'
                      : 'border border-[#ebe4d8] bg-white text-[#64748b] hover:border-[#af5d32] hover:text-[#af5d32]'
                  }`}
                >
                  {filter}
                </Link>
              )
            })}
          </div>
        </div>

        {/* App Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps
            .filter((a) => !a.isHero)
            .map((app) => (
              <AppCardComponent key={app.id} app={app} />
            ))}
        </div>

        {/* Category sections for anchor links */}
        <div className="mt-14 space-y-12">
          {(['Payment', 'Navigation', 'Communication', 'Booking'] as const).map((cat) => {
            const catApps = apps.filter((a) => a.category === cat)
            const catColors = categoryColors[cat]
            return (
              <section key={cat} id={cat.toLowerCase()}>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-8 w-1.5 rounded-full ${catColors.iconBg.replace('bg-', 'bg-').replace('100', '400')}`}
                  />
                  <h2 className="text-xl font-bold text-[#1a3a4a]">{cat}</h2>
                  <span className="ml-auto text-sm text-[#64748b]">
                    {catApps.length} app{catApps.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catApps.map((app) => (
                    <AppCardComponent key={app.id} app={app} />
                  ))}
                </div>
              </section>
            )
          })}
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
