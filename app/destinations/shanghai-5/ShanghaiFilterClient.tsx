"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search, X, Wifi, CreditCard, TrainFront, Smartphone,
  ShieldCheck, Thermometer, CloudRain, Car, Moon, Map, ArrowRight,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────

const quickInfoPills = [
  { icon: Wifi, label: "Internet:", text: "VPN required" },
  { icon: CreditCard, label: "", text: "Cashless society" },
  { icon: TrainFront, label: "", text: "Excellent metro" },
  { icon: Thermometer, label: "Best:", text: "Mar–May, Sep–Nov" },
];

type FilterTag = "free" | "budget" | "midrange" | "premium" | "historic" | "modern" | "local" | "nightlife" | "family" | "landmark" | "food" | "stay" | "practical";

interface FilterableItem {
  name: string;
  subtitle: string;
  tag?: string;
  imageSeed: string;
  href: string;
  type: "attraction" | "food" | "stay" | "info" | "tip";
  icon?: React.ElementType;
  filters: FilterTag[];
}

const allItems: FilterableItem[] = [
  { name: "The Bund", subtitle: "Shanghai's most iconic waterfront promenade with skyline views.", tag: "Free", imageSeed: "shanghai-bund", href: "/destinations/shanghai/what-to-do/bund", type: "attraction", filters: ["free", "historic", "modern", "nightlife", "landmark"] },
  { name: "Yu Garden", subtitle: "A 400-year-old classical garden surrounded by a lively bazaar.", tag: "¥40", imageSeed: "shanghai-yugarden", href: "/destinations/shanghai/what-to-do/yu-garden", type: "attraction", filters: ["budget", "historic", "family", "landmark"] },
  { name: "French Concession", subtitle: "Tree-lined avenues, Art Deco villas, and charming cafés.", tag: "Free", imageSeed: "shanghai-frenchconcession", href: "/destinations/shanghai/what-to-do/french-concession", type: "attraction", filters: ["free", "local", "historic", "landmark"] },
  { name: "Shanghai Tower", subtitle: "The world's second-tallest building with a jaw-dropping observation deck.", tag: "¥180", imageSeed: "shanghai-tower", href: "/destinations/shanghai/what-to-do/shanghai-tower", type: "attraction", filters: ["premium", "modern", "landmark"] },
  { name: "Tianzifang", subtitle: "Winding alleyways packed with studios, galleries, and craft shops.", tag: "Free", imageSeed: "shanghai-tianzifang", href: "/destinations/shanghai/what-to-do", type: "attraction", filters: ["free", "local", "historic"] },
  { name: "Jade Buddha Temple", subtitle: "Serene Buddhist temple housing two stunning white jade Buddhas.", tag: "¥20", imageSeed: "shanghai-jadebuddha", href: "/destinations/shanghai/what-to-do", type: "attraction", filters: ["budget", "historic", "landmark"] },
  { name: "Xiaolongbao", subtitle: "Shanghai's iconic soup dumplings", tag: "Street Food · ¥30", imageSeed: "xiaolongbao", href: "/destinations/shanghai/where-to-eat/xiaolongbao", type: "food", filters: ["budget", "local", "food"] },
  { name: "Shengjianbao", subtitle: "Pan-fried buns with a crispy bottom", tag: "Street Food · ¥15", imageSeed: "shengjianbao", href: "/destinations/shanghai/where-to-eat/shengjianbao", type: "food", filters: ["budget", "local", "food"] },
  { name: "Hairy Crab", subtitle: "Autumn delicacy from nearby Yangcheng Lake", tag: "Seasonal · ¥200+", imageSeed: "hairy-crab", href: "/destinations/shanghai/where-to-eat/hairy-crab", type: "food", filters: ["premium", "food"] },
  { name: "Scallion Oil Noodles", subtitle: "Simple, fragrant, and deeply comforting", tag: "Restaurant · ¥25–40", imageSeed: "scallion-noodles", href: "/destinations/shanghai/where-to-eat/scallion-oil-noodles", type: "food", filters: ["budget", "local", "food"] },
  { name: "Bund Area", subtitle: "Iconic skyline · Historic architecture · Perfect for first-timers", imageSeed: "shanghai-bund-area", href: "/destinations/shanghai/where-to-stay/bund-area", type: "stay", filters: ["midrange", "historic", "nightlife", "stay"] },
  { name: "French Concession", subtitle: "Cafés & boutiques · Tree-lined streets · Most walkable", imageSeed: "shanghai-french-concession-stay", href: "/destinations/shanghai/where-to-stay/french-concession", type: "stay", filters: ["midrange", "local", "historic", "stay"] },
  { name: "Jing'an", subtitle: "Local life · Metro hub · Central base", imageSeed: "shanghai-jingan", href: "/destinations/shanghai/where-to-stay/jingan", type: "stay", filters: ["budget", "local", "stay"] },
  { name: "Xintiandi", subtitle: "Modern luxury · Nightlife · Sleek dining", imageSeed: "shanghai-xintiandi", href: "/destinations/shanghai/where-to-stay/xintiandi", type: "stay", filters: ["premium", "modern", "nightlife", "stay"] },
  { name: "Internet", subtitle: "VPNs required. Download before landing.", imageSeed: "", href: "/china-basics/how-to-get-internet", type: "info", icon: Wifi, filters: ["practical"] },
  { name: "Payment", subtitle: "Alipay & WeChat Pay dominate. Cash rarely needed.", imageSeed: "", href: "/china-basics/what-apps-to-use/payment", type: "info", icon: CreditCard, filters: ["practical"] },
  { name: "Transport", subtitle: "Metro is excellent. DiDi for taxis.", imageSeed: "", href: "/china-basics/how-to-get-around", type: "info", icon: TrainFront, filters: ["practical"] },
  { name: "Apps", subtitle: "Download Alipay, DiDi, Amap before you go.", imageSeed: "", href: "/china-basics/what-apps-to-use", type: "info", icon: Smartphone, filters: ["practical"] },
  { name: "Visa", subtitle: "Most Western nationals: 15–30 day visa-free or e-visa.", imageSeed: "", href: "/china-basics/how-china-differs/visa-guide", type: "info", icon: ShieldCheck, filters: ["practical"] },
  { name: "Weather", subtitle: "Best time: March–May, September–November.", imageSeed: "", href: "/plan-your-trip/best-time-to-visit", type: "info", icon: Thermometer, filters: ["practical"] },
  { name: "Plum Rain Season", subtitle: "June–July brings muggy, rainy weather. Pack extra socks and a travel umbrella.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: CloudRain, filters: ["practical"] },
  { name: "Taxi Pro Tip", subtitle: "Shanghai taxis are cheap, but drivers rarely speak English. Use DiDi instead.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: Car, filters: ["practical"] },
  { name: "Bund After Dark", subtitle: "The Bund is free and best at night. Skip the overpriced tourist tunnel.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: Moon, filters: ["free", "nightlife", "practical"] },
  { name: "Metro & Maps", subtitle: "Metro stops have English signs. Amap is the best local alternative.", imageSeed: "", href: "/destinations/shanghai/local-tips", type: "tip", icon: Map, filters: ["practical"] },
];

const filterGroups = [
  { label: "Price", filters: [
    { id: "free" as FilterTag, label: "Free" },
    { id: "budget" as FilterTag, label: "Budget ¥1-50" },
    { id: "midrange" as FilterTag, label: "Mid-range ¥50-200" },
    { id: "premium" as FilterTag, label: "Premium ¥200+" },
  ]},
  { label: "Vibe", filters: [
    { id: "historic" as FilterTag, label: "Historic" },
    { id: "modern" as FilterTag, label: "Modern" },
    { id: "local" as FilterTag, label: "Local Life" },
    { id: "nightlife" as FilterTag, label: "Nightlife" },
    { id: "family" as FilterTag, label: "Family-friendly" },
  ]},
];

// ─── Components ────────────────────────────────────────────────────

function PhotoCard({ item }: { item: FilterableItem }) {
  return (
    <Link href={item.href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image src={`https://picsum.photos/seed/${item.imageSeed}/600/400`} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">{item.name}</h3>
            {item.tag && <span className="rounded-full bg-[#f5f1ea] text-[#1a3a4a] text-xs font-semibold px-2 py-0.5 whitespace-nowrap flex-shrink-0">{item.tag}</span>}
          </div>
          <p className="text-sm text-[#64748b] line-clamp-1">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function IconResultCard({ item }: { item: FilterableItem }) {
  const Icon = item.icon || Wifi;
  return (
    <Link href={item.href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="aspect-[3/2] bg-[#f5f1ea] flex items-center justify-center">
          <Icon className="text-[#1a3a4a]" size={48} />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-1">{item.name}</h3>
          <p className="text-sm text-[#64748b] line-clamp-1">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function ResultCard({ item }: { item: FilterableItem }) {
  if (item.type === "info" || item.type === "tip") return <IconResultCard item={item} />;
  return <PhotoCard item={item} />;
}

const typeLabels: Record<string, string> = {
  attraction: "Attraction",
  food: "Food",
  stay: "Neighborhood",
  info: "Practical",
  tip: "Tip",
};

// ─── Page ──────────────────────────────────────────────────────────

export default function ShanghaiFilterClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterTag[]>([]);
  const isFiltering = searchQuery.length > 0 || activeFilters.length > 0;

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) (header as HTMLElement).style.position = "relative";
    return () => { const h = document.querySelector("header"); if (h) (h as HTMLElement).style.position = ""; };
  }, []);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!item.name.toLowerCase().includes(q) && !item.subtitle.toLowerCase().includes(q) && !(item.tag || "").toLowerCase().includes(q)) return false;
      }
      if (activeFilters.length > 0) {
        if (!activeFilters.some((f) => item.filters.includes(f))) return false;
      }
      return true;
    });
  }, [searchQuery, activeFilters]);

  const toggleFilter = (f: FilterTag) => {
    setActiveFilters((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);
  };

  const clearFilters = () => { setSearchQuery(""); setActiveFilters([]); };

  // Group filtered items by type
  const grouped = useMemo(() => {
    const groups: Record<string, FilterableItem[]> = {};
    const order = ["attraction", "food", "stay", "info", "tip"];
    for (const item of filteredItems) {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    }
    return order.filter((t) => groups[t]?.length).map((t) => ({ type: t, label: typeLabels[t], items: groups[t] }));
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image src="https://picsum.photos/seed/shanghai-skyline/1200/500" alt="Shanghai skyline" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-6 md:pb-10 max-w-6xl mx-auto w-full">
            <p className="text-white/80 text-sm md:text-base font-medium mb-1">上海, China</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">Shanghai</h1>
            <p className="text-white/90 text-base md:text-lg max-w-xl">Colonial elegance meets tomorrow&apos;s skyline</p>
          </div>
        </div>
        <div className="bg-[#f5f1ea] border-b border-[#ebe4d8]">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex flex-wrap gap-2 md:gap-3">
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
      </section>

      {/* Search + Filter Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#ebe4d8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <Search className="text-[#64748b] flex-shrink-0" size={20} />
            <input type="text" placeholder='Search Shanghai... (e.g. "bund", "dumplings", "free")' className="flex-1 text-sm text-[#1a3a4a] placeholder:text-[#64748b]/60 outline-none bg-transparent" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {isFiltering && (
              <button onClick={clearFilters} className="flex items-center gap-1 text-xs font-medium text-[#af5d32] hover:underline">
                <X size={14} /> Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {filterGroups.map((group) => (
              <div key={group.label} className="flex items-center gap-1.5">
                <span className="text-xs text-[#64748b] font-medium mr-0.5">{group.label}:</span>
                {group.filters.map((f) => (
                  <button key={f.id} onClick={() => toggleFilter(f.id)} className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${activeFilters.includes(f.id) ? "bg-[#af5d32] text-white" : "bg-[#f5f1ea] text-[#1a3a4a] border border-[#ebe4d8] hover:border-[#af5d32]"}`}>
                    {f.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {isFiltering && (
          <div className="mb-6 text-sm text-[#64748b]">
            Showing {filteredItems.length} of {allItems.length} items
          </div>
        )}

        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <Search className="mx-auto text-[#64748b] mb-4" size={48} />
            <p className="text-[#1a3a4a] font-semibold mb-1">No matches found</p>
            <p className="text-sm text-[#64748b]">Try removing a filter or searching for something else</p>
            <button onClick={clearFilters} className="mt-3 text-sm text-[#af5d32] font-medium hover:underline">Clear all filters</button>
          </div>
        ) : isFiltering ? (
          <div className="space-y-10">
            {grouped.map((group) => (
              <div key={group.type}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-1 bg-[#af5d32] rounded-full" />
                  <h2 className="text-lg font-bold text-[#1a3a4a]">{group.label}</h2>
                  <span className="text-xs text-[#64748b]">({group.items.length})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <ResultCard key={item.name + item.type} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Default: show sections like v5 Overview */
          <div className="space-y-12 md:space-y-16">
            {/* Things to Do */}
            <section>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">Things to Do</h2>
                </div>
                <Link href="/destinations/shanghai/what-to-do" className="text-sm font-medium text-[#af5d32] hover:underline">See all →</Link>
              </div>
              <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
                  {allItems.filter((i) => i.type === "attraction").map((item) => (
                    <div key={item.name} className="w-[260px] md:w-[300px] flex-shrink-0 snap-start">
                      <PhotoCard item={item} />
                    </div>
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
              </div>
            </section>

            {/* Where to Eat */}
            <section>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">Where to Eat</h2>
                </div>
                <Link href="/destinations/shanghai/where-to-eat" className="text-sm font-medium text-[#af5d32] hover:underline">See all →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allItems.filter((i) => i.type === "food").map((item) => (
                  <PhotoCard key={item.name} item={item} />
                ))}
              </div>
            </section>

            {/* Where to Stay */}
            <section>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">Where to Stay</h2>
                </div>
                <Link href="/destinations/shanghai/where-to-stay" className="text-sm font-medium text-[#af5d32] hover:underline">See all →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allItems.filter((i) => i.type === "stay").map((item) => (
                  <PhotoCard key={item.name} item={item} />
                ))}
              </div>
            </section>

            {/* Know Before You Go */}
            <section>
              <div className="mb-4 md:mb-6">
                <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">Know Before You Go</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allItems.filter((i) => i.type === "info").map((item) => (
                  <IconResultCard key={item.name} item={item} />
                ))}
              </div>
            </section>

            {/* Local Tips */}
            <section>
              <div className="mb-4 md:mb-6">
                <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">Local Tips</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allItems.filter((i) => i.type === "tip").map((item) => (
                  <IconResultCard key={item.name} item={item} />
                ))}
              </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-[#af5d32] rounded-2xl p-6 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Plan Your Shanghai Trip</h2>
              <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-6">Get a ready-made itinerary or build your own.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/plan-your-trip/preplanned-trips" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#af5d32] font-semibold rounded-xl hover:bg-[#f5f1ea] transition-colors text-sm">Find Your Perfect Trip <ArrowRight size={16} /></Link>
                <Link href="/plan-your-trip/travel-planner" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm">Plan Your Own Trip</Link>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}