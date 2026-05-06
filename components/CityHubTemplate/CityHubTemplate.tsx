"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Lightbulb,
  List,
  Map,
  SlidersHorizontal,
  Sun,
  Sunrise,
  Sunset,
  Wallet,
  X,
} from "lucide-react";
import FooterCTA from "@/components/FooterCTA";
import type { CityHubConfig, FilterTag, Tab } from "./types";

const CityMapView = dynamic(() => import("./CityMapView"), { ssr: false });

const tabs = [
  { id: "overview" as Tab, label: "Overview", mobileLabel: "Overview" },
  { id: "things-to-do" as Tab, label: "Things to Do", mobileLabel: "To Do" },
  { id: "where-to-eat" as Tab, label: "Where to Eat", mobileLabel: "Eat" },
  { id: "where-to-stay" as Tab, label: "Where to Stay", mobileLabel: "Stay" },
  { id: "essentials" as Tab, label: "Essentials", mobileLabel: "Essentials" },
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

const typeLabels: Record<string, string> = {
  attraction: "Attraction",
  food: "Food",
  stay: "Neighborhood",
  info: "Practical",
  tip: "Tip",
};

const timeIcons = { morning: Sunrise, afternoon: Sun, evening: Sunset };
const timeLabels = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
};

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
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-2 md:mb-3 h-1 w-6 md:w-8 rounded-full bg-[#af5d32]" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a3a4a] leading-tight">
            {title}
          </h2>
        </div>
        {href && (
          <Link
            href={href}
            className="mb-1 self-end whitespace-nowrap text-sm font-medium text-[#af5d32] hover:underline flex-shrink-0"
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
      <div className="h-full overflow-hidden rounded-xl border border-[#ebe4d8] bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98] md:active:scale-100">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${imageSeed}/600/400`}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-3 md:p-4">
          <div className="mb-1 flex items-center justify-between gap-2">
            <h3 className="truncate font-bold text-[#1a3a4a] transition-colors group-hover:text-[#af5d32] text-sm md:text-base">
              {title}
            </h3>
            {tag && (
              <span className="flex-shrink-0 whitespace-nowrap rounded-full bg-[#f5f1ea] px-2 py-0.5 text-[10px] md:text-xs font-semibold text-[#1a3a4a]">
                {tag}
              </span>
            )}
          </div>
          <p className="line-clamp-1 text-xs md:text-sm text-[#64748b] leading-relaxed">{subtitle}</p>
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
      <div className="h-full overflow-hidden rounded-xl border border-[#ebe4d8] bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98] md:active:scale-100">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${imageSeed}/600/450`}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
        <div className="p-2.5 md:p-3">
          <div className="mb-0.5 flex items-center justify-between gap-2">
            <h3 className="truncate text-xs md:text-sm font-semibold text-[#1a3a4a] transition-colors group-hover:text-[#af5d32]">
              {title}
            </h3>
            {tag && (
              <span className="flex-shrink-0 whitespace-nowrap rounded-full bg-[#f5f1ea] px-1.5 md:px-2 py-0.5 text-[10px] font-semibold text-[#1a3a4a]">
                {tag}
              </span>
            )}
          </div>
          <p className="line-clamp-1 text-[10px] md:text-xs text-[#64748b] leading-relaxed">{subtitle}</p>
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
      <div className="h-full overflow-hidden rounded-xl border border-[#ebe4d8] border-t-2 border-t-[#af5d32] bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98] md:active:scale-100">
        <div className="flex aspect-square items-center justify-center bg-[#f5f1ea] p-4">
          <Icon className="text-[#1a3a4a] w-8 h-8 md:w-10 md:h-10" size={32} />
        </div>
        <div className="p-2.5 md:p-3">
          <h3 className="mb-0.5 truncate text-xs md:text-sm font-semibold text-[#1a3a4a] transition-colors group-hover:text-[#af5d32]">
            {title}
          </h3>
          <p className="line-clamp-1 text-[10px] md:text-xs text-[#64748b] leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function CompactResultCard({
  item,
}: {
  item: CityHubConfig["allItems"][number];
}) {
  if (item.type === "info" || item.type === "tip") {
    const Icon = item.icon || Map;
    return (
      <Link href={item.href} className="group block h-full">
        <div className="h-full overflow-hidden rounded-xl border border-[#ebe4d8] border-t-2 border-t-[#af5d32] bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98] md:active:scale-100">
          <div className="flex aspect-square items-center justify-center bg-[#f5f1ea] p-4">
            <Icon className="text-[#1a3a4a] w-8 h-8 md:w-10 md:h-10" size={32} />
          </div>
          <div className="p-2.5 md:p-3">
            <h3 className="mb-0.5 truncate text-xs md:text-sm font-semibold text-[#1a3a4a] transition-colors group-hover:text-[#af5d32]">
              {item.name}
            </h3>
            <p className="line-clamp-1 text-[10px] md:text-xs text-[#64748b] leading-relaxed">{item.subtitle}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={item.href} className="group block h-full">
      <div className="h-full overflow-hidden rounded-xl border border-[#ebe4d8] bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.98] md:active:scale-100">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${item.imageSeed}/600/450`}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
        <div className="p-2.5 md:p-3">
          <div className="mb-0.5 flex items-center justify-between gap-2">
            <h3 className="truncate text-xs md:text-sm font-semibold text-[#1a3a4a] transition-colors group-hover:text-[#af5d32]">
              {item.name}
            </h3>
            {item.tag && (
              <span className="flex-shrink-0 whitespace-nowrap rounded-full bg-[#f5f1ea] px-1.5 md:px-2 py-0.5 text-[10px] font-semibold text-[#1a3a4a]">
                {item.tag}
              </span>
            )}
          </div>
          <p className="line-clamp-1 text-[10px] md:text-xs text-[#64748b] leading-relaxed">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function ItinerarySection({ config }: { config: CityHubConfig }) {
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());

  const toggleDay = (day: string) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const days = config.itinerary.reduce<Record<string, CityHubConfig["itinerary"]>>(
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
        <div className="mb-3 h-1 w-8 rounded-full bg-[#af5d32]" />
        <h2 className="mb-2 text-2xl font-bold text-[#1a3a4a] md:text-3xl">
          Suggested Itinerary
        </h2>
        <p className="text-sm text-[#64748b]">
          A {Object.keys(days).length}-day plan covering the essentials. Mix,
          match, or extend to your pace.
        </p>
      </div>
      <div className="space-y-4">
        {Object.entries(days).map(([dayTitle, periods], dayIndex) => {
          const isExpanded = expandedDays.has(dayTitle);
          const totalStops = periods.reduce((sum, p) => sum + p.items.length, 0);
          return (
            <div
              key={dayTitle}
              className="overflow-hidden rounded-2xl border border-[#ebe4d8]"
            >
              <button
                onClick={() => toggleDay(dayTitle)}
                className="flex min-h-[44px] w-full items-center justify-between bg-[#f5f1ea] p-4 transition-colors hover:bg-[#ebe4d8] md:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#af5d32] text-sm font-bold text-white">
                    {dayIndex + 1}
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
                        <div className="mb-3 flex items-center gap-2">
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
                              className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-[#f5f1ea]"
                            >
                              <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                                <Image
                                  src={`https://picsum.photos/seed/${item.imageSeed}/200/150`}
                                  alt={item.name}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm font-semibold text-[#1a3a4a] transition-colors group-hover:text-[#af5d32]">
                                  {item.name}
                                </h4>
                                <p className="mt-0.5 line-clamp-2 text-xs text-[#64748b]">
                                  {item.desc}
                                </p>
                                <div className="mt-1.5 flex items-center gap-3">
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

function ThingsToDoSection({
  config,
  expanded = false,
}: {
  config: CityHubConfig;
  expanded?: boolean;
}) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title={`Things to Do in ${config.nameEn}`}
          href={`/destinations/${config.slug}/what-to-do`}
        />
      )}
      <div
        className={
          expanded
            ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4"
        }
      >
        {config.attractionCards.map((attr) => (
          <div
            key={attr.name}
            className={expanded ? "" : "w-[calc(85vw-2rem)] max-w-[260px] flex-shrink-0 snap-start sm:max-w-[280px] md:w-[300px]"}
          >
            <PhotoCard
              href={attr.categories[attr.defaultCategory]?.href || `/destinations/${config.slug}/what-to-do`}
              imageSeed={attr.imageSeed}
              title={attr.name}
              subtitle={attr.categories[attr.defaultCategory]?.hook || ""}
              tag={attr.categories[attr.defaultCategory]?.tag}
              alt={attr.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function WhereToEatSection({ config }: { config: CityHubConfig }) {
  return (
    <section>
      <SectionHeader
        title="Where to Eat"
        href={`/destinations/${config.slug}/where-to-eat`}
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {config.foodCards.map((food) => (
          <CompactPhotoCard
            key={food.name}
            href={food.categories[food.defaultCategory]?.href || `/destinations/${config.slug}/where-to-eat`}
            imageSeed={food.imageSeed}
            title={food.name}
            subtitle={food.categories[food.defaultCategory]?.hook || ""}
            tag={food.categories[food.defaultCategory]?.tag}
            alt={food.name}
          />
        ))}
      </div>
    </section>
  );
}

function WhereToStaySection({ config }: { config: CityHubConfig }) {
  return (
    <section>
      <SectionHeader
        title="Where to Stay"
        href={`/destinations/${config.slug}/where-to-stay`}
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {config.neighborhoodCards.map((n) => (
          <CompactPhotoCard
            key={n.name}
            href={n.categories[n.defaultCategory]?.href || `/destinations/${config.slug}/where-to-stay`}
            imageSeed={n.imageSeed}
            title={n.name}
            subtitle={n.categories[n.defaultCategory]?.hook || ""}
            alt={n.name}
          />
        ))}
      </div>
    </section>
  );
}

function KnowBeforeYouGoSection({
  config,
  expanded = false,
}: {
  config: CityHubConfig;
  expanded?: boolean;
}) {
  return (
    <section>
      {expanded && (
        <>
          <div className="mb-6 flex flex-wrap gap-2 md:mb-8 md:gap-3">
            {config.pills.map((pill) => (
              <span
                key={pill.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#ebe4d8] bg-white px-3 py-1.5 text-xs text-[#1a3a4a] md:text-sm"
              >
                <pill.icon size={14} className="text-[#1a3a4a]" />
                {pill.label && <span className="font-semibold">{pill.label}</span>}
                <span>{pill.text}</span>
              </span>
            ))}
          </div>
          <SectionHeader title="Know Before You Go" />
        </>
      )}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {config.knowBeforeYouGo.map((card) => (
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

function LocalTipsSection({ config }: { config: CityHubConfig }) {
  return (
    <section>
      <SectionHeader
        title="Local Tips"
        href={`/destinations/${config.slug}/local-tips`}
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {config.localTips.map((tip) => (
          <CompactIconCard
            key={tip.title}
            href={tip.href}
            icon={tip.icon}
            title={tip.title}
            subtitle={tip.text}
          />
        ))}
      </div>
    </section>
  );
}

export default function CityHubTemplate({ config }: { config: CityHubConfig }) {
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

  useEffect(() => {
    document.body.setAttribute('data-hide-main-nav', 'true');
    return () => {
      document.body.removeAttribute('data-hide-main-nav');
    };
  }, []);

  const filteredItems = useMemo(() => {
    return config.allItems.filter((item) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !item.name.toLowerCase().includes(q) &&
          !item.subtitle.toLowerCase().includes(q) &&
          !(item.tag || "").toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      if (activeFilters.length > 0) {
        if (!activeFilters.some((f) => item.filters.includes(f))) return false;
      }
      return true;
    });
  }, [activeFilters, config.allItems, searchQuery]);

  const grouped = useMemo(() => {
    const groups: Record<string, CityHubConfig["allItems"]> = {};
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
    const total = config.gallerySeeds.length;
    if (total <= 5) return config.gallerySeeds.map((_, index) => index);

    const start = Math.min(Math.max(activeHeroImage - 2, 0), total - 5);
    return Array.from({ length: 5 }, (_, offset) => start + offset);
  }, [activeHeroImage, config.gallerySeeds]);

  const toggleFilter = (f: FilterTag) => {
    setActiveFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilters([]);
  };

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
      <section className="relative w-full">
        <div className="relative group/hero">
          <div
            ref={heroGalleryRef}
            onScroll={updateHeroGalleryState}
            data-scroll-left={heroGalleryScrollLeft > 0 ? "true" : "false"}
            className="scrollbar-hide flex h-[280px] snap-x snap-mandatory overflow-x-auto scroll-smooth overscroll-x-contain [-webkit-overflow-scrolling:touch] md:h-[400px]"
          >
            {config.gallerySeeds.map((seed, index) => (
              <div
                key={seed}
                className="relative h-full basis-[85%] max-w-[calc(100vw-3rem)] shrink-0 snap-start sm:basis-[70%] md:basis-1/2 lg:basis-[74%]"
              >
                <Image
                  src={`https://picsum.photos/seed/${seed}/1600/900`}
                  alt={`${config.nameEn} gallery image ${index + 1}`}
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
              onClick={() =>
                heroGalleryRef.current?.scrollBy({ left: -640, behavior: "smooth" })
              }
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1a3a4a] shadow-xl transition hover:bg-white md:left-6 md:h-12 md:w-12 lg:left-16"
              aria-label={`Scroll ${config.nameEn} gallery left`}
            >
              <ChevronLeft size={20} className="md:h-[22px] md:w-[22px]" />
            </button>
          )}
          {heroCanScrollRight && (
            <button
              type="button"
              onClick={() =>
                heroGalleryRef.current?.scrollBy({ left: 640, behavior: "smooth" })
              }
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1a3a4a] shadow-xl transition hover:bg-white md:right-6 md:h-12 md:w-12 lg:right-16"
              aria-label={`Scroll ${config.nameEn} gallery right`}
            >
              <ChevronRight size={20} className="md:h-[22px] md:w-[22px]" />
            </button>
          )}
          <div className="pointer-events-none absolute bottom-5 left-4 z-10 max-w-[min(18rem,calc(100vw-4.5rem))] md:bottom-9 md:left-12 md:max-w-[min(32rem,calc(100vw-8rem))]">
            <p className="mb-1 text-xs font-medium text-white/80 md:text-base">
              {config.nameZh}, China
            </p>
            <h1 className="mb-1.5 text-3xl font-bold tracking-tight text-white md:mb-3 md:text-6xl">
              {config.nameEn}
            </h1>
            <p className="text-xs text-white/90 md:text-lg">{config.tagline}</p>
          </div>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2.5 md:bottom-7 md:gap-2">
            {visibleHeroDots.map((index) => (
              <button
                key={`${config.gallerySeeds[index]}-dot`}
                type="button"
                onClick={() => {
                  const slide = heroGalleryRef.current?.children[index] as
                    | HTMLElement
                    | undefined;
                  slide?.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                    block: "nearest",
                  });
                }}
                className={`rounded-full transition-all min-h-[44px] min-w-[44px] p-2 flex items-center justify-center ${
                  activeHeroImage === index
                    ? "bg-transparent"
                    : "bg-transparent"
                }`}
                aria-label={`Go to ${config.nameEn} gallery image ${index + 1}`}
              >
                <span className={`rounded-full block transition-all ${
                  activeHeroImage === index
                    ? "h-2 w-4 bg-[#af5d32] md:h-2.5 md:w-6"
                    : "h-2 w-2 bg-white/55 md:h-2.5 md:w-2.5"
                }`} />
              </button>
            ))}
          </div>
        </div>

        <div className="border-b border-[#ebe4d8] bg-[#f5f1ea]">
          <div className="mx-auto max-w-6xl px-4 py-3 md:py-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {config.pills.map((pill) => (
                <span
                  key={pill.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#ebe4d8] bg-white px-3 py-1.5 text-xs text-[#1a3a4a] md:text-sm"
                >
                  <pill.icon size={14} className="text-[#1a3a4a]" />
                  {pill.label && <span className="font-semibold">{pill.label}</span>}
                  <span>{pill.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 border-b border-[#ebe4d8] bg-white shadow-sm">
        <div className="relative z-50 mx-auto max-w-6xl px-4">
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
                    className={`min-h-[44px] cursor-pointer items-center whitespace-nowrap border-b-[3px] px-3 py-2 text-sm transition-colors md:px-4 flex ${
                      isActive
                        ? "rounded-t-lg border-[#af5d32] bg-[#f5f1ea]/50 font-semibold text-[#1a3a4a]"
                        : "border-transparent font-medium text-[#64748b] hover:text-[#1a3a4a]"
                    }`}
                  >
                    <span className="hidden md:inline">{tab.label}</span>
                    <span className="md:hidden">{tab.mobileLabel}</span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setIsMapView((v) => !v)}
              className={`ml-2 flex min-h-[44px] flex-shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
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

        <div className="relative z-40 border-t border-[#ebe4d8]">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="mb-3 flex items-center gap-3">
              <SlidersHorizontal
                className="flex-shrink-0 text-[#64748b]"
                size={20}
              />
              <input
                type="text"
                placeholder={config.searchPlaceholder}
                className="flex-1 bg-transparent text-sm text-[#1a3a4a] outline-none placeholder:text-[#64748b]/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {isFiltering && (
                <button
                  onClick={clearFilters}
                  className="flex min-h-[44px] items-center gap-1 rounded-md px-2 text-xs font-medium text-[#af5d32] hover:bg-[#af5d32]/10 hover:underline"
                >
                  <X size={14} /> Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {filterGroups.map((group) => (
                <div key={group.label} className="flex items-center gap-1.5">
                  <span className="mr-0.5 text-xs font-medium text-[#64748b]">
                    {group.label}:
                  </span>
                  {group.filters.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => toggleFilter(f.id)}
                      className={`min-h-[44px] rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                        activeFilters.includes(f.id)
                          ? "bg-[#af5d32] text-white"
                          : "border border-[#ebe4d8] bg-[#f5f1ea] text-[#1a3a4a] hover:border-[#af5d32]"
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

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {isMapView && (
          <div className="space-y-4">
            <CityMapView
              config={config}
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
              Showing {filteredItems.length} of {config.allItems.length} items
            </div>
            {filteredItems.length === 0 ? (
              <div className="py-16 text-center">
                <SlidersHorizontal
                  className="mx-auto mb-4 text-[#64748b]"
                  size={48}
                />
                <p className="mb-1 font-semibold text-[#1a3a4a]">
                  No matches found
                </p>
                <p className="text-sm text-[#64748b]">
                  Try removing a filter or searching for something else
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-3 inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-[#af5d32] hover:bg-[#af5d32]/10 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {grouped.map((group) => (
                  <div key={group.type}>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="h-1 w-6 rounded-full bg-[#af5d32]" />
                      <h2 className="text-lg font-bold text-[#1a3a4a]">
                        {group.label}
                      </h2>
                      <span className="text-xs text-[#64748b]">
                        ({group.items.length})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
            <div className="relative">
              <div className="mb-4 flex items-center justify-between md:mb-6">
                <div>
                  <div className="mb-3 h-1 w-8 rounded-full bg-[#af5d32]" />
                  <h2 className="text-2xl font-bold text-[#1a3a4a] md:text-3xl">
                    Things to Do
                  </h2>
                </div>
                <Link
                  href={`/destinations/${config.slug}/what-to-do`}
                  className="mb-1 self-end whitespace-nowrap text-sm font-medium text-[#af5d32] hover:underline"
                >
                  See all →
                </Link>
              </div>
              <div className="relative group/scroll">
                <div
                  ref={thingsToDoScrollRef}
                  className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth"
                >
                  {config.attractionCards.map((attr) => (
                    <div
                      key={attr.name}
                      className="w-[calc(85vw-2rem)] max-w-[260px] flex-shrink-0 snap-start sm:max-w-[280px] md:w-[300px]"
                    >
                      <PhotoCard
                        href={attr.categories[attr.defaultCategory]?.href || `/destinations/${config.slug}/what-to-do`}
                        imageSeed={attr.imageSeed}
                        title={attr.name}
                        subtitle={attr.categories[attr.defaultCategory]?.hook || ""}
                        tag={attr.categories[attr.defaultCategory]?.tag}
                        alt={attr.name}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    thingsToDoScrollRef.current?.scrollBy({
                      left: -300,
                      behavior: "smooth",
                    })
                  }
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-[#ebe4d8] bg-white/90 text-[#1a3a4a] shadow-md transition-all hover:bg-white hover:shadow-lg group-hover/scroll:opacity-100 md:opacity-0"
                  aria-label="Scroll left"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    thingsToDoScrollRef.current?.scrollBy({
                      left: 300,
                      behavior: "smooth",
                    })
                  }
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-[#ebe4d8] bg-white/90 text-[#1a3a4a] shadow-md transition-all hover:bg-white hover:shadow-lg group-hover/scroll:opacity-100 md:opacity-0"
                  aria-label="Scroll right"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <div className="pointer-events-none absolute bottom-4 right-0 top-0 w-16 bg-gradient-to-l from-white to-transparent md:hidden" />
              </div>
            </div>

            <ItinerarySection config={config} />
            <WhereToEatSection config={config} />
            <WhereToStaySection config={config} />
            <KnowBeforeYouGoSection config={config} expanded />
            <LocalTipsSection config={config} />
            <FooterCTA
              title={config.footerTitle}
              subtitle={config.footerSubtitle}
              quickInfo={config.footerQuickInfo}
              trustText={config.footerTrustText}
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "things-to-do" && (
          <div className="space-y-8 md:space-y-10">
            <ThingsToDoSection config={config} expanded />
            <FooterCTA
              title={config.footerTitle}
              subtitle={config.footerSubtitle}
              quickInfo={config.footerQuickInfo}
              trustText={config.footerTrustText}
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "where-to-eat" && (
          <div className="space-y-8 md:space-y-10">
            <WhereToEatSection config={config} />
            <FooterCTA
              title={config.footerTitle}
              subtitle={config.footerSubtitle}
              quickInfo={config.footerQuickInfo}
              trustText={config.footerTrustText}
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "where-to-stay" && (
          <div className="space-y-8 md:space-y-10">
            <WhereToStaySection config={config} />
            <FooterCTA
              title={config.footerTitle}
              subtitle={config.footerSubtitle}
              quickInfo={config.footerQuickInfo}
              trustText={config.footerTrustText}
            />
          </div>
        )}

        {!isMapView && !isFiltering && activeTab === "essentials" && (
          <div className="space-y-8 md:space-y-10">
            <KnowBeforeYouGoSection config={config} expanded />
            <LocalTipsSection config={config} />
            <FooterCTA
              title={config.footerTitle}
              subtitle={config.footerSubtitle}
              quickInfo={config.footerQuickInfo}
              trustText={config.footerTrustText}
            />
          </div>
        )}
      </main>
    </div>
  );
}
