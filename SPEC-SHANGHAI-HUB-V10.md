# Shanghai Hub v10 — Feature Spec

**Date:** 2026-04-28
**Base:** `app/destinations/shanghai-8/ShanghaiSuperClient.tsx` + `MapViewSection.tsx`
**Target Route:** `/destinations/shanghai` (replace current page.tsx)

---

## 1. Map: Precise City Boundary

- Use **real Shanghai administrative boundary** (GeoJSON from OpenStreetMap / Natural Earth)
- Fetch or embed a simplified GeoJSON polygon of Shanghai's city border
- Draw as a `Polygon` layer on the map with subtle styling: `fillColor: '#1a3a4a', fillOpacity: 0.04, color: '#af5d32', weight: 1.5, opacity: 0.4`
- **Zoom constraint:** `maxBounds` set so user can zoom out just enough to see the entire Shanghai boundary, but NOT further. Min zoom should show the full city. Test: at min zoom, the Shanghai boundary polygon fits exactly within the viewport with small padding.

## 2. Map: Clickable Markers with Photo Preview Popups

- Each marker on the map must be **clickable**
- On **hover**: show a small preview popup with:
  - 2-3 thumbnail photos (from picsum for now, seeded by attraction name)
  - Name + short hook text
  - Price tag (e.g. "Free", "¥40")
  - Category chip (e.g. "🏛️ Attraction", "🍜 Food", "🏨 Stay")
- **Clicking anywhere on the popup** navigates to the corresponding detail page
- Popup must follow the marker when panning/zooming (use Leaflet popup or custom overlay)

## 3. List ↔ Map Hover Synchronization (Airbnb-style)

- When user **hovers over a list item** (left panel), the **corresponding map marker highlights**:
  - Marker scales up (1.4x)
  - Marker border changes to terracotta (#af5d32)
  - Optional: map smoothly pans to center on that marker
- When user **hovers over a map marker**, the **corresponding list card scrolls into view** and gets a subtle highlight border
- This is the "card-map synchronization" pattern from Airbnb (see: https://mapsemble.com/blog/airbnb-style-property-cards)

## 4. Duplicate Markers Resolution

**Problem:** "Bund Area" and "French Concession" appear as both attractions (Things to Do) and neighborhoods (Where to Stay) at different coordinates.

**Solution: Category-aware markers with filter-dependent routing:**
- Each location has a **single marker** on the map (use the attraction coordinates as primary)
- The marker's **click target depends on active category filter**:
  - If "Things to Do" filter active → clicking "Bund" goes to `/what-to-do/bund`
  - If "Where to Stay" filter active → clicking "Bund" goes to `/where-to-stay/bund-area`
  - If no filter / "All" → default to attraction page (Things to Do)
- The popup shows the category icon based on current filter
- Marker styling: same dot for all categories, but the popup content adapts

**Implementation:**
- Merge duplicate locations into a single `UnifiedLocation` type:
```ts
interface UnifiedLocation {
  name: string;
  lat: number;
  lng: number;
  imageSeed: string;
  categories: {
    'things-to-do'?: { href: string; hook: string; tag: string };
    'where-to-eat'?: { href: string; hook: string; tag: string };
    'where-to-stay'?: { href: string; hook: string; tag: string };
  };
  defaultCategory: 'things-to-do' | 'where-to-eat' | 'where-to-stay';
}
```

## 5. Category Filter Chips (Map + List)

Add **3 main category filter chips** at the top of the map/list view:
- 🏛️ **Things to Do** (default active)
- 🍜 **Where to Eat**
- 🏨 **Where to Stay**

Behavior:
- Multiple can be active at once (toggle on/off)
- Filtering updates both the **list view** AND the **map markers** shown
- When "Things to Do" is active, only attraction markers appear
- When "Where to Stay" is active, only stay markers appear (with their specific coordinates)
- "All" shows everything

## 6. Metro Lines + Stations Overlay

- Draw **Shanghai Metro lines** on the map as colored polylines
- Use real coordinates for line routes (can be simplified/sampled — ~20-30 points per line is fine)
- Include at minimum these key lines for tourists:
  - Line 1 (red) — North-South, People's Square
  - Line 2 (green) — East-West, both airports
  - Line 4 (purple) — Circular
  - Line 10 (light blue) — Yu Garden, old neighborhoods
  - Line 11 (brown) — Disneyland
- **Metro stations** shown as small dots on the lines with labels at high zoom
- **Toggle panel** (layer control) to show/hide:
  - 🚇 Metro Lines (on/off)
  - 🚉 Metro Stations (on/off, only visible at zoom ≥ 12)
  - 🚂 Train Stations (Shanghai Hongqiao, Shanghai Station, Shanghai South)
  - ✈️ Airports (Pudong PVG, Hongqiao SHA)
- Use a small **layers icon** (☰ or layer stack icon) in the top-right corner of the map to open/close the toggle panel
- Default: Metro lines ON, stations OFF, train/airports ON

**Data sources:**
- Metro line coordinates: can be approximated from known station positions (connect the dots)
- Station names + coordinates: available from public sources
- Hardcode as JSON data within the component (no external API calls)

## 7. Transport Hubs on Map

Mark these with distinct icons:
- **Airports:**
  - Shanghai Pudong International Airport (PVG) — lat: 31.1443, lng: 121.8083
  - Shanghai Hongqiao International Airport (SHA) — lat: 31.1979, lng: 121.3363
- **Major Train Stations:**
  - Shanghai Station — lat: 31.2497, lng: 121.4581
  - Shanghai Hongqiao Station — lat: 31.1949, lng: 121.3200
  - Shanghai South Station — lat: 31.1546, lng: 121.4319

Icon style: use Lucide icons (Plane for airports, TrainFront for stations) rendered as `L.divIcon` markers, slightly larger than attraction markers, with a small label.

## 8. North Arrow / Compass

- Add a **compass rose or north arrow** in the bottom-right corner of the map
- Style: clean, minimal — a circle with "N" at top and a small arrow pointing north
- Colors: dark teal (#1a3a4a) on white background, subtle shadow
- Position: `bottom: 20px, right: 20px` inside the map container
- Since the map is always north-up (no rotation), this is static but provides orientation

## 9. Price Audit

Verify and correct all attraction/food/stay prices:

| Location | Current Tag | Correct Price | Notes |
|----------|-------------|---------------|-------|
| Yu Garden | ¥40 | **Free** (bazaar/area) · ¥40 (garden interior) | Label as "Free" per Sascha. The general Yu Garden area (bazaar, Nine Bend Bridge, City God Temple) is free. Only the walled garden interior costs ¥40. |
| The Bund | Free | Free | ✅ Correct |
| French Concession | Free | Free | ✅ Correct — neighborhood, no entry |
| Shanghai Tower | ¥180 | ¥180 | ✅ Correct (observation deck) |
| Tianzifang | Free | Free | ✅ Correct |
| Jade Buddha Temple | ¥20 | ¥20 | ✅ Correct (during ceremonies; sometimes free) |
| Xiaolongbao | ¥30 | ¥30 | ✅ Correct (approximate) |
| Shengjianbao | ¥15 | ¥15 | ✅ Correct (approximate) |
| Hairy Crab | ¥200+ | ¥200+ | ✅ Correct (seasonal) |
| Scallion Oil Noodles | ¥25-40 | ¥25-40 | ✅ Correct |

**Decision:** Label Yu Garden as **"Free"** in the tag. Add a small note in the description: "The garden area is free to explore; the walled garden interior costs ¥40." This matches what most tourists experience (they walk the bazaar/bridge area, not the paid garden).

---

## 10. Component Architecture (Split Monolith)

The current 1300-line `ShanghaiSuperClient.tsx` must be split:

```
app/destinations/shanghai/
├── page.tsx                    (server page, imports dynamic client)
├── ShanghaiHubClient.tsx       (main client component, layout + state)
├── components/
│   ├── MapView.tsx             (map container + Leaflet setup)
│   ├── MapMarkers.tsx          (all marker rendering)
│   ├── MapPopup.tsx            (hover/click popup overlay)
│   ├── MapLayers.tsx           (metro lines, stations, transport hubs)
│   ├── MapControls.tsx         (layer toggle panel, compass)
│   ├── ListView.tsx            (left panel list of items)
│   ├── ListCard.tsx            (individual list item card)
│   ├── CategoryFilters.tsx     (Things to Do / Eat / Stay chips)
│   ├── QuickInfoBar.tsx        (pills: VPN, Cashless, Metro, Weather)
│   ├── ItinerarySection.tsx    (day planner expand/collapse)
│   └── EssentialsSection.tsx   (know before you go + local tips)
├── data/
│   ├── attractions.ts          (all POI data)
│   ├── metro-lines.ts         (metro line coordinates + stations)
│   ├── transport-hubs.ts       (airports + train stations)
│   └── shanghai-boundary.ts    (GeoJSON boundary coordinates)
```

**Key rules:**
- `MapView` loaded with `next/dynamic({ ssr: false })`
- All Leaflet imports ONLY inside `MapView` and its children
- State management: `ShanghaiHubClient` holds `activeCategory`, `hoveredItem`, `mapBounds` etc. as React state, passed down as props
- **No `window` access outside of dynamically-imported components**

---

## 11. UX Polish (from Airbnb/Trip.com research)

### Airbnb Map Platform features to adopt:
1. **Card-Map Sync** (covered in §3)
2. **Layer customization** — let users toggle what they see (covered in §6)
3. **Contextual labels** — at low zoom, show district labels; at high zoom, show POI names
4. **Smooth pan on selection** — when user clicks a list item, map smoothly pans + zooms to that marker

### Trip.com features to adopt:
1. **District labels** on map at medium zoom (Huangpu, Pudong, Jing'an, Xuhui, etc.)
2. **"Near" indicators** — show which metro station is closest to each attraction in the list card

### Additional useful features:
1. **Mini-map inset** — small overview map in corner showing where you are within Shanghai when zoomed in
2. **Distance lines** — when hovering a list item, draw a faint line from it to the nearest metro station
3. **Search within map** — small search bar to filter by name

---

## Priority Order (for Codex implementation)

1. **§4 + §5** — Deduplicate markers + category filters (foundational for everything else)
2. **§1** — Precise Shanghai boundary + zoom limits
3. **§2 + §3** — Clickable popups + list↔map sync
4. **§6 + §7** — Metro lines + transport hubs
5. **§8** — North arrow
6. **§9** — Price audit
7. **§10** — Component split (refactor)
8. **§11** — UX polish (nice-to-haves)