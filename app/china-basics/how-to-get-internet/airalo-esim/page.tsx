import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Airalo eSIM for China: Honest Review & Setup Guide (2025)',
  description:
    'Airalo eSIM for China — honest review of coverage, speed, pricing, and setup. Is it the best eSIM for China travelers? Pros, cons, and alternatives.',
}

const setupSteps = [
  {
    title: 'Check eSIM compatibility on your phone',
    description:
      'Most iPhones (XS and newer), Google Pixels (3 and newer), and many Samsung Galaxy phones support eSIM. Check your phone settings under "SIM" or "Mobile Data" — if you see "Add eSIM" or "Add Mobile Plan," your phone supports it.',
  },
  {
    title: 'Download the Airalo app and create an account',
    description:
      'Download Airalo from the App Store or Google Play. Create an account with your email — this is where your eSIMs and purchase history live.',
  },
  {
    title: 'Purchase the China eSIM plan',
    description:
      'Search for "China" in Airalo. Plans include: 1GB/7 days (~$5), 3GB/30 days (~$13), 5GB/30 days (~$18), 10GB/30 days (~$28). Choose based on your trip length and data needs. 5GB is enough for most 2-week trips.',
  },
  {
    title: 'Install the eSIM before departure',
    description:
      'After purchase, tap "Install eSIM" and follow the on-screen instructions. The eSIM activates only when you arrive in China — install it at home while you have good WiFi.',
  },
  {
    title: 'Configure data settings on arrival',
    description:
      'Once in China, go to Settings → Mobile Data and set the Airalo eSIM as your data line. Turn on "Data Roaming" for the eSIM line. Your home SIM stays active for calls and texts.',
  },
]

const relatedArticles = [
  {
    title: 'Holafly eSIM Guide',
    description: 'Compare with Holafly for unlimited data eSIM.',
    href: '/china-basics/how-to-get-internet/holafly-esim',
  },
  {
    title: 'How to Get Internet',
    description: 'All connectivity options for China travelers.',
    href: '/china-basics/how-to-get-internet',
  },
]

export default function AiraloEsimPage() {
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
              { label: 'Airalo eSIM' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="卡" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Airalo eSIM for China: Honest Review &amp; Setup Guide (2025)
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">eSIM</span>
            <span className="text-lg">• China Basics • How to Get Internet</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Budget-friendly plans</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Instant activation</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Data only</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Airalo is one of the most popular eSIM providers for China travelers, offering affordable data plans that activate
          instantly without swapping physical SIM cards.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/airalo-esim-bund/1600/900"
            alt="Airalo eSIM for China travel"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              An eSIM lets you keep your home SIM for calls and texts while getting local data in China, with no physical SIM
              swap needed. Airalo offers some of the cheapest China data plans on the market, starting at just a few dollars.
            </p>
            <p>
              Instant activation means you land with working internet instead of hunting for a SIM card shop at the airport.
              Having data on arrival is essential for ride-hailing, maps, translation apps, and payment apps like Alipay.
            </p>
            <p>
              Here is our honest, experience-based review of how well it actually works on the ground.
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
                      src="https://picsum.photos/seed/airalo-app-setup/800/1200"
                      alt="Airalo app setup screen"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
                {index === 3 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/airalo-install-esim/800/1200"
                      alt="Airalo eSIM install screen"
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
            Coverage, Pricing, and Tradeoffs
          </h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Pricing and trip fit</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Airalo&apos;s China plans range from 1GB for 7 days at around $5 to 10GB for 30 days at around $28. For most
              two-week trips, the 5GB plan at around $18 is enough if you mainly use maps, messaging, translation, and
              booking apps.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Network coverage</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Airalo uses local carrier networks, usually China Unicom or China Telecom. Coverage is solid in cities, which
              makes it a straightforward choice for Beijing, Shanghai, Guangzhou, Shenzhen, and the standard traveler route.
            </p>
            <p>
              The tradeoff is that coverage can be spotty in rural areas, so travelers heading deep into western China or
              remote mountain regions may want a backup plan.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">What Airalo does not do</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Airalo eSIMs are data-only, so you cannot receive SMS or make phone calls on the eSIM number. That is fine for
              many travelers, but it matters if you rely on SMS verification or want a true local phone number.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Install the eSIM before you leave home, screenshot your eSIM QR code as a backup, and remember that Airalo data
            does not bypass censorship, so you still need a VPN for blocked apps and websites.
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
