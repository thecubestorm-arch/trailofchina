'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Detect pathname-based compact nav for hub pages
function useCompactNavMode() {
  const [compactNavMode, setCompactNavMode] = useState(false)

  useEffect(() => {
    // data-hide-main-nav is no longer set by any page
    // keeping the observer for safety but it won't trigger
    const checkCompactNav = () => {
      setCompactNavMode(document.body.hasAttribute('data-hide-main-nav'))
    }

    checkCompactNav()

    const observer = new MutationObserver(checkCompactNav)
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-hide-main-nav'] })

    return () => observer.disconnect()
  }, [])

  return compactNavMode
}

// Hook to detect swipe from right edge to open menu
function useSwipeToOpenMenu(onSwipeOpen: () => void, enabled: boolean) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth >= 768) return

      // Only detect swipes starting from the last 20px of the right edge.
      const screenWidth = window.innerWidth
      const touchX = e.touches[0].clientX
      
      if (touchX > screenWidth - 20) {
        touchStartX.current = touchX
        touchStartY.current = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === null) return

      const touchX = e.touches[0].clientX
      const touchY = e.touches[0].clientY
      const deltaX = touchX - touchStartX.current
      const deltaY = touchY - (touchStartY.current || 0)

      // Detect left swipe (negative deltaX) of at least 80px
      // And ensure it's more horizontal than vertical (|deltaX| > |deltaY|)
      if (deltaX < -80 && Math.abs(deltaX) > Math.abs(deltaY)) {
        onSwipeOpen()
        touchStartX.current = null
        touchStartY.current = null
      }
    }

    const handleTouchEnd = () => {
      touchStartX.current = null
      touchStartY.current = null
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [onSwipeOpen, enabled])
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/china-basics', label: 'China Basics' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/interactive-map', label: 'Interactive Map', badge: 'Coming Soon' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()
  const compactNavMode = useCompactNavMode()
  const shouldUseCompactNavForPath =
    pathname === '/china-basics' || /^\/destinations\/[^/]+$/.test(pathname)
  const useCompactNav = compactNavMode || shouldUseCompactNavForPath

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  useEffect(() => {
    const updateNavHeight = () => {
      const height = headerRef.current?.offsetHeight
      if (!height) return
      document.documentElement.style.setProperty('--site-nav-height', `${height}px`)
    }

    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)
    return () => window.removeEventListener('resize', updateNavHeight)
  }, [useCompactNav])

  const openMenu = useCallback(() => setMenuOpen(true), [])
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  // Enable swipe-from-right to open menu with a narrow edge zone to avoid iOS gesture conflicts.
  useSwipeToOpenMenu(openMenu, !menuOpen)

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[100] border-b border-[var(--line)] bg-[#f5f1ea]/92 backdrop-blur-xl"
    >
      <div className="container-px mx-auto flex w-full max-w-7xl items-center justify-between py-2.5 md:py-4">
        <Link href="/" className="flex min-h-[44px] min-w-0 flex-col justify-center py-1 md:min-h-0 md:py-0">
          <span className="truncate font-serif text-xl leading-none tracking-[0.06em] text-[var(--foreground)] md:text-2xl">
            Trail of China
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] sm:block md:text-xs md:tracking-[0.32em]">
            First-trip travel planning
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className={`${useCompactNav ? 'hidden' : 'hidden md:flex'} md:flex-wrap md:items-center md:justify-end md:gap-2`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
            >
              {link.label}
              {'badge' in link && link.badge && (
                <span className="ml-1.5 inline-block rounded-full bg-[#af5d32] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className={`flex items-center gap-1 ${useCompactNav ? '' : 'md:hidden'}`}>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            className="relative z-[100] flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full"
          >
            {menuOpen ? (
              /* X Close Icon */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#af5d32"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#af5d32"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-[109] bg-[#09131a]/38 backdrop-blur-sm ${useCompactNav ? '' : 'md:hidden'}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-[110] w-[min(20rem,85vw)] bg-[#f5f1ea] shadow-[-20px_0_40px_rgba(9,19,26,0.18)] transition-transform duration-300 ease-out ${
          useCompactNav ? '' : 'md:hidden'
        } ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col px-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-[max(env(safe-area-inset-top),1.5rem)]">
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-[52px] items-center justify-between rounded-2xl border border-[#e7dece] bg-white px-4 py-3 text-lg font-medium text-[var(--foreground)] transition-colors hover:border-[#af5d32] hover:bg-[rgba(175,93,50,0.08)] hover:text-[#af5d32]"
              >
                <span>{link.label}</span>
                {'badge' in link && link.badge && (
                  <span className="ml-3 inline-block rounded-full bg-[#af5d32] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <Link
              href="/#footer-email-cta"
              onClick={closeMenu}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#af5d32] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#9a4f28]"
            >
              Get the Free Cheat Sheet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
