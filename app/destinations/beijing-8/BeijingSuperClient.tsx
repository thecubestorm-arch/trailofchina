"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Wifi,
  CreditCard,
  TrainFront,
  Smartphone,
  ShieldCheck,
  Thermometer,
  Lightbulb,
  CloudRain,
  Car,
  Calendar,
  Moon,
  Map,
  List,
  ArrowRight,
  Search,
  X,
  SlidersHorizontal,
  Sunrise,
  Sun,
  Sunset,
  Clock,
  Wallet,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import FooterCTA from "@/components/FooterCTA";
import { markers as beijingMarkers } from "../beijing/data/attractions";
import type { MarkerLocation } from "../beijing/types";

const MapViewSection = dynamic(
  () => import("./MapViewSection"),
  { ssr: false }
);

// ─── Types ────────────────────────────────────────────────────────

type Tab =
  | "overview"
  | "things-to-do"
  | "where-to-eat"
  | "where-to-stay"
  | "essentials";

type FilterTag =
  | "free"
  | "budget"
  | "midrange"
  | "premium"
  | "historic"
  | "modern"
  | "local"
  | "nightlife"
  | "family"
  | "landmark"
  | "food"
  | "stay"
  | "practical";

interface FilterableItem {
  id: string;
  markerId?: string;
  name: string;
  subtitle: string;
  tag?: string;
  imageSeed: string;
  href: string;
  type: "attraction" | "food" | "stay" | "info" | "tip";
  icon?: React.ElementType;
  filters: FilterTag[];
}

interface ItineraryStop {
  name: string;
  href: string;
  time: string;
  cost: string;
  imageSeed: string;
  desc: string;
}

interface ItineraryBlock {
  dayTitle: string;
  timeOfDay: "morning" | "afternoon" | "evening";
  items: ItineraryStop[];
}

// ─── Data ───────────────────────────────────────────────────────

const tabs = [
  { id: "overview" as Tab, label: "Overview", mobileLabel: "Overview" },
  { id: "things-to-do" as Tab, label: "Things to Do", mobileLabel: "To Do" },
  { id: "where-to-eat" as Tab, label: "Where to Eat", mobileLabel: "Eat" },
  { id: "where-to-stay" as Tab, label: "Where to Stay", mobileLabel: "Stay" },
  { id: "essentials" as Tab, label: "Essentials", mobileLabel: "Essentials" },
];

const quickInfoPills = [
  {
    icon: Wifi,
    label: "Internet:",
    text: "VPN required",
  },
  {
    icon: CreditCard,
    label: "",
    text: "Cashless society",
  },
  {
    icon: TrainFront,
    label: "",
    text: "Metro + DiDi",
  },
  {
    icon: Thermometer,
    label: "Best:",
    text: "Apr–May, Sep–Oct",
  },
];

const attractions = [
  {
    id: "forbidden-city",
    markerId: "forbidden-city",
    name: "Forbidden City",
    hook: "The world's largest palace complex — 600 years of imperial history in 980 buildings.",
    tag: "¥60",
    imageSeed: "beijing-forbidden-city",
    href: "/destinations/beijing/what-to-do/forbidden-city",
  },
  {
    id: "great-wall",
    markerId: "great-wall",
    name: "Great Wall (Mutianyu)",
    hook: "The best-preserved section near Beijing. Less crowded than Badaling, stunning mountain scenery.",
    tag: "¥40",
    imageSeed: "beijing-great-wall",
    href: "/destinations/beijing/what-to-do/great-wall",
  },
  {
    id: "temple-of-heaven",
    markerId: "temple-of-heaven",
    name: "Temple of Heaven",
    hook: "Where emperors prayed for harvests. The circular Hall of Prayer is iconic.",
    tag: "¥15",
    imageSeed: "beijing-temple-of-heaven",
    href: "/destinations/beijing/what-to-do/temple-of-heaven",
  },
  {
    id: "summer-palace",
    markerId: "summer-palace",
    name: "Summer Palace",
    hook: "Imperial garden with Kunming Lake, Long Corridor, and hilltop temples.",
    tag: "¥30",
    imageSeed: "beijing-summer-palace",
    href: "/destinations/beijing/what-to-do/summer-palace",
  },
  {
    id: "hutong",
    markerId: "hutong",
    name: "Hutong Alleys",
    hook: "Beijing's ancient alleyway neighborhoods — courtyard homes, local life, hidden cafés.",
    tag: "Free",
    imageSeed: "beijing-hutong",
    href: "/destinations/beijing/what-to-do/hutong",
  },
  {
    id: "lama-temple",
    markerId: "lama-temple",
    name: "Lama Temple",
    hook: "Tibetan Buddhist temple with a 26m carved sandalwood Maitreya Buddha.",
    tag: "¥25",
    imageSeed: "beijing-lama-temple",
    href: "/destinations/beijing/what-to-do/lama-temple",
  },
];

const foodCards = [
  {
    id: "peking-duck",
    markerId: "peking-duck",
    name: "Peking Duck",
    sub: "Beijing's signature roast duck",
    tag: "Premium · ¥150+",
    imageSeed: "beijing-peking-duck",
    href: "/destinations/beijing/where-to-eat/peking-duck",
  },
  {
    id: "jianbing",
    markerId: "jianbing",
    name: "Jianbing",
    sub: "Savory breakfast crepe",
    tag: "Street Food · ¥8",
    imageSeed: "beijing-jianbing",
    href: "/destinations/beijing/where-to-eat/jianbing",
  },
  {
    id: "zhajiangmian",
    markerId: "zhajiangmian",
    name: "Zhajiangmian",
    sub: "Noodles with fermented bean sauce",
    tag: "Restaurant · ¥25",
    imageSeed: "beijing-zhajiangmian",
    href: "/destinations/beijing/where-to-eat/zhajiangmian",
  },
  {
    id: "lamb-skewers",
    markerId: "lamb-skewers",
    name: "Lamb Skewers",
    sub: "Cumin-spiced street BBQ",
    tag: "Street Food · ¥15",
    imageSeed: "beijing-lamb-skewers",
    href: "/destinations/beijing/where-to-eat/lamb-skewers",
  },
];

const neighborhoods = [
  {
    id: "dongcheng-hutong",
    markerId: "dongcheng-hutong",
    name: "Dongcheng Hutong",
    vibe: "Old Beijing · Courtyard stays",
    desc: "Authentic hutong courtyard stays near Forbidden City.",
    imageSeed: "beijing-dongcheng-hutong",
    href: "/destinations/beijing/where-to-stay/dongcheng-hutong",
  },
  {
    id: "wangfujing",
    markerId: "wangfujing",
    name: "Wangfujing",
    vibe: "Shopping · Central",
    desc: "Prime shopping street, walking distance to major sights.",
    imageSeed: "beijing-wangfujing",
    href: "/destinations/beijing/where-to-stay/wangfujing",
  },
  {
    id: "sanlitun",
    markerId: "sanlitun",
    name: "Sanlitun",
    vibe: "Nightlife · Expat hub",
    desc: "Modern bars, international dining, and embassies.",
    imageSeed: "beijing-sanlitun",
    href: "/destinations/beijing/where-to-stay/sanlitun",
  },
  {
    id: "haidian",
    markerId: "haidian",
    name: "Haidian",
    vibe: "University · Tech",
    desc: "Peking University area, quieter and affordable.",
    imageSeed: "beijing-haidian",
    href: "/destinations/beijing/where-to-stay/haidian",
  },
];

const knowBeforeCards = [
  {
    icon: Wifi,
    title: "Internet",
    text: "VPNs required. Download before landing.",
    href: "/china-basics/how-to-get-internet",
  },
  {
    icon: CreditCard,
    title: "Payment",
    text: "Alipay & WeChat Pay everywhere.",
    href: "/china-basics/what-apps-to-use/payment",
  },
  {
    icon: TrainFront,
    title: "Transport",
    text: "Metro + DiDi. Avoid rush hour.",
    href: "/china-basics/how-to-get-around",
  },
  {
    icon: Smartphone,
    title: "Apps",
    text: "Alipay, DiDi, Amap, 12306 for trains.",
    href: "/china-basics/what-apps-to-use",
  },
  {
    icon: ShieldCheck,
    title: "Visa",
    text: "15-30 day visa-free for most Western nationals.",
    href: "/china-basics/how-china-differs/visa-guide",
  },
  {
    icon: Thermometer,
    title: "Weather",
    text: "Best: Apr-May, Sep-Oct. Avoid national holidays.",
    href: "/plan-your-trip/best-time-to-visit",
  },
];

const localTips = [
  {
    title: "Forbidden City Tickets",
    text: "Book 7 days in advance. Same-day tickets sold out by 8 AM.",
    icon: Calendar,
  },
  {
    title: "Great Wall Timing",
    text: "Mutianyu is less crowded. Go early — buses fill up by 9 AM.",
    icon: Sunrise,
  },
  {
    title: "Sandstorm Season",
    text: "Spring sandstorms (March–May) can turn the sky orange. Bring a mask.",
    icon: CloudRain,
  },
  {
    title: "Taxi vs DiDi",
    text: "Taxi drivers rarely speak English. DiDi with English UI is safer.",
    icon: Car,
  },
];

const allItems: FilterableItem[] = [
  // Attractions
  { id: "forbidden-city-attraction", markerId: "forbidden-city", name: "Forbidden City", subtitle: "The world's largest palace complex — 600 years of imperial history in 980 buildings.", tag: "¥60", imageSeed: "beijing-forbidden-city", href: "/destinations/beijing/what-to-do/forbidden-city", type: "attraction", filters: ["midrange", "historic", "family", "landmark"] },
  { id: "great-wall-attraction", markerId: "great-wall", name: "Great Wall (Mutianyu)", subtitle: "The best-preserved section near Beijing. Less crowded than Badaling, stunning mountain scenery.", tag: "¥40", imageSeed: "beijing-great-wall", href: "/destinations/beijing/what-to-do/great-wall", type: "attraction", filters: ["budget", "historic", "family", "landmark"] },
  { id: "temple-of-heaven-attraction", markerId: "temple-of-heaven", name: "Temple of Heaven", subtitle: "Where emperors prayed for harvests. The circular Hall of Prayer is iconic.", tag: "¥15", imageSeed: "beijing-temple-of-heaven", href: "/destinations/beijing/what-to-do/temple-of-heaven", type: "attraction", filters: ["budget", "historic", "landmark"] },
  { id: "summer-palace-attraction", markerId: "summer-palace", name: "Summer Palace", subtitle: "Imperial garden with Kunming Lake, Long Corridor, and hilltop temples.", tag: "¥30", imageSeed: "beijing-summer-palace", href: "/destinations/beijing/what-to-do/summer-palace", type: "attraction", filters: ["budget", "historic", "family", "landmark"] },
  { id: "hutong-attraction", markerId: "hutong", name: "Hutong Alleys", subtitle: "Beijing's ancient alleyway neighborhoods — courtyard homes, local life, hidden cafés.", tag: "Free", imageSeed: "beijing-hutong", href: "/destinations/beijing/what-to-do/hutong", type: "attraction", filters: ["free", "local", "historic"] },
  { id: "lama-temple-attraction", markerId: "lama-temple", name: "Lama Temple", subtitle: "Tibetan Buddhist temple with a 26m carved sandalwood Maitreya Buddha.", tag: "¥25", imageSeed: "beijing-lama-temple", href: "/destinations/beijing/what-to-do/lama-temple", type: "attraction", filters: ["budget", "historic", "landmark"] },
  // Food
  { id: "peking-duck-food", markerId: "peking-duck", name: "Peking Duck", subtitle: "Beijing's signature roast duck", tag: "Premium · ¥150+", imageSeed: "beijing-peking-duck", href: "/destinations/beijing/where-to-eat/peking-duck", type: "food", filters: ["premium", "food"] },
  { id: "jianbing-food", markerId: "jianbing", name: "Jianbing", subtitle: "Savory breakfast crepe", tag: "Street Food · ¥8", imageSeed: "beijing-jianbing", href: "/destinations/beijing/where-to-eat/jianbing", type: "food", filters: ["budget", "local", "food"] },
  { id: "zhajiangmian-food", markerId: "zhajiangmian", name: "Zhajiangmian", subtitle: "Noodles with fermented bean sauce", tag: "Restaurant · ¥25", imageSeed: "beijing-zhajiangmian", href: "/destinations/beijing/where-to-eat/zhajiangmian", type: "food", filters: ["budget", "local", "food"] },
  { id: "lamb-skewers-food", markerId: "lamb-skewers", name: "Lamb Skewers", subtitle: "Cumin-spiced street BBQ", tag: "Street Food · ¥15", imageSeed: "beijing-lamb-skewers", href: "/destinations/beijing/where-to-eat/lamb-skewers", type: "food", filters: ["budget", "local", "food"] },
  // Stay
  { id: "dongcheng-hutong-stay", markerId: "dongcheng-hutong", name: "Dongcheng Hutong", subtitle: "Old Beijing · Courtyard stays · Near Forbidden City", imageSeed: "beijing-dongcheng-hutong", href: "/destinations/beijing/where-to-stay/dongcheng-hutong", type: "stay", filters: ["midrange", "local", "historic", "stay"] },
  { id: "wangfujing-stay", markerId: "wangfujing", name: "Wangfujing", subtitle: "Shopping · Central · Walking distance to major sights", imageSeed: "beijing-wangfujing", href: "/destinations/beijing/where-to-stay/wangfujing", type: "stay", filters: ["midrange", "modern", "stay"] },
  { id: "sanlitun-stay", markerId: "sanlitun", name: "Sanlitun", subtitle: "Nightlife · Expat hub · Modern bars and dining", imageSeed: "beijing-sanlitun", href: "/destinations/beijing/where-to-stay/sanlitun", type: "stay", filters: ["premium", "modern", "nightlife", "stay"] },
  { id: "haidian-stay", markerId: "haidian", name: "Haidian", subtitle: "University · Tech · Quieter and affordable", imageSeed: "beijing-haidian", href: "/destinations/beijing/where-to-stay/haidian", type: "stay", filters: ["budget", "local", "stay"] },
  // Info
  { id: "info-internet", name: "Internet", subtitle: "VPNs required. Download before landing.", imageSeed: "", href: "/china-basics/how-to-get-internet", type: "info", icon: Wifi, filters: ["practical"] },
  { id: "info-payment", name: "Payment", subtitle: "Alipay & WeChat Pay everywhere.", imageSeed: "", href: "/china-basics/what-apps-to-use/payment", type: "info", icon: CreditCard, filters: ["practical"] },
  { id: "info-transport", name: "Transport", subtitle: "Metro + DiDi. Avoid rush hour.", imageSeed: "", href: "/china-basics/how-to-get-around", type: "info", icon: TrainFront, filters: ["practical"] },
  { id: "info-apps", name: "Apps", subtitle: "Alipay, DiDi, Amap, 12306 for trains.", imageSeed: "", href: "/china-basics/what-apps-to-use", type: "info", icon: Smartphone, filters: ["practical"] },
  { id: "info-visa", name: "Visa", subtitle: "15-30 day visa-free for most Western nationals.", imageSeed: "", href: "/china-basics/how-china-differs/visa-guide", type: "info", icon: ShieldCheck, filters: ["practical"] },
  { id: "info-weather", name: "Weather", subtitle: "Best: Apr-May, Sep-Oct. Avoid national holidays.", imageSeed: "", href: "/plan-your-trip/best-time-to-visit", type: "info", icon: Thermometer, filters: ["practical"] },
  // Tips
  { id: "tip-forbidden-city", name: "Forbidden City Tickets", subtitle: "Book 7 days in advance. Same-day tickets sold out by 8 AM.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: Calendar, filters: ["practical"] },
  { id: "tip-great-wall", name: "Great Wall Timing", subtitle: "Mutianyu is less crowded. Go early — buses fill up by 9 AM.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: Sunrise, filters: ["practical"] },
  { id: "tip-sandstorm", name: "Sandstorm Season", subtitle: "Spring sandstorms (March–May) can turn the sky orange. Bring a mask.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: CloudRain, filters: ["practical"] },
  { id: "tip-didi", name: "Taxi vs DiDi", subtitle: "Taxi drivers rarely speak English. DiDi with English UI is safer.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: Car, filters: ["practical"] },
];

const mapMarkers: MarkerLocation[] = beijingMarkers;

const filterGroups = [
  {
    label: "Price",
    filters: [
      { id: "free" as FilterTag, label: "Free" },
      { id: "budget" as FilterTag, label: "Budget ¥1-50" },
      { id: "midrange" as FilterTag, label: "Mid-range ¥50-200" },
      { id: "premium" as FilterTag, label: "Premium ¥200+" },
    ],
  },
  {
    label: "Vibe",
    filters: [
      { id: "historic" as FilterTag, label: "Historic" },
      { id: "modern" as FilterTag, label: "Modern" },
      { id: "local" as FilterTag, label: "Local Life" },
      { id: "nightlife" as FilterTag, label: "Nightlife" },
      { id: "family" as FilterTag, label: "Family-friendly" },
    ],
  },
];

const itineraryBlocks: ItineraryBlock[] = [
  {
    dayTitle: "Day 1: Imperial Heart",
    timeOfDay: "morning",
    items: [
      { name: "Forbidden City", href: "/destinations/beijing/what-to-do/forbidden-city", time: "2–3h", cost: "¥60", imageSeed: "beijing-forbidden-city", desc: "Start early to beat the security lines and cover the main palace axis before the midday crowds." },
    ],
  },
  {
    dayTitle: "Day 1: Imperial Heart",
    timeOfDay: "afternoon",
    items: [
      { name: "Temple of Heaven", href: "/destinations/beijing/what-to-do/temple-of-heaven", time: "1.5h", cost: "¥15", imageSeed: "beijing-temple-of-heaven", desc: "Walk the temple grounds and see the Hall of Prayer for Good Harvests in the softer afternoon light." },
    ],
  },
  {
    dayTitle: "Day 1: Imperial Heart",
    timeOfDay: "evening",
    items: [
      { name: "Wangfujing Street Food Walk", href: "/destinations/beijing/where-to-eat", time: "2h", cost: "Varies", imageSeed: "beijing-wangfujing", desc: "Sample snacks and take in central Beijing after dark on one of the city's busiest pedestrian streets." },
    ],
  },
  {
    dayTitle: "Day 2: Great Wall Day",
    timeOfDay: "morning",
    items: [
      { name: "Mutianyu Great Wall", href: "/destinations/beijing/what-to-do/great-wall", time: "4–5h", cost: "¥40", imageSeed: "beijing-great-wall", desc: "Choose Mutianyu for a better-preserved section, mountain views, and a calmer experience than Badaling." },
    ],
  },
  {
    dayTitle: "Day 2: Great Wall Day",
    timeOfDay: "afternoon",
    items: [
      { name: "Return + Rest", href: "/destinations/beijing/what-to-do/great-wall", time: "2–3h", cost: "Free", imageSeed: "beijing-great-wall", desc: "Head back into the city, rest up, and avoid overpacking the day after an early Great Wall start." },
    ],
  },
  {
    dayTitle: "Day 2: Great Wall Day",
    timeOfDay: "evening",
    items: [
      { name: "Houhai Lake Bars", href: "/destinations/beijing/what-to-do", time: "2h+", cost: "Varies", imageSeed: "beijing-hutong", desc: "Relax around the lake with low-key bars and an easy old-Beijing evening atmosphere." },
    ],
  },
  {
    dayTitle: "Day 3: Local Beijing",
    timeOfDay: "morning",
    items: [
      { name: "Hutong Walking Tour", href: "/destinations/beijing/what-to-do/hutong", time: "2–3h", cost: "Free", imageSeed: "beijing-hutong", desc: "Explore courtyard lanes, local shops, and slower neighborhood life in the old city." },
    ],
  },
  {
    dayTitle: "Day 3: Local Beijing",
    timeOfDay: "afternoon",
    items: [
      { name: "Summer Palace", href: "/destinations/beijing/what-to-do/summer-palace", time: "2–3h", cost: "¥30", imageSeed: "beijing-summer-palace", desc: "Spend the afternoon by Kunming Lake, then climb for a wider view over the imperial gardens." },
    ],
  },
  {
    dayTitle: "Day 3: Local Beijing",
    timeOfDay: "evening",
    items: [
      { name: "Peking Duck Dinner", href: "/destinations/beijing/where-to-eat/peking-duck", time: "2h", cost: "¥150+", imageSeed: "beijing-peking-duck", desc: "Finish with Beijing's signature feast: lacquered skin, pancakes, and all the classic fixings." },
    ],
  },
];

const typeLabels: Record<string, string> = {
  attraction: "Attraction",
  food: "Food",
  stay: "Neighborhood",
  info: "Practical",
  tip: "Tip",
};

const timeIcons = { morning: Sunrise, afternoon: Sun, evening: Sunset };
const timeLabels = { morning: "Morning", afternoon: "Afternoon", evening: "Evening" };
const beijingGallerySeeds = [
  "beijing-forbidden-city",
  "beijing-great-wall",
  "beijing-temple-of-heaven",
  "beijing-summer-palace",
  "beijing-hutong",
  "beijing-lama-temple",
  "beijing-798-art",
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

function PhotoCard({
  href,
  imageSeed,
  title,
  subtitle,
  tag,
  alt,
}: {
  href: string;
  imageSeed: string;
  title: string;
  subtitle: string;
  tag?: string;
  alt: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${imageSeed}/600/400`}
            alt={alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">
              {title}
            </h3>
            {tag && (
              <span className="rounded-full bg-[#f5f1ea] text-[#1a3a4a] text-xs font-semibold px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                {tag}
              </span>
            )}
          </div>
          <p className="text-sm text-[#64748b] line-clamp-1">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function CompactPhotoCard({
  href,
  imageSeed,
  title,
  subtitle,
  tag,
  alt,
}: {
  href: string;
  imageSeed: string;
  title: string;
  subtitle: string;
  tag?: string;
  alt: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${imageSeed}/600/450`}
            alt={alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <h3 className="text-sm font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">
              {title}
            </h3>
            {tag && (
              <span className="rounded-full bg-[#f5f1ea] text-[#1a3a4a] text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                {tag}
              </span>
            )}
          </div>
          <p className="text-xs text-[#64748b] line-clamp-1">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function CompactIconCard({
  href,
  icon: Icon,
  title,
  subtitle,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="aspect-square bg-[#f5f1ea] flex items-center justify-center">
          <Icon className="text-[#1a3a4a]" size={40} />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-0.5 truncate">
            {title}
          </h3>
          <p className="text-xs text-[#64748b] line-clamp-1">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function CompactResultCard({ item }: { item: FilterableItem }) {
  if (item.type === "info" || item.type === "tip") {
    const Icon = item.icon || Map;
    return (
      <Link href={item.href} className="group block h-full">
        <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
          <div className="aspect-square bg-[#f5f1ea] flex items-center justify-center">
            <Icon className="text-[#1a3a4a]" size={40} />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-0.5 truncate">
              {item.name}
            </h3>
            <p className="text-xs text-[#64748b] line-clamp-1">{item.subtitle}</p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link href={item.href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${item.imageSeed}/600/450`}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <h3 className="text-sm font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">
              {item.name}
            </h3>
            {item.tag && (
              <span className="rounded-full bg-[#f5f1ea] text-[#1a3a4a] text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                {item.tag}
              </span>
            )}
          </div>
          <p className="text-xs text-[#64748b] line-clamp-1">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

// ─── Itinerary Section ──────────────────────────────────────────

function ItinerarySection() {
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());

  const toggleDay = (day: string) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const days = itineraryBlocks.reduce<Record<string, ItineraryBlock[]>>(
    (acc, block) => {
      if (!acc[block.dayTitle]) acc[block.dayTitle] = [];
      acc[block.dayTitle].push(block);
      return acc;
    },
    {}
  );

  return (
    <section>
      <div className="mb-4 md:mb-6">
        <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-2">
          Suggested Itinerary
        </h2>
        <p className="text-sm text-[#64748b]">
          A 3-day plan covering the essentials. Mix, match, or extend to your
          pace.
        </p>
      </div>
      <div className="space-y-4">
        {Object.entries(days).map(([dayTitle, periods]) => {
          const isExpanded = expandedDays.has(dayTitle);
          const totalStops = periods.reduce(
            (sum, p) => sum + p.items.length,
            0
          );
          const dayNumber = dayTitle.match(/Day (\d+)/)?.[1] ?? "1";
          return (
            <div
              key={dayTitle}
              className="border border-[#ebe4d8] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleDay(dayTitle)}
                className="w-full flex items-center justify-between p-4 md:p-5 bg-[#f5f1ea] hover:bg-[#ebe4d8] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#af5d32] flex items-center justify-center text-white font-bold text-sm">
                    {dayNumber}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[#1a3a4a]">{dayTitle}</h3>
                    <p className="text-xs text-[#64748b]">
                      {totalStops} stops · {periods.length} time blocks
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp size={20} className="text-[#64748b]" />
                ) : (
                  <ChevronDown size={20} className="text-[#64748b]" />
                )}
              </button>
              {isExpanded && (
                <div className="divide-y divide-[#ebe4d8]">
                  {periods.map((period, pi) => {
                    const TimeIcon = timeIcons[period.timeOfDay];
                    return (
                      <div key={pi} className="p-4 md:p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <TimeIcon size={16} className="text-[#af5d32]" />
                          <span className="text-sm font-semibold text-[#af5d32]">
                            {timeLabels[period.timeOfDay]}
                          </span>
                        </div>
                        <div className="space-y-3">
                          {period.items.map((item, ii) => (
                            <Link
                              key={ii}
                              href={item.href}
                              className="group flex gap-4 items-start p-3 rounded-xl hover:bg-[#f5f1ea] transition-colors"
                            >
                              <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={`https://picsum.photos/seed/${item.imageSeed}/200/150`}
                                  alt={item.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors text-sm">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-[#64748b] line-clamp-2 mt-0.5">
                                  {item.desc}
                                </p>
                                <div className="flex items-center gap-3 mt-1.5">
                                  <span className="inline-flex items-center gap-1 text-[10px] text-[#64748b]">
                                    <Clock size={10} />
                                    {item.time}
                                  </span>
                                  <span className="inline-flex items-center gap-1 text-[10px] text-[#64748b]">
                                    <Wallet size={10} />
                                    {item.cost}
                                  </span>
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
          );
        })}
      </div>
    </section>
  );
}

// ─── Section Components ─────────────────────────────────────────

function ThingsToDoSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Things to Do in Beijing"
          href="/destinations/beijing/what-to-do"
        />
      )}
      <div
        className={
          expanded
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide"
        }
      >
        {attractions.map((attr) => (
          <div
            key={attr.name}
            className={
              expanded
                ? ""
                : "w-[260px] md:w-[300px] flex-shrink-0 snap-start"
            }
          >
            <PhotoCard
              href={attr.href}
              imageSeed={attr.imageSeed}
              title={attr.name}
              subtitle={attr.hook}
              tag={attr.tag}
              alt={attr.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function WhereToEatSection() {
  return (
    <section>
      <SectionHeader
        title="Where to Eat"
        href="/destinations/beijing/where-to-eat"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {foodCards.map((food) => (
          <CompactPhotoCard
            key={food.name}
            href={food.href}
            imageSeed={food.imageSeed}
            title={food.name}
            subtitle={food.sub}
            tag={food.tag}
            alt={food.name}
          />
        ))}
      </div>
    </section>
  );
}

function WhereToStaySection() {
  return (
    <section>
      <SectionHeader
        title="Where to Stay"
        href="/destinations/beijing/where-to-stay"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {neighborhoods.map((n) => (
          <CompactPhotoCard
            key={n.name}
            href={n.href}
            imageSeed={n.imageSeed}
            title={n.name}
            subtitle={n.vibe}
            alt={n.name}
          />
        ))}
      </div>
    </section>
  );
}

function KnowBeforeYouGoSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
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
          <SectionHeader title="Know Before You Go" />
        </>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {knowBeforeCards.map((card) => (
          <CompactIconCard
            key={card.title}
            href={card.href}
            icon={card.icon}
            title={card.title}
            subtitle={card.text}
          />
        ))}
      </div>
    </section>
  );
}

function LocalTipsSection() {
  return (
    <section>
      <SectionHeader
        title="Local Tips"
        href="/destinations/beijing/local-tips"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {localTips.map((tip) => (
          <CompactIconCard
            key={tip.title}
            href="/destinations/beijing/local-tips"
            icon={tip.icon}
            title={tip.title}
            subtitle={tip.text}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Main Component ─────────────────────────────────────────────

export default function BeijingSuperClient() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [isMapView, setIsMapView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterTag[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [heroGalleryScrollLeft, setHeroGalleryScrollLeft] = useState(0);
  const [heroCanScrollLeft, setHeroCanScrollLeft] = useState(false);
  const [heroCanScrollRight, setHeroCanScrollRight] = useState(true);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const thingsToDoScrollRef = useRef<HTMLDivElement>(null);
  const heroGalleryRef = useRef<HTMLDivElement>(null);
  const isFiltering = searchQuery.length > 0 || activeFilters.length > 0;

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

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !item.name.toLowerCase().includes(q) &&
          !item.subtitle.toLowerCase().includes(q) &&
          !(item.tag || "").toLowerCase().includes(q)
        )
          return false;
      }
      if (activeFilters.length > 0) {
        if (!activeFilters.some((f) => item.filters.includes(f))) return false;
      }
      return true;
    });
  }, [searchQuery, activeFilters]);

  const toggleFilter = (f: FilterTag) => {
    setActiveFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilters([]);
  };

  const grouped = useMemo(() => {
    const groups: Record<string, FilterableItem[]> = {};
    const order = ["attraction", "food", "stay", "info", "tip"];
    for (const item of filteredItems) {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    }
    return order
      .filter((t) => groups[t]?.length)
      .map((t) => ({ type: t, label: typeLabels[t], items: groups[t] }));
  }, [filteredItems]);

  const visibleHeroDots = useMemo(() => {
    const total = beijingGallerySeeds.length;
    if (total <= 5) return beijingGallerySeeds.map((_, index) => index);

    const start = Math.min(
      Math.max(activeHeroImage - 2, 0),
      total - 5
    );

    return Array.from({ length: 5 }, (_, offset) => start + offset);
  }, [activeHeroImage]);

  const handleHoverEnter = useCallback((key: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredItem(key);
  }, []);

  const handleHoverLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const updateHeroGalleryState = useCallback(() => {
    const container = heroGalleryRef.current;
    if (!container) return;

    const nextScrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const slides = Array.from(container.children) as HTMLElement[];

    setHeroGalleryScrollLeft(nextScrollLeft);
    setHeroCanScrollLeft(nextScrollLeft > 4);
    setHeroCanScrollRight(nextScrollLeft < maxScrollLeft - 4);

    if (slides.length === 0) return;

    let closestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - nextScrollLeft);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveHeroImage(closestIndex);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      updateHeroGalleryState();
    });

    window.addEventListener("resize", updateHeroGalleryState);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateHeroGalleryState);
    };
  }, [updateHeroGalleryState]);

  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO ========== */}
      <section className="relative w-full">
        <div className="relative group/hero">
          <div
            ref={heroGalleryRef}
            onScroll={updateHeroGalleryState}
            data-scroll-left={heroGalleryScrollLeft > 0 ? "true" : "false"}
            className="flex h-[280px] snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide overscroll-x-contain [-webkit-overflow-scrolling:touch] md:h-[400px]"
          >
            {beijingGallerySeeds.map((seed, index) => (
              <div
                key={seed}
                className="relative h-full basis-[82%] shrink-0 snap-start md:basis-1/2 lg:basis-[74%]"
              >
                <Image
                  src={`https://picsum.photos/seed/${seed}/1600/900`}
                  alt={`Beijing gallery image ${index + 1}`}
                  fill
                  priority={index < 2}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#09131a]/55 via-[#09131a]/18 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#09131a]/70 via-[#09131a]/30 to-transparent md:h-40" />
          {heroCanScrollLeft && (
            <button
              type="button"
              onClick={() => heroGalleryRef.current?.scrollBy({ left: -640, behavior: "smooth" })}
              className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1a3a4a] shadow-xl transition hover:bg-white md:h-12 md:w-12 md:left-6 lg:left-16"
              aria-label="Scroll Beijing gallery left"
            >
              <ChevronLeft size={20} className="md:h-[22px] md:w-[22px]" />
            </button>
          )}
          {heroCanScrollRight && (
            <button
              type="button"
              onClick={() => heroGalleryRef.current?.scrollBy({ left: 640, behavior: "smooth" })}
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1a3a4a] shadow-xl transition hover:bg-white md:h-12 md:w-12 md:right-6 lg:right-16"
              aria-label="Scroll Beijing gallery right"
            >
              <ChevronRight size={20} className="md:h-[22px] md:w-[22px]" />
            </button>
          )}
          <div className="pointer-events-none absolute bottom-5 left-4 z-10 max-w-[min(18rem,calc(100vw-4.5rem))] md:bottom-9 md:left-12 md:max-w-[min(32rem,calc(100vw-8rem))]">
            <p className="mb-1 text-xs font-medium text-white/80 md:text-base">
              北京, China
            </p>
            <h1 className="mb-1.5 text-3xl font-bold tracking-tight text-white md:mb-3 md:text-6xl">
              Beijing
            </h1>
            <p className="text-xs text-white/90 md:text-lg">
              Imperial grandeur, hutong life, and wall-top views
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2.5 md:bottom-7 md:gap-2">
            {visibleHeroDots.map((index) => (
              <button
                key={`${beijingGallerySeeds[index]}-dot`}
                type="button"
                onClick={() => {
                  const slide = heroGalleryRef.current?.children[index] as HTMLElement | undefined;
                  slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
                }}
                className={`rounded-full transition-all ${
                  activeHeroImage === index
                    ? "h-2 w-4 bg-[#af5d32] md:h-2.5 md:w-6"
                    : "h-2 w-2 bg-white/55 md:h-2.5 md:w-2.5"
                }`}
                aria-label={`Go to Beijing gallery image ${index + 1}`}
              />
            ))}
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

      {/* ========== STICKY TAB NAV + SEARCH/FILTER ========== */}
      <div className="sticky top-0 z-40 bg-white border-b border-[#ebe4d8] shadow-sm">
        {/* Tab Nav */}
        <div className="relative z-50 max-w-6xl mx-auto px-4">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            <div className="flex flex-1 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => {
                const isActive = !isMapView && activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setIsMapView(false);
                      setActiveTab(tab.id);
                    }}
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
            {/* Map View Toggle */}
            <button
              onClick={() => setIsMapView((v) => !v)}
              className={`ml-2 flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isMapView
                  ? "bg-[#1a3a4a] text-white"
                  : "bg-[#f5f1ea] text-[#1a3a4a] hover:bg-[#ebe4d8]"
              }`}
            >
              {isMapView ? <List size={16} /> : <Map size={16} />}
              <span className="hidden md:inline">
                {isMapView ? "List View" : "Map View"}
              </span>
              <span className="md:hidden">{isMapView ? "List" : "Map"}</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="relative z-40 border-t border-[#ebe4d8]">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center gap-3 mb-3">
              <SlidersHorizontal className="text-[#64748b] flex-shrink-0" size={20} />
              <input
                type="text"
                placeholder='Filter Beijing... (e.g. "forbidden", "duck", "free")'
                className="flex-1 text-sm text-[#1a3a4a] placeholder:text-[#64748b]/60 outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {isFiltering && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs font-medium text-[#af5d32] hover:underline"
                >
                  <X size={14} /> Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {filterGroups.map((group) => (
                <div key={group.label} className="flex items-center gap-1.5">
                  <span className="text-xs text-[#64748b] font-medium mr-0.5">
                    {group.label}:
                  </span>
                  {group.filters.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => toggleFilter(f.id)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                        activeFilters.includes(f.id)
                          ? "bg-[#af5d32] text-white"
                          : "bg-[#f5f1ea] text-[#1a3a4a] border border-[#ebe4d8] hover:border-[#af5d32]"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {isMapView && (
          <div className="space-y-4">
            <MapViewSection
              allItems={allItems}
              markers={mapMarkers}
              searchQuery={searchQuery}
              activeFilters={activeFilters}
              hoveredItem={hoveredItem}
              onHoverEnter={handleHoverEnter}
              onHoverLeave={handleHoverLeave}
            />
          </div>
        )}

        {!isMapView && isFiltering && (
          <>
            <div className="mb-6 text-sm text-[#64748b]">
              Showing {filteredItems.length} of {allItems.length} items
            </div>
            {filteredItems.length === 0 ? (
              <div className="text-center py-16">
                <SlidersHorizontal className="mx-auto text-[#64748b] mb-4" size={48} />
                <p className="text-[#1a3a4a] font-semibold mb-1">
                  No matches found
                </p>
                <p className="text-sm text-[#64748b]">
                  Try removing a filter or searching for something else
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-sm text-[#af5d32] font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {grouped.map((group) => (
                  <div key={group.type}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-1 bg-[#af5d32] rounded-full" />
                      <h2 className="text-lg font-bold text-[#1a3a4a]">
                        {group.label}
                      </h2>
                      <span className="text-xs text-[#64748b]">
                        ({group.items.length})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {group.items.map((item) => (
                        <CompactResultCard
                          key={item.name + item.type}
                          item={item}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {!isMapView && !isFiltering && activeTab === "overview" && (
          <div className="space-y-8 md:space-y-10">
            {/* Things to Do - horizontal scroll */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">
                    Things to Do
                  </h2>
                </div>
                <Link
                  href="/destinations/beijing/what-to-do"
                  className="text-sm font-medium text-[#af5d32] hover:underline whitespace-nowrap self-end mb-1"
                >
                  See all →
                </Link>
              </div>
              <div className="relative group/scroll">
                <div ref={thingsToDoScrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth">
                  {attractions.map((attr) => (
                    <div
                      key={attr.name}
                      className="w-[260px] md:w-[300px] flex-shrink-0 snap-start"
                    >
                      <PhotoCard
                        href={attr.href}
                        imageSeed={attr.imageSeed}
                        title={attr.name}
                        subtitle={attr.hook}
                        tag={attr.tag}
                        alt={attr.name}
                      />
                    </div>
                  ))}
                </div>
                {/* Left scroll arrow */}
                <button
                  onClick={() => thingsToDoScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 border border-[#ebe4d8] shadow-md flex items-center justify-center text-[#1a3a4a] hover:bg-white hover:shadow-lg transition-all opacity-0 group-hover/scroll:opacity-100 md:opacity-0"
                  aria-label="Scroll left"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                {/* Right scroll arrow */}
                <button
                  onClick={() => thingsToDoScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 border border-[#ebe4d8] shadow-md flex items-center justify-center text-[#1a3a4a] hover:bg-white hover:shadow-lg transition-all opacity-0 group-hover/scroll:opacity-100 md:opacity-0"
                  aria-label="Scroll right"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
                <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
              </div>
            </div>

            {/* Suggested Itinerary */}
            <ItinerarySection />

            {/* Where to Eat */}
            <WhereToEatSection />

            {/* Where to Stay */}
            <WhereToStaySection />

            {/* Know Before You Go */}
            <KnowBeforeYouGoSection expanded />

            {/* Local Tips */}
            <LocalTipsSection />

            {/* Footer CTA */}
            <FooterCTA
              title="Ready to Explore Beijing?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7-14 days recommended", description: "Most travelers spend 7-14 days in Beijing" },
                { icon: Sun, title: "Best time: Apr-May, Sep-Oct", description: "Mild weather, fewer crowds" },
                { icon: Lightbulb, title: "First time?", description: "Start with our", link: { href: "/plan-your-trip/preplanned-trips", label: "7-day route" } },
              ]}
              trustText="Trusted by 1,000+ China travelers · Free itineraries · Local tips"
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "things-to-do" && (
          <div className="space-y-8 md:space-y-10">
            <ThingsToDoSection expanded />
            <FooterCTA
              title="Ready to Explore Beijing?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7-14 days recommended", description: "Most travelers spend 7-14 days in Beijing" },
                { icon: Sun, title: "Best time: Apr-May, Sep-Oct", description: "Mild weather, fewer crowds" },
                { icon: Lightbulb, title: "First time?", description: "Start with our", link: { href: "/plan-your-trip/preplanned-trips", label: "7-day route" } },
              ]}
              trustText="Trusted by 1,000+ China travelers · Free itineraries · Local tips"
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "where-to-eat" && (
          <div className="space-y-8 md:space-y-10">
            <WhereToEatSection />
            <FooterCTA
              title="Ready to Explore Beijing?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7-14 days recommended", description: "Most travelers spend 7-14 days in Beijing" },
                { icon: Sun, title: "Best time: Apr-May, Sep-Oct", description: "Mild weather, fewer crowds" },
                { icon: Lightbulb, title: "First time?", description: "Start with our", link: { href: "/plan-your-trip/preplanned-trips", label: "7-day route" } },
              ]}
              trustText="Trusted by 1,000+ China travelers · Free itineraries · Local tips"
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "where-to-stay" && (
          <div className="space-y-8 md:space-y-10">
            <WhereToStaySection />
            <FooterCTA
              title="Ready to Explore Beijing?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7-14 days recommended", description: "Most travelers spend 7-14 days in Beijing" },
                { icon: Sun, title: "Best time: Apr-May, Sep-Oct", description: "Mild weather, fewer crowds" },
                { icon: Lightbulb, title: "First time?", description: "Start with our", link: { href: "/plan-your-trip/preplanned-trips", label: "7-day route" } },
              ]}
              trustText="Trusted by 1,000+ China travelers · Free itineraries · Local tips"
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "essentials" && (
          <div className="space-y-8 md:space-y-10">
            <KnowBeforeYouGoSection expanded />
            <LocalTipsSection />
            <FooterCTA
              title="Ready to Explore Beijing?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7-14 days recommended", description: "Most travelers spend 7-14 days in Beijing" },
                { icon: Sun, title: "Best time: Apr-May, Sep-Oct", description: "Mild weather, fewer crowds" },
                { icon: Lightbulb, title: "First time?", description: "Start with our", link: { href: "/plan-your-trip/preplanned-trips", label: "7-day route" } },
              ]}
              trustText="Trusted by 1,000+ China travelers · Free itineraries · Local tips"
            />
          </div>
        )}
      </main>
    </div>
  );
}
