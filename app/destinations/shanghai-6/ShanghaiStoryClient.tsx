"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wifi, CreditCard, TrainFront, Smartphone, ShieldCheck, Thermometer,
  CloudRain, Car, Moon, Map, ArrowRight, ChevronRight,
} from "lucide-react";

// ─── Data (same as v5) ────────────────────────────────────────────

const quickInfoPills = [
  { icon: Wifi, label: "Internet:", text: "VPN required" },
  { icon: CreditCard, label: "", text: "Cashless society" },
  { icon: TrainFront, label: "", text: "Excellent metro" },
  { icon: Thermometer, label: "Best:", text: "Mar–May, Sep–Nov" },
];

const attractions = [
  { name: "The Bund", hook: "Shanghai's most iconic waterfront promenade with skyline views.", tag: "Free", imageSeed: "shanghai-bund", href: "/destinations/shanghai/what-to-do/bund" },
  { name: "Yu Garden", hook: "A 400-year-old classical garden surrounded by a lively bazaar.", tag: "¥40", imageSeed: "shanghai-yugarden", href: "/destinations/shanghai/what-to-do/yu-garden" },
  { name: "French Concession", hook: "Tree-lined avenues, Art Deco villas, and charming cafés.", tag: "Free", imageSeed: "shanghai-frenchconcession", href: "/destinations/shanghai/what-to-do/french-concession" },
  { name: "Shanghai Tower", hook: "The world's second-tallest building with a jaw-dropping observation deck.", tag: "¥180", imageSeed: "shanghai-tower", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
  { name: "Tianzifang", hook: "Winding alleyways packed with studios, galleries, and craft shops.", tag: "Free", imageSeed: "shanghai-tianzifang", href: "/destinations/shanghai/what-to-do" },
  { name: "Jade Buddha Temple", hook: "Serene Buddhist temple housing two stunning white jade Buddhas.", tag: "¥20", imageSeed: "shanghai-jadebuddha", href: "/destinations/shanghai/what-to-do" },
];

const foodCards = [
  { name: "Xiaolongbao", sub: "Shanghai's iconic soup dumplings", tag: "Street Food · ¥30", imageSeed: "xiaolongbao", href: "/destinations/shanghai/where-to-eat/xiaolongbao" },
  { name: "Shengjianbao", sub: "Pan-fried buns with a crispy bottom", tag: "Street Food · ¥15", imageSeed: "shengjianbao", href: "/destinations/shanghai/where-to-eat/shengjianbao" },
  { name: "Hairy Crab", sub: "Autumn delicacy from nearby Yangcheng Lake", tag: "Seasonal · ¥200+", imageSeed: "hairy-crab", href: "/destinations/shanghai/where-to-eat/hairy-crab" },
  { name: "Scallion Oil Noodles", sub: "Simple, fragrant, and deeply comforting", tag: "Restaurant · ¥25–40", imageSeed: "scallion-noodles", href: "/destinations/shanghai/where-to-eat/scallion-oil-noodles" },
];

const neighborhoods = [
  { name: "Bund Area", vibe: "Iconic skyline · Historic architecture", desc: "Perfect for first-timers who want postcard views and easy river access.", imageSeed: "shanghai-bund-area", href: "/destinations/shanghai/where-to-stay/bund-area" },
  { name: "French Concession", vibe: "Cafés & boutiques · Tree-lined streets", desc: "The most walkable neighborhood with strong metro links and charm.", imageSeed: "shanghai-french-concession-stay", href: "/destinations/shanghai/where-to-stay/french-concession" },
  { name: "Jing'an", vibe: "Local life · Metro hub", desc: "A central, down-to-earth base with top transport connections.", imageSeed: "shanghai-jingan", href: "/destinations/shanghai/where-to-stay/jingan" },
  { name: "Xintiandi", vibe: "Modern luxury · Nightlife", desc: "Sleek dining, high-end hotels, and a polished night-out scene.", imageSeed: "shanghai-xintiandi", href: "/destinations/shanghai/where-to-stay/xintiandi" },
];

const knowBeforeCards = [
  { icon: Wifi, title: "Internet", text: "VPNs required. Download before landing.", href: "/china-basics/how-to-get-internet" },
  { icon: CreditCard, title: "Payment", text: "Alipay & WeChat Pay dominate. Cash rarely needed.", href: "/china-basics/what-apps-to-use/payment" },
  { icon: TrainFront, title: "Transport", text: "Metro is excellent. DiDi for taxis.", href: "/china-basics/how-to-get-around" },
  { icon: Smartphone, title: "Apps", text: "Download Alipay, DiDi, Amap before you go.", href: "/china-basics/what-apps-to-use" },
  { icon: ShieldCheck, title: "Visa", text: "Most Western nationals: 15–30 day visa-free or e-visa.", href: "/china-basics/how-china-differs/visa-guide" },
  { icon: Thermometer, title: "Weather", text: "Best time: March–May, September–November.", href: "/plan-your-trip/best-time-to-visit" },
];

const localTips = [
  { title: "Plum Rain Season", text: "June–July brings muggy, rainy weather. Pack extra socks and a travel umbrella.", icon: CloudRain },
  { title: "Taxi Pro Tip", text: "Shanghai taxis are cheap, but drivers rarely speak English. Use DiDi instead.", icon: Car },
  { title: "Bund After Dark", text: "The Bund is free and best at night. Skip the overpriced tourist tunnel.", icon: Moon },
  { title: "Metro & Maps", text: "Metro stops have English signs. Amap is the best local alternative.", icon: Map },
];

// ─── Page ──────────────────────────────────────────────────────────

export default function ShanghaiStoryClient() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) (header as HTMLElement).style.position = "relative";
    return () => { const h = document.querySelector("header"); if (h) (h as HTMLElement).style.position = ""; };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Full-bleed Hero */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <Image src="https://picsum.photos/seed/shanghai-skyline/1400/700" alt="Shanghai skyline" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a] via-[#1a3a4a]/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-10 md:pb-16 max-w-4xl mx-auto w-full">
          <p className="text-white/70 text-sm mb-2 tracking-widest uppercase">上海 · China Travel Guide</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight leading-tight">Shanghai</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">Colonial elegance meets tomorrow&apos;s skyline. Here&apos;s how to experience it like a local.</p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-3">
            {quickInfoPills.map((pill) => {
              const PillIcon = pill.icon;
              return (
                <span key={pill.text} className="inline-flex items-center gap-1.5 text-xs md:text-sm text-white/80 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
                  <PillIcon size={14} className="text-white/70" />
                  {pill.label && <span className="font-semibold">{pill.label}</span>}
                  <span>{pill.text}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Editorial Intro */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-[#1a3a4a] leading-relaxed">
            Shanghai is a city that moves fast but rewards those who slow down. The Bund at dawn, a quiet bowl of noodles at a street stall, the Art Deco lanes of the French Concession — these moments don&apos;t appear in guidebooks. <strong className="text-[#af5d32]">Here&apos;s your insider guide.</strong>
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 space-y-16 md:space-y-24 pb-16">
        {/* ── Featured: The Bund ── */}
        <section>
          <Link href="/destinations/shanghai/what-to-do/bund" className="group block">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <Image src="https://picsum.photos/seed/shanghai-bund/1200/500" alt="The Bund" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-[#af5d32] text-white text-xs font-semibold rounded-full mb-3">Must Visit</span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">The Bund</h2>
                  <p className="text-white/80 text-sm md:text-base max-w-lg">Shanghai&apos;s most iconic waterfront. Best at night when the Pudong skyline lights up across the river.</p>
                  <span className="inline-flex items-center gap-1 text-white text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Read more <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── Things to Do ── */}
        <section>
          <div className="mb-6 md:mb-8">
            <p className="text-xs tracking-widest uppercase text-[#af5d32] font-semibold mb-2">Explore</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a]">Things to Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {attractions.map((attr) => (
              <Link key={attr.name} href={attr.href} className="group block">
                <div className="rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${attr.imageSeed}/600/400`} alt={attr.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">{attr.name}</h3>
                      <span className="rounded-full bg-[#f5f1ea] text-[#1a3a4a] text-xs font-semibold px-2 py-0.5 whitespace-nowrap flex-shrink-0">{attr.tag}</span>
                    </div>
                    <p className="text-sm text-[#64748b] line-clamp-1">{attr.hook}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/destinations/shanghai/what-to-do" className="inline-flex items-center gap-1 text-sm font-medium text-[#af5d32] hover:underline mt-4">See all attractions <ChevronRight size={14} /></Link>
        </section>

        {/* ── Full-bleed Photo Break ── */}
        <section className="-mx-4 md:-mx-0">
          <div className="relative h-[250px] md:h-[350px] overflow-hidden rounded-none md:rounded-2xl">
            <Image src="https://picsum.photos/seed/shanghai-food-scene/1200/400" alt="Shanghai food scene" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a4a]/80 to-transparent" />
            <div className="absolute inset-0 flex items-center px-6 md:px-10 max-w-4xl mx-auto w-full">
              <div>
                <p className="text-white/70 text-xs tracking-widest uppercase mb-2">Food & Drink</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Eat Like a Local</h2>
                <p className="text-white/80 text-sm md:text-base max-w-sm">From street-corner xiaolongbao to autumn hairy crab feasts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Where to Eat ── */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {foodCards.map((food) => (
              <Link key={food.name} href={food.href} className="group block h-full">
                <div className="rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${food.imageSeed}/600/400`} alt={food.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">{food.name}</h3>
                      <span className="rounded-full bg-[#f5f1ea] text-[#1a3a4a] text-xs font-semibold px-2 py-0.5 whitespace-nowrap flex-shrink-0">{food.tag}</span>
                    </div>
                    <p className="text-sm text-[#64748b] line-clamp-1">{food.sub}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/destinations/shanghai/where-to-eat" className="inline-flex items-center gap-1 text-sm font-medium text-[#af5d32] hover:underline mt-4">See all food <ChevronRight size={14} /></Link>
        </section>

        {/* ── Stat Bar ── */}
        <section className="bg-[#f5f1ea] rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div><p className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">26M+</p><p className="text-xs text-[#64748b]">Residents</p></div>
            <div><p className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">15</p><p className="text-xs text-[#64748b]">Days visa-free</p></div>
            <div><p className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">¥800</p><p className="text-xs text-[#64748b]">Daily budget</p></div>
            <div><p className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">4.5★</p><p className="text-xs text-[#64748b]">Traveler rating</p></div>
          </div>
        </section>

        {/* ── Where to Stay ── */}
        <section>
          <div className="mb-6 md:mb-8">
            <p className="text-xs tracking-widest uppercase text-[#af5d32] font-semibold mb-2">Stay</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a]">Where to Stay</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighborhoods.map((n) => (
              <Link key={n.name} href={n.href} className="group block h-full">
                <div className="rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${n.imageSeed}/600/400`} alt={n.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-1">{n.name}</h3>
                    <p className="text-sm text-[#64748b] line-clamp-1">{n.vibe}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/destinations/shanghai/where-to-stay" className="inline-flex items-center gap-1 text-sm font-medium text-[#af5d32] hover:underline mt-4">See all neighborhoods <ChevronRight size={14} /></Link>
        </section>

        {/* ── Know Before You Go ── */}
        <section>
          <div className="mb-6 md:mb-8">
            <p className="text-xs tracking-widest uppercase text-[#af5d32] font-semibold mb-2">Prepare</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a]">Know Before You Go</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowBeforeCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.title} href={card.href} className="group block h-full">
                  <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                    <div className="aspect-[3/2] bg-[#f5f1ea] flex items-center justify-center">
                      <Icon className="text-[#1a3a4a]" size={48} />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-1">{card.title}</h3>
                      <p className="text-sm text-[#64748b] line-clamp-1">{card.text}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Local Tips ── */}
        <section>
          <div className="mb-6 md:mb-8">
            <p className="text-xs tracking-widest uppercase text-[#af5d32] font-semibold mb-2">Insider</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a]">Local Tips</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {localTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <Link key={tip.title} href="/destinations/shanghai/local-tips" className="group block h-full">
                  <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                    <div className="aspect-[3/2] bg-[#f5f1ea] flex items-center justify-center">
                      <Icon className="text-[#1a3a4a]" size={48} />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-1">{tip.title}</h3>
                      <p className="text-sm text-[#64748b] line-clamp-1">{tip.text}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="bg-[#1a3a4a] rounded-2xl p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Go?</h2>
          <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto mb-6">Get a ready-made itinerary or build your own with our travel planner.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-trip/preplanned-trips" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#af5d32] text-white font-semibold rounded-xl hover:bg-[#924a28] transition-colors text-sm">Find Your Perfect Trip <ArrowRight size={16} /></Link>
            <Link href="/plan-your-trip/travel-planner" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm">Plan Your Own Trip</Link>
          </div>
        </section>
      </main>
    </div>
  );
}