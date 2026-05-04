# SPEC: Plan Your Trip Hub — 3 Variants

## Goal
Create 3 variants of the `/plan-your-trip` hub page so Sascha can compare approaches. The hub is the top-of-funnel page — it needs to help users decide WHERE to go next, not just list links.

## Current Problems (from audit)
- Uses `bg-white` instead of warm Bund-style gradient
- No ChineseWatermark, no Breadcrumb, no serif H1
- All 4 cards say "Trip Planning" — zero differentiation
- No decision framing ("Start here if...")
- Weak intro paragraph that doesn't help anyone choose

## Routes to Create
- `/plan-your-trip-v1` → `app/plan-your-trip-v1/page.tsx`
- `/plan-your-trip-v2` → `app/plan-your-trip-v2/page.tsx`
- `/plan-your-trip-v3` → `app/plan-your-trip-v3/page.tsx`

## Shared Data (all 3 variants)
```ts
const sections = [
  {
    category: 'Timing',
    icon: '🗓️',
    title: 'Best Time to Visit',
    preview: 'Month-by-month climate guide, peak seasons, holidays to avoid, and ideal months for every region.',
    tags: ['🌸 Spring', '🍂 Autumn', '❄️ Winter'],
    href: '/plan-your-trip/best-time-to-visit',
    who: 'Choose this if your dates are flexible',
  },
  {
    category: 'Budget',
    icon: '💰',
    title: 'Budget Guide',
    preview: 'What China actually costs — daily budgets, accommodation, food, transport, and money-saving tips for every style.',
    tags: ['¥ Budget', '¥¥ Mid-Range', '¥¥¥ Luxury'],
    href: '/plan-your-trip/budget',
    who: 'Choose this if cost determines your trip length',
  },
  {
    category: 'Routes',
    icon: '🗺️',
    title: 'Preplanned Trips',
    preview: 'Ready-made itineraries for 7, 10, or 14 days covering China\'s highlights with realistic pacing.',
    tags: ['7️⃣ 7 Days', '🔟 10 Days', '1️⃣4️⃣ 14 Days'],
    href: '/plan-your-trip/preplanned-trips',
    who: 'Choose this if you want a proven route',
  },
  {
    category: 'Custom',
    icon: '✍️',
    title: 'Travel Planner',
    preview: 'Build your own itinerary. Pick cities, set your pace, and we\'ll help create the perfect China trip.',
    tags: ['🏙️ Cities', '⏱️ Duration', '🎯 Interests'],
    href: '/plan-your-trip/travel-planner',
    who: 'Choose this if you already know your constraints',
  },
]
```

## Design System (MUST follow for ALL variants)
- Terracotta: #af5d32
- Cream: #f5f1ea
- Dark teal: #1a3a4a
- Muted: #64748b
- Surface: rgba(255,252,247,0.86)
- CSS variables: --foreground, --muted, --surface, --primary, --line, --background
- Serif headings (font-serif), sans-serif body
- ChineseWatermark component (character: 计 for V1/V2, 行 for V3)
- max-w-6xl container
- Warm gradient bg: `linear-gradient(0deg, rgba(245,241,234,0.75) 0%, rgba(245,241,234,0.2) 100%), #ffffff`

---

## V1: Clean & Consistent
**Approach:** Bring the hub page up to Bund-style consistency. Same structure, but visually unified with the rest of the site.

- Warm gradient background (not bg-white)
- ChineseWatermark character="计"
- Breadcrumb: Home > Plan Your Trip
- Serif H1 heading
- Different category labels (Timing, Budget, Routes, Custom — NOT all "Trip Planning")
- Each section has a "Who this is for" line in smaller muted text
- Terracotta category tags
- Blockquote tip at bottom: "If this is your first trip, start with a preplanned route and customize from there."
- Clean, editorial, magazine feel

## V2: Decision Hub
**Approach:** The hub becomes a real decision tool. Help users figure out WHERE to start based on their situation.

- Same warm gradient + ChineseWatermark + Breadcrumb
- Hero: "Plan Your China Trip" with subtitle: "Four paths, one destination. Start where it makes sense for you."
- Decision intro: 2-3 lines explaining the 4 options and when each matters
- Each section card has a clear "Who this is for" chip/tag (terracotta background)
- Route comparison strip: a compact comparison of 7/10/14 day routes (pace, cost range, best for) inside the Routes card
- Bottom: "Not sure where to start?" CTA pointing to preplanned trips
- More opinionated, more helpful, less neutral

## V3: Visual Trip Planner
**Approach:** The hub feels like a travel experience. Strong visual storytelling, timeline-style route comparison, magazine-level design.

- Same warm gradient + ChineseWatermark character="行" + Breadcrumb
- Hero: "Your China Trip Starts Here" with Chinese subtitle 计划你的中国之旅
- Visual route timeline: horizontal strip showing 7 → 10 → 14 days as connected dots/milestones with key stops (Beijing → Xi'an → Shanghai etc.)
- Each section card is a rounded card with shadow, icon in a terracotta circle, title, preview, tags, AND a "Who this is for" line
- Comparison section: 3 route cards side-by-side with pace, cost range, and highlights
- Dark teal CTA block at bottom: "Ready to plan? Start with a route."
- Most magazine-like, most visual

---

## Technical
- Each variant is standalone `page.tsx`
- Use `"use client"` if needed for ChineseWatermark
- Must build without errors
- Responsive (mobile-first)
- Link to existing subpages (/plan-your-trip/best-time-to-visit, etc.)
- Keep picsum.photos images where needed (Sascha confirmed stock images are fine for now)
- After creating all 3, run: `rm -rf .next && NODE_OPTIONS='--max-old-space-size=4096' npx next build`
- Do NOT commit