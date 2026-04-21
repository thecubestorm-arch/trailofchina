import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Imprint | Trail of China' },
  description:
    'Imprint and legal notice for Trail of China, including publisher details, contact placeholders, and Swiss law governance notice.',
}

export default function ImprintPage() {
  return (
    <div className="bg-[#f5f1ea]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-10">
          <h1 className="font-serif text-4xl text-[var(--foreground)]">Imprint (Impressum)</h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            This legal notice applies to the website and publishing activities of Trail of China.
          </p>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Publisher Information</h2>
            <p className="text-[var(--muted)]">
              <strong>Company:</strong> Trail of China, [City], Switzerland
            </p>
            <p className="text-[var(--muted)]">
              <strong>Contact Email:</strong> [contact@trailofchina.com]
            </p>
            <p className="text-[var(--muted)]">
              <strong>Responsible Person:</strong> [Full Name]
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Editorial Responsibility</h2>
            <p className="text-[var(--muted)] leading-7">
              The person listed above is responsible for the editorial content published on this website, unless
              otherwise indicated on specific pages.
            </p>
            <h3 className="font-semibold text-lg text-[var(--foreground)]">Content Purpose</h3>
            <p className="text-[var(--muted)] leading-7">
              Trail of China provides travel-related informational content, guides, and recommendations intended for
              international visitors planning trips to China.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Legal Jurisdiction</h2>
            <p className="text-[var(--muted)] leading-7">
              This is a Swiss website operated by a Swiss-based company. It is governed by Swiss law.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Liability Notice</h2>
            <p className="text-[var(--muted)] leading-7">
              While we aim to keep all information accurate and current, we do not guarantee completeness, timeliness,
              or suitability of any content for specific purposes. External links are provided for convenience and may
              change without notice.
            </p>
          </section>

          <nav className="mt-12 border-t border-[var(--line)] pt-6" aria-label="Legal pages">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Legal Pages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/imprint" className="rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white">
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
