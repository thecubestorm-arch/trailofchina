/**
 * Umami Analytics event tracking utility
 * Safe wrapper — no-ops if Umami is not loaded (SSR, ad blockers, etc.)
 */

type EventData = Record<string, string | number | boolean>

export function trackEvent(name: string, data?: EventData) {
  if (typeof window === 'undefined') return
  const umami = (window as any).umami
  if (!umami) return
  if (data) {
    umami.track(name, data)
  } else {
    umami.track(name)
  }
}

/** Track an affiliate link click (VPN, eSIM, hotel, Trip.com, etc.) */
export function trackAffiliateClick(category: string, page?: string) {
  trackEvent('affiliate_click', { category, page: page || window.location.pathname })
}

/** Track a destination exploration (city card click, map marker, etc.) */
export function trackDestinationExplore(city: string) {
  trackEvent('destination_explore', { city })
}

/** Track a route page view (7/10/14 day routes) */
export function trackRouteView(route: string) {
  trackEvent('route_view', { route })
}

/** Track cheat sheet email submit */
export function trackCheatSheetEmail() {
  trackEvent('cheat_sheet_email', { source: 'footer' })
}