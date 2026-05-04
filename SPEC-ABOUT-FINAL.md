# SPEC: About Page — Final Version

## Goal
Create the final `/about` page combining V1 header + V2 content style, with team photos and bios.

## Route
- `/about` → `app/about/page.tsx` (the canonical About page)

## Design Direction
- **Header**: V1 style — large hero card with "We Fell in Love with China So You Can Too" heading, warm gradient background, ChineseWatermark 旅, rounded card with shadow
- **Body**: V2 style — credibility stats (4+ trips, Family in China, Mandarin speaker, Local contacts), coverage grid, quotes, company info
- **NEW section**: Team — two people side by side with placeholder photos and bios

## Team Section (NEW)
Two-person team layout, side by side on desktop, stacked on mobile:

### Person 1: Ruijie
- **Photo**: Placeholder (gradient circle or rounded square with initials "R" or silhouette placeholder, ~120x120px)
- **Name**: Ruijie
- **Bio**: Family originally from Shanghai. Speaks fluent Chinese, German, and English. Has visited China 20+ times — from major cities to smaller local stops that most travelers never see.
- **Role context**: The local expertise engine behind every recommendation.

### Person 2: Sascha
- **Photo**: Placeholder (same style as Ruijie, initials "S")
- **Name**: Sascha
- **Bio**: From Switzerland. Has been to China 4 times and is learning Chinese. Fell in love with the country — the food, the pace, the way a chaotic street suddenly makes sense. Building Trail of China so others can experience that same discovery.
- **Role context**: The one who remembers what it feels like to arrive in China for the first time.

## Photo Placeholders
Use styled `<div>` placeholders (NOT picsum.photos) for the team photos:
- 120×120px rounded-full div with gradient background (#1a3a4a to #af5d32 gradient)
- Centered initials letter (R/S) in white, font-serif, text-3xl
- Add a subtle border ring (2px border-[var(--primary)])
- This makes it obvious where real photos go — easy to swap later

## Structure (top to bottom)
1. **Nav pills** — Home, Plan Your Trip, China Basics, Destinations (same as V1/V2)
2. **Hero card** — V1 style: "We Fell in Love with China So You Can Too" + subtitle
3. **Credentials grid** — V2 style: 4 numbered stats (4+ trips, Family in China, Mandarin speaker, Local contacts)
4. **Team section** — NEW: Ruijie + Sascha with photos and bios
5. **Coverage section** — V2 style: "What We Cover" grid with topic pills
6. **Quote block** — V2 style blockquote
7. **Company info** — V2 style card (BuetikoferDigital, Zurich, email)
8. **CTA section** — V1 style: dark teal gradient card "Start Planning Your Trip"

## Technical
- `"use client"` if needed for ChineseWatermark
- ChineseWatermark character="旅" in hero
- All CSS variables (--foreground, --muted, --surface, --primary, --line, --background)
- max-w-6xl container
- Responsive (mobile-first)
- next/link for internal links
- Metadata: title "About | Trail of China", description about trust and expertise
- NO picsum.images — use gradient placeholders for team photos
- After creating, run: rm -rf .next && NODE_OPTIONS='--max-old-space-size=4096' npx next build
- Commit when build passes