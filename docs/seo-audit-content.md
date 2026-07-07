# SEO Audit — Trail of China (Post-Prune)

**Date:** 2026-07-06  
**Pages Active:** 91 (down from 243)  
**Audit Scope:** Content + UX + Technical (kept pages only)

---

## 1. ✅ GOOD — Content Strengths

| Area | Detail |
|------|--------|
| airalo-esim page | Rich content (~1,034 words), multiple CTA steps, strong internal linking (18 backlinks from kept pages) |
| jianbing page | Short (~444 words) but focused, likely ranks well for niche keyword |
| shanghai-tower page | Rich (~1,536 words), detailed guide |
| City hubs (Beijing, Shanghai, Xi'an) | Substantial content (Beijing ~3.4k words, Shanghai ~4k words, Xi'an ~3.3k words) |
| China Basics pages | Solid depth: train (1,226w), visa-guide (1,300w), payment (1,144w), alipay (1,420w) |
| Internal linking | airalo-esim linked from 14+ kept pages — strong topic cluster |
| robots.txt | ✅ Correct: allows all crawlers, disallows /api/, references sitemap.xml |
| OG/Twitter cards | ✅ Present in layout.tsx with default image (1200×630) |
| Blog | 3 quality posts with unique content (best-esim-china, china-visa-guide, best-vpn-china) |

---

## 2. ⚠️ WARNING — Moderate Issues

### Thin Content (Under 400 words)

These pages are kept but have minimal content — they should be expanded or their content merged into parent hubs.

| Page | Words | Risk |
|------|-------|------|
| Blog hub | 86 | Too thin for a hub — needs category descriptions or featured posts |
| Destinations hub | 91 | Should list cities with blurbs |
| All 7 city hubs (e.g. Beijing) | 122-131 | These redirect to sub-hubs but have almost no content |
| China Basics hub | 130 | Needs a proper overview paragraph |
| Plan Your Trip hub | 150 | Same — needs expanded intro |
| Homepage | 153 | Too short — should be 500+ words with value prop |

### Placeholder Images (Still Using picsum.photos)

**40 kept pages** still use placeholder images. Worst offenders:

| Page | Placeholder Count | Word Count |
|------|-------------------|------------|
| alipay subpage | 6 | 1,420 |
| shanghai-tower | 5 | 1,536 |
| ping-an-finance-centre | 5 | 969 |
| wechat-pay | 4 | 1,034 |
| meituan | 4 | 1,055 |
| holafly-esim | 3 | 1,002 |
| airalo-esim | 3 | 1,034 |
| physical-sim | 3 | 935 |
| esim | 3 | 1,031 |
| trip-com | 3 | 2,474 |

**Priority:** Replace placeholders on airalo-esim, holafly-esim, alipay, and wechat-pay FIRST — these are your sacred traffic pages.

### City Sub-Hubs (What-to-do, Where-to-eat, etc.)

| Hub | Words | Risk |
|-----|-------|------|
| Chongqing where-to-eat | 619 | Below threshold |
| Shanghai what-to-do | 619 | Below threshold |
| Chongqing where-to-stay | 641 | Below threshold |
| Xi'an where-to-stay | 655 | Below threshold |
| Chengdu where-to-stay | 692 | Below threshold |
| Xi'an where-to-eat | 701 | Below threshold |
| Chengdu where-to-eat | 757 | Below threshold |

These are just listing pages — they need MORE narrative content, not just lists. Google is increasingly penalizing "list-only" pages.

### Missing CTAs

**26 kept pages** have no CTA component (AffiliateCTA, ContextualCTA, FooterCTA, or ChecklistDownload). Examples:
- All blog pages (hub, posts, categories)
- Legal pages (imprint, cookie-policy, privacy)
- Most city hubs and sub-hubs
- Shenzhen & Guangzhou city hubs

### Content Gaps (vs. Competitors)

| Missing Topic | Priority |
|---------------|----------|
| "Is China safe for solo travelers?" | High — dedicated page missing |
| "How many days in [city]?" per city | Medium — archived in Phase 3, only hubs remain |
| "Common mistakes in [city]" per city | Medium — archived |
| "Best time to visit [city]" per city | Medium — only generic best-time page |
| Hotel booking tips for foreigners | High — unique pain point |
| Vegetarian food in China | Medium — growing market |
| Train booking step-by-step guide | Medium — 12306 was archived |
| Metro system guides per city | Medium — only generic metro page |

---

## 3. ❌ CRITICAL — Major Problems

### Missing H1 Tags on Key Pages

| Page | H1 Count | Impact |
|------|----------|--------|
| Homepage | 0 | ❌ No clear topic for Google |
| Beijing city hub | 0 | ❌ |
| Shanghai city hub | 0 | ❌ |
| Destinations hub | 0 | ❌ |
| Plan Your Trip hub | 0 | ❌ |
| China Basics hub | 0 | ❌ |
| Multiple sub-hubs | 0 | ❌ |

**Only** `app/china-basics/how-to-get-internet/airalo-esim/page.tsx` and `app/destinations/beijing/where-to-eat/jianbing/page.tsx` appear to have proper H1 tags.

### Homepage Too Thin

- Only **153 words** — should be 500+ for a homepage
- No H1 tag
- Missing value proposition copy
- The "above the fold" content is mostly images/CTA, not text

### Blog Hub Almost Empty

- **86 words** on the blog listing page
- No featured post cards, no descriptions
- Google may consider this low-quality

---

## 4. 🚀 QUICK WIN — High Impact, Easy Fixes

| Priority | Fix | Effort | Impact |
|----------|-----|--------|--------|
| 1 | Add H1 tags to ALL hub pages (homepage, destinations, china-basics, plan-your-trip, 7 city hubs) | Low | Very High |
| 2 | Expand homepage to 500+ words with value proposition + H1 | Low | Very High |
| 3 | Add ContextualCTA or AffiliateCTA to city sub-hubs | Low | High |
| 4 | Replace placeholder images on airalo-esim + holafly-esim (sacred pages) | Medium | High |
| 5 | Expand blog hub with post descriptions and featured cards | Low | Medium |
| 6 | Add 200-300 words of narrative to each city sub-hub | Medium | High |
| 7 | Create "Is China safe for solo travelers?" dedicated page | Medium | Medium |
| 8 | Add hotel booking tips page for foreigners | Medium | Medium |

---

## Summary

- **Total issues found:** 12 categories, ~50 individual pages affected
- **Critical:** 2 (missing H1s on all hubs, homepage too thin)
- **Warnings:** 5 (thin content, placeholders, missing CTAs, content gaps, sub-hub quality)
- **Quick wins:** 8 identified
- **Top 3 priorities:**
  1. **Add H1 tags to every hub page** — affects ALL major landing pages
  2. **Expand homepage content** — first impression, low-hanging fruit
  3. **Replace placeholders on sacred pages** — airalo-esim, holafly-esim, alipay

---

## Page Speed / Mobile UX Notes

- No viewport meta found in manual scan (Next.js may set this automatically via metadata)
- No obvious blocking resources detected in build output
- Static export means fast initial load, but no ISR/SSR
- City hubs show `229 B` or `176 B` JS bundles — these are effectively empty shells

---

*Next review recommended: After completing Quick Win #1 (H1 tags) and Quick Win #2 (homepage expansion)*
