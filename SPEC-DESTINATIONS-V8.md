# Destinations Page v8 — Feature Spec

**Date:** 2026-04-28
**Base:** `app/destinations-v6/MapInnerV6.tsx`
**Target Route:** `/destinations` (replace current page)

---

## 1. China Boundary: Precise Map Outline

- Replace the current rough 60-point polygon with a **proper China boundary** using real GeoJSON data
- Source: Natural Earth or simplified OSM extract (can use ~200-300 points for a clean outline)
- The boundary should be clearly visible: `fillColor: '#1a3a4a', fillOpacity: 0.04, color: '#1a3a4a', weight: 1.5, dashArray: '4 4', opacity: 0.5`
- Outside the boundary should be subtly different (slightly darker or lighter) to make China "pop" as the focus area
- Include Taiwan, Hainan, and major coastal features accurately
- The map should **center on China** and `maxBounds` should prevent scrolling too far away

## 2. City Card: Image Gallery Carousel

**Current:** Each city card in the list view shows one static image.

**New:** Add a **small arrow button** (left/right) to browse through the city's image gallery WITHOUT leaving the destinations page.

### Design:
- Card shows one image at a time
- **Left arrow** (<) on the left edge of the image, **right arrow** (>) on the right edge
- Arrows only appear on **hover** (fade in/out)
- Clicking an arrow cycles through the city's `images` array
- Small **dot indicators** at the bottom of the image (• • • ◦ •) showing current position
- Smooth CSS transition between images (fade or slide)
- The entire card (except the arrows) is a **link** to the city hub page
- Clicking any image or text → navigates to city page
- Clicking arrows → stays on page, cycles gallery

### Technical:
- Use `useState` per card for current image index
- Arrows: `ChevronLeft` / `ChevronRight` from Lucide
- On mobile: allow **swipe** to cycle images (touch events)

## 3. Shared Features with Shanghai Hub v10

These features should be implemented consistently across both pages:

### 3a. Hover ↔ Map Sync
- Hover over a city card → corresponding marker highlights on map (scales up, border color change)
- Hover over a map marker → corresponding city card gets subtle highlight + scrolls into view

### 3b. Clickable Map Markers
- Click a city marker → popup appears with:
  - Photo gallery (3-5 thumbnails, scrollable)
  - City name + Chinese name
  - Hook text
  - Duration / Price level / Best season chips
  - "Explore →" link to city hub
- **Clicking anywhere on the popup** → navigates to city page

### 3c. Layer Controls
- Similar to Shanghai Hub, add a small **layers toggle** in the map corner:
  - 🏙️ City markers (always on, can't disable)
  - 🚄 Major rail routes (future, placeholder toggle)
  - ✈️ Airports (show Pudong, Hongqiao on China map)

## 4. UX Improvements

### 4a. "Featured" city highlight
- Shanghai is currently `featured: true` — give it a subtle golden border or a small "⭐ Popular" badge on its card
- On the map, the Shanghai marker should be slightly larger or have a subtle pulse animation

### 4b. Coming Soon cities improvement
- Current: grey dots with "Coming Soon" tooltip on hover
- New: show city name label next to the dot at medium zoom, greyed out
- On hover: tooltip says "Coming Soon — [city name]"
- Click does nothing (or shows a brief "Coming soon!" toast)

### 4c. Mobile experience
- Keep the current List/Map toggle (floating button)
- When in List view on mobile, show the image gallery carousel
- When switching to Map view, hide list and show fullscreen map

### 4d. District/Region labels on map
- At low zoom (4-5): show province/region names
- At medium zoom (6-7): show city names
- At high zoom (8+): show POI names
- Use Leaflet labels or custom `L.divIcon` markers with low z-index

## 5. Price & Data Accuracy

- Verify all city data: population, best season, duration, price level
- Current data looks mostly correct, but double-check:
  - Chengdu: "2-3 days, $" — seems right (cheaper than Shanghai/Beijing)
  - Chongqing: "2-3 days, $" — correct
  - Xi'an: "2-3 days, $" — correct
  - Beijing: "3-5 days, $$" — correct
  - Shanghai: "3-4 days, $$" — correct

## 6. North Arrow

Same as Shanghai Hub spec: add a compass/north arrow in the bottom-right corner of the map.

---

## Priority Order (for Codex implementation)

1. **§1** — Precise China boundary
2. **§2** — Image gallery carousel in city cards
3. **§3a + §3b** — Hover sync + clickable popups (adapt from Shanghai Hub)
4. **§4** — UX improvements
5. **§5** — Data verification
6. **§6** — North arrow