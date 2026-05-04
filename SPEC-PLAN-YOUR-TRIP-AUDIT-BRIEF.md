# SPEC: Plan Your Trip — UX/UI + Content Audit

## Goal
Audit all 7 pages under `/plan-your-trip/` for:
1. **Visual consistency** with the rest of the site (Bund-style pages use warm gradient bg, ChineseWatermark, serif headings, CSS variables)
2. **Content quality** — is the info actually useful? Missing critical details?
3. **User flow** — does the page progression make sense for someone planning a China trip?
4. **Modern UX** — what would a top-tier travel site do differently?

## Current Pages to Audit
1. `/plan-your-trip` — Hub page (4 sections, magazine layout)
2. `/plan-your-trip/best-time-to-visit` — Bund-style article
3. `/plan-your-trip/budget` — Bund-style article
4. `/plan-your-trip/preplanned-trips` — Hub for 3 routes
5. `/plan-your-trip/preplanned-trips/7-day-route` — Day-by-day itinerary
6. `/plan-your-trip/preplanned-trips/10-day-route` — Day-by-day itinerary
7. `/plan-your-trip/preplanned-trips/14-day-route` — Day-by-day itinerary
8. `/plan-your-trip/travel-planner` — Lead form (TravelPlannerForm.tsx)

## Reference: Bund-Style Design Language
- Warm gradient bg: `linear-gradient(0deg, rgba(245,241,234,0.75) 0%, rgba(245,241,234,0.2) 100%), #ffffff`
- ChineseWatermark component (various characters)
- CSS variables: --foreground (#1f2933), --muted (#5d6a73), --surface (rgba(255,252,247,0.86)), --primary (#af5d32), --line (#1f29331a), --background (#f5f1ea)
- Serif headings (font-serif), sans-serif body
- Breadcrumb component at top
- Blockquote tips with terracotta left border
- ContextualCTA at bottom
- max-w-6xl container
- No right sidebar TOC
- Key takeaway boxes (terracotta tag + summary)

## Known Issues to Flag
- Hub page (`/plan-your-trip/page.tsx`) uses `bg-white` instead of warm gradient — inconsistent
- Hub page has NO ChineseWatermark
- Hub page has NO Breadcrumb
- Hub page categories all say "Trip Planning" — not useful differentiation
- Preplanned trips hub still uses picsum.photos image
- Route pages (7/10/14 day) may still use picsum images
- Travel Planner form was recently converted to lead form — check UX is solid
- 2025 in metadata titles — should be updated or made evergreen

## Audit Output Format
Write to `SPEC-PLAN-YOUR-TRIP-UX-AUDIT.md` with these sections:

### 1. Design Consistency Score (per page)
Rate each page 1-5 for consistency with Bund-style. List specific gaps.

### 2. Content Quality Audit
- What's missing? What's weak? What's genuinely helpful?
- Compare to competitor sites (Lonely Planet, Rick Steves, ChinaGuide)
- Flag any placeholder/weak content

### 3. User Flow Analysis
- Does the page hierarchy make sense?
- Are CTAs in the right places?
- Is the progression logical: Hub → Article → Action?

### 4. Top 10 Improvements (Prioritized)
Ranked by impact. Include both design fixes and content improvements.

### 5. Quick Wins vs Big Efforts
Categorize each improvement as quick win (<1 hour Codex) or bigger effort.

## IMPORTANT
- DO NOT write any code or make any changes
- This is an AUDIT ONLY — read files, analyze, write the spec document
- Be specific: cite file names, line numbers, exact CSS values where relevant
- Be honest: if something is good, say so. If it's bad, say why.