import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Shared Bikes in China',
  description: 'Guide to using shared bicycles in Chinese cities. Mobike, HelloBike, and tips.',

  path: '/china-basics/how-to-get-around/bicycle',
})

const relatedArticles = [
  {
    title: 'Metro & Subway',
    description: 'City subway systems across China.',
    href: '/china-basics/how-to-get-around/metro-subway',
  },
  {
    title: 'How to Get Around',
    description: 'All transportation options in China.',
    href: '/china-basics/how-to-get-around',
  },
]

export default function BicyclePage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Bicycle", path: "/china-basics/how-to-get-around/bicycle" }]);
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
              { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
              { label: 'Bicycle' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="骑" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Shared Bicycles
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">单车</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        <AuthorByline />
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Usually ¥1.5 to ¥2 for 30 minutes</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Best for 1 to 3 km trips</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Check tires and brakes first</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Shared bikes are one of the most distinctly Chinese urban travel habits: cheap, fast for short distances, and ideal
          for drifting through neighborhoods that feel too close for metro and too annoying for cars.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-shared-bikes/1600/900"
            alt="Shared bicycles in a Chinese city"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Shared bikes are among the cheapest and fastest ways to cover short urban trips in China, especially when you do
              not want to route yourself through a station or wait for a car.
            </p>
            <p>
              They are ideal for exploring neighborhoods at your own pace, including hutongs and side streets where cars and
              metro are less convenient, and they can often be unlocked directly through apps you already use.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Major Bike Brands</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Meituan (美团)</strong> runs the familiar yellow bikes and is often the most visible network.
              <strong> HelloBike (哈啰)</strong> uses blue bikes and integrates cleanly with Alipay.
            </p>
            <p>
              <strong>DiDi Bike</strong> appears in some cities as the green option. Coverage varies, which is why having more
              than one app can help.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/china-bike-qr/800/1200"
              alt="Shared bike QR unlock screen"
              className="mx-auto w-full max-w-md rounded-lg object-cover"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How to Use Them</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            <li>Download a bike app or use the bike service inside Alipay or WeChat.</li>
            <li>Scan the QR code on the bike to unlock it.</li>
            <li>Ride to your destination and park in the designated area.</li>
            <li>Lock the bike manually to end the ride.</li>
            <li>Let payment run automatically from your linked account.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pricing</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>Usually ¥1.5 to ¥2 for 30 minutes.</li>
            <li>Monthly passes are often available for around ¥10 to ¥20.</li>
            <li>Deposits may still be required depending on the provider.</li>
            <li>Long rides can trigger overage fees.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Check the bike condition before unlocking, especially tires and brakes.</p>
            <p>Use bikes for short one to three kilometer trips where they are clearly more efficient than transit transfers.</p>
            <p>They are particularly good for exploring older neighborhoods and hutongs.</p>
            <p>Avoid rush hour if you are not comfortable in chaotic traffic.</p>
            <p>Download multiple apps because not every bike network is interoperable.</p>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Safety First</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Traffic can be chaotic, so ride defensively and stay in bike lanes where available.</p>
            <p>Helmets are usually not provided, which means you should be conservative about speed and route choice.</p>
            <p>Watch for cars turning right on red, and do not rely on sidewalks because riding there is technically illegal.</p>
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
          icon="🚇"
          title="Need a Longer-Distance Option?"
          description="Bikes are great for short hops, but metro systems are the backbone of city travel in China."
          buttonText="Read the Metro Guide →"
          buttonHref="/china-basics/how-to-get-around/metro-subway"
          variant="secondary"
        />
      </main>
    </div>
    </>
  )
}
