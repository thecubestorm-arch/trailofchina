import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Physical SIM Cards in China | Trail of China',
  description:
    'Complete guide to buying physical SIM cards at Chinese airports. Best carriers, pricing, requirements, and setup.',
}

const setupSteps = [
  {
    title: 'Find the carrier store',
    description:
      'Look for official stores after customs: 中国移动 (China Mobile), 中国联通 (China Unicom), or 中国电信 (China Telecom).',
  },
  {
    title: 'Show your passport',
    description:
      'Chinese law requires passport registration for all SIM cards. The staff will handle this for you.',
  },
  {
    title: 'Choose a plan',
    description:
      'Ask for a tourism SIM (旅游卡) for short stays. China Unicom is the most foreigner-friendly.',
  },
  {
    title: 'Staff installs it',
    description: 'They will insert the SIM, activate it, and make sure it works before you leave.',
  },
  {
    title: 'Test before leaving',
    description: 'Open a browser and check that data works. Keep the receipt for any issues.',
  },
]

const relatedArticles = [
  {
    title: 'eSIM Guide',
    description: 'Compare eSIM options for easier setup.',
    href: '/china-basics/how-to-get-internet/esim',
  },
  {
    title: 'Airalo eSIM Guide',
    description: 'Budget-friendly eSIM with good China coverage.',
    href: '/china-basics/how-to-get-internet/airalo-esim',
  },
  {
    title: 'How to Get Internet',
    description: 'All connectivity options for China travelers.',
    href: '/china-basics/how-to-get-internet',
  },
  {
    title: 'VPN Guide',
    description: 'Access blocked sites with a reliable VPN.',
    href: '/china-basics/what-apps-to-use/vpn',
  },
]

export default function PhysicalSimPage() {
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
              { label: 'Physical SIM' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="卡" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Physical SIM Cards in China
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">电话卡</span>
            <span className="text-lg">• China Basics • How to Get Internet</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Best value</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Fastest local speeds</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Includes local number</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Physical SIM cards offer the best value and fastest speeds in China, but they ask more from you on arrival.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/physical-sim-china-bund/1600/900"
            alt="Buying a physical SIM card in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Physical SIMs give you a real local number and access to China&apos;s fastest mobile networks. Data plans are
              generous and cheap compared to roaming or eSIM options, which makes them the best-value choice for longer
              trips.
            </p>
            <p>
              You also get better speeds than eSIM roaming, which matters for maps and video calls. A local number lets you
              receive SMS from Chinese services like Alipay and WeChat.
            </p>
            <p>
              The tradeoff is that you need to buy the SIM after landing, register with your passport, and spend time at a
              carrier counter before you are fully online.
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
                {index === 0 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/china-carrier-counter/800/1200"
                      alt="Carrier counter at a Chinese airport"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                    <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Provider Comparison</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">China Unicom</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China Unicom is the most foreigner-friendly carrier with the best balance of price and coverage. It is usually
              the easiest option for short-term visitors buying at the airport.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Tourism SIM plans</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Ask for a tourism SIM, or 旅游卡, if you are only in China for a short stay. These plans are designed around
              shorter commitments and are usually simpler to activate on the spot.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Speed and practicality</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Physical SIMs are cheaper and faster than most roaming-based alternatives, but the setup is less elegant. You
              need to be comfortable handing over your passport, letting staff handle your phone, and testing the connection
              before you leave the counter.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/china-sim-activation/1600/900"
              alt="Activating a physical SIM in China"
              className="h-56 w-full rounded-lg object-cover md:h-80"
            />
            <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Bring your passport, keep the receipt, store your home SIM somewhere safe, and test the data connection before
            you walk away from the carrier store.
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
          icon="📱"
          title="Want Zero Airport Hassle?"
          description="Set up an eSIM before you fly and skip the carrier store queue entirely."
          buttonText="See eSIM Options →"
          buttonHref="/china-basics/how-to-get-internet/esim"
          variant="secondary"
        />
      </div>
    </div>
  )
}
