import Link from 'next/link'
import ChecklistDownload from './ChecklistDownload'

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#f5f1ea]">
      <div className="container-px mx-auto max-w-7xl py-10">
        {/* Top row: brand + nav */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl text-[var(--foreground)]">Trail of China</p>
          <nav className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-[var(--muted)]">
            <Link href="/china-basics" className="hover:text-[#af5d32]">
              China Basics
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/destinations" className="hover:text-[#af5d32]">
              Destinations
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/plan-your-trip" className="hover:text-[#af5d32]">
              Plan Your Trip
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/blog" className="hover:text-[#af5d32]">
              Blog
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#ddd5c8]" />

        {/* Second row: description + download */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            Practical trip planning for international travelers visiting China for the first time, with clearer
            choices, calmer preparation, and smarter routes.
          </p>
          <div className="shrink-0">
            <ChecklistDownload />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#ddd5c8]" />

        {/* Bottom row: copyright + legal */}
        <div className="flex flex-col gap-2 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Trail of China</p>
          <div className="flex flex-wrap items-center gap-x-1">
            <Link href="/imprint" className="hover:text-[#af5d32]">
              Impressum
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/privacy" className="hover:text-[#af5d32]">
              Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/cookie-policy" className="hover:text-[#af5d32]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
