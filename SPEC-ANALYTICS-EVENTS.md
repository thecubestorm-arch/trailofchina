# SPEC-ANALYTICS-EVENTS — Umami Custom Events for Trail of China

**Date:** 2026-05-04  
**Already tracked:** `pdf_download`, `travel_planner_submit`  
**Analytics stack:** Umami (events) + Microsoft Clarity (heatmaps, recordings)

---

## Event Definitions

### P0 — Must Have

| # | Event Name | Where | Why It Matters |
|---|-----------|-------|----------------|
| 1 | `affiliate_click` | Any CTA component (VPN, eSIM, Trip.com, hotel links) | **Core revenue metric.** Which affiliate categories drive clicks? Which pages convert best? Without this, monetization is a black box. |
| 2 | `cheat_sheet_email` | ChinaCheatSheet component (email submit) | **Lead quality funnel.** How many emails convert to PDF downloads? Are email subscribers returning? This is the #1 email list builder. |
| 3 | `destination_explore` | Destination hub cards, map markers, city links | **Interest signal.** Which cities get the most exploration? Tells us where to invest content and which affiliate products (hotels, tours) to prioritize. |
| 4 | `route_view` | Preplanned trips pages (7/10/14-day routes) | **High-intent signal.** Someone viewing a route is actively planning. Which routes are most popular? How many route viewers submit the travel planner form? |

### P1 — Nice to Have

| # | Event Name | Where | Why It Matters |
|---|-----------|-------|----------------|
| 5 | `cta_impression` | Affiliate CTA components (viewport entry) | **Conversion rate baseline.** Are CTAs visible but not clicked? Low impression/click ratio = bad placement or copy. Needs IntersectionObserver. |
| 6 | `basics_deep_dive` | China Basics section — 3+ pages viewed in same session | **Engagement depth.** Users who read multiple basics pages are self-educating — high intent for trip planning. Helps segment audiences. |
| 7 | `map_interaction` | Destinations map (marker click, popup open, city select) | **Interactive engagement.** Is the map actually useful or just decorative? Which cities get map clicks vs list clicks? Informs map UX improvements. |
| 8 | `blog_read_complete` | Blog posts — scroll to 75%+ of article | **Content quality signal.** Which blog posts hold attention? Long reads = valuable content. Short reads = wrong topic or bad writing. |

### P2 — Low Priority

| # | Event Name | Where | Why It Matters |
|---|-----------|-------|----------------|
| 9 | `search_use` | Search bar (if implemented) | **Content gap finder.** What are people searching for that doesn't exist? Reveals missing content. |
| 10 | `share_click` | Share buttons (if implemented) | **Organic growth signal.** Which pages are shared most? Viral content = free marketing. |

---

## Implementation Notes

### Affiliate Click Tracking
The most critical event. Add a wrapper function that fires `umami.track('affiliate_click', { category: 'vpn' | 'esim' | 'hotel' | 'tripcom', page: pathname })` before the link navigates. Use `pointerdown` or `click` event on `<a>` tags with `target="_blank"` and affiliate URLs.

### CTA Impression
Use `IntersectionObserver` with `threshold: 0.5` to fire once per CTA component mount. Store fired impressions in `sessionStorage` to avoid duplicates.

### Deep Dive Detection
Track page views in `sessionStorage`. When a user views their 3rd China Basics page in one session, fire the event with `{ pages: ['vpn', 'wechat-pay', 'internet'] }`.

### Blog Read Complete
Use scroll depth tracking. Fire at 75% scroll of article body. Include `{ slug: articleSlug, readTime: estimatedMinutes }`.

---

## Priority Funnel (What to Build First)

```
1. affiliate_click     ← Revenue. Build today.
2. cheat_sheet_email   ← Email list. Already partially tracked.
3. destination_explore  ← Content investment signal.
4. route_view           ← High-intent planning signal.
5-8. P1 events          ← Build in sprint 2.
9-10. P2 events         ← Build when search/share exist.
```

## Key Business Questions These Answer

1. **"Are we making money?"** → `affiliate_click` + `cheat_sheet_email` + `travel_planner_submit`
2. **"What content drives revenue?"** → `affiliate_click` segmented by page
3. **"Who's ready to plan?"** → `route_view` → `travel_planner_submit` funnel
4. **"Is the map useful?"** → `map_interaction` + `destination_explore` compare
5. **"What should we write next?"** → `search_use` + low `blog_read_complete` posts