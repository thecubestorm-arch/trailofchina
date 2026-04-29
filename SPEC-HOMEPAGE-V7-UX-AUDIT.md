# Homepage V7 UX Audit

**Date:** 2026-04-29
**Page:** trailofchina.vercel.app/v7
**Auditor:** Main agent (code analysis + screenshots)

---

## 1. Hero Section

### Current State
- Background: `picsum.photos/seed/china-skyline/1920/1080` — generic placeholder, no China relevance
- Overlay: `bg-black/30` — too light, text competes with background
- Headline: "Your First Trip to China / Simplified" — good, clear value prop
- Subtitle: Long paragraph, feels like a wall of text for a hero
- CTAs: "Plan Your Trip" (terracotta) + "Explore China Basics" (white outline) — good hierarchy
- Min-height: 500px mobile / 600px desktop — adequate but could be taller for impact

### Problems
1. **Placeholder image** — Random picsum photo, zero brand recognition. Must replace with real China skyline (Bund, Great Wall, etc.)
2. **Overlay too subtle** — `bg-black/30` makes text readability inconsistent depending on image brightness. Top travel sites use 40-50% overlay.
3. **Subtitle too long** — 3 sentences in the hero intro. Airbnb/Lonely Planet use 1 short sentence.
4. **No visual depth** — Flat background image. No parallax, no gradient fade at bottom, no text shadow.
5. **Missing trust micro-signal** — No "Updated 2025" or "Free guide" badge near hero title.

### Improvements
- **Overlay**: `bg-black/40` → `bg-gradient-to-b from-black/50 via-black/30 to-[#f5f1ea]` (gradient fade into next section)
- **Subtitle**: Cut to one punchy line: "Visa-free entry. Mobile payments sorted. Ready-made routes."
- **Image**: Replace with real China photo — Shanghai Bund night skyline is most recognizable
- **Add subtle text shadow**: `drop-shadow-sm` on headline for readability
- **Hero height**: `min-h-[580px] md:min-h-[700px]` — taller = more impact

---

## 2. Trust Bar

### Current State
- 4 signals in a 4-column grid: "4+ Trips to China", "Speaks Mandarin", "Family in Shanghai & Beijing", "Updated 2025"
- Bordered chips with `bg-[#f5f1ea]` background
- No icons, text only

### Problems
1. **No icons** — Every trust bar on top travel sites uses icons (✈️, 🗣️, 🏠, 🔄). Text-only feels cheap.
2. **"4+ Trips" is weak** — Competitors say "10+ years experience" or "50,000+ travelers helped". 4 trips sounds amateurish even if honest.
3. **Border + bg is busy** — Both `border` and `bg-[#f5f1ea]` on small chips. Too much visual noise.
4. **No hover effect** — Static, dead feel.

### Improvements
- Add emoji/icon per signal: 🌏 4+ China trips · 🗣️ Speaks Mandarin · 🏠 Family in China · 🔄 Updated 2025
- Remove borders, use `bg-[#f5f1ea]` only — cleaner
- Or: use icon circles (terracotta background) + text, like Rick Steves
- Consider replacing "4+ Trips" with something stronger: "Lived & Traveled China" or "Beijing & Shanghai Insider"

---

## 3. Decision Helper

### Current State
- 4 cards in a grid (2×2 mobile, 4-col desktop)
- Each: icon circle → title → description → CTA link
- Good: terracotta accent, hover lift, shadow on hover
- Cards: `rounded-[1.5rem]` with `shadow-[0_18px_40px_rgba(26,58,74,0.06)]`

### Problems
1. **Cards feel disconnected** — No visual thread connecting them to "where to start"
2. **Icon circles too small** — `h-12 w-12` with 22px icon. Feels dainty.
3. **CTA link is subtle** — "See the 7-day route →" in terracotta text is easy to miss
4. **No visual numbering** — 1, 2, 3, 4 would help show progression

### Improvements
- Add step numbers (1, 2, 3, 4) in terracotta circles
- Increase icon circles to `h-14 w-14`
- Make CTA more prominent: `bg-[#af5d32]/8` pill around CTA text
- Add a subtle connecting line between cards on desktop (progression feel)

---

## 4. FAQ Section

### Current State
- Dark teal `bg-[#1a3a4a]` background — good contrast break
- Left: title + description. Right: 5 accordion items
- Accordion: glass-morphism `bg-white/6 backdrop-blur-sm`, border `white/10`
- Grid: `grid-cols-[0.72fr_1.28fr]`

### Problems
1. **Left column feels empty** — Just title + 1 paragraph in 28% width. Wasted space.
2. **Only 5 FAQs** — Travel sites show 7-10. 5 feels thin.
3. **No "view all" link** — Users can't see more questions
4. **Accordion text is tiny** — `text-sm` (14px) for answers is hard to read on dark bg

### Improvements
- Add a decorative element to left column (small map illustration, or bullet summary of all questions)
- Increase answer text to `text-base` (16px)
- Add "More questions →" link at bottom
- Consider making left column narrower: `grid-cols-[0.35fr_1.65fr]`

---

## 5. Explore China Map Section ⭐ MOST IMPORTANT

### Current State
- Split view: city list (left, 380px) + map (right, flexible)
- City cards: image, name, Chinese name, hook text, chips (duration/price/season), "Explore →" link
- Map: Leaflet with China boundary polygon, city markers with dot+label, north arrow
- Hover sync: hover on card → map highlights, hover on marker → card highlights
- Mobile: toggle button (floating, bottom-right)

### Problems

#### Critical
1. **Map is too passive** — No click-to-navigate on markers. Clicking a city marker should fly-to that city and show a rich popup with photo + quick facts + CTA. Currently only `onActiveCityChange` fires (same as hover).
2. **City cards are too large** — Each card has a full image (16:10 aspect), hook text, chips, and link. With 5 cities, the list scrolls inside a 640px container. This means users see 1-2 cards at a time, losing overview.
3. **No zoom controls** — `zoomControl={false}` and no custom zoom buttons. Users can't easily zoom in/out on the map.
4. **China boundary is too thick** — `weight: 2` terracotta border looks like a heavy outline. Professional maps (Airbnb, Booking) use thinner, subtler borders.

#### Significant
5. **Split ratio feels wrong** — `380px` for list, rest for map. Airbnb uses roughly 40/60. 380px feels cramped for the rich cards. The map gets too much space with only 5 markers.
6. **Marker design is amateur** — `divIcon` with inline HTML styles. Dot + label looks like a dev tool, not a polished product. Airbnb uses clean circle markers with hover expand.
7. **No "Coming Soon" cities** — Only 5 destinations. No visual hint that more are planned (Guilin, Hangzhou, etc.)
8. **Mobile toggle is tiny** — Fixed `bottom-5 right-5` 48px button. Gets lost. Should be a full-width sticky bar.
9. **No map search/filter** — Can't filter by "coastal" or "budget-friendly" etc. (minor for now)
10. **North arrow is too subtle** — Small white circle in top-right. Should be more prominent or built into map.

### Airbnb/Booking Map Comparison

| Feature | Airbnb | Booking | Trail of China V7 |
|---------|--------|---------|-------------------|
| Split ratio | 40/60 | 35/65 | 27/73 (380px/flex) |
| List item design | Compact card, no image | Compact row, thumbnail | Full card with image ❌ |
| Marker click | Rich popup + listing | Rich popup + booking | Only hover sync ❌ |
| Zoom controls | Custom +/- buttons | Custom +/- buttons | None ❌ |
| Map style | Custom branded | Custom branded | CARTO light (generic) |
| Hover sync | Yes, bidirectional | Yes | Yes ✅ |
| Mobile | Bottom sheet | Bottom sheet | Toggle button ⚠️ |

### Improvements (Ranked)

1. **Redesign city list cards** — Compact: thumbnail (80px) + name + hook + chips inline. No full-width images. Show 3-4 cards without scrolling.
2. **Add marker click behavior** — Click → fly-to city with zoom, show popup with photo + quick facts + "Explore" CTA
3. **Add zoom controls** — Custom `+`/`-` buttons matching design system (terracotta, rounded)
4. **Fix split ratio** — `lg:grid-cols-[400px_minmax(0,1fr)]` or `lg:grid-cols-[420px_1fr]`
5. **Polish markers** — Use SVG circle markers, terracotta fill, white border, expand on hover with label fade-in
6. **Add "Coming Soon" cities** — Greyed-out markers for Guilin, Hangzhou, Lhasa, Zhangjiajie with tooltip "Coming Soon"
7. **Mobile bottom sheet** — Replace toggle button with a swipeable bottom sheet for the map
8. **Thin the China border** — `weight: 1.5` instead of `2`, or use dashed outline for a subtle look
9. **Add section CTA below map** — "See all destinations →" link
10. **Map tile style** — Consider a warmer tile layer or custom CARTO style matching cream palette

---

## 6. Footer CTA

### Current State
- Uses shared `FooterCTA` component
- "Ready to turn this into an actual route?"
- Quick info cards with icons

### Problems
- Fine as-is, but could be stronger with a visual element (small map illustration or route graphic)

---

## Top 10 Priority Improvements

| # | Improvement | Impact | Effort | Score |
|---|------------|--------|--------|-------|
| 1 | Compact city cards (no full images, show 3-4 at once) | 🔴 High | Medium | 9 |
| 2 | Marker click → fly-to + rich popup | 🔴 High | Medium | 9 |
| 3 | Add zoom controls to map | 🟡 Medium | Low | 7 |
| 4 | Replace placeholder hero image | 🔴 High | Low | 8 |
| 5 | Fix hero overlay (gradient fade) | 🟡 Medium | Low | 7 |
| 6 | Add icons to trust bar | 🟡 Medium | Low | 7 |
| 7 | Thin China boundary border | 🟡 Medium | Low | 6 |
| 8 | Mobile bottom sheet for map | 🔴 High | High | 5 |
| 9 | Add "Coming Soon" markers | 🟡 Medium | Medium | 5 |
| 10 | Polish marker design (SVG) | 🟡 Medium | Medium | 5 |

---

## Mockup Descriptions

### Hero (After)
- Full-bleed Shanghai Bund night photo, 700px tall on desktop
- Gradient: `from-black/50 via-black/30 to-[#f5f1ea]`
- Headline: "Your First Trip to China — Simplified" with `drop-shadow-sm`
- One-line subtitle in white/90
- Two CTAs: terracotta pill + white outline pill, both 48px height

### Trust Bar (After)
- Horizontal strip, `bg-white`, no borders
- 4 items: emoji icon + bold text, `gap-6`
- "🌏 Lived & Traveled China · 🗣️ Speaks Mandarin · 🏠 Family in China · 🔄 Updated 2025"

### Decision Helper (After)
- 4 cards with numbered step circles (1-4) in terracotta
- Larger icon circles (56px)
- CTA link in subtle terracotta pill `bg-[#af5d32]/8`

### Map Section (After)
- Split: 420px list / 1fr map
- List: compact cards, thumbnail left, text right, 3-4 visible at once
- Map: custom zoom +/- buttons, SVG circle markers, click → fly-to + popup
- China boundary: weight 1.5, terracotta
- "Coming Soon" grey markers for future cities
- Mobile: bottom sheet instead of toggle button

### FAQ (After)
- Narrower left column with question list preview
- Answer text at 16px
- "More questions →" link