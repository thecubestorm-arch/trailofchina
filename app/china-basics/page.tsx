import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'China Basics - Everything You Need to Know',
  description:
    'Master the essentials for your first China trip: apps, internet setup, cultural differences, and transport basics in one practical hub.',
}

const sections = [
  {
    category: 'China Basics',
    icon: '🛫',
    title: 'Before You Go',
    preview:
      'Visa, safety, and packing — the three things every traveler needs to sort before departure. Check requirements, know what to expect, and pack smart.',
    tags: ['🛂 Visa', '🛡️ Safety', '🧳 Packing'],
    href: '/china-basics/before-you-go',
  },
  {
    category: 'China Basics',
    icon: '📱',
    title: 'What Apps to Use',
    preview:
      'Install and configure these apps before takeoff. The first 24 hours in China are much easier when payments, navigation, and transport tools are ready to go.',
    tags: ['💳 Payment', '🗺️ Maps', '🧳 Travel', '💬 Communication', '🔐 VPN'],
    href: '/china-basics/what-apps-to-use',
  },
  {
    category: 'China Basics',
    icon: '🌐',
    title: 'How to Get Internet',
    preview:
      'Stay connected from the moment you land. An eSIM is the simplest way — buy it before departure, activate on arrival, and skip the airport SIM queue.',
    tags: ['📱 eSIM', '📡 Physical SIM'],
    href: '/china-basics/how-to-get-internet',
  },
  {
    category: 'China Basics',
    icon: '🧭',
    title: 'How China Differs',
    preview:
      "From the Great Firewall to cultural etiquette, understanding what's different helps you avoid surprises and travel with confidence.",
    tags: ['🚫 Censorship', '🙏 Culture', '🔒 Safety', '🛂 Passport Rules'],
    href: '/china-basics/how-china-differs',
  },
  {
    category: 'China Basics',
    icon: '🚄',
    title: 'How to Get Around',
    preview:
      "China's transport network is vast and efficient. High-speed trains connect major cities, ride apps handle local trips, and metro systems run everywhere.",
    tags: ['🚅 Train', '✈️ Plane', '🚕 Taxi', '🚇 Metro', '🚗 DiDi', '🚌 Bus', '🚲 Bicycle', '🚙 Car'],
    href: '/china-basics/how-to-get-around',
  },
]

export default function ChinaBasicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'China Basics' }]} />
        </div>
        <div className="relative">
          <ChineseWatermark character="中国" />
          <h1 className="mb-6 text-4xl font-bold text-gray-900">China Basics</h1>
        </div>

        <section className="mb-8 overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/images/general/chinese-food.jpg"
            alt="Chinese dining table with regional dishes"
            width={1200}
            height={500}
            className="h-48 w-full object-cover md:h-60"
          />
        </section>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Everything first-time visitors need to know before departure, from essential apps and internet setup to
            local transport and daily travel norms.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <Link
              key={section.href}
              href={section.href}
              className={`block cursor-pointer rounded-xl transition-all duration-200 hover:bg-[#fdf8f3] hover:shadow-md ${index < sections.length - 1 ? 'border-b border-[#ebe4d8]' : ''}`}
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
                  Read full guide →
                </span>
              </article>
            </Link>
          ))}
        </section>
        <RelatedArticles articles={[
          {title: 'What Apps to Use in China', description: 'Essential apps for payments, navigation, and daily life.', href: '/china-basics/what-apps-to-use'},
          {title: 'How to Get Internet', description: 'eSIMs, VPNs, and staying connected in China.', href: '/china-basics/how-to-get-internet'},
          {title: 'How China Differs', description: 'Cultural differences and what to expect.', href: '/china-basics/how-china-differs'},
          {title: 'How to Get Around', description: 'Trains, metros, taxis, and ride-hailing explained.', href: '/china-basics/how-to-get-around'},
        ]} />
      </main>
    </div>
  )
}
