import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'How to Get Internet in China | Trail of China',
  description:
    'Complete guide to getting internet in China: eSIM vs physical SIM cards, best providers, setup instructions, and pricing.',

  path: '/china-basics/how-to-get-internet',
})

const internetReasons = [
  'Google Maps, WhatsApp, Instagram, and Gmail are blocked in China unless you have the right workaround.',
  'You need internet for navigation, translation, mobile payments, and ride-hailing throughout the day.',
  'Having a working connection the moment you land removes one of the biggest arrival headaches.',
  'China\'s mobile networks are fast and reliable once you choose the right setup.',
]

const setupSteps = [
  {
    title: 'Choose your method',
    description:
      'Use an eSIM for the lowest-friction arrival, a physical SIM for stronger local value and speed, or both if you want a backup plan.',
  },
  {
    title: 'Set up an eSIM if you want zero airport hassle',
    description:
      'Buy and install an eSIM such as Airalo or Holafly one or two days before departure, then activate it when you land.',
  },
  {
    title: 'Buy a physical SIM if you want local carrier value',
    description:
      'Purchase from an official carrier store after customs at the airport and bring your passport for registration.',
  },
  {
    title: 'Install a VPN before you fly',
    description:
      'Download and test a VPN before departure because VPN sites are often inaccessible once you are already inside China.',
  },
  {
    title: 'Test everything before you leave the airport or hotel',
    description:
      'Confirm that maps, messaging, and payments all work on the connection you chose before you depend on it for the rest of the day.',
  },
]

const proTips = [
  'Many eSIMs route through roaming partners, which can let blocked apps work without a separate VPN.',
  'Physical SIMs are often cheaper and faster for longer trips, but they require passport registration and a store visit.',
  'A two-layer setup is common: eSIM for immediate arrival connectivity, local SIM for better value afterward.',
  'Screenshot important Chinese addresses before you leave home in case your data setup takes longer than expected.',
  'Do not wait until you land to install a VPN because that is when the setup window usually closes.',
]

const childPages = [
  {
    title: 'eSIM Guide',
    description: 'The easiest way to get online before you land in China.',
    href: '/china-basics/how-to-get-internet/esim',
  },
  {
    title: 'Physical SIM Guide',
    description: 'Best value and speed from local carriers if you do not mind setup on arrival.',
    href: '/china-basics/how-to-get-internet/physical-sim',
  },
  {
    title: 'Airalo eSIM',
    description: 'Affordable eSIM plans that are simple to install before departure.',
    href: '/china-basics/how-to-get-internet/airalo-esim',
  },
  {
    title: 'Holafly eSIM',
    description: 'Unlimited-data eSIM option for travelers who want simplicity over tuning plans.',
    href: '/china-basics/how-to-get-internet/holafly-esim',
  },
]

const relatedArticles = [
  {
    title: 'VPN Guide',
    description: 'Access blocked sites with a reliable VPN downloaded before arrival.',
    href: '/china-basics/what-apps-to-use/vpn',
  },
]

export default function InternetHub() {
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
              { label: 'How to Get Internet' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="网" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            How to Get Internet in China
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">网络</span>
            <span className="text-lg">• China Basics</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">eSIM</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Physical SIM</span>
          <span className="text-[var(--muted)]">·</span>
          <span>VPN before arrival</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          In China, internet is not just about browsing. It is the layer underneath maps, messaging, payments, ride-hailing,
          and most of the trip itself.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/internet-china/1600/900"
            alt="Phone staying connected while traveling in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why This Matters</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Staying connected in China is crucial for navigation, translation, and payments. Choose the setup that fits
              your trip length, budget, and tolerance for airport setup.
            </p>
            <ul>
              {internetReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Setup Flow</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step) => (
              <li key={step.title} className="leading-relaxed">
                <p>
                  <strong>{step.title}.</strong> {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            {proTips.map((tip) => (
              <p key={tip}>{tip}</p>
            ))}
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Pages in This Section</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {childPages.map((page) => (
                <Link key={page.href} href={page.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Related Articles</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContextualCTA
          icon="🔒"
          title="Download a VPN Before You Fly"
          description="China blocks Google, WhatsApp, and Instagram, so install a working VPN before arrival."
          buttonText="See VPN Recommendations →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="primary"
        />
      </main>
    </div>
  )
}
