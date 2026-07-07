'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/china-basics', label: 'China Basics' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/blog', label: 'Blog' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

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
  }, [pathname])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[100] border-b border-[var(--line)] bg-[#f5f1ea] md:bg-[#f5f1ea]/92 md:backdrop-blur-xl"
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
          className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:gap-2"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-[var(--line)] bg-[var(--surface-strong)] text-[#af5d32]'
                    : 'border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1 md:hidden">
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
          className="fixed inset-x-0 bottom-0 top-[var(--site-nav-height,4rem)] z-[109] bg-[#09131a]/38 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[var(--site-nav-height,4rem)] z-[110] bg-[#f5f1ea] transition-all duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col px-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-6">
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-[52px] items-center justify-between rounded-2xl border border-[#e7dece] bg-white px-4 py-3 text-lg font-medium text-[var(--foreground)] transition-colors hover:border-[#af5d32] hover:bg-[rgba(175,93,50,0.08)] hover:text-[#af5d32]"
              >
                <span>{link.label}</span>
              </Link>
            ))}
        </nav>
      </div>
      </div>
    </header>
  )
}
