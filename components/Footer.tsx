import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[#f5f1ea]">
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

        <div className="section-shell rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">CTA Placeholder</p>
          <h2 className="mt-3 font-serif text-2xl text-[var(--foreground)]">Download the China arrival checklist</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Reserve this space for your future lead magnet, service pitch, or email sign-up.
          </p>
        </div>
      </div>
    </footer>
  )
}
