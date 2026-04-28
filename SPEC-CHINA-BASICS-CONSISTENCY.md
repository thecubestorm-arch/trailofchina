# China Basics — GuideArticlePage Consistency Fix

**Date:** 2026-04-28
**Problem:** Pages under `/china-basics/` have inconsistent designs. Some use `GuideArticlePage` (modern, with TOC sidebar, hook, quick info, pro tips) while others are hand-written with raw HTML/Tailwind (no TOC, no sidebar, inconsistent styling).

## Goal
Convert ALL china-basics sub-pages to use `GuideArticlePage` component, matching the Alipay/VPN/WeChat Pay style. Add right-side TOC navigation to every page.

## Current State

### Pages already using GuideArticlePage (GOOD — leave these alone):
- `what-apps-to-use/vpn` ✅
- `what-apps-to-use/wechat-pay` ✅
- `what-apps-to-use/didi` ✅
- `what-apps-to-use/maps` ✅
- `what-apps-to-use/meituan` ✅
- `what-apps-to-use/payment` ✅
- `what-apps-to-use/travel` ✅
- `what-apps-to-use/trip-com` ✅
- `what-apps-to-use/communication` ✅
- `how-to-get-internet/airalo-esim` ✅
- `how-to-get-internet/esim` ✅
- `how-to-get-internet/holafly-esim` ✅
- `how-to-get-internet/physical-sim` ✅
- `how-china-differs/visa-guide` ✅
- `before-you-go/is-china-safe` ✅
- `before-you-go/packing-list` ✅
- `how-to-get-around/12306` ✅
- `how-to-get-around/bus` ✅

### Pages that need conversion (INCONSISTENT — convert these):
1. `what-apps-to-use/alipay` — Completely hand-written, no GuideArticlePage. This is the worst offender — it has no TOC, no hook callout, no quick info bar, uses raw card styling that doesn't match.
2. `how-to-get-around/bicycle` — Hand-written
3. `how-to-get-around/car` — Hand-written
4. `how-to-get-around/city-to-city` — Hand-written
5. `how-to-get-around/didi` — Hand-written (different from the what-apps-to-use/didi page!)
6. `how-to-get-around/metro-subway` — Hand-written
7. `how-to-get-around/plane` — Hand-written
8. `how-to-get-around/taxi` — Hand-written
9. `how-to-get-around/train` — Hand-written
10. `how-china-differs/censorship` — Hand-written
11. `how-china-differs/cultural-differences` — Hand-written
12. `how-china-differs/passport-rules` — Hand-written
13. `how-china-differs/security-standards` — Hand-written

## GuideArticlePage Component

The component is at `components/GuideArticlePage.tsx`. It accepts these props:

```ts
interface GuideArticlePageProps {
  breadcrumbs?: readonly { label: string; href?: string }[];
  category: string;
  title: string;
  intro: string;
  whyYouNeedThis?: string[];
  setupSteps?: { title: string; description: string }[];
  proTips?: string[];
  related?: { label: string; href: string }[];
  relatedArticles?: { title: string; description: string; href: string }[];
  icon?: string;
  heroImage?: { src: string; alt: string };
  hook?: string;
  quickInfo?: string;
  children?: React.ReactNode;
  tocItems?: { id: string; title: string }[];
}
```

When `tocItems` is provided, it automatically renders a 2-column layout with TOC sidebar on the right (sticky on desktop, collapsible on mobile).

## Conversion Rules

For each page to convert:

1. **Preserve ALL content** — every piece of text, every section, every link must remain. Do not delete or simplify content.
2. **Restructure into GuideArticlePage props** — move content into `intro`, `whyYouNeedThis`, `setupSteps`, `proTips`, `hook`, `quickInfo` where appropriate.
3. **If content doesn't fit a prop, use `children`** — for custom sections like VPN provider cards, food grids, etc.
4. **Add `tocItems`** — create a table of contents array from the page's h2 headings. Each `id` must match an `id` attribute on the corresponding heading.
5. **Add `heroImage`** — use picsum.photos with a relevant seed (e.g., `seed/alipay-china/800/400`)
6. **Add proper `icon`** — use emoji if no SVG icon exists (e.g., "💳" for payment, "🚄" for train)
7. **Keep existing `metadata`** — title and description must stay the same
8. **Keep existing `ContextualCTA`** — if the page has one, keep it below GuideArticlePage
9. **Match the color system**: `text-china-red` for category labels and step numbers, `text-slate-900` for headings, `text-slate-700` for body, `card-base` for cards, `bg-amber-50 border-amber-200` for pro tips

## Specific Instructions for Alipay

The Alipay page (`what-apps-to-use/alipay`) is the priority. It currently has:
- Payment Setup section with 5 step cards
- Mini-Apps section with 4 cards
- Transit section (Subway + Buses)
- Pro Tips section
- ContextualCTA
- RelatedArticles

Convert it to use GuideArticlePage with:
- `category="What Apps to Use"`
- `title="Alipay in China: Complete Setup Guide for Foreigners"`
- `intro` from the first paragraph
- `tocItems` for each section
- `setupSteps` from the 5 payment setup steps
- `proTips` from the pro tips list
- `relatedArticles` from existing RelatedArticles
- Children: Mini-Apps grid + Transit section (these don't fit standard props)
- Keep ContextualCTA below

## Build Verification

After all conversions, run `npx next build` and fix any errors.