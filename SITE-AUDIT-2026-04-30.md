# Trail of China — Full Site Audit (Apr 30, 2026)

## 🏗️ Architecture Overview

| Section | Pages | Design System | Status |
|---------|-------|---------------|--------|
| **Homepage** | 1 (+ 7 variants) | V7 (image hero + map) | ✅ Live at `/` |
| **China Basics** | 34 content + 4 hubs | Bund-style | ✅ Complete |
| **Destinations** | 1 landing + 5 city hubs | Mixed | ⚠️ Needs work |
| **— Shanghai** | 1 hub + 28 sub-pages | Split hub + AttractionPage | ✅ Good |
| **— Beijing** | 1 hub + 22 sub-pages | Bund hub + AttractionPage/NeighborhoodPage/FoodDetailPage | ✅ Good |
| **— Xi'an** | 1 hub + 17 sub-pages | Bund hub + AttractionPage/NeighborhoodPage/FoodDetailPage | ✅ Good |
| **— Chengdu** | 1 hub + 17 sub-pages | Bund hub + AttractionPage/NeighborhoodPage/FoodDetailPage | ✅ Good |
| **— Chongqing** | 1 hub + 17 sub-pages | Bund hub + AttractionPage/NeighborhoodPage/FoodDetailPage | ✅ Good |
| **Plan Your Trip** | 1 hub + 5 sub-pages | Mixed | ⚠️ Needs work |
| **— Hub** | 1 | Bund-style (ChineseWatermark) | ✅ |
| **— Preplanned trips** | 4 | Old plain style (bg-white, gray-700) | ⚠️ Outdated |
| **— Best time to visit** | 1 | GuideArticlePage ❌ | ⚠️ Needs Bund-style |
| **— Budget** | 1 | GuideArticlePage ❌ | ⚠️ Needs Bund-style |
| **— Travel planner** | 1 | Plain (bg-white, basic) | ⚠️ Needs design |
| **Blog** | 3 (list + slug + category) | Blog template | ⚠️ Unused? |
| **Legal** | 3 (imprint, privacy, cookies) | Custom (Link) | ✅ OK |
| **Interactive Map** | 1 | Map component | 🔄 Coming soon |

## 🎨 Design Consistency Status

### ✅ Bund-Style (Complete)
- All 34 China Basics content pages
- All 4 China Basics hub pages (what-apps-to-use, how-to-get-around, how-to-get-internet, before-you-go)
- 1 China Basics landing hub (china-basics/page.tsx uses ChinaBasicsClient)
- How China Differs hub page
- All 5 destination city hub pages (shanghai, beijing, xian, chengdu, chongqing)
- Plan Your Trip hub page

### ⚠️ Still Using GuideArticlePage (2 pages)
1. `plan-your-trip/best-time-to-visit/page.tsx`
2. `plan-your-trip/budget/page.tsx`

### ⚠️ Old Plain Style (4 pages)
1. `plan-your-trip/preplanned-trips/page.tsx` (hub)
2. `plan-your-trip/preplanned-trips/7-day-route/page.tsx`
3. `plan-your-trip/preplanned-trips/10-day-route/page.tsx`
4. `plan-your-trip/preplanned-trips/14-day-route/page.tsx`

### ⚠️ Needs Full Design (1 page)
1. `plan-your-trip/travel-planner/page.tsx` — bare bones, just `bg-white`

## 🗑️ Dead Code / Cleanup Candidates

### Old Version Routes (30 pages, ~300KB+ unused code)
- `/v1` through `/v7` — homepage variants, V7 is now default at `/`
- `/destinations-v2` through `/destinations-v8` — map iterations, v8 at `/destinations-v8`
- `/destinations-2`, `/destinations-3` — old destinations
- `/shanghai-2` through `/shanghai-8` — Shanghai iterations
- `/china-basics/what-apps-to-use-v2` through `-v4` — old What Apps iterations
- `/shanghai-map`, `/shanghai-map-gl` — map experiments

### Component Cleanup
- `GuideArticlePage.tsx` — still used by 2 pages (best-time-to-visit, budget)
- Once those 2 pages are converted, GuideArticlePage can be deleted

## 📊 Page Count Summary

| Category | Active Pages | Old/Variants | Total |
|----------|-------------|--------------|-------|
| China Basics | 38 | 3 (v2-v4) | 41 |
| Destinations | 100 | 13 (variants) | 113 |
| Plan Your Trip | 7 | 0 | 7 |
| Homepage | 1 | 7 (v1-v7) | 8 |
| Blog | 3 | 0 | 3 |
| Legal | 3 | 0 | 3 |
| Other | 2 (map, destinations landing) | 0 | 2 |
| **Total** | **154** | **23** | **177** |

## 🔴 Issues Found

1. **Placeholder images everywhere** — All China Basics pages use `picsum.photos` placeholders. Need real photos.
2. **Preplanned trips are outdated** — Plain `bg-white`, `text-gray-700`, `text-[#1a3a4a]` style, no ChineseWatermark, no Breadcrumb, no serif headings
3. **Best Time to Visit + Budget still use GuideArticlePage** — The last 2 holdouts
4. **Travel Planner is bare** — Just a placeholder with minimal UI
5. **30 old version routes still exist** — Wasting build time and increasing bundle size
6. **Destinations landing `/destinations`** — Still uses old DestinationsMapClient (not v8)
7. **Blog section** — 3 pages but appears unused/empty
8. **Interactive Map** — Placeholder, "Coming Soon"
9. **No 404 page** — Missing custom error page
10. **i18n only on homepage** — EN/DE translations exist but only applied to homepage

## 📋 Recommended Next Steps (Priority Order)

### P0 — Design Consistency (Quick Wins)
1. Convert `best-time-to-visit` and `budget` to Bund-style (removes last GuideArticlePage usage)
2. Convert 4 preplanned trips pages to Bund-style
3. Delete GuideArticlePage component after conversion

### P1 — Cleanup (Performance + Code Quality)
4. Delete old version routes (v1-v7, destinations-v2-v8, shanghai-2-8, what-apps-to-use-v2-v4) — saves ~300KB+ of dead code
5. Switch `/destinations` from old DestinationsMapClient to v8
6. Add custom 404 page

### P2 — Content Quality
7. Replace all picsum.photos placeholder images with real photos
8. Add real app screenshots to Alipay and other app pages
9. Replace hero image on homepage V7 with real China photo

### P3 — Features
10. Travel Planner — full interactive UI or remove
11. Blog — either populate with content or remove
12. Interactive Map — implement or remove "Coming Soon" nav link
13. i18n rollout — apply DE translations to all Bund-style pages

### P4 — Destinations Enhancement
14. Shanghai hub refinement (map performance, mobile UX)
15. Consider adding more sub-pages (local-experiences, local-tips are thin for some cities)
16. SEO meta descriptions audit for all pages