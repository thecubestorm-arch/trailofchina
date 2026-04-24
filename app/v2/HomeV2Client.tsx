'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Wifi,
  Shield,
  CreditCard,
  ShieldCheck,
  Luggage,
  MapPin,
  Calendar,
  Train,
} from 'lucide-react'
import ChecklistDownload from '@/components/ChecklistDownload'
import FooterCTA from '@/components/FooterCTA'

const destinations = [
  {
    key: 'shanghai',
    name: 'Shanghai',
    href: '/destinations/shanghai',
    imageSrc: '/images/shanghai/modern-skyline.jpg',
    tagline: 'Modern meets tradition',
  },
  {
    key: 'beijing',
    name: 'Beijing',
    href: '/destinations/beijing',
    imageSrc: '/images/beijing/forbidden-city.jpg',
    tagline: 'Imperial capital',
  },
  {
    key: 'chongqing',
    name: 'Chongqing',
    href: '/destinations/chongqing',
    imageSrc: '/images/chongqing/river-view.jpg',
    tagline: 'Mountain city',
  },
  {
    key: 'xian',
    name: "Xi'an",
    href: '/destinations/xian',
    imageSrc: '/images/xian/city-wall.jpg',
    tagline: 'Ancient capital',
  },
  {
    key: 'chengdu',
    name: 'Chengdu',
    href: '/destinations/chengdu',
    imageSrc: '/images/chengdu/hotpot.jpg',
    tagline: 'Home of pandas',
  },
]

const comingSoon = [
  { key: 'hangzhou', name: 'Hangzhou', tagline: 'West Lake beauty' },
  { key: 'guilin', name: 'Guilin', tagline: 'Karst landscapes' },
  { key: 'suzhou', name: 'Suzhou', tagline: 'Venice of the East' },
]

const beforeYouFly = [
  {
    icon: Wifi,
    name: 'eSIM & Internet',
    href: '/china-basics/how-to-get-internet',
    desc: 'No internet = nothing works',
  },
  {
    icon: Shield,
    name: 'VPN',
    href: '/china-basics/what-apps-to-use/vpn',
    desc: 'Google, WhatsApp blocked',
  },
  {
    icon: CreditCard,
    name: 'Alipay & WeChat',
    href: '/china-basics/what-apps-to-use/alipay',
    desc: 'Cashless is king',
  },
  {
    icon: ShieldCheck,
    name: 'Visa',
    href: '/china-basics/how-china-differs/visa-guide',
    desc: '15–30 days visa-free',
  },
  {
    icon: Luggage,
    name: 'Packing List',
    href: '/china-basics/before-you-go/packing-list',
    desc: 'What to bring (and not)',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Get Connected',
    description: 'eSIM, VPN, Alipay — set up the essentials before you land.',
    href: '/china-basics/how-to-get-internet',
    cta: 'Setup guide',
  },
  {
    step: 2,
    title: 'Pick Your Cities',
    description: 'Shanghai, Beijing, Chengdu — each with a ready-made guide and itinerary.',
    href: '/destinations',
    cta: 'Explore destinations',
  },
  {
    step: 3,
    title: 'Grab the Cheat Sheet',
    description: 'A 2-page PDF with apps, packing list, and visa info. Free download.',
    href: '/china-basics/how-to-get-internet',
    cta: 'Get the PDF',
  },
]

const footerQuickInfo = [
  {
    icon: ShieldCheck,
    title: 'Visa Requirements',
    description: 'Most EU & US citizens get 15–30 days visa-free.',
    link: { href: '/china-basics/how-china-differs/visa-guide', label: 'Check details' },
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    description: 'Spring (Apr–May) and autumn (Sep–Oct) are ideal.',
    link: { href: '/china-basics/when-to-go', label: 'When to go' },
  },
  {
    icon: Train,
    title: 'Getting Around',
    description: 'High-speed rail connects major cities in hours.',
    link: { href: '/china-basics/getting-around', label: 'Transport guide' },
  },
]

export default function HomeV2Client() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. Split Hero ─── */}
      <section className="bg-[#f5f1ea] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="w-10 h-1 bg-[#af5d32] rounded-full mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#af5d32] mb-4">
                First-Trip China Travel Guide
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3a4a] leading-[1.08] mb-5">
                Your China Trip
                <br />
                Starts Here
              </h1>
              <p className="text-lg text-[#64748b] leading-8 mb-8 max-w-md">
                Practical guides, honest advice, and ready-made itineraries for Western travelers
                exploring China for the first time.
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
                  href="/china-basics/how-to-get-internet"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#ebe4d8] text-[#1a3a4a] font-semibold rounded-xl hover:border-[#af5d32] transition-colors text-sm"
                >
                  Get Free Cheat Sheet
                </Link>
              </div>
              {/* Mini trust line */}
              <div className="mt-8 flex items-center gap-4 text-xs text-[#64748b]">
                <span className="font-semibold text-[#1a3a4a]">4+ China Trips</span>
                <span>·</span>
                <span className="font-semibold text-[#1a3a4a]">Speaks Mandarin</span>
                <span>·</span>
                <span className="font-semibold text-[#1a3a4a]">Family in China</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero/china-hero.jpg"
                alt="China travel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Destinations — Card Carousel ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="w-10 h-1 bg-[#af5d32] rounded-full mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a]">Where to Go</h2>
            </div>
            <Link
              href="/destinations"
              className="text-sm font-semibold text-[#af5d32] hover:underline"
            >
              All destinations →
            </Link>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {destinations.map((city) => (
              <Link
                key={city.key}
                href={city.href}
                className="w-[200px] md:w-[220px] flex-shrink-0 snap-start group"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={city.imageSrc}
                    alt={city.name}
                    width={220}
                    height={293}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors">
                  {city.name}
                </h3>
                <p className="text-xs text-[#64748b] mt-0.5">{city.tagline}</p>
              </Link>
            ))}

            {/* Coming soon */}
            {comingSoon.map((city) => (
              <div
                key={city.key}
                className="w-[160px] md:w-[180px] flex-shrink-0 snap-start opacity-60"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-[#f5f1ea] flex items-center justify-center">
                  <MapPin size={28} className="text-[#d9d0c2]" />
                </div>
                <h3 className="font-bold text-[#1a3a4a]">{city.name}</h3>
                <p className="text-xs text-[#64748b] mt-0.5">{city.tagline}</p>
                <span className="inline-block mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#af5d32] bg-[#f5f1ea] px-2 py-0.5 rounded-full">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Before You Fly — Checklist Strip ─── */}
      <section className="py-12 md:py-16 bg-[#f5f1ea]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-10 h-1 bg-[#af5d32] rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-3">Before You Fly</h2>
          <p className="text-[#64748b] mb-8 max-w-lg">
            Five things to sort out before you land in China. Do these at home — it&apos;s much
            harder once you arrive.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {beforeYouFly.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group p-5 rounded-xl bg-white border border-[#ebe4d8] hover:border-[#af5d32] transition-all hover:shadow-sm"
                >
                  <Icon size={28} className="text-[#af5d32] mb-3" />
                  <h3 className="font-bold text-[#1a3a4a] text-sm group-hover:text-[#af5d32] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#64748b]">{item.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. How It Works — Horizontal Timeline ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-10 h-1 bg-[#af5d32] rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-10">How It Works</h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#ebe4d8] hidden md:block" />
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step) => (
                <div key={step.step} className="relative text-center">
                  <div className="w-12 h-12 rounded-full bg-[#af5d32] text-white flex items-center justify-center text-lg font-bold mx-auto mb-5 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-[#1a3a4a] text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-[#64748b]">{step.description}</p>
                  <Link
                    href={step.href}
                    className="text-sm font-semibold text-[#af5d32] mt-2 inline-block hover:underline"
                  >
                    {step.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. PDF Cheat Sheet — Inline ─── */}
      <section className="py-12 md:py-16 bg-[#f5f1ea]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl border border-[#ebe4d8] bg-white p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-2">
                  Free Download
                </p>
                <h2 className="text-2xl font-bold text-[#1a3a4a] mb-2">
                  China Travel Cheat Sheet
                </h2>
                <p className="text-sm text-[#64748b]">
                  2-page PDF with apps, packing list, visa info, and more.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <ChecklistDownload />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Footer CTA ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FooterCTA
            title="Ready to plan your China trip?"
            subtitle="Browse ready-made itineraries, city guides, and practical tips — all written for first-time visitors."
            quickInfo={footerQuickInfo}
          />
        </div>
      </section>
    </div>
  )
}
