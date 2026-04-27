import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Cookie Policy | Trail of China' },
  description:
    'Cookie Policy for Trail of China explaining essential, analytics, and affiliate cookies and how users can manage consent choices.',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-[#64748b] hover:text-[#af5d32]">Home</Link>
          <span className="text-[#64748b] mx-2">›</span>
          <span className="text-sm text-[#1a3a4a] font-medium">Cookie Policy</span>
        </div>

        {/* Content Card */}
        <article className="rounded-xl border border-[#ebe4d8] bg-white p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-6">Cookie Policy</h1>
          <p className="text-[#64748b] leading-7">
            This Cookie Policy explains how Trail of China uses cookies and related technologies when you visit our
            website.
          </p>

          <section className="mb-8 mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">What Are Cookies?</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              Cookies are small text files stored in your browser that help websites function, remember preferences,
              and measure usage patterns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Types of Cookies We Use</h2>
            <h3 className="font-semibold text-lg text-[#1a3a4a] mt-4">Essential Cookies</h3>
            <p className="text-[#64748b] leading-7">
              These cookies are required for core site functionality, including basic navigation and security features.
            </p>
            <h3 className="font-semibold text-lg text-[#1a3a4a] mt-4">Analytics Cookies</h3>
            <p className="text-[#64748b] leading-7">
              These cookies help us understand site traffic and visitor behavior so we can improve usability and
              content quality.
            </p>
            <h3 className="font-semibold text-lg text-[#1a3a4a] mt-4">Affiliate Cookies</h3>
            <p className="text-[#64748b] leading-7">
              If you click affiliate links, partner platforms may use cookies to track referrals and attribute
              commissions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Third-Party Cookies</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              Some cookies are set by third-party services integrated into or linked from our website, including
              analytics and affiliate partners. We do not control third-party cookie policies and recommend reviewing
              each provider's policy directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">How to Manage Cookies</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              You can manage cookies through your browser settings by deleting existing cookies, blocking future
              cookies, or enabling alerts before cookies are stored.
            </p>
            <p className="text-[#64748b] leading-7 mt-4">
              You may also use our cookie consent controls, where available, to accept or reject non-essential cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Policy Updates</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              We may update this Cookie Policy from time to time to reflect legal, technical, or operational changes.
              The latest version is published on this page.
            </p>
          </section>

          {/* Navigation between legal pages */}
          <nav className="mt-10 border-t border-[#ebe4d8] pt-6" aria-label="Legal pages">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b] mb-4">Legal Pages</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/imprint" className="rounded-full bg-[#f5f1ea] border border-[#ebe4d8] px-4 py-2 text-sm font-semibold text-[#1a3a4a] hover:border-[#af5d32] transition-colors">
                Imprint
              </Link>
              <Link href="/privacy" className="rounded-full bg-[#f5f1ea] border border-[#ebe4d8] px-4 py-2 text-sm font-semibold text-[#1a3a4a] hover:border-[#af5d32] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white">
                Cookie Policy
              </Link>
            </div>
          </nav>
        </article>
      </div>
    </div>
  )
}
