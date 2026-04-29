import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Public Buses in China | Trail of China',
  description:
    'Guide to using public buses in China. Routes, payment with Alipay/WeChat, bus etiquette, and when buses are the best option.',
}

const setupSteps = [
  {
    title: 'Find your route',
    description: 'Use Baidu Maps or apps like Moovit to plan your route before heading out.',
  },
  {
    title: 'Get to the stop',
    description: 'Bus stop signs mostly show routes in Chinese, though major stops may have English announcements.',
  },
  {
    title: 'Pay your fare',
    description: 'Tap a transport card, scan an Alipay or WeChat QR code, or use exact cash in coins or small bills.',
  },
  {
    title: 'Board and ride',
    description: 'Enter through the front door and exit through the back while watching the onboard display for your stop.',
  },
  {
    title: 'Know when to get off',
    description: 'Press the stop button if needed and keep your destination written in Chinese.',
  },
]

const relatedArticles = [
  {
    title: 'Train Travel',
    description: 'High-speed rail between Chinese cities.',
    href: '/china-basics/how-to-get-around/train',
  },
  {
    title: 'Metro & Subway',
    description: 'Navigate Chinese city subways.',
    href: '/china-basics/how-to-get-around/metro-subway',
  },
  {
    title: 'Getting Around',
    description: 'All transport options for China travelers.',
    href: '/china-basics/how-to-get-around',
  },
  {
    title: 'Alipay Guide',
    description: 'Pay for buses, metro, and everything else.',
    href: '/china-basics/what-apps-to-use/alipay',
  },
]

export default function BusPage() {
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
              { label: 'Bus' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="公" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Public Buses
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">公交</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Usually ¥2 to ¥4 per ride</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Best when you know the route</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Airport express buses can be excellent value</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Buses are the cheapest way to get around Chinese cities, but they reward preparation. They work best when you have
          already mapped the route or when a local has pointed you in the right direction.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/bus-china/1600/900"
            alt="Public bus in a Chinese city"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Buses cost only about ¥2 to ¥4 per ride, which makes them the cheapest urban transport option almost anywhere in
              China.
            </p>
            <p>
              They are especially useful for airport express routes, tourist shuttle links to attractions beyond the metro, and
              scenic or sightseeing buses that double as practical transport.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How to Use Buses</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="leading-relaxed">
                <p>
                  <strong>{step.title}.</strong> {step.description}
                </p>
                {index === 2 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/china-bus-qr/800/1200"
                      alt="Bus QR payment in China"
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
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">When Buses Make Sense</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Airport express buses are reliable and far cheaper than taxis. Tourist shuttle buses can take you to major
              attractions that the metro does not reach directly, and some cities run sightseeing loops that are both transport
              and soft orientation tour.
            </p>
            <p>
              Baidu Maps is especially helpful here because it can show bus routes and, in many places, real-time arrival
              information that makes the system far less opaque.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Keep exact change if you plan to pay cash because drivers do not give change.</p>
            <p>Buses can get extremely crowded during rush hour from 7 to 9 AM and 5 to 7 PM.</p>
            <p>Last buses often stop surprisingly early, sometimes between 20:00 and 22:00, so check schedules in advance.</p>
            <p>Give up your seat for elderly, pregnant, or disabled passengers.</p>
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
          title="Traveling Between Cities?"
          description="China's high-speed rail is fast, affordable, and connects every major city. Book tickets online with 12306."
          buttonText="Train Travel Guide →"
          buttonHref="/china-basics/how-to-get-around/train"
          variant="secondary"
        />
      </main>
    </div>
  )
}
