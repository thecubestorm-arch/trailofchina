import type { MarkerLocation, UnifiedLocation } from "../types";

export const unifiedLocations: UnifiedLocation[] = [
  {
    id: "giant-panda-base",
    name: "Giant Panda Breeding Research Base",
    lat: 30.732,
    lng: 104.145,
    imageSeed: "chengdu-pandas",
    categories: {
      "things-to-do": {
        href: "/destinations/chengdu/what-to-do/giant-panda-base",
        hook: "See giant pandas up close. Book early-morning tickets and arrive at opening for the liveliest enclosures.",
        tag: "¥55",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "jinli-ancient-street",
    name: "Jinli Ancient Street",
    lat: 30.647,
    lng: 104.049,
    imageSeed: "chengdu-jinli",
    categories: {
      "things-to-do": {
        href: "/destinations/chengdu/what-to-do/jinli",
        hook: "Traditional shopping street with snacks, lanterns, and easy evening atmosphere beside Wuhou Shrine.",
        tag: "Free",
      },
      "where-to-stay": {
        href: "/destinations/chengdu/where-to-stay/jinli",
        hook: "Near temples, teahouses, and a slower old-town rhythm after dark.",
        tag: "¥¥",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "wuhou-shrine",
    name: "Wuhou Shrine",
    lat: 30.646,
    lng: 104.047,
    imageSeed: "chengdu-wuhou-shrine",
    categories: {
      "things-to-do": {
        href: "/destinations/chengdu/what-to-do/wuhou-shrine",
        hook: "Chengdu's key Three Kingdoms site, combining temple halls, cypress courtyards, and Shu Han history.",
        tag: "¥50",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "dufu-cottage",
    name: "Du Fu Thatched Cottage",
    lat: 30.659,
    lng: 104.034,
    imageSeed: "chengdu-dufu-cottage",
    categories: {
      "things-to-do": {
        href: "/destinations/chengdu/what-to-do/dufu-cottage",
        hook: "Famous poet Du Fu's former residence, now a leafy museum and garden retreat.",
        tag: "¥50",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "wenshu-monastery",
    name: "Wenshu Monastery",
    lat: 30.673,
    lng: 104.066,
    imageSeed: "chengdu-wenshu-monastery",
    categories: {
      "things-to-do": {
        href: "/destinations/chengdu/what-to-do/wenshu-monastery",
        hook: "Peaceful Buddhist temple with incense courtyards, vegetarian fare, and a calmer side of central Chengdu.",
        tag: "Free",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "wide-narrow-alleys",
    name: "Wide and Narrow Alleys",
    lat: 30.669,
    lng: 104.055,
    imageSeed: "chengdu-wide-narrow-alleys",
    categories: {
      "things-to-do": {
        href: "/destinations/chengdu/what-to-do/wide-narrow-alleys",
        hook: "Qing-era lanes reworked into Chengdu's best-known old-quarter stroll with courtyards, cafés, and shops.",
        tag: "Free",
      },
      "where-to-stay": {
        href: "/destinations/chengdu/where-to-stay/wide-narrow-alleys",
        hook: "Atmospheric old-town stays with boutique courtyards and easy walks to central sights.",
        tag: "¥¥¥",
      },
    },
    defaultCategory: "things-to-do",
  },
  {
    id: "sichuan-hotpot",
    name: "Sichuan Hotpot",
    lat: 30.66,
    lng: 104.065,
    imageSeed: "chengdu-hotpot",
    categories: {
      "where-to-eat": {
        href: "/destinations/chengdu/where-to-eat/hotpot",
        hook: "Fiery numbing-spicy broth and a mandatory Chengdu dinner ritual. Split pots help first-timers survive.",
        tag: "¥80-150",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "mapo-tofu",
    name: "Mapo Tofu",
    lat: 30.657,
    lng: 104.06,
    imageSeed: "chengdu-mapo-tofu",
    categories: {
      "where-to-eat": {
        href: "/destinations/chengdu/where-to-eat/mapo-tofu",
        hook: "Silken tofu in chili oil and doubanjiang, one of Sichuan cuisine's benchmark dishes.",
        tag: "¥25-40",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "kung-pao-chicken",
    name: "Kung Pao Chicken",
    lat: 30.665,
    lng: 104.07,
    imageSeed: "chengdu-kung-pao-chicken",
    categories: {
      "where-to-eat": {
        href: "/destinations/chengdu/where-to-eat/kung-pao-chicken",
        hook: "The Chengdu original: sweet-spicy chicken, roasted peanuts, and better balance than most overseas versions.",
        tag: "¥30-50",
      },
    },
    defaultCategory: "where-to-eat",
  },
  {
    id: "chunxi-road",
    name: "Chunxi Road / Central",
    lat: 30.657,
    lng: 104.081,
    imageSeed: "chengdu-chunxi-road-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/chengdu/where-to-stay/chunxi-road",
        hook: "Shopping, central, and extremely practical for first-time visitors using metro lines 2 and 3.",
        tag: "¥¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "wide-narrow-alleys-stay",
    name: "Wide and Narrow Alleys Area",
    lat: 30.669,
    lng: 104.055,
    imageSeed: "chengdu-wide-narrow-alleys-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/chengdu/where-to-stay/wide-narrow-alleys",
        hook: "Atmospheric courtyard stays, design hotels, and one of the strongest old-Chengdu settings.",
        tag: "¥¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
  {
    id: "jinli-stay",
    name: "Jinli / Wuhou Area",
    lat: 30.647,
    lng: 104.049,
    imageSeed: "chengdu-jinli-stay",
    categories: {
      "where-to-stay": {
        href: "/destinations/chengdu/where-to-stay/jinli",
        hook: "Near shrines, old lanes, and a relaxed historic-core atmosphere.",
        tag: "¥¥",
      },
    },
    defaultCategory: "where-to-stay",
  },
];

export const markers: MarkerLocation[] = [
  { id: "giant-panda-base", name: "Giant Panda Breeding Research Base", lat: 30.732, lng: 104.145, categories: ["attraction"] },
  { id: "jinli-ancient-street", name: "Jinli Ancient Street", lat: 30.647, lng: 104.049, categories: ["attraction", "stay"] },
  { id: "wuhou-shrine", name: "Wuhou Shrine", lat: 30.646, lng: 104.047, categories: ["attraction"] },
  { id: "dufu-cottage", name: "Du Fu Thatched Cottage", lat: 30.659, lng: 104.034, categories: ["attraction"] },
  { id: "wenshu-monastery", name: "Wenshu Monastery", lat: 30.673, lng: 104.066, categories: ["attraction"] },
  { id: "wide-narrow-alleys", name: "Wide and Narrow Alleys", lat: 30.669, lng: 104.055, categories: ["attraction", "stay"] },
  { id: "sichuan-hotpot", name: "Sichuan Hotpot", lat: 30.66, lng: 104.065, categories: ["eat"] },
  { id: "mapo-tofu", name: "Mapo Tofu", lat: 30.657, lng: 104.06, categories: ["eat"] },
  { id: "kung-pao-chicken", name: "Kung Pao Chicken", lat: 30.665, lng: 104.07, categories: ["eat"] },
  { id: "chunxi-road", name: "Chunxi Road / Central", lat: 30.657, lng: 104.081, categories: ["stay"] },
  { id: "wide-narrow-alleys-stay", name: "Wide and Narrow Alleys Area", lat: 30.669, lng: 104.055, categories: ["stay"] },
  { id: "jinli-stay", name: "Jinli / Wuhou Area", lat: 30.647, lng: 104.049, categories: ["stay"] },
];

export const attractionCards: UnifiedLocation[] = unifiedLocations.filter((location) =>
  ["giant-panda-base", "jinli-ancient-street", "wuhou-shrine", "dufu-cottage", "wenshu-monastery", "wide-narrow-alleys"].includes(location.id)
);

export const foodCards: UnifiedLocation[] = unifiedLocations.filter((location) =>
  ["sichuan-hotpot", "mapo-tofu", "kung-pao-chicken"].includes(location.id)
);

export const neighborhoodCards: UnifiedLocation[] = unifiedLocations.filter((location) =>
  ["chunxi-road", "wide-narrow-alleys-stay", "jinli-stay"].includes(location.id)
);
