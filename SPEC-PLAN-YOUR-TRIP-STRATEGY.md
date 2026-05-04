# SPEC-PLAN-YOUR-TRIP-STRATEGY.md

## Brief
The current /plan-your-trip page (V3) is a styled link list with emoji icons and tags. It is clean, readable, and completely forgettable. The founder's feedback: V3 was the best attempt so far, but "there's more potential." The page needs to go from "here are some links" to "I'm EXCITED about planning this trip."

## Current State
- 4 sections: Best Time to Visit, Budget Guide, Preplanned Trips, Travel Planner
- Warm editorial palette: terracotta #af5d32, cream #f5f1ea, dark teal #1a3a4a
- Serif headings, ChineseWatermark component, magazine-style aesthetic
- Static Next.js export (no server-side logic)
- Target: Western first-time China visitors

## The Shift
Stop thinking about this as a "hub page." Start thinking about it as a **trip-planning experience.** The user is at a decision point: "I'm going to China. Now what?" Every top travel site (Rick Steves, Lonely Planet, Culture Trip) makes this moment feel like the beginning of something, not a chore. We need to do the same — but in a way none of our competitors do.

---

## Variant A: "The Traveler's Desk" (Tactile Editorial)

### Core Concept
Transform the page into a beautifully composed **top-down view of a traveler's desk** — the physical space where trip planning actually happens. Instead of reading about planning, you're *sitting down to plan.* Every section is a physical object on the desk: a vintage calendar, a leather wallet with receipts, a folded map, a blank Moleskine. The page feels like a still-life photograph come to life.

### Visual Layout Approach
- **Hero:** Full-width, warm-toned photograph or highly realistic CSS illustration of a desk surface (wood grain, warm side-lighting, slight film grain). Terracotta and cream tones tie into the brand palette.
- **Main area:** Four physical objects placed at natural, slightly offset positions (not a grid — organic placement like someone actually set them down). Each object has soft drop shadows, slight rotation (±2°), and responds to hover with a gentle lift-and-tilt (CSS transform, no JS needed for static version).
- **Typography:** Section titles are "written" on the objects in a hand-lettered or typewriter style (serif stays for the page H1, but objects get more tactile typography).
- **Whitespace:** Generous. The desk feels uncluttered — curated, not crowded.

### Key Interactive / Visual Elements
1. **Hover lift:** Each object gently lifts and tilts toward the user on hover (CSS `transform: translateY(-8px) rotate(1deg)` with smooth transition).
2. **Object preview:** On hover, a small "sticky note" or photo corner peeks out from under the object — a micro-preview of what's inside (e.g., calendar shows "October: Best weather").
3. **Scroll-driven parallax (optional, lightweight):** Objects move at slightly different speeds as you scroll, creating depth. The desk surface is fixed; objects float above it.
4. **Mobile fallback:** On small screens, the desk becomes a vertical stack of "polaroid photos" or cards pinned to a corkboard background.

### Why This Works Better
- **Emotional hook:** It answers the question "How do I start planning?" by showing you the tools, not listing them. It mirrors the real-world ritual of trip planning.
- **Differentiation:** No competitor uses this level of tactile design. Rick Steves is text-heavy. Lonely Planet is a grid of cards. Culture Trip is editorial photography. Nobody feels like you're *in the room* planning.
- **Shareability:** This is highly screenshot-worthy. Someone will send a screenshot to their travel partner saying "Look at this site, it feels like we're already planning."
- **Brand fit:** The warm editorial aesthetic + physical objects = a travel magazine layout come to life. The ChineseWatermark could be a subtle stamp or chop mark on the desk corner.

### Emotional Experience
**Anticipation and comfort.** The warm lighting and familiar objects create an "I've got this" feeling. Planning a first trip to China is intimidating. A messy desk full of tools makes it feel approachable and human. The user thinks: "This person (the site) has done this before. They're showing me their process."

---

## Variant B: "The Archetype Engine" (Personalized & Shareable)

### Core Concept
The page doesn't start with links — it starts with **a single question:** *"What kind of China traveler are you?"* The user picks one of three archetypes (The Classic First-Timer, The Adventurous Explorer, The Culture Deep-Diver). The ENTIRE page then reshapes itself around that choice, showing only the planning resources that matter for that traveler type. The result is a personalized planning dashboard that feels like it was built just for them.

### Visual Layout Approach
- **Initial state:** A bold, centered question with three large, full-bleed cards taking up most of the viewport. Each card has a distinct color accent (warm terracotta for Classic, deep teal for Adventurous, muted gold for Culture) and a representative photograph or illustration.
- **Selected state:** The chosen card expands to fill the hero, the other two fade out. Below, the page transforms into a **personalized itinerary timeline** — not a list of links, but a visual timeline of "Your Trip Planning Journey" with the relevant sections pinned to specific phases.
- **Reset:** A subtle "Not you? Pick another" button in the corner lets users switch archetypes.
- **No archetype selection (SEO fallback):** On direct entry, the page shows all three archetypes as a carousel/grid, each with a mini-preview of their recommended path.

### Key Interactive / Visual Elements
1. **Archetype selection:** Large, tappable cards with parallax hover effects. Each card has a 2-second looping ambient video or cinemagraph (Great Wall for Classic, Zhangjiajie for Adventurous, tea ceremony for Culture).
2. **Dynamic timeline:** Once an archetype is chosen, a vertical timeline appears with phases like "First: Lock in your dates" → "Next: Budget for YOUR style" → "Then: Pick YOUR route." Each phase reveals the relevant resource with a preview and a CTA.
3. **Progress indicator:** A subtle "Your planning progress" bar at the bottom that fills as you explore sections.
4. **Shareable result:** A "Share my plan" button generates a simple card image or URL with the archetype + chosen route, perfect for sending to a travel partner.
5. **Session persistence:** Selected archetype stored in `localStorage` so returning users see their personalized dashboard immediately.

### Why This Works Better
- **Decision fatigue killer:** First-time travelers are overwhelmed by options. By filtering the experience through an archetype, we reduce the cognitive load. A backpacker doesn't need luxury hotel tips. A luxury traveler doesn't need hostel hacks.
- **The "Buzzfeed Quiz" effect:** People love identifying with a type. "I'm an Adventurous Explorer" is a statement of identity. It creates engagement before the user even reads content.
- **Functional value:** It's not decoration — it actively helps users find the right resources faster.
- **Data opportunity:** Archetype choice is valuable analytics (even without a backend, we can track which archetype is most popular via GA4 events).
- **Brand fit:** Magazine-style personality quizzes are huge in travel media. Condé Nast, Travel + Leisure, and even Rick Steves use traveler-type framing. We're making it interactive.

### Emotional Experience
**Seen and guided.** The user feels the site *understands* them. Instead of a generic "here's everything," it's "here's what matters for YOU." This builds trust immediately. The emotional arc goes from curiosity ("Which one am I?") → identification ("That's me!") → confidence ("Okay, here's my plan.").

---

## Variant C: "The Route Atlas" (Scroll-Driven Narrative)

### Core Concept
The page is an **interactive illustrated map of China** that fills the viewport. As the user scrolls, the camera follows three preplanned routes (7-day, 10-day, 14-day) drawn across the map. Along each route, interactive pins appear at the right moments — each pin opens a planning resource relevant to that leg of the journey. The user doesn't read about planning; they **experience a trip** while learning what they need to know.

### Visual Layout Approach
- **Hero:** Full-screen illustrated map of China in the brand palette — warm terracotta land, cream paper background, dark teal for water and routes. Stylized, not photorealistic (think: vintage travel poster meets modern vector illustration).
- **Scroll experience:** The map is pinned to the viewport. As the user scrolls, an animated route line draws itself across the map like a train journey. The camera subtly pans and zooms to follow the route.
- **Pin popups:** At each city stop (Beijing → Xi'an → Shanghai → Guilin, etc.), a pin rises from the map. Clicking or hovering opens a small card with the relevant planning tip for that region (e.g., "Beijing: Budget ¥400/day, Best in October, Need VPN").
- **Route selector:** A small floating panel lets users switch between the 7, 10, and 14-day routes. Switching redraws the route and repositions the pins.
- **Below the fold:** Once all routes are explored, the map fades and transitions into a clean "Start Planning" CTA section with links to the full planning pages (Best Time, Budget, etc.).

### Key Interactive / Visual Elements
1. **SVG route animation:** The route lines draw themselves with `stroke-dashoffset` animation triggered by scroll position (or intersection observer).
2. **Interactive pins:** Each pin is a small, animated marker. On hover, it expands into a tooltip card with 3 quick facts (best month, daily budget, must-know tip) and a "Learn more" link.
3. **Region weather/season overlay:** A toggleable layer on the map shows climate patterns (color-coded by season), so users visually understand "when to go where."
4. **Mini budget heatmap:** Pins are subtly color-coded by cost level (green = cheap, gold = mid, red = expensive), giving an instant visual sense of where money goes.
5. **Mobile:** On small screens, the map becomes a vertical swipeable sequence of city cards with a mini-map thumbnail showing your position along the route.

### Why This Works Better
- **Geographic literacy:** Most Western first-timers have no sense of China's scale or where cities are relative to each other. This solves that visually. Understanding that Beijing and Shanghai are 1,200km apart is planning-critical information that no text list communicates.
- **Contextual learning:** A budget tip about Beijing is more useful when you're *looking at Beijing on a map* than when it's in a generic "Budget Guide." The map creates spatial context for every planning decision.
- **Narrative momentum:** The scroll experience creates a story. "First we go here, then here, then here." This is how people actually plan trips — they think in routes, not categories.
- **Competitive moat:** Nobody else does this. China Highlights has a map on some pages, but it's a static image. Rick Steves has route descriptions, but no visual journey. This would be unique.
- **Brand fit:** The illustrated map style can perfectly match the warm editorial palette. A ChineseWatermark stamp could be the "compass rose" or map legend mark.

### Emotional Experience
**Wonder and orientation.** The user goes from "China is this big mysterious place" to "Oh, I can SEE how the trip flows." The scroll experience feels like watching a travel documentary about YOUR trip. There's a moment of delight when the route first starts drawing itself — it's a promise of adventure. By the end, the user has a mental model of the country AND a practical plan. That's a powerful combination.

---

## Comparison & Recommendation

| Criterion | Variant A: Traveler's Desk | Variant B: Archetype Engine | Variant C: Route Atlas |
|-----------|---------------------------|----------------------------|------------------------|
| **Emotional Impact** | High (warm, tactile) | High (personal, identity) | Highest (wonder, adventure) |
| **Functional Value** | Medium (still links) | High (filters + guides) | Highest (geography + context) |
| **Shareability** | High (screenshot-worthy) | Very High (quiz result) | High (scroll experience) |
| **Implementation Complexity** | Medium (CSS art / images) | Medium (state + conditional UI) | High (SVG animation + scroll triggers) |
| **Mobile Experience** | Good (card stack fallback) | Excellent (native-feeling) | Good (swipeable sequence) |
| **SEO Impact** | Neutral | Positive (longer engagement) | Positive (longer engagement) |
| **Brand Fit** | Excellent | Excellent | Excellent |
| **Unique vs Competitors** | Very | Very | Extremely |

### Recommended Path
**Start with Variant B (Archetype Engine) as the MVP.** It delivers the highest functional value with manageable complexity. The archetype selection is a single React state change. The conditional dashboard is just rendering different subsets of the same content. It can be built incrementally:
1. Phase 1: Static archetype cards + conditional content display (1-2 days)
2. Phase 2: Add progress tracking + shareable result card (1 day)
3. Phase 3: Add session persistence + analytics events (half day)

**Then consider Variant C (Route Atlas) as the aspirational target.** It would be the most memorable experience and has the highest functional value, but requires significantly more illustration and animation work. The map illustration alone is a substantial design task.

**Variant A is a strong dark horse** if the founder wants something with immediate visual impact that doesn't require complex interaction logic. It's the safest "wow" factor with the lowest risk.

---

## Next Steps
1. Founder review and selection of preferred variant (or hybrid)
2. If Variant B: Define the three archetypes with specific content mappings
3. If Variant C: Commission or create the illustrated map illustration
4. Create wireframes for the selected variant
5. Scope implementation tasks for Codex delegation
