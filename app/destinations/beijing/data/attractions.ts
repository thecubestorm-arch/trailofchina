import type { MarkerLocation, UnifiedLocation } from "../types";

export const unifiedLocations: UnifiedLocation[] = [
  {
    id: "forbidden-city",
    name: "Forbidden City",
    lat: 39.9169,
    lng: 116.3904,
    imageSeed: "beijing-forbidden-city",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/forbidden-city",
        hook: "The world's largest palace complex — 600 years of imperial history in 980 buildings.",
        tag: "¥60",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "great-wall",
    name: "Great Wall (Mutianyu)",
    lat: 40.4319,
    lng: 116.5704,
    imageSeed: "beijing-great-wall",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/great-wall",
        hook: "The best-preserved section near Beijing. Less crowded than Badaling, stunning mountain scenery.",
        tag: "¥40",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "temple-of-heaven",
    name: "Temple of Heaven",
    lat: 39.8822,
    lng: 116.4066,
    imageSeed: "beijing-temple-of-heaven",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/temple-of-heaven",
        hook: "Where emperors prayed for harvests. The circular Hall of Prayer is iconic.",
        tag: "¥15",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "summer-palace",
    name: "Summer Palace",
    lat: 39.9999,
    lng: 116.2755,
    imageSeed: "beijing-summer-palace",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/summer-palace",
        hook: "Imperial garden with Kunming Lake, Long Corridor, and hilltop temples.",
        tag: "¥30",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "hutong",
    name: "Hutong Alleys",
    lat: 39.937,
    lng: 116.3874,
    imageSeed: "beijing-hutong",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/hutong",
        hook: "Beijing's ancient alleyway neighborhoods — courtyard homes, local life, hidden cafés.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "lama-temple",
    name: "Lama Temple",
    lat: 39.9468,
    lng: 116.4177,
    imageSeed: "beijing-lama-temple",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/lama-temple",
        hook: "Tibetan Buddhist temple with a 26m carved sandalwood Maitreya Buddha.",
        tag: "¥25",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "798-art",
    name: "798 Art District",
    lat: 39.9845,
    lng: 116.4953,
    imageSeed: "beijing-798-art",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/798-art-district",
        hook: "Former factory turned contemporary art hub — galleries, cafés, street art.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "peking-duck",
    name: "Peking Duck",
    lat: 39.905,
    lng: 116.395,
    imageSeed: "beijing-peking-duck",
    categories: {
      "where-to-eat": {
        href: "/destinations/beijing/where-to-eat/peking-duck",
        hook: "Beijing's signature roast duck — crispy skin, tender meat, thin pancakes.",
        tag: "Premium · ¥150+",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "jianbing",
    name: "Jianbing",
    lat: 39.925,
    lng: 116.41,
    imageSeed: "beijing-jianbing",
    categories: {
      "where-to-eat": {
        href: "/destinations/beijing/where-to-eat/jianbing",
        hook: "Savory breakfast crepe with egg, crispy crackers, and sauces.",
        tag: "Street Food · ¥8",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "zhajiangmian",
    name: "Zhajiangmian",
    lat: 39.92,
    lng: 116.39,
    imageSeed: "beijing-zhajiangmian",
    categories: {
      "where-to-eat": {
        href: "/destinations/beijing/where-to-eat/zhajiangmian",
        hook: "Noodles with fermented bean sauce — Beijing's everyday comfort dish.",
        tag: "Restaurant · ¥25",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "lamb-skewers",
    name: "Lamb Skewers",
    lat: 39.935,
    lng: 116.42,
    imageSeed: "beijing-lamb-skewers",
    categories: {
      "where-to-eat": {
        href: "/destinations/beijing/where-to-eat/lamb-skewers",
        hook: "Cumin-spiced yangrouchuan from street BBQ stalls — smoky and addictive.",
        tag: "Street Food · ¥15",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "baodu",
    name: "Baodu",
    lat: 39.93,
    lng: 116.385,
    imageSeed: "beijing-baodu",
    categories: {
      "where-to-eat": {
        href: "/destinations/beijing/where-to-eat/baodu",
        hook: "Traditional Beijing tripe snack — an acquired taste locals love.",
        tag: "Local · ¥20",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "tanghulu",
    name: "Tanghulu",
    lat: 39.928,
    lng: 116.392,
    imageSeed: "beijing-tanghulu",
    categories: {
      "where-to-eat": {
        href: "/destinations/beijing/where-to-eat/tanghulu",
        hook: "Candied hawthorn on sticks — sweet, tart, and photogenic.",
        tag: "Snack · ¥10",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "dongcheng-hutong",
    name: "Dongcheng Hutong",
    lat: 39.93,
    lng: 116.4,
    imageSeed: "beijing-dongcheng-hutong",
    categories: {
      "things-to-do": {
        href: "/destinations/beijing/what-to-do/hutong",
        hook: "Beijing's ancient alleyway neighborhoods.",
        tag: "Free",
      },
      "where-to-stay": {
        href: "/destinations/beijing/where-to-stay/dongcheng-hutong",
        hook: "Old Beijing · Courtyard stays · Walking distance to Forbidden City",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "wangfujing",
    name: "Wangfujing",
    lat: 39.915,
    lng: 116.41,
    imageSeed: "beijing-wangfujing",
    categories: {
      "where-to-stay": {
        href: "/destinations/beijing/where-to-stay/wangfujing",
        hook: "Shopping · Central · Walking distance to major sights",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "sanlitun",
    name: "Sanlitun",
    lat: 39.935,
    lng: 116.455,
    imageSeed: "beijing-sanlitun",
    categories: {
      "where-to-stay": {
        href: "/destinations/beijing/where-to-stay/sanlitun",
        hook: "Nightlife · Expat hub · Modern bars and international dining",
        tag: "¥¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "haidian",
    name: "Haidian",
    lat: 39.96,
    lng: 116.31,
    imageSeed: "beijing-haidian",
    categories: {
      "where-to-stay": {
        href: "/destinations/beijing/where-to-stay/haidian",
        hook: "University vibe · Tech district · Quieter and affordable",
        tag: "¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
];

export const markers: MarkerLocation[] = [
  { id: "forbidden-city", name: "Forbidden City", lat: 39.9169, lng: 116.3904, categories: ["attraction"] },
  { id: "great-wall", name: "Great Wall (Mutianyu)", lat: 40.4319, lng: 116.5704, categories: ["attraction"] },
  { id: "temple-of-heaven", name: "Temple of Heaven", lat: 39.8822, lng: 116.4066, categories: ["attraction"] },
  { id: "summer-palace", name: "Summer Palace", lat: 39.9999, lng: 116.2755, categories: ["attraction"] },
  { id: "hutong", name: "Hutong Alleys", lat: 39.937, lng: 116.3874, categories: ["attraction"] },
  { id: "lama-temple", name: "Lama Temple", lat: 39.9468, lng: 116.4177, categories: ["attraction"] },
  { id: "798-art", name: "798 Art District", lat: 39.9845, lng: 116.4953, categories: ["attraction"] },
  { id: "peking-duck", name: "Peking Duck", lat: 39.905, lng: 116.395, categories: ["eat"] },
  { id: "jianbing", name: "Jianbing", lat: 39.925, lng: 116.41, categories: ["eat"] },
  { id: "zhajiangmian", name: "Zhajiangmian", lat: 39.92, lng: 116.39, categories: ["eat"] },
  { id: "lamb-skewers", name: "Lamb Skewers", lat: 39.935, lng: 116.42, categories: ["eat"] },
  { id: "baodu", name: "Baodu", lat: 39.93, lng: 116.385, categories: ["eat"] },
  { id: "tanghulu", name: "Tanghulu", lat: 39.928, lng: 116.392, categories: ["eat"] },
  { id: "dongcheng-hutong", name: "Dongcheng Hutong", lat: 39.93, lng: 116.4, categories: ["attraction", "stay"] },
  { id: "wangfujing", name: "Wangfujing", lat: 39.915, lng: 116.41, categories: ["stay"] },
  { id: "sanlitun", name: "Sanlitun", lat: 39.935, lng: 116.455, categories: ["stay"] },
  { id: "haidian", name: "Haidian", lat: 39.96, lng: 116.31, categories: ["stay"] },
];
