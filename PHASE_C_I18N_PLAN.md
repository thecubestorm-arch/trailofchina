# Phase C: Internationalization (i18n) - EN/DE

## Overview
Add German (DE) language support to the Trail of China website. English remains default.

## Approach: Next.js App Router with [locale] dynamic segments

### Step 1: Install next-intl
```bash
npm install next-intl
```

### Step 2: Create directory structure
Move all existing pages under `app/(en)/` and create `app/(de)/` mirror:

Current: `app/destinations/shanghai/page.tsx`
New: `app/[locale]/destinations/shanghai/page.tsx`

### Step 3: Create message files
```
/messages/en.json  - English translations (extract from current pages)
/messages/de.json  - German translations
```

### Step 4: Configure next-intl
Create `i18n.ts`, `middleware.ts`, update `next.config.js`

### Step 5: Update layout.tsx
Add locale support, language switcher in navigation

### Step 6: URL structure
- English (default): `/destinations/shanghai` (no prefix)
- German: `/de/destinations/shanghai`

## CRITICAL RULES
1. Do NOT break existing English pages
2. Build must pass after each step
3. Start with homepage only - get i18n working for ONE page first
4. Then expand to other pages in batches
5. German translations must be natural, not machine-translated-sounding
6. Keep SEO metadata translated per locale

## Priority Order (implement page by page)
1. Homepage (`app/page.tsx`) - proof of concept
2. Destinations hub (`app/destinations/page.tsx`)
3. Shanghai pages (5 pages)
4. Beijing pages (5 pages)
5. China Basics hub + subpages
6. Xi'an, Chengdu, Chongqing pages
7. Plan Your Trip pages
8. Interactive Map page

## Verification
After EACH step: `npm run build` must pass
Final: Test both `/` and `/de/` URLs work correctly