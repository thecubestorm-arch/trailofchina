import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'DiDi Ride-Hailing in China | Trail of China',
  description:
    "Complete guide to using DiDi, China's Uber equivalent. Setup, payment, car types, and safety tips for foreign travelers.",

  path: '/china-basics/how-to-get-around/didi',
})

const relatedArticles = [
  {
    title: 'Taxi Guide',
    description: 'Traditional taxi tips and getting around.',
    href: '/china-basics/how-to-get-around/taxi',
  },
  {
    title: 'Didi App Guide',
    description: 'Set up the Didi app for ride-hailing.',
    href: '/china-basics/what-apps-to-use/didi',
  },
]

export default function DidiPage() {
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
              { label: 'Didi' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="滴" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            DiDi Ride-Hailing
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">滴滴</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Usually under 2 minutes to match</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Express is the cheapest option</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Foreign cards now accepted</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          DiDi is the default ride-hailing tool in Chinese cities. It removes the language friction of street taxis and is
          often the easiest way to get from airport, station, hotel, and restaurant without negotiation.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-didi-transport/1600/900"
            alt="Didi ride-hailing in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              DiDi is usually easier than flagging taxis because the app handles pickup, destination entry, and payment in one
              place. That removes a lot of the language friction that can slow down first-time visitors.
            </p>
            <p>
              It is also often cheaper and more predictable than a traditional taxi, especially if you are unfamiliar with the
              city or arriving late.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">App Setup</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            <li>Download DiDi from the App Store or Google Play.</li>
            <li>Register with your foreign phone number and verification code.</li>
            <li>Link payment, since international credit cards are now accepted.</li>
            <li>Add a profile photo if you want it to be easier for drivers to identify you at pickup.</li>
          </ol>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/didi-pickup-map/800/1200"
              alt="Didi pickup map screen"
              className="mx-auto w-full max-w-md rounded-lg object-cover"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How to Use It</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>Enter your destination. English often works in major cities, but pins are more reliable than text alone.</li>
            <li>Select a car type. Express (快车) is the cheapest and most common choice.</li>
            <li>Wait for driver assignment, which is often under two minutes.</li>
            <li>Check the license plate before getting in.</li>
            <li>Let payment run automatically after the ride.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Car Types</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Express (快车)</strong> is the standard private-car option and the cheapest default.
            </p>
            <p>
              <strong>Premier (专车)</strong> gives you higher-end vehicles and more professional drivers, while
              <strong> Taxi (出租车)</strong> lets you call a traditional taxi through the app itself.
            </p>
            <p>
              <strong>Six-seater (六座)</strong> is the useful option for groups or travelers carrying a lot of luggage.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Take a screenshot of the driver info before the ride.</p>
            <p>Share the trip with a friend using the in-app feature.</p>
            <p>Pin your location carefully because sloppy pickup pins are a common source of confusion.</p>
            <p>Learn “I am here” in Chinese: “Wǒ zài zhèlǐ” (我在这里).</p>
            <p>Rate drivers honestly because the system does respond to ratings.</p>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Safety First</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Always check that the license plate matches the app.</p>
            <p>Sit in the back seat rather than the front.</p>
            <p>Share your trip with someone if possible.</p>
            <p>Use the official DiDi app only and ignore clones or side-loaded copies.</p>
            <p>The emergency button is built into the app if you need it.</p>
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
          icon="📱"
          title="Set Up the App Before You Need It"
          description="The transport guide explains how to use Didi, but the app guide covers payments and setup in more detail."
          buttonText="Open the Didi App Guide →"
          buttonHref="/china-basics/what-apps-to-use/didi"
          variant="secondary"
        />
      </main>
    </div>
  )
}
