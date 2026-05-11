import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Meituan App Guide: Food Delivery, Hotels & Deals in China',
  description:
    'Complete guide to Meituan (美团): order food delivery, book hotels, buy movie tickets, and get group deals. Setup tips for foreign travelers in China.',

  path: '/china-basics/what-apps-to-use/meituan',
})

const setupSteps = [
  {
    title: 'Download Meituan and set language to English',
    description:
      'Search for Meituan in your app store or download it from the official site. The English support covers the basics, but expect Chinese text for menus and merchant details.',
  },
  {
    title: 'Create an account with your phone number',
    description:
      'Enter your international phone number and wait for the SMS code. As with other Chinese apps, international verification texts can be delayed by a few minutes.',
  },
  {
    title: 'Link payment methods',
    description:
      'Go to My, Wallet, and Add Payment Method. Meituan accepts Alipay, WeChat Pay, and some international cards through Alipay partnerships. For most travelers, Alipay is the cleanest default.',
  },
  {
    title: 'Complete identity verification if needed',
    description:
      'Orders above ¥200 or hotel bookings may trigger passport verification. Upload the required details before you rely on the app for check-in or bigger purchases.',
  },
  {
    title: 'Test with a small food delivery',
    description:
      'Start with a ¥15-20 meal from a nearby restaurant. That teaches you the order flow, delivery fee logic, and how merchant menus are structured before you try something time-sensitive.',
  },
]

const relatedArticles = [
  {
    title: 'Alipay Guide',
    description: 'Pay for Meituan orders with Alipay.',
    href: '/china-basics/what-apps-to-use/alipay',
  },
  {
    title: 'Payment Apps Overview',
    description: 'Why you need Alipay and WeChat Pay in cashless China.',
    href: '/china-basics/what-apps-to-use/payment',
  },
]

export default function MeituanPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "What Apps to Use", path: "/china-basics/what-apps-to-use" }, { name: "Meituan", path: "/china-basics/what-apps-to-use/meituan" }]);
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
              { label: 'Meituan' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="团" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Meituan App Guide: Food Delivery, Hotels &amp; Deals in China
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">美团</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        <AuthorByline />
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">600M+ monthly users</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Food delivery + deals</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Hotels + bikes + tickets</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Meituan is one of the apps that makes China feel operationally different. It is not just for food delivery. It is
          also a booking layer for hotels, movie tickets, local deals, and small logistics that locals handle from their
          phones.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/meituan-food/1600/900"
            alt="Ordering food with Meituan"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Meituan dominates food delivery and handles a huge share of the casual purchases travelers end up making:
              takeaway meals, quick hotel bookings, movie tickets, bike rentals, and group-buying deals for activities.
            </p>
            <p>
              Hotel deals on Meituan can undercut walk-in pricing, and movie tickets or bundled local offers are often cheaper
              in-app than at the venue. That pricing edge is part of why locals check Meituan before paying retail.
            </p>
            <p>
              For travelers, the real value is access to local options that may never surface on international apps. If you
              want a late-night meal delivered or a discounted spa, hot pot set, or local experience, this is where it often
              lives.
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
                      src="https://picsum.photos/seed/meituan-wallet/800/1200"
                      alt="Meituan payment setup"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
                {index === 4 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/meituan-order-food/800/1200"
                      alt="Meituan food order screen"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">What Meituan Can Do</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Food delivery</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Delivery fees usually sit around ¥3-8 depending on distance, and many orders over ¥50 qualify for free
              delivery. Minimum order amounts vary by restaurant, so combining orders with a travel companion often makes the
              economics better.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Hotel and local deals</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Meituan is not just a food app. It is also strong for discounted hotels, movie tickets, spa treatments, escape
              rooms, and other group-buying offers that are priced for local demand rather than international tourists.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/meituan-deals/1600/900"
              alt="Meituan local deals screen"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Bike sharing</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Meituan&apos;s bike-sharing integration means you can unlock bikes without downloading a separate cycling app, which
              is useful for short neighborhood trips where walking is a bit too far and calling a car would be inefficient.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Save screenshots of order confirmations and tracking screens. Support can be hard to navigate if you do not speak
            Chinese, and screenshots make disputes far easier.
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
