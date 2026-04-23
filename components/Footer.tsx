import Link from 'next/link'
import ChecklistDownload from './ChecklistDownload'

const bottomNavLinks = [
  { href: '/china-basics', label: 'China Basics' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/blog', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#f5f1ea]">
      {/* Bottom CTA Navbar — mirrors top navbar height & width */}
      <nav
        aria-label="Footer navigation"
        className="border-b border-[var(--line)]"
      >
        <div className="container-px mx-auto flex w-full max-w-7xl items-center justify-between py-3 md:py-4">
          <Link href="/" className="font-serif text-2xl leading-none tracking-[0.08em] text-[var(--foreground)]">
            Trail of China
          </Link>
          <div className="flex gap-2">
            {bottomNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden rounded-full border border-transparent px-4 py-2.5 text-sm font-medium text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)] md:inline-flex"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer content */}
      <div className="container-px mx-auto grid w-full max-w-7xl gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
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

        <div>
          <ChecklistDownload />
        </div>
      </div>
    </footer>
  )
}
