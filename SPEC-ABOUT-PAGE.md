# SPEC: About Page — 3 Versions

## Goal
Create 3 distinct About page variants for Trail of China so Sascha can compare and pick the best direction.

## Routes
- `/about-v1` → Story-driven, personal narrative
- `/about-v2` → Credibility-focused, stats + expertise
- `/about-v3` → Minimal editorial, clean magazine style

## Company Info (use in all versions)
- **Brand:** Trail of China
- **Company:** BuetikoferDigital, Zurich, Switzerland
- **Responsible Person:** BuetikoferDigital
- **Email:** buetikoferdigital@gmail.com
- **Mission:** Help Western tourists navigate China confidently — from first visa to last dim sum
- **Why trust us:** 4+ trips to China, family connections in Beijing & Shanghai, speaks Mandarin, local contacts across the country
- **Target audience:** First-time Western travelers to China (EU, Americas)
- **Based in:** Zurich, Switzerland (nDSG/GDPR compliant)

## Design System (MUST follow)
- Terracotta: #af5d32
- Cream: #f5f1ea
- Dark teal: #1a3a4a
- Muted: #64748b
- Surface: rgba(255,252,247,0.86)
- CSS variables: --foreground, --muted, --surface, --primary, --line, --background
- Serif headings (font-serif), sans-serif body
- ChineseWatermark component with 旅 character (opacity 0.04-0.06)
- max-w-6xl container
- Match existing Bund-style page aesthetic

## Version Details

### V1 — Story-Driven
- Personal narrative tone, warm and inviting
- Hero section with large heading like "We Fell in Love with China — So You Can Too"
- Storytelling sections: First Trip → What We Learned → Why We Built This
- Blockquote tips with terracotta left border
- ChineseWatermark overlay
- CTA at bottom: "Start Planning Your Trip" → links to /plan-your-trip
- Feels like reading a travel magazine feature

### V2 — Credibility-Focused
- Trust-forward, data and expertise centered
- Hero: "Why Trail of China?" with subtitle about expertise
- Stats/credentials sections with icon-like markers: 4+ trips, family in China, Mandarin speaker, local contacts
- "What We Cover" grid: practical topics (visas, internet, payments, trains)
- Testimonial-style quotes (placeholder for now)
- CTA: "Plan Your China Trip" → /plan-your-trip
- More structured, scannable — for skeptical first-timers

### V3 — Minimal Editorial
- Ultra-clean, magazine-style, short and confident
- Hero: "Trail of China" with one-line tagline
- Brief sections with generous whitespace
- No fluff — just who we are, what we do, why it works
- Minimal ChineseWatermark
- Small footer-style CTA
- For users who hate long pages and just want the gist

## Technical Requirements
- Each version is a standalone page.tsx under `app/about-v1/`, `app/about-v2/`, `app/about-v3/`
- Use `"use client"` where needed (ChineseWatermark)
- Must build without errors (`npx next build`)
- Responsive (mobile-first)
- Link back to home, plan-your-trip, and other key pages
- No placeholder images — use colored backgrounds/gradients instead of picsum
- Use next/link for all internal links

## File Structure
```
app/about-v1/page.tsx
app/about-v2/page.tsx
app/about-v3/page.tsx
```

## After Build
- Run `rm -rf .next && NODE_OPTIONS='--max-old-space-size=4096' npx next build` to verify
- Commit all 3 versions in one commit