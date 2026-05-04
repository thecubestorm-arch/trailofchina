import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Before You Go to China | Visa, Safety & Packing | Trail of China',
  description:
    'Everything to check before your China trip: visa requirements, safety tips, and what to pack. Get ready before you fly.',

  path: '/china-basics/before-you-go',
})

const prepReasons = [
  'China has entry requirements that can take weeks to arrange, so early prep avoids last-minute panic.',
  'Understanding local safety and customs helps you travel with confidence instead of improvising on arrival.',
  'Packing the right items and leaving the wrong ones at home makes the whole trip smoother.',
  'Having apps, payments, and connectivity ready before arrival removes most of the stress from your first day.',
]

const prepSteps = [
  {
    title: 'Check your visa',
    description:
      'Verify whether you need a visa, which type applies to your trip, and how long processing takes. Some nationalities can enter visa-free, but many travelers still need to plan paperwork weeks ahead.',
  },
  {
    title: 'Download essential apps',
    description:
      'Set up WeChat, Alipay, a VPN, and translation tools before you leave. Some downloads and account flows are harder once you are already inside China.',
  },
  {
    title: 'Set up connectivity',
    description:
      'Buy an eSIM or decide whether to get a physical SIM at the airport. Test your VPN before departure so you are not troubleshooting after landing.',
  },
  {
    title: 'Read the safety guide',
    description:
      'China is generally very safe, but knowing local etiquette, food safety basics, and emergency numbers helps you move with more confidence.',
  },
  {
    title: 'Pack smart',
    description:
      'Bring adapters, toilet paper, a VPN-ready device, and some cash. Leave sensitive political materials and unnecessary valuables at home.',
  },
]

const proTips = [
  'Start visa planning at least four to six weeks before travel if your nationality requires one.',
  'Screenshot important hotel and transport details in Chinese in case you need to show them offline.',
  'Keep your passport valid for at least six months beyond your planned exit date.',
  'Download offline maps and translation packs as a backup even if you expect constant internet.',
  'Notify your bank before you travel so overseas transactions are less likely to trigger fraud blocks.',
]

const childPages = [
  {
    title: 'Is China Safe?',
    description: 'Safety basics, common scams, emergency numbers, and what solo travelers should expect.',
    href: '/china-basics/before-you-go/is-china-safe',
  },
  {
    title: 'Packing List',
    description: 'What to bring, what to set up in advance, and what is not worth carrying.',
    href: '/china-basics/before-you-go/packing-list',
  },
]

const relatedArticles = [
  {
    title: 'Visa Guide',
    description: 'Everything about China visas and visa-free entry.',
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    title: 'What Apps to Use',
    description: 'Essential apps to download before your trip.',
    href: '/china-basics/what-apps-to-use',
  },
  {
    title: 'Passport Rules',
    description: 'Entry requirements and passport validity.',
    href: '/china-basics/how-china-differs/passport-rules',
  },
]

export default function BeforeYouGoPage() {
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
              { label: 'Before You Go' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="行" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Before You Go
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">出行前</span>
            <span className="text-lg">• China Basics</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Visa</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Safety</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Packing and apps</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          The smoothest China trips are usually decided before takeoff, when paperwork, connectivity, and packing are still
          easy to fix.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/before-you-go-china/1600/900"
            alt="Travel preparation for a China trip"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why Start Here</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Get the paperwork, safety basics, and packing sorted before departure. These are the things every
              first-timer needs to check, from visa rules to what belongs in your carry-on.
            </p>
            <ul>
              {prepReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pre-Departure Checklist</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {prepSteps.map((step) => (
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
          icon="📱"
          title="Get Your Apps Ready"
          description="Set up WeChat, Alipay, your VPN, and arrival essentials before you board the plane."
          buttonText="See Essential Apps →"
          buttonHref="/china-basics/what-apps-to-use"
          variant="secondary"
        />
      </main>
    </div>
  )
}
