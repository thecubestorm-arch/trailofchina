import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Trail of China' },
  description:
    'Privacy Policy for Trail of China describing data collection, legal basis, user rights, and cross-border processing under Swiss nDSG and GDPR.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-[#64748b] hover:text-[#af5d32]">Home</Link>
          <span className="text-[#64748b] mx-2">›</span>
          <span className="text-sm text-[#1a3a4a] font-medium">Privacy Policy</span>
        </div>

        {/* Content Card */}
        <article className="rounded-xl border border-[#ebe4d8] bg-white p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-6">Privacy Policy</h1>
          <p className="text-[#64748b] leading-7">
            This Privacy Policy explains how Trail of China processes personal data for visitors from Switzerland, the
            EU/EEA, and the Americas. It is designed to align with the Swiss Federal Act on Data Protection (nDSG) and
            GDPR principles where applicable.
          </p>

          <section className="mb-8 mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Data Controller</h2>
            <div className="space-y-4 mt-4">
              <p className="text-[#64748b]">
                <strong>Controller:</strong> Trail of China, Zurich, Switzerland
              </p>
              <p className="text-[#64748b]">
                <strong>Email:</strong> hello@trailofchina.com
              </p>
              <p className="text-[#64748b] leading-7">
                For data protection inquiries, requests, or complaints, please contact us via the email address above.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">What Data We Collect</h2>
            <h3 className="font-semibold text-lg text-[#1a3a4a] mt-4">Analytics Data</h3>
            <p className="text-[#64748b] leading-7">
              We may collect non-directly identifying usage information such as page views, device type, approximate
              location, and referral sources through analytics tools.
            </p>
            <h3 className="font-semibold text-lg text-[#1a3a4a] mt-4">Cookies and Similar Technologies</h3>
            <p className="text-[#64748b] leading-7">
              We use cookies to remember preferences, measure traffic, and understand which content is most useful.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Third-Party Services and Links</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              We may use or link to third-party providers including Google Analytics and affiliate programs such as
              Amazon, Booking.com, and VPN providers. When users interact with these services, the respective third
              parties may process data according to their own privacy policies.
            </p>
            <p className="text-[#64748b] leading-7 mt-4">
              We recommend reviewing those third-party privacy notices before sharing personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Legal Basis and Purpose</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              We process data to operate this website, improve content quality, maintain security, and support affiliate
              attribution. Depending on context, processing may be based on legitimate interests, consent, or legal
              obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Your Rights</h2>
            <p className="text-[#64748b] leading-7 mt-4">Depending on your jurisdiction, you may request:</p>
            <ul className="list-disc space-y-2 pl-6 text-[#64748b] mt-4">
              <li>Access to the personal data we hold about you.</li>
              <li>Correction of inaccurate or incomplete data.</li>
              <li>Deletion of data, subject to legal exceptions.</li>
              <li>Restriction or objection to specific processing activities.</li>
            </ul>
            <p className="text-[#64748b] leading-7 mt-4">
              To exercise these rights, contact us at hello@trailofchina.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">International Data Transfers</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              Because our audience includes the EU and the Americas, data may be processed in countries outside your
              location. Where required, we seek appropriate safeguards for international transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Privacy Contact</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              For all privacy inquiries, rights requests, or complaints, contact: hello@trailofchina.com.
            </p>
          </section>

          {/* Navigation between legal pages */}
          <nav className="mt-10 border-t border-[#ebe4d8] pt-6" aria-label="Legal pages">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b] mb-4">Legal Pages</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/imprint" className="rounded-full bg-[#f5f1ea] border border-[#ebe4d8] px-4 py-2 text-sm font-semibold text-[#1a3a4a] hover:border-[#af5d32] transition-colors">
                Imprint
              </Link>
              <Link href="/privacy" className="rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="rounded-full bg-[#f5f1ea] border border-[#ebe4d8] px-4 py-2 text-sm font-semibold text-[#1a3a4a] hover:border-[#af5d32] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </nav>
        </article>
      </div>
    </div>
  )
}
