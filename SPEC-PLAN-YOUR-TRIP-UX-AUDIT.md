# Plan Your Trip UX/UI + Content Audit

## 1. Design Consistency Score (per page)

| Page | Score | What is working | Main consistency gaps |
| --- | --- | --- | --- |
| `/plan-your-trip` | 2/5 | Clean scan-friendly list layout, consistent terracotta accent `#af5d32` on labels and chips, uses `max-w-6xl` container (`app/plan-your-trip/page.tsx:55`) | Breaks the Bund-style shell with `bg-white` instead of the warm gradient (`app/plan-your-trip/page.tsx:54` vs `app/globals.css:6-14` and brief reference), no `Breadcrumb`, no serif heading on the H1 (`text-6xl font-bold` at `:58`), generic category labels repeated as `Trip Planning` in all four cards (`:15`, `:24`, `:33`, `:42`) |
| `/plan-your-trip/best-time-to-visit` | 3/5 | Strong Bund-style structure: breadcrumb (`app/plan-your-trip/best-time-to-visit/page.tsx:48`), watermark (`:58`), serif H1 (`:59`), summary strip (`:68`), blockquote tip styling (`:156`), bottom CTA (`:183`) | Background is much flatter than the stated design language: `rgba(245,241,234,0.02)` instead of `0.75` / `0.2` (`:42-44`), hero image is still `picsum.photos` (`:82`), no “key takeaway box” pattern beyond the slim summary row, article body feels text-only and under-designed for a long-form guide |
| `/plan-your-trip/budget` | 3/5 | Same good article scaffold as best-time page: breadcrumb (`app/plan-your-trip/budget/page.tsx:48`), serif hierarchy (`:59`, `:89`, `:111`), summary strip (`:68`), tips block (`:161`), CTA (`:194`) | Same diluted gradient issue (`:42-44`), placeholder `picsum.photos` image (`:82`), uses plain prose blocks where competitors usually add tables/cards for quick comparisons, and the H1 copy reads more utilitarian than editorial (`:60`) |
| `/plan-your-trip/preplanned-trips` | 3/5 | Good sectioning, good entry summary strip (`app/plan-your-trip/preplanned-trips/page.tsx:80`), clear breadcrumb and watermark (`:60`, `:70`), route list is easy to scan (`:121-129`) | Same weak article background (`:54-56`), placeholder image (`:94`), “Pages in This Section” block feels like an internal sitemap instead of a persuasive comparison module, route cards lack visual differentiation and at-a-glance facts beyond one sentence |
| `/plan-your-trip/preplanned-trips/7-day-route` | 3/5 | Most complete route page: breadcrumb (`app/plan-your-trip/preplanned-trips/7-day-route/page.tsx:46`), overview strip (`:67`), actual transport and cost sections (`:153`, `:170`), logical CTA to longer routes (`:218`) | Same weak gradient (`:40-42`), placeholder image (`:81`), the day-by-day section is still mostly one-line entries (`:104-149`) so the page looks complete structurally but light editorially |
| `/plan-your-trip/preplanned-trips/10-day-route` | 2/5 | Core shell is consistent: breadcrumb (`app/plan-your-trip/preplanned-trips/10-day-route/page.tsx:47`), watermark (`:58`), CTA (`:155`) | Feels like a stub inside a polished shell. Same weak gradient (`:41-43`) and placeholder image (`:82`), but more importantly it drops the richer modules the 7-day page has: no transport section, no cost breakdown, no practical booking guidance, and the itinerary is compressed into five one-line blocks (`:108-130`) |
| `/plan-your-trip/preplanned-trips/14-day-route` | 2/5 | Good high-level shell and pacing signal in the summary strip (`app/plan-your-trip/preplanned-trips/14-day-route/page.tsx:68`) | Same weak gradient (`:41-43`) and placeholder image (`:82`), same content-thinness as the 10-day page, and the “grand tour” promise is not matched by detail. No transport plan, no cost module, no explanation of why Hangzhou is a day trip on departure day (`:133-137`) |
| `/plan-your-trip/travel-planner` | 4/5 | Closest match to the intended Bund style: correct warm gradient using `rgba(245,241,234,0.75)` and `0.2` (`app/plan-your-trip/travel-planner/page.tsx:17-19`), breadcrumb (`:23`), watermark (`:33`), serif headings (`:34`, `:48`, `:65`), primary CTA (`:72`) | The page shell is strong, but the form itself is visually lighter than the rest of the site. The form uses `bg-white/60` (`app/plan-your-trip/travel-planner/TravelPlannerForm.tsx:28`) rather than the more intentional `var(--surface)` / `section-shell` patterns, and the page lacks trust/support copy around response time, privacy, or what the user will actually receive |

### Shared design observations

- The root design tokens are solid and coherent: `--background: #f5f1ea`, `--surface: rgba(255, 252, 247, 0.86)`, `--primary: #af5d32`, `--foreground: #1f2933`, `--muted: #5d6a73`, `--line: #1f29331a` (`app/globals.css:5-20`).
- The `ChineseWatermark` component is well judged visually: `text-[6rem] md:text-[8rem]`, `opacity-[0.04]`, terracotta `#af5d32` (`components/ChineseWatermark.tsx:3-5`).
- The `Breadcrumb` component gives a good responsive pattern, especially the mobile back link (`components/Breadcrumb.tsx:44-51`).
- The article pages are not actually using the same background treatment as the brief. Most use `linear-gradient(0deg, rgba(245,241,234,0.02)...` (`best-time-to-visit/page.tsx:42-44`, `budget/page.tsx:42-44`, `preplanned-trips/page.tsx:54-56`, route pages `:40-42` / `:41-43`). That is visually much closer to white than to the intended Bund warmth.

## 2. Content Quality Audit

### What is genuinely helpful

- The overall information architecture is sensible for first-time visitors: timing, budget, preplanned routes, then a custom-planning endpoint.
- The best-time page clearly flags the three holiday danger zones: Chinese New Year, May Day, and National Day (`app/plan-your-trip/best-time-to-visit/page.tsx:144-150`). That is useful and high-value for China specifically.
- The budget page includes mobile-payment setup advice (`app/plan-your-trip/budget/page.tsx:164-166`), which is more China-specific than many generic travel guides.
- The 7-day route is the strongest piece of content because it includes transport timing and a usable cost model (`app/plan-your-trip/preplanned-trips/7-day-route/page.tsx:153-192`), not just destination names.
- The travel-planner page explains the planning dimensions clearly: where, how long, interests, budget (`app/plan-your-trip/travel-planner/page.tsx:53-56`).

### What is missing

#### Hub page `/plan-your-trip`

- It does not explain how to choose between the four paths. The intro at `app/plan-your-trip/page.tsx:62-64` is generic and does not help a user decide whether they need “best time,” “budget,” “preplanned,” or “planner” first.
- All four cards use the same category label `Trip Planning` (`:15`, `:24`, `:33`, `:42`), so the metadata above the title adds no information.
- The “Travel Planner” card promises “we'll help you create the perfect China trip” (`:46`) but the actual form does not collect contact details or deliver a real itinerary workflow.

#### Best time page

- The page is useful but too compressed for a planning page. Each season gets one paragraph (`app/plan-your-trip/best-time-to-visit/page.tsx:109-150`), with no regional breakdown beyond a few cities.
- Temperatures are written as plain `10-25C`, `28-35C`, etc. (`:112`, `:120`, `:129`, `:138`) instead of using a clearer typographic treatment like `10-25°C` or quick city comparison cards.
- It does not answer several practical questions a traveler actually has:
  - North vs south seasonality
  - Rain/humidity by region
  - Best months for classic first-time routes vs Tibet/Yunnan/Guilin
  - Festival tradeoffs beyond “avoid holidays”
  - What to pack
- The metadata is dated to 2025 (`:8`, `:12`). For a durable planning article, that makes it look stale unnecessarily.

#### Budget page

- The content is helpful at a glance, but still shallow relative to a decision-making budget guide.
- Currency formatting is inconsistent and weak. The page uses `Y200-300/day`, `Y1500+`, etc. (`app/plan-your-trip/budget/page.tsx:69-73`, `:92-106`) instead of `¥`, which reads less polished.
- Missing practical cost categories:
  - SIM/eSIM versus roaming context beyond one line (`:106`)
  - Visa / transit / insurance costs
  - Cash versus card caveats
  - Seasonal price swings
  - Family/solo/couple budget examples
  - What actually drives cost up on this route set
- The CTA pushes to a Trip.com guide (`:194-200`), which is useful commercially, but the page does not first finish the user’s budgeting task with a calculator/table/example trip cost.

#### Preplanned trips hub

- It does not compare the routes in a decision-ready way. “7 Days: Fast,” “10 Days: Moderate,” “14 Days: Relaxed” (`app/plan-your-trip/preplanned-trips/page.tsx:108-115`) is directionally good, but still too thin.
- Missing comparison dimensions:
  - Who each route is for
  - Best season for each route
  - Typical cost range
  - Number of transfers
  - Whether it suits families / first-timers / photographers / slow travelers
- The page is positioned as a route-selection hub, but the route cards only provide one sentence each (`:123-129`).

#### 7-day route

- Better than the others, but still missing operational detail:
  - Which train departure windows make the pacing work
  - Whether overnight train is actually intended or not; the copy says “Overnight Train Prep” on Day 3 (`app/plan-your-trip/preplanned-trips/7-day-route/page.tsx:117`) but Day 4 says “Morning high-speed train arrival” (`:127`), which suggests a mismatch in transport logic
  - Recommended neighborhoods beyond the first Beijing mention (`:106`)
  - Ticket/booking dependencies for major attractions
- The cost section is useful, but only for mid-range hotels (`:176`). That leaves budget and luxury travelers unsupported, despite the site having a budget guide.

#### 10-day route

- This page is materially underdeveloped relative to its promise.
- The overview names the route and budget (`app/plan-your-trip/preplanned-trips/10-day-route/page.tsx:92-101`), but there is no transport explanation for a five-stop route.
- The day-by-day content is just attraction nouns in sentence fragments (`:108-130`). It does not tell the user how the route works, what travel days are heavy, or why this is the right 10-day version.
- The pro tips are too few and partly confusing. “Chengdu-Xi'an flight: 1.5 hours vs 13 hours by train” (`:139`) points to a leg that is in the opposite direction from the itinerary order shown at `:96`.

#### 14-day route

- Same issue as the 10-day page, but more serious because the promise is “grand” and “ultimate” (`app/plan-your-trip/preplanned-trips/14-day-route/page.tsx:8-10`, `:60`).
- The route jumps to “Hangzhou Day Trip + Departure” on Day 14 (`:133-137`), which is risky and weak planning advice for international departure-day behavior.
- There is no cost section at all beyond one top-line estimate (`:73`, `:101`), no transfer detail, and no explanation of buffer/rest-day logic despite the page selling “Relaxed pace” and “Extra buffer time” (`:69-72`).

#### Travel planner form

- The page says “Share your preferences below and we will turn them into a tailored route” (`app/plan-your-trip/travel-planner/page.tsx:53-56`), but the form never collects name, email, travel month, party size, children, arrival city, mobility needs, or special constraints.
- On submit, the form only flips local state with `setSubmitted(true)` (`app/plan-your-trip/travel-planner/TravelPlannerForm.tsx:21-24`). There is no actual data capture, so the success message creates a trust gap.
- The success message promises “We will send your custom itinerary within 48 hours” (`:114-116`), but the form has no input that would make that possible.
- There is no validation, no required fields, and no progress framing, so the form feels more like a demo than a real lead form.
- The interests chips hide the checkbox input with `sr-only` (`:82`) but do not add any visible selected state class, so users have weak feedback after choosing options.

### Weak or placeholder content

- All article/route hero images that use `https://picsum.photos/...` are placeholders:
  - `best-time-to-visit/page.tsx:82`
  - `budget/page.tsx:82`
  - `preplanned-trips/page.tsx:94`
  - `7-day-route/page.tsx:81`
  - `10-day-route/page.tsx:82`
  - `14-day-route/page.tsx:82`
- The 10-day and 14-day itineraries read closer to outline notes than publish-ready travel pages.
- The 2025 date in best-time and budget metadata (`best-time-to-visit/page.tsx:8`, `budget/page.tsx:8`) makes evergreen content feel older than it is.

### Competitor comparison

Compared with current planning content on Lonely Planet, TravelChinaGuide, China Highlights, and China Discovery, these pages are structurally clean but comparatively thin.

- Lonely Planet’s seasonal content emphasizes readable narrative plus specific use cases by month/region. This site’s best-time page has the right seasonal thesis, but less depth and less destination-level nuance.
- TravelChinaGuide tends to answer practical planning questions directly: best months, temperatures, region differences, and specific caution periods. This site flags holiday risk well, but does not go as far on regional applicability or decision support.
- China Highlights and China Discovery present itineraries with stronger decision scaffolding: day-by-day structure, route maps, transfer logic, audience fit, and clear customization hooks. By comparison, the 10-day and 14-day pages here look too abbreviated for a user about to commit money.
- Competitors also tend to clarify deliverables in inquiry forms. The current travel-planner form looks polished enough to imply a real service, but the interaction model is not yet credible because it lacks contact capture and planning constraints.

## 3. User Flow Analysis

### Does the page hierarchy make sense?

Yes, at a macro level.

`Hub -> informational article / route hub -> route detail or form -> CTA to next step` is a logical structure for trip planning.

The problem is not the hierarchy. The problem is conversion clarity inside the hierarchy.

### Where the flow works

- The category set itself is good. Timing, budget, route selection, and custom help are the right four pillars.
- Breadcrumbs on the article and route pages are well implemented and reduce dead-end feeling (`best-time-to-visit/page.tsx:48-54`, route pages `:46-53` / `:47-54` / `:47-54`, `travel-planner/page.tsx:23-29`).
- Bottom CTAs usually point to a sensible next step:
  - best time -> itineraries (`best-time-to-visit/page.tsx:183-190`)
  - budget -> Trip.com guide (`budget/page.tsx:194-200`)
  - preplanned trips -> budget (`preplanned-trips/page.tsx:157-164`)
  - 14-day route -> budget (`14-day-route/page.tsx:162-168`)

### Where the flow breaks down

#### 1. The hub does not orient the user well enough

- `/plan-your-trip` is visually simple but strategically underpowered. It lacks a breadcrumb, a decision intro, and route logic.
- There is no “Start here if...” framing. A first-time traveler should quickly understand:
  - Read `Best Time` if dates are flexible
  - Read `Budget` if costs determine trip length
  - Read `Preplanned Trips` if you want a proven route
  - Use `Travel Planner` if you already know your constraints

#### 2. Article pages do not progressively intensify commitment

- The best-time and budget pages have CTAs, but the articles themselves do not transition from information to action strongly enough.
- There is no mid-page CTA, no sticky compare module, no in-content prompts like “If you have 10 days in October, read this route next.”

#### 3. Route hub to route detail is weakly differentiated

- The route hub gives too little comparison information to help someone choose between 7, 10, and 14 days.
- A user has to click into each route to understand cost, pace, and transfer complexity. That increases friction.

#### 4. Route detail pages do not create a strong “next” action

- The 7-day page does this best by offering budget context and “See Longer Routes” (`app/plan-your-trip/preplanned-trips/7-day-route/page.tsx:218-224`).
- The 10-day page ends with “Browse All Routes” (`10-day-route/page.tsx:155-160`), which is backward navigation rather than forward momentum.
- None of the route pages culminate in the strongest likely action: “Get this route customized” or “Use the planner for this exact route style.”

#### 5. Travel planner is currently a dead-end trust risk

- The page looks like a service lead form.
- The form behavior is only local UI state (`TravelPlannerForm.tsx:19-24`).
- Because the CTA promise is high and the data capture is low, this is the biggest user-flow credibility break in the entire section.

### CTA assessment

#### Strong CTA choices

- `Best Time -> Browse Itineraries` is logical for users who have settled on dates.
- `Travel Planner -> Browse Preplanned Trips` is a reasonable escape hatch for unsure users (`travel-planner/page.tsx:72-79`).

#### Weak CTA choices

- `Budget -> Book on Trip.com` is monetizable, but premature for many readers. It jumps from information to booking partner without enough budgeting tools in between.
- `10-Day -> Browse All Routes` is weaker than a CTA to customize the 10-day trip or compare budget/season for that route.

## 4. Top 10 Improvements (Prioritized)

1. Make the travel planner credible or stop promising manual itinerary delivery.
   Files: `app/plan-your-trip/travel-planner/page.tsx:53-56`, `app/plan-your-trip/travel-planner/TravelPlannerForm.tsx:21-24`, `:114-116`.
   Why: This is the highest trust risk. The UI promises an outcome the current interaction cannot produce.

2. Replace all `picsum.photos` hero images with real, page-specific imagery.
   Files: `best-time-to-visit/page.tsx:82`, `budget/page.tsx:82`, `preplanned-trips/page.tsx:94`, `7-day-route/page.tsx:81`, `10-day-route/page.tsx:82`, `14-day-route/page.tsx:82`.
   Why: Placeholder images immediately lower perceived legitimacy, especially on travel pages where visual proof matters.

3. Align every page with the actual Bund-style background treatment.
   Files: article and route pages using `rgba(...0.02)` at `best-time-to-visit/page.tsx:42-44`, `budget/page.tsx:42-44`, `preplanned-trips/page.tsx:54-56`, `7-day-route/page.tsx:40-42`, `10-day-route/page.tsx:41-43`, `14-day-route/page.tsx:41-43`; hub uses `bg-white` at `app/plan-your-trip/page.tsx:54`.
   Why: The section currently feels visually fragmented despite shared components.

4. Rebuild the `/plan-your-trip` hub as a real decision page, not just a link list.
   Files: `app/plan-your-trip/page.tsx:54-96`.
   Why: This is the top-of-funnel page. It should diagnose intent and route users faster.

5. Deepen the 10-day and 14-day route pages to the level of the 7-day page or better.
   Files: `app/plan-your-trip/preplanned-trips/10-day-route/page.tsx:88-140`, `app/plan-your-trip/preplanned-trips/14-day-route/page.tsx:88-147`.
   Why: These are the weakest content pages in the set and currently under-serve users most likely to spend more.

6. Add route comparison data to the preplanned trips hub.
   Files: `app/plan-your-trip/preplanned-trips/page.tsx:100-133`.
   Why: Users should be able to choose a route without opening all three detail pages.

7. Add richer, more decision-ready budgeting tools.
   Files: `app/plan-your-trip/budget/page.tsx:88-157`, `:194-200`.
   Why: The content is useful but not yet strong enough to answer “what will my actual trip cost?”

8. Expand the best-time page from seasonal overview into route planning advice by region and trip type.
   Files: `app/plan-your-trip/best-time-to-visit/page.tsx:88-168`.
   Why: Timing is one of the most important planning variables in China; the current article is too concise.

9. Remove stale year markers from evergreen metadata or update them systematically.
   Files: `app/plan-your-trip/best-time-to-visit/page.tsx:8`, `:12`; `app/plan-your-trip/budget/page.tsx:8`.
   Why: Stale years reduce trust even when the content is still broadly accurate.

10. Improve form interaction feedback and state clarity.
    Files: `app/plan-your-trip/travel-planner/TravelPlannerForm.tsx:76-85`, `:106-127`.
    Why: Even before backend work, the form needs visible selected states, clearer required fields, and more confidence-building microcopy.

## 5. Quick Wins vs Big Efforts

### Quick wins (<1 hour Codex)

- Fix the hub page shell to match Bund style: warm gradient background, breadcrumb, serif H1, and more informative category labels.
  Files: `app/plan-your-trip/page.tsx:54-96`.

- Remove or update the 2025 metadata on evergreen pages.
  Files: `app/plan-your-trip/best-time-to-visit/page.tsx:8`, `:12`; `app/plan-your-trip/budget/page.tsx:8`.

- Replace weak currency formatting `Y...` with `¥...` across budget and route pages.
  Files: `app/plan-your-trip/budget/page.tsx:69-73`, `:92-106`; `7-day-route/page.tsx:72`, `:156-191`.

- Change the weakest CTA pairings, especially `10-Day -> Browse All Routes`, toward more forward-moving actions.
  Files: `app/plan-your-trip/preplanned-trips/10-day-route/page.tsx:155-160`.

- Add simple “who this is for” labels to route cards on the preplanned hub.
  Files: `app/plan-your-trip/preplanned-trips/page.tsx:123-129`.

- Tighten misleading travel-planner promise copy if backend capture is not yet live.
  Files: `app/plan-your-trip/travel-planner/page.tsx:53-56`; `TravelPlannerForm.tsx:114-116`.

### Bigger efforts

- Replace placeholder imagery with real, curated visuals across all six affected pages.
  Why bigger: requires asset sourcing, art direction, and likely image optimization decisions.

- Turn the preplanned trips hub into a comparison experience with route facts, pacing, cost, and seasonality.
  Why bigger: needs content strategy plus component design.

- Rewrite the 10-day and 14-day route pages into fully operational itineraries with transfer logic, budget breakdowns, and booking advice.
  Why bigger: this is a substantive content expansion, not a cosmetic pass.

- Expand best-time and budget pages into stronger planning references with tables, scenario examples, and route-aware recommendations.
  Why bigger: requires new content structure, not just copy edits.

- Make the travel planner a real lead form or a true itinerary builder.
  Why bigger: requires backend/data handling, form architecture, trust copy, and potentially service operations.

## Bottom line

This section has a solid foundation. The design system itself is good, the article scaffolding is mostly consistent, and the topic architecture is right. The main gap is that the experience looks more complete than the content and workflow actually are.

The biggest issues are credibility and depth:

- credibility, because placeholder imagery and the non-functional lead form make polished pages feel unfinished
- depth, because the 10-day and 14-day route pages in particular are not yet competitive with strong travel-planning content

If this section is meant to convert serious trip planners, the highest-return path is:

1. fix trust gaps
2. strengthen route comparison
3. deepen route detail
4. then refine visual consistency everywhere
