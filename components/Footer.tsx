import Link from 'next/link'
import ChecklistDownload from './ChecklistDownload'

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#f5f1ea]">
      {/* Download section — full width */}
      <div className="container-px mx-auto max-w-7xl py-14">
        <ChecklistDownload />
      </div>

      {/* Footer content */}
      <div className="container-px mx-auto grid w-full max-w-7xl gap-10 pb-14 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <p className="font-serif text-3xl text-[var(--foreground)]">Trail of China</p>
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            Practical trip planning for international travelers visiting China for the first time, with clearer
            choices, calmer preparation, and smarter routes.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Explore</p>
          <div className="flex flex-col gap-3 text-sm text-[var(--foreground)]">
            <Link href="/china-basics" className="hover:text-[#af5d32]">
              China Basics
            </Link>
            <Link href="/destinations" className="hover:text-[#af5d32]">
              Destinations
            </Link>
            <Link href="/plan-your-trip" className="hover:text-[#af5d32]">
              Plan Your Trip
            </Link>
            <Link href="/blog" className="hover:text-[#af5d32]">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
