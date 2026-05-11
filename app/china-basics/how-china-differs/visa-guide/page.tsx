import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import { faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'China Visa Guide: Everything You Need to Know ',
  description:
    'Complete China visa guide for tourists — L visa, M visa, transit visas, 144-hour visa-free entry, and Swiss/EU citizen info.',
  keywords: 'China visa guide,China visa requirements,China visa-free entry,L visa China,China tourist visa,China visa application',

  path: '/china-basics/how-china-differs/visa-guide',
})

const setupSteps = [
  {
    title: 'Check if you qualify for visa-free entry',
    description:
      'As of 2025, China offers visa-free entry (15-30 days) to citizens of many countries including France, Germany, Italy, Spain, Malaysia, Thailand, Singapore, and more. Check the latest list on the Chinese embassy website for your nationality. Swiss citizens currently qualify for 15-day visa-free entry.',
  },
  {
    title: 'Determine your visa type',
    description:
      'L Visa (Tourist): For sightseeing, visiting friends or family. M Visa (Business): For meetings, trade fairs, and business negotiations. G Visa (Transit): For transiting through China, often not needed for stays under 24-72 hours in some cities. Q Visa (Family): For visiting Chinese relatives.',
  },
  {
    title: 'Prepare your documents',
    description:
      'You need a valid passport with 6+ months remaining and 2+ blank pages, a completed visa application form through COVA, a recent passport photo with a white background, round-trip flight itinerary, hotel bookings or an invitation letter, and bank statements showing sufficient funds.',
  },
  {
    title: 'Submit your application',
    description:
      'Submit in person or by mail to the Chinese Visa Application Service Center in your country. Some countries now allow online submission. Processing typically takes 4-5 business days, with expedited processing available for an extra fee.',
  },
  {
    title: 'Collect your visa and verify details',
    description:
      'Check the visa sticker carefully for your correct name, passport number, validity dates, number of entries, and duration of stay per entry. Errors need to be fixed before travel.',
  },
]

const relatedArticles = [
  {
    title: 'Before You Go',
    description: 'Visa, safety, and packing essentials before departure.',
    href: '/china-basics/before-you-go',
  },
  {
    title: 'Passport Rules in China',
    description: 'Entry requirements, passport validity, and registration rules.',
    href: '/china-basics/how-china-differs/passport-rules',
  },
  {
    title: 'How China Differs',
    description: 'Cultural differences, censorship, and safety standards.',
    href: '/china-basics/how-china-differs',
  },
]

const faqJsonLd = faqPageSchema([
  { question: 'Do I need a visa to visit China?', answer: 'Most foreign nationals need a visa, but China offers visa-free entry for citizens of France, Germany, Italy, Spain, Malaysia, and several other countries for stays up to 15 days.' },
  { question: 'What is the China 240-hour transit visa exemption?', answer: 'China offers 240-hour (10-day) transit visa exemptions for citizens of 54 countries transiting through designated ports.' },
  { question: 'How do I apply for a China tourist visa?', answer: 'Apply through the Chinese visa application center (CVASC) in your country. You need a passport valid for 6+ months, a completed application form, photos, and itinerary documents.' },
])

export default function VisaGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
              { label: 'How China Differs', href: '/china-basics/how-china-differs' },
              { label: 'Visa Guide' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="签" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            China Visa Guide: Everything You Need to Know 
          </h1>
          <p className="text-sm text-[#1a3a4a]/60">Last updated: May 2025</p>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">签证</span>
            <span className="text-lg">• China Basics • How China Differs</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Most travelers need a visa</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Apply 4-6 weeks early</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Some nationalities qualify visa-free</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          The visa process looks intimidating from the outside, but it becomes manageable once you sort the right category and paperwork.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-visa/1600/900"
            alt="China visa guide"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why This Matters</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Most nationalities need a visa to enter China, and arriving without one usually means being turned away at
              the border. Applying early, ideally four to six weeks before travel, avoids stress and expensive rush fees.
            </p>
            <p>
              Understanding which visa type you need, whether tourist, business, transit, or family-related, helps prevent
              rejections. At the same time, some nationalities now qualify for visa-free entry for short stays, so it is
              worth checking whether you need a visa at all before starting the process.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Step-by-Step Process</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="leading-relaxed">
                <p>
                  <strong>{step.title}.</strong> {step.description}
                </p>
                {index === 2 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/china-visa-documents/800/1200"
                      alt="China visa documents"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Visa Types at a Glance</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">L Visa</h3>
            <p>
              The L visa is the standard tourist visa and the one most leisure travelers need for sightseeing or visiting
              friends and family.
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">M Visa</h3>
            <p>
              The M visa is for business visitors attending meetings, trade fairs, or commercial negotiations.
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">G Visa</h3>
            <p>
              The G visa covers transit, although some itineraries qualify for shorter visa-free transit rules depending on
              the city and nationality.
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Q Visa</h3>
            <p>
              The Q visa is for family visits involving Chinese relatives.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Practical Notes</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Multiple-entry visas are worth requesting if you expect to visit Hong Kong or Macau and then re-enter mainland
              China. The 10-year L visa is available to US, UK, Canadian, and some EU citizens, and it is worth requesting
              if you are eligible and expect future travel.
            </p>
            <p>
              Keep copies of your visa, passport, and itinerary in a separate bag, and also save digital copies in cloud
              storage. Swiss and EU citizens in particular should check the latest visa-free policy before applying, because
              China has been expanding those programs and policies can change.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Apply four to six weeks before your trip even if standard processing looks short on paper.</p>
            <p>Request multiple entry if Hong Kong or Macau is part of the same wider itinerary.</p>
            <p>Verify every detail on the visa sticker before you leave the collection desk.</p>
            <p>
              Cross-check current policy with the relevant embassy before acting on any summary guide, including this one.
            </p>
          </blockquote>
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
          icon="🗺️"
          title="Plan Your China Trip"
          description="Ready to plan? Browse our pre-planned itineraries and start building your perfect trip."
          buttonText="See Pre-Planned Trips →"
          buttonHref="/plan-your-trip/preplanned-trips"
          variant="primary"
        />
      </main>
      </div>
    </>
  )
}
