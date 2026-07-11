import type { Metadata } from 'next'
import { makeMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: "China's Best Cities — Travel Guide",
  description: 'A complete guide to 7 must-visit cities in China: Beijing, Shanghai, Xi\'an, Chengdu, Chongqing, Guangzhou & Shenzhen. Top attractions, best times to visit & trip routes.',
  path: '/destinations',
})

const cities = [
  {
    emoji: '🏛️',
    name: 'Beijing',
    tagline: "China's Capital, 3,000 Years of History",
    description:
      'Beijing is the political and cultural heart of China. From imperial palaces to hutong alleyways, the city blends ancient grandeur with modern energy like nowhere else.',
    top3: ['Forbidden City', 'Great Wall', 'Temple of Heaven'],
    bestTime: 'Spring (April–May) or Autumn (September–October)',
    days: '3–4 days minimum',
    highlight: 'Eat Peking duck at a local restaurant!',
  },
  {
    emoji: '🌃',
    name: 'Shanghai',
    tagline: 'Futuristic Skyline + Colonial Past',
    description:
      "Shanghai dazzles with the world's most futuristic skyline along the Pudong riverfront, while the historic Bund and former French Concession reveal its cosmopolitan past.",
    top3: ['The Bund', 'Yu Garden', 'French Concession'],
    bestTime: 'March–May, October–November',
    days: '2–3 days',
    highlight: 'Take a night cruise on the Huangpu River.',
  },
  {
    emoji: '🏺',
    name: "Xi'an",
    tagline: 'Ancient Capital, Terracotta Army',
    description:
      "Xi'an was the eastern terminus of the Silk Road and capital of 13 dynasties. Today it is most famous for the thousands of Terracotta Warriors guarding Emperor Qin Shi Huang's tomb.",
    top3: ['Terracotta Warriors', 'City Wall', 'Muslim Quarter'],
    bestTime: 'March–May, September–November',
    days: '2 days',
    highlight: 'Try Biangbiang Noodles — a local specialty!',
  },
  {
    emoji: '🐼',
    name: 'Chengdu',
    tagline: 'Home of the Pandas, Capital of Spice',
    description:
      "Chengdu is synonymous with two things: giant pandas and Sichuan hotpot. It's a laid-back city where teahouses, street food, and the cutest bears on Earth take center stage.",
    top3: ['Panda Base', 'Jinli Ancient Street', 'Wenshu Temple'],
    bestTime: 'March–June, September–November',
    days: '2–3 days',
    highlight: 'Eat real Sichuan hotpot — numbingly good!',
  },
  {
    emoji: '🌆',
    name: 'Chongqing',
    tagline: 'Mountain City, Cyberpunk Vibes',
    description:
      'Built on steep hills where the Yangtze and Jialing rivers meet, Chongqing is a maze of vertical streets, neon-lit cliffs, and arguably the best hotpot in China.',
    top3: ['Hongya Cave', 'Ciqikou Old Town', 'Yangtze Cable Car'],
    bestTime: 'March–May, October–November',
    days: '2 days',
    highlight: 'See the city lit up like a sci-fi movie at night.',
  },
  {
    emoji: '🌺',
    name: 'Guangzhou',
    tagline: 'South China, Dim Sum & Cantonese Culture',
    description:
      'Guangzhou is the cradle of Cantonese cuisine and a fascinating blend of traditional temples, colonial-era Shamian Island, and cutting-edge modern towers.',
    top3: ['Canton Tower', 'Shamian Island', 'Chen Clan Ancestral Hall'],
    bestTime: 'October–December',
    days: '2 days',
    highlight: 'Start your day with traditional Dim Sum.',
  },
  {
    emoji: '🏙️',
    name: 'Shenzhen',
    tagline: "China's Tech Capital, Most Modern City",
    description:
      "Shenzhen went from fishing village to mega-metropolis in 40 years. It's China's Silicon Valley, home to Huaqiangbei electronics market, world-class parks, and futuristic architecture.",
    top3: ['Window of the World', 'Shenzhen Bay', 'Dongmen Walking Street'],
    bestTime: 'October–April',
    days: '1–2 days',
    highlight: 'Shop for gadgets at Huaqiangbei electronics market.',
  },
]

const routes = [
  {
    label: '7-Day Route',
    cities: ['Beijing', "Xi'an", 'Shanghai'],
    desc: 'The classic first-timer loop: imperial history, ancient warriors, and the modern metropolis.',
  },
  {
    label: '10-Day Route',
    cities: ['Beijing', "Xi'an", 'Chengdu', 'Shanghai'],
    desc: 'Add Chengdu for pandas and spicy Sichuan food between history and skyline.',
  },
  {
    label: '14-Day Route',
    cities: ['Beijing', "Xi'an", 'Chengdu', 'Chongqing', 'Shanghai'],
    desc: 'The grand tour: every highlight from the Wall to the Yangtze cliffs.',
  },
]

export default function DestinationsPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-[100dvh]">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative overflow-hidden px-5 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[60vh] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[2.25rem] leading-[1.1] font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              China&apos;s Best Cities
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[var(--muted)]">
              7 cities, 35+ attractions, one guide.
            </p>
          </div>
        </section>

        {/* ─────────────── Cities ─────────────── */}
        <section className="px-5 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-16 sm:space-y-20">
            {cities.map((city, i) => (
              <article
                key={city.name}
                id={city.name.toLowerCase()}
                className="group relative rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10"
              >
                {/* Number badge */}
                <span className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-base">
                  {i + 1}
                </span>

                {/* Header */}
                <div className="mb-5 flex items-center gap-3 sm:mb-6">
                  <span className="text-3xl sm:text-4xl" role="img" aria-label={city.name}>
                    {city.emoji}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
                      {city.name}
                    </h2>
                    <p className="mt-0.5 text-sm font-medium text-[var(--accent)] sm:text-base">
                      {city.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-[var(--muted)] sm:text-lg">
                  {city.description}
                </p>

                {/* Info grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Top 3 */}
                  <div className="rounded-2xl bg-white/60 p-4 backdrop-blur-sm">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Top 3 Attractions
                    </p>
                    <ul className="space-y-1 text-[15px] text-[var(--foreground)]">
                      {city.top3.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best time */}
                  <div className="rounded-2xl bg-white/60 p-4 backdrop-blur-sm">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Best Time to Visit
                    </p>
                    <p className="text-[15px] text-[var(--foreground)]">{city.bestTime}</p>
                  </div>

                  {/* Days */}
                  <div className="rounded-2xl bg-white/60 p-4 backdrop-blur-sm">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      How Many Days
                    </p>
                    <p className="text-[15px] text-[var(--foreground)]">{city.days}</p>
                  </div>

                  {/* Highlight */}
                  <div className="rounded-2xl bg-[var(--accent-soft)] p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-strong)]">
                      Insider Tip
                    </p>
                    <p className="text-[15px] font-medium text-[var(--accent-strong)]">
                      {city.highlight}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─────────────── Route Suggestions ─────────────── */}
        <section className="border-t border-[var(--line)] bg-[var(--background-strong)] px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl lg:text-4xl">
              Suggested Itineraries
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-[var(--muted)] sm:text-lg">
              Ready-made routes that hit the highlights without rushing.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <div
                  key={route.label}
                  className="rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-card)] sm:p-8"
                >
                  <h3 className="text-lg font-bold text-[var(--foreground)] sm:text-xl">
                    {route.label}
                  </h3>

                  {/* Route flow */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                    {route.cities.map((c, idx) => (
                      <span key={c} className="flex items-center gap-1.5">
                        <span className="rounded-md bg-[var(--accent-soft)] px-2 py-1">
                          {c}
                        </span>
                        {idx < route.cities.length - 1 && (
                          <span className="text-[var(--muted)]">→</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
                    {route.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── CTA ─────────────── */}
        <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-[var(--muted)] sm:text-xl">
              Planning a trip? We can help you build a custom itinerary.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-soft)] hover:bg-[var(--primary-hover)]"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
