import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema, travelGuideSchema, websiteSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'China Travel Guide - First Trip Planning',
  description:
    'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'China Travel Guide - First Trip Planning',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Trail of China - China Travel Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function HomePage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }]);
  const travelGuideJsonLd = travelGuideSchema({
    title: 'Trail of China — China Travel Guide',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    url: '/',
    image: 'https://www.trailofchina.com/og-default.jpg',
  });
  const websiteJsonLd = websiteSchema({
    name: 'Trail of China',
    url: '/',
    searchUrl: '/search?q={search_term_string}',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-[#f5f1ea]">
        {/* Hero Section */}
        <section className="px-4 pt-16 pb-8 md:px-6 md:pt-24 md:pb-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-wider text-[#5a5a5a]">
              First-Timer Guide · Updated July 2026
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#1a3a4a] md:text-5xl lg:text-6xl">
              China without the guesswork.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5a5a5a] md:text-lg">
              The apps, eSIMs, and payments setup that actually work — tested across three trips, not copied from other blogs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/china-basics/before-you-go/packing-list"
                className="inline-flex items-center justify-center rounded-md bg-[#af5d32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8f431c]"
              >
                Read the 2026 checklist
              </Link>
              <Link
                href="/china-basics/how-to-get-internet/airalo-esim"
                className="inline-flex items-center justify-center rounded-md border border-[#1a3a4a] bg-transparent px-6 py-3 text-sm font-semibold text-[#1a3a4a] transition-colors hover:bg-[#1a3a4a] hover:text-white"
              >
                Which eSIM?
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="my-12 border-t border-[#ebe4d8]" />
        </div>

        {/* Category Tiles */}
        <section className="px-4 pb-16 md:px-6 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <Link
                href="/china-basics/what-apps-to-use/alipay"
                className="group border-b border-[#ebe4d8] py-8 px-6 transition-colors hover:bg-[#faf8f4] md:border-b-0 md:border-r"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[#af5d32]">
                  Payments
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold text-[#1a3a4a]">
                  Alipay in 10 min
                </h2>
              </Link>
              <Link
                href="/china-basics/what-apps-to-use/vpn"
                className="group border-b border-[#ebe4d8] py-8 px-6 transition-colors hover:bg-[#faf8f4] md:border-b-0 md:border-r"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[#af5d32]">
                  Connectivity
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold text-[#1a3a4a]">
                  VPNs that survived 2026
                </h2>
              </Link>
              <Link
                href="/plan-your-trip"
                className="group py-8 px-6 transition-colors hover:bg-[#faf8f4]"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[#af5d32]">
                  Itineraries
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold text-[#1a3a4a]">
                  Chengdu over Beijing?
                </h2>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
