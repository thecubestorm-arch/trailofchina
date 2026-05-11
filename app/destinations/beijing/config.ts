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
import { beijingBoundary, beijingMaxBounds } from "./data/beijing-boundary";
import { metroLines } from "./data/metro-lines";
import { markers, unifiedLocations } from "./data/attractions";
import { transportHubs } from "./data/transport-hubs";

export const beijingConfig: CityHubConfig = {
  slug: "beijing",
  nameEn: "Beijing",
  nameZh: "北京",
  tagline: "Imperial grandeur, hutong life, and wall-top views",
  watermark: "北京",
  searchPlaceholder: 'Filter Beijing... (e.g. "forbidden", "duck", "free")',
  mapCenter: [39.9042, 116.4074],
  mapZoom: 10,
  boundary: beijingBoundary,
  maxBounds: beijingMaxBounds,
  gallerySeeds: [
    "beijing-forbidden-city",
    "beijing-great-wall",
    "beijing-temple-of-heaven",
    "beijing-summer-palace",
    "beijing-hutong",
    "beijing-lama-temple",
    "beijing-798-art",
  ],
  galleryAlts: [
    "Forbidden City imperial palace gates at sunset, Beijing",
    "Great Wall winding over mountain ridges near Mutianyu, Beijing",
    "Temple of Heaven circular Hall of Prayer surrounded by park, Beijing",
    "Summer Palace with Kunming Lake and Long Corridor, Beijing",
    "Hutong alleyways with traditional courtyard homes, Beijing",
    "Lama Temple with incense and ornate Tibetan architecture, Beijing",
    "798 Art District industrial galleries and contemporary art, Beijing",
  ],
  pills: [
    { icon: Wifi, label: "Internet:", text: "VPN required" },
    { icon: CreditCard, label: "", text: "Cashless society" },
    { icon: TrainFront, label: "", text: "Metro + DiDi" },
    { icon: Thermometer, label: "Best:", text: "Apr–May, Sep–Oct" },
  ],
  metroLines,
  transportHubs,
  unifiedLocations,
  markers,
  attractionCards: [
    {
      id: "forbidden-city",
      name: "Forbidden City",
      lat: 39.9169,
      lng: 116.3904,
      imageSeed: "beijing-forbidden-city",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/beijing/what-to-do/forbidden-city",
          hook: "The world's largest palace complex — 600 years of imperial history in 980 buildings.",
          tag: "¥60",
        },
      },
    },
    {
      id: "great-wall",
      name: "Great Wall (Mutianyu)",
      lat: 40.4319,
      lng: 116.5704,
      imageSeed: "beijing-great-wall",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/beijing/what-to-do/great-wall",
          hook: "The best-preserved section near Beijing. Less crowded than Badaling, stunning mountain scenery.",
          tag: "¥40",
        },
      },
    },
    {
      id: "temple-of-heaven",
      name: "Temple of Heaven",
      lat: 39.8822,
      lng: 116.4066,
      imageSeed: "beijing-temple-of-heaven",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/beijing/what-to-do/temple-of-heaven",
          hook: "Where emperors prayed for harvests. The circular Hall of Prayer is iconic.",
          tag: "¥15",
        },
      },
    },
    {
      id: "summer-palace",
      name: "Summer Palace",
      lat: 39.9999,
      lng: 116.2755,
      imageSeed: "beijing-summer-palace",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/beijing/what-to-do/summer-palace",
          hook: "Imperial garden with Kunming Lake, Long Corridor, and hilltop temples.",
          tag: "¥30",
        },
      },
    },
    {
      id: "hutong",
      name: "Hutong Alleys",
      lat: 39.937,
      lng: 116.3874,
      imageSeed: "beijing-hutong",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/beijing/what-to-do/hutong",
          hook: "Beijing's ancient alleyway neighborhoods — courtyard homes, local life, hidden cafés.",
          tag: "Free",
        },
      },
    },
    {
      id: "lama-temple",
      name: "Lama Temple",
      lat: 39.9468,
      lng: 116.4177,
      imageSeed: "beijing-lama-temple",
      defaultCategory: "things-to-do",
      categories: {
        "things-to-do": {
          href: "/destinations/beijing/what-to-do/lama-temple",
          hook: "Tibetan Buddhist temple with a 26m carved sandalwood Maitreya Buddha.",
          tag: "¥25",
        },
      },
    },
  ],
  foodCards: [
    {
      id: "peking-duck",
      name: "Peking Duck",
      lat: 39.905,
      lng: 116.395,
      imageSeed: "beijing-peking-duck",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/beijing/where-to-eat/peking-duck",
          hook: "Beijing's signature roast duck",
          tag: "Premium · ¥150+",
        },
      },
    },
    {
      id: "jianbing",
      name: "Jianbing",
      lat: 39.925,
      lng: 116.41,
      imageSeed: "beijing-jianbing",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/beijing/where-to-eat/jianbing",
          hook: "Savory breakfast crepe",
          tag: "Street Food · ¥8",
        },
      },
    },
    {
      id: "zhajiangmian",
      name: "Zhajiangmian",
      lat: 39.92,
      lng: 116.39,
      imageSeed: "beijing-zhajiangmian",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/beijing/where-to-eat/zhajiangmian",
          hook: "Noodles with fermented bean sauce",
          tag: "Restaurant · ¥25",
        },
      },
    },
    {
      id: "lamb-skewers",
      name: "Lamb Skewers",
      lat: 39.935,
      lng: 116.42,
      imageSeed: "beijing-lamb-skewers",
      defaultCategory: "where-to-eat",
      categories: {
        "where-to-eat": {
          href: "/destinations/beijing/where-to-eat/lamb-skewers",
          hook: "Cumin-spiced street BBQ",
          tag: "Street Food · ¥15",
        },
      },
    },
  ],
  neighborhoodCards: [
    {
      id: "dongcheng-hutong",
      name: "Dongcheng Hutong",
      lat: 39.93,
      lng: 116.4,
      imageSeed: "beijing-dongcheng-hutong",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/beijing/where-to-stay/dongcheng-hutong",
          hook: "Old Beijing · Courtyard stays",
          tag: "",
        },
      },
    },
    {
      id: "wangfujing",
      name: "Wangfujing",
      lat: 39.915,
      lng: 116.41,
      imageSeed: "beijing-wangfujing",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/beijing/where-to-stay/wangfujing",
          hook: "Shopping · Central",
          tag: "",
        },
      },
    },
    {
      id: "sanlitun",
      name: "Sanlitun",
      lat: 39.935,
      lng: 116.455,
      imageSeed: "beijing-sanlitun",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/beijing/where-to-stay/sanlitun",
          hook: "Nightlife · Expat hub",
          tag: "",
        },
      },
    },
    {
      id: "haidian",
      name: "Haidian",
      lat: 39.96,
      lng: 116.31,
      imageSeed: "beijing-haidian",
      defaultCategory: "where-to-stay",
      categories: {
        "where-to-stay": {
          href: "/destinations/beijing/where-to-stay/haidian",
          hook: "University · Tech",
          tag: "",
        },
      },
    },
  ],
  dayTripCards: [
    {
      id: "mutianyu-great-wall-day-trip",
      name: "Mutianyu Great Wall (Day Trip)",
      lat: 40.4319,
      lng: 116.5682,
      imageSeed: "mutianyu-great-wall-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/beijing/day-trips/mutianyu-great-wall",
          hook: "90 min from Beijing — the wall section with cable car, toboggan, and zero crowds.",
          tag: "Full day",
        },
      },
    },
    {
      id: "chengde-day-trip",
      name: "Chengde Mountain Resort (Day Trip)",
      lat: 40.951,
      lng: 117.963,
      imageSeed: "chengde-mountain-resort-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/beijing/day-trips/chengde",
          hook: "1h bullet train — Qing summer capital with imperial gardens and a Little Potala Palace.",
          tag: "Full day",
        },
      },
    },
    {
      id: "ming-tombs-day-trip",
      name: "Ming Tombs (Day Trip)",
      lat: 40.2297,
      lng: 116.2225,
      imageSeed: "ming-tombs-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/beijing/day-trips/ming-tombs",
          hook: "40 min from Beijing — 13 imperial tombs, underground palace, and the Sacred Way.",
          tag: "Half day",
        },
      },
    },
    {
      id: "gubei-water-town-day-trip",
      name: "Gubei Water Town & Simatai (Day Trip)",
      lat: 40.6728,
      lng: 117.2445,
      imageSeed: "gubei-water-town-day-trip",
      defaultCategory: "day-trips",
      categories: {
        "day-trips": {
          href: "/destinations/beijing/day-trips/gubei-water-town",
          hook: "2h from Beijing — canal village by day, the only Great Wall you can walk at night.",
          tag: "Full day",
        },
      },
    },
  ],
  localTips: [
    {
      id: "forbidden-city-tickets",
      title: "Forbidden City Tickets",
      text: "Book 7 days in advance. Same-day tickets sold out by 8 AM.",
      icon: Calendar,
      href: "/destinations/beijing/local-tips",
    },
    {
      id: "great-wall-timing",
      title: "Great Wall Timing",
      text: "Mutianyu is less crowded. Go early — buses fill up by 9 AM.",
      icon: Sunrise,
      href: "/destinations/beijing/local-tips",
    },
    {
      id: "sandstorm-season",
      title: "Sandstorm Season",
      text: "Spring sandstorms (March–May) can turn the sky orange. Bring a mask.",
      icon: CloudRain,
      href: "/destinations/beijing/local-tips",
    },
    {
      id: "taxi-vs-didi",
      title: "Taxi vs DiDi",
      text: "Taxi drivers rarely speak English. DiDi with English UI is safer.",
      icon: Car,
      href: "/destinations/beijing/local-tips",
    },
  ],
  itinerary: [
    {
      dayTitle: "Day 1: Imperial Heart",
      timeOfDay: "morning",
      items: [
        {
          name: "Forbidden City",
          href: "/destinations/beijing/what-to-do/forbidden-city",
          time: "2–3h",
          cost: "¥60",
          imageSeed: "beijing-forbidden-city",
          desc: "Start early to beat the security lines and cover the main palace axis before the midday crowds.",
        },
      ],
    },
    {
      dayTitle: "Day 1: Imperial Heart",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Temple of Heaven",
          href: "/destinations/beijing/what-to-do/temple-of-heaven",
          time: "1.5h",
          cost: "¥15",
          imageSeed: "beijing-temple-of-heaven",
          desc: "Walk the temple grounds and see the Hall of Prayer for Good Harvests in the softer afternoon light.",
        },
      ],
    },
    {
      dayTitle: "Day 1: Imperial Heart",
      timeOfDay: "evening",
      items: [
        {
          name: "Wangfujing Street Food Walk",
          href: "/destinations/beijing/where-to-eat",
          time: "2h",
          cost: "Varies",
          imageSeed: "beijing-wangfujing",
          desc: "Sample snacks and take in central Beijing after dark on one of the city's busiest pedestrian streets.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Great Wall Day",
      timeOfDay: "morning",
      items: [
        {
          name: "Mutianyu Great Wall",
          href: "/destinations/beijing/what-to-do/great-wall",
          time: "4–5h",
          cost: "¥40",
          imageSeed: "beijing-great-wall",
          desc: "Choose Mutianyu for a better-preserved section, mountain views, and a calmer experience than Badaling.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Great Wall Day",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Return + Rest",
          href: "/destinations/beijing/what-to-do/great-wall",
          time: "2–3h",
          cost: "Free",
          imageSeed: "beijing-great-wall",
          desc: "Head back into the city, rest up, and avoid overpacking the day after an early Great Wall start.",
        },
      ],
    },
    {
      dayTitle: "Day 2: Great Wall Day",
      timeOfDay: "evening",
      items: [
        {
          name: "Houhai Lake Bars",
          href: "/destinations/beijing/what-to-do",
          time: "2h+",
          cost: "Varies",
          imageSeed: "beijing-hutong",
          desc: "Relax around the lake with low-key bars and an easy old-Beijing evening atmosphere.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Local Beijing",
      timeOfDay: "morning",
      items: [
        {
          name: "Hutong Walking Tour",
          href: "/destinations/beijing/what-to-do/hutong",
          time: "2–3h",
          cost: "Free",
          imageSeed: "beijing-hutong",
          desc: "Explore courtyard lanes, local shops, and slower neighborhood life in the old city.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Local Beijing",
      timeOfDay: "afternoon",
      items: [
        {
          name: "Summer Palace",
          href: "/destinations/beijing/what-to-do/summer-palace",
          time: "2–3h",
          cost: "¥30",
          imageSeed: "beijing-summer-palace",
          desc: "Spend the afternoon by Kunming Lake, then climb for a wider view over the imperial gardens.",
        },
      ],
    },
    {
      dayTitle: "Day 3: Local Beijing",
      timeOfDay: "evening",
      items: [
        {
          name: "Peking Duck Dinner",
          href: "/destinations/beijing/where-to-eat/peking-duck",
          time: "2h",
          cost: "¥150+",
          imageSeed: "beijing-peking-duck",
          desc: "Finish with Beijing's signature feast: lacquered skin, pancakes, and all the classic fixings.",
        },
      ],
    },
  ],
  knowBeforeYouGo: [
    {
      icon: Wifi,
      title: "Internet",
      text: "VPNs required. Download before landing.",
      href: "/china-basics/how-to-get-internet",
    },
    {
      icon: CreditCard,
      title: "Payment",
      text: "Alipay & WeChat Pay everywhere.",
      href: "/china-basics/what-apps-to-use/payment",
    },
    {
      icon: TrainFront,
      title: "Transport",
      text: "Metro + DiDi. Avoid rush hour.",
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
      text: "Best: Apr-May, Sep-Oct. Avoid national holidays.",
      href: "/plan-your-trip/best-time-to-visit",
    },
  ],
  allItems: [
    { id: "forbidden-city-attraction", markerId: "forbidden-city", name: "Forbidden City", subtitle: "The world's largest palace complex — 600 years of imperial history in 980 buildings.", tag: "¥60", imageSeed: "beijing-forbidden-city", href: "/destinations/beijing/what-to-do/forbidden-city", type: "attraction", filters: ["midrange", "historic", "family", "landmark"] },
    { id: "great-wall-attraction", markerId: "great-wall", name: "Great Wall (Mutianyu)", subtitle: "The best-preserved section near Beijing. Less crowded than Badaling, stunning mountain scenery.", tag: "¥40", imageSeed: "beijing-great-wall", href: "/destinations/beijing/what-to-do/great-wall", type: "attraction", filters: ["budget", "historic", "family", "landmark"] },
    { id: "temple-of-heaven-attraction", markerId: "temple-of-heaven", name: "Temple of Heaven", subtitle: "Where emperors prayed for harvests. The circular Hall of Prayer is iconic.", tag: "¥15", imageSeed: "beijing-temple-of-heaven", href: "/destinations/beijing/what-to-do/temple-of-heaven", type: "attraction", filters: ["budget", "historic", "landmark"] },
    { id: "summer-palace-attraction", markerId: "summer-palace", name: "Summer Palace", subtitle: "Imperial garden with Kunming Lake, Long Corridor, and hilltop temples.", tag: "¥30", imageSeed: "beijing-summer-palace", href: "/destinations/beijing/what-to-do/summer-palace", type: "attraction", filters: ["budget", "historic", "family", "landmark"] },
    { id: "hutong-attraction", markerId: "hutong", name: "Hutong Alleys", subtitle: "Beijing's ancient alleyway neighborhoods — courtyard homes, local life, hidden cafés.", tag: "Free", imageSeed: "beijing-hutong", href: "/destinations/beijing/what-to-do/hutong", type: "attraction", filters: ["free", "local", "historic"] },
    { id: "lama-temple-attraction", markerId: "lama-temple", name: "Lama Temple", subtitle: "Tibetan Buddhist temple with a 26m carved sandalwood Maitreya Buddha.", tag: "¥25", imageSeed: "beijing-lama-temple", href: "/destinations/beijing/what-to-do/lama-temple", type: "attraction", filters: ["budget", "historic", "landmark"] },
    { id: "peking-duck-food", markerId: "peking-duck", name: "Peking Duck", subtitle: "Beijing's signature roast duck", tag: "Premium · ¥150+", imageSeed: "beijing-peking-duck", href: "/destinations/beijing/where-to-eat/peking-duck", type: "food", filters: ["premium", "food"] },
    { id: "jianbing-food", markerId: "jianbing", name: "Jianbing", subtitle: "Savory breakfast crepe", tag: "Street Food · ¥8", imageSeed: "beijing-jianbing", href: "/destinations/beijing/where-to-eat/jianbing", type: "food", filters: ["budget", "local", "food"] },
    { id: "zhajiangmian-food", markerId: "zhajiangmian", name: "Zhajiangmian", subtitle: "Noodles with fermented bean sauce", tag: "Restaurant · ¥25", imageSeed: "beijing-zhajiangmian", href: "/destinations/beijing/where-to-eat/zhajiangmian", type: "food", filters: ["budget", "local", "food"] },
    { id: "lamb-skewers-food", markerId: "lamb-skewers", name: "Lamb Skewers", subtitle: "Cumin-spiced street BBQ", tag: "Street Food · ¥15", imageSeed: "beijing-lamb-skewers", href: "/destinations/beijing/where-to-eat/lamb-skewers", type: "food", filters: ["budget", "local", "food"] },
    { id: "dongcheng-hutong-stay", markerId: "dongcheng-hutong", name: "Dongcheng Hutong", subtitle: "Old Beijing · Courtyard stays · Near Forbidden City", imageSeed: "beijing-dongcheng-hutong", href: "/destinations/beijing/where-to-stay/dongcheng-hutong", type: "stay", filters: ["midrange", "local", "historic", "stay"] },
    { id: "wangfujing-stay", markerId: "wangfujing", name: "Wangfujing", subtitle: "Shopping · Central · Walking distance to major sights", imageSeed: "beijing-wangfujing", href: "/destinations/beijing/where-to-stay/wangfujing", type: "stay", filters: ["midrange", "modern", "stay"] },
    { id: "sanlitun-stay", markerId: "sanlitun", name: "Sanlitun", subtitle: "Nightlife · Expat hub · Modern bars and dining", imageSeed: "beijing-sanlitun", href: "/destinations/beijing/where-to-stay/sanlitun", type: "stay", filters: ["premium", "modern", "nightlife", "stay"] },
    { id: "haidian-stay", markerId: "haidian", name: "Haidian", subtitle: "University · Tech · Quieter and affordable", imageSeed: "beijing-haidian", href: "/destinations/beijing/where-to-stay/haidian", type: "stay", filters: ["budget", "local", "stay"] },
    { id: "info-internet", name: "Internet", subtitle: "VPNs required. Download before landing.", imageSeed: "", href: "/china-basics/how-to-get-internet", type: "info", icon: Wifi, filters: ["practical"] },
    { id: "info-payment", name: "Payment", subtitle: "Alipay & WeChat Pay everywhere.", imageSeed: "", href: "/china-basics/what-apps-to-use/payment", type: "info", icon: CreditCard, filters: ["practical"] },
    { id: "info-transport", name: "Transport", subtitle: "Metro + DiDi. Avoid rush hour.", imageSeed: "", href: "/china-basics/how-to-get-around", type: "info", icon: TrainFront, filters: ["practical"] },
    { id: "info-apps", name: "Apps", subtitle: "Alipay, DiDi, Amap, 12306 for trains.", imageSeed: "", href: "/china-basics/what-apps-to-use", type: "info", icon: Smartphone, filters: ["practical"] },
    { id: "info-visa", name: "Visa", subtitle: "15-30 day visa-free for most Western nationals.", imageSeed: "", href: "/china-basics/how-china-differs/visa-guide", type: "info", icon: ShieldCheck, filters: ["practical"] },
    { id: "info-weather", name: "Weather", subtitle: "Best: Apr-May, Sep-Oct. Avoid national holidays.", imageSeed: "", href: "/plan-your-trip/best-time-to-visit", type: "info", icon: Thermometer, filters: ["practical"] },
    { id: "tip-forbidden-city", name: "Forbidden City Tickets", subtitle: "Book 7 days in advance. Same-day tickets sold out by 8 AM.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: Calendar, filters: ["practical"] },
    { id: "tip-great-wall", name: "Great Wall Timing", subtitle: "Mutianyu is less crowded. Go early — buses fill up by 9 AM.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: Sunrise, filters: ["practical"] },
    { id: "tip-sandstorm", name: "Sandstorm Season", subtitle: "Spring sandstorms (March–May) can turn the sky orange. Bring a mask.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: CloudRain, filters: ["practical"] },
    { id: "tip-didi", name: "Taxi vs DiDi", subtitle: "Taxi drivers rarely speak English. DiDi with English UI is safer.", imageSeed: "", href: "/destinations/beijing/local-tips", type: "tip", icon: Car, filters: ["practical"] },
    { id: "mutianyu-day-trip", name: "Mutianyu Great Wall (Day Trip)", subtitle: "90 min from Beijing — cable car, toboggan, zero crowds.", tag: "Full day", imageSeed: "mutianyu-great-wall-day-trip", href: "/destinations/beijing/day-trips/mutianyu-great-wall", type: "attraction", filters: ["historic", "family", "landmark"] },
    { id: "chengde-day-trip", name: "Chengde Mountain Resort (Day Trip)", subtitle: "1h bullet train — Qing summer capital with imperial gardens.", tag: "Full day", imageSeed: "chengde-mountain-resort-day-trip", href: "/destinations/beijing/day-trips/chengde", type: "attraction", filters: ["historic", "landmark"] },
    { id: "ming-tombs-day-trip", name: "Ming Tombs (Day Trip)", subtitle: "40 min from Beijing — underground palace and Sacred Way.", tag: "Half day", imageSeed: "ming-tombs-day-trip", href: "/destinations/beijing/day-trips/ming-tombs", type: "attraction", filters: ["historic", "landmark"] },
    { id: "gubei-day-trip", name: "Gubei Water Town & Simatai (Day Trip)", subtitle: "2h from Beijing — canal village by day, night wall walk.", tag: "Full day", imageSeed: "gubei-water-town-day-trip", href: "/destinations/beijing/day-trips/gubei-water-town", type: "attraction", filters: ["historic", "family", "landmark"] },
  ],
  footerTitle: "Ready to Explore Beijing?",
  footerSubtitle:
    "From visa tips to day-by-day itineraries — everything you need for a smooth, unforgettable trip.",
  footerTrustText:
    "Trusted by 1,000+ China travelers · Free itineraries · Local tips",
  footerQuickInfo: [
    {
      icon: Calendar,
      title: "7-14 days recommended",
      description: "Most travelers spend 7-14 days in Beijing",
    },
    {
      icon: Sun,
      title: "Best time: Apr-May, Sep-Oct",
      description: "Mild weather, fewer crowds",
    },
    {
      icon: Lightbulb,
      title: "First time?",
      description: "Start with our",
      link: { href: "/plan-your-trip/preplanned-trips", label: "7-day route" },
    },
  ],
};
