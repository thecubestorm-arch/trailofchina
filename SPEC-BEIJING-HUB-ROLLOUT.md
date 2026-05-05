# SPEC: Beijing Hub — Shanghai 1:1 Rollout

## Goal
Clone the Shanghai Hub (`ShanghaiSuperClient.tsx`, 1565 lines) 1:1 for Beijing. Same structure, same features, same design — just Beijing content.

## Status: PLANNING PHASE (no coding yet)

---

## What Shanghai Has (full feature list)

### 1. Hero: Full-bleed Photo Gallery
- Carousel with large image + "peek" on next
- Gradient overlay, city name + subtitle on image
- Arrow buttons, dot indicators
- Mobile: h-9 arrows, max 5 dots, compact text
- Desktop: h-12 arrows, all dots, large text

### 2. Tab Navigation (5 tabs)
- Overview, Things to Do, Where to Eat, Where to Stay, Essentials
- Mobile: short labels (To Do, Eat, Stay)
- Desktop: full labels
- Sticky tab bar on scroll

### 3. Quick Info Pills
- 4 pills: Internet, Payment, Transport, Best Time
- Lucide icons (Wifi, CreditCard, TrainFront, Thermometer)

### 4. Overview Tab
- City intro paragraph
- Quick info pills
- 6 Attraction cards (image, name, hook, tag/price, link)
- 4 Food cards (image, name, sub, tag, link)
- 4 Neighborhood/stay cards (image, name, vibe, desc, link)
- 6 "Know Before You Go" cards (icon, title, text, link)
- 4 Local tips (icon, title, text)
- FooterCTA

### 5. Things to Do Tab
- Expanded attractions with full cards
- Search bar + filter tags (free, budget, midrange, premium, historic, modern, local, nightlife, family, landmark)
- Map/List toggle
- FooterCTA

### 6. Where to Eat Tab
- Food cards expanded
- Same search + filter system
- Map/List toggle
- FooterCTA

### 7. Where to Stay Tab
- Neighborhood cards expanded
- Same search + filter system
- Map/List toggle
- FooterCTA

### 8. Essentials Tab
- Know Before You Go (expanded)
- Local Tips section
- FooterCTA

### 9. Map View (Leaflet)
- City boundary polygon
- Markers for attractions, food, stays
- Category filter (attraction/eat/stay)
- Metro lines overlay
- Transport hubs (airports, train stations)
- Search in map
- Map/List toggle

### 10. 3-Day Itinerary
- Day 1, 2, 3
- Morning/afternoon/evening blocks
- Each stop: name, href, time, cost, image, desc

### 11. Filter System
- 13 filter tags (free, budget, midrange, premium, historic, modern, local, nightlife, family, landmark, food, stay, practical)
- All items have filter tags
- Filter bar with search + tag chips

### 12. Design System
- Warm gradient bg
- ChineseWatermark (Shanghai uses "上海")
- Breadcrumb
- Serif headings, terracotta accents
- Mobile-first responsive

---

## What Beijing Currently Has (basic hub)

- Simple magazine hub layout (4 sections with border-b)
- Quick Tips box (amber, NOT matching design system)
- Getting Here section (airports, trains)
- RelatedArticles component
- bg-white, no warm gradient
- No photo gallery, no tabs, no map, no filters, no itinerary

### Beijing Subpages (EXISTING, keep unchanged)
**Attractions (6 + 1):** forbidden-city, great-wall, hutong, lama-temple, summer-palace, temple-of-heaven, 798-art-district
**Food (6):** peking-duck, jianbing, lamb-skewers, baodu, tanghulu, zhajiangmian
**Stays (4):** dongcheng-hutong, haidian, sanlitun, wangfujing
**Other:** local-tips, local-experiences

---

## Beijing Data Needed (must be created)

### 1. Beijing Boundary Polygon
- Approx 500-700 lat/lng points tracing Beijing city outline
- Center: ~39.9°N, 116.4°E
- maxBounds for Leaflet map

### 2. Beijing Attractions (with lat/lng)
| ID | Name | Lat | Lng | Tag | Image | Href |
|----|------|-----|-----|-----|-------|------|
| forbidden-city | Forbidden City | 39.9169 | 116.3904 | ¥60 | /images/beijing/forbidden-city.jpg | /destinations/beijing/what-to-do/forbidden-city |
| great-wall | Great Wall (Mutianyu) | 40.4319 | 116.5704 | ¥40 | /images/beijing/great-wall.jpg | /destinations/beijing/what-to-do/great-wall |
| temple-of-heaven | Temple of Heaven | 39.8822 | 116.4066 | ¥15 | picsum | /destinations/beijing/what-to-do/temple-of-heaven |
| summer-palace | Summer Palace | 39.9999 | 116.2755 | ¥30 | picsum | /destinations/beijing/what-to-do/summer-palace |
| hutong | Hutong Alleys | 39.9370 | 116.3874 | Free | picsum | /destinations/beijing/what-to-do/hutong |
| lama-temple | Lama Temple | 39.9468 | 116.4177 | ¥25 | picsum | /destinations/beijing/what-to-do/lama-temple |
| 798-art | 798 Art District | 39.9845 | 116.4953 | Free | picsum | /destinations/beijing/what-to-do/798-art-district |

### 3. Beijing Food (with lat/lng)
| ID | Name | Sub | Tag | Href |
|----|------|-----|-----|------|
| peking-duck | Peking Duck | Beijing's signature roast duck | Premium · ¥150+ | /destinations/beijing/where-to-eat/peking-duck |
| jianbing | Jianbing | Savory breakfast crepe | Street Food · ¥8 | /destinations/beijing/where-to-eat/jianbing |
| zhajiangmian | Zhajiangmian | Noodles with fermented bean sauce | Restaurant · ¥25 | /destinations/beijing/where-to-eat/zhajiangmian |
| lamb-skewers | Lamb Skewers | Cumin-spiced street BBQ | Street Food · ¥15 | /destinations/beijing/where-to-eat/lamb-skewers |
| baodu | Baodu | Traditional Beijing tripe snack | Local · ¥20 | /destinations/beijing/where-to-eat/baodu |
| tanghulu | Tanghulu | Candied hawthorn on sticks | Snack · ¥10 | /destinations/beijing/where-to-eat/tanghulu |

### 4. Beijing Neighborhoods (stays, with lat/lng)
| ID | Name | Vibe | Desc | Href |
|----|------|------|------|------|
| dongcheng-hutong | Dongcheng Hutong | Old Beijing · Courtyards | Authentic hutong courtyard stays near Forbidden City | /destinations/beijing/where-to-stay/dongcheng-hutong |
| wangfujing | Wangfujing | Shopping · Central | Prime shopping street, walking distance to major sights | /destinations/beijing/where-to-stay/wangfujing |
| sanlitun | Sanlitun | Nightlife · Expat hub | Modern bars, international dining, and embassies | /destinations/beijing/where-to-stay/sanlitun |
| haidian | Haidian | University · Tech | Peking University area, quieter and affordable | /destinations/beijing/where-to-stay/haidian |

### 5. Beijing Know Before You Go (same pattern as Shanghai)
| Icon | Title | Text | Href |
|------|-------|------|------|
| Wifi | Internet | VPNs required. Download before landing. | /china-basics/how-to-get-internet |
| CreditCard | Payment | Alipay & WeChat Pay everywhere. | /china-basics/what-apps-to-use/payment |
| TrainFront | Transport | Metro + DiDi. Avoid rush hour. | /china-basics/how-to-get-around |
| Smartphone | Apps | Alipay, DiDi, Amap, 12306 for trains. | /china-basics/what-apps-to-use |
| ShieldCheck | Visa | 15-30 day visa-free for most Western nationals. | /china-basics/how-china-differs/visa-guide |
| Thermometer | Weather | Best: Apr-May, Sep-Oct. Avoid national holidays. | /plan-your-trip/best-time-to-visit |

### 6. Beijing Local Tips
| Title | Text | Icon |
|-------|------|------|
| Forbidden City Tickets | Book 7 days in advance. Same-day tickets sold out by 8 AM. | Calendar |
| Great Wall Timing | Mutianyu is less crowded. Go early — buses fill up by 9 AM. | Sunrise |
| Sandstorm Season | Spring sandstorms (March–May) can turn the sky orange. Bring a mask. | CloudRain |
| Taxi vs DiDi | Taxi drivers rarely speak English. DiDi with English UI is safer. | Car |

### 7. Beijing Quick Info Pills
| Icon | Label | Text |
|------|-------|------|
| Wifi | Internet: | VPN required |
| CreditCard | | Cashless society |
| TrainFront | | Metro + DiDi |
| Thermometer | Best: | Apr–May, Sep–Oct |

### 8. Beijing 3-Day Itinerary
**Day 1: Imperial Heart**
- Morning: Forbidden City (2-3h, ¥60)
- Afternoon: Temple of Heaven (1.5h, ¥15)
- Evening: Wangfujing street food walk

**Day 2: Great Wall Day**
- Morning: Mutianyu Great Wall (4-5h, ¥40 + bus)
- Afternoon: Return + rest
- Evening: Houhai lake bars

**Day 3: Local Beijing**
- Morning: Hutong walking tour (Free)
- Afternoon: Summer Palace (2-3h, ¥30)
- Evening: Peking Duck dinner

### 9. Beijing Metro Lines (simplified, for map overlay)
- Line 1 (red): east-west through city center
- Line 2 (blue): circle line around old city
- Line 10 (cyan): large outer circle
- (More can be added later)

### 10. Beijing Transport Hubs
| Name | Type | Lat | Lng |
|------|------|-----|-----|
| PEK (Capital Airport) | airport | 40.0799 | 116.6031 |
| PKX (Daxing Airport) | airport | 39.5098 | 116.4105 |
| Beijing South Station | train | 39.8653 | 116.3786 |
| Beijing West Station | train | 39.8937 | 116.3216 |

### 11. Beijing Filter Tags (same 13 as Shanghai)
Each item gets filter tags matching the Shanghai pattern.

---

## File Structure (what needs to be created)

```
app/destinations/beijing-8/
├── page.tsx                    (server component, metadata, imports BeijingSuperClient)
├── BeijingSuperClient.tsx      (1:1 clone of ShanghaiSuperClient with Beijing data)
└── MapViewSection.tsx          (1:1 clone adapted for Beijing boundary/markers)

app/destinations/beijing/
├── types.ts                    (same as shanghai/types.ts — or make shared)
├── data/
│   ├── beijing-boundary.ts     (500-700 lat/lng points)
│   ├── attractions.ts          (unified locations with lat/lng)
│   ├── metro-lines.ts          (simplified Beijing metro)
│   └── transport-hubs.ts       (PEK, PKX, train stations)
```

### Question: Shared types?
Shanghai's `types.ts` defines MarkerLocation, UnifiedLocation, etc. — these are identical for Beijing. Options:
- **A:** Duplicate into `app/destinations/beijing/types.ts` (simple, independent)
- **B:** Move to shared `app/destinations/types.ts` (DRY, but refactors Shanghai)

→ Recommend **A** for now (no risk of breaking Shanghai), refactor to shared later.

---

## Implementation Phases

### Phase 1: Data Files (Codex, ~15 min)
- Create `app/destinations/beijing/data/` directory
- beijing-boundary.ts (simplified polygon, ~200-400 points is fine for V1)
- attractions.ts (7 attractions + 6 food + 4 stays with lat/lng)
- metro-lines.ts (3-4 main lines, simplified paths)
- transport-hubs.ts (4 hubs)
- types.ts (copy from Shanghai)

### Phase 2: BeijingSuperClient.tsx (Codex, ~30 min)
- Clone ShanghaiSuperClient.tsx
- Replace ALL Shanghai data with Beijing data
- Update ChineseWatermark to "北京"
- Update all image references
- Update all href paths
- Update itinerary
- Update local tips
- Update quick info pills
- Update FooterCTA text
- Keep ALL features: gallery, tabs, map toggle, search, filter, itinerary

### Phase 3: MapViewSection for Beijing (Codex, ~15 min)
- Clone Shanghai MapViewSection.tsx
- Import Beijing boundary, markers, metro, transport
- Change center/zoom to Beijing coordinates

### Phase 4: Route & Integration (Codex, ~5 min)
- Create app/destinations/beijing-8/page.tsx
- Update Destinations landing page to link to new Beijing hub
- Ensure build passes

### Phase 5: Old Beijing Hub (decision needed)
- Keep old `/destinations/beijing` as fallback?
- Or redirect to `/destinations/beijing-8`?
- Eventually rename beijing-8 → beijing (like we did with shanghai-8 → shanghai)

---

## Decisions Needed from Sascha

1. **Route naming:** Start as `/destinations/beijing-8` (safe) or directly replace `/destinations/beijing`?
2. **Boundary quality:** V1 with ~200-400 points (good enough) or full 700+ (smoother)?
3. **Metro lines:** Simplified (3-4 lines) or full Beijing metro (27 lines)?
4. **Photo gallery images:** Use existing `/images/beijing/` (great-wall.jpg, forbidden-city.jpg) + picsum for the rest?
5. **Old hub:** Keep as fallback or delete immediately?

---

## Estimated Effort
- Data files: 1 Codex task (~15 min)
- BeijingSuperClient + MapView: 1 Codex task (~30-45 min, large file)
- Route + integration: 1 Codex task (~5 min)
- **Total: 2-3 sequential Codex tasks, ~60-75 min**

## After Beijing: Same Rollout for Xi'an, Chengdu, Chongqing
Once Beijing proves the pattern, the other 3 cities follow the same template. Each needs:
- Boundary data
- Attraction/food/stay data with lat/lng
- Metro lines (simplified)
- Transport hubs
- Same ShanghaiSuperClient clone with city-specific content