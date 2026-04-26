'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Wifi, Shield, Smartphone, FileText, Briefcase, Home } from 'lucide-react'
import ChecklistDownload from '@/components/ChecklistDownload'
import FooterCTA from '@/components/FooterCTA'

const destinations = [
  {
    key: 'shanghai',
    href: '/destinations/shanghai',
    imageSrc: '/images/shanghai/modern-skyline.jpg',
    imageAlt: 'Shanghai skyline with modern skyscrapers',
    label: 'Modern & Nightlife',
    title: 'Shanghai',
    description: 'Colonial elegance meets tomorrow\'s skyline',
    featured: true,
  },
  {
    key: 'beijing',
    href: '/destinations/beijing',
    imageSrc: '/images/beijing/forbidden-city.jpg',
    imageAlt: 'Traditional architecture in Beijing',
    label: 'History & Culture',
    title: 'Beijing',
    description: 'The capital, the Great Wall, the hutongs',
    featured: false,
  },
  {
    key: 'xian',
    href: '/destinations/xian',
    imageSrc: '/images/xian/city-wall.jpg',
    imageAlt: "Xi'an ancient city wall",
    label: 'Ancient History',
    title: "Xi'an",
    description: 'Terracotta Army and ancient walls',
    featured: false,
  },
  {
    key: 'chengdu',
    href: '/destinations/chengdu',
    imageSrc: '/images/chengdu/hotpot.jpg',
    imageAlt: 'Sichuan hotpot in Chengdu',
    label: 'Food & Pandas',
    title: 'Chengdu',
    description: 'Sichuan spice and giant pandas',
    featured: false,
  },
  {
    key: 'chongqing',
    href: '/destinations/chongqing',
    imageSrc: '/images/chongqing/river-view.jpg',
    imageAlt: 'Chongqing cityscape by the river',
    label: 'River & Hotpot',
    title: 'Chongqing',
    description: 'A bold, hilly river city',
    featured: false,
  },
]

const essentials = [
  {
    icon: Wifi,
    title: 'eSIM & Internet',
    description: 'Set up before you fly',
    href: '/china-basics/how-to-get-internet',
  },
  {
    icon: Shield,
    title: 'VPN Setup',
    description: 'Install before arrival',
    href: '/china-basics/what-apps-to-use',
  },
  {
    icon: Smartphone,
    title: 'Alipay & WeChat',
    description: 'Mobile payments made easy',
    href: '/china-basics/what-apps-to-use',
  },
  {
    icon: FileText,
    title: 'Visa & Documents',
    description: 'Requirements simplified',
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    icon: Briefcase,
    title: 'Packing List',
    description: 'What to bring & skip',
    href: '/china-basics',
  },
]

const footerQuickInfo = [
  {
    icon: Smartphone,
    title: 'Apps You\'ll Need',
    description: 'Alipay, WeChat, maps & more — ',
    link: { href: '/china-basics/what-apps-to-use', label: 'set them up before you fly' },
  },
  {
    icon: Shield,
    title: 'VPN Guide',
    description: 'The one thing to install ',
    link: { href: '/china-basics/what-apps-to-use', label: 'before you land' },
  },
  {
    icon: Wifi,
    title: 'Get Online',
    description: 'eSIM, roaming & Wi-Fi — ',
    link: { href: '/china-basics/how-to-get-internet', label: 'stay connected in China' },
  },
]

export default function HomeV1Client() {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trail of China',
    url: 'https://trailofchina.com',
    description: 'First-trip China travel planning for Western tourists',
  }

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trail of China',
    url: 'https://trailofchina.com',
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />

      {/* ===== 1. Full-Bleed Hero ===== */}
      <section className="relative h-dvh min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/hero/china-hero.jpg"
          alt="Scenic view of China — mountains, temples, and modern skylines"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div className="max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#af5d32] mb-4">
              First-Trip China Travel Guide
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-3xl">
              China Doesn&apos;t Have to Be Complicated
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mb-8">
              Visa tips, app setup, itineraries — everything you need for a smooth first trip. Written by travelers who&apos;ve been there.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/china-basics"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#af5d32] text-white font-semibold rounded-xl hover:bg-[#9a4f28] transition-colors text-sm"
              >
                Start Planning
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="#cheat-sheet"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm"
              >
                Get Free Cheat Sheet
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={24} />
        </div>
      </section>

      {/* ===== 2. Trust Bar ===== */}
      <div className="bg-white border-b border-[#ebe4d8] py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1a3a4a]">4+</span>
            <span className="text-xs text-[#64748b] uppercase tracking-wider">China Trips</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1a3a4a]">Fluent</span>
            <span className="text-xs text-[#64748b] uppercase tracking-wider">Mandarin</span>
          </div>
          <div className="flex items-center gap-2">
            <Home size={20} className="text-[#1a3a4a]" />
            <span className="text-xs text-[#64748b] uppercase tracking-wider">Family in Beijing & Shanghai</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1a3a4a]">15+</span>
            <span className="text-xs text-[#64748b] uppercase tracking-wider">Cities</span>
          </div>
        </div>
      </div>

      {/* ===== 3. Destinations — Featured + Grid ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">Destinations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-3">Where to Go</h2>
          <p className="text-[#64748b] mb-8 max-w-lg">
            Five incredible cities for your first China trip — each with its own personality.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Shanghai — 2-col span, featured */}
            <Link
              href="/destinations/shanghai"
              className="col-span-2 row-span-2 group"
            >
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/shanghai/modern-skyline.jpg"
                  alt="Shanghai skyline"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/80 to-transparent" />
                <div className="absolute bottom-0 p-5 md:p-6">
                  <p className="text-xs text-[#af5d32] font-semibold uppercase tracking-wider mb-1">
                    Modern & Nightlife
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Shanghai</h3>
                  <p className="text-white/70 text-sm">Colonial elegance meets tomorrow&apos;s skyline</p>
                </div>
              </div>
            </Link>

            {/* Beijing */}
            <Link href="/destinations/beijing" className="group">
              <div className="relative h-full min-h-[140px] rounded-xl overflow-hidden">
                <Image
                  src="/images/beijing/forbidden-city.jpg"
                  alt="Beijing Forbidden City"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-base font-bold text-white">Beijing</h3>
                  <p className="text-white/70 text-xs">History & Culture</p>
                </div>
              </div>
            </Link>

            {/* Xi'an */}
            <Link href="/destinations/xian" className="group">
              <div className="relative h-full min-h-[140px] rounded-xl overflow-hidden">
                <Image
                  src="/images/xian/city-wall.jpg"
                  alt="Xi'an ancient city wall"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-base font-bold text-white">Xi&apos;an</h3>
                  <p className="text-white/70 text-xs">Ancient History</p>
                </div>
              </div>
            </Link>

            {/* Chengdu */}
            <Link href="/destinations/chengdu" className="group">
              <div className="relative h-full min-h-[140px] rounded-xl overflow-hidden">
                <Image
                  src="/images/chengdu/hotpot.jpg"
                  alt="Chengdu hotpot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-base font-bold text-white">Chengdu</h3>
                  <p className="text-white/70 text-xs">Food & Pandas</p>
                </div>
              </div>
            </Link>

            {/* Chongqing */}
            <Link href="/destinations/chongqing" className="group">
              <div className="relative h-full min-h-[140px] rounded-xl overflow-hidden">
                <Image
                  src="/images/chongqing/river-view.jpg"
                  alt="Chongqing river view"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-base font-bold text-white">Chongqing</h3>
                  <p className="text-white/70 text-xs">River & Hotpot</p>
                </div>
              </div>
            </Link>
          </div>
          <Link
            href="/destinations"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#f5f1ea] border border-[#ebe4d8] rounded-xl text-sm font-semibold text-[#1a3a4a] hover:border-[#af5d32] transition-colors"
          >
            View all destinations <ArrowRight size={14} />
          </Link>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1.5 rounded-full bg-[#f5f1ea] border border-[#ebe4d8] text-xs text-[#64748b]">Hangzhou — Coming Soon</span>
            <span className="px-3 py-1.5 rounded-full bg-[#f5f1ea] border border-[#ebe4d8] text-xs text-[#64748b]">Suzhou — Coming Soon</span>
            <span className="px-3 py-1.5 rounded-full bg-[#f5f1ea] border border-[#ebe4d8] text-xs text-[#64748b]">Guilin — Coming Soon</span>
          </div>
        </div>
      </section>

      {/* ===== 4. China Essentials — Icon Strip ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">Essentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-8">Prepare Before You Fly</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {essentials.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group p-4 rounded-xl border border-[#ebe4d8] hover:border-[#af5d32] active:border-[#af5d32] transition-colors text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f5f1ea] flex items-center justify-center mx-auto mb-3">
                    <Icon size={24} className="text-[#af5d32]" />
                  </div>
                  <h3 className="font-semibold text-[#1a3a4a] text-sm group-hover:text-[#af5d32]">{item.title}</h3>
                  <p className="text-xs text-[#64748b] mt-1">{item.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 5. How It Works — 3 Steps ===== */}
      <section className="py-12 md:py-16 bg-[#f5f1ea]">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-10">Three Steps to China</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#f5f1ea] text-[#af5d32] border-2 border-[#af5d32] flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-[#1a3a4a] text-lg mb-2">Get Connected</h3>
              <p className="text-sm text-[#64748b]">
                Set up eSIM, install VPN, download Alipay before you fly. We walk you through every app.
              </p>
              <Link
                href="/china-basics/how-to-get-internet"
                className="text-sm font-semibold text-[#af5d32] mt-3 inline-block hover:underline"
              >
                Internet guide →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#f5f1ea] text-[#af5d32] border-2 border-[#af5d32] flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-[#1a3a4a] text-lg mb-2">Plan Your Route</h3>
              <p className="text-sm text-[#64748b]">
                7-day, 10-day, and 14-day itineraries crafted for first-timers. Or build your own.
              </p>
              <Link
                href="/plan-your-trip/preplanned-trips"
                className="text-sm font-semibold text-[#af5d32] mt-3 inline-block hover:underline"
              >
                View itineraries →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#f5f1ea] text-[#af5d32] border-2 border-[#af5d32] flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-[#1a3a4a] text-lg mb-2">Explore Like a Local</h3>
              <p className="text-sm text-[#64748b]">
                Know the cultural differences, avoid tourist traps, eat where locals eat.
              </p>
              <Link
                href="/china-basics/how-china-differs/cultural-differences"
                className="text-sm font-semibold text-[#af5d32] mt-3 inline-block hover:underline"
              >
                Culture tips →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. PDF Cheat Sheet ===== */}
      <section id="cheat-sheet" className="py-12 md:py-16 bg-gradient-to-b from-[#1a3a4a] to-[#0f2930]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">Free Download</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">China Travel Cheat Sheet</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            2-page PDF with everything you need: apps to download, what to pack, visa rules, and more.
          </p>
          <ChecklistDownload />
        </div>
      </section>

      {/* ===== 7. FooterCTA ===== */}
      <div className="bg-[#f5f1ea]">
        <div className="max-w-6xl mx-auto px-4">
          <FooterCTA
            title="Ready to Plan Your Trip?"
            subtitle="Browse pre-built itineraries, destination guides, and practical tools for your first China adventure."
            quickInfo={footerQuickInfo}
            trustText="Free guides · Updated regularly · Written by China travelers"
          />
        </div>
      </div>
    </main>
  )
}
