import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import ContextualCTA from '@/components/ContextualCTA'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'How to Get Around in China | Trail of China',
  description: 'Complete guide to transportation in China: trains, planes, taxis, metro, DiDi, buses, bikes, and car rentals.',
}

const sections = [
  {
    category: 'China Basics',
    icon: '🚅',
    title: 'Train',
    preview:
      'High-speed rail is often the most efficient way to travel between major Chinese cities, with frequent departures and central stations. Booking early gives you better seat choices and smoother departure times. For most first-time visitors, trains offer the best balance of speed, comfort, and reliability.',
    tags: ['⚡ High-Speed Rail', '🎫 Seat Booking', '🏙️ City-to-City', '✅ Reliable'],
    href: '/china-basics/how-to-get-around/train',
  },
  {
    category: 'China Basics',
    icon: '🎫',
    title: '12306 Train Booking',
    preview:
      'Official Chinese railway booking platform: account setup, passport verification, ticket search, and payment. Learn how to book trains directly through 12306 with foreign passports and international cards.',
    tags: ['🚄 Official Platform', '🛂 Passport Setup', '💳 Payment', '📱 App Guide'],
    href: '/china-basics/how-to-get-around/12306',
  },
  {
    category: 'China Basics',
    icon: '✈️',
    title: 'Plane',
    preview:
      'Domestic flights become useful for long distances, remote regions, or routes where rail takes too many hours. Build in buffer time for airport security and occasional weather-related delays. Air travel is practical when itinerary compression matters more than downtown station access.',
    tags: ['🛫 Long Distance', '⏱️ Time Savings', '🧳 Airport Logistics', '🌦️ Delay Buffer'],
    href: '/china-basics/how-to-get-around/plane',
  },
  {
    category: 'China Basics',
    icon: '🚕',
    title: 'Taxi',
    preview:
      'Street taxis still work well for straightforward trips, especially late at night or in areas with lighter app coverage. Keep your destination written in Chinese to reduce route confusion. Metered fares are usually reasonable in major cities when traffic is manageable.',
    tags: ['📍 Chinese Address', '🕒 Late Night', '💴 Metered Fare', '🚦 Traffic Aware'],
    href: '/china-basics/how-to-get-around/taxi',
  },
  {
    category: 'China Basics',
    icon: '🚇',
    title: 'Metro',
    preview:
      'Metro systems are fast, frequent, and usually the easiest way to move across large cities without traffic stress. Station signage is often bilingual, but planning your exit in advance saves time at street level. For daily urban travel, metro lines are typically the most predictable option.',
    tags: ['🧭 Fast Routing', '💰 Low Cost', '🏙️ Urban Core', '🚪 Exit Planning'],
    href: '/china-basics/how-to-get-around/metro-subway',
  },
  {
    category: 'China Basics',
    icon: '🚗',
    title: 'DiDi',
    preview:
      'DiDi is the default ride-hailing option in many cities and works well for door-to-door transport. In-app pickup points and destination pins reduce language friction compared with street hailing. It is especially useful when carrying luggage or traveling outside metro hours.',
    tags: ['📱 Ride Hailing', '🧳 Luggage Friendly', '🌙 Off-Hours', '📌 Pinned Pickup'],
    href: '/china-basics/how-to-get-around/didi',
  },
  {
    category: 'China Basics',
    icon: '🚌',
    title: 'Bus',
    preview:
      'Buses cover dense local routes and smaller districts that metro lines do not always reach directly. They are inexpensive but can be harder to decode without Chinese-language route familiarity. Use map apps actively to confirm stops, direction, and transfer points in real time.',
    tags: ['💸 Budget Option', '🗺️ Local Coverage', '🔄 Transfers', '📲 Live Route Check'],
    href: '/china-basics/how-to-get-around/bus',
  },
  {
    category: 'China Basics',
    icon: '🚲',
    title: 'Bicycle',
    preview:
      'Shared bikes are excellent for short urban distances, riverside rides, and first/last-mile connections to metro stations. Unlocking is app-based, so payment setup should be completed in advance. Always check designated parking zones to avoid penalties and account issues.',
    tags: ['📏 Short Trips', '🚉 Last Mile', '📱 App Unlock', '🅿️ Parking Zones'],
    href: '/china-basics/how-to-get-around/bicycle',
  },
  {
    category: 'China Basics',
    icon: '🚙',
    title: 'Car',
    preview:
      'Car use is mostly relevant for remote scenic regions or flexible multi-stop day plans outside major city centers. Driving rules, license requirements, and urban restrictions can be complex for foreign visitors. For most itineraries, a hired driver is simpler than self-driving logistics.',
    tags: ['🏞️ Remote Areas', '🪪 License Rules', '🧭 Flexible Route', '👨‍✈️ Driver Option'],
    href: '/china-basics/how-to-get-around/car',
  },
]

export default function HowToGetAroundHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="relative">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'How to Get Around' }]} />
          <ChineseWatermark character="交通" />
          <h1 className="mb-6 text-4xl font-bold text-gray-900">How to Get Around</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            China has one of the world&apos;s most comprehensive transportation networks. Choose each mode based on
            distance, schedule pressure, and how much flexibility you need.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <Link
              key={section.href}
              href={section.href}
              className={`block cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#fdf8f3] ${index < sections.length - 1 ? 'border-b border-[#ebe4d8]' : ''}`}
            >
              <article className="py-8 px-6 -mx-6 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
              <h2 className="mt-3 text-2xl font-bold text-[#1f2933] md:text-3xl">
                {section.icon} {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4a5568] md:text-lg">{section.preview}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f1ea] px-3 py-1 text-sm text-[#1f2933]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-[#af5d32]">
                Read full guide →</span>
            </article>
            </Link>
          ))}
        </section>

        <div className="border-l-4 border-amber-400 bg-amber-50 p-4">
          <h3 className="mb-2 font-semibold text-amber-800">💡 Quick Recommendation</h3>
          <p className="text-amber-900">
            <strong>For city-to-city:</strong> High-speed train (G-trains)
            <br />
            <strong>For within cities:</strong> Metro + DiDi combo
            <br />
            <strong>For long distances:</strong> Domestic flights
            <br />
            <strong>For budget travel:</strong> Overnight trains and buses
          </p>
        </div>

        <div className="mt-8">
          <ContextualCTA
            icon="🚄"
            title="Book Your Train Tickets Early"
            description="High-speed trains sell out fast, especially during holidays. Book 2 weeks ahead."
            buttonText="Plan your route →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
        <RelatedArticles articles={[
          {title: '12306 Train Booking', description: 'Book high-speed rail tickets like a local.', href: '/china-basics/how-to-get-around/12306'},
          {title: 'DiDi Ride-Hailing', description: 'China’s answer to Uber — cheaper and everywhere.', href: '/china-basics/how-to-get-around/didi'},
          {title: 'Metro & Subway', description: 'Navigate China’s extensive metro systems.', href: '/china-basics/how-to-get-around/metro-subway'},
          {title: 'Beijing Guide', description: 'Start exploring the capital city.', href: '/destinations/beijing'},
        ]} />
      </main>
    </div>
  )
}
