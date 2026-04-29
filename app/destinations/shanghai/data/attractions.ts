import type { MarkerLocation, UnifiedLocation } from "../types";

export const unifiedLocations: UnifiedLocation[] = [
  // ── Things to Do ────────────────────────────────────────────────
  {
    id: "bund",
    name: "The Bund",
    lat: 31.24,
    lng: 121.49,
    imageSeed: "shanghai-bund",
    categories: {
      "things-to-do": {
        href: "/destinations/shanghai/what-to-do/bund",
        hook: "Shanghai's most iconic waterfront promenade with skyline views.",
        tag: "Free",
      },
      "where-to-stay": {
        href: "/destinations/shanghai/where-to-stay/bund-area",
        hook: "Iconic skyline · Historic architecture · Perfect for first-timers",
        tag: "¥¥",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "yu-garden",
    name: "Yu Garden",
    lat: 31.227,
    lng: 121.492,
    imageSeed: "shanghai-yugarden",
    categories: {
      "things-to-do": {
        href: "/destinations/shanghai/what-to-do/yu-garden",
        hook: "A 400-year-old classical garden surrounded by a lively bazaar. The area is free; the walled garden interior costs ¥40.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "french-concession",
    name: "French Concession",
    lat: 31.21,
    lng: 121.46,
    imageSeed: "shanghai-frenchconcession",
    categories: {
      "things-to-do": {
        href: "/destinations/shanghai/what-to-do/french-concession",
        hook: "Tree-lined avenues, Art Deco villas, and charming cafés.",
        tag: "Free",
      },
      "where-to-stay": {
        href: "/destinations/shanghai/where-to-stay/french-concession",
        hook: "Cafés & boutiques · Tree-lined streets · Most walkable",
        tag: "¥¥",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "shanghai-tower",
    name: "Shanghai Tower",
    lat: 31.2355,
    lng: 121.5015,
    imageSeed: "shanghai-tower",
    categories: {
      "things-to-do": {
        href: "/destinations/shanghai/what-to-do/shanghai-tower",
        hook: "The world's second-tallest building with a jaw-dropping observation deck.",
        tag: "¥180",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "tianzifang",
    name: "Tianzifang",
    lat: 31.203,
    lng: 121.468,
    imageSeed: "shanghai-tianzifang",
    categories: {
      "things-to-do": {
        href: "/destinations/shanghai/what-to-do/tianzifang",
        hook: "Winding alleyways packed with studios, galleries, and craft shops.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "jade-buddha",
    name: "Jade Buddha Temple",
    lat: 31.223,
    lng: 121.442,
    imageSeed: "shanghai-jadebuddha",
    categories: {
      "things-to-do": {
        href: "/destinations/shanghai/what-to-do/jade-buddha-temple",
        hook: "Serene Buddhist temple housing two stunning white jade Buddhas.",
        tag: "¥20",
      },
    },
    defaultCategory: "things-to-do",
  },
  // ── Where to Eat ────────────────────────────────────────────────
  {
    id: "xiaolongbao",
    name: "Xiaolongbao",
    lat: 31.225,
    lng: 121.475,
    imageSeed: "xiaolongbao",
    categories: {
      "where-to-eat": {
        href: "/destinations/shanghai/where-to-eat/xiaolongbao",
        hook: "Shanghai's iconic soup dumplings — a must-try.",
        tag: "¥30",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "shengjianbao",
    name: "Shengjianbao",
    lat: 31.238,
    lng: 121.488,
    imageSeed: "shengjianbao",
    categories: {
      "where-to-eat": {
        href: "/destinations/shanghai/where-to-eat/shengjianbao",
        hook: "Pan-fried buns with a crispy bottom — street food at its best.",
        tag: "¥15",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "hairy-crab",
    name: "Hairy Crab",
    lat: 31.215,
    lng: 121.49,
    imageSeed: "hairy-crab",
    categories: {
      "where-to-eat": {
        href: "/destinations/shanghai/where-to-eat/hairy-crab",
        hook: "Autumn delicacy from nearby Yangcheng Lake.",
        tag: "¥200+",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "scallion-oil-noodles",
    name: "Scallion Oil Noodles",
    lat: 31.232,
    lng: 121.455,
    imageSeed: "scallion-noodles",
    categories: {
      "where-to-eat": {
        href: "/destinations/shanghai/where-to-eat/scallion-oil-noodles",
        hook: "Simple, fragrant, and deeply comforting.",
        tag: "¥25–40",
      },
    },
    defaultCategory: "where-to-eat",
  },
  // ── Where to Stay ───────────────────────────────────────────────
  {
    id: "jingan",
    name: "Jing'an",
    lat: 31.234,
    lng: 121.446,
    imageSeed: "shanghai-jingan",
    categories: {
      "where-to-stay": {
        href: "/destinations/shanghai/where-to-stay/jingan",
        hook: "Local life · Metro hub · Central base with top transport connections.",
        tag: "¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "xintiandi",
    name: "Xintiandi",
    lat: 31.219,
    lng: 121.475,
    imageSeed: "shanghai-xintiandi",
    categories: {
      "where-to-stay": {
        href: "/destinations/shanghai/where-to-stay/xintiandi",
        hook: "Modern luxury · Nightlife · Sleek dining in restored shikumen houses.",
        tag: "¥¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
];

export const markers: MarkerLocation[] = [
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
