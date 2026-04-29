import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Maps Apps for China',
  description:
    'Choose the best map tools for China travel, including local app options, offline backups, and translation tactics.',
}

const setupSteps = [
  {
    title: 'Install one global map and one China-focused map',
    description:
      'Use a familiar global app for planning and a local app such as Amap or Baidu Maps for on-the-ground accuracy.',
  },
  {
    title: 'Pre-save hotel and station names in Chinese',
    description:
      'Ask your hotel for its name and address in Chinese characters so taxi drivers and map search can match exactly.',
  },
  {
    title: 'Download offline zones for your arrival city',
    description:
      'Keep an offline layer for airport transfers and first-day navigation if your mobile data setup is delayed.',
  },
  {
    title: 'Create favorites for repeated locations',
    description:
      'Pin hotels, major attractions, rail stations, and embassy contacts before each intercity transfer day.',
  },
]

const relatedArticles = [
  {
    title: 'How to Get Around',
    description: 'Navigation tips for trains, metro, and taxis.',
    href: '/china-basics/how-to-get-around',
  },
  {
    title: 'Didi Guide',
    description: 'Ride-hailing with built-in navigation.',
    href: '/china-basics/what-apps-to-use/didi',
  },
]

export default function MapsAppsPage() {
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
              { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
              { label: 'Maps' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="图" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Maps Apps for China
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">地图</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Global + local stack</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Chinese text search helps</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Offline backup matters</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Standard global maps can miss details or use different naming conventions. In China, a local-first map stack is
          often the difference between finding the right metro exit and wandering the wrong shopping complex.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-maps/1600/900"
            alt="Navigation in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Chinese addresses are often easier to locate with Chinese text input, and that affects more than walking
              directions. If your map app cannot resolve the exact hotel entrance, mall pickup point, or station gate, every
              taxi and delivery interaction gets harder.
            </p>
            <p>
              Accurate pin drops matter for ride-hailing and delivery-style meeting zones. China&apos;s large malls, rail stations,
              and office compounds often have multiple entrances, so being roughly correct is not enough.
            </p>
            <p>
              Offline access is also useful during the first hour after landing, while switching SIMs, or any time your signal
              drops in transit corridors and underground stations.
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
                {index === 1 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/maps-chinese-address/800/1200"
                      alt="Chinese address saved in a maps app"
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
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">A Practical Map Stack</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Global map for planning</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Keep a familiar global map app for broad planning, saved lists, and research before the trip. It remains useful
              for organizing your itinerary even if the live details on the ground are imperfect.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">
            Local map for real-time accuracy
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Amap and Baidu Maps are stronger when you need the exact metro exit, the correct taxi pickup lane, or a search
              result that only resolves cleanly in Chinese. That local accuracy is why it is worth keeping one of them
              installed even if you do not love the interface.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/maps-local-app/1600/900"
              alt="Local maps app showing detailed directions"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
            <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Keep the nearest metro exit number in your notes. In dense Chinese cities, that detail often matters more than the
            station name itself.
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
  )
}
