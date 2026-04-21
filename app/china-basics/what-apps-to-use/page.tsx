import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Apps to Use',
  description:
    'Set up the essential China travel apps before departure: payments, maps, bookings, communication, and VPN access.',
}

const sections = [
  {
    category: 'China Basics',
    icon: '💳',
    title: 'Payment Apps',
    preview:
      'Set up Alipay and WeChat Pay before departure so your first meals, metro rides, and convenience-store purchases are seamless. Confirm card linking early to avoid verification delays while roaming. Having both apps gives you backup if one payment flow fails.',
    tags: ['💰 Alipay', '💬 WeChat Pay', '🏧 Card Linking', '✅ Verification'],
    href: '/china-basics/what-apps-to-use/payment',
  },
  {
    category: 'China Basics',
    icon: '🗺️',
    title: 'Maps',
    preview:
      'China map workflows differ from Google Maps, especially for Chinese place names and exact entrances. Install map apps that support transit routing, walking directions, and address search in Chinese. Save key destinations offline so you can still navigate if signal drops.',
    tags: ['📍 Navigation', '🚇 Transit', '🔤 Chinese Names', '📲 Offline Saves'],
    href: '/china-basics/what-apps-to-use/maps',
  },
  {
    category: 'China Basics',
    icon: '🧳',
    title: 'Travel Booking',
    preview:
      'Use booking apps that support passport details, foreign cards, and bilingual interfaces for trains and flights. Compare options across platforms because cancellation rules and seat availability vary by provider. Keep your confirmations and booking IDs in screenshots for quick station checks.',
    tags: ['🚅 Trains', '✈️ Flights', '🏨 Hotels', '🧾 Confirmations'],
    href: '/china-basics/what-apps-to-use/travel',
  },
  {
    category: 'China Basics',
    icon: '💬',
    title: 'Communication',
    preview:
      'WeChat is essential for messaging, service chats, and many day-to-day mini-program tasks. Configure your account and contacts before you fly so local coordination is easy on arrival. Add translation tools and saved phrase lists to handle routine conversations smoothly.',
    tags: ['💬 WeChat', '🌐 Translation', '📇 Contacts', '🧠 Phrase Lists'],
    href: '/china-basics/what-apps-to-use/communication',
  },
  {
    category: 'China Basics',
    icon: '🔐',
    title: 'VPN Setup',
    preview:
      'Install and test your VPN before entering China, since provider websites and downloads may be blocked after arrival. Prepare at least one backup profile in case a server becomes unstable. Launch checks from airport Wi-Fi so your core apps work immediately when you land.',
    tags: ['🛡️ Access', '📶 Reliability', '🧪 Pre-Trip Test', '🧰 Backup Plan'],
    href: '/china-basics/what-apps-to-use/vpn',
  },
]

export default function WhatAppsToUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">What Apps to Use in China</h1>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Install and configure these apps before takeoff. The first 24 hours in China are much easier when
            payments, navigation, and transport tools are ready.
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

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-black text-slate-900">Setup Order That Works Best</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
            Do payments first, then maps, then travel booking. Keep screenshots of account confirmations in case SMS
            verification gets delayed while roaming.
          </p>
        </div>
      </main>
    </div>
  )
}
