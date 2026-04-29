# SPEC: China Basics Bund-Style Rollout

**Goal:** Convert ALL China Basics sub-pages from GuideArticlePage (slate boxes, card grids, red labels) to the Bund/AttractionPage design language (warm gradient, serif headings, CSS variables, prose prose-lg, ChineseWatermark).

**Pilot:** `app/china-basics/what-apps-to-use/alipay/page.tsx` — already done ✅

---

## Design Blueprint (from Alipay pilot)

### Core Visual Elements
- **Background:** `style={{ background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff' }}`
- **Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12`
- **CSS Variables:** `--foreground` (#1f2933), `--muted` (#5d6a73), `--surface` (rgba(255,252,247,0.86)), `--line` (#1f29331a), `--primary` (#af5d32)
- **Headings:** `font-serif font-bold text-[var(--foreground)]` (h1: text-4xl sm:text-5xl md:text-6xl, h2: text-2xl sm:text-3xl, h3: text-xl sm:text-2xl)
- **Body text:** `prose prose-lg max-w-none text-[var(--foreground)]`
- **Muted/italic text:** `text-[var(--muted)] italic`
- **ChineseWatermark:** one character from the topic (e.g. 支 for Alipay, 火车 for train)
- **Breadcrumb:** `@/components/Breadcrumb`
- **Section spacing:** `mb-10` between sections
- **Section dividers:** none between most sections, `border-t border-[#ebe4d8]` before Related Articles

### Components to KEEP using
- `@/components/Breadcrumb`
- `@/components/ChineseWatermark`
- `@/components/ContextualCTA`
- `next/link` for related articles section

### Components to REMOVE
- `GuideArticlePage` — no longer used
- Card-based layouts (`bg-slate-50 rounded-xl border border-slate-200`)
- Slate color classes (`text-slate-700`, `text-slate-900`, `bg-slate-50`)
- Red/china-red step numbers (`border-china-red bg-red-50`)
- Colored info boxes (`bg-green-50`, `bg-blue-50`, `bg-amber-50`)
- Timeline/step visual patterns (circles + vertical lines)

### Image Placeholder Pattern
- Hero image: full-width, `h-64 md:h-96`, after hook/before first section
- Step screenshots: `max-w-md mx-auto`, inside the relevant li element
- Section images: full-width `h-48 md:h-64`, between text sections
- Small images: `max-w-sm mx-auto`, centered
- All use `picsum.photos/seed/{topic}-{name}/{width}/{height}`
- Label below: `<p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>`

### Content Mapping Rules
1. **GuideArticlePage `intro`** → italic hook paragraph after quick info bar
2. **GuideArticlePage `quickInfo`** → surface-bar with dot separators
3. **GuideArticlePage `whyYouNeedThis`** → "Why You Need This" section with prose paragraphs
4. **GuideArticlePage children (slate boxes)** → convert each to:
   - Colored info boxes → h3 + prose paragraph (NO bg-color boxes)
   - Numbered steps → `<ol className="list-decimal pl-6 space-y-4">` with bold titles
   - Bullet lists → `<ul className="list-disc pl-6 space-y-2">` or flowing prose
   - Timeline patterns → clean numbered list
5. **GuideArticlePage `proTips`** → blockquote with `border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]`
6. **GuideArticlePage `relatedArticles`** → border-t + divide-y section
7. **GuideArticlePage `tocItems`** → REMOVE (no sidebar TOC in Bund style)
8. **ContextualCTA** → keep at bottom, same pattern

---

## Pages to Convert (40 total, excluding already-done + hub pages + version variants)

### Skip these (already done or not content pages)
- ✅ `alipay/page.tsx` — DONE
- `china-basics/page.tsx` — hub page, separate design
- `what-apps-to-use/page.tsx` — hub page
- `how-to-get-around/page.tsx` — hub page
- `how-to-get-internet/page.tsx` — hub page
- `how-china-differs/page.tsx` — hub page (already has ChineseWatermark)
- `before-you-go/page.tsx` — hub page
- `what-apps-to-use-v2/page.tsx` — old version
- `what-apps-to-use-v3/page.tsx` — old version
- `what-apps-to-use-v4/page.tsx` — old version

### Batch 1: What Apps to Use (9 pages)
1. `what-apps-to-use/vpn/page.tsx` — VPN providers as h3+prose, setup steps as ol
2. `what-apps-to-use/wechat-pay/page.tsx`
3. `what-apps-to-use/didi/page.tsx`
4. `what-apps-to-use/maps/page.tsx`
5. `what-apps-to-use/meituan/page.tsx`
6. `what-apps-to-use/communication/page.tsx`
7. `what-apps-to-use/payment/page.tsx`
8. `what-apps-to-use/travel/page.tsx`
9. `what-apps-to-use/trip-com/page.tsx`

### Batch 2: How to Get Around (10 pages)
1. `how-to-get-around/train/page.tsx` — train types as h3+prose, no colored boxes
2. `how-to-get-around/12306/page.tsx`
3. `how-to-get-around/plane/page.tsx`
4. `how-to-get-around/metro-subway/page.tsx`
5. `how-to-get-around/taxi/page.tsx`
6. `how-to-get-around/didi/page.tsx`
7. `how-to-get-around/bus/page.tsx`
8. `how-to-get-around/bicycle/page.tsx`
9. `how-to-get-around/car/page.tsx`
10. `how-to-get-around/city-to-city/page.tsx`

### Batch 3: How to Get Internet (4 pages)
1. `how-to-get-internet/airalo-esim/page.tsx`
2. `how-to-get-internet/esim/page.tsx`
3. `how-to-get-internet/holafly-esim/page.tsx`
4. `how-to-get-internet/physical-sim/page.tsx`

### Batch 4: How China Differs (5 pages)
1. `how-china-differs/censorship/page.tsx` — blocked sites grid → h3+prose lists
2. `how-china-differs/cultural-differences/page.tsx`
3. `how-china-differs/passport-rules/page.tsx`
4. `how-china-differs/security-standards/page.tsx`
5. `how-china-differs/visa-guide/page.tsx`

### Batch 5: Before You Go (2 pages)
1. `before-you-go/is-china-safe/page.tsx`
2. `before-you-go/packing-list/page.tsx`

---

## Execution Plan

Run Codex sequentially, one batch at a time (parallel tasks timeout).

Each Codex task:
1. Read the Alipay pilot page as template
2. Read each page in the batch
3. Rewrite each page as standalone (NO GuideArticlePage, NO AttractionPage)
4. Keep ALL existing content — restructure into Bund-style layout
5. Add image placeholders where app screenshots make sense
6. Build: `rm -rf .next && NODE_OPTIONS='--max-old-space-size=4096' npx next build`
7. Fix build errors

After each batch: `git add -A && git commit && git push`