import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Shanghai for First-Time China Visitors — What to Know',
  description: 'Is Shanghai good for first-time visitors to China? Yes — the most international city in China. English more common, western food available, easiest landing. Shanghai vs Beijing comparison.',
  keywords: ['Shanghai first time', 'first time China Shanghai', 'Shanghai first visit', 'Shanghai vs Beijing first city'],
  path: '/destinations/shanghai/for-first-timers',
})

const faqs = [
  {
    question: 'Should I visit Shanghai or Beijing first?',
    answer: 'Shanghai is the easier landing — more English, more international food, less culture shock. Beijing has the iconic sights (Great Wall, Forbidden City). If you want comfort first, start with Shanghai. If you want the wow factor, start with Beijing. Most travelers do both.',
  },
  {
    question: 'Is English widely spoken in Shanghai?',
    answer: 'More than in any other Chinese city. Hotel staff, restaurant waiters in tourist areas, and younger people often speak basic English. Metro is fully bilingual. But outside central areas, English drops off fast. Always have a translation app ready.',
  },
  {
    question: 'What apps do I need before landing in Shanghai?',
    answer: 'Download these before you arrive: Alipay (payment everywhere), WeChat (messaging + payment), DiDi (ride-hailing, inside Alipay), Amap (maps, works without VPN), and a VPN (ExpressVPN, Astrill). Also download Baidu Translate for camera-mode menu reading.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Shanghai?', description: '3-4 day guide with day-by-day plans.', href: '/destinations/shanghai/how-many-days' },
  { title: 'Common Mistakes in Shanghai', description: '6 errors tourists make — and how to avoid them.', href: '/destinations/shanghai/common-mistakes' },
  { title: 'Shanghai Transport Guide', description: 'Metro, Maglev, DiDi, and airport explained.', href: '/destinations/shanghai/transport-guide' },
  { title: '1-2-3 Day Itineraries', description: 'Hour-by-hour plans for short stays.', href: '/destinations/shanghai/1-2-3-day-itinerary' },
]

export default function ShanghaiFirstTimersPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Shanghai', path: '/destinations/shanghai' },
    { name: 'For First-Timers', path: '/destinations/shanghai/for-first-timers' },
  ])
  const faqJsonLd = faqPageSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="min-h-screen" style={{ background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff' }}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Destinations', href: '/destinations' },
              { label: 'Shanghai', href: '/destinations/shanghai' },
              { label: 'For First-Timers' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="初" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              Is Shanghai Good for First-Time China Visitors?
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">初次</span>
              <span className="text-lg">• Destinations • Shanghai</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Yes — easiest landing</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Most international city</span>
            <span className="text-[var(--muted)]">·</span>
            <span>English common</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Shanghai is China&apos;s softest landing. The most international city in the country, with more English, more familiar food, and less culture shock than anywhere else in China.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/shanghai-first-timer/1600/900" alt="First-time visitor on the Bund overlooking Pudong, Shanghai" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why Shanghai is the Easiest First City</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <ul>
                <li><strong>English is more common here than anywhere else in China.</strong> Hotel staff, restaurant menus, shop assistants in tourist areas — you can get by without Mandarin more easily in Shanghai than Beijing, Chengdu, or Xi&apos;an.</li>
                <li><strong>Western food is everywhere.</strong> From French bakeries in the French Concession to Italian restaurants in Xintiandi, you will not starve if Chinese food gets overwhelming. In most other Chinese cities, western options are limited.</li>
                <li><strong>Metro is fully bilingual and excellent.</strong> 19 lines, ¥3–10 per ride, English signage at every station. The Maglev from Pudong Airport hits 431 km/h — your arrival to China starts with a thrill.</li>
                <li><strong>Most walkable major city.</strong> The Bund, Yu Garden, Nanjing Road, and the French Concession are all within a 20-minute walk. Less metro fatigue than Beijing.</li>
                <li><strong>International community.</strong> Shanghai has a large expat population. If something goes wrong, English-speaking help — from hotels, clinics, or consulates — is easier to find.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Set Up Before Landing</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Alipay (支付宝).</strong> Link an international credit card. You will use it for everything — metro, DiDi, food, shops. Verification can take 24 hours, so do it before you fly.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>WeChat (微信).</strong> China&apos;s everything app. Messaging, payments, mini-programs for booking. Link the same card.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>VPN.</strong> Google, WhatsApp, Instagram, and most Western platforms are blocked. Download ExpressVPN, Astrill, or Let&apos;s VPN before arriving — you cannot access their websites from China.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Amap (高德地图).</strong> Best map app for China. Works without VPN. English directions available. Google Maps is inaccurate even with VPN due to coordinate shifting.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Translation app.</strong> Baidu Translate or Google Translate with offline Chinese downloaded. Camera mode is essential for menus and signs.</p>
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Visa Basics</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Citizens of most Western countries (US, Canada, UK, EU, Australia, New Zealand) can enter China visa-free for 15–30 days as of 2024. Check the Chinese embassy website for your nationality — policies change. The standard tourist visa (L visa) allows 30 days and costs roughly $140–160 USD.
              </p>
              <p>
                Shanghai also offers a <strong>144-hour visa-free transit</strong> if you are connecting through Shanghai to a third country. This is perfect for a 5–6 day stopover.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Shanghai vs Beijing as Your First City</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[var(--foreground)]">
                <thead>
                  <tr className="border-b border-[var(--line)]">
                    <th className="py-3 pr-4 font-semibold"></th>
                    <th className="py-3 px-4 font-semibold">Shanghai 上海</th>
                    <th className="py-3 px-4 font-semibold">Beijing 北京</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="py-3 pr-4 font-medium">Best for</td>
                    <td className="py-3 px-4">Modern city, food, nightlife</td>
                    <td className="py-3 px-4">History, culture, iconic sights</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">English support</td>
                    <td className="py-3 px-4">Metro + restaurants + shops</td>
                    <td className="py-3 px-4">Metro only. Streets: limited</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Culture shock</td>
                    <td className="py-3 px-4">Lower — very international</td>
                    <td className="py-3 px-4">Higher — more &quot;real China&quot;</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Western food</td>
                    <td className="py-3 px-4">Everywhere</td>
                    <td className="py-3 px-4">Available in Sanlitun area</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Walkability</td>
                    <td className="py-3 px-4">High — many sights within walking distance</td>
                    <td className="py-3 px-4">Lower — sights spread far apart</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Recommendation</td>
                    <td className="py-3 px-4 font-bold">Best if you want soft landing</td>
                    <td className="py-3 px-4">Best first city overall (for history)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[var(--muted)]">Most travelers do both. The Beijing–Shanghai bullet train takes 4.5 hours (¥553 second class). If you must pick one: Shanghai for comfort, Beijing for bucket-list moments.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What Surprises First-Timers</h2>
            <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)]">
              <li><strong>Cash is rarely used.</strong> Even street food vendors scan your phone. Mobile payment is essential.</li>
              <li><strong>The city is cleaner than expected.</strong> Shanghai is remarkably clean for a city of 26 million.</li>
              <li><strong>Google doesn&apos;t work.</strong> Not just search — Maps, Gmail, YouTube, all blocked. A VPN is essential.</li>
              <li><strong>Summer is brutal.</strong> July–August brings 35°C+ heat with 80% humidity. Carry water everywhere.</li>
              <li><strong>People queue here.</strong> Unlike many Chinese cities, Shanghai has relatively orderly queuing at metro stations and shops.</li>
              <li><strong>The Bund is free.</strong> No tickets, no tours needed. Just show up and walk.</li>
            </ul>
          </section>

          <section className="mb-10 border-t border-[#ebe4d8]">
            <div className="pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Related Articles</h2>
              <div className="divide-y divide-[#ebe4d8]">
                {relatedArticles.map((article) => (
                  <Link key={article.href} href={article.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                    <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">{article.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <ContextualCTA
            icon="📋"
            title="First Time in China?"
            description="Download our free China Cheat Sheet for quick-reference phrases, etiquette, and arrival essentials."
            buttonText="Get the Cheat Sheet →"
            buttonHref="#cheat-sheet"
            variant="secondary"
          />
        </main>
      </div>
    </>
  )
}