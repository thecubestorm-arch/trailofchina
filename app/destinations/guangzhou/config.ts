import {
  Calendar,
  Car,
  CloudRain,
  CreditCard,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Sun,
  Thermometer,
  TrainFront,
  Wifi,
  Utensils,
} from "lucide-react";
import type { CityHubConfig } from "../../../components/CityHubTemplate/types";
import { guangzhouBoundary, guangzhouMaxBounds } from "./data/guangzhou-boundary";
import { metroLines } from "./data/metro-lines";
import { markers, unifiedLocations } from "./data/attractions";
import { transportHubs } from "./data/transport-hubs";

export const guangzhouConfig: CityHubConfig = {
  slug: "guangzhou",
  nameEn: "Guangzhou",
  nameZh: "广州",
  tagline: "2,200 years of history and the best food in China",
  watermark: "广州",
  searchPlaceholder: 'Filter Guangzhou... (e.g. "dim sum", "Canton Tower", "free")',
  mapCenter: [23.1291, 113.2644],
  mapZoom: 11,
  boundary: guangzhouBoundary,
  maxBounds: guangzhouMaxBounds,
  gallerySeeds: [
    "guangzhou-canton-tower",
    "guangzhou-shamian-island",
    "guangzhou-dim-sum",
    "guangzhou-chen-clan-hall",
    "guangzhou-beijing-road",
    "guangzhou-yuexiu-park",
    "guangzhou-sacred-heart",
  ],
  galleryAlts: [
    "Canton Tower lit up at night over the Pearl River",
    "Shamian Island tree-lined colonial boulevard",
    "Traditional dim sum spread with bamboo steamers",
    "Chen Clan Ancestral Hall ornate roof carvings",
    "Beijing Road shopping street with ancient road visible under glass",
    "Yuexiu Park Five Rams Statue and lake",
    "Sacred Heart Cathedral Gothic granite facade",
  ],
  pills: [
    { icon: Wifi, label: "Internet:", text: "eSIM/Airalo" },
    { icon: CreditCard, label: "", text: "Alipay & WeChat Pay" },
    { icon: TrainFront, label: "", text: "Metro + DiDi" },
    { icon: Thermometer, label: "Best:", text: "Oct–Dec" },
  ],
  metroLines,
  transportHubs,
  unifiedLocations,
  markers,
  attractionCards: [
    {
      id: "canton-tower",
      name: "Canton Tower",
      lat: 23.1067,
      lng: 113.3244,
      imageSeed: "guangzhou-canton-tower",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/guangzhou/what-to-do/canton-tower",
          hook: "Canton Tower isn't just an observation deck — the skywalk lets you walk outside at 488 meters.",
          tag: "¥150–298",
        },
      },
    },
    {
      id: "shamian-island",
      name: "Shamian Island",
      lat: 23.1075,
      lng: 113.2389,
      imageSeed: "guangzhou-shamian-island",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/guangzhou/what-to-do/shamian-island",
          hook: "Guangzhou's time capsule — 150-year-old European buildings under banyan trees.",
          tag: "Free",
        },
      },
    },
    {
      id: "chen-clan-ancestral-hall",
      name: "Chen Clan Ancestral Hall",
      lat: 23.1261,
      lng: 113.2150,
      imageSeed: "guangzhou-chen-clan-hall",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall",
          hook: "A Lingnan architecture masterpiece with wood and stone carvings so detailed they take your breath away.",
          tag: "¥10",
        },
      },
    },
    {
      id: "beijing-road",
      name: "Beijing Road",
      lat: 23.1264,
      lng: 113.2636,
      imageSeed: "guangzhou-beijing-road",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/guangzhou/what-to-do/beijing-road",
          hook: "A 2,000-year-old shopping street — with the ancient road visible under glass panels beneath your feet.",
          tag: "Free",
        },
      },
    },
    {
      id: "yuexiu-park",
      name: "Yuexiu Park",
      lat: 23.1414,
      lng: 113.2611,
      imageSeed: "guangzhou-yuexiu-park",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/guangzhou/what-to-do/yuexiu-park",
          hook: "Guangzhou's green lung — home to the Five Rams Statue and 600-year-old Zhenhai Tower.",
          tag: "Free",
        },
      },
    },
    {
      id: "sacred-heart-cathedral",
      name: "Sacred Heart Cathedral",
      lat: 23.1117,
      lng: 113.2508,
      imageSeed: "guangzhou-sacred-heart",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/guangzhou/what-to-do/sacred-heart-cathedral",
          hook: "Guangzhou's Notre-Dame — a Gothic cathedral built entirely from granite in 1863.",
          tag: "Free",
        },
      },
    },
  ],
  foodCards: [
    {
      id: "dim-sum",
      name: "Dim Sum",
      lat: 23.1297,
      lng: 113.2400,
      imageSeed: "guangzhou-dim-sum",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/guangzhou/where-to-eat/dim-sum",
          hook: "Guangzhou INVENTED dim sum. This is the real thing — not the version you get abroad.",
          tag: "Cantonese · ¥50–120",
        },
      },
    },
    {
      id: "wonton-noodles",
      name: "Wonton Noodles",
      lat: 23.1297,
      lng: 113.2300,
      imageSeed: "guangzhou-wonton-noodles",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/guangzhou/where-to-eat/wonton-noodles",
          hook: "Thin egg noodles, shrimp wontons, clear broth — Cantonese comfort food perfected over centuries.",
          tag: "Local · ¥15–30",
        },
      },
    },
    {
      id: "rice-noodle-rolls",
      name: "Rice Noodle Rolls",
      lat: 23.1247,
      lng: 113.2350,
      imageSeed: "guangzhou-rice-noodle-rolls",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/guangzhou/where-to-eat/rice-noodle-rolls",
          hook: "Cheung fun — silky rice noodle rolls with soy sauce, the Guangzhou breakfast staple.",
          tag: "Street · ¥8–15",
        },
      },
    },
    {
      id: "roast-goose",
      name: "Roast Goose",
      lat: 23.1147,
      lng: 113.2250,
      imageSeed: "guangzhou-roast-goose",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/guangzhou/where-to-eat/roast-goose",
          hook: "Cantonese roast goose — crispy skin, juicy meat, the dish that makes Guangzhou the food capital.",
          tag: "Cantonese · ¥60–120",
        },
      },
    },
    {
      id: "shunde-cuisine",
      name: "Shunde Cuisine",
      lat: 22.8050,
      lng: 113.2425,
      imageSeed: "guangzhou-shunde",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/guangzhou/where-to-eat/shunde-cuisine",
          hook: "Shunde is a UNESCO City of Gastronomy — and it's a suburb of Guangzhou.",
          tag: "Premium · ¥100–200",
        },
      },
    },
  ],
  neighborhoodCards: [
    {
      id: "tianhe-district",
      name: "Tianhe District",
      lat: 23.1361,
      lng: 113.3231,
      imageSeed: "guangzhou-tianhe-district",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/guangzhou/where-to-stay/tianhe-district",
          hook: "Modern CBD · Canton Tower · Shopping malls",
          tag: "¥¥",
        },
      },
    },
    {
      id: "yuexiu-district",
      name: "Yuexiu District",
      lat: 23.1297,
      lng: 113.2667,
      imageSeed: "guangzhou-yuexiu-district",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/guangzhou/where-to-stay/yuexiu-district",
          hook: "Old Guangzhou · Beijing Road · Shamian nearby",
          tag: "¥",
        },
      },
    },
    {
      id: "haizhu-district",
      name: "Haizhu District",
      lat: 23.0981,
      lng: 113.3208,
      imageSeed: "guangzhou-haizhu-district",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/guangzhou/where-to-stay/haizhu-district",
          hook: "Across the Pearl River · Canton Tower · Arts district",
          tag: "¥¥",
        },
      },
    },
  ],
  dayTripCards: [
    {
      id: "foshan-day-trip",
      name: "Foshan Day Trip",
      lat: 23.0217,
      lng: 113.1219,
      imageSeed: "guangzhou-foshan-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/guangzhou/day-trips/foshan",
          hook: "Foshan is 30 minutes by metro — the birthplace of wing chun kung fu, Lingnan architecture, and some of the best pottery in China.",
          tag: "Full day",
        },
      },
    },
    {
      id: "shenzhen-day-trip",
      name: "Shenzhen Day Trip",
      lat: 22.5431,
      lng: 114.0579,
      imageSeed: "guangzhou-shenzhen-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/guangzhou/day-trips/shenzhen",
          hook: "Shenzhen is 30 minutes by bullet train — a fishing village 40 years ago, now China's tech capital.",
          tag: "Full day",
        },
      },
    },
  ],
  localTips: [
    {
      id: "dim-sum-etiquette",
      title: "Dim Sum Etiquette",
      text: "Tap two fingers when someone pours your tea. Pour for others first.",
      icon: Utensils,
      href: "/destinations/guangzhou/local-tips",
    },
    {
      id: "line-3-warning",
      title: "Line 3 Survival",
      text: "Line 3 is the busiest metro line in China. Avoid at rush hour.",
      icon: TrainFront,
      href: "/destinations/guangzhou/local-tips",
    },
    {
      id: "cantonese-phrases",
      title: "Cantonese ≠ Mandarin",
      text: "Locals speak Cantonese. A few phrases go a long way.",
      icon: Lightbulb,
      href: "/destinations/guangzhou/local-tips",
    },
    {
      id: "typhoon-season-gz",
      title: "Typhoon Season",
      text: "July–September. Flights cancel, streets flood.",
      icon: CloudRain,
      href: "/destinations/guangzhou/local-tips",
    },
  ],
  itinerary: [
    {
      dayTitle: "Day 1: Old Guangzhou & Food",
      timeOfDay: "morning",
      items: [
        {
          name: "Dim Sum Breakfast",
          href: "/destinations/guangzhou/where-to-eat/dim-sum",
          time: "1.5–2h",
          cost: "¥50–80",
          imageSeed: "guangzhou-dim-sum",
          desc: "Start like a local — yum cha (morning tea) with har gow, siu mai, and char siu bao at a neighborhood restaurant.",
        },
      ],
    },
    {
      dayTitle: "Day 1: Old Guangzhou & Food",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Shamian Island",
          href: "/destinations/guangzhou/what-to-do/shamian-island",
          time: "1.5h",
          cost: "Free",
          imageSeed: "guangzhou-shamian-island",
          desc: "Walk the tree-lined boulevards of this colonial island — 150-year-old European buildings under banyan trees.",
        },
      ],
    },
    {
      dayTitle: "Day 1: Old Guangzhou & Food",
      timeOfDay: "evening",
      items: [
        {
          name: "Beijing Road",
          href: "/destinations/guangzhou/what-to-do/beijing-road",
          time: "2h",
          cost: "Varies",
          imageSeed: "guangzhou-beijing-road",
          desc: "Walk the 2,000-year-old shopping street — glass panels in the floor reveal the ancient road beneath your feet. Dinner at a local Cantonese restaurant.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Culture & Skyline",
      timeOfDay: "morning",
      items: [
        {
          name: "Chen Clan Ancestral Hall",
          href: "/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall",
          time: "1.5h",
          cost: "¥10",
          imageSeed: "guangzhou-chen-clan-hall",
          desc: "Marvel at the finest Lingnan architecture in China — wood carvings, stone carvings, and ceramic work that took generations to complete.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Culture & Skyline",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Yuexiu Park",
          href: "/destinations/guangzhou/what-to-do/yuexiu-park",
          time: "1.5h",
          cost: "Free",
          imageSeed: "guangzhou-yuexiu-park",
          desc: "Visit the Five Rams Statue (Guangzhou's symbol) and climb Zhenhai Tower for views over old Guangzhou.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Culture & Skyline",
      timeOfDay: "evening",
      items: [
        {
          name: "Canton Tower",
          href: "/destinations/guangzhou/what-to-do/canton-tower",
          time: "2h",
          cost: "¥150–298",
          imageSeed: "guangzhou-canton-tower",
          desc: "End the day at 488 meters — the skywalk around the top of Canton Tower at sunset, with the Pearl River delta spreading below.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Food & Day Trip",
      timeOfDay: "morning",
      items: [
        {
          name: "Rice Noodle Rolls Breakfast",
          href: "/destinations/guangzhou/where-to-eat/rice-noodle-rolls",
          time: "1h",
          cost: "¥8–15",
          imageSeed: "guangzhou-rice-noodle-rolls",
          desc: "Start with cheung fun — silky rice noodle rolls with sweet soy sauce, the Guangzhou breakfast that costs almost nothing.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Food & Day Trip",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Foshan Day Trip",
          href: "/destinations/guangzhou/day-trips/foshan",
          time: "4–6h",
          cost: "¥50–100",
          imageSeed: "guangzhou-foshan-day-trip",
          desc: "30 minutes by metro to the birthplace of wing chun kung fu. Visit the Ancestral Temple and Lingnan pottery workshops.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Food & Day Trip",
      timeOfDay: "evening",
      items: [
        {
          name: "Roast Goose Dinner",
          href: "/destinations/guangzhou/where-to-eat/roast-goose",
          time: "1.5h",
          cost: "¥60–120",
          imageSeed: "guangzhou-roast-goose",
          desc: "End your Guangzhou trip with the dish that defines this city — Cantonese roast goose, crispy skin and juicy meat.",
        },
      ],
    },
  ],
  knowBeforeYouGo: [
    {
      icon: Wifi,
      title: "Internet",
      text: "eSIM/Airalo works. VPN required for Google/Meta apps.",
      href: "/china-basics/how-to-get-internet",
    },
    {
      icon: CreditCard,
      title: "Payment",
      text: "Alipay & WeChat Pay accepted everywhere. Cash is rare.",
      href: "/china-basics/what-apps-to-use/payment",
    },
    {
      icon: TrainFront,
      title: "Transport",
      text: "Metro + DiDi. Line 3 is the busiest in China.",
      href: "/china-basics/how-to-get-around",
    },
    {
      icon: Smartphone,
      title: "Apps",
      text: "Alipay, DiDi, Amap, 12306 for trains.",
      href: "/china-basics/what-apps-to-use",
    },
    {
      icon: ShieldCheck,
      title: "Visa",
      text: "15-30 day visa-free for most Western nationals.",
      href: "/china-basics/how-china-differs/visa-guide",
    },
    {
      icon: Thermometer,
      title: "Weather",
      text: "Best: Oct–Dec. Summer is hot and humid. Typhoons Jul–Sep.",
      href: "/plan-your-trip/best-time-to-visit",
    },
  ],
  allItems: [
    { id: "canton-tower-attraction", markerId: "canton-tower", name: "Canton Tower", subtitle: "Canton Tower isn't just an observation deck — the skywalk lets you walk outside at 488 meters.", tag: "¥150–298", imageSeed: "guangzhou-canton-tower", href: "/destinations/guangzhou/what-to-do/canton-tower", type: "attraction", filters: ["premium", "modern", "landmark"] },
    { id: "shamian-attraction", markerId: "shamian-island", name: "Shamian Island", subtitle: "Guangzhou's time capsule — 150-year-old European buildings under banyan trees.", tag: "Free", imageSeed: "guangzhou-shamian-island", href: "/destinations/guangzhou/what-to-do/shamian-island", type: "attraction", filters: ["free", "historic", "landmark"] },
    { id: "chen-clan-attraction", markerId: "chen-clan-ancestral-hall", name: "Chen Clan Ancestral Hall", subtitle: "A Lingnan architecture masterpiece with wood and stone carvings so detailed they take your breath away.", tag: "¥10", imageSeed: "guangzhou-chen-clan-hall", href: "/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall", type: "attraction", filters: ["budget", "historic", "landmark"] },
    { id: "beijing-road-attraction", markerId: "beijing-road", name: "Beijing Road", subtitle: "A 2,000-year-old shopping street — with the ancient road visible under glass panels beneath your feet.", tag: "Free", imageSeed: "guangzhou-beijing-road", href: "/destinations/guangzhou/what-to-do/beijing-road", type: "attraction", filters: ["free", "historic", "landmark"] },
    { id: "yuexiu-attraction", markerId: "yuexiu-park", name: "Yuexiu Park", subtitle: "Guangzhou's green lung — home to the Five Rams Statue and 600-year-old Zhenhai Tower.", tag: "Free", imageSeed: "guangzhou-yuexiu-park", href: "/destinations/guangzhou/what-to-do/yuexiu-park", type: "attraction", filters: ["free", "historic", "family"] },
    { id: "sacred-heart-attraction", markerId: "sacred-heart-cathedral", name: "Sacred Heart Cathedral", subtitle: "Guangzhou's Notre-Dame — a Gothic cathedral built entirely from granite in 1863.", tag: "Free", imageSeed: "guangzhou-sacred-heart", href: "/destinations/guangzhou/what-to-do/sacred-heart-cathedral", type: "attraction", filters: ["free", "historic", "landmark"] },
    { id: "dim-sum-food", markerId: "dim-sum", name: "Dim Sum", subtitle: "Guangzhou INVENTED dim sum. This is the real thing — not the version you get abroad.", tag: "Cantonese · ¥50–120", imageSeed: "guangzhou-dim-sum", href: "/destinations/guangzhou/where-to-eat/dim-sum", type: "food", filters: ["midrange", "local", "food"] },
    { id: "wonton-food", markerId: "wonton-noodles", name: "Wonton Noodles", subtitle: "Thin egg noodles, shrimp wontons, clear broth — Cantonese comfort food perfected over centuries.", tag: "Local · ¥15–30", imageSeed: "guangzhou-wonton-noodles", href: "/destinations/guangzhou/where-to-eat/wonton-noodles", type: "food", filters: ["budget", "local", "food"] },
    { id: "rice-noodle-food", markerId: "rice-noodle-rolls", name: "Rice Noodle Rolls", subtitle: "Cheung fun — silky rice noodle rolls with soy sauce, the Guangzhou breakfast staple.", tag: "Street · ¥8–15", imageSeed: "guangzhou-rice-noodle-rolls", href: "/destinations/guangzhou/where-to-eat/rice-noodle-rolls", type: "food", filters: ["budget", "local", "food"] },
    { id: "roast-goose-food", markerId: "roast-goose", name: "Roast Goose", subtitle: "Cantonese roast goose — crispy skin, juicy meat, the dish that makes Guangzhou the food capital.", tag: "Cantonese · ¥60–120", imageSeed: "guangzhou-roast-goose", href: "/destinations/guangzhou/where-to-eat/roast-goose", type: "food", filters: ["midrange", "food"] },
    { id: "shunde-food", markerId: "shunde-cuisine", name: "Shunde Cuisine", subtitle: "Shunde is a UNESCO City of Gastronomy — and it's a suburb of Guangzhou.", tag: "Premium · ¥100–200", imageSeed: "guangzhou-shunde", href: "/destinations/guangzhou/where-to-eat/shunde-cuisine", type: "food", filters: ["premium", "local", "food"] },
    { id: "tianhe-stay", markerId: "tianhe-district", name: "Tianhe District", subtitle: "Modern CBD · Canton Tower · Shopping malls", imageSeed: "guangzhou-tianhe-district", href: "/destinations/guangzhou/where-to-stay/tianhe-district", type: "stay", filters: ["midrange", "modern", "stay"] },
    { id: "yuexiu-stay", markerId: "yuexiu-district", name: "Yuexiu District", subtitle: "Old Guangzhou · Beijing Road · Shamian nearby", imageSeed: "guangzhou-yuexiu-district", href: "/destinations/guangzhou/where-to-stay/yuexiu-district", type: "stay", filters: ["budget", "local", "stay"] },
    { id: "haizhu-stay", markerId: "haizhu-district", name: "Haizhu District", subtitle: "Across the Pearl River · Canton Tower · Arts district", imageSeed: "guangzhou-haizhu-district", href: "/destinations/guangzhou/where-to-stay/haizhu-district", type: "stay", filters: ["midrange", "stay"] },
    { id: "info-internet", name: "Internet", subtitle: "eSIM/Airalo works. VPN required for Google/Meta apps.", imageSeed: "", href: "/china-basics/how-to-get-internet", type: "info", icon: Wifi, filters: ["practical"] },
    { id: "info-payment", name: "Payment", subtitle: "Alipay & WeChat Pay accepted everywhere.", imageSeed: "", href: "/china-basics/what-apps-to-use/payment", type: "info", icon: CreditCard, filters: ["practical"] },
    { id: "info-transport", name: "Transport", subtitle: "Metro + DiDi. Line 3 is the busiest in China.", imageSeed: "", href: "/china-basics/how-to-get-around", type: "info", icon: TrainFront, filters: ["practical"] },
    { id: "info-apps", name: "Apps", subtitle: "Alipay, DiDi, Amap, 12306 for trains.", imageSeed: "", href: "/china-basics/what-apps-to-use", type: "info", icon: Smartphone, filters: ["practical"] },
    { id: "info-visa", name: "Visa", subtitle: "15-30 day visa-free for most Western nationals.", imageSeed: "", href: "/china-basics/how-china-differs/visa-guide", type: "info", icon: ShieldCheck, filters: ["practical"] },
    { id: "info-weather", name: "Weather", subtitle: "Best: Oct–Dec. Summer is hot and humid. Typhoons Jul–Sep.", imageSeed: "", href: "/plan-your-trip/best-time-to-visit", type: "info", icon: Thermometer, filters: ["practical"] },
    { id: "tip-dim-sum", name: "Dim Sum Etiquette", subtitle: "Tap two fingers when someone pours your tea. Pour for others first.", imageSeed: "", href: "/destinations/guangzhou/local-tips", type: "tip", icon: Utensils, filters: ["practical"] },
    { id: "tip-line-3", name: "Line 3 Survival", subtitle: "Line 3 is the busiest metro line in China. Avoid at rush hour.", imageSeed: "", href: "/destinations/guangzhou/local-tips", type: "tip", icon: TrainFront, filters: ["practical"] },
    { id: "tip-cantonese", name: "Cantonese ≠ Mandarin", subtitle: "Locals speak Cantonese. A few phrases go a long way.", imageSeed: "", href: "/destinations/guangzhou/local-tips", type: "tip", icon: Lightbulb, filters: ["practical"] },
    { id: "tip-typhoon", name: "Typhoon Season", subtitle: "July–September. Flights cancel, streets flood.", imageSeed: "", href: "/destinations/guangzhou/local-tips", type: "tip", icon: CloudRain, filters: ["practical"] },
    { id: "foshan-day-trip", name: "Foshan Day Trip", subtitle: "30 min by metro — wing chun kung fu, Lingnan architecture, and pottery.", tag: "Full day", imageSeed: "guangzhou-foshan-day-trip", href: "/destinations/guangzhou/day-trips/foshan", type: "attraction", filters: ["historic", "family", "landmark"] },
    { id: "shenzhen-day-trip", name: "Shenzhen Day Trip", subtitle: "30 min by bullet train — from fishing village to tech capital.", tag: "Full day", imageSeed: "guangzhou-shenzhen-day-trip", href: "/destinations/guangzhou/day-trips/shenzhen", type: "attraction", filters: ["modern", "landmark"] },
  ],
  footerTitle: "Ready to Explore Guangzhou?",
  footerSubtitle:
    "From dim sum etiquette to day-by-day itineraries — everything you need for a smooth, unforgettable trip.",
  footerTrustText:
    "Trusted by 1,000+ China travelers · Free itineraries · Local tips",
  footerQuickInfo: [
    {
      icon: Calendar,
      title: "3-4 days recommended",
      description: "Most travelers spend 3-4 days in Guangzhou",
    },
    {
      icon: Sun,
      title: "Best time: Oct–Dec",
      description: "Cooler weather, less humidity",
    },
    {
      icon: Lightbulb,
      title: "First time?",
      description: "Start with our",
      link: { href: "/plan-your-trip/preplanned-trips", label: "7-day route" },
    },
  ],
};