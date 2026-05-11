export type CategoryKey = "things-to-do" | "where-to-eat" | "where-to-stay";

export interface CategoryEntry {
  href: string;
  hook: string;
  tag: string;
}

export interface UnifiedLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  imageSeed: string;
  categories: Partial<Record<CategoryKey, CategoryEntry>>;
  defaultCategory: CategoryKey;
}

export type MarkerCategory = "attraction" | "eat" | "stay";

export interface MarkerLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  categories: MarkerCategory[];
}

export interface MetroStation {
  name: string;
  lat: number;
  lng: number;
}

export interface MetroLine {
  id: string;
  name: string;
  color: string;
  path: [number, number][];
  stations: MetroStation[];
}

export interface TransportHub {
  id: string;
  name: string;
  shortName: string;
  type: "airport" | "train";
  lat: number;
  lng: number;
}

export interface LayerVisibility {
  metroLines: boolean;
  metroStations: boolean;
  trainStations: boolean;
  airports: boolean;
}

export const CATEGORY_CONFIG: Record<
  CategoryKey,
  { emoji: string; color: string; label: string }
> = {
  "things-to-do": { emoji: "🏛️", color: "#af5d32", label: "Things to Do" },
  "where-to-eat": { emoji: "🍜", color: "#f97316", label: "Where to Eat" },
  "where-to-stay": { emoji: "🏨", color: "#3b82f6", label: "Where to Stay" },
};