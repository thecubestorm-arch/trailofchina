# Homepage V2 Strategic Analysis — Trail of China

**Date:** 2026-04-28  
**Scope:** Homepage unique value problem — why the homepage is "just a directory" and what it should become  
**Author:** GLM 5.1 (strategic analysis, no code)

---

## 1. Problem Diagnosis

### What's Missing from the Homepage

The current V1 homepage (read from `app/v1/HomeV1Client.tsx`) has 8 sections:

1. Full-bleed hero with CTAs
2. Quick Answers chip bar (10 links to sub-pages)
3. Trust Bar (4 stats)
4. Destinations grid (5 cities)
5. China Essentials (5 icon cards → sub-pages)
6. "How It Works" — 3 steps
7. PDF Cheat Sheet download
8. FooterCTA

**Every single section except the hero and Trust Bar is a navigation link to somewhere else.** The homepage provides zero information that doesn't live on another page. It's a table of contents with nice styling.

Specific gaps:

| Gap | Evidence |
|-----|----------|
| **No timely content** | No mention of visa-free policy updates (China expanded visa-free to 30+ countries in 2024-2026). This is the #1 question Western travelers have right now. China Highlights puts this in their hero. We don't mention it at all. |
| **No decision tools** | A first-timer landing on the homepage doesn't know which city to visit, how long to stay, or what budget to expect. The homepage offers no help with these decisions — it just links to 5 city pages and hopes they figure it out. |
| **No curated recommendations** | "If you only have 7 days, do this" doesn't exist anywhere on the homepage. The itineraries are buried in `/plan-your-trip/`. The homepage doesn't surface them. |
| **No social proof** | The Trust Bar shows creator credentials (4 trips, fluent Mandarin), but there are zero traveler testimonials, reviews, or community signals. No "this guide helped me plan my trip" anywhere. |
| **No China-specific urgency** | China is uniquely time-sensitive: VPN apps must be installed *before* you land, Alipay needs foreigner verification that takes 24-48h, visa policies change quarterly. The homepage doesn't communicate any of this urgency. It feels like planning a trip to France. |
| **No comparison help** | Shanghai vs Beijing? eSIM vs roaming? High-speed train vs flight? First-timers face these decisions immediately. The homepage doesn't help. |
| **No seasonal or time-based content** | "Best time to visit China", "Cherry blossom season in Beijing", "What to know for Chinese New Year" — none of this exists on the homepage. |

### Why It Feels Like "Just a Directory"

The homepage is structurally a **categorized link list**:

- **Quick Answers** → 10 links to sub-pages
- **Destinations** → 5 links to city pages
- **China Essentials** → 5 links to basics pages
- **How It Works** → 3 links to basics/itineraries/culture pages

That's **23 outbound links** and **0 pieces of unique content**. A user who reads only the homepage learns nothing about China they couldn't learn from a Google search. The homepage doesn't *teach*, *decide*, or *inspire* — it only *navigates*.

The "How It Works" section is the closest thing to unique value, but even it just describes the site's structure ("Get Connected → Plan Route → Explore Like a Local") and links away. It doesn't *do* anything.

### What Value SHOULD the Homepage Provide?

The homepage should be the **first answer**, not the **first directory**. Specifically:

1. **Immediate reassurance** — "Yes, you can travel to China. Here's the latest on visa policy for your country."
2. **Decision acceleration** — "Based on 7 days, here's where you should go. Based on 14 days, here's a different plan."
3. **Urgency communication** — "Install these 3 apps before you fly. You can't get them once you're in China."
4. **Emotional pull** — "Here's what a day in Shanghai feels like. Here's what the high-speed train is like."
5. **Credibility** — "Read what other Western travelers experienced using this guide."

The homepage should make someone who's *considering* China feel like China is **doable**, and someone who's *planning* China feel like they're in the **right place**. Right now it only does the second one, weakly.

---

## 2. Competitor Patterns

### Rough Guides

| What They Do | Do We? | Transferable? |
|-------------|--------|---------------|
| Homepage = booking funnel ("Plan your trip with local experts") | ❌ We're an info site, not booking | Partially — we can have a "plan your trip" funnel without booking |
| 3-step process prominently displayed | ✅ We have this | Already done, but could be stronger |
| Traveler reviews/testimonials | ❌ | ✅ Yes — highly transferable, doesn't require booking |
| "Why travel this way?" value propositions | ❌ (we have "How It Works" but not "Why") | ✅ Very transferable — we could do "Why use a guide for China" |
| Featured destinations with photos | ✅ We have this | Already done |
| Newsletter signup | ❌ We have PDF download but no newsletter | ✅ Easy to add |

**Key transferable pattern:** Social proof (reviews/testimonials) and a "why this approach" section are pure information patterns, not booking patterns.

### China Highlights

| What They Do | Do We? | Transferable? |
|-------------|--------|---------------|
| **News/timely content** — visa-free policy updates in hero | ❌ | ✅ **Critical** — This is our biggest miss. China's visa policies are changing rapidly and every first-timer needs this. |
| Top Tours section (curated itineraries) | Partially — itineraries exist but aren't on homepage | ✅ We should surface curated itineraries on homepage |
| Traveler reviews with 98.8% 5-star rating | ❌ | ✅ Social proof is universal |
| "How to Plan a Trip to China" educational content | Partially — "How It Works" is similar but less detailed | ✅ Our version could be more practical (apps, VPN, payments) |
| Personal advisor CTA | ❌ | ❌ Not our model (we don't do 1:1 advising) |

**Key transferable pattern:** Timely content is the single biggest gap. China Highlights treats visa policy updates as hero-level content. We don't even mention visa status on the homepage.

### Airbnb (Map-Centric)

| What They Do | Do We? | Transferable? |
|-------------|--------|---------------|
| Location-centric map experience | ❌ | ✅ An interactive China map showing our 5+ destinations would be uniquely valuable |
| Card-map synchronization | ❌ | Partially — could work for destination exploration |
| Personalized recommendations | ❌ | ✅ "Tell us your travel style" → recommendations is transferable |

**Key transferable pattern:** Map-centric exploration. For a country as large as China, showing destinations on a map communicates scale and geography in a way that a grid of cards cannot. A first-timer may not realize Shanghai and Beijing are 4.5 hours apart by train, or that Chengdu is in a completely different region.

### Summary of Transferable Patterns

| Pattern | Priority | Rationale |
|---------|----------|-----------|
| **Timely/news content** (visa updates) | 🔴 Critical | #1 question for first-timers, changes frequently, nobody does this well for free |
| **Social proof** (traveler testimonials) | 🔴 Critical | Universal trust builder, we have none |
| **Curated itineraries on homepage** | 🟡 High | We have the content, just not surfaced |
| **Interactive map** | 🟡 High | China's geography is hard to grasp; a map uniquely helps |
| **Decision/personalization tools** | 🟡 High | Nobody does "which Chinese city is right for you" — huge gap |
| **Urgency section** ("Do these 3 things before you fly") | 🟡 High | China-specific, actionable, not generic travel advice |
| **"Why use a guide" value prop** | 🟢 Medium | Differentiation from just Googling |
| **Newsletter** | 🟢 Medium | Engagement, but lower priority than unique content |

---

## 3. Unique Homepage Value Propositions

### 3.1 Timely/News Content

**Concept:** A "China Travel Alert" or "What's New" strip that shows current visa policy, recent changes, and seasonal tips.

- **Visa-free policy tracker** — "🇪🇺 EU citizens: 15-day visa-free until Dec 2026", "🇨🇭 Swiss: 30-day visa-free", "🇺🇸 US citizens: 10-year visa required". This is genuinely useful, changes quarterly, and nobody provides it in a clear dashboard format for free.
- **Seasonal alerts** — "Golden Week (Oct 1-7): Avoid traveling, everything is packed", "Cherry blossoms in Beijing: Late March - early April"
- **Infrastructure news** — "New high-speed line: Chengdu → Chongqing now 1h15m", "Shanghai metro Line 14 opens"

**Why this makes the homepage essential:** Timely content gives people a reason to return. It also directly answers the most common first question ("Can I even go to China?").

### 3.2 Interactive Decision Tools

**Concept:** Lightweight tools that help first-timers make concrete decisions.

- **"Which City is Right for You?" quiz** — 5-7 questions (food vs history vs nature, budget, time, party vs quiet) → recommends 2-3 cities with reasoning. Nobody does this for China.
- **Trip length calculator** — "I have X days" → shows recommended itinerary with travel time between cities factored in. Most people don't realize Beijing→Xi'an→Shanghai can be done in 7 days by high-speed rail.
- **Budget estimator** — "Budget / Mid-range / Splurge" × city × days → daily cost range. China is cheaper than most Westerners expect.
- **Shanghai vs Beijing comparison** — Side-by-side: food, nightlife, history, modernity, train connections, weather, English-friendliness.

**Why this makes the homepage essential:** These tools produce unique outputs that don't exist on any sub-page. They turn the homepage from a directory into a decision engine.

### 3.3 Curated Content

**Concept:** Editor's picks surfaced on the homepage, not buried in navigation.

- **"The Golden Route"** — Beijing → Xi'an → Shanghai in 10 days. The most common first-timer itinerary. Make it the centerpiece.
- **"If You Only Have 7 Days"** — Shanghai + one day trip (Suzhou/Hangzhou). The minimum viable China trip.
- **"The Food Lover's Route"** — Chengdu + Chongqing + Xi'an. For people who come for the cuisine.
- **Seasonal picks** — "Best of Winter China" (Harbin Ice Festival, hotpot weather), "Spring in Shanghai"

**Why this makes the homepage essential:** Curated itineraries are the #1 thing first-timers search for. Having them on the homepage (not hidden in /plan-your-trip/) immediately answers "what should I do?"

### 3.4 Social Proof

**Concept:** Real traveler experiences that validate the guide.

- **Traveler stories** — Short quotes with name, country, and trip dates. "I used the eSIM guide and had internet from the moment I landed at Pudong." — Sarah, UK, March 2026
- **"What surprised me" quotes** — "I expected China to be difficult. The hardest part was installing Alipay before my flight." — Mark, Canada, Jan 2026
- **Community stats** — "X cheat sheets downloaded", "X travelers used our guides this month"

**Why this makes the homepage essential:** Trust is the #1 barrier for China travel. Westerners are nervous about China. Social proof from people like them is more powerful than any expert credential.

### 3.5 Quick-Start Workflows

**Concept:** An interactive "Pre-Flight Checklist" that's more than a PDF.

- **Interactive checklist** — "Before you fly, complete these 5 things" with checkable items: ① Install VPN, ② Set up Alipay, ③ Buy eSIM, ④ Download offline maps, ⑤ Check visa requirements. Progress bar shows completion.
- **"A Day Before Your Flight" timeline** — What to do 24h before departure. Pack adapter, screenshot important addresses in Chinese, charge power bank, etc.
- **Countdown widget** — "Your trip is in X days. Here's what to do this week."

**Why this makes the homepage essential:** China requires more pre-departure prep than almost any other destination. A tool that guides you through it is genuinely useful and uniquely China-specific.

### 3.6 Comparison Tools

**Concept:** Side-by-side comparisons for common China travel decisions.

- **Shanghai vs Beijing** — The #1 question. History vs modernity, food scenes, English-friendliness, airport transit, nightlife, day trips.
- **eSIM vs Roaming vs Local SIM** — Cost, convenience, speed comparison table for China specifically.
- **High-speed train vs Flight** — Beijing→Shanghai: 4.5h train (¥550) vs 2h flight (¥800 + airport time). Include real door-to-door times.
- **VPN comparison** — Which VPNs work in China right now? (This changes often, which makes it timely content too.)

**Why this makes the homepage essential:** Comparisons produce unique synthesis that doesn't exist on any individual page. They answer "I'm deciding between X and Y" — the exact state a homepage visitor is in.

### 3.7 Visual Storytelling

**Concept:** Immersive visual experiences that make you *feel* China.

- **"A Day in Shanghai" scroll story** — Morning: dumplings at a street stall. Afternoon: Yu Garden. Evening: Bund skyline. Full-bleed photos with short captions. Horizontal scroll or vertical narrative.
- **High-speed train video/animation** — Show what the train experience is like (clean, fast, spacious, WiFi). Most Westerners have no idea.
- **"China's Not What You Think" photo essay** — Counter stereotypes. Modern Shanghai, clean subways, friendly locals, safe streets.

**Why this makes the homepage essential:** Emotional conversion. People book trips based on feelings, not facts. The current homepage is 90% facts and 0% feelings.

### 3.8 Personalization

**Concept:** "Tell us about your trip" → customized homepage.

- **"Plan Your Trip" wizard** — 3 questions: country of passport, trip length, travel style → personalized page with visa status, recommended cities, budget, and app checklist.
- **Country-specific visa banner** — Auto-detect or ask country → show visa requirement directly in the hero.
- **Personalized app checklist** — EU travelers need different apps than US travelers (different payment methods available).

**Why this makes the homepage essential:** Personalization makes the homepage unique to each visitor. No two people see the same page. That's impossible for a directory to achieve.

---

## 4. Prioritized Recommendations

| Rank | Feature | Impact | Effort | Uniqueness | Rationale |
|------|---------|--------|--------|------------|-----------|
| **1** | **Visa Policy Dashboard** | 🔴 Very High | 🟢 Low | 🔴 Very High | Nobody does this clearly for free. It's the #1 question. Data changes quarterly = return visits. Can be a simple static table + last-updated date. |
| **2** | **"Which City is Right for You?" Quiz** | 🔴 Very High | 🟡 Medium | 🔴 Very High | Zero competitors have this for China. It directly solves the homepage value problem — unique output that doesn't exist elsewhere. 5-7 questions, algorithmic recommendation. |
| **3** | **Curated Itineraries Strip** | 🔴 High | 🟢 Low | 🟡 Medium | We have the content. Just surface 2-3 itineraries (Golden Route, 7-Day, Food Lover) with images on the homepage. China Highlights does this — we should too. |
| **4** | **Pre-Flight Checklist (Interactive)** | 🟡 High | 🟡 Medium | 🟡 High | China requires more prep than any other destination. Nobody has an interactive checklist for this. Differentiator that's genuinely useful. |
| **5** | **Traveler Testimonials** | 🟡 High | 🟢 Low | 🟢 Low | Universal pattern, easy to implement. We just need 3-5 quotes. Low uniqueness but high trust impact. |
| **6** | **Shanghai vs Beijing Comparison** | 🟡 High | 🟢 Low | 🟡 Medium | The #1 decision first-timers face. We have both city pages — just need a comparison synthesis. Easy to build, genuinely helpful. |
| **7** | **Interactive China Map** | 🟡 Medium | 🟡 Medium | 🟡 High | Most Westerners don't know Chinese geography. A map with destinations, train routes, and travel times would be unique. Medium effort (Leaflet/MapLibre). |
| **8** | **Seasonal/News Strip** | 🟡 Medium | 🟢 Low | 🟡 Medium | "Golden Week alert", "Cherry blossom season", "New train line". Easy to add as a small banner. Keeps homepage feeling alive. |

### What Didn't Make the Cut

- **Personalization wizard** — High impact but high effort. Better as a V3 feature after quiz proves the concept.
- **Visual storytelling / scroll stories** — Beautiful but expensive (photography, design time). Worth it long-term but not a priority for "homepage unique value" MVP.
- **Budget estimator** — Useful but secondary to the quiz (which can include budget as a factor).
- **Newsletter** — We have the PDF download already. Newsletter is a good addition but doesn't solve the "homepage is a directory" problem.

---

## 5. Specific Mock Section Ideas

### 5.1 Visa Policy Dashboard

**Section Title:** "Can You Visit China? Check Your Visa Status"  
**Placement:** Immediately after hero (position 2), before Quick Answers. This is the first thing a first-timer needs to know.

**Purpose:** Replace the abstract "Do I need a visa?" chip with a comprehensive, at-a-glance visa reference that makes the homepage a destination, not a directory.

**Content/Copy Direction:**

```
Section eyebrow: "Updated April 2026"
Section title: "Can You Visit China Visa-Free?"
Subtitle: "China has expanded visa-free entry for 30+ countries. Check if yours is one of them."

[Searchable/selectable country dropdown or flag grid]

Selected country result card:
🇨🇭 Switzerland → ✅ 30-day visa-free entry (until Dec 31, 2026)
🇩🇪 Germany → ✅ 15-day visa-free entry (until Dec 31, 2026)
🇺🇸 United States → ❌ Visa required (10-year multiple entry, ~$140)
🇬🇧 United Kingdom → ✅ 15-day visa-free entry (until Dec 31, 2026)
🇦🇺 Australia → ❌ Visa required (single/double entry, ~$150)
🇨🇦 Canada → ❌ Visa required (10-year multiple entry, ~$140)
🇫🇷 France → ✅ 15-day visa-free entry (until Dec 31, 2026)

Small print: "Visa policies change. Always verify with your local Chinese embassy before booking."
Link: "Full visa guide →"
```

**Component Approach:**

- A `VisaChecker` React component
- Static data file (`data/visa-policies.json`) with country → policy mapping, last-updated date
- Select dropdown or searchable input for country selection
- Result card with status icon (✅/❌/⚠️), policy details, and link to full visa guide
- "Last updated: [date]" prominently shown — this builds trust and return visits
- No API calls needed; all data is static, updated manually when policies change

**Data Needed:**

- Country → visa policy mapping (~30-50 entries for Western countries)
- Policy details: visa-free duration, expiry date, visa type & cost for non-exempt
- Last-updated date
- Source links (official Chinese embassy/MFA pages)

**Implementation Note:** This section alone makes the homepage worth bookmarking. A Western traveler who searches "Do I need a visa for China" and lands on this dashboard gets their answer in 5 seconds. That's unique homepage value.

---

### 5.2 "Which City is Right for You?" Quiz

**Section Title:** "Find Your Perfect China City"  
**Placement:** After Destinations grid (position 5), replaces the current static city grid experience with an interactive layer.

**Purpose:** Turn the passive "here are 5 cities, pick one" into an active "tell us what you like, we'll recommend." The quiz output is unique to each user and cannot be found on any city sub-page.

**Content/Copy Direction:**

```
Section eyebrow: "Not Sure Where to Go?"
Section title: "Find Your China City"
Subtitle: "Answer a few questions — we'll match you with the city (or route) that fits your style."

[Interactive card-based quiz, one question at a time]

Q1: "What draws you to China?"
  🏛️ Ancient history & culture
  🌃 Modern cities & nightlife
  🍜 Food & street markets
  🐼 Nature & wildlife
  ☯️ A bit of everything

Q2: "How comfortable are you with language barriers?"
  😟 I speak zero Mandarin — I need English-friendly places
  😐 I know a few phrases, I'll manage
  😎 I'm adventurous — I'll figure it out

Q3: "What's your trip length?"
  📅 5-7 days
  📅 8-12 days
  📅 13+ days

Q4: "What's your budget style?"
  💰 Budget backpacker
  💼 Comfortable mid-range
  ✨ Treat yourself

Q5: "Pick your vibe:"
  🏙️ Bustling metropolis
  🏮 Historic old town
  🌿 Laid-back & green
  🎭 A mix of both

--- Results ---

"Based on your answers, we recommend:"

🥇 Shanghai — "You want modern China with a side of history. Shanghai's colonial architecture, world-class food scene, and English-friendly environment make it the perfect first stop."
→ [Explore Shanghai guide] [Add to my itinerary]

🥈 Beijing + Xi'an — "For your love of history, this duo is unmissable. The Great Wall, Forbidden City, and Terracotta Army in one route."
→ [Beijing guide] [Xi'an guide] [10-day itinerary]

🥉 Chengdu — "You're after authentic food and a slower pace. Chengdu's pandas, teahouses, and Sichuan hotpot are calling."
→ [Explore Chengdu guide]
```

**Component Approach:**

- A `CityQuiz` React component with step-by-step state
- 5 questions, one displayed at a time with animated card transitions
- Each answer maps to weighted scores per city (stored in a scoring matrix)
- Results show top 2-3 matches with personalized reasoning
- Each result links to the city guide + relevant itinerary
- "Retake quiz" button
- Mobile-first: large tap targets, swipe-friendly
- No backend needed — scoring runs client-side
- Data for scoring matrix is a simple JSON config (~100 lines)

**Data Needed:**

- Quiz questions + answer options (~5 questions, 4-5 answers each)
- City scoring matrix (5 cities × 5 questions × answer weights)
- Result descriptions per city (short personalized paragraph per city)
- Links to city guides and relevant itineraries

**Implementation Note:** This is the single feature that most dramatically transforms the homepage from "directory" to "tool." It's the thing that makes someone say "oh, this site is different" instead of "this is another travel blog." The scoring algorithm is simple (weighted sum), but the UX and copy need to be polished. Estimate: 1-2 days for a skilled React dev.

---

### 5.3 Curated Itineraries Strip

**Section Title:** "Ready-Made Trip Plans"  
**Placement:** After "How It Works" (position 7), before the PDF Cheat Sheet. This is where the intent shifts from "learning" to "doing."

**Purpose:** Surface the itineraries that currently live only in `/plan-your-trip/` directly on the homepage. First-timers don't know to look there. They should see the plans immediately.

**Content/Copy Direction:**

```
Section eyebrow: "Start Here"
Section title: "Pick Your Trip"
Subtitle: "Battle-tested itineraries for first-timers. Pick one and make it yours."

[3 horizontal cards, scrollable on mobile]

Card 1 — THE GOLDEN ROUTE (⭐ Most Popular)
"Beijing → Xi'an → Shanghai"
🕐 10 days | 💼 Mid-range | 🚄 High-speed train
"Three icons of China in one trip: the Great Wall, Terracotta Army, and the Bund. Connected by bullet train."
[View Full Itinerary →]

Card 2 — ONE-CITY DEEP DIVE
"Shanghai + Day Trips"
🕐 5-7 days | 💼 Any budget | 🚇 Metro + day trains
"Skip the rush. Explore Shanghai inside-out, day-trip to Suzhou's gardens and Hangzhou's West Lake."
[View Full Itinerary →]

Card 3 — THE FOOD ROUTE
"Chengdu → Chongqing → Xi'an"
🕐 10 days | 💰 Budget-friendly | 🌶️ Spice required
"Hotpot in Chengdu, mala xiangguo in Chongqing, roujiamo in Xi'an. For those who travel to eat."
[View Full Itinerary →]

[See all itineraries →]
```

**Component Approach:**

- A `CuratedItineraries` component with 3-4 horizontal cards
- Each card: title, route line (City → City → City), metadata row (days, budget, transport mode), short description, CTA link
- Card design: warm background (#f5f1ea), subtle border, route displayed as a mini horizontal timeline with dots
- On mobile: horizontal scroll with snap points, or vertical stack
- "Most Popular" badge on the Golden Route card
- Links go to `/plan-your-trip/preplanned-trips/[slug]`
- Static data — no API needed

**Data Needed:**

- 3-4 itinerary cards: title, route cities, days, budget level, transport icon, description, link
- "Most popular" flag for badge
- High-quality photos for each (we already have city images)

**Implementation Note:** This is the lowest-effort, highest-impact recommendation. The itineraries already exist on the site. We're just putting them on the homepage with better presentation. The route visualization (City → City → City) is a small design delight that helps users visualize the trip flow.

---

## Appendix: Recommended Homepage V2 Section Order

Based on the analysis, the V2 homepage should follow this flow:

| Position | Section | Type | Unique Value? |
|----------|---------|------|---------------|
| 1 | **Full-bleed Hero** | Emotional hook | Updated CTA copy to match tools |
| 2 | **Visa Policy Dashboard** | Decision tool | ✅ Yes — unique, timely, actionable |
| 3 | Quick Answers chip bar | Navigation | Keep (it's useful) |
| 4 | Trust Bar | Credibility | Keep |
| 5 | **"Which City is Right for You?" Quiz** | Decision tool | ✅ Yes — personalized recommendation |
| 6 | Destinations grid (with map) | Navigation + visual | Enhanced with interactive map |
| 7 | China Essentials strip | Navigation | Keep |
| 8 | "How It Works" | Process guide | Keep |
| 9 | **Curated Itineraries** | Content + navigation | ✅ Yes — surfaced from buried pages |
| 10 | **Shanghai vs Beijing** comparison | Decision tool | ✅ Yes — unique synthesis |
| 11 | **Pre-Flight Checklist** (interactive) | Action tool | ✅ Yes — China-specific prep guide |
| 12 | Traveler Testimonials | Social proof | ✅ Yes — trust builder |
| 13 | PDF Cheat Sheet | Lead magnet | Keep |
| 14 | FooterCTA | Navigation | Keep |

**Net new unique-value sections: 5** (Visa Dashboard, City Quiz, Curated Itineraries, Comparison, Pre-Flight Checklist, Testimonials)

This transforms the homepage from "8 sections, 0 with unique value" to "14 sections, 6 with unique value" — a fundamentally different homepage proposition.

---

*Analysis completed 2026-04-28. This document is the strategic input for the homepage V2 design and implementation.*