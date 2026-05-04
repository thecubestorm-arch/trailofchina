# SPEC: VPN & eSIM Reminder Toast

## Concept
A clean, non-intrusive bottom-right slide-in toast that asks first-time visitors if they've sorted their VPN and eSIM yet. Appears once, disappears when dismissed, never annoys.

## Trigger Logic
- **When**: After 20 seconds on page OR after scrolling 40% of page content
- **Where**: On content pages only (china-basics/*, destinations/*, plan-your-trip/*, about). NOT on homepage, NOT on legal pages, NOT on blog.
- **Frequency**: Show max ONCE per 7 days per user (localStorage key: `toc_vpn_toast_dismissed`). If dismissed, don't show again for 7 days.
- **Never show**: If user has previously clicked a CTA in the toast (localStorage key: `toc_vpn_toast_clicked`)

## Design
- **Position**: Bottom-right on desktop (w-[380px]), full-width bottom on mobile
- **Animation**: Slide in from bottom-right (translateY + opacity), 300ms ease-out
- **Close**: X button top-right, dismisses toast and sets 7-day cooldown
- **Colors**: Matches site design:
  - Background: white with subtle warm gradient
  - Border-left: 4px solid terracotta (#af5d32)
  - Title: dark teal (#1a3a4a), serif font
  - Body text: muted (#64748b)
  - CTA buttons: terracotta bg with white text, secondary outlined
- **Shadow**: shadow-lg for depth without being obnoxious
- **z-index**: z-50 (below navbar z-100, above content)

## Content
```
🛡️ Sorted your VPN & eSIM?

China blocks many Western apps. A VPN keeps you connected — an eSIM keeps you online from landing.

[Get a VPN →]  [Get an eSIM →]

Dismiss for 7 days ✕
```

## CTA Links
- "Get a VPN" → /china-basics/what-apps-to-use/vpn
- "Get an eSIM" → /china-basics/how-to-get-internet/airalo-esim

## Component Structure
- `components/VPNeSIMToast.tsx` — "use client" component
- Add to `app/layout.tsx` inside the main wrapper
- Uses `usePathname()` to check if current route should show toast
- Uses `useEffect` + `IntersectionObserver` or scroll percentage for trigger
- Uses `localStorage` for dismissal cooldown

## Mobile Adaptation
- Full-width bar at bottom of screen
- Stack CTAs vertically on mobile
- Slightly shorter text on mobile
- Swipe down to dismiss (optional, nice-to-have)

## Accessibility
- `role="dialog"` + `aria-label="VPN and eSIM reminder"`
- Focus trap not needed (non-modal)
- X button has `aria-label="Dismiss"`
- CTAs are proper `<a>` tags, not JS handlers

## Do NOT
- Do NOT show on every page load
- Do NOT block scrolling or content
- Do NOT show on homepage (/) or legal pages (/imprint, /privacy, /cookie-policy)
- Do NOT use alert() or confirm()
- Do NOT animate aggressively (no bounce, no shake)
- Do NOT add affiliate parameters yet (those come later)