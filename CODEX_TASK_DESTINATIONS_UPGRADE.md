# Codex Task: Upgrade New Destination Pages to Shanghai Quality

## Context
Xi'an, Chengdu, and Chongqing destination pages exist but are STUB QUALITY (37-59 lines each).
Shanghai/Beijing pages are REFERENCE QUALITY (73-99 lines each).
Your job: Rewrite ALL 15 new pages to match Shanghai quality, then verify linking and SEO.

## Reference Files (READ FIRST - copy this structure exactly)
- `app/destinations/shanghai/page.tsx` - Main hub page pattern
- `app/destinations/shanghai/what-to-do/page.tsx` - Subpage pattern
- `app/destinations/shanghai/where-to-eat/page.tsx` - Food guide pattern
- `app/destinations/shanghai/where-to-stay/page.tsx` - Stay guide pattern
- `app/destinations/shanghai/local-tips/page.tsx` - Tips page pattern

## Files to Rewrite (15 total)

### Xi'an (5 files)
1. `app/destinations/xian/page.tsx` - Main hub
2. `app/destinations/xian/what-to-do/page.tsx`
3. `app/destinations/xian/where-to-eat/page.tsx`
4. `app/destinations/xian/where-to-stay/page.tsx`
5. `app/destinations/xian/local-tips/page.tsx`

### Chengdu (5 files)
6. `app/destinations/chengdu/page.tsx` - Main hub
7. `app/destinations/chengdu/what-to-do/page.tsx`
8. `app/destinations/chengdu/where-to-eat/page.tsx`
9. `app/destinations/chengdu/where-to-stay/page.tsx`
10. `app/destinations/chengdu/local-tips/page.tsx`

### Chongqing (5 files)
11. `app/destinations/chongqing/page.tsx` - Main hub
12. `app/destinations/chongqing/what-to-do/page.tsx`
13. `app/destinations/chongqing/where-to-eat/page.tsx`
14. `app/destinations/chongqing/where-to-stay/page.tsx`
15. `app/destinations/chongqing/local-tips/page.tsx`

## Structural Requirements (match Shanghai exactly)

### Main Hub Pages
- Import `Link` from `next/link`
- Use `Link href="/destinations/{city}/{subpage}"` for navigation cards
- Card layout: `border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg`
- Each card has: emoji icon (text-4xl), h2 title, description, CTA arrow link
- Include Quick Tips box (`bg-amber-50 border-l-4 border-amber-400`)
- Include introductory paragraph (text-lg, 2-3 sentences)
- `bg-white` background (NOT `#f5f1ea`)

### Subpages (what-to-do, where-to-eat, where-to-stay, local-tips)
- Detailed content with MULTIPLE sections (not just 1-2 sections)
- Attraction cards: `border rounded-lg p-6` with h3 title, description, and practical info line
- Practical info format: `🕐 Hours | 💰 Price | 📍 Location`
- Hidden Gems / Pro Tips sections
- Tourist Traps / Scam Warnings sections
- "Back to {City} Guide" link at bottom using `text-[var(--accent)]`
- `bg-white` background
- 80+ lines per subpage

## SEO Requirements
- Every page has `Metadata` export with unique `title` and `description`
- Title format: "{Page Title} | Trail of China"
- Description: 120-160 chars, unique per page, includes city name
- Use semantic HTML: proper h1 → h2 → h3 hierarchy
- Include Chinese characters for key terms where relevant (e.g., 兵马俑 for Terracotta Warriors)

## Mobile-First Requirements
- All grids use `md:grid-cols-2` (stack on mobile, 2-col on desktop)
- Padding: `px-4 py-12` on main
- Text sizes work on small screens (no tiny text)
- Cards stack vertically on mobile

## Internal Linking
- Main hub links to all 4 subpages
- Each subpage links BACK to main hub
- Cross-link related pages where natural (e.g., "See Where to Eat for food near attractions")
- Hub page `app/destinations/page.tsx` already has all 5 cities - no changes needed there

## Content Requirements (REAL, DETAILED content)

### Xi'an Content
- **What to Do**: Terracotta Warriors (Pit 1,2,3 details), City Wall (bike rental, 14km loop), Muslim Quarter, Bell/Drum Towers, Big Wild Goose Pagoda, Shaanxi History Museum
- **Where to Eat**: Yangroupaomo, Roujiamo, Liangpi, Biangbiang noodles, Muslim Quarter stalls, specific restaurant names
- **Where to Stay**: Inside City Wall (Bell Tower area, Muslim Quarter), Outside City Wall (near train station, Yanta district)
- **Local Tips**: Bus 306 to Terracotta Warriors, morning timing, fake jade scams, tea ceremony scams, haggling tips

### Chengdu Content
- **What to Do**: Giant Panda Breeding Research Base (timing!), Jinli Street, Wenshu Temple, People's Park teahouse, Sichuan Opera, Kuanzhai Alley
- **Where to Eat**: Sichuan Hotpot (málà explained), Mapo Tofu, Kung Pao Chicken, Dan Dan Noodles, specific restaurants, street food on Jinli
- **Where to Stay**: Jinjiang/Chunxi Road (central), Wuhou (temple area), Tibetan Quarter
- **Local Tips**: Panda base timing (8am!), Chengdu is SLOW paced, massage culture, taxi vs DiDi

### Chongqing Content
- **What to Do**: Hongyadong (night views), Yangtze Cable Car, Ciqikou Old Town, Three Gorges Museum, Liziba Monorail (train through building), Eling Park
- **Where to Eat**: Chongqing Hotpot (spicier than Chengdu!), Xiaomian breakfast noodles, grilled fish, specific restaurants
- **Where to Stay**: Jiefangbei (city center), Nanbin Road (river views), Hongyadong area
- **Local Tips**: 3D city navigation, fog reality, "mild" is still spicy, vertical streets, monorail tips

## Verification Steps (RUN THESE AT THE END)
1. `npm run build` - must pass with zero errors
2. `find app/destinations/xian app/destinations/chengdu app/destinations/chongqing -name "page.tsx" | wc -l` - must be 15
3. Every file must be 70+ lines (check with `wc -l`)
4. `git add -A && git commit -m "Upgrade new destinations to Shanghai quality - mobile-first, SEO, linked"`
5. `git push`