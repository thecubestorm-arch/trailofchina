import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import ContextualCTA from '@/components/ContextualCTA'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'How to Get Internet in China | Trail of China',
  description:
    'Complete guide to getting internet in China: eSIM vs physical SIM cards, best providers, setup instructions, and pricing.',
}

const sections = [
  {
    category: 'China Basics',
    icon: '📱',
    title: 'eSIM',
    preview:
      'An eSIM is the fastest way to get online because you can buy, install, and test it before departure. You land with data already active for maps, translation, ride-hailing, and payments. It is ideal for short trips when you want zero airport setup friction.',
    tags: ['⚡ Fast Setup', '🛬 Arrival Ready', '🧭 Navigation', '🧳 Short Trips'],
    href: '/china-basics/how-to-get-internet/esim',
    providers: [
      { label: '→ Airalo eSIM', href: '/china-basics/how-to-get-internet/airalo-esim', icon: '📡' },
      { label: '→ Holafly eSIM', href: '/china-basics/how-to-get-internet/holafly-esim', icon: '🌍' },
    ],
  },
  {
    category: 'China Basics',
    icon: '📡',
    title: 'Physical SIM',
    preview:
      'Physical SIMs usually offer larger data allowances and can be more cost-effective for longer stays. Buy from official carrier counters and bring your passport for registration. This option works well if you need high data volume and local plan flexibility.',
    tags: ['📶 More Data', '💵 Better Value', '🛂 Passport ID', '🏪 Official Counters'],
    href: '/china-basics/how-to-get-internet/physical-sim',
  },
]

export default function InternetHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="relative">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'How to Get Internet' }]} />
          <ChineseWatermark character="网络" />
          <h1 className="mb-6 text-5xl font-bold text-gray-900">How to Get Internet in China</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Staying connected in China is crucial for navigation, translation, and payments. Choose the setup that
            fits your trip length and comfort level.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <div
              key={section.href}
              className={`border-b border-[#ebe4d8] ${index < sections.length - 1 ? '' : ''}`}
            >
              <Link
                href={section.href}
                className="block cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#fdf8f3]"
              >
                <article className="py-8 px-6 -mx-6 md:py-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
                  <h3 className="mt-3 text-2xl font-bold text-[#1f2933] md:text-3xl">
                    {section.icon} {section.title}
                  </h3>
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
              {'providers' in section && section.providers && (
                <div className="flex flex-wrap gap-3 px-6 pb-6 -mx-6">
                  {section.providers.map((provider) => (
                    <Link
                      key={provider.href}
                      href={provider.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#e2dbd0] bg-white px-4 py-2.5 text-sm font-medium text-[#1f2933] shadow-sm transition-colors duration-200 hover:border-[#af5d32] hover:bg-[#fdf8f3] hover:text-[#af5d32]"
                    >
                      <span>{provider.icon}</span>
                      {provider.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <div className="mb-8 border-l-4 border-amber-400 bg-amber-50 p-4">
          <h3 className="mb-2 font-semibold text-amber-800">💡 Pro Tips</h3>
          <ul className="space-y-2 text-amber-900">
            <li>• Download a VPN before arriving in China</li>
            <li>• Screenshot important addresses in Chinese</li>
            <li>• Keep your home SIM for emergency calls</li>
          </ul>
        </div>


        <div className="mt-8">
          <ContextualCTA
            icon="🚫"
            title="Understand the Great Firewall"
            description="China blocks Google, WhatsApp, Instagram and more. Know before you go."
            buttonText="Read about censorship →"
            buttonHref="/china-basics/how-china-differs/censorship"
            variant="primary"
          />
        </div>
        <RelatedArticles articles={[
          {title: 'Airalo eSIM', description: 'Affordable data plans that work right away.', href: '/china-basics/how-to-get-internet/airalo-esim'},
          {title: 'Holafly eSIM', description: 'Unlimited data eSIM for worry-free browsing.', href: '/china-basics/how-to-get-internet/holafly-esim'},
          {title: 'VPN Guide', description: 'Access blocked sites with a reliable VPN.', href: '/china-basics/what-apps-to-use/vpn'},
          {title: 'What Apps to Use', description: 'Essential apps to download before your trip.', href: '/china-basics/what-apps-to-use'},
        ]} />
      </main>
    </div>
  )
}
