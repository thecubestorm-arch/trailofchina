# Trail of China - Implementation Plan

## Current Status (2026-04-20)

✅ **Completed:**
- Home page (`/`)
- China Basics Hub (`/china-basics/`)
- What Apps to Use section (5 subpages)
- How to Get Internet section (2 subpages)
- How China Differs section (4 subpages)
- How to Get Around section (8 subpages)
- Destinations Hub (`/destinations/`)
- Shanghai section (hub + 4 subpages)
- Beijing section (hub + 4 subpages)
- Plan Your Trip Hub (`/plan-your-trip/`)

**Total: 37 pages**

---

## Phase A: Content Completion (URGENT - Do First)

### Task A1: Preplanned Trips Section
**Directory:** `app/plan-your-trip/preplanned-trips/`

Create these pages:
1. `page.tsx` - Hub page for preplanned trips
2. `7-day-route/page.tsx` - Beijing → Xi'an → Shanghai itinerary
3. `10-day-route/page.tsx` - + Chengdu/Yangshuo extended route
4. `14-day-route/page.tsx` - Grand tour (Beijing, Xi'an, Chengdu, Yangshuo, Shanghai)

**Content requirements:**
- Day-by-day breakdown
- Transport between cities
- Recommended hotels
- Must-see attractions per day
- Pro tips for each route
- Estimated costs

### Task A2: Travel Planner Form
**Directory:** `app/plan-your-trip/travel-planner/`

Create:
1. `page.tsx` - Interactive travel planner form

**Form fields:**
- Cities to visit (multi-select)
- Duration (dropdown: 7, 10, 14, 21 days)
- Interests (checkboxes: History, Food, Nature, Modern Cities, Culture)
- Budget level (Budget, Mid-range, Luxury)
- Submit button

**Note:** Form can be static UI for now, functionality can be added later.

### Task A3: Interactive Map Placeholder
**Directory:** `app/interactive-map/`

Create:
1. `page.tsx` - "Coming Soon" page with nice design

**Content:**
- Map placeholder graphic
- "Interactive Map - Coming Soon"
- Email signup for notifications (optional)

---

## Phase B: SEO & Design Rework

### Task B1: Complete SEO Metadata
**For EVERY page, ensure:**
```typescript
export const metadata: Metadata = {
  title: 'Specific Title | Trail of China',
  description: 'Compelling description under 160 characters',
  keywords: ['china travel', 'specific topic', 'beijing', 'shanghai'],
  openGraph: {
    title: '...',
    description: '...',
    type: 'article',
  }
};
```

**Pages needing metadata audit:**
- [ ] All 37 existing pages
- [ ] New pages from Phase A

### Task B2: Internal Linking
Add cross-links between:
- Hub pages → Subpages
- Related guides (e.g., VPN page links to Internet page)
- Destinations → Plan Your Trip
- Use Next.js `<Link>` component

### Task B3: Minimalist Design Rework
**Goals:**
- Reduce visual clutter
- Consistent spacing (use Tailwind spacing scale)
- Typography hierarchy (clear h1/h2/h3 distinction)
- Card styles unified across all pages
- Mobile-first refinements

**Specific changes:**
- Reduce border colors to 1-2 accent colors
- Consistent padding (py-12, px-4 standard)
- Card shadows subtle
- Remove decorative emojis where excessive

---

## Phase C: Internationalization (i18n)

### Task C1: i18n Setup
**Strategy:** Path-based locales
- `/en/*` - English (default)
- `/de/*` - German
- `/fr/*` - French
- `/it/*` - Italian
- `/es/*` - Spanish

**Implementation:**
1. Set up Next.js i18n routing
2. Create translation files structure:
   ```
   locales/
   ├── en/
   │   ├── common.json
   │   ├── china-basics.json
   │   └── destinations.json
   ├── de/
   │   └── ...
   ```

### Task C2: Locale Switcher
- Floating or header-based language switcher
- Flag icons + language codes
- Persist preference in localStorage

### Task C3: Content Translation Priority
1. **First:** EN + DE (core markets)
2. **Then:** FR, IT, ES

### Task C4: SEO for i18n
- hreflang tags
- Canonical URLs per locale
- Sitemap per language

---

## Phase D: Compliance & Conversion

### Task D1: Legal Pages
Create:
- `app/privacy-policy/page.tsx`
- `app/terms-of-service/page.tsx`
- `app/contact/page.tsx`
- `app/about/page.tsx`

### Task D2: Cookie Banner
- GDPR-compliant cookie consent
- Minimal, non-intrusive design
- Link to privacy policy

### Task D3: Trust Elements
- "Last updated" dates on guide pages
- Author attribution
- External link disclaimers
- Affiliate disclosure

### Task D4: Conversion Optimization
- Floating CTA (subtle, bottom-right)
- Email newsletter signup
- Social sharing buttons
- Related articles suggestions

---

## Phase E: Domain & Deployment

### Task E1: Domain Setup
- Primary: `trailofchina.com`
- German: `travelchina.ch` (optional)
- Configure DNS and SSL

### Task E2: Analytics
- Google Analytics 4 setup
- Privacy-compliant configuration
- Event tracking for key interactions

### Task E3: Performance
- Image optimization
- Core Web Vitals monitoring
- Lazy loading for images

---

## Quality Gates (Before Each Push)

**MANDATORY checklist:**

```bash
# 1. Dependencies
npm install

# 2. Build test
npm run build
# Must complete with 0 errors

# 3. Route verification
# Check all expected routes exist in build output

# 4. Responsive check
# Test mobile + desktop breakpoints

# 5. SEO check
# Verify metadata on key pages

# 6. Only then commit + push
```

---

## Codex Instructions

### Before Starting
1. Read this entire file
2. Check current `git status`
3. Verify you're in `/data/.openclaw/workspace/trailofchina/`
4. Confirm Node.js and npm are available

### During Development
1. Work in feature branches if possible
2. Run `npm run build` frequently
3. Fix errors immediately
4. Follow existing code patterns

### After Each Phase
1. Run full Quality Gates checklist
2. Commit with descriptive message: `"Phase A: Complete preplanned trips section"`
3. Push to `main`
4. Verify Vercel deployment succeeds

---

## File Structure Target

```
app/
├── page.tsx                          # Home
├── layout.tsx
├── globals.css
├── china-basics/
│   ├── page.tsx
│   ├── what-apps-to-use/
│   ├── how-to-get-internet/
│   ├── how-china-differs/
│   └── how-to-get-around/
├── destinations/
│   ├── page.tsx
│   ├── shanghai/
│   └── beijing/
├── plan-your-trip/
│   ├── page.tsx
│   ├── preplanned-trips/
│   │   ├── page.tsx
│   │   ├── 7-day-route/
│   │   ├── 10-day-route/
│   │   └── 14-day-route/
│   └── travel-planner/
│       └── page.tsx
└── interactive-map/
    └── page.tsx

components/
├── ui/                               # Reusable UI components
├── layout/                           # Layout components
└── forms/                            # Form components

lib/
├── i18n/                            # Translation config
└── utils/

public/
├── images/
└── locales/                          # Translation files

next.config.js
tailwind.config.ts
tsconfig.json
package.json
IMPLEMENTATION_PLAN.md              # This file
```

---

## Priority Order

**START WITH:**
1. Phase A (Content completion) - CRITICAL
2. Phase B (SEO & Design) - HIGH
3. Phase C (i18n EN/DE) - MEDIUM
4. Phase D (Compliance) - MEDIUM
5. Phase E (Domain) - LOW

**Do NOT start Phase B until Phase A is 100% complete.**

---

## Notes for Codex

- Use existing page patterns from `/app/china-basics/what-apps-to-use/payment/page.tsx` as reference
- Keep content practical and actionable
- Always include "Pro Tips" and "Warnings/Scams" sections
- Use Tailwind classes consistently
- Ensure mobile responsiveness
- Test every page with `npm run build` before considering it done

---

Last updated: 2026-04-20
