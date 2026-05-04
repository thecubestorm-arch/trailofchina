'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackEvent, trackDestinationExplore, trackRouteView } from '@/lib/analytics'

/**
 * Auto-tracks page-level events based on the current URL.
 * Drop this component once in the layout — it handles:
 * - destination_explore: any visit to /destinations/{city}
 * - route_view: any visit to /plan-your-trip/preplanned-trips/{route}
 * - basics_page_view: any visit to /china-basics/* (for future deep-dive tracking)
 */
export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Destination explore: /destinations/shanghai, /destinations/beijing, etc.
    const destMatch = pathname.match(/^\/destinations\/([a-z-]+)/)
    if (destMatch) {
      trackDestinationExplore(destMatch[1])
    }

    // Route view: /plan-your-trip/preplanned-trips/7-day-route, etc.
    const routeMatch = pathname.match(/^\/plan-your-trip\/preplanned-trips\/([a-z0-9-]+)/)
    if (routeMatch) {
      trackRouteView(routeMatch[1])
    }

    // Generic page view event (useful for custom dashboards)
    trackEvent('page_view', { path: pathname })
  }, [pathname])

  return null
}