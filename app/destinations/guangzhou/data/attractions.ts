import type { MarkerLocation, UnifiedLocation } from "../types";

export const unifiedLocations: UnifiedLocation[] = [
  {
    id: "canton-tower",
    name: "Canton Tower",
    lat: 23.1067,
    lng: 113.3244,
    imageSeed: "guangzhou-canton-tower",
    categories: {
      "things-to-do": {
        href: "/destinations/guangzhou/what-to-do/canton-tower",
        hook: "Canton Tower isn't just an observation deck — the skywalk lets you walk outside at 488 meters.",
        tag: "¥150–298",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "shamian-island",
    name: "Shamian Island",
    lat: 23.1075,
    lng: 113.2389,
    imageSeed: "guangzhou-shamian-island",
    categories: {
      "things-to-do": {
        href: "/destinations/guangzhou/what-to-do/shamian-island",
        hook: "Guangzhou's time capsule — 150-year-old European buildings under banyan trees.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "chen-clan-ancestral-hall",
    name: "Chen Clan Ancestral Hall",
    lat: 23.1261,
    lng: 113.2150,
    imageSeed: "guangzhou-chen-clan-hall",
    categories: {
      "things-to-do": {
        href: "/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall",
        hook: "A Lingnan architecture masterpiece with wood and stone carvings so detailed they take your breath away.",
        tag: "¥10",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "beijing-road",
    name: "Beijing Road",
    lat: 23.1264,
    lng: 113.2636,
    imageSeed: "guangzhou-beijing-road",
    categories: {
      "things-to-do": {
        href: "/destinations/guangzhou/what-to-do/beijing-road",
        hook: "A 2,000-year-old shopping street — with the ancient road visible under glass panels beneath your feet.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "yuexiu-park",
    name: "Yuexiu Park",
    lat: 23.1414,
    lng: 113.2611,
    imageSeed: "guangzhou-yuexiu-park",
    categories: {
      "things-to-do": {
        href: "/destinations/guangzhou/what-to-do/yuexiu-park",
        hook: "Guangzhou's green lung — home to the Five Rams Statue and 600-year-old Zhenhai Tower.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "sacred-heart-cathedral",
    name: "Sacred Heart Cathedral",
    lat: 23.1117,
    lng: 113.2508,
    imageSeed: "guangzhou-sacred-heart",
    categories: {
      "things-to-do": {
        href: "/destinations/guangzhou/what-to-do/sacred-heart-cathedral",
        hook: "Guangzhou's Notre-Dame — a Gothic cathedral built entirely from granite in 1863.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  // Food
  {
    id: "dim-sum",
    name: "Dim Sum",
    lat: 23.1297,
    lng: 113.2400,
    imageSeed: "guangzhou-dim-sum",
    categories: {
      "where-to-eat": {
        href: "/destinations/guangzhou/where-to-eat/dim-sum",
        hook: "Guangzhou INVENTED dim sum. This is the real thing — not the version you get abroad.",
        tag: "Cantonese · ¥50–120",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "wonton-noodles",
    name: "Wonton Noodles",
    lat: 23.1297,
    lng: 113.2300,
    imageSeed: "guangzhou-wonton-noodles",
    categories: {
      "where-to-eat": {
        href: "/destinations/guangzhou/where-to-eat/wonton-noodles",
        hook: "Thin egg noodles, shrimp wontons, clear broth — Cantonese comfort food perfected over centuries.",
        tag: "Local · ¥15–30",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "rice-noodle-rolls",
    name: "Rice Noodle Rolls",
    lat: 23.1247,
    lng: 113.2350,
    imageSeed: "guangzhou-rice-noodle-rolls",
    categories: {
      "where-to-eat": {
        href: "/destinations/guangzhou/where-to-eat/rice-noodle-rolls",
        hook: "Cheung fun — silky rice noodle rolls with soy sauce, the Guangzhou breakfast staple.",
        tag: "Street · ¥8–15",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "roast-goose",
    name: "Roast Goose",
    lat: 23.1147,
    lng: 113.2250,
    imageSeed: "guangzhou-roast-goose",
    categories: {
      "where-to-eat": {
        href: "/destinations/guangzhou/where-to-eat/roast-goose",
        hook: "Cantonese roast goose — crispy skin, juicy meat, the dish that makes Guangzhou the food capital.",
        tag: "Cantonese · ¥60–120",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "shunde-cuisine",
    name: "Shunde Cuisine",
    lat: 22.8050,
    lng: 113.2425,
    imageSeed: "guangzhou-shunde",
    categories: {
      "where-to-eat": {
        href: "/destinations/guangzhou/where-to-eat/shunde-cuisine",
        hook: "Shunde is a UNESCO City of Gastronomy — and it's a suburb of Guangzhou.",
        tag: "Premium · ¥100–200",
      },
    },
    defaultCategory: "where-to-eat",
  },
  // Stays
  {
    id: "tianhe-district",
    name: "Tianhe District",
    lat: 23.1361,
    lng: 113.3231,
    imageSeed: "guangzhou-tianhe-district",
    categories: {
      "things-to-do": {
        href: "/destinations/guangzhou/what-to-do",
        hook: "Modern CBD with Canton Tower and shopping malls.",
        tag: "",
      },
      "where-to-stay": {
        href: "/destinations/guangzhou/where-to-stay/tianhe-district",
        hook: "Modern CBD · Canton Tower · Shopping malls",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "yuexiu-district",
    name: "Yuexiu District",
    lat: 23.1297,
    lng: 113.2667,
    imageSeed: "guangzhou-yuexiu-district",
    categories: {
      "where-to-stay": {
        href: "/destinations/guangzhou/where-to-stay/yuexiu-district",
        hook: "Old Guangzhou · Beijing Road · Shamian nearby",
        tag: "¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "haizhu-district",
    name: "Haizhu District",
    lat: 23.0981,
    lng: 113.3208,
    imageSeed: "guangzhou-haizhu-district",
    categories: {
      "where-to-stay": {
        href: "/destinations/guangzhou/where-to-stay/haizhu-district",
        hook: "Across the Pearl River · Canton Tower · Arts district",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
];

export const markers: MarkerLocation[] = [
  { id: "canton-tower", name: "Canton Tower", lat: 23.1067, lng: 113.3244, categories: ["attraction"] },
  { id: "shamian-island", name: "Shamian Island", lat: 23.1075, lng: 113.2389, categories: ["attraction"] },
  { id: "chen-clan-ancestral-hall", name: "Chen Clan Ancestral Hall", lat: 23.1261, lng: 113.2150, categories: ["attraction"] },
  { id: "beijing-road", name: "Beijing Road", lat: 23.1264, lng: 113.2636, categories: ["attraction"] },
  { id: "yuexiu-park", name: "Yuexiu Park", lat: 23.1414, lng: 113.2611, categories: ["attraction"] },
  { id: "sacred-heart-cathedral", name: "Sacred Heart Cathedral", lat: 23.1117, lng: 113.2508, categories: ["attraction"] },
  { id: "dim-sum", name: "Dim Sum", lat: 23.1297, lng: 113.2400, categories: ["eat"] },
  { id: "wonton-noodles", name: "Wonton Noodles", lat: 23.1297, lng: 113.2300, categories: ["eat"] },
  { id: "rice-noodle-rolls", name: "Rice Noodle Rolls", lat: 23.1247, lng: 113.2350, categories: ["eat"] },
  { id: "roast-goose", name: "Roast Goose", lat: 23.1147, lng: 113.2250, categories: ["eat"] },
  { id: "shunde-cuisine", name: "Shunde Cuisine", lat: 22.8050, lng: 113.2425, categories: ["eat"] },
  { id: "tianhe-district", name: "Tianhe District", lat: 23.1361, lng: 113.3231, categories: ["attraction", "stay"] },
  { id: "yuexiu-district", name: "Yuexiu District", lat: 23.1297, lng: 113.2667, categories: ["stay"] },
  { id: "haizhu-district", name: "Haizhu District", lat: 23.0981, lng: 113.3208, categories: ["stay"] },
];