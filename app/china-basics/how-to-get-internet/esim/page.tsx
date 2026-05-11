import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'eSIM Cards for China',
  description:
    'Best eSIM providers for China travel: Airalo, Holafly, Ubigi. Setup guide, pricing, and recommendations.',

  path: '/china-basics/how-to-get-internet/esim',
})

const setupSteps = [
  { title: 'Download the app', description: 'Get Airalo, Holafly, or Ubigi from your app store before you travel.' },
  { title: 'Purchase a plan', description: 'Select a China plan that matches your trip length and data needs.' },
  {
    title: 'Install the eSIM',
    description: "Follow the app's QR code instructions to install the eSIM profile on your phone.",
  },
  { title: 'Enable data roaming', description: 'Turn on data roaming in your phone settings before you land in China.' },
  {
    title: 'Connect automatically',
    description: 'Your phone connects to a network as soon as you arrive — no further steps needed.',
  },
]

const relatedArticles = [
  {
    title: 'Airalo eSIM Guide',
    description: 'Budget-friendly eSIM with good China coverage.',
    href: '/china-basics/how-to-get-internet/airalo-esim',
  },
  {
    title: 'Holafly eSIM Guide',
    description: 'Unlimited data eSIM option for China.',
    href: '/china-basics/how-to-get-internet/holafly-esim',
  },
  {
    title: 'How to Get Internet',
    description: 'All connectivity options compared.',
    href: '/china-basics/how-to-get-internet',
  },
  {
    title: 'VPN Guide',
    description: 'Access blocked sites with a reliable VPN.',
    href: '/china-basics/what-apps-to-use/vpn',
  },
]

export default function EsimPage() {
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
              { label: 'eSIM' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="网" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            eSIM Cards for China
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">网络</span>
            <span className="text-lg">• China Basics • How to Get Internet</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Fastest setup</span>
          <span className="text-[var(--muted)]">·</span>
          <span>No airport queue</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Instant on arrival</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          eSIMs are the easiest way to get internet in China. Activate before you leave home and have data the moment you
          land.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/esim-china-bund/1600/900"
            alt="eSIM card setup for China travel"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              You need internet for maps, translation, ride-hailing, and mobile payments, all of which are essential in
              China. eSIMs let you set up data before you travel, so you are connected the moment you land.
            </p>
            <p>
              There is no need to find a store, show your passport, or deal with language barriers at the airport. That
              alone makes eSIM the simplest option for short trips and first-time visitors.
            </p>
            <p>
              eSIMs use roaming networks, which means they bypass the Great Firewall, so Google Maps and Gmail work without
              a VPN.
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
                {index === 2 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/esim-qr-install/800/1200"
                      alt="eSIM QR code installation"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Provider Comparison</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Airalo</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Airalo is a strong budget choice if you want a straightforward China data plan with instant setup and
              affordable top-ups.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Holafly</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Holafly is the higher-priced unlimited-data option for travelers who would rather not count gigabytes during
              the trip.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">What to expect overall</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Buy slightly more data than you think you need, because top-ups are instant if you run low. eSIMs use roaming
              networks, so speeds may be slower than local SIMs.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/esim-provider-comparison/1600/900"
              alt="Comparing eSIM providers for China"
              className="h-56 w-full rounded-lg object-cover md:h-80"
            />
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Install your eSIM one day before travel, screenshot your QR code as a backup, and keep a VPN installed anyway if
            you want full internet access beyond what roaming unlocks.
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
          title="Don't Forget a VPN"
          description="A VPN is essential in China — install it before you arrive."
          buttonText="Get a VPN for China →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="primary"
        />
      </div>
    </div>
  )
}
