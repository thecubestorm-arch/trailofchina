"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wifi, CreditCard, TrainFront, Smartphone, ShieldCheck, Thermometer,
  CloudRain, Car, Moon, Map, ArrowRight, Clock, Wallet, ChevronDown, ChevronUp, Sun, Sunrise, Sunset,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────

const quickInfoPills = [
  { icon: Wifi, label: "Internet:", text: "VPN required" },
  { icon: CreditCard, label: "", text: "Cashless society" },
  { icon: TrainFront, label: "", text: "Excellent metro" },
  { icon: Thermometer, label: "Best:", text: "Mar–May, Sep–Nov" },
];

interface DayPlan {
  title: string;
  timeOfDay: "morning" | "afternoon" | "evening";
  items: {
    name: string;
    href: string;
    time: string;
    cost: string;
    imageSeed: string;
    desc: string;
  }[];
}

const dayPlans: DayPlan[] = [
  {
    title: "Day 1: The Classics",
    timeOfDay: "morning",
    items: [
      { name: "The Bund", href: "/destinations/shanghai/what-to-do/bund", time: "1–2h", cost: "Free", imageSeed: "shanghai-bund", desc: "Start at dawn for empty walkways and soft light on the skyline." },
      { name: "Yu Garden", href: "/destinations/shanghai/what-to-do/yu-garden", time: "1–2h", cost: "¥40", imageSeed: "shanghai-yugarden", desc: "Ancient garden and bazaar. Go early before the crowds." },
      { name: "Xiaolongbao Lunch", href: "/destinations/shanghai/where-to-eat/xiaolongbao", time: "1h", cost: "¥30–60", imageSeed: "xiaolongbao", desc: "Hit a local spot near Yu Garden for Shanghai's famous soup dumplings." },
    ],
  },
  {
    title: "Day 1: The Classics",
    timeOfDay: "afternoon",
    items: [
      { name: "French Concession", href: "/destinations/shanghai/what-to-do/french-concession", time: "2–3h", cost: "Free", imageSeed: "shanghai-frenchconcession", desc: "Stroll tree-lined streets, browse boutiques, stop for coffee." },
      { name: "Tianzifang", href: "/destinations/shanghai/what-to-do", time: "1–2h", cost: "Free", imageSeed: "shanghai-tianzifang", desc: "Artsy alleys with galleries and craft shops. Easy walk from French Concession." },
    ],
  },
  {
    title: "Day 1: The Classics",
    timeOfDay: "evening",
    items: [
      { name: "Bund at Night", href: "/destinations/shanghai/what-to-do/bund", time: "1h", cost: "Free", imageSeed: "shanghai-bund-night", desc: "The Bund transforms after dark. Pudong's skyline lights up across the river." },
      { name: "Dinner in Xintiandi", href: "/destinations/shanghai/where-to-stay/xintiandi", time: "2h", cost: "¥150–300", imageSeed: "shanghai-xintiandi", desc: "Sleek dining in restored shikumen houses. End the day in style." },
    ],
  },
  {
    title: "Day 2: Modern Shanghai",
    timeOfDay: "morning",
    items: [
      { name: "Shanghai Tower", href: "/destinations/shanghai/what-to-do/shanghai-tower", time: "1–2h", cost: "¥180", imageSeed: "shanghai-tower", desc: "World's second-tallest building. Observation deck with panoramic views." },
      { name: "Jade Buddha Temple", href: "/destinations/shanghai/what-to-do", time: "1h", cost: "¥20", imageSeed: "shanghai-jadebuddha", desc: "Peaceful temple with two stunning jade Buddha statues." },
    ],
  },
  {
    title: "Day 2: Modern Shanghai",
    timeOfDay: "afternoon",
    items: [
      { name: "Jing'an Area", href: "/destinations/shanghai/where-to-stay/jingan", time: "2–3h", cost: "Free", imageSeed: "shanghai-jingan", desc: "Local life, street food, and the beautiful Jing'an Temple." },
      { name: "Scallion Oil Noodles", href: "/destinations/shanghai/where-to-eat/scallion-oil-noodles", time: "45min", cost: "¥25–40", imageSeed: "scallion-noodles", desc: "Simple, fragrant comfort food at a neighborhood shop." },
    ],
  },
  {
    title: "Day 2: Modern Shanghai",
    timeOfDay: "evening",
    items: [
      { name: "Bund Area Nightlife", href: "/destinations/shanghai/where-to-stay/bund-area", time: "2h+", cost: "Varies", imageSeed: "shanghai-bund-area", desc: "Rooftop bars with skyline views or riverside drinks." },
    ],
  },
];

const knowBeforeCards = [
  { icon: Wifi, title: "Internet", text: "VPNs required. Download before landing.", href: "/china-basics/how-to-get-internet" },
  { icon: CreditCard, title: "Payment", text: "Alipay & WeChat Pay dominate.", href: "/china-basics/what-apps-to-use/payment" },
  { icon: TrainFront, title: "Transport", text: "Metro is excellent. DiDi for taxis.", href: "/china-basics/how-to-get-around" },
  { icon: Smartphone, title: "Apps", text: "Download Alipay, DiDi, Amap before you go.", href: "/china-basics/what-apps-to-use" },
  { icon: ShieldCheck, title: "Visa", text: "Most Western nationals: 15–30 day visa-free.", href: "/china-basics/how-china-differs/visa-guide" },
  { icon: Thermometer, title: "Weather", text: "Best: March–May, September–November.", href: "/plan-your-trip/best-time-to-visit" },
];

const localTips = [
  { title: "Plum Rain Season", text: "June–July: muggy, rainy. Pack extra socks and umbrella.", icon: CloudRain },
  { title: "Taxi Pro Tip", text: "Drivers rarely speak English. Use DiDi with English interface.", icon: Car },
  { title: "Bund After Dark", text: "Free and best at night. Skip the tourist tunnel.", icon: Moon },
  { title: "Metro & Maps", text: "English signs in metro. Amap is the best local map app.", icon: Map },
];

const budgetRanges = [
  { label: "Budget", range: "¥400–600/day", desc: "Hostels, street food, walking + metro", color: "#22c55e" },
  { label: "Mid-range", range: "¥800–1,500/day", desc: "3-star hotel, mix of street & restaurant food, some taxis", color: "#af5d32" },
  { label: "Premium", range: "¥2,000+/day", desc: "Boutique hotels, fine dining, private car", color: "#1a3a4a" },
];

// ─── Time Icons ───────────────────────────────────────────────────

const timeIcons = { morning: Sunrise, afternoon: Sun, evening: Sunset };
const timeLabels = { morning: "Morning", afternoon: "Afternoon", evening: "Evening" };

// ─── Page ──────────────────────────────────────────────────────────

export default function ShanghaiPlannerClient() {
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set(["Day 1: The Classics"]));
  const [activeTab, setActiveTab] = useState<"planner" | "essentials">("planner");

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) (header as HTMLElement).style.position = "relative";
    return () => { const h = document.querySelector("header"); if (h) (h as HTMLElement).style.position = ""; };
  }, []);

  const toggleDay = (day: string) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day); else next.add(day);
      return next;
    });
  };

  // Group plans by day title
  const days = dayPlans.reduce<Record<string, DayPlan[]>>((acc, plan) => {
    if (!acc[plan.title]) acc[plan.title] = [];
    acc[plan.title].push(plan);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[350px] md:h-[420px] w-full overflow-hidden">
        <Image src="https://picsum.photos/seed/shanghai-skyline/1200/500" alt="Shanghai" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-6 md:pb-10 max-w-4xl mx-auto w-full">
          <p className="text-white/70 text-xs tracking-widest uppercase mb-1">Plan Your Trip</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">Shanghai</h1>
          <p className="text-white/90 text-base md:text-lg max-w-xl">Your day-by-day guide to the perfect trip</p>
        </div>
      </section>

      {/* Quick Info */}
      <div className="bg-[#f5f1ea] border-b border-[#ebe4d8]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2">
            {quickInfoPills.map((pill) => {
              const PillIcon = pill.icon;
              return (
                <span key={pill.text} className="inline-flex items-center gap-1.5 text-xs md:text-sm text-[#1a3a4a] bg-white border border-[#ebe4d8] rounded-full px-3 py-1.5">
                  <PillIcon size={14} className="text-[#1a3a4a]" />
                  {pill.label && <span className="font-semibold">{pill.label}</span>}
                  <span>{pill.text}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Budget Bar */}
      <div className="bg-white border-b border-[#ebe4d8]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <p className="text-xs tracking-widest uppercase text-[#af5d32] font-semibold mb-3">Daily Budget</p>
          <div className="grid grid-cols-3 gap-3">
            {budgetRanges.map((b) => (
              <div key={b.label} className="text-center p-3 rounded-xl bg-[#f5f1ea]">
                <p className="text-xs font-semibold text-[#64748b] mb-1">{b.label}</p>
                <p className="text-lg font-bold text-[#1a3a4a]">{b.range}</p>
                <p className="text-[10px] text-[#64748b] mt-0.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Nav */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#ebe4d8]">
        <div className="max-w-4xl mx-auto px-4 flex gap-0">
          {(["planner", "essentials"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2.5 text-sm font-medium min-h-[44px] border-b-[3px] transition-colors ${activeTab === tab ? "text-[#1a3a4a] font-semibold border-[#af5d32]" : "text-[#64748b] border-transparent hover:text-[#1a3a4a]"}`}>
              {tab === "planner" ? "Day Planner" : "Essentials"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {activeTab === "planner" && (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-2">Suggested Itinerary</h2>
              <p className="text-sm text-[#64748b]">A 2-day plan covering the essentials. Mix, match, or extend to your pace.</p>
            </div>

            {Object.entries(days).map(([dayTitle, periods]) => (
              <div key={dayTitle} className="border border-[#ebe4d8] rounded-2xl overflow-hidden">
                {/* Day Header */}
                <button onClick={() => toggleDay(dayTitle)} className="w-full flex items-center justify-between p-4 md:p-5 bg-[#f5f1ea] hover:bg-[#ebe4d8] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#af5d32] flex items-center justify-center text-white font-bold text-sm">
                      {dayTitle.includes("1") ? "1" : "2"}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-[#1a3a4a]">{dayTitle}</h3>
                      <p className="text-xs text-[#64748b]">{periods.reduce((sum, p) => sum + p.items.length, 0)} stops · {periods.length} time blocks</p>
                    </div>
                  </div>
                  {expandedDays.has(dayTitle) ? <ChevronUp size={20} className="text-[#64748b]" /> : <ChevronDown size={20} className="text-[#64748b]" />}
                </button>

                {/* Day Content */}
                {expandedDays.has(dayTitle) && (
                  <div className="divide-y divide-[#ebe4d8]">
                    {periods.map((period, pi) => {
                      const TimeIcon = timeIcons[period.timeOfDay];
                      return (
                        <div key={pi} className="p-4 md:p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <TimeIcon size={16} className="text-[#af5d32]" />
                            <span className="text-sm font-semibold text-[#af5d32]">{timeLabels[period.timeOfDay]}</span>
                          </div>
                          <div className="space-y-3">
                            {period.items.map((item, ii) => (
                              <Link key={ii} href={item.href} className="group flex gap-4 items-start p-3 rounded-xl hover:bg-[#f5f1ea] transition-colors">
                                <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                  <Image src={`https://picsum.photos/seed/${item.imageSeed}/200/150`} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors text-sm">{item.name}</h4>
                                  <p className="text-xs text-[#64748b] line-clamp-2 mt-0.5">{item.desc}</p>
                                  <div className="flex items-center gap-3 mt-1.5">
                                    <span className="inline-flex items-center gap-1 text-[10px] text-[#64748b]"><Clock size={10} />{item.time}</span>
                                    <span className="inline-flex items-center gap-1 text-[10px] text-[#64748b]"><Wallet size={10} />{item.cost}</span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <div className="mt-8 bg-[#af5d32] rounded-2xl p-6 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Want More Options?</h2>
              <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-6">Browse our pre-planned trips or build your own custom itinerary.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/plan-your-trip/preplanned-trips" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#af5d32] font-semibold rounded-xl hover:bg-[#f5f1ea] transition-colors text-sm">Pre-planned Trips <ArrowRight size={16} /></Link>
                <Link href="/plan-your-trip/travel-planner" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm">Custom Planner</Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "essentials" && (
          <div className="space-y-10">
            {/* Know Before You Go */}
            <section>
              <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-6">Know Before You Go</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {knowBeforeCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Link key={card.title} href={card.href} className="group block h-full">
                      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                        <div className="aspect-[3/2] bg-[#f5f1ea] flex items-center justify-center"><Icon className="text-[#1a3a4a]" size={48} /></div>
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

            {/* Local Tips */}
            <section>
              <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-6">Local Tips</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {localTips.map((tip) => {
                  const Icon = tip.icon;
                  return (
                    <Link key={tip.title} href="/destinations/shanghai/local-tips" className="group block h-full">
                      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                        <div className="aspect-[3/2] bg-[#f5f1ea] flex items-center justify-center"><Icon className="text-[#1a3a4a]" size={48} /></div>
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
          </div>
        )}
      </main>
    </div>
  );
}