# China Basics UX Audit

**Date:** 2026-04-29
**Pages:** trailofchina.vercel.app/china-basics/what-apps-to-use/*
**Auditor:** Main agent (code analysis + screenshots)

---

## 1. Current State Summary

All 13 China Basics pages now use the shared `GuideArticlePage` component. This ensures consistency but also means they ALL share the same UX problems.

**Layout:** Breadcrumb → Category tag → Icon + Title → Intro text → Hero image → "Why you need this" → "Step-by-step setup" → Pro tips → Related articles → TOC sidebar (desktop)

---

## 2. Critical Problems

### 2.1 Template Looks Like Documentation, Not a Travel Guide

**What it feels like:** A technical manual. "Step-by-step setup guide" with numbered steps feels like installing software, not planning a trip.

**What it should feel like:** A friendly travel advisor saying "here's what you need to know, and here's the easiest way to do it."

**Evidence:**
- Category tag `WHAT APPS TO USE` in red — feels like a warning label
- `whyYouNeedThis` section with bullet points — reads like a product spec
- `setupSteps` with "STEP 1", "STEP 2" — reads like Ikea instructions
- No personality, no warmth, no "don't worry, it's easier than you think"

**How top sites do it:**
- **Lonely Planet**: Opens with a vivid scene ("Picture this: you're standing at a Shanghai food stall..."), then practical tips
- **Rick Steves**: Conversational tone, "Here's what I'd do" advice
- **The Points Guy**: Benefit-first headlines ("The easiest way to pay for everything in China")

### 2.2 No Visual Hierarchy or Scannability

**Problems:**
- Wall of text after wall of text — no visual breaks
- Bullet points all look the same — no distinction between "critical" and "nice to know"
- No callout boxes for key info (except proTips amber box, which is small)
- No "TL;DR" or quick summary at the top
- No progress indicator for multi-step setup guides

### 2.3 Zero Trust Signals on Article Pages

**Problems:**
- No "written by" or author attribution
- No "last updated" date visible
- No "tested by X travelers" or social proof
- No "read X times" or engagement indicators
- The trust bar only exists on the homepage — it's gone once you click into an article

### 2.4 CTA / Affiliate Links Are Missing or Weak

**Problems:**
- No contextual affiliate links anywhere on these pages
- No "Get eSIM →" button on internet pages
- No "Download VPN →" button on VPN page
- No "Get Alipay →" link on payment pages
- The whole monetization strategy is invisible
- Only CTA is the generic "Related Articles" at the bottom

### 2.5 Hero Image is a Placeholder

- All pages use `picsum.photos/seed/xxx/800/400` — random stock photos
- No app screenshots, no interface mockups, no real photos
- A page about WeChat Pay should show the WeChat Pay interface
- A page about VPN should show the app or a connection diagram

### 2.6 Mobile Experience is Poor

- TOC sidebar disappears on mobile (correct) but no alternative navigation
- Long articles with no way to jump between sections on mobile
- No sticky header or "back to top" button
- No bottom navigation CTA on mobile
- Text is readable but the overall feel is "scroll forever"

---

## 3. Section-by-Section Breakdown

### 3.1 Header / Breadcrumb

**Current:** `Home › China Basics › What Apps to Use › WeChat Pay`
**OK but:**
- Breadcrumb separator `›` is too small and light
- No "back to category" prominent button
- Category tag overlaps with breadcrumb visually

### 3.2 Category Tag + Title

**Current:** `WHAT APPS TO USE` (red, uppercase, tracked) + `💳 WeChat Pay in China: The Ultimate Foreigner's Guide`
**Problems:**
- Category tag in red (`text-china-red`) feels alarming — like an error message
- Title is too long and SEO-stuffed ("The Ultimate Foreigner's Guide")
- Icon (emoji) next to title is small and easy to miss

**Better:**
- Category tag in terracotta (`text-[#af5d32]`) — warm, not alarming
- Shorter, punchier title: "WeChat Pay for Travelers"
- Larger icon or app screenshot

### 3.3 Intro Paragraph

**Current:** One paragraph of text, `text-base leading-7`
**Problems:**
- Dense, no visual hook
- No "key takeaway" box or highlight
- Could use a "TL;DR" badge: "Foreigners can now link international Visa/Mastercard directly"

### 3.4 Hero Image

**Current:** Random picsum photo, `aspect-[2/1]`, rounded corners
**Problems:**
- Zero relevance to the topic
- Should show: app interface screenshot, a person using the app, or a relevant China scene
- For payment pages: show the payment QR code flow
- For VPN: show the app connection screen

### 3.5 "Why You Need This"

**Current:** Bullet list with `• ` prefix, plain text
**Problems:**
- All bullets have equal weight — no visual distinction
- Should use icons or checkmarks: ✅ or ⚡ for critical, 💡 for nice-to-know
- Consider a numbered "top 3 reasons" with bold highlights

### 3.6 Setup Steps

**Current:** Numbered steps with "STEP 1", "STEP 2" headings
**Problems:**
- "STEP 1" label feels cold and technical
- No visual progress (1 of 4, 2 of 4, etc.)
- No time estimate ("This takes about 5 minutes")
- No difficulty indicator
- Should use a horizontal stepper or timeline visual instead

### 3.7 Pro Tips

**Current:** Amber/yellow callout box
**Actually OK** — this is the best-designed element. But:
- Too small relative to the page
- Should be more prominent (sticky? floating?)
- Could add more tips (3-5 instead of 1-2)

### 3.8 Related Articles

**Current:** `RelatedArticles` component at the bottom
**Problems:**
- Easy to miss — user has scrolled past all content
- No contextual links within the article body
- Should add inline CTAs: "Also set up Alipay →" within the WeChat Pay article

---

## 4. Best Practice Comparison

| Feature | Lonely Planet | Rick Steves | The Points Guy | Trail of China |
|---------|--------------|-------------|----------------|----------------|
| Opening | Vivid scene | Conversational | Benefit headline | Dry intro ❌ |
| Tone | Warm, editorial | Personal, first-person | Professional, benefit-led | Technical ❌ |
| Images | Large, evocative | Personal photos | App screenshots | Random placeholders ❌ |
| CTAs | "Book here" buttons | Tour booking links | Affiliate buttons | None ❌ |
| Trust | Author byline | "Rick says..." | Writer + tested | Nothing ❌ |
| Scanning | Boxes, highlights, tips | "Rick's tips" sidebar | Pro/con boxes | Bullets only ❌ |
| Mobile | Excellent | Good | Good | OK but no nav ⚠️ |

---

## 5. Top 10 Improvements (Ranked by Impact × Effort)

| # | Improvement | Impact | Effort | Score |
|---|------------|--------|--------|-------|
| 1 | Add contextual CTAs/affiliate buttons per page | 🔴 Revenue | Medium | 10 |
| 2 | Replace category tag color: red → terracotta | 🟡 Visual | Low | 8 |
| 3 | Add "Key Takeaway" highlight box at top of article | 🔴 Scannability | Low | 9 |
| 4 | Add author byline + "Updated 2025" date | 🔴 Trust | Low | 9 |
| 5 | Replace "STEP 1/2/3" labels with timeline/stepper visual | 🟡 UX | Medium | 7 |
| 6 | Add inline "Also read →" links within article body | 🟡 Navigation | Low | 7 |
| 7 | Replace hero images with app screenshots/relevant photos | 🔴 Credibility | Medium | 8 |
| 8 | Add sticky mobile section nav (horizontal scroll chips) | 🟡 Mobile UX | Medium | 6 |
| 9 | Make pro tips box larger and more prominent | 🟡 Visual | Low | 6 |
| 10 | Add "time to complete" estimate on setup guides | 🟡 UX | Low | 5 |

---

## 6. Mockup Descriptions

### WeChat Pay Page (After Improvements)

**Header:**
- Breadcrumb in `text-[#1a3a4a]/50` with `→` separator
- Category tag: `PAYMENT · What Apps to Use` in terracotta
- Title: "WeChat Pay for Travelers" (shorter, punchy)
- Author line: "By Trail of China · Updated March 2025 · 8 min read"

**Key Takeaway Box:**
- Terracotta left border, cream background
- "✅ Foreigners can now link international Visa/Mastercard directly in WeChat Pay"
- One-line summary of the most important fact

**Why You Need This:**
- Icons instead of bullets: 🔒 Essential · 💳 Widely accepted · 🧧 Red envelopes
- Bold key phrase, rest in regular weight

**Setup Steps (as timeline):**
- Vertical timeline with terracotta dots
- Each step: time estimate ("~2 min"), title, description
- Progress indicator: "Step 1 of 4"

**Inline CTA after setup:**
- "Also set up Alipay →" button/link between sections

**Pro Tips:**
- Larger card, `border-l-4 border-[#af5d32]`
- 3-5 tips, each with emoji prefix

**Affiliate CTA:**
- "Need internet first? Get an eSIM →" contextual card before setup steps
- "Download a VPN before arriving →" contextual card for VPN page

**Bottom:**
- Related articles + "Was this helpful?" feedback prompt