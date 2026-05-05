# SPEC: Plan Your Trip Hub V4 & V5

## Context
Previous V1/V2/V3 were built but Sascha said "none are great enough, V3 is best". The UX audit identified key problems:
- Hub doesn't orient users or help them decide
- All 4 cards say "Trip Planning" — zero differentiation
- No decision framing ("Start here if...")
- bg-white instead of warm gradient
- No ChineseWatermark, no Breadcrumb

## Design Direction
Build 2 new variants that are dramatically better. Take inspiration from the Shanghai hub's magazine quality.

## Shared Data
All variants link to the same 4 subpages:
- `/plan-your-trip/best-time-to-visit`
- `/plan-your-trip/budget`
- `/plan-your-trip/preplanned-trips`
- `/plan-your-trip/travel-planner`

## Routes
- `/plan-your-trip-v4` → `app/plan-your-trip-v4/page.tsx`
- `/plan-your-trip-v5` → `app/plan-your-trip-v5/page.tsx`

Both: `robots: { index: false, follow: false }` in metadata (test variants)

---

## V4: "Decision Flow" — Guided Path Hub

**Core idea:** The hub actively helps users decide where to start. Like a mini quiz/flow, but still a page (not interactive wizard).

### Structure
1. **Hero Section**
   - Warm gradient bg (Bund-style: `linear-gradient(0deg, rgba(245,241,234,0.75) 0%, rgba(245,241,234,0.2) 100%), #ffffff`)
   - ChineseWatermark character="行" (journey)
   - Breadcrumb: Home > Plan Your Trip
   - Serif H1: "Plan Your China Trip"
   - Subtitle: "Four paths, one destination. Start where it makes sense for you."
   - Brief 1-2 sentence intro that actually helps you choose

2. **"Start Here If..." Cards** (the key innovation)
   - 4 cards, each with:
     - A terracotta icon circle (emoji inside)
     - Title
     - "Start here if..." line in terracotta (e.g., "Start here if your dates are flexible")
     - 2-3 sentence description
     - Tags/chips
     - CTA link →
   - Each card has a DIFFERENT category: Timing, Budget, Routes, Custom
   - Cards are full-width sections with border-b border-[#ebe4d8] divider between them (Magazine Hub layout, NOT a grid)
   - Each card has a subtle warm bg on hover

3. **Route Comparison Strip**
   - A compact comparison of the 3 preplanned routes:
     - 7 Days | Fast Paced | Beijing → Xi'an → Shanghai | From ¥8,000
     - 10 Days | Moderate | + Chengdu | From ¥12,000
     - 14 Days | Relaxed | + Hangzhou | From ¥16,000
   - Each route links to its detail page
   - This goes AFTER the Preplanned Trips card

4. **Bottom CTA**
   - "Not sure where to start? → Browse our preplanned trips"
   - Dark teal block with white text

### Design Tokens
- Full Bund-style: warm gradient bg, ChineseWatermark, serif headings, CSS variables
- Cards: `border-b border-[#ebe4d8]`, `py-12`, hover:bg-[#fdf8f3]
- Category: `text-xs font-semibold uppercase tracking-widest text-[#af5d32]`
- "Start here if": `text-sm text-[#af5d32] font-medium mt-2`
- Tags: same chip style as rest of site
- max-w-6xl container

---

## V5: "Visual Route" — Magazine Storytelling Hub

**Core idea:** The hub tells a story. It feels like opening a travel magazine, with visual route comparison and rich editorial feel.

### Structure
1. **Hero Section** (same as V4 base)
   - Warm gradient bg
   - ChineseWatermark character="旅" (travel)
   - Breadcrumb: Home > Plan Your Trip
   - Serif H1: "Your China Trip Starts Here"
   - Chinese subtitle: 计划你的中国之旅
   - Subtitle: "Everything you need to plan, budget, and book your first China trip."

2. **Visual Route Timeline** (the key innovation)
   - Horizontal scrollable strip showing 3 route options as connected milestones
   - Each route: Days badge → City dots → Arrow → Next city
   - Example: `7 Days · Beijing → Xi'an → Shanghai`
   - Active/highlighted route card below with details
   - This section has a slightly different bg (warmer) to stand out
   - Mobile: horizontal scroll with snap
   - Desktop: 3 cards side by side

3. **Planning Tools Section**
   - 2x2 grid (mobile: stack):
     - Top-left: Best Time to Visit (with icon + "Start here if dates are flexible")
     - Top-right: Budget Guide (with icon + "Start here if cost determines your trip")
     - Bottom-left: Preplanned Trips (with icon + "Start here if you want a proven route")
     - Bottom-right: Travel Planner (with icon + "Start here if you know your constraints")
   - Each card: rounded-xl, shadow, warm bg, icon in terracotta circle, title, "start here if" line, description, tags, CTA
   - This is a GRID layout (not full-width sections) because the route timeline above already handles the visual storytelling

4. **Blockquote Tip**
   - Styled blockquote with terracotta border-left
   - "💡 First time in China? Start with a preplanned 7-day route and customize from there. You can always extend."

5. **Bottom CTA**
   - Same dark teal block as V4

### Design Tokens
- Same Bund-style base
- Route timeline: dark teal bg (#1a3a4a) strip with white text and terracotta accents
- Planning tools grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Cards: `bg-white rounded-xl shadow-sm border border-[#ebe4d8] p-6`
- Mobile-first: everything stacks cleanly

---

## Technical Requirements
- Both variants: `"use client"` (for ChineseWatermark)
- Responsive mobile-first design
- Links to real subpages
- Must pass build: `rm -rf .next && NODE_OPTIONS='--max-old-space-size=4096' npx next build`
- Do NOT modify existing `/plan-your-trip` page or V1/V2/V3 pages
- Do NOT commit after building