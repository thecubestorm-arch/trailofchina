import {
  Calendar,
  Car,
  CloudRain,
  CreditCard,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Sun,
  Sunrise,
  Sunset,
  Thermometer,
  TrainFront,
  Wifi,
} from "lucide-react";
import type { CityHubConfig } from "../../../components/CityHubTemplate/types";
import { shenzhenBoundary, shenzhenMaxBounds } from "./data/shenzhen-boundary";
import { metroLines } from "./data/metro-lines";
import { markers, unifiedLocations } from "./data/attractions";
import { transportHubs } from "./data/transport-hubs";

export const shenzhenConfig: CityHubConfig = {
  slug: "shenzhen",
  nameEn: "Shenzhen",
  nameZh: "深圳",
  tagline: "China's Silicon Valley — where tomorrow gets built today",
  watermark: "深圳",
  searchPlaceholder: 'Filter Shenzhen... (e.g. "electronics", "dim sum", "free")',
  mapCenter: [22.5431, 114.0579],
  mapZoom: 11,
  boundary: shenzhenBoundary,
  maxBounds: shenzhenMaxBounds,
  gallerySeeds: [
    "shenzhen-skyline-night",
    "shenzhen-huaqiangbei-market",
    "shenzhen-dafen-painting-village",
    "shenzhen-ping-an-tower",
    "shenzhen-oct-loft-art",
    "shenzhen-lianhuashan-view",
    "shenzhen-window-of-the-world",
  ],
  galleryAlts: [
    "Shenzhen skyline with Ping An Finance Centre lit up at night",
    "Huaqiangbei electronics market bustling with shoppers and neon signs",
    "Dafen Oil Painting Village artists at work in narrow alleys",
    "Ping An Finance Centre observation deck views across the city",
    "OCT Loft creative district with street art and galleries",
    "Lianhuashan Park hilltop view over Futian skyline",
    "Window of the World miniature Eiffel Tower and global landmarks",
  ],
  pills: [
    { icon: Wifi, label: "Internet:", text: "eSIM/Airalo" },
    { icon: CreditCard, label: "", text: "Alipay & WeChat Pay" },
    { icon: TrainFront, label: "", text: "Metro + DiDi" },
    { icon: Thermometer, label: "Best:", text: "Oct–Mar" },
  ],
  metroLines,
  transportHubs,
  unifiedLocations,
  markers,
  attractionCards: [
    {
      id: "huaqiangbei",
      name: "Huaqiangbei",
      lat: 22.5478,
      lng: 114.0889,
      imageSeed: "shenzhen-huaqiangbei",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/shenzhen/what-to-do/huaqiangbei",
          hook: "If it has a circuit board, Huaqiangbei sells it — this 1 km stretch has every component ever made.",
          tag: "Free",
        },
      },
    },
    {
      id: "ping-an-finance-centre",
      name: "Ping An Finance Centre",
      lat: 22.5322,
      lng: 114.0547,
      imageSeed: "shenzhen-ping-an-finance",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/shenzhen/what-to-do/ping-an-finance-centre",
          hook: "599 m tall, China's 2nd tallest building — observation deck on the 116th floor.",
          tag: "¥200",
        },
      },
    },
    {
      id: "dafen-oil-painting-village",
      name: "Dafen Oil Painting Village",
      lat: 22.5878,
      lng: 114.0994,
      imageSeed: "shenzhen-dafen-village",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/shenzhen/what-to-do/dafen-oil-painting-village",
          hook: "Dafen produces more oil paintings than anywhere on Earth — 5 million a year.",
          tag: "Free",
        },
      },
    },
    {
      id: "oct-loft",
      name: "OCT Loft",
      lat: 22.5392,
      lng: 113.9958,
      imageSeed: "shenzhen-oct-loft",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/shenzhen/what-to-do/oct-loft",
          hook: "Shenzhen's art district — former factory turned creative hub with galleries and cafés.",
          tag: "Free",
        },
      },
    },
    {
      id: "lianhuashan-park",
      name: "Lianhuashan Park",
      lat: 22.5528,
      lng: 114.0550,
      imageSeed: "shenzhen-lianhuashan-park",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/shenzhen/what-to-do/lianhuashan-park",
          hook: "Climb to the bronze Deng Xiaoping statue for the best free skyline view in Shenzhen.",
          tag: "Free",
        },
      },
    },
    {
      id: "window-of-the-world",
      name: "Window of the World",
      lat: 22.5342,
      lng: 114.0342,
      imageSeed: "shenzhen-window-of-the-world",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/shenzhen/what-to-do/window-of-the-world",
          hook: "Miniature world landmarks theme park — the Eiffel Tower at 1/3 scale, and 130 more.",
          tag: "¥220",
        },
      },
    },
  ],
  foodCards: [
    {
      id: "dim-sum",
      name: "Dim Sum",
      lat: 22.5375,
      lng: 114.0583,
      imageSeed: "shenzhen-dim-sum",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/shenzhen/where-to-eat/dim-sum",
          hook: "Shenzhen's Cantonese breakfast tradition — har gow, siu mai, and char siu bao.",
          tag: "Cantonese · ¥50–100",
        },
      },
    },
    {
      id: "seafood-coco-park",
      name: "Seafood at Coco Park",
      lat: 22.5308,
      lng: 114.0481,
      imageSeed: "shenzhen-seafood-coco-park",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/shenzhen/where-to-eat/seafood-coco-park",
          hook: "Fresh seafood streets near Coco Park — pick your fish, they cook it.",
          tag: "Seafood · ¥100–200",
        },
      },
    },
    {
      id: "hakka-cuisine",
      name: "Hakka Cuisine",
      lat: 22.5850,
      lng: 114.1000,
      imageSeed: "shenzhen-hakka-cuisine",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/shenzhen/where-to-eat/hakka-cuisine",
          hook: "Shenzhen's original regional food — stuffed tofu, salt-baked chicken, and pork belly.",
          tag: "Local · ¥40–80",
        },
      },
    },
    {
      id: "chongqing-hotpot-sz",
      name: "Chongqing Hotpot in Shenzhen",
      lat: 22.5361,
      lng: 114.0550,
      imageSeed: "shenzhen-hotpot",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/shenzhen/where-to-eat/chongqing-hotpot",
          hook: "The mashup city does spicy — authentic Chongqing hotpot without leaving Shenzhen.",
          tag: "Spicy · ¥80–150",
        },
      },
    },
    {
      id: "street-food-dongmen",
      name: "Street Food at Dongmen",
      lat: 22.5492,
      lng: 114.1197,
      imageSeed: "shenzhen-dongmen-street-food",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/shenzhen/where-to-eat/street-food-dongmen",
          hook: "Old street night market — stinky tofu, skewers, and bubble tea at Luohu's busiest spot.",
          tag: "Street Food · ¥10–30",
        },
      },
    },
  ],
  neighborhoodCards: [
    {
      id: "futian-district",
      name: "Futian District",
      lat: 22.5333,
      lng: 114.0550,
      imageSeed: "shenzhen-futian-district",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/shenzhen/where-to-stay/futian-district",
          hook: "Central business · Coco Park · Metro hub",
          tag: "¥¥",
        },
      },
    },
    {
      id: "nanshan-district",
      name: "Nanshan District",
      lat: 22.5336,
      lng: 113.9300,
      imageSeed: "shenzhen-nanshan-district",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/shenzhen/where-to-stay/nanshan-district",
          hook: "Tech district · OCT Loft · Sea World",
          tag: "¥¥¥",
        },
      },
    },
    {
      id: "luohu-district",
      name: "Luohu District",
      lat: 22.5492,
      lng: 114.1197,
      imageSeed: "shenzhen-luohu-district",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/shenzhen/where-to-stay/luohu-district",
          hook: "Hong Kong border · Budget options",
          tag: "¥",
        },
      },
    },
  ],
  dayTripCards: [
    {
      id: "hong-kong-day-trip",
      name: "Hong Kong Day Trip",
      lat: 22.3193,
      lng: 114.1694,
      imageSeed: "shenzhen-hong-kong-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/shenzhen/day-trips/hong-kong",
          hook: "You're 15 minutes from Hong Kong — walk across the border at Futian, take the MTR to Central.",
          tag: "Full day",
        },
      },
    },
    {
      id: "guangzhou-day-trip",
      name: "Guangzhou Day Trip",
      lat: 23.1291,
      lng: 113.2644,
      imageSeed: "shenzhen-guangzhou-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/shenzhen/day-trips/guangzhou",
          hook: "30 minutes by bullet train — 2,200 years of history and the world's best dim sum.",
          tag: "Full day",
        },
      },
    },
  ],
  localTips: [
    {
      id: "hk-border-crossing",
      title: "Hong Kong Border",
      text: "Futian checkpoint is fastest. Luohu is busier but opens earlier.",
      icon: TrainFront,
      href: "/destinations/shenzhen/local-tips",
    },
    {
      id: "huaqiangbei-bargaining",
      title: "Huaqiangbei Tips",
      text: "Bargain hard. If it seems too cheap, it's probably fake.",
      icon: Lightbulb,
      href: "/destinations/shenzhen/local-tips",
    },
    {
      id: "typhoon-season",
      title: "Typhoon Season",
      text: "July–September. Trains and flights can cancel with little notice.",
      icon: CloudRain,
      href: "/destinations/shenzhen/local-tips",
    },
    {
      id: "metro-vs-didi",
      title: "Metro vs DiDi",
      text: "Metro is faster at rush hour. DiDi for late night and rain.",
      icon: Car,
      href: "/destinations/shenzhen/local-tips",
    },
  ],
  itinerary: [
    {
      dayTitle: "Day 1: Tech & Skyline",
      timeOfDay: "morning",
      items: [
        {
          name: "Huaqiangbei Electronics Market",
          href: "/destinations/shenzhen/what-to-do/huaqiangbei",
          time: "2–3h",
          cost: "Free",
          imageSeed: "shenzhen-huaqiangbei",
          desc: "Dive into the world's largest electronics market. Browse components, gadgets, and drones you've never seen.",
        },
      ],
    },
    {
      dayTitle: "Day 1: Tech & Skyline",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Ping An Finance Centre",
          href: "/destinations/shenzhen/what-to-do/ping-an-finance-centre",
          time: "1.5h",
          cost: "¥200",
          imageSeed: "shenzhen-ping-an-finance",
          desc: "Ride the high-speed elevator to the 116th floor observation deck for 360° views across Shenzhen and into Hong Kong.",
        },
      ],
    },
    {
      dayTitle: "Day 1: Tech & Skyline",
      timeOfDay: "evening",
      items: [
        {
          name: "Coco Park Nightlife",
          href: "/destinations/shenzhen/where-to-eat/seafood-coco-park",
          time: "2–3h",
          cost: "Varies",
          imageSeed: "shenzhen-seafood-coco-park",
          desc: "Dinner at the seafood streets near Coco Park, then drinks at one of Futian's many rooftop bars.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Art & Culture",
      timeOfDay: "morning",
      items: [
        {
          name: "Dafen Oil Painting Village",
          href: "/destinations/shenzhen/what-to-do/dafen-oil-painting-village",
          time: "2–3h",
          cost: "Free",
          imageSeed: "shenzhen-dafen-village",
          desc: "Watch artists copy masterworks and paint originals in a village that produces 60% of the world's oil paintings.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Art & Culture",
      timeOfDay: "afternoon",
      items: [
        {
          name: "OCT Loft",
          href: "/destinations/shenzhen/what-to-do/oct-loft",
          time: "2–3h",
          cost: "Free",
          imageSeed: "shenzhen-oct-loft",
          desc: "Explore Shenzhen's creative hub — galleries, design shops, cafés, and street art in converted factory buildings.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Art & Culture",
      timeOfDay: "evening",
      items: [
        {
          name: "Dim Sum Dinner",
          href: "/destinations/shenzhen/where-to-eat/dim-sum",
          time: "1.5h",
          cost: "¥80–120",
          imageSeed: "shenzhen-dim-sum",
          desc: "End the day with Cantonese dim sum — har gow, siu mai, and char siu bao in Futian's best restaurants.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Views & Day Trip",
      timeOfDay: "morning",
      items: [
        {
          name: "Lianhuashan Park",
          href: "/destinations/shenzhen/what-to-do/lianhuashan-park",
          time: "1–2h",
          cost: "Free",
          imageSeed: "shenzhen-lianhuashan-park",
          desc: "Morning walk up to the Deng Xiaoping statue for panoramic views of the Civic Center and skyline.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Views & Day Trip",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Hong Kong Day Trip",
          href: "/destinations/shenzhen/day-trips/hong-kong",
          time: "4–6h",
          cost: "Varies",
          imageSeed: "shenzhen-hong-kong-day-trip",
          desc: "Walk across the border at Futian, take MTR to Central, ride the tram to Victoria Peak. Back by dinner.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Views & Day Trip",
      timeOfDay: "evening",
      items: [
        {
          name: "Dongmen Night Market",
          href: "/destinations/shenzhen/where-to-eat/street-food-dongmen",
          time: "2h",
          cost: "¥30–50",
          imageSeed: "shenzhen-dongmen-street-food",
          desc: "Street food, bubble tea, and cheap electronics at Luohu's buzzing night market. The perfect Shenzhen send-off.",
        },
      ],
    },
  ],
  knowBeforeYouGo: [
    {
      icon: Wifi,
      title: "Internet",
      text: "eSIM/Airalo works great. Shenzhen has some of China's fastest 5G.",
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
      text: "Metro + DiDi. Fastest 5G in China.",
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
      text: "Best: Oct–Mar. Summer is hot and humid. Typhoons Jul–Sep.",
      href: "/plan-your-trip/best-time-to-visit",
    },
  ],
  allItems: [
    { id: "huaqiangbei-attraction", markerId: "huaqiangbei", name: "Huaqiangbei", subtitle: "If it has a circuit board, Huaqiangbei sells it — this 1 km stretch has every component ever made.", tag: "Free", imageSeed: "shenzhen-huaqiangbei", href: "/destinations/shenzhen/what-to-do/huaqiangbei", type: "attraction", filters: ["free", "modern", "landmark"] },
    { id: "ping-an-attraction", markerId: "ping-an-finance-centre", name: "Ping An Finance Centre", subtitle: "599 m tall, China's 2nd tallest building — observation deck on the 116th floor.", tag: "¥200", imageSeed: "shenzhen-ping-an-finance", href: "/destinations/shenzhen/what-to-do/ping-an-finance-centre", type: "attraction", filters: ["premium", "modern", "landmark"] },
    { id: "dafen-attraction", markerId: "dafen-oil-painting-village", name: "Dafen Oil Painting Village", subtitle: "Dafen produces more oil paintings than anywhere on Earth — 5 million a year.", tag: "Free", imageSeed: "shenzhen-dafen-village", href: "/destinations/shenzhen/what-to-do/dafen-oil-painting-village", type: "attraction", filters: ["free", "local", "landmark"] },
    { id: "oct-attraction", markerId: "oct-loft", name: "OCT Loft", subtitle: "Shenzhen's art district — former factory turned creative hub with galleries and cafés.", tag: "Free", imageSeed: "shenzhen-oct-loft", href: "/destinations/shenzhen/what-to-do/oct-loft", type: "attraction", filters: ["free", "modern", "local"] },
    { id: "lianhuashan-attraction", markerId: "lianhuashan-park", name: "Lianhuashan Park", subtitle: "Climb to the bronze Deng Xiaoping statue for the best free skyline view in Shenzhen.", tag: "Free", imageSeed: "shenzhen-lianhuashan-park", href: "/destinations/shenzhen/what-to-do/lianhuashan-park", type: "attraction", filters: ["free", "family", "landmark"] },
    { id: "window-attraction", markerId: "window-of-the-world", name: "Window of the World", subtitle: "Miniature world landmarks theme park — the Eiffel Tower at 1/3 scale, and 130 more.", tag: "¥220", imageSeed: "shenzhen-window-of-the-world", href: "/destinations/shenzhen/what-to-do/window-of-the-world", type: "attraction", filters: ["premium", "family", "landmark"] },
    { id: "dim-sum-food", markerId: "dim-sum", name: "Dim Sum", subtitle: "Shenzhen's Cantonese breakfast tradition — har gow, siu mai, and char siu bao.", tag: "Cantonese · ¥50–100", imageSeed: "shenzhen-dim-sum", href: "/destinations/shenzhen/where-to-eat/dim-sum", type: "food", filters: ["midrange", "local", "food"] },
    { id: "seafood-food", markerId: "seafood-coco-park", name: "Seafood at Coco Park", subtitle: "Fresh seafood streets near Coco Park — pick your fish, they cook it.", tag: "Seafood · ¥100–200", imageSeed: "shenzhen-seafood-coco-park", href: "/destinations/shenzhen/where-to-eat/seafood-coco-park", type: "food", filters: ["midrange", "food"] },
    { id: "hakka-food", markerId: "hakka-cuisine", name: "Hakka Cuisine", subtitle: "Shenzhen's original regional food — stuffed tofu, salt-baked chicken, and pork belly.", tag: "Local · ¥40–80", imageSeed: "shenzhen-hakka-cuisine", href: "/destinations/shenzhen/where-to-eat/hakka-cuisine", type: "food", filters: ["budget", "local", "food"] },
    { id: "hotpot-food", markerId: "chongqing-hotpot-sz", name: "Chongqing Hotpot in Shenzhen", subtitle: "The mashup city does spicy — authentic Chongqing hotpot without leaving Shenzhen.", tag: "Spicy · ¥80–150", imageSeed: "shenzhen-hotpot", href: "/destinations/shenzhen/where-to-eat/chongqing-hotpot", type: "food", filters: ["midrange", "food"] },
    { id: "dongmen-food", markerId: "street-food-dongmen", name: "Street Food at Dongmen", subtitle: "Old street night market — stinky tofu, skewers, and bubble tea.", tag: "Street Food · ¥10–30", imageSeed: "shenzhen-dongmen-street-food", href: "/destinations/shenzhen/where-to-eat/street-food-dongmen", type: "food", filters: ["budget", "local", "food"] },
    { id: "futian-stay", markerId: "futian-district", name: "Futian District", subtitle: "Central business · Coco Park nightlife · Best metro connections", imageSeed: "shenzhen-futian-district", href: "/destinations/shenzhen/where-to-stay/futian-district", type: "stay", filters: ["midrange", "modern", "stay"] },
    { id: "nanshan-stay", markerId: "nanshan-district", name: "Nanshan District", subtitle: "Tech district · OCT Loft · Sea World area", imageSeed: "shenzhen-nanshan-district", href: "/destinations/shenzhen/where-to-stay/nanshan-district", type: "stay", filters: ["premium", "modern", "stay"] },
    { id: "luohu-stay", markerId: "luohu-district", name: "Luohu District", subtitle: "Hong Kong border crossing · Budget options · Old Shenzhen", imageSeed: "shenzhen-luohu-district", href: "/destinations/shenzhen/where-to-stay/luohu-district", type: "stay", filters: ["budget", "local", "stay"] },
    { id: "info-internet", name: "Internet", subtitle: "eSIM/Airalo works great. Shenzhen has China's fastest 5G.", imageSeed: "", href: "/china-basics/how-to-get-internet", type: "info", icon: Wifi, filters: ["practical"] },
    { id: "info-payment", name: "Payment", subtitle: "Alipay & WeChat Pay accepted everywhere.", imageSeed: "", href: "/china-basics/what-apps-to-use/payment", type: "info", icon: CreditCard, filters: ["practical"] },
    { id: "info-transport", name: "Transport", subtitle: "Metro + DiDi. Fastest 5G in China.", imageSeed: "", href: "/china-basics/how-to-get-around", type: "info", icon: TrainFront, filters: ["practical"] },
    { id: "info-apps", name: "Apps", subtitle: "Alipay, DiDi, Amap, 12306 for trains.", imageSeed: "", href: "/china-basics/what-apps-to-use", type: "info", icon: Smartphone, filters: ["practical"] },
    { id: "info-visa", name: "Visa", subtitle: "15-30 day visa-free for most Western nationals.", imageSeed: "", href: "/china-basics/how-china-differs/visa-guide", type: "info", icon: ShieldCheck, filters: ["practical"] },
    { id: "info-weather", name: "Weather", subtitle: "Best: Oct–Mar. Summer is hot and humid. Typhoons Jul–Sep.", imageSeed: "", href: "/plan-your-trip/best-time-to-visit", type: "info", icon: Thermometer, filters: ["practical"] },
    { id: "tip-border", name: "Hong Kong Border", subtitle: "Futian checkpoint is fastest. Luohu is busier but opens earlier.", imageSeed: "", href: "/destinations/shenzhen/local-tips", type: "tip", icon: TrainFront, filters: ["practical"] },
    { id: "tip-huaqiangbei", name: "Huaqiangbei Tips", subtitle: "Bargain hard. If it seems too cheap, it's probably fake.", imageSeed: "", href: "/destinations/shenzhen/local-tips", type: "tip", icon: Lightbulb, filters: ["practical"] },
    { id: "tip-typhoon", name: "Typhoon Season", subtitle: "July–September. Trains and flights can cancel with little notice.", imageSeed: "", href: "/destinations/shenzhen/local-tips", type: "tip", icon: CloudRain, filters: ["practical"] },
    { id: "tip-metro", name: "Metro vs DiDi", subtitle: "Metro is faster at rush hour. DiDi for late night and rain.", imageSeed: "", href: "/destinations/shenzhen/local-tips", type: "tip", icon: Car, filters: ["practical"] },
    { id: "hk-day-trip", name: "Hong Kong Day Trip", subtitle: "15 min from Futian border — walk across, MTR to Central, Victoria Peak.", tag: "Full day", imageSeed: "shenzhen-hong-kong-day-trip", href: "/destinations/shenzhen/day-trips/hong-kong", type: "attraction", filters: ["modern", "family", "landmark"] },
    { id: "gz-day-trip", name: "Guangzhou Day Trip", subtitle: "30 min by bullet train — 2,200 years of history and the world's best dim sum.", tag: "Full day", imageSeed: "shenzhen-guangzhou-day-trip", href: "/destinations/shenzhen/day-trips/guangzhou", type: "attraction", filters: ["historic", "food", "landmark"] },
  ],
  footerTitle: "Ready to Explore Shenzhen?",
  footerSubtitle:
    "From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip.",
  footerTrustText:
    "Trusted by 1,000+ China travelers · Free itineraries · Local tips",
  footerQuickInfo: [
    {
      icon: Calendar,
      title: "3-4 days recommended",
      description: "Most travelers spend 3-4 days in Shenzhen",
    },
    {
      icon: Sun,
      title: "Best time: Oct–Mar",
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