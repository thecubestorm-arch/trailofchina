import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Cookie Policy | Trail of China' },
  description:
    'Cookie Policy for Trail of China explaining essential, analytics, and affiliate cookies and how users can manage consent choices.',
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#f5f1ea]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-10">
          <h1 className="font-serif text-4xl text-[var(--foreground)]">Cookie Policy</h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            This Cookie Policy explains how Trail of China uses cookies and related technologies when you visit our
            website.
          </p>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">What Are Cookies?</h2>
            <p className="text-[var(--muted)] leading-7">
              Cookies are small text files stored in your browser that help websites function, remember preferences,
              and measure usage patterns.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Types of Cookies We Use</h2>
            <h3 className="font-semibold text-lg text-[var(--foreground)]">Essential Cookies</h3>
            <p className="text-[var(--muted)] leading-7">
              These cookies are required for core site functionality, including basic navigation and security features.
            </p>
            <h3 className="font-semibold text-lg text-[var(--foreground)]">Analytics Cookies</h3>
            <p className="text-[var(--muted)] leading-7">
              These cookies help us understand site traffic and visitor behavior so we can improve usability and
              content quality.
            </p>
            <h3 className="font-semibold text-lg text-[var(--foreground)]">Affiliate Cookies</h3>
            <p className="text-[var(--muted)] leading-7">
              If you click affiliate links, partner platforms may use cookies to track referrals and attribute
              commissions.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Third-Party Cookies</h2>
            <p className="text-[var(--muted)] leading-7">
              Some cookies are set by third-party services integrated into or linked from our website, including
              analytics and affiliate partners. We do not control third-party cookie policies and recommend reviewing
              each provider's policy directly.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">How to Manage Cookies</h2>
            <p className="text-[var(--muted)] leading-7">
              You can manage cookies through your browser settings by deleting existing cookies, blocking future
              cookies, or enabling alerts before cookies are stored.
            </p>
            <p className="text-[var(--muted)] leading-7">
              You may also use our cookie consent controls, where available, to accept or reject non-essential cookies.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Policy Updates</h2>
            <p className="text-[var(--muted)] leading-7">
              We may update this Cookie Policy from time to time to reflect legal, technical, or operational changes.
              The latest version is published on this page.
            </p>
          </section>

          <nav className="mt-12 border-t border-[var(--line)] pt-6" aria-label="Legal pages">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Legal Pages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/imprint"
                className="rounded-full border border-[var(--line)] bg-[#f5f1ea] px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
              >
                Imprint
              </Link>
              <Link
                href="/privacy"
                className="rounded-full border border-[var(--line)] bg-[#f5f1ea] px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white"
              >
                Cookie Policy
              </Link>
            </div>
          </nav>
        </article>
      </div>
    </div>
  )
}
