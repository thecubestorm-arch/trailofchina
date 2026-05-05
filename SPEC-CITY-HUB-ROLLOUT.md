# SPEC — City Hub Rollout Plan & Single Source of Truth

**Created:** 2026-05-05
**Status:** Planning

---

## 1. Goal

Roll out the Shanghai-quality hub to **Xi'an, Chengdu, and Chongqing** — every city gets the exact same feature set, design, and data quality. Plus: **a single source of truth** so adding an attraction page automatically puts it on the map, in the cards, and in the filters.

---

## 2. Current State (Post-Beijing)

| City | Hub Route | Data Files | Hub Component | Status |
|------|-----------|------------|---------------|--------|
| Shanghai | `/destinations/shanghai-8` | ✅ 5 files | ShanghaiSuperClient.tsx (1565 lines) | LIVE |
| Beijing | `/destinations/beijing-8` | ✅ 5 files | BeijingSuperClient.tsx (~1500 lines) | LIVE (noindex) |
| Xi'an | `/destinations/xian` | ❌ none | Basic page.tsx (147 lines) | OLD |
| Chengdu | `/destinations/chengdu` | ❌ none | Basic page.tsx (147 lines) | OLD |
| Chongqing | `/destinations/chongqing` | ❌ none | Basic page.tsx (147 lines) | OLD |

**Problem:** ShanghaiSuperClient.tsx and BeijingSuperClient.tsx are 95% identical code — only data changes. Adding Xi'an means copying ANOTHER 1500 lines. Then Chengdu. Then Chongqing. That's ~6000 lines of duplicated code.

**Problem 2:** Adding a new attraction page (e.g. `/destinations/shanghai/what-to-do/shanghai-museum`) requires manually editing 3+ places: the data file, the component's card arrays, the allItems array, and the map markers. Easy to forget one.

---

## 3. Architecture: CityHubTemplate + Data-Driven Rendering

### 3.1 Shared Template Component

Extract all shared UI/render logic from ShanghaiSuperClient into a **reusable `CityHubTemplate` component**:

```
components/CityHubTemplate/
  CityHubTemplate.tsx     — Main component (replaces 1500 lines per city)
  CityMapView.tsx         — Map section (replaces MapViewSection per city)
  types.ts                — CityHubConfig type
```

`CityHubTemplate` receives a **single `CityHubConfig` object** and renders everything:

```typescript
interface CityHubConfig {
  // Identity
  slug: string;                    // "xian"
  nameEn: string;                  // "Xi'an"
  nameZh: string;                  // "西安"
  tagline: string;                 // "Ancient capital, terracotta army"
  watermark: string;               // "西安"

  // Map
  mapCenter: [number, number];
  mapZoom: number;
  boundary: [number, number][];
  maxBounds: [[number, number], [number, number]];

  // Gallery
  gallerySeeds: string[];

  // Quick info pills
  pills: { icon: LucideIcon; label: string; text: string }[];

  // Data (ALL from data files)
  metroLines: MetroLine[];
  transportHubs: TransportHub[];
  // attractions come from the unified data file (single source of truth)
}
```

### 3.2 Per-City Data Files (Single Source of Truth)

Each city has ONE data directory with ALL content:

```
app/destinations/{city}/data/
  boundary.ts          — City boundary coordinates
  metro-lines.ts       — Metro/subway lines
  transport-hubs.ts    — Airports, train stations
  attractions.ts       — ⭐ THE KEY FILE — all POIs, food, stays, tips
  types.ts             — Shared types (same across all cities)
```

### 3.3 The Key: `attractions.ts` IS the Single Source of Truth

The `attractions.ts` file contains **everything** that appears on the hub:

```typescript
export const cityConfig: CityHubConfig = {
  slug: "xian",
  nameEn: "Xi'an",
  // ...identity...
};

// All content comes from this ONE file
export const unifiedLocations: UnifiedLocation[] = [
  {
    id: "terracotta-warriors",
    name: "Terracotta Army",
    lat: 34.3842,
    lng: 109.2785,
    imageSeed: "xian-terracotta-warriors",
    defaultCategory: "things-to-do",
    categories: {
      "things-to-do": {
        href: "/destinations/xian/what-to-do/terracotta-warriors",
        hook: "8,000 clay soldiers guarding China's first emperor for 2,200 years.",
        tag: "¥120",
      },
    },
  },
  // ... more
];

export const markers: MarkerLocation[] = [
  // Auto-derived from unifiedLocations OR manually curated
];

export const localTips: LocalTip[] = [
  { id: "tip-dust", title: "Dust Storms", text: "Spring brings yellow dust...", icon: "CloudRain" },
];

export const itinerary: ItineraryDay[] = [
  { dayTitle: "Day 1: Imperial Xi'an", items: [...] },
];

export const knowBeforeYouGo: InfoItem[] = [...];

export const allItems: FilterableItem[] = [
  // Derived from unifiedLocations + localTips
];
```

**CityHubTemplate reads from this file and renders everything.** No more hardcoded card arrays in the component.

### 3.4 How Adding a New Attraction Works (Future)

When someone creates a new page like `/destinations/xian/what-to-do/muslim-quarter`:

1. Add entry to `app/destinations/xian/data/attractions.ts`
2. That's it. ✅

The CityHubTemplate automatically:
- Shows it in the "Things to Do" cards (filtered by `defaultCategory`)
- Shows it on the map (reads `lat/lng` from the same entry)
- Shows it in the filterable items list
- Shows it in search results

**No component editing needed. Data → UI, automatically.**

---

## 4. Rollout Order

### Phase 0: Refactor (DO THIS FIRST)
Extract `CityHubTemplate` from Shanghai + Beijing. Both cities still work identically, but use the shared component.

**Steps:**
1. Create `components/CityHubTemplate/types.ts` — CityHubConfig + all sub-types
2. Create `components/CityHubTemplate/CityHubTemplate.tsx` — extract from ShanghaiSuperClient
3. Create `components/CityHubTemplate/CityMapView.tsx` — extract from MapViewSection
4. Refactor Shanghai to use `CityHubTemplate` (pass shanghaiConfig)
5. Refactor Beijing to use `CityHubTemplate` (pass beijingConfig)
6. Build test — both must look identical
7. Delete ShanghaiSuperClient.tsx and BeijingSuperClient.tsx (replaced by template)

**Risk:** LOW — pure refactor, no visual changes. If something breaks, revert.

### Phase 1: Xi'an Hub
1. Create data files: `app/destinations/xian/data/` (boundary, metro, attractions, hubs, types)
2. Create `app/destinations/xian-8/page.tsx` (imports CityHubTemplate + xianConfig)
3. Build & verify
4. Deploy as noindex → Sascha review → replace `/destinations/xian`

### Phase 2: Chengdu Hub
Same pattern as Xi'an. Data files + page.tsx that uses CityHubTemplate.

### Phase 3: Chongqing Hub
Same pattern.

---

## 5. Data Requirements Per City

### Xi'an

**Boundary:** OSM relation 912940-style query for Xi'an municipality (~700+ points)

**Metro:** Xi'an Metro — currently 5 lines (1, 2, 3, 4, 14), Line 5+6 under construction
- Real colors: Line 1 #E4002B, Line 2 #00A650, Line 3 #FFD100, Line 4 #502D9C, Line 14 #C23733
- OSM Overpass API for real station coordinates

**Transport Hubs:**
| ID | Name | Type | Coords |
|----|------|------|--------|
| xiyy | Xi'an Xianyang Intl. Airport | airport | 34.4371, 108.7495 |
| xian-north | Xi'an North Station | train | 34.3738, 108.9468 |
| xian-station | Xi'an Station | train | 34.2658, 108.9508 |

**Attractions (Things to Do):**
| ID | Name | Hook | Tag |
|----|------|------|-----|
| terracotta-warriors | Terracotta Army | 8,000 clay soldiers guarding China's first emperor | ¥120 |
| city-wall | Ancient City Wall | 13.7 km Ming dynasty wall — rent a bike and ride the top | ¥54 |
| muslim-quarter | Muslim Quarter | Silk Road heritage, street food, Grand Mosque | Free |
| bell-tower | Bell Tower | Xi'an's center point, Ming dynasty landmark | ¥30 |
| big-wild-goose | Big Wild Goose Pagoda | Tang dynasty pagoda with nightly fountain show | ¥40 |
| shaanxi-museum | Shaanxi History Museum | 370,000 artifacts — China's best provincial museum | Free |

**Food:**
| ID | Name | Hook | Tag |
|----|------|------|-----|
| roujiamo | Roujiamo | Chinese hamburger — braised pork in flatbread | Street Food · ¥10 |
| biang-biang | Biangbiang Noodles | Wide hand-pulled belt noodles with chili oil | Restaurant · ¥25 |
| yangrou-paomo | Yangrou Paomo | Mutton soup with torn flatbread — Xi'an's signature | Restaurant · ¥35 |
| persimmon | Persimmon Cake | Sweet fried cake with persimmon filling | Snack · ¥5 |

**Stays:**
| ID | Name | Vibe | Tag |
|----|------|------|-----|
| muslim-quarter-stay | Muslim Quarter | Food · Walkable · Budget | ¥ |
| bell-tower-area | Bell Tower Area | Central · Shopping · Tourist | ¥¥ |
| qujiang | Qujiang | Museums · Parks · Upscale | ¥¥¥ |
| yanta | Yanta District | University · Relaxed · Affordable | ¥ |

**Itinerary (3 days):**
- Day 1: Terracotta Army (morning) → City Wall bike ride (afternoon) → Muslim Quarter dinner (evening)
- Day 2: Shaanxi History Museum (morning) → Big Wild Goose Pagoda (afternoon) → Fountain show (evening)
- Day 3: Bell Tower + Drum Tower (morning) → Small Wild Goose Pagoda (afternoon) → Night market (evening)

**Local Tips:**
- Terracotta Army: Go early, buy tickets online, skip the "emperor show"
- City Wall bikes: Rent at South Gate, go clockwise, 90 min full loop
- Dust storms: Spring (March-April), bring a mask
- Cash: Still useful in Muslim Quarter, unlike Shanghai/Beijing

**Quick Info:** VPN required · Cashless + cash · Bus + Metro · Best: Mar-May, Sep-Nov

### Chengdu

**Boundary:** ~700+ points from OSM

**Metro:** Chengdu Metro — 13 lines (1-10, 17, 18, 19), some under construction

**Transport Hubs:**
| ID | Name | Type | Coords |
|----|------|------|--------|
| ctu | Chengdu Tianfu Intl. Airport | airport | 30.3139, 104.0553 |
| ctu-old | Chengdu Shuangliu Airport | airport | 30.5785, 103.9472 |
| chengdu-east | Chengdu East Station | train | 30.6306, 104.1518 |
| chengdu-south | Chengdu South Station | train | 30.6149, 104.0697 |

**Attractions:**
| ID | Name | Hook | Tag |
|----|------|------|-----|
| panda-base | Giant Panda Base | See baby pandas in their natural habitat | ¥55 |
| jinli | Jinli Street | Ancient-style pedestrian street with snacks and crafts | Free |
| wider-narrow | Kuanzhai Alley | Three parallel alleys: traditional, modern, cultural | Free |
| wenshu | Wenshu Monastery | Best-preserved Buddhist temple in Chengdu, with tea house | Free |
| du-fu | Du Fu Thatched Cottage | Tang dynasty poet's recreated home + garden | ¥50 |
| spring-tea | People's Park Tea House | Authentic bamboo chair tea experience — slow down | ¥15 |

**Food:**
| ID | Name | Hook | Tag |
|----|------|------|-----|
| hotpot | Sichuan Hotpot | Numbing, spicy, addictive — the Chengdu experience | Premium · ¥120+ |
| mapo-tofu | Mapo Tofu | Silken tofu in fiery chili bean sauce — born here | Restaurant · ¥35 |
| dandan-noodles | Dan Dan Noodles | Sichuan's famous street noodle — sesame + chili | Street Food · ¥15 |
| skewers | Chuanchuanxiang | Sichuan skewer hotpot — pick and boil by the stick | Local · ¥40 |

**Stays:**
| ID | Name | Vibe | Tag |
|----|------|------|-----|
| jinjiang | Jinjiang / Chunxi Rd | Shopping · Central · Walkable | ¥¥ |
| wider-narrow-stay | Kuanzhai Area | Traditional · Teahouses · Food | ¥¥ |
| tianfu | Tianfu Square | Business · Modern · Connected | ¥¥¥ |
| uni-area | University Area | Budget · Local · Relaxed | ¥ |

**Itinerary (3 days):**
- Day 1: Panda Base (early morning) → Kuanzhai Alley (afternoon) → Jinli night walk (evening)
- Day 2: People's Park tea → Wenshu Monastery → Du Fu Cottage → Hotpot dinner
- Day 3: Day trip to Leshan Giant Buddha OR Chengdu Museum + Chunxi Road

**Local Tips:**
- Pandas: Arrive by 7:30 AM (they sleep after 10 AM), book online
- Spice level: "Wei la" (微辣) = mild for locals = medium for you
- Mahjong: Everywhere — don't be surprised by 10 AM games in parks
- Chengdu pace: Slow and relaxed — don't rush

**Quick Info:** VPN required · Cashless · Metro + DiDi · Best: Mar-Jun, Sep-Nov

### Chongqing

**Boundary:** ~700+ points from OSM

**Metro:** Chongqing Metro — 12 lines (1-10, 18, Jiangtiao), monorail on Line 2

**Transport Hubs:**
| ID | Name | Type | Coords |
|----|------|------|--------|
| ckg | Chongqing Jiangbei Intl. Airport | airport | 29.7192, 106.6421 |
| chongqing-north | Chongqing North Station | train | 29.6148, 106.5528 |
| chongqing-west | Chongqing West Station | train | 29.5089, 106.3349 |

**Attractions:**
| ID | Name | Hook | Tag |
|----|------|------|-----|
| hongyadong | Hongyadong | Spiraling cliffside complex — Chongqing's iconic night view | Free |
| ciqi-kou | Ciqikou Old Town | 1,000-year-old porcelain town turned tourist street | Free |
| cableway | Yangtze River Cableway | Cross the river in a gondola — cinematic views | ¥20 |
| three-gorges | Three Gorges Museum | History of the world's biggest dam project | Free |
| Liziba | Liziba Station | Train goes THROUGH a residential building — viral spot | Free |
| wulong | Wulong Karst | Day trip: natural bridges from Transformers movie | ¥125 |

**Food:**
| ID | Name | Hook | Tag |
|----|------|------|-----|
| chongqing-hotpot | Chongqing Hotpot | Spicier than Chengdu — numbing peppercorn broth | Premium · ¥100+ |
| chongqing-noodles | Chongqing Small Noodles | Breakfast noodle in fiery chili oil | Street Food · ¥12 |
| grilled-fish | Grilled Fish | Whole fish grilled in spicy sauce at riverside restaurants | Restaurant · ¥60 |
| suanlafen | Suanlafen | Cold jelly noodles in sour spicy sauce — refreshing | Street Food · ¥8 |

**Stays:**
| ID | Name | Vibe | Tag |
|----|------|------|-----|
| jiefangbei | Jiefangbei | Central · Shopping · Nightlife | ¥¥ |
| hongyadong-stay | Hongyadong Area | Views · Touristy · Atmospheric | ¥¥¥ |
| nanbin | Nanbin Road | Riverside · Food street · Views | ¥¥ |
| university-city | University City | Budget · Young · Local | ¥ |

**Itinerary (3 days):**
- Day 1: Jiefangbei → Hongyadong (day + night) → River cableway
- Day 2: Ciqikou → Three Gorges Museum → Hotpot dinner
- Day 3: Liziba Station → Wulong day trip OR explore more neighborhoods

**Local Tips:**
- Navigation hell: 3D city — "ground floor" depends on which side of the hill
- Walking: Bring good shoes — stairs everywhere, flat is rare
- Hotpot hours: Most hotpot places open 5 PM — go early to avoid queues
- Summer: 40°C+ — avoid July-August

**Quick Info:** VPN required · Cashless · Metro (monorail!) + DiDi · Best: Mar-May, Oct-Nov

---

## 6. Single Source of Truth — How It Works

### The Data Flow

```
attractions.ts (SINGLE SOURCE)
    │
    ├──→ CityHubTemplate renders cards (filtered by category)
    ├──→ CityMapView renders markers (reads lat/lng)
    ├──→ Filter/search reads allItems (derived from unifiedLocations)
    └──→ Itinerary reads itinerary array
```

### Adding a New Attraction Page — Step by Step

**Example:** Adding "Shanghai Museum" to Shanghai

1. **Create the page:** `app/destinations/shanghai/what-to-do/shanghai-museum/page.tsx`
2. **Add to data file:** `app/destinations/shanghai/data/attractions.ts`
   ```typescript
   {
     id: "shanghai-museum",
     name: "Shanghai Museum",
     lat: 31.2294,
     lng: 121.4737,
     imageSeed: "shanghai-museum",
     defaultCategory: "things-to-do",
     categories: {
       "things-to-do": {
         href: "/destinations/shanghai/what-to-do/shanghai-museum",
         hook: "World-class Chinese art — bronzes, ceramics, calligraphy.",
         tag: "Free",
       },
     },
   },
   ```
3. **Add to markers array** (same file):
   ```typescript
   { id: "shanghai-museum", name: "Shanghai Museum", lat: 31.2294, lng: 121.4737, categories: ["attraction"] },
   ```
4. **Done.** ✅

It now appears on:
- ✅ Things to Do cards
- ✅ Map marker with popup
- ✅ Filterable items list
- ✅ Search results

**Same process for ANY city.** Just edit that city's `attractions.ts`.

### Future Enhancement: Auto-Derive Markers from unifiedLocations

Even better — make `markers` a **derived array** that auto-generates from `unifiedLocations`:

```typescript
// In the data file or a helper
export const markers: MarkerLocation[] = unifiedLocations.map(loc => ({
  id: loc.id,
  name: loc.name,
  lat: loc.lat,
  lng: loc.lng,
  categories: [loc.defaultCategory === "things-to-do" ? "attraction"
    : loc.defaultCategory === "where-to-eat" ? "eat" : "stay"],
}));
```

Then step 3 becomes automatic — only need to add the `unifiedLocations` entry.

---

## 7. Implementation Timeline

| Phase | What | Effort | Depends On |
|-------|------|--------|------------|
| 0 | Refactor to CityHubTemplate | 1 Codex session | Beijing approved |
| 0.5 | Test Shanghai + Beijing with template | Quick build check | Phase 0 |
| 1 | Xi'an data files | 1 Codex session | Phase 0.5 |
| 1.5 | Xi'an hub page (uses template) | Small — just page.tsx | Phase 1 |
| 2 | Chengdu data + hub | 1 Codex session | Phase 1.5 |
| 3 | Chongqing data + hub | 1 Codex session | Phase 2 |

**Total: ~5-6 Codex sessions** (one at a time, sequential)

---

## 8. Quality Checklist (Per City)

Before marking a city hub as "done":

- [ ] Boundary: 700+ points from OSM
- [ ] Metro: All current lines from OSM, real colors, real station coords
- [ ] Attractions: 6+ Things to Do, 4+ Food, 4+ Stays
- [ ] Transport Hubs: All airports + major train stations
- [ ] 3-Day Itinerary: Morning/afternoon/evening with real links
- [ ] Local Tips: 4+ tips with icons
- [ ] Know Before You Go: 6 items
- [ ] Quick Info Pills: 4 items
- [ ] Hero Gallery: 7+ images
- [ ] Map: Center, zoom, boundary visible, metro lines, station dots
- [ ] All 5 tabs: Overview, To Do, Eat, Stay, Essentials
- [ ] Search + filters work
- [ ] Mobile-first responsive
- [ ] SEO metadata (title, description, canonical, JSON-LD)
- [ ] noindex until Sascha confirms
- [ ] Build passes

---

## 9. Key Decisions Needed from Sascha

1. **Refactor first?** Do the CityHubTemplate extraction before Xi'an? (Recommended — saves 3x duplicated code)
2. **Metro detail for smaller cities?** Xi'an has only 5 lines, Chengdu 13, Chongqing 12 — include all or simplify?
3. **Day trips?** Xi'an (Terracotta Army is outside city center), Chongqing (Wulong) — include as separate section or in itinerary?