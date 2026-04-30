import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Holafly eSIM for China: Review, Pricing & Is It Worth It? (2025)',
  description:
    'Holafly eSIM for China — detailed review of unlimited data plans, speeds, and reliability. Compare with Airalo and find the best eSIM for your China trip.',
}

const setupSteps = [
  {
    title: 'Check phone compatibility and purchase',
    description:
      'Confirm your phone supports eSIM (iPhone XS+, Pixel 3+, Galaxy S20+). Visit holafly.com, select China, and choose your plan: 5 days ($19), 10 days ($27), 15 days ($34), 20 days ($39), 30 days ($49), 60 days ($69), 90 days ($97). Prices are higher than Airalo but include unlimited data.',
  },
  {
    title: 'Install the eSIM via QR code',
    description:
      'After purchase, Holafly emails a QR code. Open Settings → Mobile Data → Add eSIM and scan the QR code. The eSIM installs in under 2 minutes. Do this before you leave home — you need WiFi for installation.',
  },
  {
    title: 'Configure dual SIM settings on arrival',
    description:
      'In China, go to Settings → Mobile Data. Set the Holafly eSIM as your data line and enable Data Roaming for it. Keep your home SIM active for calls and SMS. Turn off Data Roaming on your home SIM to avoid roaming charges.',
  },
  {
    title: 'Verify connection and test speed',
    description:
      'Open a speed test app or browse a website to confirm data is working. Holafly connects to China Unicom by default. Speeds typically range from 5-30 Mbps in cities — fast enough for maps, messaging, and video calls.',
  },
]

const relatedArticles = [
  {
    title: 'Airalo eSIM Guide',
    description: 'Compare with Airalo for budget eSIM options.',
    href: '/china-basics/how-to-get-internet/airalo-esim',
  },
  {
    title: 'How to Get Internet',
    description: 'All connectivity options for China travelers.',
    href: '/china-basics/how-to-get-internet',
  },
]

export default function HolaflyEsimPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
      }}
    >
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'China Basics', href: '/china-basics' },
              { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
              { label: 'Holafly eSIM' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="卡" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Holafly eSIM for China: Review, Pricing &amp; Is It Worth It? (2025)
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">eSIM</span>
            <span className="text-lg">• China Basics • How to Get Internet</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Unlimited data</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Hotspot support</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Premium pricing</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Holafly differentiates itself from other eSIM providers with one key feature: unlimited data.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/holafly-esim-bund/1600/900"
            alt="Holafly eSIM for China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Unlimited data means zero anxiety about running out, so you can stream, video call, and use maps without
              counting megabytes. Holafly also supports tethering and hotspot, which makes it useful if you plan to share
              your connection with travel companions.
            </p>
            <p>
              Instant eSIM activation works on the same day as purchase, with no waiting for shipping. Having reliable
              internet on arrival is essential for DiDi, maps, translation, and payment apps in China.
            </p>
            <p>
              For travelers who do not want to worry about gigabyte limits, Holafly offers peace of mind, but it comes at a
              premium price.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Step-by-Step Setup</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="leading-relaxed">
                <p>
                  <strong>{step.title}.</strong> {step.description}
                </p>
                {index === 1 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/holafly-qr-install/800/1200"
                      alt="Holafly QR code installation"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">
            Provider Comparison and Limits
          </h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Pricing versus Airalo</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Holafly plans cost more than Airalo, with pricing from $19 for 5 days up to $97 for 90 days, but the appeal is
              simple: unlimited data instead of a fixed data cap.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Coverage and speed</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Holafly uses China Unicom. Coverage is excellent in cities and major tourist areas, and urban speeds typically
              range from 5 to 30 Mbps, which is fast enough for maps, messaging, and video calls.
            </p>
            <p>
              Coverage can be weak in remote regions, so this is still a city-first product despite the unlimited-data pitch.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Important caveats</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Holafly offers 24/7 customer support via chat, which is useful if something goes wrong mid-trip. The bigger
              catch is that unlimited data is throttled after a certain threshold, typically around 1 to 2 GB per day at
              full speed before performance is reduced.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/holafly-speed-check/1600/900"
              alt="Testing Holafly eSIM speeds in China"
              className="h-56 w-full rounded-lg object-cover md:h-80"
            />
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Install the eSIM before leaving home, keep your home SIM roaming turned off to avoid surprise charges, and do
            not assume Holafly data bypasses censorship because you still need a VPN for blocked Western apps.
          </blockquote>
        </section>

        <section className="border-t border-[#ebe4d8] pt-8">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Related Articles</h2>
          <div className="divide-y divide-[#ebe4d8]">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href} className="block py-4 transition-opacity hover:opacity-80">
                <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">{article.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="🔒"
          title="Don't Forget a VPN for China"
          description="The Great Firewall blocks Google, Meta, and Western apps. A VPN is essential."
          buttonText="Get a VPN →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="primary"
        />
      </div>
    </div>
  )
}
