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
import type { MarkerLocation } from "../shanghai/types";

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
    text: "Excellent metro",
  },
  {
    icon: Thermometer,
    label: "Best:",
    text: "Mar–May, Sep–Nov",
  },
];

const attractions = [
  {
    id: "bund",
    markerId: "bund",
    name: "The Bund",
    hook: "Shanghai's most iconic waterfront promenade with skyline views.",
    tag: "Free",
    imageSeed: "shanghai-bund",
    href: "/destinations/shanghai/what-to-do/bund",
  },
  {
    id: "yu-garden",
    markerId: "yu-garden",
    name: "Yu Garden",
    hook: "A 400-year-old classical garden surrounded by a lively bazaar.",
    tag: "¥40",
    imageSeed: "shanghai-yugarden",
    href: "/destinations/shanghai/what-to-do/yu-garden",
  },
  {
    id: "french-concession",
    markerId: "french-concession",
    name: "French Concession",
    hook: "Tree-lined avenues, Art Deco villas, and charming cafés.",
    tag: "Free",
    imageSeed: "shanghai-frenchconcession",
    href: "/destinations/shanghai/what-to-do/french-concession",
  },
  {
    id: "shanghai-tower",
    markerId: "shanghai-tower",
    name: "Shanghai Tower",
    hook: "The world's second-tallest building with a jaw-dropping observation deck.",
    tag: "¥180",
    imageSeed: "shanghai-tower",
    href: "/destinations/shanghai/what-to-do/shanghai-tower",
  },
  {
    id: "tianzifang",
    markerId: "tianzifang",
    name: "Tianzifang",
    hook: "Winding alleyways packed with studios, galleries, and craft shops.",
    tag: "Free",
    imageSeed: "shanghai-tianzifang",
    href: "/destinations/shanghai/what-to-do",
  },
  {
    id: "jade-buddha",
    markerId: "jade-buddha",
    name: "Jade Buddha Temple",
    hook: "Serene Buddhist temple housing two stunning white jade Buddhas.",
    tag: "¥20",
    imageSeed: "shanghai-jadebuddha",
    href: "/destinations/shanghai/what-to-do",
  },
];

const foodCards = [
  {
    id: "xiaolongbao",
    markerId: "xiaolongbao",
    name: "Xiaolongbao",
    sub: "Shanghai's iconic soup dumplings",
    tag: "Street Food · ¥30",
    imageSeed: "xiaolongbao",
    href: "/destinations/shanghai/where-to-eat/xiaolongbao",
  },
  {
    id: "shengjianbao",
    markerId: "shengjianbao",
    name: "Shengjianbao",
    sub: "Pan-fried buns with a crispy bottom",
    tag: "Street Food · ¥15",
    imageSeed: "shengjianbao",
    href: "/destinations/shanghai/where-to-eat/shengjianbao",
  },
  {
    id: "hairy-crab",
    markerId: "hairy-crab",
    name: "Hairy Crab",
    sub: "Autumn delicacy from nearby Yangcheng Lake",
    tag: "Seasonal · ¥200+",
    imageSeed: "hairy-crab",
    href: "/destinations/shanghai/where-to-eat/hairy-crab",
  },
  {
    id: "scallion-oil-noodles",
    markerId: "scallion-oil-noodles",
    name: "Scallion Oil Noodles",
    sub: "Simple, fragrant, and deeply comforting",
    tag: "Restaurant · ¥25–40",
    imageSeed: "scallion-noodles",
    href: "/destinations/shanghai/where-to-eat/scallion-oil-noodles",
  },
];

const neighborhoods = [
  {
    id: "bund-area",
    markerId: "bund",
    name: "Bund Area",
    vibe: "Iconic skyline · Historic architecture",
    desc: "Perfect for first-timers who want postcard views and easy river access.",
    imageSeed: "shanghai-bund-area",
    href: "/destinations/shanghai/where-to-stay/bund-area",
  },
  {
    id: "french-concession-stay",
    markerId: "french-concession",
    name: "French Concession",
    vibe: "Cafés & boutiques · Tree-lined streets",
    desc: "The most walkable neighborhood with strong metro links and charm.",
    imageSeed: "shanghai-french-concession-stay",
    href: "/destinations/shanghai/where-to-stay/french-concession",
  },
  {
    id: "jingan",
    markerId: "jingan",
    name: "Jing'an",
    vibe: "Local life · Metro hub",
    desc: "A central, down-to-earth base with top transport connections.",
    imageSeed: "shanghai-jingan",
    href: "/destinations/shanghai/where-to-stay/jingan",
  },
  {
    id: "xintiandi",
    markerId: "xintiandi",
    name: "Xintiandi",
    vibe: "Modern luxury · Nightlife",
    desc: "Sleek dining, high-end hotels, and a polished night-out scene.",
    imageSeed: "shanghai-xintiandi",
    href: "/destinations/shanghai/where-to-stay/xintiandi",
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
    text: "Alipay & WeChat Pay dominate. Cash rarely needed.",
    href: "/china-basics/what-apps-to-use/payment",
  },
  {
    icon: TrainFront,
    title: "Transport",
    text: "Metro is excellent. DiDi for taxis.",
    href: "/china-basics/how-to-get-around",
  },
  {
    icon: Smartphone,
    title: "Apps",
    text: "Download Alipay, DiDi, Amap before you go.",
    href: "/china-basics/what-apps-to-use",
  },
  {
    icon: ShieldCheck,
    title: "Visa",
    text: "Most Western nationals: 15–30 day visa-free or e-visa.",
    href: "/china-basics/how-china-differs/visa-guide",
  },
  {
    icon: Thermometer,
    title: "Weather",
    text: "Best time: March–May, September–November.",
    href: "/plan-your-trip/best-time-to-visit",
  },
];

const localTips = [
  {
    title: "Plum Rain Season",
    text: "June–July brings muggy, rainy weather. Clothes never dry. Pack extra socks and a travel umbrella.",
    icon: CloudRain,
  },
  {
    title: "Taxi Pro Tip",
    text: "Shanghai taxis are cheap, but drivers rarely speak English. Use DiDi with English interface instead.",
    icon: Car,
  },
  {
    title: "Bund After Dark",
    text: "The Bund is free and best at night. Skip the overpriced tourist tunnel — walk or take the metro instead.",
    icon: Moon,
  },
  {
    title: "Metro & Maps",
    text: "Metro stops have English signs. Google Maps works with a VPN; Amap is the best local alternative.",
    icon: Map,
  },
];

const allItems: FilterableItem[] = [
  // Attractions
  { id: "bund-attraction", markerId: "bund", name: "The Bund", subtitle: "Shanghai's most iconic waterfront promenade with skyline views.", tag: "Free", imageSeed: "shanghai-bund", href: "/destinations/shanghai/what-to-do/bund", type: "attraction", filters: ["free", "historic", "modern", "nightlife", "landmark"] },
  { id: "yu-garden-attraction", markerId: "yu-garden", name: "Yu Garden", subtitle: "A 400-year-old classical garden surrounded by a lively bazaar.", tag: "¥40", imageSeed: "shanghai-yugarden", href: "/destinations/shanghai/what-to-do/yu-garden", type: "attraction", filters: ["budget", "historic", "family", "landmark"] },
  { id: "french-concession-attraction", markerId: "french-concession", name: "French Concession", subtitle: "Tree-lined avenues, Art Deco villas, and charming cafés.", tag: "Free", imageSeed: "shanghai-frenchconcession", href: "/destinations/shanghai/what-to-do/french-concession", type: "attraction", filters: ["free", "local", "historic", "landmark"] },
  { id: "shanghai-tower-attraction", markerId: "shanghai-tower", name: "Shanghai Tower", subtitle: "The world's second-tallest building with a jaw-dropping observation deck.", tag: "¥180", imageSeed: "shanghai-tower", href: "/destinations/shanghai/what-to-do/shanghai-tower", type: "attraction", filters: ["premium", "modern", "landmark"] },
  { id: "tianzifang-attraction", markerId: "tianzifang", name: "Tianzifang", subtitle: "Winding alleyways packed with studios, galleries, and craft shops.", tag: "Free", imageSeed: "shanghai-tianzifang", href: "/destinations/shanghai/what-to-do", type: "attraction", filters: ["free", "local", "historic"] },
  { id: "jade-buddha-attraction", markerId: "jade-buddha", name: "Jade Buddha Temple", subtitle: "Serene Buddhist temple housing two stunning white jade Buddhas.", tag: "¥20", imageSeed: "shanghai-jadebuddha", href: "/destinations/shanghai/what-to-do", type: "attraction", filters: ["budget", "historic", "landmark"] },
  // Food
  { id: "xiaolongbao-food", markerId: "xiaolongbao", name: "Xiaolongbao", subtitle: "Shanghai's iconic soup dumplings", tag: "Street Food · ¥30", imageSeed: "xiaolongbao", href: "/destinations/shanghai/where-to-eat/xiaolongbao", type: "food", filters: ["budget", "local", "food"] },
  { id: "shengjianbao-food", markerId: "shengjianbao", name: "Shengjianbao", subtitle: "Pan-fried buns with a crispy bottom", tag: "Street Food · ¥15", imageSeed: "shengjianbao", href: "/destinations/shanghai/where-to-eat/shengjianbao", type: "food", filters: ["budget", "local", "food"] },
  { id: "hairy-crab-food", markerId: "hairy-crab", name: "Hairy Crab", subtitle: "Autumn delicacy from nearby Yangcheng Lake", tag: "Seasonal · ¥200+", imageSeed: "hairy-crab", href: "/destinations/shanghai/where-to-eat/hairy-crab", type: "food", filters: ["premium", "food"] },
  { id: "scallion-noodles-food", markerId: "scallion-oil-noodles", name: "Scallion Oil Noodles", subtitle: "Simple, fragrant, and deeply comforting", tag: "Restaurant · ¥25–40", imageSeed: "scallion-noodles", href: "/destinations/shanghai/where-to-eat/scallion-oil-noodles", type: "food", filters: ["budget", "local", "food"] },
  // Stay
  { id: "bund-area-stay", markerId: "bund", name: "Bund Area", subtitle: "Iconic skyline · Historic architecture · Perfect for first-timers", imageSeed: "shanghai-bund-area", href: "/destinations/shanghai/where-to-stay/bund-area", type: "stay", filters: ["midrange", "historic", "nightlife", "stay"] },
  { id: "french-concession-stay", markerId: "french-concession", name: "French Concession", subtitle: "Cafés & boutiques · Tree-lined streets · Most walkable", imageSeed: "shanghai-french-concession-stay", href: "/destinations/shanghai/where-to-stay/french-concession", type: "stay", filters: ["midrange", "local", "historic", "stay"] },
  { id: "jingan-stay", markerId: "jingan", name: "Jing'an", subtitle: "Local life · Metro hub · Central base", imageSeed: "shanghai-jingan", href: "/destinations/shanghai/where-to-stay/jingan", type: "stay", filters: ["budget", "local", "stay"] },
  { id: "xintiandi-stay", markerId: "xintiandi", name: "Xintiandi", subtitle: "Modern luxury · Nightlife · Sleek dining", imageSeed: "shanghai-xintiandi", href: "/destinations/shanghai/where-to-stay/xintiandi", type: "stay", filters: ["premium", "modern", "nightlife", "stay"] },
  // Info
  { id: "info-internet", name: "Internet", subtitle: "VPNs required. Download before landing.", imageSeed: "", href: "/china-basics/how-to-get-internet", type: "info", icon: Wifi, filters: ["practical"] },
  { id: "info-payment", name: "Payment", subtitle: "Alipay & WeChat Pay dominate. Cash rarely needed.", imageSeed: "", href: "/china-basics/what-apps-to-use/payment", type: "info", icon: CreditCard, filters: ["practical"] },
  { id: "info-transport", name: "Transport", subtitle: "Metro is excellent. DiDi for taxis.", imageSeed: "", href: "/china-basics/how-to-get-around", type: "info", icon: TrainFront, filters: ["practical"] },
  { id: "info-apps", name: "Apps", subtitle: "Download Alipay, DiDi, Amap before you go.", imageSeed: "", href: "/china-basics/what-apps-to-use", type: "info", icon: Smartphone, filters: ["practical"] },
  { id: "info-visa", name: "Visa", subtitle: "Most Western nationals: 15–30 day visa-free or e-visa.", imageSeed: "", href: "/china-basics/how-china-differs/visa-guide", type: "info", icon: ShieldCheck, filters: ["practical"] },
  { id: "info-weather", name: "Weather", subtitle: "Best time: March–May, September–November.", imageSeed: "", href: "/plan-your-trip/best-time-to-visit", type: "info", icon: Thermometer, filters: ["practical"] },
  // Tips
  { id: "tip-plum-rain", name: "Plum Rain Season", subtitle: "June–July brings muggy, rainy weather. Pack extra socks and a travel umbrella.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: CloudRain, filters: ["practical"] },
  { id: "tip-taxi", name: "Taxi Pro Tip", subtitle: "Shanghai taxis are cheap, but drivers rarely speak English. Use DiDi with English interface instead.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: Car, filters: ["practical"] },
  { id: "tip-bund-night", name: "Bund After Dark", subtitle: "The Bund is free and best at night. Skip the overpriced tourist tunnel — walk or take the metro instead.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: Moon, filters: ["free", "nightlife", "practical"] },
  { id: "tip-metro-maps", name: "Metro & Maps", subtitle: "Metro stops have English signs. Google Maps works with a VPN; Amap is the best local alternative.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: Map, filters: ["practical"] },
];

const mapMarkers: MarkerLocation[] = [
  {
    id: "bund",
    name: "The Bund",
    lat: 31.24,
    lng: 121.49,
    categories: ["attraction", "stay"],
  },
  {
    id: "yu-garden",
    name: "Yu Garden",
    lat: 31.227,
    lng: 121.492,
    categories: ["attraction"],
  },
  {
    id: "french-concession",
    name: "French Concession",
    lat: 31.21,
    lng: 121.46,
    categories: ["attraction", "stay"],
  },
  {
    id: "shanghai-tower",
    name: "Shanghai Tower",
    lat: 31.2355,
    lng: 121.5015,
    categories: ["attraction"],
  },
  {
    id: "tianzifang",
    name: "Tianzifang",
    lat: 31.203,
    lng: 121.468,
    categories: ["attraction"],
  },
  {
    id: "jade-buddha",
    name: "Jade Buddha Temple",
    lat: 31.223,
    lng: 121.442,
    categories: ["attraction"],
  },
  {
    id: "xiaolongbao",
    name: "Xiaolongbao",
    lat: 31.225,
    lng: 121.475,
    categories: ["eat"],
  },
  {
    id: "shengjianbao",
    name: "Shengjianbao",
    lat: 31.238,
    lng: 121.488,
    categories: ["eat"],
  },
  {
    id: "hairy-crab",
    name: "Hairy Crab",
    lat: 31.215,
    lng: 121.49,
    categories: ["eat"],
  },
  {
    id: "scallion-oil-noodles",
    name: "Scallion Oil Noodles",
    lat: 31.232,
    lng: 121.455,
    categories: ["eat"],
  },
  {
    id: "jingan",
    name: "Jing'an",
    lat: 31.234,
    lng: 121.446,
    categories: ["stay"],
  },
  {
    id: "xintiandi",
    name: "Xintiandi",
    lat: 31.219,
    lng: 121.475,
    categories: ["stay"],
  },
];

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
    dayTitle: "Day 1: The Classics",
    timeOfDay: "morning",
    items: [
      { name: "The Bund", href: "/destinations/shanghai/what-to-do/bund", time: "1–2h", cost: "Free", imageSeed: "shanghai-bund", desc: "Start at dawn for empty walkways and soft light on the skyline." },
      { name: "Yu Garden", href: "/destinations/shanghai/what-to-do/yu-garden", time: "1–2h", cost: "¥40", imageSeed: "shanghai-yugarden", desc: "Ancient garden and bazaar. Go early before the crowds." },
    ],
  },
  {
    dayTitle: "Day 1: The Classics",
    timeOfDay: "afternoon",
    items: [
      { name: "Xiaolongbao Lunch", href: "/destinations/shanghai/where-to-eat/xiaolongbao", time: "1h", cost: "¥30–60", imageSeed: "xiaolongbao", desc: "Hit a local spot near Yu Garden for Shanghai's famous soup dumplings." },
      { name: "French Concession", href: "/destinations/shanghai/what-to-do/french-concession", time: "2–3h", cost: "Free", imageSeed: "shanghai-frenchconcession", desc: "Stroll tree-lined streets, browse boutiques, stop for coffee." },
      { name: "Tianzifang", href: "/destinations/shanghai/what-to-do", time: "1–2h", cost: "Free", imageSeed: "shanghai-tianzifang", desc: "Artsy alleys with galleries and craft shops. Easy walk from French Concession." },
    ],
  },
  {
    dayTitle: "Day 1: The Classics",
    timeOfDay: "evening",
    items: [
      { name: "Bund at Night", href: "/destinations/shanghai/what-to-do/bund", time: "1h", cost: "Free", imageSeed: "shanghai-bund-night", desc: "The Bund transforms after dark. Pudong's skyline lights up across the river." },
      { name: "Xintiandi Dinner", href: "/destinations/shanghai/where-to-stay/xintiandi", time: "2h", cost: "¥150–300", imageSeed: "shanghai-xintiandi-dinner", desc: "Sleek dining in restored shikumen houses. End the day in style." },
    ],
  },
  {
    dayTitle: "Day 2: Modern Shanghai",
    timeOfDay: "morning",
    items: [
      { name: "Shanghai Tower", href: "/destinations/shanghai/what-to-do/shanghai-tower", time: "1–2h", cost: "¥180", imageSeed: "shanghai-tower", desc: "World's second-tallest building. Observation deck with panoramic views." },
      { name: "Jade Buddha Temple", href: "/destinations/shanghai/what-to-do", time: "1h", cost: "¥20", imageSeed: "shanghai-jadebuddha", desc: "Peaceful temple with two stunning jade Buddha statues." },
    ],
  },
  {
    dayTitle: "Day 2: Modern Shanghai",
    timeOfDay: "afternoon",
    items: [
      { name: "Jing'an", href: "/destinations/shanghai/where-to-stay/jingan", time: "2–3h", cost: "Free", imageSeed: "shanghai-jingan", desc: "Local life, street food, and the beautiful Jing'an Temple." },
      { name: "Scallion Noodles", href: "/destinations/shanghai/where-to-eat/scallion-oil-noodles", time: "45min", cost: "¥25–40", imageSeed: "scallion-noodles", desc: "Simple, fragrant comfort food at a neighborhood shop." },
    ],
  },
  {
    dayTitle: "Day 2: Modern Shanghai",
    timeOfDay: "evening",
    items: [
      { name: "Bund Area Nightlife", href: "/destinations/shanghai/where-to-stay/bund-area", time: "2h+", cost: "Varies", imageSeed: "shanghai-bund-nightlife", desc: "Rooftop bars with skyline views or riverside drinks." },
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
const shanghaiGallerySeeds = [
  "shanghai-bund",
  "shanghai-yugarden",
  "shanghai-frenchconcession",
  "shanghai-tower",
  "shanghai-tianzifang",
  "shanghai-jadebuddha",
  "shanghai-bund-night",
  "shanghai-nanjing-road",
  "shanghai-skyline",
  "shanghai-huangpu",
  "shanghai-lujiazui",
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
          A 2-day plan covering the essentials. Mix, match, or extend to your
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
          const dayNumber = dayTitle.includes("1") ? "1" : "2";
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
          title="Things to Do in Shanghai"
          href="/destinations/shanghai/what-to-do"
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
        href="/destinations/shanghai/where-to-eat"
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
        href="/destinations/shanghai/where-to-stay"
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
        href="/destinations/shanghai/local-tips"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {localTips.map((tip) => (
          <CompactIconCard
            key={tip.title}
            href="/destinations/shanghai/local-tips"
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

export default function ShanghaiSuperClient() {
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
    const total = shanghaiGallerySeeds.length;
    if (total <= 5) return shanghaiGallerySeeds.map((_, index) => index);

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
            {shanghaiGallerySeeds.map((seed, index) => (
              <div
                key={seed}
                className="relative h-full basis-[82%] shrink-0 snap-start md:basis-1/2 lg:basis-[74%]"
              >
                <Image
                  src={`https://picsum.photos/seed/${seed}/1600/900`}
                  alt={`Shanghai gallery image ${index + 1}`}
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
              aria-label="Scroll Shanghai gallery left"
            >
              <ChevronLeft size={20} className="md:h-[22px] md:w-[22px]" />
            </button>
          )}
          {heroCanScrollRight && (
            <button
              type="button"
              onClick={() => heroGalleryRef.current?.scrollBy({ left: 640, behavior: "smooth" })}
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1a3a4a] shadow-xl transition hover:bg-white md:h-12 md:w-12 md:right-6 lg:right-16"
              aria-label="Scroll Shanghai gallery right"
            >
              <ChevronRight size={20} className="md:h-[22px] md:w-[22px]" />
            </button>
          )}
          <div className="pointer-events-none absolute bottom-5 left-4 z-10 max-w-[min(18rem,calc(100vw-4.5rem))] md:bottom-9 md:left-12 md:max-w-[min(32rem,calc(100vw-8rem))]">
            <p className="mb-1 text-xs font-medium text-white/80 md:text-base">
              上海, China
            </p>
            <h1 className="mb-1.5 text-3xl font-bold tracking-tight text-white md:mb-3 md:text-6xl">
              Shanghai
            </h1>
            <p className="text-xs text-white/90 md:text-lg">
              Colonial elegance meets tomorrow&apos;s skyline
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2.5 md:bottom-7 md:gap-2">
            {visibleHeroDots.map((index) => (
              <button
                key={`${shanghaiGallerySeeds[index]}-dot`}
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
                aria-label={`Go to Shanghai gallery image ${index + 1}`}
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
                placeholder='Filter Shanghai... (e.g. "bund", "dumplings", "free")'
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
                  href="/destinations/shanghai/what-to-do"
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
              title="Ready to Explore Shanghai?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7–14 days recommended", description: "Most travelers spend 5–7 days in Shanghai" },
                { icon: Sun, title: "Best time: Mar–May, Sep–Nov", description: "Mild weather, fewer crowds" },
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
              title="Ready to Explore Shanghai?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7–14 days recommended", description: "Most travelers spend 5–7 days in Shanghai" },
                { icon: Sun, title: "Best time: Mar–May, Sep–Nov", description: "Mild weather, fewer crowds" },
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
              title="Ready to Explore Shanghai?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7–14 days recommended", description: "Most travelers spend 5–7 days in Shanghai" },
                { icon: Sun, title: "Best time: Mar–May, Sep–Nov", description: "Mild weather, fewer crowds" },
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
              title="Ready to Explore Shanghai?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7–14 days recommended", description: "Most travelers spend 5–7 days in Shanghai" },
                { icon: Sun, title: "Best time: Mar–May, Sep–Nov", description: "Mild weather, fewer crowds" },
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
              title="Ready to Explore Shanghai?"
              subtitle="From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip."
              quickInfo={[
                { icon: Calendar, title: "7–14 days recommended", description: "Most travelers spend 5–7 days in Shanghai" },
                { icon: Sun, title: "Best time: Mar–May, Sep–Nov", description: "Mild weather, fewer crowds" },
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
