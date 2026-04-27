import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'
import FooterCTA from '@/components/FooterCTA'
import { Smartphone, Shield, Wifi, Plane, MapPin, CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Essential Apps for China | Trail of China',
  description:
    'Set up essential China travel apps before departure: Alipay, WeChat Pay, maps, VPN, translation, and more. Prioritized setup guide for first-time China travelers.',
}

type AppItem = {
  id: string
  title: string
  icon: string
  logoLetter: string
  logoBg: string
  logoColor: string
  whyThisApp: string
  setupTime: string
  difficulty: 'easy' | 'medium'
  href: string
  isEssential: boolean
  tags: string[]
}

type Phase = {
  id: string
  label: string
  subtitle: string
  urgency: string
  icon: React.ReactNode
  image: { src: string; alt: string }
  apps: AppItem[]
}

const phases: Phase[] = [
  {
    id: 'before-you-fly',
    label: 'Before You Fly',
    subtitle: 'Set these up at home — they need time and a stable connection',
    urgency: '⚠️ Critical — install VPN before you land in China',
    icon: <Plane size={18} />,
    image: {
      src: 'https://picsum.photos/seed/airport-setup-phone/800/400',
      alt: 'Setting up travel apps at the airport before departure',
    },
    apps: [
      {
        id: 'vpn',
        title: 'VPN Setup',
        icon: '🔐',
        logoLetter: 'VPN',
        logoBg: '#1a3a4a',
        logoColor: '#ffffff',
        whyThisApp: 'Google, WhatsApp, Instagram — all blocked in China. Install your VPN before arrival because VPN websites are blocked at the border.',
        setupTime: '5 min',
        difficulty: 'easy',
        href: '/china-basics/what-apps-to-use/vpn',
        isEssential: true,
        tags: ['🛡️ Access', '🧪 Pre-Trip Test'],
      },
      {
        id: 'alipay',
        title: 'Alipay',
        icon: '📱',
        logoLetter: '支',
        logoBg: '#1677ff',
        logoColor: '#ffffff',
        whyThisApp: '95% of China is cashless. Alipay works at street vendors, subway gates, and even temple donation boxes. Link your foreign card before departure.',
        setupTime: '10 min + ID verification',
        difficulty: 'medium',
        href: '/china-basics/what-apps-to-use/alipay',
        isEssential: true,
        tags: ['💰 QR Payments', '🚇 Transit', '🏪 Street Vendors'],
      },
      {
        id: 'wechat',
        title: 'WeChat (Pay + Messaging)',
        icon: '💬',
        logoLetter: '微',
        logoBg: '#07c160',
        logoColor: '#ffffff',
        whyThisApp: 'WeChat is both your messaging app and your backup payment method. Chinese businesses prefer WeChat — you need it for group chats, mini-programs, and hotel check-ins.',
        setupTime: '10 min + ID verification',
        difficulty: 'medium',
        href: '/china-basics/what-apps-to-use/wechat-pay',
        isEssential: true,
        tags: ['💳 Payments', '💬 Messaging', '🏨 Mini Programs'],
      },
      {
        id: 'esim',
        title: 'eSIM / Internet',
        icon: '📶',
        logoLetter: 'eS',
        logoBg: '#af5d32',
        logoColor: '#ffffff',
        whyThisApp: 'Buy and install your eSIM before departure so you have data the moment you land. Roaming is expensive; local SIM takes time.',
        setupTime: '5 min',
        difficulty: 'easy',
        href: '/china-basics/how-to-get-internet/esim',
        isEssential: true,
        tags: ['📱 eSIM', '🌐 Data', '✈️ Pre-Install'],
      },
    ],
  },
  {
    id: 'when-you-land',
    label: 'When You Land',
    subtitle: 'Download these on arrival — you need them immediately',
    urgency: '📍 Essential for your first 24 hours in China',
    icon: <MapPin size={18} />,
    image: {
      src: 'https://picsum.photos/seed/china-maps-phone/800/400',
      alt: 'Using maps on phone while exploring a Chinese city',
    },
    apps: [
      {
        id: 'maps',
        title: 'Maps & Navigation',
        icon: '🗺️',
        logoLetter: '📍',
        logoBg: '#34a853',
        logoColor: '#ffffff',
        whyThisApp: 'Google Maps doesn\'t work reliably in China. Apple Maps works without VPN. Download offline maps for your first city before you go.',
        setupTime: '5 min',
        difficulty: 'easy',
        href: '/china-basics/what-apps-to-use/maps',
        isEssential: true,
        tags: ['📍 Apple Maps', '🚇 Transit Routes', '🔤 Chinese Addresses'],
      },
      {
        id: 'translation',
        title: 'Translation App',
        icon: '🌐',
        logoLetter: 'G',
        logoBg: '#4285f4',
        logoColor: '#ffffff',
        whyThisApp: 'Download Google Translate with offline Chinese language pack. Essential for menus, signs, and asking directions. Works offline — no data needed.',
        setupTime: '5 min',
        difficulty: 'easy',
        href: '/china-basics/what-apps-to-use/maps',
        isEssential: true,
        tags: ['📷 Camera Translation', '🔊 Voice', '📲 Offline'],
      },
      {
        id: 'didi',
        title: 'Didi (Ride-Hailing)',
        icon: '🚕',
        logoLetter: '滴',
        logoBg: '#ff6c00',
        logoColor: '#ffffff',
        whyThisApp: 'China\'s Uber. Book rides, share bikes, and check bus routes. English interface available. Cheaper than taxis and avoids language barriers.',
        setupTime: '5 min',
        difficulty: 'easy',
        href: '/china-basics/what-apps-to-use/didi',
        isEssential: false,
        tags: ['🚗 Rides', '🚲 Bikes', '📍 English UI'],
      },
    ],
  },
  {
    id: 'for-booking',
    label: 'For Booking & Exploring',
    subtitle: 'Set up once settled — useful for longer stays',
    urgency: '🎫 Nice to have — makes booking easier',
    icon: <CalendarCheck size={18} />,
    image: {
      src: 'https://picsum.photos/seed/china-train-booking/800/400',
      alt: 'Booking high-speed train tickets in China',
    },
    apps: [
      {
        id: 'trip-com',
        title: 'Trip.com',
        icon: '🎫',
        logoLetter: 'T',
        logoBg: '#003580',
        logoColor: '#ffffff',
        whyThisApp: 'Book high-speed trains, hotels, flights, and attraction tickets — all in English with foreign card support. The easiest booking platform for foreigners.',
        setupTime: '5 min',
        difficulty: 'easy',
        href: '/china-basics/what-apps-to-use/trip-com',
        isEssential: false,
        tags: ['🚄 Trains', '🏨 Hotels', '✈️ Flights'],
      },
      {
        id: 'meituan',
        title: 'Meituan',
        icon: '🍔',
        logoLetter: '美',
        logoBg: '#ffc300',
        logoColor: '#1a1a1a',
        whyThisApp: 'China\'s everything app: food delivery, hotel deals, movie tickets, group discounts. Mostly Chinese interface — best for adventurous travelers staying 1+ weeks.',
        setupTime: '10 min',
        difficulty: 'medium',
        href: '/china-basics/what-apps-to-use/meituan',
        isEssential: false,
        tags: ['🍕 Food Delivery', '🏨 Hotels', '🎯 Deals'],
      },
    ],
  },
]

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
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#f5f1ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#af5d32]">
            📱 App Setup Guide
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-5xl">
            What Apps to Use in China
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#64748b]">
            Follow the setup order below. The first 24 hours in China are much easier when
            payments, navigation, and transport tools are ready before you land.
          </p>
        </div>

        {/* ⚠️ VPN WARNING CALLOUT */}
        <div className="mt-8 rounded-xl border-2 border-[#92400e] bg-amber-50 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="text-lg font-bold text-[#92400e]">Before Anything Else: Install Your VPN</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#78350f]">
                China blocks Google, WhatsApp, Instagram, YouTube, and most Western sites at the border. <strong>You cannot download a VPN once you&apos;re in China</strong> — VPN websites are blocked too. Install and <em>test</em> yours before departure.
              </p>
              <Link href="/china-basics/what-apps-to-use/vpn" className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#92400e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#78350f] transition-colors">
                🛡️ VPN Setup Guide — 5 min
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Summary Box */}
        <div className="mt-4 rounded-xl border border-[#ebe4d8] bg-[#f5f1ea] p-5 md:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">📱</span>
              <div>
                <p className="font-semibold text-[#1a3a4a]">4 apps minimum</p>
                <p className="text-sm text-[#64748b]">Alipay, WeChat, VPN, eSIM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">⏱️</span>
              <div>
                <p className="font-semibold text-[#1a3a4a]">~30 min total</p>
                <p className="text-sm text-[#64748b]">Setup time before departure</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <p className="font-semibold text-[#1a3a4a]">Install VPN first</p>
                <p className="text-sm text-[#64748b]">Blocked at China&apos;s border</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#64748b]">
          <span className="inline-flex items-center gap-1 rounded-full bg-white border border-[#ebe4d8] px-3 py-1 text-xs font-medium text-[#1a3a4a]">
            ✍️ Written by travelers with 4+ China trips
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white border border-[#ebe4d8] px-3 py-1 text-xs font-medium text-[#1a3a4a]">
            🗣️ Fluent Mandarin
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white border border-[#ebe4d8] px-3 py-1 text-xs font-medium text-[#1a3a4a]">
            🏠 Family in Beijing & Shanghai
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white border border-[#ebe4d8] px-3 py-1 text-xs font-medium text-[#1a3a4a]">
            🔄 Updated April 2026
          </span>
        </div>

        {/* Table of Contents */}
        <nav className="mt-6 rounded-xl border border-[#ebe4d8] bg-white p-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748b] mb-3">In this guide</h3>
          <div className="grid gap-2 sm:grid-cols-3">
            {phases.map((phase, i) => (
              <a
                key={phase.id}
                href={`#${phase.id}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#1a3a4a] hover:bg-[#f5f1ea] transition-colors"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a3a4a] text-[10px] font-bold text-white">{i + 1}</span>
                {phase.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Phase sections */}
        <div className="mt-12 space-y-16">
          {phases.map((phase) => (
            <section key={phase.id} id={phase.id} className="scroll-mt-24">
              {/* Phase Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a3a4a] text-white">
                    {phase.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a3a4a] md:text-3xl">{phase.label}</h2>
                </div>
                <p className="text-[#64748b] ml-[52px]">{phase.subtitle}</p>
                {phase.urgency && (
                  <p className="mt-2 ml-[52px] text-sm font-medium text-[#af5d32]">
                    {phase.urgency}
                  </p>
                )}
              </div>

              {/* Phase Image */}
              <div className="mb-8 overflow-hidden rounded-xl">
                <Image
                  src={phase.image.src}
                  alt={phase.image.alt}
                  width={800}
                  height={400}
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>

              {/* App Cards */}
              <div className="space-y-3">
                {phase.apps.map((app) => (
                  <Link
                    key={app.id}
                    href={app.href}
                    className={`group flex items-start gap-4 rounded-xl border bg-white p-4 transition-all hover:shadow-md md:p-5 ${
                      app.isEssential
                        ? 'border-l-4 border-l-[#af5d32] border-t-[#ebe4d8] border-r-[#ebe4d8] border-b-[#ebe4d8]'
                        : 'border-l-4 border-l-[#ebe4d8] border-[#ebe4d8]'
                    }`}
                  >
                    {/* App Logo Placeholder */}
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold shadow-sm"
                      style={{ backgroundColor: app.logoBg, color: app.logoColor }}
                      title={`Replace with ${app.title} logo`}
                    >
                      {app.logoLetter}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-[#1a3a4a]">
                          {app.title}
                        </h3>
                        {app.isEssential && (
                          <span className="rounded-full bg-[#af5d32] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                            Must-Have
                          </span>
                        )}
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
                          app.difficulty === 'easy'
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-amber-50 text-amber-600'
                        }`}>
                          {app.difficulty === 'easy' ? '✓ Easy' : '⚠ Medium'}
                        </span>
                        <span className="rounded-full bg-[#f5f1ea] px-2 py-0.5 text-[10px] font-medium text-[#64748b]">
                          ⏱ {app.setupTime}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#64748b]">
                        {app.whyThisApp}
                      </p>
                      {app.isEssential && app.id !== 'vpn' && (
                        <p className="mt-1.5 text-xs text-[#92400e] font-medium">
                          💡 {app.id === 'alipay' ? 'Without this, you\u0026apos;re stuck with cash in a cashless country' : app.id === 'wechat' ? 'Hotels and locals often require WeChat for communication and check-in' : app.id === 'esim' ? 'Roaming costs $10-15/day — this saves you money immediately' : app.id === 'maps' ? 'Google Maps doesn\u0026apos;t work reliably in China' : app.id === 'translation' ? 'Menus, signs, directions — all in Chinese characters' : ''}
                        </p>
                      )}
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
                      <span className="text-sm font-semibold">Setup →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* What Happens If You Don't */}
        <div className="mt-16 rounded-xl border-2 border-[#1a3a4a] bg-[#1a3a4a] p-5 md:p-8 text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">⚠️ What Happens If You Don't?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-bold text-white">No VPN?</p>
              <p className="text-sm text-white/70 mt-1">Google, WhatsApp, Instagram, YouTube — ALL blocked. You can't search, navigate, or message home.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-bold text-white">No Alipay?</p>
              <p className="text-sm text-white/70 mt-1">You're the person fumbling with cash while 50 people queue behind you. Some places simply don't accept cash.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-bold text-white">No eSIM?</p>
              <p className="text-sm text-white/70 mt-1">Roaming costs $10-15/day. A $5 eSIM gives you data for your whole trip.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-bold text-white">No Translation?</p>
              <p className="text-sm text-white/70 mt-1">Menus, signs, directions — all in Chinese. Pointing works, but a translation app saves hours of confusion.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="group rounded-xl border border-[#ebe4d8] bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-[#1a3a4a] hover:bg-[#f5f1ea] rounded-xl transition-colors">
                Can I use my foreign credit card with Alipay?
                <span className="text-[#af5d32] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-[#64748b]">
                Yes! Alipay now supports international cards through its "Tour Pass" feature. You'll need to verify your identity (passport photo + selfie) during setup. We recommend doing this <strong>before departure</strong> because the verification process requires a stable connection.
              </div>
            </details>
            <details className="group rounded-xl border border-[#ebe4d8] bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-[#1a3a4a] hover:bg-[#f5f1ea] rounded-xl transition-colors">
                Does WeChat Pay work with non-Chinese phones?
                <span className="text-[#af5d32] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-[#64748b]">
                Yes, WeChat supports international phone numbers and foreign cards. The setup is similar to Alipay — passport verification required. Pro tip: WeChat is also your messaging app, so you need it regardless.
              </div>
            </details>
            <details className="group rounded-xl border border-[#ebe4d8] bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-[#1a3a4a] hover:bg-[#f5f1ea] rounded-xl transition-colors">
                Do I need both Alipay AND WeChat Pay?
                <span className="text-[#af5d32] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-[#64748b]">
                Strongly recommended. Some merchants only accept one or the other. Street vendors often prefer WeChat, while larger stores lean Alipay. Having both means you're never stuck.
              </div>
            </details>
            <details className="group rounded-xl border border-[#ebe4d8] bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-[#1a3a4a] hover:bg-[#f5f1ea] rounded-xl transition-colors">
                Which VPN actually works in China?
                <span className="text-[#af5d32] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-[#64748b]">
                VPN performance changes frequently as China updates its firewall. As of 2026, the most reliable options include Astrill, ExpressVPN, and NordVPN. <strong>Always install and test your VPN before departure</strong> — you can't download one once in China. See our <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline">full VPN guide</a>.
              </div>
            </details>
            <details className="group rounded-xl border border-[#ebe4d8] bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-[#1a3a4a] hover:bg-[#f5f1ea] rounded-xl transition-colors">
                Can I just use cash instead of mobile payments?
                <span className="text-[#af5d32] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-[#64748b]">
                Technically yes, but it's increasingly difficult. Many small restaurants, street vendors, and even some hotels are cashless. You'll also need exact change — vendors often can't break large bills. Mobile payment is simply how China works now.
              </div>
            </details>
            <details className="group rounded-xl border border-[#ebe4d8] bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-[#1a3a4a] hover:bg-[#f5f1ea] rounded-xl transition-colors">
                What about Apple Maps vs Google Maps vs Baidu Maps?
                <span className="text-[#af5d32] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-[#64748b]">
                <strong>Apple Maps</strong> works without VPN in China and is your best bet for iPhone users. <strong>Google Maps</strong> requires VPN and has inaccuracies. <strong>Baidu Maps</strong> is most accurate but Chinese-only. Our recommendation: Apple Maps for quick navigation, download offline Google Maps as backup.
              </div>
            </details>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16">
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
                description: 'What&apos;s blocked and how to stay connected.',
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