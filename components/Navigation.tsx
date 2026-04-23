'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/china-basics', label: 'China Basics' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

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

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#f5f1ea]/80 backdrop-blur-xl">
      <div className="container-px mx-auto flex w-full max-w-7xl items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl leading-none tracking-[0.08em] text-[var(--foreground)]">
            Trail of China
          </span>
          <span className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
            First-trip travel planning
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:gap-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full md:hidden"
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

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[min(20rem,85vw)] transform bg-[#f5f1ea] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col px-6 pt-20">
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-lg font-medium text-[var(--muted)] transition-colors hover:bg-[rgba(175,93,50,0.08)] hover:text-[#af5d32]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pb-10 pt-6">
            <Link
              href="#cheat-sheet"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 rounded-full bg-[#af5d32] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#9a4f28]"
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
