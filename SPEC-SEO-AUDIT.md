# SEO Audit — Trail of China

**Site:** trailofchina.com  
**Tech Stack:** Next.js 15, static export (`output: 'export'`), Vercel, next-intl for i18n  
**Audit Date:** 2026-05-04  
**Pages Analyzed:** 159 `.page.tsx` / `.page.ts` files across the app directory

---

## 1. Critical Issues (Must Fix — Hurting Rankings)

### C1. Missing Sitemap
- **File:** `public/robots.txt` references `Sitemap: https://trailofchina.com/sitemap.xml`
- **Problem:** No `sitemap.xml`, `sitemap.ts`, or `sitemap.js` exists anywhere in `app/` or `public/`
- **Impact:** Google cannot discover all 159+ pages. New/deep pages will not be indexed efficiently.
- **Fix:** Create `app/sitemap.ts` using Next.js dynamic sitemap generation. List all static routes and dynamic blog/category pages. Example:
  ```ts
  // app/sitemap.ts
  import { MetadataRoute } from 'next'
  import { blogPosts } from '@/lib/blog-data'
  
  export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://trailofchina.com'
    const staticRoutes = ['/', '/china-basics', '/destinations', '/plan-your-trip', '/about', '/blog', '/privacy', '/imprint', '/cookie-policy']
    const posts = blogPosts.map(p => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date }))
    return [...staticRoutes.map(r => ({ url: `${base}${r}`, lastModified: new Date() })), ...posts]
  }
  ```

### C2. No Structured Data Beyond Blog Posts
- **File:** Only `app/blog/[slug]/page.tsx` has JSON-LD (`BlogPosting` schema)
- **Problem:** Homepage, destination guides, planning pages, and the About page have ZERO structured data
- **Impact:** Missing rich snippets. Google does not understand this as a travel guide site.
- **Fix — Add to root layout or per-page:**
  - **Organization schema** on every page (in `app/layout.tsx`):
    ```tsx
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Trail of China",
      "url": "https://trailofchina.com",
      "logo": "https://trailofchina.com/favicon.svg",
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "buetikoferdigital@gmail.com",
        "contactType": "customer service"
      }
    })}} />
    ```
  - **TravelGuide / TouristAttraction schema** on destination pages (Beijing, Shanghai, Chengdu, Xi'an, Chongqing)
  - **FAQPage schema** on homepage — the `trendingFaqs` array is perfect for this
  - **BreadcrumbList schema** wherever `<Breadcrumb>` component is used

### C3. Orphaned / Test Pages Exporting to Production
- **Files:** `app/plan-your-trip-v1/page.tsx`, `app/plan-your-trip-v2/page.tsx`, `app/plan-your-trip-v3/page.tsx`, `app/page-v2/` (directory)
- **Problem:** These have their own canonical URLs (`/plan-your-trip-v1`, `/plan-your-trip-v2`, etc.) and will be statically exported into `dist/`. Search engines can discover and index them. They compete with the real `/plan-your-trip` page.
- **Impact:** Duplicate content / keyword cannibalization. Dilutes link equity. Thin test pages in search results look unprofessional.
- **Fix:** Either:
  - Add `noindex` to their metadata: `robots: { index: false }`
  - Or exclude them from static export by removing the routes from `generateStaticParams` if applicable, or by using `export const dynamic = 'force-dynamic'` (not ideal for static export)
  - **Best fix:** Move them out of `app/` into a `_drafts/` or `experiments/` directory outside the app router, or guard with `process.env.NODE_ENV === 'development'`

### C4. Missing Canonical Tags on Most Pages
- **Pages WITH canonical:** `china-basics`, `plan-your-trip`, `about`, `destinations/shanghai`, `blog/[slug]`, `blog/category/[slug]`
- **Pages WITHOUT canonical:** `/` (homepage), `/destinations`, `/destinations/beijing`, `/destinations/chengdu`, `/destinations/xian`, `/destinations/chongqing`, `/plan-your-trip/budget`, `/plan-your-trip/best-time-to-visit`, `/plan-your-trip/preplanned-trips/*`, all `/china-basics/*` sub-pages, `/imprint`, `/privacy`, `/cookie-policy`, `/interactive-map`, `/blog`
- **Impact:** Duplicate content risk (e.g. trailing slashes, query params, UTM tags). Diluted ranking signals.
- **Fix:** Add `alternates: { canonical: '/path' }` to metadata on every page. Example for `app/destinations/beijing/page.tsx`:
  ```ts
  export const metadata: Metadata = {
    title: 'Beijing Travel Guide | Trail of China',
    description: '...',
    alternates: { canonical: '/destinations/beijing' },
  }
  ```

### C5. Homepage Meta Title Misses Key Keywords
- **File:** `app/v7/page.tsx` (line 5)
- **Current:** `title: 'Travel China Without Confusion'`
- **Problem:** Does not contain "China travel guide" or "first trip to China" — the core search terms. The layout template adds `| Trail of China`, so the full title is "Travel China Without Confusion | Trail of China"
- **Fix:** `title: 'China Travel Guide for First-Time Visitors — Trail of China'` or similar. Keep it under 60 chars.

---

## 2. Important Improvements (Should Fix — Meaningful SEO Impact)

### I1. Open Graph Images Missing on Almost Every Page
- **Pages with OG images:** Only `app/blog/[slug]/page.tsx` (uses `post.imageUrl`)
- **Pages missing `og:image`:** Homepage, all destination pages, all planning pages, all china-basics sub-pages, About, etc.
- **Impact:** Social shares look broken or unbranded. No rich previews on Facebook/LinkedIn/Twitter.
- **Fix:** Create a default OG image (1200×630px) and reference it everywhere. Add to root `metadata` in `app/layout.tsx`:
  ```ts
  openGraph: {
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Trail of China — China Travel Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-default.jpg'],
  }
  ```
  Then override per-page where custom images exist (e.g. blog posts).

### I2. Placeholder Images (picsum.photos) Across 20+ Pages
- **Files affected:** `app/plan-your-trip/budget/page.tsx:82`, `best-time-to-visit/page.tsx:82`, `preplanned-trips/*/page.tsx`, `china-basics/how-to-get-internet/*/page.tsx`, `before-you-go/packing-list/page.tsx`, and many more.
- **Problem:** `picsum.photos` returns random, non-relevant placeholder images. These add no value to users or SEO. Google sees them as thin content signals. `images.unoptimized: true` in `next.config.js` means zero optimization.
- **Impact:** Poor user experience. Slow loads (external domain, no Next.js optimization). Search engines may flag pages as low-quality.
- **Fix:** Replace every `picsum.photos` URL with real, relevant photos. Store them in `public/images/` or a CDN. Update `next.config.js` to allow image domains if using external CDN:
  ```js
  images: {
    unoptimized: false, // or true if static export requires it
    remotePatterns: [{ protocol: 'https', hostname: 'your-cdn.com' }],
  }
  ```
  If static export is required, `unoptimized: true` is fine — just use local `public/` images.

### I3. Missing Twitter Card Meta Tags on Most Pages
- **Only homepage** has `twitter: { card: 'summary_large_image' }` (in `app/v7/page.tsx`)
- **All other pages** have zero Twitter meta tags
- **Fix:** Add `twitter` object to all page metadata, or rely on the root layout fallback (see I1).

### I4. Heading Hierarchy Issues on Destination Pages
- **Files:** `app/destinations/beijing/page.tsx`, `chengdu/page.tsx`, `chongqing/page.tsx`, `xian/page.tsx`
- **Current structure:**
  ```
  h1: "Beijing"
  h2: "Getting Here"
    (no h2 for sections — sections jump straight to h3 inside articles)
  div.bg-amber-50 > h3: "Quick Tips for Beijing"
  ```
- **Problem:** The section cards use `h3` without a parent `h2`. The "Quick Tips" block uses `h3` as a section heading but it sits outside a `<section>` and has no `h2` parent. This creates a broken outline.
- **Fix:**
  - Wrap each destination section in `<section>` with `h2` as the section title
  - Change the "Quick Tips" `h3` to `h2`
  - Ensure the article cards inside sections use `h3` under the section `h2`

### I5. Interactive Map Page is Thin Content
- **File:** `app/interactive-map/page.tsx`
- **Current meta:** `title: 'Interactive Map | Trail of China'`, `description: 'Interactive map of China destinations. Coming soon!'`
- **Problem:** Page is literally a placeholder. Google will index it and users will bounce.
- **Fix:** Either:
  - Add `robots: { index: false }` to hide it until ready, OR
  - Build a real interactive map with descriptive content around it

### I6. Missing OG / Twitter on Plan-Your-Trip Variants
- **Files:** `app/plan-your-trip-v1/page.tsx`, `v2`, `v3`
- **Problem:** If these must exist, they should at least have `robots: { index: false }` and NO canonical. Currently they have canonicals to themselves which tells Google "this is the real page."
- **Fix:** Add `robots: { index: false, follow: false }` and remove canonicals. Or delete them.

### I7. Blog Homepage Missing Canonical and OG
- **File:** `app/blog/page.tsx`
- **Missing:** `alternates.canonical`, `openGraph`, `twitter`
- **Fix:** Add metadata object with canonical `/blog`, OG title/description, and default image.

### I8. China Basics Sub-Pages Missing Canonicals
- **Checked:** `app/china-basics/how-china-differs/visa-guide/page.tsx`, `what-apps-to-use/*/page.tsx`, `how-to-get-internet/*/page.tsx`
- **Problem:** None of the deep guide pages have `alternates.canonical`. With 159 pages total, this is a systemic issue.
- **Fix:** Add canonicals to every leaf page. Consider creating a shared metadata helper:
  ```ts
  // lib/metadata.ts
  export const makeMetadata = (title: string, desc: string, path: string) => ({
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: { title, description, type: 'article', images: [{ url: '/og-default.jpg' }] },
    twitter: { card: 'summary_large_image', images: ['/og-default.jpg'] },
  })
  ```

---

## 3. Nice-to-Have (Low Effort, Marginal Impact)

### N1. hreflang Tags Missing
- **Context:** `i18n.ts` defines `locales = ['en', 'de']`, `defaultLocale = 'en'`. `next-intl` plugin is active.
- **Current state:** `html lang="en"` is hardcoded in `app/layout.tsx`. No alternate language pages exist yet (no `/de/` routes).
- **Action:** When German pages are added, add `<link rel="alternate" hreflang="en" href="..." />` and `hreflang="de"` tags. Next.js `Metadata` supports this natively:
  ```ts
  alternates: {
    canonical: '/path',
    languages: {
      'en-US': '/en/path',
      'de-DE': '/de/path',
    },
  }
  ```

### N2. Meta Keywords in Root Layout
- **File:** `app/layout.tsx` line 14
- **Current:** `keywords: 'China travel guide,first trip to China,China itinerary,China travel planning,travel China first time'`
- **Note:** Google ignores meta keywords. Bing uses them minimally. No harm, no major benefit.
- **Action:** Keep them but don't spend time expanding. Focus on title + description + content instead.

### N3. Not Found Page is Cute But Could Be More Helpful
- **File:** `app/not-found.tsx`
- **Current:** Generic "Lost in China?" message with a home link
- **Improvement:** Add links to top pages (Plan Your Trip, China Basics, Destinations) and a search box if search is re-enabled. This turns a 404 into an internal linking opportunity.

### N4. Cookie Policy Page is Thin
- **File:** `app/cookie-policy/page.tsx`
- **Current:** Has a generic title and description. Content may be minimal.
- **Action:** Ensure it has at least 300 words of substantive content about cookies, consent, and third-party services. Add internal links back to Privacy Policy and Imprint.

### N5. Add `lastModified` to Blog Post Schema
- **File:** `app/blog/[slug]/page.tsx` line 49-58
- **Current JSON-LD:** Only `datePublished` — no `dateModified`
- **Fix:** Add `dateModified: post.date` (or a real updated date field if available) to the schema.

### N6. Image Alt Text on Hero Background
- **File:** `app/v7/HomeV7Client.tsx` line 127-130
- **Current:** Hero image is a CSS `backgroundImage` with no `<img>` element and no alt text.
- **Fix:** Convert to a real `<img>` with `alt="Shanghai skyline at sunset — Trail of China"` or similar, layered with CSS. Or add `role="img" aria-label="..."` to the container.

### N7. Consider Adding Article Schema to Guide Pages
- **Pages like:** `/plan-your-trip/budget`, `/china-basics/how-china-differs/visa-guide`
- **Fix:** Add `Article` or `HowTo` schema to long-form guides to improve chances of featured snippets.

### N8. Add `author` and `publisher` to More Pages
- **Current:** Only blog posts have author/publisher in schema
- **Fix:** Add Organization `publisher` to all Article/TravelGuide schemas site-wide.

---

## 4. Per-Page Notes

### Homepage — `app/v7/page.tsx` (also `app/page.tsx` which re-exports it)
| Element | Status | Note |
|---------|--------|------|
| Title | ⚠️ Weak | "Travel China Without Confusion" — misses core keywords |
| Description | ✅ Good | Accurate, mentions visa-free, planning, first-time |
| Canonical | ❌ Missing | No `alternates.canonical` on root |
| OG Tags | ⚠️ Partial | Has title, desc, type=website. **Missing og:image** |
| Twitter | ⚠️ Partial | Has `card` only. **Missing twitter:image** |
| H1 | ✅ Good | "Your First Trip to China" + "Simplified" |
| Schema | ❌ Missing | No Organization, FAQPage, or WebSite schema |
| Hero Image | ⚠️ No alt | CSS background-image with no alt text |
| Internal Links | ✅ Good | Strong linking to all major sections |
| **Priority** | 🔴 Critical | Add sitemap, canonical, OG image, schema |

### China Basics Hub — `app/china-basics/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "China Basics - Everything You Need to Know" |
| Canonical | ✅ Good | `/china-basics` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "China Basics" in hero |
| Schema | ❌ Missing | No structured data |

### Destinations Hub — `app/destinations/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Explore China Destinations | Trail of China" |
| Canonical | ❌ Missing | Should be `/destinations` |
| OG/Twitter | ❌ Missing | None |
| H1 | ⚠️ Check | In `DestinationsMapInner` component — verify hierarchy |
| Schema | ❌ Missing | No `TouristAttraction` or `ItemList` schema |

### Shanghai — `app/destinations/shanghai/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Shanghai Travel Guide | Trail of China" |
| Canonical | ✅ Good | `/destinations/shanghai` |
| OG/Twitter | ❌ Missing | None |
| Schema | ❌ Missing | No `TouristAttraction` / `TravelGuide` schema |
| **Priority** | 🟡 Important | Add OG, schema |

### Beijing — `app/destinations/beijing/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Beijing Travel Guide | Trail of China" |
| Canonical | ❌ Missing | Should be `/destinations/beijing` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Beijing" |
| H2/H3 | ⚠️ Broken | Sections use `h3` without `h2` parent; Quick Tips uses `h3` as section heading |
| Schema | ❌ Missing | No structured data |
| **Priority** | 🟡 Important | Fix headings, add canonical + OG |

### Chengdu — `app/destinations/chengdu/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Chengdu Travel Guide | Pandas, Teahouses, and Sichuan Flavor" |
| Canonical | ❌ Missing | Should be `/destinations/chengdu` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Chengdu (成都) Travel Guide" |
| H2/H3 | ⚠️ Broken | Same heading hierarchy issue as Beijing |
| Schema | ❌ Missing | No structured data |

### Xi'an — `app/destinations/xian/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Xi'an Travel Guide | Trail of China" |
| Canonical | ❌ Missing | Should be `/destinations/xian` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Xi'an" |
| H2/H3 | ⚠️ Broken | Same heading hierarchy issue |

### Chongqing — `app/destinations/chongqing/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Chongqing Travel Guide | Trail of China" |
| Canonical | ❌ Missing | Should be `/destinations/chongqing` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Chongqing" |
| H2/H3 | ⚠️ Broken | Same heading hierarchy issue |

### Budget Guide — `app/plan-your-trip/budget/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "China Budget Guide — Cost of Travel in China | Trail of China" |
| Canonical | ❌ Missing | Should be `/plan-your-trip/budget` |
| OG | ⚠️ Partial | Has title, desc, type=article. **Missing og:image** |
| Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Budget Guide - Cost of Travel in China" |
| H2/H3 | ✅ Good | Proper hierarchy: H1 → H2 "At a Glance" → H3 "Accommodation" etc. |
| Image | ⚠️ Placeholder | Uses `picsum.photos` — see I2 |
| Schema | ❌ Missing | No `Article` or `HowTo` schema for a guide page |
| **Priority** | 🟡 Important | Add canonical, OG image, schema |

### Best Time to Visit — `app/plan-your-trip/best-time-to-visit/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Best Time to Visit China — Month-by-Month Guide | Trail of China" |
| Canonical | ❌ Missing | Should be `/plan-your-trip/best-time-to-visit` |
| OG | ⚠️ Partial | Has title, desc, type=article. **Missing og:image** |
| Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Best Time to Visit China" |
| H2/H3 | ✅ Good | Proper hierarchy |
| Image | ⚠️ Placeholder | Uses `picsum.photos` — see I2 |
| Schema | ❌ Missing | No schema for seasonal guide |

### Plan Your Trip Hub — `app/plan-your-trip/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ⚠️ Weak | "Plan Your Trip | Trail of China" — could be more keyword-rich |
| Description | ⚠️ Weak | "Plan your China trip with pre-made itineraries and custom travel planning tools." — okay but thin |
| Canonical | ✅ Good | `/plan-your-trip` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Plan Your Trip" |
| H2/H3 | ⚠️ Check | Section cards use `h3` inside articles — verify hierarchy |
| **Priority** | 🟡 Important | Add OG, improve description |

### About — `app/about/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ⚠️ Weak | "About | Trail of China" — could mention "China travel guide" |
| Description | ✅ Good | Mentions purpose and expertise |
| Canonical | ✅ Good | `/about` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "We Fell in Love with China So You Can Too" |
| Schema | ❌ Missing | No Organization or AboutPage schema |

### Imprint — `app/imprint/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | Uses `absolute` title "Imprint | Trail of China" |
| Canonical | ❌ Missing | Should be `/imprint` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Imprint (Impressum)" |
| **Priority** | 🟢 Nice-to-have | Add canonical for completeness |

### Privacy — `app/privacy/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | Uses `absolute` title |
| Canonical | ❌ Missing | Should be `/privacy` |
| OG/Twitter | ❌ Missing | None |
| H1 | ✅ Good | "Privacy Policy" |

### Blog Post — `app/blog/[slug]/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | `${post.title} | Trail of China` |
| Description | ✅ Good | Uses `post.description` |
| Canonical | ✅ Good | `/blog/${slug}` |
| OG | ✅ Good | Has title, desc, images, type=article |
| Twitter | ❌ Missing | No twitter meta |
| H1 | ✅ Good | `post.title` |
| Schema | ✅ Good | Has `BlogPosting` JSON-LD |
| Breadcrumb | ✅ Good | Has HTML breadcrumb (add schema too) |
| **Priority** | 🟢 Nice-to-have | Add Twitter card meta, `dateModified` in schema |

### Blog Hub — `app/blog/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ⚠️ Weak | "The Traveler's Journal" — no mention of "blog" or "China" |
| H1 | ⚠️ Weak | Same as title — "The Traveler's Journal" |
| Canonical | ❌ Missing | Should be `/blog` |
| OG/Twitter | ❌ Missing | None |
| **Priority** | 🟡 Important | Add canonical, OG, improve title to include "China Travel Blog" |

### Cookie Policy — `app/cookie-policy/page.tsx`
| Element | Status | Note |
|---------|--------|------|
| Title | ✅ Good | "Cookie Policy | Trail of China" |
| Description | ⚠️ Check | Verify it has a real description |
| Canonical | ❌ Missing | Should be `/cookie-policy` |
| Content | ⚠️ Thin | Verify it has >300 words of real content |

---

## Summary: Action Checklist

### Critical (Do First)
1. [ ] Create `app/sitemap.ts` with all static + dynamic routes
2. [ ] Add Organization JSON-LD to `app/layout.tsx`
3. [ ] Delete or `noindex` test pages: `plan-your-trip-v1/v2/v3`, `page-v2/`
4. [ ] Add `alternates.canonical` to ALL pages (create metadata helper)
5. [ ] Fix homepage title: include "China travel guide" or "first trip to China"
6. [ ] Add `robots: { index: false }` to `/interactive-map` until it has real content

### Important (Do Next)
7. [ ] Create a default OG image (1200×630) and add to root metadata + all pages
8. [ ] Replace all `picsum.photos` URLs with real, relevant images
9. [ ] Fix heading hierarchy on Beijing, Chengdu, Xi'an, Chongqing pages
10. [ ] Add `Article` / `TravelGuide` / `FAQPage` schema to destination and guide pages
11. [ ] Add `BreadcrumbList` schema wherever breadcrumbs exist
12. [ ] Add Twitter card meta to all pages (or rely on root fallback)
13. [ ] Fix blog hub title + add canonical + OG
14. [ ] Add canonicals to all deep guide sub-pages

### Nice-to-Have (Backlog)
15. [ ] Prepare hreflang setup for when `/de/` pages launch
16. [ ] Improve 404 page with navigation links
17. [ ] Add `dateModified` to blog JSON-LD
18. [ ] Add alt text to homepage hero (convert CSS bg to `<img>`)
19. [ ] Expand cookie policy to >300 words
20. [ ] Add `HowTo` schema to step-by-step guides (visa guide, budget guide)
