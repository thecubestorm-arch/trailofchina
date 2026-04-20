# Design Rework Notes - Trail of China

Status: Draft collection file for future redesign phase.
Owner: Project team

## 1) Rework Trigger
Start full design rework when:
- Core content pages are complete
- Navigation structure is stable
- Deploy pipeline is stable for at least 2 consecutive deploys

## 2) Current UX/Design Goals
- Keep a clean white background and high readability
- Use red (`#E53935`) and gold (`#FFB300`) as accent system
- Mobile-first layout with clear section hierarchy
- Strong SEO-friendly page structure (headings, semantic HTML)

## 3) Ideas Backlog (Add here)
- [ ] Improve visual rhythm (spacing scale consistency)
- [ ] Add stronger destination card visuals
- [ ] Improve FAQ interaction styling (icons, animation)
- [ ] Better CTA hierarchy on Home and hubs
- [ ] Add trust section (visa policy caveat, data freshness date)
- [ ] Add "last updated" labels on guide pages
- [ ] Improve internal linking blocks between related guides

## 4) Brand Direction (Working)
- Tone: practical, trustworthy, first-time-tourist friendly
- Visual: modern editorial + travel utility
- Avoid: clutter, over-animation, dark-heavy themes

## 5) Component Rework Checklist
- [ ] Navigation
- [ ] Footer
- [ ] Hero
- [ ] Card grid
- [ ] FAQ accordion
- [ ] Article page template
- [ ] Form controls (Travel Planner)

## 6) Content + SEO Design Hooks
- [ ] Standardized meta title pattern
- [ ] Standardized meta description pattern
- [ ] Open Graph defaults
- [ ] Structured data plan (FAQ / Article / Breadcrumb)

## 7) Open Questions
- Which typography stack should become default brand style?
- Should destination pages use more photography or icon-led visuals?
- Do we want a sticky table-of-contents on long guide pages?

## 8) Decision Log
- 2026-04-20: Prioritize basics/content completeness before full visual rework.


## 9) New Inputs (2026-04-20)
- Strong feedback: current visual design and color execution are not acceptable.
- Desired direction: strict minimalist design, cleaner visual system.
- Primary domain confirmed: `trailofchina.com`.
- Additional domain to leverage: `travelchina.ch` (German market focus).
- Multi-language requirement: full site translation for English, German, French, Italian, Spanish.
- UX preference: one-click language switcher if feasible; fallback default language remains English.

## 10) Feature Requests (Industry Standard)
- [ ] Cookie banner / consent manager (GDPR-ready)
- [ ] Floating mini CTA buttons (non-intrusive, conversion-focused)
- [ ] Professional trust elements (clear policy links, contact/about, update dates)
- [ ] Better conversion blocks across hub/article pages
- [ ] Cross-domain language strategy (`trailofchina.com` + `travelchina.ch`)

## 11) Future Architecture Notes
- Localization approach to decide:
  - Option A: path-based locales (`/en`, `/de`, `/fr`, `/it`, `/es`)
  - Option B: domain-based locale targeting (e.g., `travelchina.ch` -> German default)
- Ensure SEO setup supports multilingual pages:
  - `hreflang`
  - canonical strategy
  - localized metadata

