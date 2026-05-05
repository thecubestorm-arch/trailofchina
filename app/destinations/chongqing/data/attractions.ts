import type { UnifiedLocation, MarkerLocation } from "@/components/CityHubTemplate/types";

export const unifiedLocations: UnifiedLocation[] = [
  // THINGS TO DO
  {
    id: "hongyadong",
    name: "Hongyadong",
    lat: 29.561,
    lng: 106.578,
    imageSeed: "chongqing-hongyadong",
    defaultCategory: "what-to-do",
    categories: {
      "what-to-do": {
        href: "/destinations/chongqing/what-to-do/hongyadong",
        hook: "Iconic cliffside stilt-house complex. Stunning at night.",
        tag: "Free",
      },
    },
  },
  {
    id: "ciqikou",
    name: "Ciqikou Old Town",
    lat: 29.580,
    lng: 106.454,
    imageSeed: "chongqing-ciqikou",
    defaultCategory: "what-to-do",
    categories: {
      "what-to-do": {
        href: "/destinations/chongqing/what-to-do/ciqikou",
        hook: "1,000-year-old porcelain town with snacks and crafts.",
        tag: "Free",
      },
    },
  },
  {
    id: "three-gorges-museum",
    name: "Three Gorges Museum",
    lat: 29.560,
    lng: 106.552,
    imageSeed: "chongqing-three-gorges-museum",
    defaultCategory: "what-to-do",
    categories: {
      "what-to-do": {
        href: "/destinations/chongqing/what-to-do/three-gorges-museum",
        hook: "China's best museum outside Beijing. Free.",
        tag: "Free",
      },
    },
  },
  {
    id: "eling-park",
    name: "Eling Park & Lookout",
    lat: 29.548,
    lng: 106.534,
    imageSeed: "chongqing-eling-park",
    defaultCategory: "what-to-do",
    categories: {
      "what-to-do": {
        href: "/destinations/chongqing/what-to-do/eling-park",
        hook: "Best panoramic city views over the river confluence.",
        tag: "Free",
      },
    },
  },
  {
    id: "liberation-monument",
    name: "Liberation Monument",
    lat: 29.557,
    lng: 106.577,
    imageSeed: "chongqing-liberation-monument",
    defaultCategory: "what-to-do",
    categories: {
      "what-to-do": {
        href: "/destinations/chongqing/what-to-do/liberation-monument",
        hook: "Shopping district center and Chongqing's Times Square.",
        tag: "Free",
      },
    },
  },
  {
    id: "liziba-monorail",
    name: "Liziba Monorail Station",
    lat: 29.554,
    lng: 106.539,
    imageSeed: "chongqing-liziba-monorail",
    defaultCategory: "what-to-do",
    categories: {
      "what-to-do": {
        href: "/destinations/chongqing/what-to-do/liziba-monorail",
        hook: "Famous monorail-through-building photo spot.",
        tag: "Free",
      },
    },
  },
  // FOOD
  {
    id: "chongqing-hotpot",
    name: "Chongqing Hotpot",
    lat: 29.558,
    lng: 106.577,
    imageSeed: "chongqing-hotpot",
    defaultCategory: "where-to-eat",
    categories: {
      "where-to-eat": {
        href: "/destinations/chongqing/where-to-eat/hotpot",
        hook: "Numbing-spicy beef tallow broth. The real deal.",
        tag: "¥80-150",
      },
    },
  },
  {
    id: "chongqing-noodles",
    name: "Chongqing Noodles (Xiaomian)",
    lat: 29.561,
    lng: 106.575,
    imageSeed: "chongqing-noodles",
    defaultCategory: "where-to-eat",
    categories: {
      "where-to-eat": {
        href: "/destinations/chongqing/where-to-eat/xiaomian",
        hook: "Street-level spicy noodles. ¥10-20 breakfast staple.",
        tag: "¥10-20",
      },
    },
  },
  {
    id: "jianghu-cuisine",
    name: "Jianghu Cuisine",
    lat: 29.555,
    lng: 106.565,
    imageSeed: "chongqing-jianghu-cuisine",
    defaultCategory: "where-to-eat",
    categories: {
      "where-to-eat": {
        href: "/destinations/chongqing/where-to-eat/jianghu-cuisine",
        hook: "Bold, rustic Sichuan dishes. Local favorite.",
        tag: "¥50-80",
      },
    },
  },
  // STAY
  {
    id: "jiefangbei-stay",
    name: "Jiefangbei / Central",
    lat: 29.557,
    lng: 106.577,
    imageSeed: "chongqing-jiefangbei-stay",
    defaultCategory: "where-to-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/chongqing/where-to-stay/jiefangbei",
        hook: "Most central, walkable, well-connected.",
        tag: "",
      },
    },
  },
  {
    id: "hongyadong-stay",
    name: "Hongyadong Area",
    lat: 29.561,
    lng: 106.578,
    imageSeed: "chongqing-hongyadong-stay",
    defaultCategory: "where-to-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/chongqing/where-to-stay/hongyadong-area",
        hook: "Riverside, atmospheric nights.",
        tag: "",
      },
    },
  },
  {
    id: "nanbin-road-stay",
    name: "Nanbin Road Area",
    lat: 29.523,
    lng: 106.579,
    imageSeed: "chongqing-nanbin-road-stay",
    defaultCategory: "where-to-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/chongqing/where-to-stay/nanbin-road",
        hook: "South bank views, quieter.",
        tag: "",
      },
    },
  },
];

export const markers: MarkerLocation[] = unifiedLocations.map((loc) => ({
  id: loc.id,
  name: loc.name,
  lat: loc.lat,
  lng: loc.lng,
  categories: Object.keys(loc.categories),
}));

export const attractionCards: UnifiedLocation[] = unifiedLocations.filter(
  (l) => l.defaultCategory === "what-to-do"
);

export const foodCards: UnifiedLocation[] = unifiedLocations.filter(
  (l) => l.defaultCategory === "where-to-eat"
);

export const neighborhoodCards: UnifiedLocation[] = unifiedLocations.filter(
  (l) => l.defaultCategory === "where-to-stay"
);