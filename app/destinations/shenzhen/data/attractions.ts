import type { MarkerLocation, UnifiedLocation } from "../types";

export const unifiedLocations: UnifiedLocation[] = [
  {
    id: "huaqiangbei",
    name: "Huaqiangbei",
    lat: 22.5478,
    lng: 114.0889,
    imageSeed: "shenzhen-huaqiangbei",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do/huaqiangbei",
        hook: "If it has a circuit board, Huaqiangbei sells it — this 1 km stretch has every component ever made.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "ping-an-finance-centre",
    name: "Ping An Finance Centre",
    lat: 22.5322,
    lng: 114.0547,
    imageSeed: "shenzhen-ping-an-finance",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do/ping-an-finance-centre",
        hook: "599 m tall, China's 2nd tallest building — observation deck on the 116th floor.",
        tag: "¥200",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "dafen-oil-painting-village",
    name: "Dafen Oil Painting Village",
    lat: 22.5878,
    lng: 114.0994,
    imageSeed: "shenzhen-dafen-village",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do/dafen-oil-painting-village",
        hook: "Dafen produces more oil paintings than anywhere on Earth — 5 million a year.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "oct-loft",
    name: "OCT Loft",
    lat: 22.5392,
    lng: 113.9958,
    imageSeed: "shenzhen-oct-loft",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do/oct-loft",
        hook: "Shenzhen's art district — former factory turned creative hub with galleries and cafés.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "lianhuashan-park",
    name: "Lianhuashan Park",
    lat: 22.5528,
    lng: 114.0550,
    imageSeed: "shenzhen-lianhuashan-park",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do/lianhuashan-park",
        hook: "Climb to the bronze Deng Xiaoping statue for the best free skyline view in Shenzhen.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "window-of-the-world",
    name: "Window of the World",
    lat: 22.5342,
    lng: 114.0342,
    imageSeed: "shenzhen-window-of-the-world",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do/window-of-the-world",
        hook: "Miniature world landmarks theme park — the Eiffel Tower at 1/3 scale, and 130 more.",
        tag: "¥220",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "dim-sum",
    name: "Dim Sum",
    lat: 22.5375,
    lng: 114.0583,
    imageSeed: "shenzhen-dim-sum",
    categories: {
      "where-to-eat": {
        href: "/destinations/shenzhen/where-to-eat/dim-sum",
        hook: "Shenzhen's Cantonese breakfast tradition — har gow, siu mai, and char siu bao.",
        tag: "¥50–100",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "seafood-coco-park",
    name: "Seafood at Coco Park",
    lat: 22.5308,
    lng: 114.0481,
    imageSeed: "shenzhen-seafood-coco-park",
    categories: {
      "where-to-eat": {
        href: "/destinations/shenzhen/where-to-eat/seafood-coco-park",
        hook: "Fresh seafood streets near Coco Park — pick your fish, they cook it.",
        tag: "¥100–200",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "hakka-cuisine",
    name: "Hakka Cuisine",
    lat: 22.5850,
    lng: 114.1000,
    imageSeed: "shenzhen-hakka-cuisine",
    categories: {
      "where-to-eat": {
        href: "/destinations/shenzhen/where-to-eat/hakka-cuisine",
        hook: "Shenzhen's original regional food — stuffed tofu, salt-baked chicken, and pork belly.",
        tag: "¥40–80",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "chongqing-hotpot-sz",
    name: "Chongqing Hotpot in Shenzhen",
    lat: 22.5361,
    lng: 114.0550,
    imageSeed: "shenzhen-hotpot",
    categories: {
      "where-to-eat": {
        href: "/destinations/shenzhen/where-to-eat/chongqing-hotpot",
        hook: "The mashup city does spicy — authentic Chongqing hotpot without leaving Shenzhen.",
        tag: "¥80–150",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "street-food-dongmen",
    name: "Street Food at Dongmen",
    lat: 22.5492,
    lng: 114.1197,
    imageSeed: "shenzhen-dongmen-street-food",
    categories: {
      "where-to-eat": {
        href: "/destinations/shenzhen/where-to-eat/street-food-dongmen",
        hook: "Old street night market — stinky tofu, skewers, and bubble tea at Luohu's busiest spot.",
        tag: "¥10–30",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "futian-district",
    name: "Futian District",
    lat: 22.5333,
    lng: 114.0583,
    imageSeed: "shenzhen-futian-district",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do",
        hook: "Central business district with Coco Park nightlife.",
        tag: "",
      },
      "where-to-stay": {
        href: "/destinations/shenzhen/where-to-stay/futian-district",
        hook: "Central business · Coco Park · Metro hub",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "nanshan-district",
    name: "Nanshan District",
    lat: 22.5336,
    lng: 113.9300,
    imageSeed: "shenzhen-nanshan-district",
    categories: {
      "things-to-do": {
        href: "/destinations/shenzhen/what-to-do/oct-loft",
        hook: "Tech district near OCT Loft and Sea World.",
        tag: "",
      },
      "where-to-stay": {
        href: "/destinations/shenzhen/where-to-stay/nanshan-district",
        hook: "Tech district · OCT Loft · Sea World",
        tag: "¥¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "luohu-district",
    name: "Luohu District",
    lat: 22.5492,
    lng: 114.1197,
    imageSeed: "shenzhen-luohu-district",
    categories: {
      "where-to-stay": {
        href: "/destinations/shenzhen/where-to-stay/luohu-district",
        hook: "Hong Kong border crossing · Budget options",
        tag: "¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
];

export const markers: MarkerLocation[] = [
  { id: "huaqiangbei", name: "Huaqiangbei", lat: 22.5478, lng: 114.0889, categories: ["attraction"] },
  { id: "ping-an-finance-centre", name: "Ping An Finance Centre", lat: 22.5322, lng: 114.0547, categories: ["attraction"] },
  { id: "dafen-oil-painting-village", name: "Dafen Oil Painting Village", lat: 22.5878, lng: 114.0994, categories: ["attraction"] },
  { id: "oct-loft", name: "OCT Loft", lat: 22.5392, lng: 113.9958, categories: ["attraction"] },
  { id: "lianhuashan-park", name: "Lianhuashan Park", lat: 22.5528, lng: 114.0550, categories: ["attraction"] },
  { id: "window-of-the-world", name: "Window of the World", lat: 22.5342, lng: 114.0342, categories: ["attraction"] },
  { id: "dim-sum", name: "Dim Sum", lat: 22.5375, lng: 114.0583, categories: ["eat"] },
  { id: "seafood-coco-park", name: "Seafood at Coco Park", lat: 22.5308, lng: 114.0481, categories: ["eat"] },
  { id: "hakka-cuisine", name: "Hakka Cuisine", lat: 22.5850, lng: 114.1000, categories: ["eat"] },
  { id: "chongqing-hotpot-sz", name: "Chongqing Hotpot in Shenzhen", lat: 22.5361, lng: 114.0550, categories: ["eat"] },
  { id: "street-food-dongmen", name: "Street Food at Dongmen", lat: 22.5492, lng: 114.1197, categories: ["eat"] },
  { id: "futian-district", name: "Futian District", lat: 22.5333, lng: 114.0550, categories: ["attraction", "stay"] },
  { id: "nanshan-district", name: "Nanshan District", lat: 22.5336, lng: 113.9300, categories: ["stay"] },
  { id: "luohu-district", name: "Luohu District", lat: 22.5492, lng: 114.1197, categories: ["stay"] },
];