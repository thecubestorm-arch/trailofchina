# Restructure Plan — Destinations URLs + Archive Sub-Hubs

## Confirmed by Sascha
- URLs: `/destinations/shanghai/bund` (Option B — ohne `what-to-do/`)
- Duplicates: Seite mit mehr Inhalt behalten
- Top 5 pro Stadt: Bestätigt
- China Basics: 19 Seiten bleiben wie definiert

---

## Phase 1: Move Sightseeing Pages (35 pages)

From `/destinations/[city]/what-to-do/[attraction]` → `/destinations/[city]/[attraction]`

### Beijing (5)
```
_archive/destinations/beijing/what-to-do/forbidden-city      → app/destinations/beijing/forbidden-city
_archive/destinations/beijing/what-to-do/great-wall            → app/destinations/beijing/great-wall
_archive/destinations/beijing/what-to-do/summer-palace        → app/destinations/beijing/summer-palace
_archive/destinations/beijing/what-to-do/temple-of-heaven     → app/destinations/beijing/temple-of-heaven
_archive/destinations/beijing/what-to-do/hutong               → app/destinations/beijing/hutong
```

### Shanghai (5)
```
LIVE: app/destinations/shanghai/what-to-do/bund               → app/destinations/shanghai/bund
LIVE: app/destinations/shanghai/what-to-do/shanghai-tower      → app/destinations/shanghai/shanghai-tower
_archive/destinations/shanghai/what-to-do/yu-garden           → app/destinations/shanghai/yu-garden
_archive/destinations/shanghai/what-to-do/french-concession  → app/destinations/shanghai/french-concession
_archive/destinations/shanghai/what-to-do/tianzifang          → app/destinations/shanghai/tianzifang
```

### Xi'an (5)
```
LIVE: app/destinations/xian/what-to-do/terracotta-warriors   → app/destinations/xian/terracotta-warriors
LIVE: app/destinations/xian/what-to-do/city-wall              → app/destinations/xian/city-wall
_archive/destinations/xian/what-to-do/big-wild-goose-pagoda  → app/destinations/xian/big-wild-goose-pagoda
_archive/destinations/xian/what-to-do/muslim-quarter          → app/destinations/xian/muslim-quarter
_archive/destinations/xian/what-to-do/bell-drum-tower         → app/destinations/xian/bell-drum-tower
(KEEP: bell-drum-tower [11657 bytes] > bell-tower [103 bytes])
```

### Chengdu (5)
```
LIVE: app/destinations/chengdu/what-to-do/giant-panda-base     → app/destinations/chengdu/giant-panda-base
_archive/destinations/chengdu/what-to-do/jinli-ancient-street → app/destinations/chengdu/jinli-ancient-street
(KEEP: jinli-ancient-street [7953 bytes] > jinli [159 bytes])
_archive/destinations/chengdu/what-to-do/wuhou-shrine        → app/destinations/chengdu/wuhou-shrine
_archive/destinations/chengdu/what-to-do/peoples-park-teahouse → app/destinations/chengdu/peoples-park-teahouse
_archive/destinations/chengdu/what-to-do/sichuan-opera        → app/destinations/chengdu/sichuan-opera
```

### Chongqing (5)
```
LIVE: app/destinations/chongqing/what-to-do/hongya-cave        → app/destinations/chongqing/hongya-cave
LIVE: app/destinations/chongqing/what-to-do/liziba-monorail     → app/destinations/chongqing/liziba-monorail
_archive/destinations/chongqing/what-to-do/three-gorges-museum → app/destinations/chongqing/three-gorges-museum
_archive/destinations/chongqing/what-to-do/ciqikou             → app/destinations/chongqing/ciqikou
_archive/destinations/chongqing/what-to-do/eling-park          → app/destinations/chongqing/eling-park
```

### Guangzhou (5)
```
LIVE: app/destinations/guangzhou/what-to-do/canton-tower      → app/destinations/guangzhou/canton-tower
LIVE: app/destinations/guangzhou/what-to-do/shamian-island     → app/destinations/guangzhou/shamian-island
_archive/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall → app/destinations/guangzhou/chen-clan-ancestral-hall
_archive/destinations/guangzhou/what-to-do/beijing-road          → app/destinations/guangzhou/beijing-road
_archive/destinations/guangzhou/what-to-do/sacred-heart-cathedral → app/destinations/guangzhou/sacred-heart-cathedral
```

### Shenzhen (5)
```
LIVE: app/destinations/shenzhen/what-to-do/ping-an-finance-centre → app/destinations/shenzhen/ping-an-finance-centre
LIVE: app/destinations/shenzhen/what-to-do/window-of-the-world → app/destinations/shenzhen/window-of-the-world
_archive/destinations/shenzhen/what-to-do/oct-loft            → app/destinations/shenzhen/oct-loft
_archive/destinations/shenzhen/what-to-do/huaqiangbei          → app/destinations/shenzhen/huaqiangbei
_archive/destinations/shenzhen/what-to-do/dafen-oil-painting-village → app/destinations/shenzhen/dafen-oil-painting-village
```

**After move:** Delete all `app/destinations/[city]/what-to-do/` directories (they are now empty)

---

## Phase 2: Archive Removed Sub-Hubs + Detail Pages

### Destinations Sub-Hubs to Archive (42 directories)
Move from `app/` to `_archive/`:

**Beijing:**
- `app/destinations/beijing/day-trips/` → `_archive/destinations/beijing/day-trips/`
- `app/destinations/beijing/local-experiences/` → `_archive/destinations/beijing/local-experiences/`
- `app/destinations/beijing/local-tips/` → `_archive/destinations/beijing/local-tips/`
- `app/destinations/beijing/transport-guide/` → `_archive/destinations/beijing/transport-guide/`
- `app/destinations/beijing/what-to-do/` (after Phase 1 move, this is empty) → delete
- `app/destinations/beijing/where-to-eat/` → `_archive/destinations/beijing/where-to-eat/`
- `app/destinations/beijing/where-to-stay/` → `_archive/destinations/beijing/where-to-stay/`

**Shanghai:** (same pattern — day-trips, local-experiences, local-tips, transport-guide, where-to-eat, where-to-stay)
**Xi'an:** (same pattern)
**Chengdu:** (same pattern)
**Chongqing:** (same pattern)
**Guangzhou:** (same pattern)
**Shenzhen:** (same pattern)

### China Basics Pages to Archive (10 directories)
Move from `app/` to `_archive/`:

- `app/china-basics/before-you-go/` → `_archive/china-basics/before-you-go/`
- `app/china-basics/how-china-differs/` → `_archive/china-basics/how-china-differs/`
- `app/china-basics/how-to-get-around/` → `_archive/china-basics/how-to-get-around/`

---

## Phase 3: Update City Hub Pages

For each of the 7 city hub pages (`app/destinations/[city]/page.tsx`):
1. Remove all links to archived sub-hubs (where-to-eat, where-to-stay, day-trips, local-tips, local-experiences, transport-guide)
2. Update sightseeing links from `/what-to-do/[attraction]` → `/[attraction]`
3. Add a "Back to Destinations" link if missing

If city hubs use `CityHubTemplate` component:
1. Update `CityHubTemplate.tsx` to accept new link format (without `/what-to-do/`)
2. Remove references to archived sub-hubs in the template

---

## Phase 4: Update Components

### Navigation.tsx (if needed)
- Check if any hardcoded paths reference `/what-to-do/`
- Update Footer links if they reference archived pages

### CityHubTemplate.tsx
- Update all internal link generation to use `/destinations/[city]/[attraction]` format
- Remove sections for archived sub-hubs (where-to-eat, etc.)

### Breadcrumb components
- Update breadcrumb logic to reflect new URL structure

---

## Phase 5: Update next.config.js Redirects

Add redirects for ALL moved pages and archived sub-hubs:

### Moved pages (old → new):
```
/destinations/beijing/what-to-do/forbidden-city → /destinations/beijing/forbidden-city
/destinations/beijing/what-to-do/great-wall → /destinations/beijing/great-wall
... (all 35 sightseeing pages)
```

### Archived sub-hubs (redirect to city hub):
```
/destinations/beijing/day-trips → /destinations/beijing
/destinations/beijing/where-to-eat → /destinations/beijing
/destinations/beijing/where-to-stay → /destinations/beijing
/destinations/beijing/local-tips → /destinations/beijing
/destinations/beijing/local-experiences → /destinations/beijing
/destinations/beijing/transport-guide → /destinations/beijing
... (same for all 7 cities = 42 redirects)
```

### Archived China Basics (redirect to china-basics hub):
```
/china-basics/before-you-go → /china-basics
/china-basics/before-you-go/is-china-safe → /china-basics
/china-basics/before-you-go/packing-list → /china-basics
/china-basics/how-china-differs → /china-basics
/china-basics/how-china-differs/visa-guide → /china-basics
/china-basics/how-to-get-around → /china-basics
/china-basics/how-to-get-around/city-to-city → /china-basics
/china-basics/how-to-get-around/plane → /china-basics
/china-basics/what-apps-to-use/communication → /china-basics/what-apps-to-use
/china-basics/what-apps-to-use/meituan → /china-basics/what-apps-to-use
```

---

## Phase 6: Regenerate Sitemap

Regenerate sitemap with ONLY the 71 live URLs (excluding archived pages).

---

## Phase 7: Verify Build

1. Run `rm -rf .next dist && npx next build`
2. Verify no build errors
3. Verify all 71 pages are generated
4. Check that no 404s occur for redirected URLs
