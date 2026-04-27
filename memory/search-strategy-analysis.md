# Global Search Strategy Analysis
## How Major Sites Handle Multiple Search Bars & Recommendations for Trail of China

**Date:** 2026-04-27  
**Author:** Research Subagent (Kimi K2.6)  
**Scope:** Pure research & strategy — no code

---

## 1. Executive Summary

Major high-traffic sites universally adopt a **hybrid search architecture (Pattern C)**: a keyboard-accessible global search (CMD+K) for power users and navigation, paired with **contextual search bars on hub/destination pages** scoped to that section's content. No major site relies on a single global search bar for everything — Airbnb, Booking.com, TripAdvisor, and Amazon all show contextual search on listing/hub pages while keeping a global option accessible. For Trail of China (~60 pages, 5 sections, mobile-first), the recommendation is **Pattern C (Hybrid)** with a CMD+K global search modal for "find anything anywhere" and contextual search bars on hub pages (China Basics, Shanghai Hub, Destinations, Plan Your Trip) scoped to their respective content. Homepage gets a prominent global search as the primary CTA. Existing China Basics and Shanghai Hub searches should stay contextual but be visually unified under one design language.

---

## 2. Research: How Big Sites Handle It

### Airbnb
- **Multiple search bars:** Yes — homepage has a large destination+dates+guests search bar; listing pages have NO search bar (you're already on a listing); search results pages have a filter/search bar at top; map view has map-integrated search.
- **Avoiding confusion:** Homepage search is a **hero element** (massive, centered). Once you search, you're on a results page with a compact search bar at top. The map has its own search input but it's visually subordinate (small, in map corner). Clear context: hero = start journey, top bar = refine, map = location-specific.
- **"Search within" pattern:** Yes — on results pages, the top bar shows your current search location. Map search shows "Search this area" button.
- **Keyboard shortcut:** No CMD+K. Airbnb is consumer-focused; keyboard shortcuts are rare in travel booking.
- **Results display:** Homepage search → navigates to results page. Map search → updates results inline. No modal overlays for search.
- **Key insight:** Airbnb uses **progressive disclosure** — the search bar shrinks and moves from hero to top-nav after the first search. The search scope is always visually obvious (shows location + dates).

### Booking.com
- **Multiple search bars:** Yes — homepage has giant destination+dates search; hotel pages have "Search nearby" or "Change dates"; city/destination pages have their own search scoped to that city.
- **Avoiding confusion:** Homepage search is unmissable (full-width, high contrast). On city pages, the search bar is pre-filled with the city name and says "Search in [City]". The scope is explicit in the placeholder/pre-filled text.
- **"Search within" pattern:** Yes — heavily. City pages say "Search hotels in Shanghai" and default the destination field to Shanghai.
- **Keyboard shortcut:** No CMD+K.
- **Results display:** Always navigates to a results page. Never modal.
- **Key insight:** Booking.com is the **master of contextual pre-fill**. Every search bar tells you EXACTLY what you're searching before you type. They also show "Recently viewed" and "Popular destinations" as suggestions.

### TripAdvisor
- **Multiple search bars:** Yes — homepage has destination search; attraction pages have "Find [category] in [city]" search; restaurant pages have cuisine/location search.
- **Avoiding confusion:** The homepage search is a single input with tabs below: Hotels | Things to Do | Restaurants | Flights. This tab pattern defines scope BEFORE you search. On sub-pages, the search bar is category-specific (e.g., "Search restaurants").
- **"Search within" pattern:** Yes — sub-pages default to the current city. "Find restaurants in Shanghai".
- **Keyboard shortcut:** No CMD+K.
- **Results display:** Navigates to results page. No modal.
- **Key insight:** TripAdvisor's **tab-based scope selector** on the homepage is brilliant for mobile — one search bar, multiple scopes, visually clear. This is worth considering for Trail of China's homepage.

### Google
- **Multiple search bars:** Yes — google.com has the main search; Images, Maps, News each have their own search bar that inherits your query but shows results in a different format.
- **Avoiding confusion:** The main search bar stays at the top on ALL Google pages. Below it are tabs: All | Images | Maps | News | Videos. The search bar is ONE global bar, but the tabs switch the result type. Search scope is determined by which tab is active.
- **"Search within" pattern:** Partial — Maps shows "Search in this area". Images shows filters (size, color, type). The global bar persists but the context changes via tabs.
- **Keyboard shortcut:** Yes — `/` focuses the search bar (not CMD+K, but similar). Google also has universal search in Chrome's address bar.
- **Results display:** Navigates to results page. No modal for web search.
- **Key insight:** Google's **persistent global bar + tab scoping** is the gold standard for "one search, multiple contexts". The search bar never moves, but the tabs tell you what kind of results you'll get.

### Amazon
- **Multiple search bars:** Technically one global bar, BUT it has a **category dropdown** next to it that scopes the search ("All" | "Books" | "Electronics" | etc.). On store pages (e.g., Amazon Basics), the search bar scopes to that store by default.
- **Avoiding confusion:** The category dropdown is the key — it shows "All" by default, but if you're on a store page it auto-changes to that store's category. The search bar itself is always in the same place (top-nav).
- **"Search within" pattern:** Yes — via the category dropdown. "Search in Electronics".
- **Keyboard shortcut:** `/` focuses search. No CMD+K.
- **Results display:** Navigates to results page. No modal.
- **Key insight:** Amazon's **category-scoped dropdown** is a compact way to handle multiple search scopes without multiple search bars. This pattern works well for Trail of China's hub pages.

### Reddit
- **Multiple search bars:** Yes — homepage/top-nav has a global search; each subreddit has its own search bar scoped to that subreddit.
- **Avoiding confusion:** The global search is in the top navigation bar (small, compact). When you enter a subreddit, a second search bar appears in the subreddit header with placeholder "Search r/[subreddit]". The visual hierarchy makes it clear: top bar = all of Reddit, subreddit bar = this community.
- **"Search within" pattern:** Yes — subreddit search defaults to that subreddit with an option to "search all of Reddit".
- **Keyboard shortcut:** `/` focuses search. No CMD+K.
- **Results display:** Global search → results page. Subreddit search → results page with subreddit filter applied.
- **Key insight:** Reddit's **two-level search** (global top-nav + contextual subreddit) is a clean mobile-friendly pattern. The global search is always accessible, but the local search is prominent when you're in a community.

### Notion
- **Multiple search bars:** Yes — CMD+K opens global search (everything); Ctrl+F is in-page search (current page only).
- **Avoiding confusion:** These are completely different interactions. CMD+K is a modal overlay (command palette style). Ctrl+F is a browser-native find bar at the bottom. They serve different mental models: CMD+K = "find a page or action", Ctrl+F = "find text on this page".
- **"Search within" pattern:** Not applicable — Notion's global search has filters (Pages, Databases, etc.) but no "search within page" in the global modal.
- **Keyboard shortcut:** Yes — **CMD+K is the primary search interface**. This is Notion's signature pattern.
- **Results display:** Global search → modal overlay with results. In-page → browser find.
- **Key insight:** Notion proves that **CMD+K as the PRIMARY search interface** works beautifully for content-heavy apps. The modal design with fuzzy search, recent items, and keyboard navigation is ideal for Trail of China's global search.

### Figma
- **Multiple search bars:** Yes — CMD+/ (command palette) for global actions/files; Ctrl+F for in-canvas element search.
- **Avoiding confusion:** Similar to Notion — CMD+/ is a modal command palette ("find anything"), Ctrl+F is a bottom bar for finding layers/objects on the current canvas.
- **"Search within" pattern:** No — the command palette searches globally (files, actions, plugins). Canvas search only searches layer names on the current page.
- **Keyboard shortcut:** Yes — CMD+/ for global, Ctrl+F for local.
- **Results display:** Global → modal overlay. Local → bottom bar with results list.
- **Key insight:** Figma's separation of **"find anything" (command palette) vs. "find on canvas" (local search)** is a good mental model for Trail of China: CMD+K = find any page/destination/guide, local search = filter content on current hub page.

---

## 3. Search Architecture Patterns

| Pattern | Description | Best For | Examples | When to Use |
|---------|-------------|----------|----------|-------------|
| **A: One Global Search** | Single CMD+K modal searches everything. No contextual search bars. | Small sites (<20 pages), docs, admin dashboards | Algolia docsearch, small SaaS apps | Only if site is small and users always know what they're looking for |
| **B: Contextual Search** | Each page/section has its own search bar, no global search. | E-commerce category pages, large directories | Old-school category pages | When sections are truly siloed and users rarely cross sections |
| **C: Hybrid** ⭐ | Global CMD+K everywhere + contextual search bars on hub/section pages. | Content sites, travel guides, marketplaces with categories | Notion, Reddit, TripAdvisor, Airbnb | **Best for Trail of China** — users need both "find anything" and "filter this section" |
| **D: Progressive Disclosure** | Homepage has broad search → results page has filters → detail pages have related search. | Discovery-heavy experiences, Pinterest, streaming | Pinterest, Netflix homepage | When the primary user journey is discovery/browsing, not direct search |

### Pattern Analysis for Trail of China

**Pattern A (One Global Search)** ❌ Not enough — users browsing "China Basics" want to filter basics topics without leaving the page. A global search would disrupt the reading flow.

**Pattern B (Contextual Only)** ❌ Too limiting — if a user is on the Shanghai Hub and wants to quickly jump to Beijing info, they'd have to navigate away first. No "find anywhere" capability.

**Pattern C (Hybrid)** ✅ **WINNER** — Gives users both capabilities: CMD+K for "I know what I want, find it fast" and contextual search for "I'm browsing this section, filter it". Matches how every major travel site works.

**Pattern D (Progressive Disclosure)** ⚠️ Partial fit — Trail of China DOES have a discovery journey (homepage → destinations → details), but users also need task-mode search ("I need VPN info NOW"). Pattern D alone would frustrate task-oriented users.

---

## 4. UX Anti-Patterns to Avoid

### 4.1 Multiple Search Bars Visible at the Same Time
**Problem:** Having two search inputs visible simultaneously creates decision paralysis. "Which one do I use?"
**Example of bad:** A page with both a top-nav global search AND a hero section search visible at the same time.
**Fix:** Use ONE visible search bar per viewport. Global search should be CMD+K (hidden until invoked) or in the navigation (compact). Contextual search is the hero element on hub pages.

### 4.2 Search Results Page Feels Disconnected
**Problem:** User searches on the Shanghai Hub, gets taken to a generic "/search?q=..." page that looks nothing like the Shanghai Hub.
**Fix:** Search results should maintain the surrounding context. If searching from Shanghai Hub, results should be in a modal/overlay ON the Shanghai Hub, or the results page should visually indicate "Results in Shanghai" with the Shanghai Hub header/footer.

### 4.3 No Visual Indication of Search Scope
**Problem:** A search bar with just a magnifying glass icon and placeholder "Search...". User doesn't know if they're searching all of China, just Shanghai, or just restaurants.
**Fix:** Always show scope context:
- Placeholder text: "Search attractions in Shanghai..."
- Pre-fill: Input shows "Shanghai ▾" as a scope selector
- Label: Small text above search: "Search Shanghai Hub"
- Breadcrumb: "Shanghai > Search results for 'temple'"

### 4.4 Search That Searches the Wrong Scope Unexpectedly
**Problem:** User is on the "China Basics" page, types "VPN" in a search bar, and gets results for VPN from all over the site including destination pages.
**Fix:** Default to scoped search. Show a clear toggle: "Search China Basics | Search all of Trail of China". Default should be the current section.

### 4.5 Search with No Results State
**Problem:** Typing yields "No results" with no guidance. Dead end.
**Fix:** No-results state should suggest:
- Popular searches
- "Did you mean...?"
- "Try searching all of Trail of China instead"
- Links to relevant hub pages

### 4.6 Keyboard Trap on Mobile
**Problem:** Search modal opens, user can't easily close it (no visible X, back button doesn't work).
**Fix:** Mobile search must have a clear close action (X button, swipe down, back button closes).

### 4.7 Search Not Available on Every Page
**Problem:** Some pages have search, some don't. User expects it, it's not there.
**Fix:** Global CMD+K should work on EVERY page. Contextual search should be on all hub/listing pages.

---

## 5. Recommendation for Trail of China

### Recommended Pattern: **C (Hybrid)**

Trail of China needs BOTH:
1. **Global search** for users who know what they want ("VPN", "Great Wall", "eSIM")
2. **Contextual search** for users who are browsing a section and want to filter it

### Where Each Search Bar Lives

| Page/Route | Search Type | Location | Scope | Placeholder Example |
|------------|-------------|----------|-------|---------------------|
| **Homepage `/`** | Hero Global Search | Center of hero section, large input | ALL content (destinations, guides, tips) | "Where do you want to go?" |
| **Homepage `/`** | CMD+K Global | Keyboard shortcut (anywhere on page) | ALL content | Modal: "Search Trail of China" |
| **China Basics `/china-basics/`** | Contextual | Top of page, below hero | China Basics topics ONLY | "Search basics (apps, VPN, transport...)" |
| **Shanghai Hub `/destinations/shanghai`** | Contextual | Top of page, below hero | Shanghai content ONLY | "Search Shanghai (attractions, food, stays...)" |
| **Destinations `/destinations/`** | Contextual | Top of map/list view | Destinations (cities) ONLY | "Find a city..." |
| **Plan Your Trip `/plan-your-trip/`** | Contextual | Top of page | Trip planning content ONLY | "Search trip ideas and guides..." |
| **ALL pages** | CMD+K Global | Keyboard shortcut | ALL content | Modal overlay |

### Visual Differentiation of Search Scopes

**Global Search (CMD+K Modal):**
- Trigger: `CMD+K` (desktop), tap search icon in nav (mobile)
- Visual: Dark overlay modal, centered search input, large
- Placeholder: "Search Trail of China..."
- Results grouped by category: Destinations | Guides | Tips | Basics
- Shows recent searches + popular searches
- Keyboard navigable (arrow keys, Enter, Escape to close)

**Contextual Search (Hub Pages):**
- Visual: Light background, embedded in page (NOT modal)
- Styled to match the hub's theme color (subtle)
- Has a clear label: "🔍 Search Shanghai Hub" or small text above input
- Scope indicator: If scope is limited, show "Searching Shanghai only · [Search all instead]"
- Results: Inline filtering (no page navigation) OR overlay panel on same page

**Homepage Hero Search:**
- Visual: Large, centered, high-contrast
- Can have category tabs below: Destinations | Tips | Guides (like TripAdvisor)
- Default scope: All
- On mobile: Full-width, prominent

### CMD+K Global Search: YES, Implement

**Why:**
- Notion, Linear, Vercel, and modern web apps have trained users to expect CMD+K
- Power users (trip planners, researchers) will love it
- Works on EVERY page without taking up visual space
- Mobile equivalent: tap search icon in header

**Implementation notes:**
- Use a lightweight library like `cmdk` (React command palette)
- Search index: pre-built JSON with all pages, titles, descriptions, tags
- Group results: Destinations first, then Guides, then Tips
- Show keyboard hint: "CMD+K" in footer or near search icon

### Homepage Search Experience (Mockup Description)

```
┌─────────────────────────────────────────────┐
│  [Logo]  China Basics  Destinations  Plan...  │  ← Nav bar
├─────────────────────────────────────────────┤
│                                             │
│     DISCOVER CHINA'S BEST-KEPT SECRETS      │  ← Hero headline
│                                             │
│   ┌─────────────────────────────────────┐    │
│   │  🔍  Where do you want to go?     │    │  ← Hero search
│   └─────────────────────────────────────┘    │
│                                             │
│   [Destinations] [Tips] [Guides] [All]       │  ← Scope tabs
│                                             │
│   ─ or try ─                                │
│                                             │
│   [🏔️ Great Wall] [🍜 Best Food]            │  ← Quick chips
│   [🚇 Getting Around] [📱 Apps]             │
│                                             │
└─────────────────────────────────────────────┘
```

**Behavior:**
- User types in hero search → shows inline suggestions (destinations, guides)
- User selects scope tab BEFORE typing → search is pre-scoped
- Press Enter or select suggestion → navigates to result
- CMD+K at any time → opens global search modal over everything

### What to Do with Existing Searches

| Current Search | Recommendation |
|----------------|----------------|
| **China Basics hub search** | KEEP as contextual search. Add clear label "Search China Basics". Ensure it only searches basics content. |
| **Shanghai Hub search** | KEEP as contextual search. Add clear label "Search Shanghai". Scope to Shanghai content only. |
| **Destinations page search** | KEEP but refine — it's currently city search. Make it clear it's searching cities/destinations. |

**No merging needed** — the existing searches are already contextual. They just need:
1. Visual unification (same component, same styling)
2. Clear scope labels
3. Consistent placeholder text that indicates scope
4. Consider adding a "Search all of Trail of China" escape hatch on each

---

## 6. Implementation Priority

### Phase 1: Foundation (Week 1)
1. **Build the global search index** — JSON file with all pages, titles, descriptions, tags, categories
2. **Implement CMD+K modal** — use `cmdk` library, basic search against index
3. **Add CMD+K hint** — small "CMD+K" text in nav bar or footer
4. **Unify existing search bars** — make China Basics, Shanghai Hub, and Destinations searches use the same component with clear scope labels

### Phase 2: Homepage Hero Search (Week 2)
1. **Add hero search to homepage** — large centered input with category tabs
2. **Connect to global index** — searches all content by default
3. **Add quick answer chips** — "Great Wall", "Best Food", "Getting Around", "Apps" as shortcuts
4. **Mobile optimization** — full-width, tap-friendly, clear close action

### Phase 3: Polish & Advanced Features (Week 3-4)
1. **Search suggestions dropdown** — autocomplete with recent + popular searches
2. **Scoped contextual search enhancement** — ensure each hub search actually filters correctly (not just visual)
3. **No-results state** — helpful suggestions, links to relevant hubs
4. **Analytics** — track what users search for, no-results queries
5. **Search results page** — if needed, a dedicated `/search?q=` page for SEO and sharing

---

## 7. Key Takeaways

| Decision | Rationale |
|----------|-----------|
| **Hybrid pattern (C)** | Every major travel/content site uses this. One global + contextual per section. |
| **CMD+K global search** | Modern UX standard. Works everywhere, no visual clutter. |
| **Contextual search stays** | Existing China Basics and Shanghai searches are correct — just need unification and clear labels. |
| **Homepage hero search** | Primary CTA. Should be the most prominent element after the headline. |
| **Mobile-first** | On mobile, hide CMD+K hint (no keyboard), show search icon in nav. Contextual searches should be full-width. |
| **No dedicated search results page initially** | Use modal/overlay for global search, inline filtering for contextual. A results page can be added later if needed for SEO. |

---

## 8. Reference: What We Learned from Big Sites

1. **Airbnb** — Search shrinks from hero to top-bar after first use. Progressive disclosure works.
2. **Booking.com** — Pre-fill destination in contextual search. Always show scope explicitly.
3. **TripAdvisor** — Tab-based scope selection (Hotels | Things to Do | Restaurants) is mobile-friendly.
4. **Google** — Persistent search bar + tab scoping = powerful and clear.
5. **Amazon** — Category dropdown next to search bar is compact scope selection.
6. **Reddit** — Two-level search (global top-nav + local subreddit) is clean and intuitive.
7. **Notion** — CMD+K modal as primary search is the gold standard for content sites.
8. **Figma** — Separate "find anything" from "find on canvas" — different mental models, different UIs.
