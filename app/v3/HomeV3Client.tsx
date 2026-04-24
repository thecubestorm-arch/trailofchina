'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Wifi, Shield, CreditCard, ShieldCheck, Luggage, ArrowRight } from 'lucide-react'
import ChecklistDownload from '@/components/ChecklistDownload'
import FooterCTA from '@/components/FooterCTA'
import { MapPin, Globe, FileText } from 'lucide-react'

export default function HomeV3Client() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero — Centered Statement */}
      <section className="bg-white min-h-[80vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 text-center py-20 md:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#af5d32] mb-6">First-Trip China Travel Guide</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a3a4a] leading-[1.05] mb-6">
            China,<br />Simplified.
          </h1>
          <p className="text-lg md:text-xl text-[#64748b] max-w-lg mx-auto mb-10 leading-relaxed">
            Practical guides, honest advice, and ready-made itineraries. Everything you need for a smooth first trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/china-basics" className="inline-flex items-center justify-center px-8 py-4 bg-[#1a3a4a] text-white font-semibold rounded-xl hover:bg-[#1a3a4a]/90 transition-colors">
              Start Planning <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link href="/china-basics/how-to-get-internet" className="inline-flex items-center justify-center px-8 py-4 border border-[#ebe4d8] text-[#1a3a4a] font-semibold rounded-xl hover:border-[#af5d32] transition-colors">
              Get Free Cheat Sheet
            </Link>
          </div>
          {/* Trust line */}
          <p className="mt-12 text-xs text-[#64748b]">
            By travelers who&apos;ve been there · <span className="font-semibold text-[#1a3a4a]">4+ China trips</span> · <span className="font-semibold text-[#1a3a4a]">Speaks Mandarin</span> · <span className="font-semibold text-[#1a3a4a]">Family in China</span>
          </p>
        </div>
      </section>

      {/* 2. Destinations — Full-Width Photo Grid */}
      <section className="bg-[#f5f1ea] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-2">Destinations</h2>
          <p className="text-[#64748b] mb-12">Five cities that belong on every first-timer&apos;s list.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {/* Shanghai — tall card spanning 2 rows */}
            <Link href="/destinations/shanghai" className="col-span-1 md:col-span-1 md:row-span-2 group relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[500px]">
              <Image src="/images/shanghai/modern-skyline.jpg" alt="Shanghai" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-xl font-bold text-white">Shanghai</h3>
                <p className="text-white/70 text-sm">Modern &amp; Nightlife</p>
              </div>
            </Link>
            {/* Beijing */}
            <Link href="/destinations/beijing" className="group relative rounded-2xl overflow-hidden min-h-[200px]">
              <Image src="/images/beijing/forbidden-city.jpg" alt="Beijing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="font-bold text-white">Beijing</h3>
                <p className="text-white/70 text-xs">History &amp; Culture</p>
              </div>
            </Link>
            {/* Xi&apos;an */}
            <Link href="/destinations/xian" className="group relative rounded-2xl overflow-hidden min-h-[200px]">
              <Image src="/images/xian/city-wall.jpg" alt="Xi'an" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="font-bold text-white">Xi&apos;an</h3>
                <p className="text-white/70 text-xs">Ancient Capital</p>
              </div>
            </Link>
            {/* Chengdu */}
            <Link href="/destinations/chengdu" className="group relative rounded-2xl overflow-hidden min-h-[200px]">
              <Image src="/images/chengdu/pandas.jpg" alt="Chengdu" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="font-bold text-white">Chengdu</h3>
                <p className="text-white/70 text-xs">Pandas &amp; Food</p>
              </div>
            </Link>
            {/* Chongqing */}
            <Link href="/destinations/chongqing" className="group relative rounded-2xl overflow-hidden min-h-[200px]">
              <Image src="/images/chongqing/river-view.jpg" alt="Chongqing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="font-bold text-white">Chongqing</h3>
                <p className="text-white/70 text-xs">Mountains &amp; Hotpot</p>
              </div>
            </Link>
          </div>
          <Link href="/destinations" className="mt-6 text-sm font-semibold text-[#af5d32] hover:underline inline-flex items-center gap-1">All destinations <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* 3. Essentials — Minimal Icon Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-2">Before You Fly</h2>
          <p className="text-[#64748b] mb-12">Sort these out at home — it&apos;s harder once you land.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Wifi, name: "Internet", href: "/china-basics/how-to-get-internet" },
              { icon: Shield, name: "VPN", href: "/china-basics/what-apps-to-use/vpn" },
              { icon: CreditCard, name: "Payment", href: "/china-basics/what-apps-to-use/alipay" },
              { icon: ShieldCheck, name: "Visa", href: "/china-basics/how-china-differs/visa-guide" },
              { icon: Luggage, name: "Packing", href: "/china-basics/before-you-go/packing-list" },
            ].map(item => (
              <Link key={item.name} href={item.href} className="group text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#f5f1ea] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#af5d32]/10 transition-colors">
                  <item.icon size={28} className="text-[#af5d32]" />
                </div>
                <h3 className="font-semibold text-[#1a3a4a] text-sm group-hover:text-[#af5d32] transition-colors">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works — Side-by-side Numbers */}
      <section className="bg-[#f5f1ea] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-12">How It Works</h2>
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <span className="text-5xl font-bold text-[#af5d32]/30 leading-none">01</span>
              <div>
                <h3 className="font-bold text-[#1a3a4a] text-lg mb-1">Get Connected</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">Set up eSIM, install VPN, download Alipay. We walk you through every app you&apos;ll need.</p>
                <Link href="/china-basics/how-to-get-internet" className="text-sm font-semibold text-[#af5d32] mt-2 inline-block hover:underline">Setup guide →</Link>
              </div>
            </div>
            <div className="border-t border-[#ebe4d8]" />
            <div className="flex gap-6 items-start">
              <span className="text-5xl font-bold text-[#af5d32]/30 leading-none">02</span>
              <div>
                <h3 className="font-bold text-[#1a3a4a] text-lg mb-1">Plan Your Route</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">7-day, 10-day, and 14-day itineraries crafted for first-timers. Or build your own.</p>
                <Link href="/plan-your-trip/preplanned-trips" className="text-sm font-semibold text-[#af5d32] mt-2 inline-block hover:underline">View itineraries →</Link>
              </div>
            </div>
            <div className="border-t border-[#ebe4d8]" />
            <div className="flex gap-6 items-start">
              <span className="text-5xl font-bold text-[#af5d32]/30 leading-none">03</span>
              <div>
                <h3 className="font-bold text-[#1a3a4a] text-lg mb-1">Explore Like a Local</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">Cultural tips, safety advice, and local secrets so you travel smart, not like a tourist.</p>
                <Link href="/china-basics/how-china-differs/cultural-differences" className="text-sm font-semibold text-[#af5d32] mt-2 inline-block hover:underline">Culture tips →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PDF Cheat Sheet — Dark Teal Card */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#1a3a4a] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">Free Download</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">China Travel Cheat Sheet</h2>
            <p className="text-white/70 text-sm max-w-md mx-auto mb-6">2-page PDF. Apps, packing, visa info — all on one sheet.</p>
            <ChecklistDownload />
          </div>
        </div>
      </section>

      {/* 6. FooterCTA */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <FooterCTA
            title="Ready to plan your China trip?"
            subtitle="Browse our pre-made itineraries or build your own custom route."
            quickInfo={[
              {
                icon: MapPin,
                title: "5 Destinations",
                description: "City guides with practical tips",
                link: { href: "/destinations", label: "Explore" },
              },
              {
                icon: Globe,
                title: "Internet & Apps",
                description: "VPN, eSIM, Alipay setup guides",
                link: { href: "/china-basics/how-to-get-internet", label: "Get Online" },
              },
              {
                icon: FileText,
                title: "Free Cheat Sheet",
                description: "2-page PDF with essentials",
                link: { href: "/china-basics/how-to-get-internet", label: "Download" },
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}
