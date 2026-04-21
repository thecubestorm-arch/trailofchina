# Trail of China - Design System

## Source
Cloned from: https://www.trailofchina.com/

## Color Palette

### Primary Colors
- **Primary Accent:** `#dc2626` (Red-600) - CTA buttons, links, accents
- **Primary Hover:** `#b91c1c` (Red-700) - Button hover states
- **Background Primary:** `#fafafa` (Gray-50) - Main page background
- **Background Card:** `#ffffff` (White) - Card backgrounds

### Text Colors
- **Text Primary:** `#171717` (Gray-900) - Headings
- **Text Secondary:** `#404040` (Gray-700) - Body text
- **Text Muted:** `#737373` (Gray-500) - Captions, meta text
- **Text Light:** `#a3a3a3` (Gray-400) - Subtle text

### Accent Colors
- **Amber/Warm:** `#f59e0b` - Warning highlights, pro tips
- **Border:** `#e5e5e5` (Gray-200) - Card borders, dividers

## Typography

### Font Family
- **Primary:** System UI font stack (`system-ui, -apple-system, sans-serif`)
- **No custom webfonts** - Uses system fonts for performance

### Type Scale
- **Hero H1:** `text-4xl` (36px) / `font-bold` / `tracking-tight`
- **Section H2:** `text-3xl` (30px) / `font-semibold`
- **Card H3:** `text-xl` (20px) / `font-semibold`
- **Body:** `text-base` (16px) / `leading-relaxed`
- **Small/Caption:** `text-sm` (14px)

## Layout

### Container
- **Max Width:** `max-w-4xl` (896px) for content
- **Padding:** `px-4` mobile, `px-6` desktop
- **Section Spacing:** `py-12` (48px) vertical padding

### Grid System
- **Destination Cards:** 2-column grid on mobile, 3-column on desktop
- **FAQ Cards:** Single column, stacked
- **Spacing:** `gap-6` (24px) between cards

## Components

### Feature Cards (Destinations)
```
- Background: white
- Border: 1px solid gray-200
- Border Radius: rounded-xl
- Padding: p-6
- Hover: border-red-500, shadow-lg transition
- Structure: Icon + Title + Description
```

### FAQ Cards
```
- Background: gray-50
- Border Radius: rounded-lg
- Padding: p-6
- Title: font-semibold text-lg
- Content: text-gray-700
```

### Section Intro
```
- Centered text
- Max width: max-w-2xl
- Spacing: mb-12
- Title: text-3xl font-semibold
- Subtitle: text-lg text-gray-600
```

### Buttons
```
Primary:
- Background: bg-red-600
- Text: text-white
- Padding: px-8 py-3
- Border Radius: rounded-lg
- Hover: bg-red-700
- Font: font-semibold
```

### Navigation
```
- Background: white
- Border Bottom: border-gray-200
- Height: h-16
- Logo: Left aligned
- Links: Right aligned, text-gray-600 hover:text-red-600
- Mobile: Hamburger menu
```

### Footer
```
- Background: gray-900
- Text: gray-400
- Padding: py-12
- Links: hover:text-white
- Grid: 4 columns on desktop
```

## Patterns

### Hero Section
- Full width
- Centered content
- Large heading with tight tracking
- Subtitle text below
- Optional CTA button

### Content Sections
- Alternating white/gray backgrounds
- Section intro component at top
- Consistent py-12 spacing

### Cards Grid
- Responsive grid layout
- Consistent card height
- Hover effects on all cards
- Clear visual hierarchy

## Responsive Breakpoints

- **Mobile:** Default (< 640px)
- **Tablet:** `md:` (640px+)
- **Desktop:** `lg:` (1024px+)
- **Wide:** `xl:` (1280px+)

## Animation/Transitions

- **Card Hover:** `transition-all duration-200`
- **Button Hover:** `hover:bg-red-700`
- **Link Hover:** `hover:text-red-600`
- **Border Hover:** `hover:border-red-500`

## Implementation Notes

### Files Changed
- `app/globals.css` - Color variables and base styles
- `app/layout.tsx` - Root layout structure
- `app/page.tsx` - Home page redesign
- `components/Navigation.tsx` - New navigation
- `components/Footer.tsx` - New footer
- `components/FeatureCard.tsx` - Destination cards
- `components/FaqCard.tsx` - FAQ section cards
- `components/SectionIntro.tsx` - Section headers

### Key Changes from Original
1. Removed excessive red accents
2. Simplified color palette
3. Added proper card components
4. Improved section spacing
5. Better typography hierarchy
6. Cleaner navigation

## Quality Checklist

Before committing design changes:
- [ ] Colors match reference exactly
- [ ] Typography uses system fonts
- [ ] Cards have consistent styling
- [ ] All hover states work
- [ ] Mobile responsive
- [ ] Build passes (`npm run build`)
- [ ] No content lost in migration

---

Last updated: 2026-04-21
Source: https://www.trailofchina.com/
