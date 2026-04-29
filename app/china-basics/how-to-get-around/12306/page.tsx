import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: '12306 Train Booking: How to Buy China Train Tickets Like a Local',
  description:
    "Master the 12306 app — China's official train booking platform. Step-by-step guide for foreigners to book high-speed rail tickets, pick seats, and book with confidence.",
}

const setupSteps = [
  {
    title: 'Download the 12306 app and switch to English',
    description:
      'Download "China Railway 12306" from your app store. On first launch, tap the language icon to switch to English. The English interface covers all essential booking functions.',
  },
  {
    title: 'Register with your passport information',
    description:
      'Tap "Register" and enter your passport number, full name exactly as on your passport, nationality, and phone number. Your phone number can be from any country and SMS verification works internationally.',
  },
  {
    title: 'Verify your identity',
    description:
      'After registration, check your verification status. Most foreign passports are verified automatically within 24 hours. If not, you can verify at any train station ticket counter with your passport.',
  },
  {
    title: 'Search for trains and select your route',
    description:
      'Enter your departure and arrival cities, date, and preferred time. The app shows all available trains with duration, price, and seat availability. G and D trains are fastest, while K and T trains are slower but cheaper.',
  },
  {
    title: 'Choose your seat class and position',
    description:
      'Second class is comfortable and affordable. First class gives you wider seats and more legroom. Business class is the premium option with reclining seats, and most routes let you choose a window or aisle seat.',
  },
  {
    title: 'Pay and receive your e-ticket',
    description:
      'Pay via Alipay, WeChat Pay, or international Visa or Mastercard. Your e-ticket is linked to your passport number, so you usually just scan your passport at the station turnstile and do not need to print anything.',
  },
]

const relatedArticles = [
  {
    title: 'Train Travel in China',
    description: 'Everything about high-speed rail and seat types.',
    href: '/china-basics/how-to-get-around/train',
  },
  {
    title: 'Travel Booking Apps',
    description: 'Trip.com and other booking platforms.',
    href: '/china-basics/what-apps-to-use/travel',
  },
  {
    title: 'Getting Around China',
    description: 'All transport options in one place.',
    href: '/china-basics/how-to-get-around',
  },
  {
    title: 'Payment Apps',
    description: 'Set up the payment tools that make booking easier.',
    href: '/china-basics/what-apps-to-use/payment',
  },
  {
    title: 'Alipay Guide',
    description: 'Useful if you plan to pay inside 12306 or other travel apps.',
    href: '/china-basics/what-apps-to-use/alipay',
  },
]

export default function TrainBookingPage() {
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
              { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
              { label: '12306 Train Booking' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="铁" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            12306 Train Booking: How to Buy China Train Tickets Like a Local
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">铁路</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Official booking source</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Exact seat selection</span>
          <span className="text-[var(--muted)]">·</span>
          <span>E-tickets tied to passport</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          12306 is the official booking platform for China&apos;s high-speed rail network, with real-time availability, no
          markup, and far better control over your seat and departure choices than most third-party apps.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-train/1600/900"
            alt="Train travel in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              12306 is the only official source. Third-party sites often add markups of roughly ¥20 to ¥50 per ticket, and
              the best departures can disappear there faster than on the official platform.
            </p>
            <p>
              China&apos;s high-speed trains sell out during holidays, weekends, and other peak windows, so being able to book
              directly matters. The app also lets you choose seat class, pick window or aisle positions, and rely on e-tickets
              instead of printed paper.
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
                      src="https://picsum.photos/seed/12306-language/800/1200"
                      alt="12306 app language settings"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                    <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/12306-verification/800/1200"
                      alt="12306 passport verification screen"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                    <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
                  </div>
                )}
                {index === 5 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/12306-ticket/800/1200"
                      alt="12306 e-ticket confirmation"
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
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Booking Notes</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Book 15 days in advance for the best availability because tickets go on sale 15 days before departure. Second
              class on G-trains is perfectly comfortable for most routes under five hours, and the waitlist is worth trying if
              your first choice sells out.
            </p>
            <p>
              Arrive at the station 30 to 45 minutes early in major cities because security lines can be long during rush
              periods. The 12306 app also works offline for viewing booked tickets, but it is still smart to screenshot your
              ticket details before leaving Wi-Fi.
            </p>
            <p>
              Children under 1.2 meters ride free without a seat, while children under 1.5 meters usually pay a child fare if
              they need their own seat.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Use the waitlist feature when trains look sold out because cancellations are common.</p>
            <p>Second class is usually the best value unless you are doing a very long daytime route.</p>
            <p>Keep passport name formatting identical across your booking profile and payment details.</p>
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--primary)]">Related Articles</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 transition-colors hover:bg-[#faf8f4]">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--primary)]">
                    {article.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContextualCTA
          icon="🚄"
          title="Book Trains Easily with Trip.com"
          description="The easiest way for foreigners to book China trains in English with foreign cards."
          buttonText="Book on Trip.com →"
          buttonHref="/china-basics/what-apps-to-use/trip-com"
          variant="secondary"
        />
      </main>
    </div>
  )
}
