'use client'

import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'

/* ────────────────────────────────────────────────
   Route data
   ────────────────────────────────────────────── */

interface RouteStop {
  city: string
  days: number
  highlights?: string[]
}

interface Route {
  name: string
  emoji: string
  duration: string
  stops: RouteStop[]
  transport: string
  perfectFor: string
  image: string
  imageAlt: string
}

const routes: Route[] = [
  {
    name: 'Classic 7 Days',
    emoji: '🏛️',
    duration: '7 Tage',
    stops: [
      { city: 'Beijing', days: 3, highlights: ['Forbidden City', 'Great Wall', 'Temple of Heaven'] },
      { city: "Xi'an", days: 1, highlights: ['Terracotta Warriors'] },
      { city: 'Shanghai', days: 2, highlights: ['The Bund', 'Yu Garden'] },
    ],
    transport: 'Flug: Beijing → Xi\'an → Shanghai',
    perfectFor: 'Erstbesucher',
    image: '/images/beijing/great-wall.jpg',
    imageAlt: 'Great Wall winding across the hills outside Beijing',
  },
  {
    name: 'Food & Pandas',
    emoji: '🐼',
    duration: '10 Tage',
    stops: [
      { city: 'Beijing', days: 3 },
      { city: "Xi'an", days: 2 },
      { city: 'Chengdu', days: 3, highlights: ['Pandas', 'Hotpot', 'Sichuan Cuisine'] },
      { city: 'Chongqing', days: 2, highlights: ['Hotpot', 'Night Ferry'] },
    ],
    transport: 'Flug: Beijing → Xi\'an → Chengdu → Chongqing',
    perfectFor: 'Foodies, Tierliebhaber',
    image: '/images/chengdu/pandas.jpg',
    imageAlt: 'Giant panda resting in Chengdu',
  },
  {
    name: 'Modern China',
    emoji: '🏙️',
    duration: '10 Tage',
    stops: [
      { city: 'Shanghai', days: 3 },
      { city: 'Hangzhou', days: 2, highlights: ['West Lake'] },
      { city: 'Shenzhen', days: 2, highlights: ['Tech', 'Shopping'] },
      { city: 'Guangzhou', days: 3, highlights: ['Dim Sum', 'Canton Tower'] },
    ],
    transport: 'Zug/Shuttle zwischen Städten',
    perfectFor: 'Moderne Städte, Einkaufen',
    image: '/images/shanghai/modern-skyline.jpg',
    imageAlt: 'Modern Shanghai skyline at dusk',
  },
  {
    name: 'Grand Tour',
    emoji: '🗺️',
    duration: '14 Tage',
    stops: [
      { city: 'Beijing', days: 3 },
      { city: "Xi'an", days: 2 },
      { city: 'Chengdu', days: 3 },
      { city: 'Chongqing', days: 2 },
      { city: 'Shanghai', days: 3 },
      { city: 'Suzhou', days: 1, highlights: ['Gardens'] },
    ],
    transport: 'Flug & Zug kombiniert',
    perfectFor: 'Alles sehen',
    image: '/images/chongqing/skyline-night.jpg',
    imageAlt: 'Chongqing skyline glowing at night above the river',
  },
]

/* ────────────────────────────────────────────────
   Budget data
   ────────────────────────────────────────────── */

interface BudgetTier {
  label: string
  range: string
  details: string
}

const budgetTiers: BudgetTier[] = [
  { label: 'Backpacker', range: '300–500 CNY', details: 'Hostel, Street Food, Metro' },
  { label: 'Mid-Range', range: '800–1,200 CNY', details: '3★ Hotel, Restaurant, DiDi' },
  { label: 'Luxury', range: '2,000+ CNY', details: '5★ Hotel, Fine Dining, Privattransfer' },
]

interface CostItem {
  item: string
  price: string
}

const costItems: CostItem[] = [
  { item: 'Hotel (3★)', price: '300–600 CNY / Nacht' },
  { item: 'Mahlzeit (Restaurant)', price: '50–100 CNY' },
  { item: 'Eintritt (Attraktion)', price: '40–150 CNY' },
  { item: 'Zug (CRH)', price: '200–600 CNY' },
  { item: 'Metro', price: '3–10 CNY / Fahrt' },
  { item: 'DiDi', price: '20–80 CNY' },
]

/* ────────────────────────────────────────────────
   Season data
   ────────────────────────────────────────────── */

interface Season {
  name: string
  months: string
  emoji: string
  pros: string[]
  cons: string[]
  bestCities: string
}

const seasons: Season[] = [
  {
    name: 'Frühling',
    months: 'März–Mai',
    emoji: '🌸',
    pros: ['Mildes Wetter', 'Blütezeit'],
    cons: ['Oft dunstig', 'Ostern = teure Flüge'],
    bestCities: 'Shanghai, Hangzhou, Suzhou',
  },
  {
    name: 'Sommer',
    months: 'Juni–August',
    emoji: '☀️',
    pros: ['Lange Tage', 'Viel los'],
    cons: ['SEHR HEISS (35°C+)', 'Monsunregen im Süden'],
    bestCities: 'Beijing, Xi\'an (trockener)',
  },
  {
    name: 'Herbst',
    months: 'September–November',
    emoji: '🍂',
    pros: ['BESTE ZEIT für fast überall'],
    cons: ['Golden Week (1.–7. Okt.) = super voll'],
    bestCities: 'ALLE',
  },
  {
    name: 'Winter',
    months: 'Dezember–Februar',
    emoji: '❄️',
    pros: ['Wenige Touristen', 'Günstige Hotels'],
    cons: ['Kalt im Norden (0°C)', 'Neblig'],
    bestCities: 'Guangzhou, Shenzhen, Hong Kong',
  },
]

/* ────────────────────────────────────────────────
   Packing data
   ────────────────────────────────────────────── */

interface PackingCategory {
  title: string
  emoji: string
  items: string[]
}

const packingCategories: PackingCategory[] = [
  {
    title: 'Essential',
    emoji: '🎒',
    items: [
      'Reisepass (min. 6 Monate gültig)',
      'Kreditkarte + Backup',
      'Smartphone + Powerbank',
      'Internationale Krankenversicherung',
    ],
  },
  {
    title: 'Clothing',
    emoji: '👕',
    items: [
      'Bequeme Schuhe (viel Laufen!)',
      'Layer-System (Klimaanlagen sind kalt)',
      'Regenjacke (im Sommer)',
      'Warme Jacke (Winter im Norden)',
    ],
  },
  {
    title: 'Tech',
    emoji: '📱',
    items: [
      'VPN installiert (VOR Abflug!)',
      'eSIM aktiviert',
      'Übersetzungs-App (Google Translate Offline)',
      'Offline Maps',
    ],
  },
  {
    title: 'Health',
    emoji: '💊',
    items: [
      'Toilettenpapier (viele öffentliche haben keines)',
      'Handdesinfektionsmittel',
      'Medikamente (China hat andere Marken)',
      'Masken (Luftqualität)',
    ],
  },
]

/* ────────────────────────────────────────────────
   Booking data
   ────────────────────────────────────────────── */

interface BookingSection {
  title: string
  emoji: string
  tips: string[]
}

const bookingSections: BookingSection[] = [
  {
    title: 'Flüge',
    emoji: '✈️',
    tips: [
      'Buche 2–3 Monate im Voraus',
      'Swiss / Edelweiss fliegt direkt nach Beijing & Shanghai',
      'Inlandsflüge: China Eastern, Air China, Hainan Airlines',
    ],
  },
  {
    title: 'Züge',
    emoji: '🚄',
    tips: [
      'Buchung via Trip.com (Englisch) oder 12306.cn (Chinesisch)',
      '1. Klasse vs 2. Klasse: 1. Klasse ist ~50% teurer, weniger voll',
      'Business Class: nur auf CRH-Verbindungen',
    ],
  },
  {
    title: 'Hotels',
    emoji: '🏨',
    tips: [
      'Nicht alle nehmen Ausländer! (Registrierungspflicht)',
      'Internationale Ketten: Marriott, Hilton, Hyatt (sicher)',
      'Über Trip.com buchen (filtert nach „Accepts Foreigners")',
      'Hostels: oft günstiger, aber nicht immer für Ausländer',
    ],
  },
]

/* ────────────────────────────────────────────────
   Helper: Section header
   ────────────────────────────────────────────── */

function SectionHeader({
  overline,
  title,
  dark = false,
}: {
  overline: string
  title: string
  dark?: boolean
}) {
  return (
    <div className="mb-8">
      <p
        className={`text-xs font-semibold uppercase tracking-widest ${
          dark ? 'text-[#f0c9b1]' : 'text-[#af5d32]'
        }`}
      >
        {overline}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-bold sm:text-4xl ${
          dark ? 'text-white' : 'text-[#1a3a4a]'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}

/* ────────────────────────────────────────────────
   Main component
   ────────────────────────────────────────────── */

export default function PlanYourTripClient() {
  return (
    <main className="min-h-screen bg-[#f5f1ea]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plan Your Trip' }]} />
        </div>

        {/* ─── Hero ─── */}
        <header
          className="relative flex min-h-[320px] items-center overflow-hidden rounded-[2rem] px-6 py-10 md:min-h-[400px] md:px-10"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(26,58,74,0.7) 0%, rgba(26,58,74,0.5) 100%), url(/images/hero/china-hero.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          role="img"
          aria-label="Panoramic view of China"
        >
          <div className="absolute inset-0 bg-[rgba(10,20,26,0.08)]" aria-hidden="true" />
          <div className="absolute opacity-[0.55]">
            <ChineseWatermark character="旅" />
          </div>
          <div className="relative z-10 max-w-3xl pt-3">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#f0c9b1]">
              Plan Your China Trip
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Plan Your China Trip
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#f5f1ea]">
              Routes, budget, timing, and packing — everything in one place.
            </p>
          </div>
        </header>

        {/* ─── Section 1: Recommended Routes ─── */}
        <section className="mt-10 overflow-hidden rounded-[2rem] bg-[#1a3a4a] px-5 py-8 text-white shadow-[0_24px_70px_rgba(26,58,74,0.22)] sm:px-8 sm:py-10">
          <SectionHeader overline="Recommended Routes" title="Choose Your Route" dark />

          <div className="grid gap-5 md:grid-cols-2">
            {routes.map((route) => (
              <div
                key={route.name}
                className="overflow-hidden rounded-xl bg-white text-[#1a3a4a] shadow-[0_16px_36px_rgba(8,19,26,0.22)]"
              >
                <img
                  src={route.image}
                  alt={route.imageAlt}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{route.emoji}</span>
                    <div>
                      <span className="inline-flex rounded-full bg-[#af5d32] px-3 py-1 text-sm font-semibold text-[#f5f1ea]">
                        {route.duration}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold leading-tight">
                    {route.name}
                  </h3>

                  {/* Stops */}
                  <div className="mt-4 space-y-2">
                    {route.stops.map((stop) => (
                      <div
                        key={stop.city}
                        className="flex items-start gap-2 text-sm text-[#5f6f7a]"
                      >
                        <span className="shrink-0 rounded bg-[#f5f1ea] px-2 py-0.5 text-xs font-semibold text-[#1a3a4a]">
                          {stop.days}d
                        </span>
                        <span>
                          <strong className="text-[#1a3a4a]">{stop.city}</strong>
                          {stop.highlights ? (
                            <span className="ml-1 text-[#af5d32]">
                              — {stop.highlights.join(', ')}
                            </span>
                          ) : null}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-[#ebe4d8] pt-3 text-sm text-[#5f6f7a]">
                    <p>
                      <span className="font-medium text-[#1a3a4a]">Transport:</span>{' '}
                      {route.transport}
                    </p>
                    <p className="mt-1">
                      <span className="font-medium text-[#1a3a4a]">Perfekt für:</span>{' '}
                      {route.perfectFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 2: Budget Breakdown ─── */}
        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#ebe4d8] bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <SectionHeader overline="Budget Breakdown" title="What Will It Cost?" />

          {/* Daily budget tiers */}
          <div className="grid gap-4 sm:grid-cols-3">
            {budgetTiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-xl border border-[#ebe4d8] bg-[#fdf8f3] p-5 text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-[#af5d32]">
                  {tier.label}
                </p>
                <p className="mt-2 font-serif text-2xl font-bold text-[#1a3a4a]">
                  {tier.range}
                </p>
                <p className="mt-1 text-sm text-[#5f6f7a]">/ Tag pro Person</p>
                <p className="mt-3 text-sm text-[#5f6f7a]">{tier.details}</p>
              </div>
            ))}
          </div>

          {/* What costs what */}
          <div className="mt-8">
            <h3 className="mb-4 font-serif text-xl font-bold text-[#1a3a4a]">
              💰 What Costs What
            </h3>
            <div className="overflow-hidden rounded-xl border border-[#ebe4d8]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#f5f1ea]">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-[#1a3a4a]">Item</th>
                    <th className="px-4 py-3 font-semibold text-[#1a3a4a]">Price (CNY)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ebe4d8]">
                  {costItems.map((item) => (
                    <tr key={item.item} className="bg-white hover:bg-[#fdf8f3]">
                      <td className="px-4 py-3 text-[#1a3a4a]">{item.item}</td>
                      <td className="px-4 py-3 font-medium text-[#af5d32]">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Best Time to Visit ─── */}
        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#ebe4d8] bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <SectionHeader overline="Best Time to Visit" title="When Should You Go?" />

          <div className="grid gap-4 sm:grid-cols-2">
            {seasons.map((season) => (
              <div
                key={season.name}
                className="rounded-xl border border-[#ebe4d8] bg-[#fdf8f3] p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{season.emoji}</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1a3a4a]">
                      {season.name}
                    </h3>
                    <p className="text-sm text-[#5f6f7a]">{season.months}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-green-700">+</span>{' '}
                    {season.pros.map((p, i) => (
                      <span key={i}>
                        {p}
                        {i < season.pros.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="font-semibold text-red-700">−</span>{' '}
                    {season.cons.map((c, i) => (
                      <span key={i}>
                        {c}
                        {i < season.cons.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  <p className="pt-2 text-[#af5d32] font-medium">
                    Best cities: {season.bestCities}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 4: Packing List ─── */}
        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#ebe4d8] bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <SectionHeader overline="Packing List" title="What to Pack" />

          <div className="grid gap-4 sm:grid-cols-2">
            {packingCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl border border-[#ebe4d8] bg-[#fdf8f3] p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="font-serif text-lg font-bold text-[#1a3a4a]">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#1a3a4a]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#af5d32]" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 5: Booking Tips ─── */}
        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#ebe4d8] bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <SectionHeader overline="Booking Tips" title="How to Book" />

          <div className="space-y-4">
            {bookingSections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-[#ebe4d8] bg-[#fdf8f3] p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{section.emoji}</span>
                  <h3 className="font-serif text-lg font-bold text-[#1a3a4a]">
                    {section.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {section.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-sm text-[#5f6f7a]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#af5d32]" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Tip box ─── */}
        <blockquote className="mt-10 rounded-r-lg border-l-4 border-[#af5d32] bg-[#fdf8f3] p-6 text-base leading-7 text-[#1a3a4a]">
          <p>
            💡 <strong>First time in China?</strong> Start with the{' '}
            <span className="text-[#af5d32] font-semibold">Classic 7 Days</span> route
            and customize from there.
          </p>
        </blockquote>

        {/* ─── CTA Banner ─── */}
        <section
          className="relative mt-10 overflow-hidden rounded-[2rem] px-6 py-8 text-[#f5f1ea] shadow-[0_24px_70px_rgba(26,58,74,0.22)] sm:px-8 sm:py-10"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(26,58,74,0.78) 0%, rgba(26,58,74,0.6) 100%), url(/images/xian/terracotta-warriors.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          role="img"
          aria-label="Terracotta Warriors"
        >
          <div className="absolute inset-0 bg-[rgba(12,24,32,0.12)]" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#f0c9b1]">
                Ready to explore?
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold">
                Your China adventure starts now.
              </h2>
              <p className="mt-2 text-[#f5f1ea]/80">
                Pick a route, check the budget, and start packing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
