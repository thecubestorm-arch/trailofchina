import type { LucideIcon } from "lucide-react";

export type Tab =
  | "overview"
  | "things-to-do"
  | "where-to-eat"
  | "where-to-stay"
  | "essentials"
  | "day-trips";

export type FilterTag =
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

export interface MetroLine {
  id: string;
  name: string;
  color: string;
  path: [number, number][];
  stations: { name: string; lat: number; lng: number }[];
}

export interface TransportHub {
  id: string;
  name: string;
  shortName: string;
  type: "airport" | "train";
  lat: number;
  lng: number;
}

export interface UnifiedLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  imageSeed: string;
  defaultCategory: string;
  categories: Record<
    string,
    {
      href: string;
      hook: string;
      tag: string;
    }
  >;
}

export interface MarkerLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  categories: string[];
}

export interface LocalTip {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
  href: string;
}

export interface ItineraryDay {
  dayTitle: string;
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

export interface KnowBeforeYouGoItem {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
}

export interface QuickInfoPill {
  icon: LucideIcon;
  label: string;
  text: string;
}

export interface FilterableItem {
  id: string;
  markerId?: string;
  name: string;
  subtitle: string;
  tag?: string;
  imageSeed: string;
  href: string;
  type: "attraction" | "food" | "stay" | "info" | "tip";
  icon?: LucideIcon;
  filters: FilterTag[];
}

export interface FooterQuickInfoItem {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: {
    href: string;
    label: string;
  };
}

export interface CityHubConfig {
  slug: string;
  nameEn: string;
  nameZh: string;
  tagline: string;
  watermark: string;
  searchPlaceholder: string;
  mapCenter: [number, number];
  mapZoom: number;
  boundary: [number, number][];
  maxBounds: [[number, number], [number, number]];
  gallerySeeds: string[];
  galleryAlts: string[];
  pills: QuickInfoPill[];
  metroLines: MetroLine[];
  transportHubs: TransportHub[];
  unifiedLocations: UnifiedLocation[];
  markers: MarkerLocation[];
  attractionCards: UnifiedLocation[];
  foodCards: UnifiedLocation[];
  neighborhoodCards: UnifiedLocation[];
  localTips: LocalTip[];
  itinerary: ItineraryDay[];
  knowBeforeYouGo: KnowBeforeYouGoItem[];
  dayTripCards?: UnifiedLocation[];
  allItems: FilterableItem[];
  footerTitle: string;
  footerSubtitle: string;
  footerTrustText: string;
  footerQuickInfo: FooterQuickInfoItem[];
}
