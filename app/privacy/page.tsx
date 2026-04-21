import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Trail of China' },
  description:
    'Privacy Policy for Trail of China describing data collection, legal basis, user rights, and cross-border processing under Swiss nDSG and GDPR.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#f5f1ea]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-10">
          <h1 className="font-serif text-4xl text-[var(--foreground)]">Privacy Policy</h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            This Privacy Policy explains how Trail of China processes personal data for visitors from Switzerland, the
            EU/EEA, and the Americas. It is designed to align with the Swiss Federal Act on Data Protection (nDSG) and
            GDPR principles where applicable.
          </p>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Data Controller</h2>
            <p className="text-[var(--muted)]">
              <strong>Controller:</strong> Trail of China, [City], Switzerland
            </p>
            <p className="text-[var(--muted)]">
              <strong>Email:</strong> [privacy@trailofchina.com]
            </p>
            <p className="text-[var(--muted)] leading-7">
              For data protection inquiries, requests, or complaints, please contact us via the email address above.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">What Data We Collect</h2>
            <h3 className="font-semibold text-lg text-[var(--foreground)]">Analytics Data</h3>
            <p className="text-[var(--muted)] leading-7">
              We may collect non-directly identifying usage information such as page views, device type, approximate
              location, and referral sources through analytics tools.
            </p>
            <h3 className="font-semibold text-lg text-[var(--foreground)]">Cookies and Similar Technologies</h3>
            <p className="text-[var(--muted)] leading-7">
              We use cookies to remember preferences, measure traffic, and understand which content is most useful.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Third-Party Services and Links</h2>
            <p className="text-[var(--muted)] leading-7">
              We may use or link to third-party providers including Google Analytics and affiliate programs such as
              Amazon, Booking.com, and VPN providers. When users interact with these services, the respective third
              parties may process data according to their own privacy policies.
            </p>
            <p className="text-[var(--muted)] leading-7">
              We recommend reviewing those third-party privacy notices before sharing personal information.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Legal Basis and Purpose</h2>
            <p className="text-[var(--muted)] leading-7">
              We process data to operate this website, improve content quality, maintain security, and support affiliate
              attribution. Depending on context, processing may be based on legitimate interests, consent, or legal
              obligations.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Your Rights</h2>
            <p className="text-[var(--muted)] leading-7">Depending on your jurisdiction, you may request:</p>
            <ul className="list-disc space-y-2 pl-6 text-[var(--muted)]">
              <li>Access to the personal data we hold about you.</li>
              <li>Correction of inaccurate or incomplete data.</li>
              <li>Deletion of data, subject to legal exceptions.</li>
              <li>Restriction or objection to specific processing activities.</li>
            </ul>
            <p className="text-[var(--muted)] leading-7">
              To exercise these rights, contact us at [privacy@trailofchina.com].
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">International Data Transfers</h2>
            <p className="text-[var(--muted)] leading-7">
              Because our audience includes the EU and the Americas, data may be processed in countries outside your
              location. Where required, we seek appropriate safeguards for international transfers.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Privacy Contact</h2>
            <p className="text-[var(--muted)] leading-7">
              For all privacy inquiries, rights requests, or complaints, contact: [privacy@trailofchina.com].
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
              <Link href="/privacy" className="rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white">
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="rounded-full border border-[var(--line)] bg-[#f5f1ea] px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
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
