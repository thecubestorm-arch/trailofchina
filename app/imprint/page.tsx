import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Imprint | Trail of China' },
  description:
    'Imprint and legal notice for Trail of China, including publisher details, contact information, and Swiss law governance notice.',
}

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-[#64748b] hover:text-[#af5d32]">Home</Link>
          <span className="text-[#64748b] mx-2">›</span>
          <span className="text-sm text-[#1a3a4a] font-medium">Imprint</span>
        </div>

        {/* Content Card */}
        <article className="rounded-xl border border-[#ebe4d8] bg-white p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-6">Imprint (Impressum)</h1>
          <p className="text-[#64748b] leading-7">
            This legal notice applies to the website and publishing activities of Trail of China.
          </p>

          <section className="mb-8 mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Publisher Information</h2>
            <div className="space-y-4 mt-4">
              <p className="text-[#64748b]">
                <strong>Company:</strong> Trail of China, Zurich, Switzerland
              </p>
              <p className="text-[#64748b]">
                <strong>Contact Email:</strong> buetikoferdigital@gmail.com
              </p>
              <p className="text-[#64748b]">
                <strong>Responsible Person:</strong> BuetikoferDigital
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Editorial Responsibility</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              The person listed above is responsible for the editorial content published on this website, unless
              otherwise indicated on specific pages.
            </p>
            <h3 className="font-semibold text-lg text-[#1a3a4a] mt-4">Content Purpose</h3>
            <p className="text-[#64748b] leading-7">
              Trail of China provides travel-related informational content, guides, and recommendations intended for
              international visitors planning trips to China.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Legal Jurisdiction</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              This is a Swiss website operated by a Swiss-based company. It is governed by Swiss law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 border-b border-[#ebe4d8] pb-2">Liability Notice</h2>
            <p className="text-[#64748b] leading-7 mt-4">
              While we aim to keep all information accurate and current, we do not guarantee completeness, timeliness,
              or suitability of any content for specific purposes. External links are provided for convenience and may
              change without notice.
            </p>
          </section>

          {/* Navigation between legal pages */}
          <nav className="mt-10 border-t border-[#ebe4d8] pt-6" aria-label="Legal pages">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b] mb-4">Legal Pages</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/imprint" className="rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white">
                Imprint
              </Link>
              <Link href="/privacy" className="rounded-full bg-[#f5f1ea] border border-[#ebe4d8] px-4 py-2 text-sm font-semibold text-[#1a3a4a] hover:border-[#af5d32] transition-colors">
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
