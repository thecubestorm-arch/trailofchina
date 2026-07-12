'use client'

import {
  PageLayout,
  HeroSection,
  ContentSection,
  TipBox,
  FooterCTA,
} from '@/components/PageLayout'

/* ── Route data ── */
const routes = [
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
  },
  {
    name: 'Food & Pandas',
    emoji: '🐼',
    duration: '10 Tage',
    stops: [
      { city: 'Beijing', days: 3 },
      { city: "Xi'an", days: 2 },
      { city: 'Chengdu', days: 3, highlights: ['Pandas', 'Hotpot'] },
      { city: 'Chongqing', days: 2, highlights: ['Hotpot', 'Night Ferry'] },
    ],
    transport: 'Flug: Beijing → Xi\'an → Chengdu → Chongqing',
    perfectFor: 'Foodies, Tierliebhaber',
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
  },
]

/* ── Budget data ── */
const budgetTiers = [
  { label: 'Backpacker', range: '300–500 CNY', details: 'Hostel, Street Food, Metro' },
  { label: 'Mid-Range', range: '800–1,200 CNY', details: '3★ Hotel, Restaurant, DiDi' },
  { label: 'Luxury', range: '2,000+ CNY', details: '5★ Hotel, Fine Dining, Privattransfer' },
]

const costItems = [
  { item: 'Hotel (3★)', price: '300–600 CNY / Nacht' },
  { item: 'Mahlzeit (Restaurant)', price: '50–100 CNY' },
  { item: 'Eintritt (Attraktion)', price: '40–150 CNY' },
  { item: 'Zug (CRH)', price: '200–600 CNY' },
  { item: 'Metro', price: '3–10 CNY / Fahrt' },
  { item: 'DiDi', price: '20–80 CNY' },
]

/* ── Season data ── */
const seasons = [
  {
    name: 'Frühling', months: 'März–Mai', emoji: '🌸',
    pros: ['Mildes Wetter', 'Blütezeit'],
    cons: ['Oft dunstig', 'Ostern = teure Flüge'],
    bestCities: 'Shanghai, Hangzhou, Suzhou',
  },
  {
    name: 'Sommer', months: 'Juni–August', emoji: '☀️',
    pros: ['Lange Tage', 'Viel los'],
    cons: ['SEHR HEISS (35°C+)', 'Monsunregen im Süden'],
    bestCities: 'Beijing, Xi\'an (trockener)',
  },
  {
    name: 'Herbst', months: 'September–November', emoji: '🍂',
    pros: ['BESTE ZEIT für fast überall'],
    cons: ['Golden Week (1.–7. Okt.) = super voll'],
    bestCities: 'ALLE',
  },
  {
    name: 'Winter', months: 'Dezember–Februar', emoji: '❄️',
    pros: ['Wenige Touristen', 'Günstige Hotels'],
    cons: ['Kalt im Norden (0°C)', 'Neblig'],
    bestCities: 'Guangzhou, Shenzhen, Hong Kong',
  },
]

/* ── Packing data ── */
const packingCategories = [
  {
    title: 'Essential', emoji: '🎒',
    items: ['Reisepass (min. 6 Monate gültig)', 'Kreditkarte + Backup', 'Smartphone + Powerbank', 'Internationale Krankenversicherung'],
  },
  {
    title: 'Clothing', emoji: '👕',
    items: ['Bequeme Schuhe (viel Laufen!)', 'Layer-System (Klimaanlagen sind kalt)', 'Regenjacke (im Sommer)', 'Warme Jacke (Winter im Norden)'],
  },
  {
    title: 'Tech', emoji: '📱',
    items: ['VPN installiert (VOR Abflug!)', 'eSIM aktiviert', 'Übersetzungs-App (Offline)', 'Offline Maps'],
  },
  {
    title: 'Health', emoji: '💊',
    items: ['Toilettenpapier', 'Handdesinfektionsmittel', 'Medikamente', 'Masken (Luftqualität)'],
  },
]

/* ── Booking data ── */
const bookingSections = [
  {
    title: 'Flüge', emoji: '✈️',
    tips: ['Buche 2–3 Monate im Voraus', 'Swiss / Edelweiss fliegt direkt nach Beijing & Shanghai', 'Inlandsflüge: China Eastern, Air China, Hainan Airlines'],
  },
  {
    title: 'Züge', emoji: '🚄',
    tips: ['Buchung via Trip.com (Englisch) oder 12306.cn (Chinesisch)', '1. Klasse vs 2. Klasse: ~50% teurer, weniger voll', 'Business Class: nur auf CRH-Verbindungen'],
  },
  {
    title: 'Hotels', emoji: '🏨',
    tips: ['Nicht alle nehmen Ausländer! (Registrierungspflicht)', 'Internationale Ketten: Marriott, Hilton, Hyatt', 'Trip.com filtert nach „Accepts Foreigners"'],
  },
]

export default function PlanYourTripClient() {
  return (
    <PageLayout>
      <HeroSection
        label="Plan Your China Trip"
        title="Plan Your China Trip"
        subtitle="Routes, budget, timing, and packing — everything in one place."
      />

      <main className="max-w-4xl mx-auto">
        {/* Recommended Routes */}
        <ContentSection icon="🗺️" title="Recommended Routes">
          <div className="grid gap-4">
            {routes.map((route) => (
              <div key={route.name} className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{route.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-[#1a3a4a]">{route.name}</h3>
                    <span className="text-xs font-medium bg-[#af5d32] text-white px-2 py-0.5 rounded">{route.duration}</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-3">
                  {route.stops.map((stop) => (
                    <div key={stop.city} className="flex items-start gap-2 text-sm">
                      <span className="bg-[#ebe4d8] text-[#1a3a4a] text-xs font-semibold px-1.5 py-0.5 rounded shrink-0">{stop.days}d</span>
                      <span>
                        <strong>{stop.city}</strong>
                        {stop.highlights && <span className="text-[#af5d32]"> — {stop.highlights.join(', ')}</span>}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-[#64748b] border-t border-[#ebe4d8] pt-2">
                  <p><span className="font-medium text-[#1a3a4a]">Transport:</span> {route.transport}</p>
                  <p className="mt-1"><span className="font-medium text-[#1a3a4a]">Perfekt für:</span> {route.perfectFor}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Budget Breakdown */}
        <ContentSection icon="💰" title="Budget Breakdown">
          <div className="grid gap-3 sm:grid-cols-3 mb-6">
            {budgetTiers.map((tier) => (
              <div key={tier.label} className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8] text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#af5d32]">{tier.label}</p>
                <p className="font-serif text-2xl font-bold text-[#1a3a4a] mt-1">{tier.range}</p>
                <p className="text-xs text-[#64748b] mt-0.5">/ Tag pro Person</p>
                <p className="text-sm text-[#64748b] mt-2">{tier.details}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-[#ebe4d8]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#faf8f4]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#1a3a4a]">Item</th>
                  <th className="px-4 py-3 font-semibold text-[#1a3a4a]">Price (CNY)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ebe4d8]">
                {costItems.map((item) => (
                  <tr key={item.item} className="bg-white hover:bg-[#faf8f4]">
                    <td className="px-4 py-3 text-[#1a3a4a]">{item.item}</td>
                    <td className="px-4 py-3 font-medium text-[#af5d32]">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentSection>

        {/* Best Time to Visit */}
        <ContentSection icon="📅" title="Best Time to Visit">
          <div className="grid gap-3 sm:grid-cols-2">
            {seasons.map((season) => (
              <div key={season.name} className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{season.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-[#1a3a4a]">{season.name}</h3>
                    <p className="text-sm text-[#64748b]">{season.months}</p>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <p><span className="text-green-600 font-medium">+</span> {season.pros.join(', ')}</p>
                  <p><span className="text-red-600 font-medium">−</span> {season.cons.join(', ')}</p>
                  <p className="text-[#af5d32] font-medium pt-1">Best cities: {season.bestCities}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Packing List */}
        <ContentSection icon="🎒" title="Packing List">
          <div className="grid gap-3 sm:grid-cols-2">
            {packingCategories.map((cat) => (
              <div key={cat.title} className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <div className="flex items-center gap-2 mb-2">
                  <span>{cat.emoji}</span>
                  <h3 className="font-semibold text-[#1a3a4a]">{cat.title}</h3>
                </div>
                <ul className="space-y-1 text-sm">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#af5d32]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Booking Tips */}
        <ContentSection icon="✈️" title="Booking Tips">
          <div className="grid gap-3">
            {bookingSections.map((section) => (
              <div key={section.title} className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <div className="flex items-center gap-2 mb-2">
                  <span>{section.emoji}</span>
                  <h3 className="font-semibold text-[#1a3a4a]">{section.title}</h3>
                </div>
                <ul className="space-y-1 text-sm">
                  {section.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#af5d32]" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ContentSection>

        <TipBox variant="tip">
          First time in China? Start with the Classic 7 Days route and customize from there.
        </TipBox>
      </main>

      <FooterCTA
        title="Ready to explore China?"
        description="Check out our city guides and China basics to complete your planning."
        primaryHref="/destinations"
        primaryText="See Cities"
        secondaryHref="/china-basics"
        secondaryText="Read the Basics"
      />
    </PageLayout>
  )
}
