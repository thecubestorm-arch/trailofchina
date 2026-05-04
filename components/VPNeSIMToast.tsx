'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

const DISMISSED_KEY = 'toc_vpn_toast_dismissed'
const CLICKED_KEY = 'toc_vpn_toast_clicked'
const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000
const TIME_TRIGGER_MS = 20_000
const SCROLL_TRIGGER_RATIO = 0.4

const CTA_LINKS = {
  vpn: '/china-basics/what-apps-to-use/vpn',
  esim: '/china-basics/how-to-get-internet/airalo-esim',
} as const

function isContentPath(pathname: string) {
  if (pathname === '/about') return true

  return (
    pathname.startsWith('/china-basics/') ||
    pathname.startsWith('/destinations/') ||
    pathname.startsWith('/plan-your-trip/')
  )
}

function isWithinCooldown(value: string | null) {
  if (!value) return false

  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return true

  return Date.now() - parsed < COOLDOWN_MS
}

export default function VPNeSIMToast() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const hasTrackedImpression = useRef(false)

  const shouldAllowRoute = useMemo(() => isContentPath(pathname), [pathname])

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    setIsVisible(false)
    setIsRendered(false)
    hasTrackedImpression.current = false

    if (!shouldAllowRoute) return
    if (typeof window === 'undefined') return

    const dismissedAt = window.localStorage.getItem(DISMISSED_KEY)
    const clickedAt = window.localStorage.getItem(CLICKED_KEY)

    if (isWithinCooldown(dismissedAt) || isWithinCooldown(clickedAt)) {
      return
    }

    let didTrigger = false

    const showToast = () => {
      if (didTrigger) return
      didTrigger = true
      setIsRendered(true)
      window.requestAnimationFrame(() => {
        setIsVisible(true)
      })
    }

    const timeoutId = window.setTimeout(showToast, TIME_TRIGGER_MS)

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (scrollableHeight <= 0) return

      const scrollRatio = window.scrollY / scrollableHeight
      if (scrollRatio >= SCROLL_TRIGGER_RATIO) {
        showToast()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname, shouldAllowRoute])

  useEffect(() => {
    if (!isRendered || hasTrackedImpression.current) return

    trackEvent('vpn_esim_toast_impression', { page: pathname })
    hasTrackedImpression.current = true
  }, [isRendered, pathname])

  if (!hasMounted || !shouldAllowRoute || !isRendered) {
    return null
  }

  const dismissToast = () => {
    window.localStorage.setItem(DISMISSED_KEY, String(Date.now()))
    trackEvent('vpn_esim_toast_dismiss', { page: pathname })
    setIsVisible(false)
    window.setTimeout(() => setIsRendered(false), 300)
  }

  const handleCtaClick = (cta: keyof typeof CTA_LINKS) => {
    window.localStorage.setItem(CLICKED_KEY, String(Date.now()))
    trackEvent('vpn_esim_toast_click', { cta, destination: CTA_LINKS[cta], page: pathname })
    setIsVisible(false)
    window.setTimeout(() => setIsRendered(false), 300)
  }

  return (
    <aside
      aria-label="VPN and eSIM reminder"
      role="dialog"
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ease-out md:right-6 md:left-auto md:bottom-6 md:w-[380px] ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 md:translate-y-4'
      }`}
    >
      <div
        className="border-l-4 shadow-lg"
        style={{
          borderLeftColor: '#af5d32',
          background:
            'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(250,246,240,1) 100%)',
        }}
      >
        <div className="relative p-4 md:rounded-lg md:p-5">
          <button
            type="button"
            aria-label="Dismiss"
            onClick={dismissToast}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>

          <div className="pr-8">
            <p
              className="font-serif text-xl leading-tight"
              style={{ color: '#1a3a4a' }}
            >
              Sorted your VPN & eSIM?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500 md:text-[15px]">
              <span className="hidden md:inline">
                China blocks many Western apps. A VPN keeps you connected and an
                eSIM keeps you online from landing.
              </span>
              <span className="md:hidden">
                China blocks many Western apps. A VPN and eSIM keep you online
                from landing.
              </span>
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link
              href={CTA_LINKS.vpn}
              onClick={() => handleCtaClick('vpn')}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#af5d32' }}
            >
              Get a VPN
            </Link>
            <Link
              href={CTA_LINKS.esim}
              onClick={() => handleCtaClick('esim')}
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50"
              style={{ borderColor: '#af5d32', color: '#1a3a4a' }}
            >
              Get an eSIM
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
