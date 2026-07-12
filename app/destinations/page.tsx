import type { Metadata } from 'next'
import { makeMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import {
  PageLayout,
  HeroSection,
  ContentSection,
  FooterCTA,
} from '@/components/PageLayout'

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
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroSection
        label="City Guides"
        title="China's Best Cities"
        subtitle="7 cities, 35+ attractions, one guide."
      />

      <main className="max-w-4xl mx-auto">
        {cities.map((city, i) => (
          <ContentSection
            key={city.name}
            id={city.name.toLowerCase()}
            icon={city.emoji}
            title={`${i + 1}. ${city.name}`}
          >
            <div className="space-y-4">
              <p className="text-[#af5d32] font-medium">{city.tagline}</p>
              <p>{city.description}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#af5d32] mb-2">Top 3 Attractions</p>
                  <ul className="space-y-1 text-sm">
                    {city.top3.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#af5d32] mb-2">Best Time</p>
                  <p className="text-sm">{city.bestTime}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#af5d32] mt-3 mb-1">How Many Days</p>
                  <p className="text-sm">{city.days}</p>
                </div>
              </div>

              <div className="bg-[#af5d32]/5 rounded-lg px-4 py-3 border border-[#af5d32]/20">
                <p className="text-sm font-medium text-[#af5d32]">💡 Insider Tip: {city.highlight}</p>
              </div>
            </div>
          </ContentSection>
        ))}

        {/* Route Suggestions */}
        <ContentSection icon="🗺️" title="Suggested Itineraries">
          <div className="grid gap-4">
            {routes.map((route) => (
              <div key={route.label} className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <h3 className="font-semibold text-sm mb-2">{route.label}</h3>
                <div className="flex flex-wrap items-center gap-1.5 text-sm mb-2">
                  {route.cities.map((c, idx) => (
                    <span key={c} className="flex items-center gap-1.5">
                      <span className="rounded-md bg-[#af5d32]/10 px-2 py-1 text-[#af5d32] font-medium">{c}</span>
                      {idx < route.cities.length - 1 && <span>→</span>}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#64748b]">{route.desc}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      </main>

      <FooterCTA
        title="Ready to plan your trip?"
        description="Check out our complete planning guide with budgets, routes, and packing lists."
        primaryHref="/plan-your-trip"
        primaryText="Plan Your Trip"
        secondaryHref="/china-basics"
        secondaryText="Read the Basics"
      />
    </PageLayout>
  )
}
