import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Passport & Registration Rules | Trail of China',
  description:
    'Hotel registration, police checks, and passport requirements for travelers in China. Visa overstays and lost passport procedures.',
}

const relatedArticles = [
  {
    title: 'Visa Guide',
    description: 'Complete China visa walkthrough.',
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    title: 'Security Standards',
    description: 'Safety and security tips for China.',
    href: '/china-basics/how-china-differs/security-standards',
  },
  {
    title: 'How China Differs',
    description: 'The broader context behind rules that surprise travelers.',
    href: '/china-basics/how-china-differs',
  },
]

export default function PassportRulesPage() {
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
              { label: 'How China Differs', href: '/china-basics/how-china-differs' },
              { label: 'Passport Rules' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="护" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Passport &amp; Registration Rules
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">护照</span>
            <span className="text-lg">• China Basics • How China Differs</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Original passport required</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Register within 24 hours</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Overstay fine: ¥500/day</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          In China, identity rules are not a formality. Your passport is part of how the system expects you to move.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-passport-rules/1600/900"
            alt="Passport and registration rules in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Why These Rules Matter
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Chinese law requires foreigners to carry their original passport, not just a photocopy. Hotels, trains,
              attractions, and police checks can all require your passport at short notice, and the expectation is stricter
              than in many other countries.
            </p>
            <p>
              If you stay outside a licensed hotel, you must complete temporary residence registration within 24 hours.
              Overstays or missing registration can lead to fines, future visa problems, or detention.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Carrying Your Passport
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Always carry your original passport, not just a digital image or paper copy. Police checks can happen
              anywhere, especially near borders, train stations, and sensitive areas. Hotels need it for check-in, some
              attractions need it for ticketing, and trains can require it both when buying tickets and when boarding.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Hotel Registration</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Licensed hotels register you electronically as part of check-in. Keep any registration slip or printout they
              provide. If you are booking a guesthouse or smaller property, confirm in advance that they are licensed to host
              foreigners, because unlicensed hotels cannot legally register you.
            </p>
            <p>
              If you stay in an Airbnb or apartment, the host is still responsible for making sure registration happens
              within the required time window.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/china-hotel-registration/1600/900"
              alt="Hotel front desk registration"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Police Registration for Non-Hotel Stays
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              If you stay with friends or family, you must register within 24 hours at the local police station
              (派出所), usually with your host present. Bring your passport, visa, the host&apos;s ID card, and a rental
              agreement if applicable. Fill out the temporary residence form and keep the receipt.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Visa Overstays</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              The listed fine is typically ¥500 per day overstayed, and the consequences can extend beyond the payment
              itself. Overstays may affect future visa applications. If you realize you have overstayed, go to the local
              Exit-Entry Bureau immediately. If you need more time, request an extension before your current permission
              expires.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Lost Passport</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              If your passport is lost, file a police report immediately, contact your embassy or consulate, apply for an
              emergency travel document, and then visit the Exit-Entry Bureau to update your status. Moving fast matters
              because hotels and onward transport may not accept improvised proof of identity.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Screenshot your passport info page as backup, but never treat that as a replacement.</p>
            <p>Keep photocopies separate from the passport itself so one loss does not wipe out both.</p>
            <p>Set phone reminders for your visa expiry date and any registration deadlines.</p>
            <p>Do not let anyone keep your passport except hotels briefly during check-in or authorities when required.</p>
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
          icon="📄"
          title="Check Your Visa Status Too"
          description="Passport rules and visa validity are tightly linked. Overstays get expensive fast."
          buttonText="Read the Visa Guide →"
          buttonHref="/china-basics/how-china-differs/visa-guide"
          variant="secondary"
        />
      </main>
    </div>
  )
}
