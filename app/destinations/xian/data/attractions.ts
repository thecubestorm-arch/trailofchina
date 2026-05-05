import type { MarkerLocation, UnifiedLocation } from "../types";

export const unifiedLocations: UnifiedLocation[] = [
  {
    id: "terracotta-warriors",
    name: "Terracotta Warriors",
    lat: 34.384,
    lng: 109.278,
    imageSeed: "xian-terracotta-warriors",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/terracotta-warriors",
        hook: "The iconic clay army of Emperor Qin Shi Huang. A major half-day trip about 40km from the city center.",
        tag: "¥120",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "city-wall",
    name: "Xi'an City Wall",
    lat: 34.258,
    lng: 108.945,
    imageSeed: "xian-city-wall",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/city-wall",
        hook: "China's best-preserved ancient city wall with a full bikeable loop on top.",
        tag: "¥54",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "muslim-quarter",
    name: "Muslim Quarter",
    lat: 34.263,
    lng: 108.941,
    imageSeed: "xian-muslim-quarter",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/muslim-quarter",
        hook: "Vibrant street food market and cultural hub in Xi'an's old city.",
        tag: "Free",
      },
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/muslim-quarter",
        hook: "Food heaven · Walk to Bell Tower · Best for atmosphere after dark",
        tag: "¥¥",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "big-wild-goose-pagoda",
    name: "Big Wild Goose Pagoda",
    lat: 34.219,
    lng: 108.964,
    imageSeed: "xian-big-wild-goose-pagoda",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/big-wild-goose-pagoda",
        hook: "Iconic Tang Dynasty pagoda with broad plaza views and a popular night light show.",
        tag: "¥40",
      },
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/dayan-pagoda",
        hook: "Modern · Quiet · Family-friendly with broad avenues and newer hotels",
        tag: "¥¥",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "shaanxi-history-museum",
    name: "Shaanxi History Museum",
    lat: 34.223,
    lng: 108.958,
    imageSeed: "xian-shaanxi-history-museum",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/shaanxi-history-museum",
        hook: "World-class collection spanning Zhou bronzes to Tang treasures. Free, but booking ahead is essential.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "bell-tower",
    name: "Bell Tower",
    lat: 34.259,
    lng: 108.942,
    imageSeed: "xian-bell-tower",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/bell-tower",
        hook: "Ming Dynasty landmark at Xi'an's historic center, surrounded by major shopping and transit links.",
        tag: "¥30",
      },
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/bell-tower",
        hook: "Central · Practical · Best-connected base for first-time visitors",
        tag: "¥¥",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "roujiamo",
    name: "Roujiamo",
    lat: 34.262,
    lng: 108.94,
    imageSeed: "xian-roujiamo",
    categories: {
      "where-to-eat": {
        href: "/destinations/xian/where-to-eat/roujiamo",
        hook: "Xi'an's famous Chinese hamburger: chopped, spiced meat tucked into a crisp flatbread.",
        tag: "¥15",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "biangbiang-noodles",
    name: "Biangbiang Noodles",
    lat: 34.258,
    lng: 108.943,
    imageSeed: "xian-biangbiang-noodles",
    categories: {
      "where-to-eat": {
        href: "/destinations/xian/where-to-eat/biangbiang-noodles",
        hook: "Wide hand-pulled noodles with chili oil, garlic, and that classic Shaanxi chew.",
        tag: "¥20-30",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "yangrou-paomo",
    name: "Yangrou Paomo",
    lat: 34.26,
    lng: 108.939,
    imageSeed: "xian-yangrou-paomo",
    categories: {
      "where-to-eat": {
        href: "/destinations/xian/where-to-eat/yangrou-paomo",
        hook: "Mutton soup with hand-torn bread, one of Xi'an's most traditional and filling meals.",
        tag: "¥40+",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "muslim-quarter-stay",
    name: "Muslim Quarter Area",
    lat: 34.263,
    lng: 108.941,
    imageSeed: "xian-muslim-quarter-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/muslim-quarter",
        hook: "Food heaven · Walk to Bell Tower · Best for late-night snacks and atmosphere",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "bell-tower-area",
    name: "Bell Tower Area",
    lat: 34.259,
    lng: 108.942,
    imageSeed: "xian-bell-tower-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/bell-tower",
        hook: "Central · Practical · Well-connected for metro, buses, and day-trip departures",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "dayan-pagoda-area",
    name: "Dayan Pagoda Area",
    lat: 34.219,
    lng: 108.964,
    imageSeed: "xian-dayan-pagoda-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/dayan-pagoda",
        hook: "Modern · Quiet · Family-friendly with broad plazas and newer hotels",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
];

export const markers: MarkerLocation[] = [
  {
    id: "terracotta-warriors",
    name: "Terracotta Warriors",
    lat: 34.384,
    lng: 109.278,
    categories: ["attraction"],
  },
  {
    id: "city-wall",
    name: "Xi'an City Wall",
    lat: 34.258,
    lng: 108.945,
    categories: ["attraction"],
  },
  {
    id: "muslim-quarter",
    name: "Muslim Quarter",
    lat: 34.263,
    lng: 108.941,
    categories: ["attraction", "stay"],
  },
  {
    id: "big-wild-goose-pagoda",
    name: "Big Wild Goose Pagoda",
    lat: 34.219,
    lng: 108.964,
    categories: ["attraction", "stay"],
  },
  {
    id: "shaanxi-history-museum",
    name: "Shaanxi History Museum",
    lat: 34.223,
    lng: 108.958,
    categories: ["attraction"],
  },
  {
    id: "bell-tower",
    name: "Bell Tower",
    lat: 34.259,
    lng: 108.942,
    categories: ["attraction", "stay"],
  },
  {
    id: "roujiamo",
    name: "Roujiamo",
    lat: 34.262,
    lng: 108.94,
    categories: ["eat"],
  },
  {
    id: "biangbiang-noodles",
    name: "Biangbiang Noodles",
    lat: 34.258,
    lng: 108.943,
    categories: ["eat"],
  },
  {
    id: "yangrou-paomo",
    name: "Yangrou Paomo",
    lat: 34.26,
    lng: 108.939,
    categories: ["eat"],
  },
];

export const attractionCards: UnifiedLocation[] = [
  {
    id: "terracotta-warriors",
    name: "Terracotta Warriors",
    lat: 34.384,
    lng: 109.278,
    imageSeed: "xian-terracotta-warriors",
    defaultCategory: "things-to-do",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/terracotta-warriors",
        hook: "The iconic clay army of Emperor Qin Shi Huang",
        tag: "¥120",
      },
    },
  },
  {
    id: "city-wall",
    name: "Xi'an City Wall",
    lat: 34.258,
    lng: 108.945,
    imageSeed: "xian-city-wall",
    defaultCategory: "things-to-do",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/city-wall",
        hook: "Best-preserved ancient city wall with cycling on top",
        tag: "¥54",
      },
    },
  },
  {
    id: "muslim-quarter",
    name: "Muslim Quarter",
    lat: 34.263,
    lng: 108.941,
    imageSeed: "xian-muslim-quarter",
    defaultCategory: "things-to-do",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/muslim-quarter",
        hook: "Street food market and cultural hub in the old city",
        tag: "Free",
      },
    },
  },
  {
    id: "big-wild-goose-pagoda",
    name: "Big Wild Goose Pagoda",
    lat: 34.219,
    lng: 108.964,
    imageSeed: "xian-big-wild-goose-pagoda",
    defaultCategory: "things-to-do",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/big-wild-goose-pagoda",
        hook: "Tang Dynasty pagoda with a night light show",
        tag: "¥40",
      },
    },
  },
  {
    id: "shaanxi-history-museum",
    name: "Shaanxi History Museum",
    lat: 34.223,
    lng: 108.958,
    imageSeed: "xian-shaanxi-history-museum",
    defaultCategory: "things-to-do",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/shaanxi-history-museum",
        hook: "World-class museum packed with dynastic artifacts",
        tag: "Free",
      },
    },
  },
  {
    id: "bell-tower",
    name: "Bell Tower",
    lat: 34.259,
    lng: 108.942,
    imageSeed: "xian-bell-tower",
    defaultCategory: "things-to-do",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/bell-tower",
        hook: "Ming Dynasty tower at Xi'an's central crossroads",
        tag: "¥30",
      },
    },
  },
];

export const foodCards: UnifiedLocation[] = [
  {
    id: "roujiamo",
    name: "Roujiamo",
    lat: 34.262,
    lng: 108.94,
    imageSeed: "xian-roujiamo",
    defaultCategory: "where-to-eat",
    categories: {
      "where-to-eat": {
        href: "/destinations/xian/where-to-eat/roujiamo",
        hook: "Chinese hamburger with chopped spiced meat",
        tag: "Street Food · ¥15",
      },
    },
  },
  {
    id: "biangbiang-noodles",
    name: "Biangbiang Noodles",
    lat: 34.258,
    lng: 108.943,
    imageSeed: "xian-biangbiang-noodles",
    defaultCategory: "where-to-eat",
    categories: {
      "where-to-eat": {
        href: "/destinations/xian/where-to-eat/biangbiang-noodles",
        hook: "Wide hand-pulled noodles with chili oil and garlic",
        tag: "Restaurant · ¥20-30",
      },
    },
  },
  {
    id: "yangrou-paomo",
    name: "Yangrou Paomo",
    lat: 34.26,
    lng: 108.939,
    imageSeed: "xian-yangrou-paomo",
    defaultCategory: "where-to-eat",
    categories: {
      "where-to-eat": {
        href: "/destinations/xian/where-to-eat/yangrou-paomo",
        hook: "Mutton soup with hand-torn bread, rich and deeply traditional",
        tag: "Local Classic · ¥40+",
      },
    },
  },
];

export const neighborhoodCards: UnifiedLocation[] = [
  {
    id: "muslim-quarter-stay",
    name: "Muslim Quarter Area",
    lat: 34.263,
    lng: 108.941,
    imageSeed: "xian-muslim-quarter-stay",
    defaultCategory: "where-to-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/muslim-quarter",
        hook: "Food heaven · Walk to Bell Tower",
        tag: "",
      },
    },
  },
  {
    id: "bell-tower-area",
    name: "Bell Tower Area",
    lat: 34.259,
    lng: 108.942,
    imageSeed: "xian-bell-tower-stay",
    defaultCategory: "where-to-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/bell-tower",
        hook: "Central · Practical · Well-connected",
        tag: "",
      },
    },
  },
  {
    id: "dayan-pagoda-area",
    name: "Dayan Pagoda Area",
    lat: 34.219,
    lng: 108.964,
    imageSeed: "xian-dayan-pagoda-stay",
    defaultCategory: "where-to-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/xian/where-to-stay/dayan-pagoda",
        hook: "Modern · Quiet · Family-friendly",
        tag: "",
      },
    },
  },
];
