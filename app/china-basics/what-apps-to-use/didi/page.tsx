import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: "Didi Chuxing Guide: China's Uber for Taxis & Ride-Hailing",
  description:
    'How to use Didi (滴滴) in China: ride-hailing, bike sharing, and bus routes. Setup guide, safety tips, and pricing for foreign travelers.',

  path: '/china-basics/what-apps-to-use/didi',
})

const setupSteps = [
  {
    title: 'Download Didi and set language to English',
    description:
      'Search for Didi Chuxing or Didi in your app store. The official app is blue with white text. On first launch, go to Settings and switch to English. The interface helps, but many addresses and driver messages still appear in Chinese.',
  },
  {
    title: 'Create an account with your phone number',
    description:
      'Enter your international phone number with country code and wait for the SMS verification code. International messages can take three to five minutes, so keep signal steady while registering.',
  },
  {
    title: 'Link payment methods',
    description:
      'Go to My, Wallet, and Add Payment Method. Didi accepts Alipay, WeChat Pay, and some international cards through Alipay partnerships. For tourists, linking Alipay is usually the most reliable path.',
  },
  {
    title: 'Set up your profile and preferences',
    description:
      'Complete your profile with a name and photo for driver reference. Enable English interface and bilingual driver preferences if available, and save common destinations such as your hotel or the airport.',
  },
  {
    title: 'Test with a short ride',
    description:
      'Book a short ride in your neighborhood first. Enter the destination in pinyin if needed, confirm your pickup point carefully, and learn how the driver and passenger flows work before you depend on it for an airport transfer.',
  },
]

const relatedArticles = [
  {
    title: 'Alipay Guide',
    description: 'Pay for Didi rides and more with Alipay.',
    href: '/china-basics/what-apps-to-use/alipay',
  },
  {
    title: 'How to Get Around',
    description: 'All transportation options in China.',
    href: '/china-basics/how-to-get-around',
  },
]

export default function DidiPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "What Apps to Use", path: "/china-basics/what-apps-to-use" }, { name: "DiDi", path: "/china-basics/what-apps-to-use/didi" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
              { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
              { label: 'Didi' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="滴" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Didi Chuxing Guide: China&apos;s Uber for Taxis &amp; Ride-Hailing
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">滴滴</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        <AuthorByline />
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">500+ cities</span>
          <span className="text-[var(--muted)]">·</span>
          <span>English interface</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Bike sharing + ride-hailing</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Didi is the default ride-hailing app for most cities in China. For travelers, it reduces language friction,
          standardizes pricing, and makes airport and station transfers much simpler.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/didi-ride-china/1600/900"
            alt="Didi ride-hailing in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Didi dominates China&apos;s ride-hailing market and is the default transport app for both locals and visitors.
              Prices are often lower than international Uber-style rates, and the quoting is transparent before you commit.
            </p>
            <p>
              The app supports an English interface and can reduce the awkwardness of explaining an address to a taxi driver.
              It also gives you license plate details, route visibility, and trip sharing tools that make unfamiliar city
              travel less stressful.
            </p>
            <p>
              Beyond cars, Didi also folds in bike-sharing and other local mobility services, which means it covers more of
              the short-hop movement you actually do between metro exits, hotels, and restaurants.
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
                      src="https://picsum.photos/seed/didi-wallet-setup/800/1200"
                      alt="Didi payment setup screen"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
                {index === 4 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/didi-book-ride/800/1200"
                      alt="Didi ride booking screen"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Key Features</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Ride options</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Didi Express is the affordable standard and usually runs around ¥2-4 per kilometer. Didi Premier offers more
              comfortable vehicles at a higher price, and airport rides can be scheduled in advance if timing matters.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Safety tools</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Real-time trip sharing, driver details, and in-app SOS features are the practical reasons to use Didi instead
              of flagging random cabs when you are tired or in an unfamiliar part of town.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Bike sharing</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Didi&apos;s bike-sharing integration means you can rent bikes directly without separate app downloads or deposits.
              It is useful for those short city hops where walking is slightly too far and taking a car would be overkill.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Always confirm the license plate matches the app before getting in. That simple check matters more than any other
            Didi safety habit.
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
          icon="🌐"
          title="Need Internet in China?"
          description="Get an eSIM before you go and stay connected the moment you land."
          buttonText="Get an eSIM →"
          buttonHref="/china-basics/how-to-get-internet/airalo-esim"
          variant="secondary"
        />
      </div>
    </div>
    </>
  )
}
