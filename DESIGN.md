# Trail of China - Design System

## Source of Truth
- `styles/theme.css` for design tokens
- `app/globals.css` for global look-and-feel rules
- Reference: https://www.trailofchina.com/

---

## Brand Direction

- **Feel:** Warm, editorial, calm, premium, and practical
- **Audience:** First-time international travelers planning a China trip
- **Goal:** Reduce stress, create clarity, feel trustworthy
- **Avoid:** Flashy, corporate, or overly playful UI styles

---

## Color System

### Primary Tokens (from `styles/theme.css`)

```css
--background: #f5f1ea           /* Warm cream background */
--background-strong: #ebe4d8    /* Darker warm background */
--surface: rgba(255, 252, 247, 0.86)  /* Translucent surface */
--surface-strong: #fffaf3       /* Solid cream surface */
--foreground: #1f2933           /* Dark text */
--muted: #5d6a73                /* Muted/secondary text */
--line: rgba(31, 41, 51, 0.1)   /* Subtle borders */
--accent: #af5d32               /* Terracotta accent */
--accent-strong: #8f431c        /* Darker terracotta */
--accent-soft: rgba(175, 93, 50, 0.12)  /* Subtle accent bg */
```

### Usage Guidelines

| Token | Usage |
|-------|-------|
| `--background` | Main page background |
| `--surface` | Cards, panels, elevated surfaces |
| `--foreground` | Primary text, headings |
| `--muted` | Secondary text, captions |
| `--accent` | CTAs, links, highlights, active states |
| `--line` | Borders, dividers |

### Color Principles

- ✅ **DO:** Use warm neutrals as base
- ✅ **DO:** Use terracotta accent sparingly
- ❌ **AVOID:** Bright, cold, or neon colors
- ❌ **AVOID:** Cold blue-heavy palettes
- ❌ **AVOID:** Harsh black-and-white contrast

---

## Typography

### Font Strategy

- **Body:** System sans-serif stack (from `app/globals.css`)
- **Headings:** `.font-serif` for editorial travel feel
- **Feel:** Elegant, readable, never condensed

### Type Scale

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| Hero | text-4xl (36px) | font-bold | Main page titles |
| H1 | text-3xl (30px) | font-semibold | Section headings |
| H2 | text-2xl (24px) | font-semibold | Card titles |
| H3 | text-xl (20px) | font-semibold | Subsection titles |
| Body | text-base (16px) | normal | Paragraphs |
| Small | text-sm (14px) | normal | Captions, meta |

### Typography Principles

- Keep line lengths comfortable
- Avoid dense text blocks
- Use generous line-height (`leading-relaxed`)

---

## Surfaces and Effects

### Utility Classes (from `app/globals.css`)

| Class | Usage |
|-------|-------|
| `.glass-panel` | Translucent, elevated surfaces |
| `.section-shell` | Main card/section treatment |
| `.accent-ring` | Emphasized buttons, key interactive elements |

### Surface Principles

- Prefer **subtle blur** and layered backgrounds
- Use **soft shadows** from token system
- Preserve **gradient/radial page atmosphere**
- Avoid stark blocks of color

---

## Components

### Cards

```
Background: var(--surface) or var(--surface-strong)
Border Radius: rounded-2xl (generous rounding)
Padding: p-6 to p-8 (roomy)
Shadow: Soft, from token system
Border: Subtle or none
```

**Feel:** Roomy, generous padding, rounded corners, soft

### Buttons

**Primary:**
```
Background: var(--accent)
Text: white
Border Radius: rounded-full or rounded-xl (friendly)
Padding: px-6 py-3
Hover: var(--accent-strong)
```

**Secondary:**
```
Background: transparent or var(--surface)
Border: 1px solid var(--line)
Text: var(--foreground)
```

### Navigation

```
Background: Translucent/glass effect
Position: Sticky top
Height: h-16 to h-20
Links: Elegant, simple, slightly translucent
Mobile: Hamburger with glass panel
```

### Section Spacing

- **Section Padding:** py-16 to py-24 (open, breathable)
- **Container:** max-w-5xl to max-w-6xl
- **Element Spacing:** gap-6 to gap-8

---

## Layout

### Grid System

- **Desktop:** 2-3 column grids for cards
- **Tablet:** 2 columns
- **Mobile:** 1 column, clean stacking

### Container Widths

- **Content:** max-w-3xl (text-heavy pages)
- **Sections:** max-w-5xl to max-w-6xl (mixed content)
- **Full:** Full width with internal padding

### Responsive Breakpoints

- **Mobile:** Default (< 640px)
- **Tablet:** `md:` (640px+)
- **Desktop:** `lg:` (1024px+)
- **Wide:** `xl:` (1280px+)

---

## Interaction Style

### Transitions

```css
transition: all 0.2s ease-out;
```

- **Speed:** Soft and quick (200ms)
- **Easing:** ease-out
- **Feel:** Not flashy, gentle

### Hover States

- **Cards:** Lift slightly (translateY -2px), subtle shadow increase
- **Buttons:** Darken to `--accent-strong`
- **Links:** Color shift to accent

### Disabled States

- Keep elegant and clearly inactive
- Reduce opacity (opacity-50)
- Maintain rounded shapes

---

## Content Presentation

### Principles

- Practical, reassuring, easy to follow
- Clear hierarchy and structured sections
- Support travel planning confidence
- Avoid high-pressure conversion tactics

### Section Structure

1. **Hero:** Warm background, serif heading, clear CTA
2. **Content Cards:** Glass/surface treatment, generous spacing
3. **FAQs:** Collapsible, soft borders, warm backgrounds
4. **CTAs:** Accent color, rounded, friendly

---

## Do and Don't

### ✅ DO

- Reuse existing theme tokens
- Keep visual consistency with homepage
- Maintain warm, premium, editorial aesthetic
- Design mobile-first
- Use serif fonts for headings
- Keep layouts airy and spacious
- Use rounded shapes generously
- Add subtle depth through blur and soft shadows

### ❌ AVOID

- Cold blue-heavy palettes
- Harsh black-and-white contrast
- Boxy SaaS-style dashboards
- Overly playful illustrations
- Dense layouts with little spacing
- Purple-heavy default AI patterns
- Neon or bright accent colors
- Sharp, hard-edged UI

---

## Implementation Files

| File | Purpose |
|------|---------|
| `styles/theme.css` | CSS variables and tokens |
| `app/globals.css` | Global styles, utilities |
| `app/layout.tsx` | Root layout, fonts |
| `app/page.tsx` | Homepage implementation |
| `components/` | Reusable components |

---

## Quality Checklist

Before committing design changes:

- [ ] Colors use theme tokens (warm neutrals, terracotta accent)
- [ ] Headings use serif font
- [ ] Cards have generous padding and rounded corners
- [ ] Background is warm cream (`#f5f1ea`)
- [ ] Surfaces use glass/translucent effects
- [ ] All hover states work smoothly
- [ ] Mobile responsive and clean
- [ ] Build passes (`npm run build`)
- [ ] No harsh contrasts or cold colors
- [ ] Layouts feel airy and breathable

---

## Current Status

**Phase B: Design Implementation**
- ✅ Color tokens extracted from reference
- ✅ Typography system defined
- ✅ Component patterns documented
- 🔄 Implementation in progress

Last updated: 2026-04-21
