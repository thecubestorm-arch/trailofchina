import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Taxis in China',
  description: 'How to take traditional taxis in China. Tips for hailing, payment, and getting around.',

  path: '/china-basics/how-to-get-around/taxi',
})

const relatedArticles = [
  {
    title: 'Didi Ride-Hailing',
    description: "China's Uber — book rides from your phone.",
    href: '/china-basics/how-to-get-around/didi',
  },
  {
    title: 'How to Get Around',
    description: 'All transportation options in China.',
    href: '/china-basics/how-to-get-around',
  },
]

export default function TaxiPage() {
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
              { label: 'Taxi' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="的" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Traditional Taxis
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">出租车</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Useful backup to Didi</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Cash always accepted</span>
          <span className="text-[var(--muted)]">·</span>
          <span>No tipping required</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          When your battery is low, your app is acting up, or you need a ride immediately, knowing how traditional taxis work
          is still useful even in a Didi-first travel routine.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-traditional-taxi/1600/900"
            alt="Traditional taxis in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Traditional taxis are still plentiful in China, and they remain a practical fallback when ride-hailing is slow,
              your phone battery is dying, or you need to leave immediately without waiting for a match.
            </p>
            <p>
              They are also useful in moments when app-based destination entry becomes harder than simply showing a Chinese
              address card to a driver.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Types of Taxis</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Standard taxis</strong> are the most common and often come in city-specific colors.
              <strong> Electric taxis</strong> are increasingly common and tend to be quieter and newer.
            </p>
            <p>
              <strong>Luxury taxis</strong> are often black with a gold stripe and charge higher rates, while
              <strong> minivans</strong> are useful if you have a group or a lot of luggage.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/china-taxi-stand/1600/900"
              alt="Taxi stand in China"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How to Hail a Taxi</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            <li>Use hotel taxi stands when possible because they are the most reliable and drivers are usually easier to coordinate with.</li>
            <li>Wave at empty taxis on the street and check for the red dashboard light that shows the cab is available.</li>
            <li>Look for official taxi stands at airports, train stations, and major attractions.</li>
            <li>Have your destination ready in Chinese characters before you get in.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Payment &amp; Tipping</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>Cash is always accepted.</li>
            <li>WeChat Pay and Alipay are increasingly common.</li>
            <li>Credit cards are rarely accepted.</li>
            <li>No tipping is required because it is not part of normal taxi culture.</li>
            <li>If you want to be nice, rounding up to the nearest yuan is enough.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Have your destination written in Chinese and carry a hotel business card.</p>
            <p>Use Baidu Maps to follow the route if you want extra confidence.</p>
            <p>Rush hour from 7 to 9 AM and 5 to 7 PM can make street hailing much harder.</p>
            <p>Flag down taxis on streets already moving in your direction, and insist on the meter with “Dǎ biǎo” (打表).</p>
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
          title="Use DiDi When You Can"
          description="Traditional taxis are useful backup, but DiDi is usually easier for pickup, destination entry, and payment."
          buttonText="DiDi Guide →"
          buttonHref="/china-basics/how-to-get-around/didi"
          variant="secondary"
        />
      </main>
    </div>
  )
}
