import Link from 'next/link'
import FooterEmailCTA from './FooterEmailCTA'

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#f5f1ea]">
      <div className="container-px mx-auto max-w-7xl py-10 pb-[calc(env(safe-area-inset-bottom)+2.5rem)]">
        {/* Top row: brand + nav */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl text-[var(--foreground)]">Trail of China</p>
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--muted)]">
            <Link href="/china-basics" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              China Basics
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/destinations" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Destinations
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/plan-your-trip" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Plan Your Trip
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/blog" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Blog
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#ddd5c8]" />

        {/* Second row: description + CTA */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            Practical trip planning for international travelers visiting China for the first time, with clearer
            choices, calmer preparation, and smarter routes.
          </p>
          <div className="w-full max-w-md lg:shrink-0">
            <FooterEmailCTA />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#ddd5c8]" />

        {/* Bottom row: copyright + legal */}
        <div className="flex flex-col gap-3 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Trail of China</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/about" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              About
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/imprint" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Impressum
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Privacy
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
