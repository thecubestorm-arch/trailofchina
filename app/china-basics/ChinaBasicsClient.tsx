"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wifi,
  CreditCard,
  TrainFront,
  Smartphone,
  ShieldCheck,
  Lightbulb,
  Map,
  Car,
  ArrowRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────

type Tab = "overview" | "prepare" | "apps-money" | "getting-around" | "know-before";

interface BasicsItem {
  name: string;
  subtitle: string;
  href: string;
  icon: React.ElementType;
}

// ─── Data ───────────────────────────────────────────────────────

const tabs = [
  { id: "overview" as Tab, label: "Overview", mobileLabel: "Overview" },
  { id: "prepare" as Tab, label: "Prepare", mobileLabel: "Prepare" },
  { id: "apps-money" as Tab, label: "Apps & Money", mobileLabel: "Apps" },
  { id: "getting-around" as Tab, label: "Getting Around", mobileLabel: "Transport" },
  { id: "know-before" as Tab, label: "Know Before You Go", mobileLabel: "Tips" },
];

const quickInfoPills = [
  { icon: Wifi, label: "", text: "VPN required" },
  { icon: CreditCard, label: "", text: "Cashless society" },
  { icon: ShieldCheck, label: "", text: "15 days visa-free" },
  { icon: Smartphone, label: "", text: "Download apps before you go" },
];

const prepareItems: BasicsItem[] = [
  {
    name: "Visa Guide",
    subtitle: "Most Western nationals: 15–30 day visa-free or e-visa.",
    href: "/china-basics/how-china-differs/visa-guide",
    icon: ShieldCheck,
  },
  {
    name: "eSIM & Internet",
    subtitle: "No internet = nothing works in China. Set up eSIM before you fly.",
    href: "/china-basics/how-to-get-internet",
    icon: Wifi,
  },
  {
    name: "VPN",
    subtitle: "Google, WhatsApp, Instagram blocked. Install VPN before landing.",
    href: "/china-basics/what-apps-to-use/vpn",
    icon: Smartphone,
  },
  {
    name: "Airalo eSIM",
    subtitle: "Best for short visits. Activate in 5 minutes.",
    href: "/china-basics/how-to-get-internet/airalo-esim",
    icon: Wifi,
  },
  {
    name: "Holafly eSIM",
    subtitle: "Unlimited data plans for 7–30 days.",
    href: "/china-basics/how-to-get-internet/holafly-esim",
    icon: Wifi,
  },
];

const appsMoneyItems: BasicsItem[] = [
  {
    name: "Alipay",
    subtitle: "Your wallet for everything. Pay, ride, order.",
    href: "/china-basics/what-apps-to-use/alipay",
    icon: CreditCard,
  },
  {
    name: "WeChat Pay",
    subtitle: "The other payment app. Set up both.",
    href: "/china-basics/what-apps-to-use/wechat-pay",
    icon: CreditCard,
  },
  {
    name: "Payment Overview",
    subtitle: "Cashless society: how to pay as a foreigner.",
    href: "/china-basics/what-apps-to-use/payment",
    icon: CreditCard,
  },
  {
    name: "Maps",
    subtitle: "Google Maps doesn't work. Use Amap or Apple Maps.",
    href: "/china-basics/what-apps-to-use",
    icon: Map,
  },
  {
    name: "DiDi",
    subtitle: "China's Uber. English interface available.",
    href: "/china-basics/what-apps-to-use",
    icon: Car,
  },
  {
    name: "Trip.com",
    subtitle: "Book trains, flights, hotels all in one app.",
    href: "/china-basics/what-apps-to-use/trip-com",
    icon: TrainFront,
  },
  {
    name: "WeChat",
    subtitle: "Communication app. Everyone in China uses it.",
    href: "/china-basics/what-apps-to-use",
    icon: Smartphone,
  },
];

const gettingAroundItems: BasicsItem[] = [
  {
    name: "Train Tickets (12306)",
    subtitle: "Book bullet train tickets. The official booking platform.",
    href: "/china-basics/how-to-get-around/12306",
    icon: TrainFront,
  },
  {
    name: "Getting Around Overview",
    subtitle: "Metro, taxi, DiDi, bus — how China moves.",
    href: "/china-basics/how-to-get-around",
    icon: TrainFront,
  },
  {
    name: "High-Speed Rail",
    subtitle: "300+ km/h bullet trains between cities.",
    href: "/china-basics/how-to-get-around",
    icon: TrainFront,
  },
  {
    name: "Flights",
    subtitle: "Domestic flights for longer distances.",
    href: "/china-basics/how-to-get-around",
    icon: TrainFront,
  },
  {
    name: "Metro",
    subtitle: "Excellent subway systems in major cities.",
    href: "/china-basics/how-to-get-around",
    icon: TrainFront,
  },
];

const knowBeforeItems: BasicsItem[] = [
  {
    name: "Censorship",
    subtitle: "What's blocked and how to prepare before you go.",
    href: "/china-basics/how-china-differs/censorship",
    icon: ShieldCheck,
  },
  {
    name: "Cultural Differences",
    subtitle: "Behavior, etiquette, and habits that differ from the West.",
    href: "/china-basics/how-china-differs/cultural-differences",
    icon: Lightbulb,
  },
  {
    name: "Safety",
    subtitle: "Is China safe? Short answer: very.",
    href: "/china-basics/how-china-differs/cultural-differences",
    icon: ShieldCheck,
  },
  {
    name: "Passport Rules",
    subtitle: "Always carry your passport. Hotels and trains require it.",
    href: "/china-basics/how-china-differs/cultural-differences",
    icon: ShieldCheck,
  },
];

// ─── Shared Components ──────────────────────────────────────────

function SectionHeader({
  title,
  href,
  hrefLabel = "See all →",
}: {
  title: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="mb-4 md:mb-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">{title}</h2>
        </div>
        {href && (
          <Link
            href={href}
            className="text-sm font-medium text-[#af5d32] hover:underline whitespace-nowrap self-end mb-1"
          >
            {hrefLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

function IconCard({
  href,
  icon: Icon,
  name,
  subtitle,
}: {
  href: string;
  icon: React.ElementType;
  name: string;
  subtitle: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="aspect-square bg-[#f5f1ea] flex items-center justify-center">
          <Icon className="text-[#1a3a4a]" size={48} />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-0.5">
            {name}
          </h3>
          <p className="text-sm text-[#64748b] line-clamp-2">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function FooterCTA() {
  return (
    <section className="bg-[#af5d32] rounded-2xl p-6 md:p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Plan Your China Trip
      </h2>
      <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-6">
        Get a ready-made itinerary or build your own with our travel planner.
        Everything you need for a smooth trip to China.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/plan-your-trip/preplanned-trips"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#af5d32] font-semibold rounded-xl hover:bg-[#f5f1ea] transition-colors text-sm"
        >
          Pre-planned Trips
          <ArrowRight size={16} />
        </Link>
        <Link
          href="/plan-your-trip/travel-planner"
          className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
        >
          Custom Planner
        </Link>
      </div>
    </section>
  );
}

// ─── Section Components ────────────────────────────────────────

function PrepareSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Prepare"
          href="/china-basics/how-to-get-internet"
        />
      )}
      <div
        className={
          expanded
            ? "grid grid-cols-2 sm:grid-cols-4 gap-3"
            : "relative"
        }
      >
        {!expanded && (
          <>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {prepareItems.map((item) => (
                <div
                  key={item.name}
                  className="w-[260px] md:w-[300px] flex-shrink-0 snap-start"
                >
                  <IconCard {...item} />
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
          </>
        )}
        {expanded &&
          prepareItems.map((item) => (
            <IconCard key={item.name} {...item} />
          ))}
      </div>
    </section>
  );
}

function AppsMoneySection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Apps & Money"
          href="/china-basics/what-apps-to-use"
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {appsMoneyItems.map((item) => (
          <IconCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

function GettingAroundSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Getting Around"
          href="/china-basics/how-to-get-around"
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {gettingAroundItems.map((item) => (
          <IconCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

function KnowBeforeSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Know Before You Go"
          href="/china-basics/how-china-differs"
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {knowBeforeItems.map((item) => (
          <IconCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

// ─── Main Component ─────────────────────────────────────────────

export default function ChinaBasicsClient() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // Hide the main site navbar on this hub page
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      (header as HTMLElement).style.position = "relative";
    }
    return () => {
      const h = document.querySelector("header");
      if (h) (h as HTMLElement).style.position = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO ========== */}
      <section className="relative w-full">
        <div className="relative h-[380px] md:h-[500px] w-full overflow-hidden">
          <Image
            src="https://picsum.photos/seed/china-travel-prepare/1200/500"
            alt="China travel preparation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 md:pb-12 max-w-6xl mx-auto w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-3 tracking-tight">
              China Basics
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-xl">
              Everything you need to know before your first trip
            </p>
          </div>
        </div>

        {/* Quick Info Pills */}
        <div className="bg-[#f5f1ea] border-b border-[#ebe4d8]">
          <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {quickInfoPills.map((pill) => (
                <span
                  key={pill.text}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm text-[#1a3a4a] bg-white border border-[#ebe4d8] rounded-full px-3 py-1.5"
                >
                  <pill.icon size={14} className="text-[#1a3a4a]" />
                  {pill.label && (
                    <span className="font-semibold">{pill.label}</span>
                  )}
                  <span>{pill.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== STICKY TAB NAV ========== */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#ebe4d8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-3 md:px-4 py-2 text-sm whitespace-nowrap min-h-[44px] flex items-center transition-colors cursor-pointer
                    ${
                      isActive
                        ? "text-[#1a3a4a] font-semibold bg-[#f5f1ea]/50 rounded-t-lg border-b-[3px] border-[#af5d32]"
                        : "text-[#64748b] font-medium hover:text-[#1a3a4a] border-b-[3px] border-transparent"
                    }
                  `}
                >
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.mobileLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {activeTab === "overview" && (
          <div className="space-y-8 md:space-y-10">
            {/* Prepare — horizontal scroll carousel */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">
                    Prepare
                  </h2>
                </div>
                <Link
                  href="/china-basics/how-to-get-internet"
                  className="text-sm font-medium text-[#af5d32] hover:underline whitespace-nowrap self-end mb-1"
                >
                  See all →
                </Link>
              </div>
              <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
                  {prepareItems.map((item) => (
                    <div
                      key={item.name}
                      className="w-[260px] md:w-[300px] flex-shrink-0 snap-start"
                    >
                      <IconCard {...item} />
                    </div>
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
              </div>
            </div>

            {/* Apps & Money — compact grid */}
            <AppsMoneySection expanded />

            {/* Getting Around */}
            <GettingAroundSection expanded />

            {/* Know Before You Go */}
            <KnowBeforeSection expanded />

            {/* Footer CTA */}
            <FooterCTA />
          </div>
        )}

        {activeTab === "prepare" && (
          <div className="space-y-8 md:space-y-10">
            <PrepareSection expanded />
            <FooterCTA />
          </div>
        )}

        {activeTab === "apps-money" && (
          <div className="space-y-8 md:space-y-10">
            <AppsMoneySection expanded />
            <FooterCTA />
          </div>
        )}

        {activeTab === "getting-around" && (
          <div className="space-y-8 md:space-y-10">
            <GettingAroundSection expanded />
            <FooterCTA />
          </div>
        )}

        {activeTab === "know-before" && (
          <div className="space-y-8 md:space-y-10">
            <KnowBeforeSection expanded />
            <FooterCTA />
          </div>
        )}
      </main>
    </div>
  );
}
