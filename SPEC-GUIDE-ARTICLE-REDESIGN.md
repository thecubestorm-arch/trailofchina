# Guide Article Redesign Spec

## Goal

Redesign [`components/GuideArticlePage.tsx`](/data/.openclaw/workspace/trailofchina/components/GuideArticlePage.tsx) so China Basics articles feel like the editorial blog experience in [`app/blog/[slug]/page.tsx`](/data/.openclaw/workspace/trailofchina/app/blog/[slug]/page.tsx), not like boxed product documentation.

This spec is only for the shared guide template and its content treatment. Keep the existing right-side TOC layout. The goal is not to make guide pages identical to blog pages, but to borrow the same visual grammar:

- serif-led editorial headings
- larger, calmer body text
- fewer borders and containers
- more whitespace between sections
- prose-style rendering instead of utility-heavy card stacks
- terracotta accents used sparingly and intentionally

---

## Files Reviewed

- [`app/blog/[slug]/page.tsx`](/data/.openclaw/workspace/trailofchina/app/blog/[slug]/page.tsx)
- [`components/GuideArticlePage.tsx`](/data/.openclaw/workspace/trailofchina/components/GuideArticlePage.tsx)
- [`app/china-basics/what-apps-to-use/alipay/page.tsx`](/data/.openclaw/workspace/trailofchina/app/china-basics/what-apps-to-use/alipay/page.tsx)
- [`app/china-basics/what-apps-to-use/vpn/page.tsx`](/data/.openclaw/workspace/trailofchina/app/china-basics/what-apps-to-use/vpn/page.tsx)
- [`app/china-basics/what-apps-to-use/wechat-pay/page.tsx`](/data/.openclaw/workspace/trailofchina/app/china-basics/what-apps-to-use/wechat-pay/page.tsx)
- [`app/china-basics/what-apps-to-use/maps/page.tsx`](/data/.openclaw/workspace/trailofchina/app/china-basics/what-apps-to-use/maps/page.tsx)
- [`lib/blog-data.ts`](/data/.openclaw/workspace/trailofchina/lib/blog-data.ts)
- [`components/RelatedArticles.tsx`](/data/.openclaw/workspace/trailofchina/components/RelatedArticles.tsx)
- [`components/ShareButtons.tsx`](/data/.openclaw/workspace/trailofchina/components/ShareButtons.tsx)

---

## Executive Summary

The blog page looks good because it behaves like an article. The guide template looks bad because it behaves like a documentation dashboard.

The main issue is not color alone. It is the repeated combination of:

- heavy `card-base` wrappers
- repeated `border border-slate-200 bg-slate-50`
- small `text-sm` body copy
- all-caps red step labels
- bullet lists rendered as raw `•` text
- compressed spacing between sections

The redesign should replace “many boxed modules” with “one editorial flow with occasional accents.”

---

## 1. Side-by-Side Comparison

| Element | Blog Page: Good | GuideArticlePage: Current | Change Required |
|---|---|---|---|
| Overall feel | Clean editorial article | Boxed documentation sheet | Remove most card framing and let content breathe |
| Heading typography | `font-serif`, bold, dark teal, large scale | Sans, `font-black`, aggressive weight | Move primary headings to serif and reduce heaviness |
| Body copy | `text-lg`, relaxed leading, readable paragraph width | Mostly `text-sm` or `md:text-base`, dense | Increase to `text-base/md:text-lg`, `leading-8` style rhythm |
| Section rhythm | Spacious `mt-10`, `mb-4`, `my-8` | Tighter, repetitive box spacing | Increase vertical spacing across all sections |
| Lists | Markdown-style `ul/ol` with real markers | Manual `•` characters in plain text | Render semantic lists with spacing and custom markers |
| Step treatment | Editorial flow, no alarming labels | Red `STEP 1/2/3`, slate boxes, borders | Replace with quiet timeline layout and terracotta accents |
| Accent color use | Controlled terracotta links, blockquote border, category label | Red used as warning/status color | Shift to terracotta as refinement accent, not alert color |
| Divider language | `hr` with `border-[#ebe4d8]` | Few soft dividers; mostly hard containers | Introduce subtle section separators where needed |
| Rich text styling | `ReactMarkdown` custom components | Raw JSX sections and box wrappers | Add prose-like wrappers / reusable section typography classes |
| Meta integration | Date, reading time, share buttons sit naturally near title | Meta is acceptable but separate and lighter-weight than content | Keep but integrate more gracefully under title |
| Related content | Clean dividing lines and serif article titles | Pills or box containers | Present related links with soft dividers and editorial titles |

---

## 2. What Makes the Blog Page Work

### 2.1 Serif hierarchy

The blog page uses serif headings for `h1`, `h2`, `h3`, `h4`. That immediately changes the tone from product UI to magazine/travel editorial.

Relevant patterns in [`app/blog/[slug]/page.tsx`](/data/.openclaw/workspace/trailofchina/app/blog/[slug]/page.tsx):

- `font-serif text-3xl md:text-4xl font-bold` for `h1`
- `font-serif text-2xl md:text-3xl font-bold` for `h2`
- `font-serif text-xl md:text-2xl font-bold` for `h3`

### 2.2 Large intro and comfortable paragraph rhythm

The blog description uses:

- `text-lg`
- muted but readable color
- `leading-relaxed`
- generous margin below

The guide template currently keeps too much copy at `text-sm`, which instantly makes the page feel technical and cramped.

### 2.3 Accents instead of containers

The blog page uses structure through:

- typography
- spacing
- subtle divider rules
- terracotta links
- left-border blockquotes

It does not rely on “put every concept into its own bordered rounded rectangle.”

### 2.4 Markdown-style rendering

The blog content is readable because every content type has a consistent typographic treatment:

- paragraphs
- headings
- ordered/unordered lists
- links
- `hr`
- `blockquote`

GuideArticlePage needs that same editorial system even if it still renders structured props.

### 2.5 Integrated metadata

The category, date, reading time, and share buttons are treated as part of the article header, not as standalone widgets. This makes the page feel authored.

---

## 3. What Makes GuideArticlePage Feel Bad

### 3.1 Too many boxes

Current offenders in [`components/GuideArticlePage.tsx`](/data/.openclaw/workspace/trailofchina/components/GuideArticlePage.tsx):

- `whyYouNeedThis` wrapped in `card-base`
- `setupSteps` wrapped in `card-base`
- each step wrapped again in `rounded-xl border border-slate-200 bg-slate-50`
- `proTips` wrapped in amber border box
- `related` wrapped in `card-base`
- `quickInfo` rendered as another slate bordered chip box

This creates visual fatigue and makes everything feel equally important.

### 3.2 Alarm-style red labels

`text-china-red` on `STEP 1`, `STEP 2`, `STEP 3` reads like warning UI, not travel guidance. The all-caps labels also add a procedural, bureaucratic tone.

### 3.3 Bureaucratic slate surfaces

The repeated use of:

- `bg-slate-50`
- `border-slate-200`

produces a sterile product-docs feel. It clashes with the warmer, more editorial palette used on the blog.

### 3.4 Small text everywhere

Many guide sections default to:

- `text-sm`
- `md:text-base`

That is too small for long-form reading and forces the page to feel dense.

### 3.5 Manual bullets

Rendering list items as text prefixed with `•` makes them feel improvised and visually weak. Real list spacing and custom markers are needed.

---

## 4. Blog Data Implication

[`lib/blog-data.ts`](/data/.openclaw/workspace/trailofchina/lib/blog-data.ts) stores blog content as markdown strings with a strong article-like structure:

- multiple heading levels
- paragraphs
- ordered and unordered lists
- inline links
- bold emphasis

That structure is exactly why the blog can feel clean: content is interpreted through a consistent prose system.

GuideArticlePage should borrow that same principle:

- create reusable “article prose” classes for all structured props
- stop styling each prop block as a separate card
- use content semantics first, containers second

---

## 5. Required Changes in `GuideArticlePage.tsx`

## 5.1 Top-level container and article rhythm

### Current

- `section className="mx-auto py-12 md:py-16"`
- content inside plain flow, but broken by box components

### Required

Use an article-like content wrapper with stronger vertical rhythm.

Suggested direction:

- keep page width and TOC structure
- change main content column to feel like article body
- increase base spacing between sections from roughly `mt-8/10` to `mt-12/14`

Suggested class direction:

- section: `mx-auto py-12 md:py-16`
- inner article rhythm: add a wrapper like `max-w-none text-[#1a3a4a]`
- children wrapper: move toward `space-y-12 md:space-y-14` instead of `space-y-8`

---

## 5.2 Category tag + Title

### Status

This is already the strongest part of the template and is “ok-ish,” as noted.

### Current problems

- `h1` is sans and overly heavy: `text-4xl font-black tracking-tight text-slate-900 md:text-5xl`
- icon alignment is acceptable, but title styling is harsher than the blog

### Required change

Shift the title to the same editorial family as the blog.

Replace title styling direction with:

- `font-serif`
- `font-bold`
- `text-[#1a3a4a]`
- `leading-tight`
- `text-4xl md:text-5xl`

Suggested class replacement for `h1`:

```tsx
className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[#1a3a4a]"
```

Keep category label close to current blog styling:

- `text-xs`
- uppercase
- tracking `[0.2em]`
- terracotta color

Meta line under title should remain understated:

- `text-sm text-[#5d6a73]`

Optional refinement:

- include share buttons inline under meta later if desired
- no need to force this into the first pass if only `GuideArticlePage.tsx` changes

---

## 5.3 Intro paragraph

### Current

```tsx
className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg"
```

### Problem

It is not bad in isolation, but it still sits too tightly under the title and lacks the calm, oversized intro feel of the blog.

### Required change

Make intro read like the blog description:

- more top spacing
- slightly larger text
- warmer muted color
- wider line height
- more bottom spacing before hero / next section

Suggested class direction:

```tsx
className="mt-6 text-lg md:text-xl leading-8 text-[#5d6a73] max-w-3xl"
```

If `hook` or `quickInfo` remains above the fold, ensure intro still has enough separation.

---

## 5.4 Hero image

### Current

```tsx
className="mt-8 mb-8 h-48 w-full rounded-2xl object-cover md:h-64"
```

### Problem

The image itself is fine. It just lands inside a tighter, boxy environment.

### Required change

Keep the image but give it more breathing room around it.

Suggested class direction:

```tsx
className="mt-10 mb-10 h-56 md:h-80 w-full rounded-2xl object-cover"
```

No border needed.

---

## 5.5 Key takeaway

### Current

This is the closest existing pattern to the blog aesthetic:

```tsx
className="mt-6 rounded-xl border-l-4 border-[#af5d32] bg-[#fcfaf6] px-5 py-4"
```

### Keep, but refine

This should stay as one of the few emphasized content moments.

Required refinements:

- keep terracotta left border
- remove any “alert” feeling
- slightly increase vertical padding
- body text should feel like highlighted prose, not a status message

Suggested class direction:

```tsx
className="mt-8 border-l-4 border-[#af5d32] bg-[#fcfaf6] px-6 py-5"
```

Text direction:

```tsx
className="text-base md:text-lg leading-8 text-[#1a3a4a]"
```

Prefer removing the visible checkmark if it feels too UI-like. The border is enough.

---

## 5.6 `whyYouNeedThis`

### Current

```tsx
<div className="mt-10 card-base">
  <h2 className="text-2xl font-extrabold text-slate-900">Why you need this</h2>
  <ul className="mt-4 space-y-3">
    <li className="text-sm leading-relaxed text-slate-700 md:text-base">• ...</li>
  </ul>
</div>
```

### Problem

This section is structurally useful but visually poor:

- `card-base` adds unnecessary framing
- the bullets are plain text
- body size is too small
- heading tone is too UI-heavy

### Required transformation

Remove the card entirely. Treat this section like a clean editorial sub-section with a serif heading and a soft list.

New treatment:

- no outer border/background
- `h2` in serif
- list items as semantic `ul > li`
- use either checkmarks or small terracotta dots
- larger copy and more spacing between items

Suggested class direction:

Section wrapper:

```tsx
className="mt-12 border-t border-[#ebe4d8] pt-10"
```

Heading:

```tsx
className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a]"
```

List:

```tsx
className="mt-6 space-y-4"
```

List item:

```tsx
className="flex items-start gap-3 text-base md:text-lg leading-8 text-[#1a3a4a]"
```

Marker options:

- preferred: small terracotta check or dot
- avoid red warning color

Mockup intent:

- a clean heading
- a vertical list of reasons
- each reason reads like a short editorial paragraph
- no enclosing box

---

## 5.7 `setupSteps`

### Current

```tsx
<div className="mt-8 card-base">
  <h2 className="text-2xl font-extrabold text-slate-900">Step-by-step setup guide</h2>
  <ol className="mt-5 space-y-4">
    <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 1</p>
      <h3 className="mt-1 text-lg font-extrabold text-slate-900">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">{step.description}</p>
    </li>
  </ol>
</div>
```

### Problem

This is the biggest source of the “documentation, not travel guide” feeling.

Problems:

- boxed group inside boxed items
- slate panels everywhere
- red all-caps labels
- title and body scale too small
- every step has identical visual weight

### Required transformation

Convert to a clean timeline/editorial sequence.

Recommended structure:

- no outer `card-base`
- serif `h2`
- each step is a row
- left side: subtle terracotta dot or numbered circle
- right side: step title + paragraph
- optional faint vertical rule connecting steps
- no slate background panels

Do not use:

- `text-china-red`
- `bg-slate-50`
- `border-slate-200`
- “STEP 1” labels

Suggested class direction:

Section wrapper:

```tsx
className="mt-12 border-t border-[#ebe4d8] pt-10"
```

Heading:

```tsx
className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a]"
```

List:

```tsx
className="mt-8 space-y-8"
```

Each item:

```tsx
className="grid grid-cols-[auto_1fr] gap-4 md:gap-6"
```

Marker column:

- small terracotta circle, or a soft number in serif
- optional vertical connector in `#ebe4d8`

Title:

```tsx
className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a]"
```

Description:

```tsx
className="mt-2 text-base md:text-lg leading-8 text-[#1a3a4a]"
```

If numbering is shown, preferred label style is:

- `1`
- `2`
- `3`

Not:

- `STEP 1`
- `STEP 2`

Mockup intent:

- reads like a calm itinerary or guided walkthrough
- each step feels part of one story
- the accent is the timeline, not a repeated card

---

## 5.8 `proTips`

### Current

```tsx
<div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
  <h2 className="text-xl font-black text-slate-900">Pro Tips</h2>
  <ul className="mt-3 space-y-2">
```

### Problem

This is still a callout box. It is slightly softer than the slate cards, but it still feels like UI chrome rather than article styling.

### Required transformation

Turn `proTips` into a blockquote-style editorial aside, borrowing directly from the blog’s blockquote treatment.

Recommended structure:

- no full amber bordered box
- use a terracotta left border
- optional pale warm background only if necessary
- title can be subtle, not oversized
- tips rendered as short stacked prose lines

Suggested class direction:

Wrapper:

```tsx
className="mt-12 border-l-4 border-[#af5d32] pl-5 md:pl-6"
```

Optional background:

```tsx
bg-[#fcfaf6] py-1
```

Heading:

```tsx
className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a]"
```

List:

```tsx
className="mt-4 space-y-3"
```

Tip text:

```tsx
className="text-base md:text-lg leading-8 text-[#5d6a73]"
```

Mockup intent:

- feels like the author leaning in to give seasoned advice
- visually distinct without becoming another card

---

## 5.9 `quickInfo`

### Current

```tsx
className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-600"
```

### Problem

Useful content, wrong presentation. It looks like a filter bar or dashboard chip group.

### Required transformation

Either:

1. keep it as an understated inline metadata row under intro, or
2. render as a soft horizontal facts list separated by dots

Best option for editorial feel:

- remove border and box background
- keep small accent dots or separators
- text in muted tone

Suggested class direction:

```tsx
className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:text-base text-[#5d6a73]"
```

Marker:

```tsx
className="inline-block h-1.5 w-1.5 rounded-full bg-[#af5d32]"
```

---

## 5.10 Hook / alert-style section

### Current

`hook` is rendered as:

```tsx
className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5"
```

### Problem

This uses warning/error language, which fights the editorial tone.

### Required transformation

If `hook` remains in the template:

- remove red background and border
- restyle as a strong intro note or pull-quote
- use terracotta left border or larger italic serif sentence

Suggested class direction:

```tsx
className="mt-8 border-l-4 border-[#af5d32] pl-5"
```

Text:

```tsx
className="text-base md:text-lg leading-8 text-[#1a3a4a]"
```

---

## 5.11 `children` content area

### Current

Children are dropped into:

```tsx
<div className="mt-10 space-y-8">
  {children}
</div>
```

### Problem

Pages like Alipay and VPN then add their own internal boxes, producing inconsistent results.

### Required transformation

GuideArticlePage should establish a stronger article prose contract for custom children:

- larger default section spacing
- serif `h2/h3`
- paragraph defaults closer to blog
- subtle `hr` language available through utility conventions

Even without converting children to `ReactMarkdown`, the template can encourage a prose-like rhythm by wrapping children in a class ecosystem such as:

- `guide-article-content`
- or utility wrapper with consistent heading/paragraph styles if using Tailwind classes directly

At minimum:

```tsx
className="mt-12 space-y-12"
```

The spec should also note that page-level content like [`app/china-basics/what-apps-to-use/alipay/page.tsx`](/data/.openclaw/workspace/trailofchina/app/china-basics/what-apps-to-use/alipay/page.tsx) still contains many `card-base`, `border-slate-200`, and red step patterns. Those pages will need follow-up cleanup after the shared component is redesigned.

---

## 5.12 Related links and related articles

### Current

`relatedArticles` already uses a cleaner divider-based style via [`components/RelatedArticles.tsx`](/data/.openclaw/workspace/trailofchina/components/RelatedArticles.tsx). `related` in `GuideArticlePage.tsx` still uses `card-base` and bordered pills.

### Required transformation

Use the `RelatedArticles` style as the model.

For `related`:

- remove `card-base`
- add a top divider
- heading in serif or small uppercase editorial label
- present links in a simple flow with soft separators or understated pills without borders

Preferred approach:

- heading label similar to “You Might Also Like”
- stack or wrap links more lightly
- avoid outlined chips with `border-slate-300`

Suggested class direction for wrapper:

```tsx
className="mt-12 pt-8 border-t border-[#ebe4d8]"
```

If pills remain, soften them:

- `bg-[#f5f1ea]`
- no border
- muted text
- terracotta hover

Better still:

- a divided link list matching `RelatedArticles`

---

## 6. Typography Spec

These should become the default visual system for `GuideArticlePage.tsx`.

### H1

- `font-serif`
- `text-4xl md:text-5xl`
- `font-bold`
- `leading-tight`
- `text-[#1a3a4a]`

### H2

- `font-serif`
- `text-2xl md:text-3xl`
- `font-bold`
- `text-[#1a3a4a]`
- `mb-4`

### H3

- `font-serif`
- `text-xl md:text-2xl`
- `font-bold`
- `text-[#1a3a4a]`

### Intro paragraph

- `text-lg md:text-xl`
- `leading-8`
- `text-[#5d6a73]`
- max width around `max-w-3xl`

### Body paragraphs

- `text-base md:text-lg`
- `leading-8`
- `text-[#1a3a4a]`

### Secondary/meta text

- `text-sm`
- `text-[#5d6a73]`

### Lists

- `space-y-3` or `space-y-4`
- semantic bullets or custom markers
- never manual `•` prefixes

### Dividers

- `border-[#ebe4d8]`
- use as top separators between major sections
- avoid heavy framed boxes

---

## 7. Section-by-Section Mockup Description

## 7.1 Header area

What it should feel like:

- breadcrumb above, quiet and unobtrusive
- small terracotta category label
- large serif title
- muted meta line with date/update/read time
- optional share actions integrated just below, not visually dominant
- intro paragraph that reads like a magazine standfirst

## 7.2 Hero image

What it should feel like:

- one calm visual break after the intro
- rounded image with generous space above and below
- not treated as a card

## 7.3 Key takeaway

What it should feel like:

- one short highlighted note from the editor
- terracotta left rule
- warm paper-like background
- not a warning, not a system message

## 7.4 Why you need this

What it should feel like:

- a thoughtful section in the article, not a feature list card
- serif heading
- four to six clean reasons, each with a subtle marker
- plenty of space between items

## 7.5 Step-by-step setup guide

What it should feel like:

- editorial timeline
- calm numeric wayfinding
- each step is title + paragraph, not a mini card
- subtle vertical connector or dot system in terracotta and `#ebe4d8`

## 7.6 Pro tips

What it should feel like:

- a seasoned traveler’s aside in the margin
- blockquote energy
- terracotta left border
- soft, slightly muted text

## 7.7 Related content

What it should feel like:

- a quiet closing section
- soft divider line
- serif article links or understated warm pills
- no dashboard-like box

---

## 8. Concrete Tailwind Changes Summary

These are the main class-level changes to make in [`components/GuideArticlePage.tsx`](/data/.openclaw/workspace/trailofchina/components/GuideArticlePage.tsx).

### Replace / remove

- remove `card-base` from `whyYouNeedThis`
- remove `card-base` from `setupSteps`
- remove `card-base` from `related`
- remove `border border-slate-200 bg-slate-50` from step items
- remove `text-china-red` step labels
- remove manual `•` prefixes from list text
- remove `border border-amber-200 bg-amber-50` from `proTips`
- remove `border border-red-200 bg-red-50` from `hook`
- reduce dependence on `text-sm` for long-form content

### Add / shift toward

- add `font-serif` to `h1`, `h2`, `h3`
- add `text-[#1a3a4a]` and `text-[#5d6a73]` editorial palette usage
- add `border-t border-[#ebe4d8]` between major sections
- add `border-l-4 border-[#af5d32]` for select callouts
- add `text-base md:text-lg leading-8` for long-form body copy
- add `space-y-8` or `space-y-12` for list/section rhythm
- use warm neutral surfaces like `bg-[#fcfaf6]` only sparingly

---

## 9. Implementation Notes

### Scope for this redesign

Primary target:

- [`components/GuideArticlePage.tsx`](/data/.openclaw/workspace/trailofchina/components/GuideArticlePage.tsx)

Keep unchanged:

- TOC layout and right-side navigation structure

### Important follow-up note

Several pages, especially [`app/china-basics/what-apps-to-use/alipay/page.tsx`](/data/.openclaw/workspace/trailofchina/app/china-basics/what-apps-to-use/alipay/page.tsx) and [`app/china-basics/what-apps-to-use/vpn/page.tsx`](/data/.openclaw/workspace/trailofchina/app/china-basics/what-apps-to-use/vpn/page.tsx), hardcode their own boxy patterns inside `children`.

That means:

1. redesigning `GuideArticlePage.tsx` will improve all prop-driven guide pages immediately
2. custom-child pages will still need a second pass to remove local `card-base`, `border-slate-200`, and red step UI

### Best architectural direction

Longer-term, GuideArticlePage should move closer to the blog content model:

- either accept richer markdown-like content blocks
- or expose reusable editorial subcomponents for:
  - section
  - list
  - timeline step
  - pull quote
  - aside

That would prevent each page from reinventing a box-heavy layout.

---

## 10. Success Criteria

The redesign is successful if, after implementation:

- guide pages feel like travel editorials, not internal docs
- headings visually align with the blog through serif typography
- long-form text reads comfortably on desktop and mobile
- there are far fewer borders and boxed surfaces
- setup steps feel calm and narrative rather than technical and alarming
- pro tips feel like an aside, not a warning box
- related content closes the page softly
- the TOC remains intact and useful

