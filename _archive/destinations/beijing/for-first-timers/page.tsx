import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Beijing for First-Time China Visitors — What to Know',
  description: 'Is Beijing good for first-time visitors to China? Yes — it is the #1 recommended first city. English signs, great metro, iconic sights. What to set up before landing, visa basics, and Beijing vs Shanghai.',
  keywords: ['Beijing first time', 'first time China Beijing', 'Beijing first visit', 'Beijing vs Shanghai first city'],
  path: '/destinations/beijing/for-first-timers',
})

const faqs = [
  {
    question: 'Should I visit Beijing or Shanghai first?',
    answer: 'Beijing is the better first city if you want iconic history (Great Wall, Forbidden City, Temple of Heaven). Shanghai is better if you want an easier landing — more English, more international food, less culture shock. Most travelers do both; start with Beijing for the wow factor.',
  },
  {
    question: 'Do I need to speak Mandarin to visit Beijing?',
    answer: 'No, but a few phrases help enormously. Beijing metro has full English signage. DiDi works in English. Major sights have English audio guides. Outside tourist areas, English is rare — use a translation app like Baidu Translate or Google Translate with camera mode.',
  },
  {
    question: 'What apps do I need before landing in Beijing?',
    answer: 'Download these before you arrive: Alipay (payment), WeChat (communication + payment), DiDi (ride-hailing, inside Alipay), Amap (maps, works without VPN), and a VPN (ExpressVPN, Astrill, or Let\'s VPN). Google Maps is inaccurate in China even with a VPN.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Beijing?', description: '3-5 day guide with day-by-day plans.', href: '/destinations/beijing/how-many-days' },
  { title: 'Common Mistakes in Beijing', description: '7 errors tourists make — and how to avoid them.', href: '/destinations/beijing/common-mistakes' },
  { title: 'Beijing Transport Guide', description: 'Metro, DiDi, taxi, and airport connections.', href: '/destinations/beijing/transport-guide' },
  { title: '1-2-3 Day Itineraries', description: 'Hour-by-hour plans for short stays.', href: '/destinations/beijing/1-2-3-day-itinerary' },
]

export default function BeijingFirstTimersPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Beijing', path: '/destinations/beijing' },
    { name: 'For First-Timers', path: '/destinations/beijing/for-first-timers' },
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
              { label: 'Beijing', href: '/destinations/beijing' },
              { label: 'For First-Timers' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="初" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              Is Beijing Good for First-Time China Visitors?
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">初次</span>
              <span className="text-lg">• Destinations • Beijing</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Yes — #1 first city</span>
            <span className="text-[var(--muted)]">·</span>
            <span>English metro signs</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Iconic sights</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Beijing is the city most first-time China visitors should start with. It has the iconic sights, decent English support, and a tourist infrastructure that makes the culture shock manageable.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/beijing-first-timer/1600/900" alt="First-time visitor at the Great Wall near Beijing" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why Beijing is the #1 First City</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <ul>
                <li><strong>The iconic sights are here.</strong> Great Wall (长城), Forbidden City (故宫), Temple of Heaven (天坛), Summer Palace (颐和园) — if you came to China for the postcard moments, they are all in Beijing.</li>
                <li><strong>Metro is fully bilingual.</strong> Station names, maps, and announcements are in English and Chinese. You can navigate without reading a single character.</li>
                <li><strong>DiDi works in English.</strong> The Chinese Uber has a full English interface inside the Alipay app. Set your pickup and destination in English — the driver sees it in Chinese.</li>
                <li><strong>Tourist infrastructure is mature.</strong> Hotels, guides, English audio tours at major sights — Beijing has been receiving foreign tourists for decades.</li>
                <li><strong>Most sights are walkable from each other.</strong> The Forbidden City, Tiananmen, hutongs, and Wangfujing are all within a 20-minute walk.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Set Up Before Landing</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Alipay (支付宝).</strong> Link an international credit card. You will use it for metro, DiDi, restaurant payments, and basically everything. Set it up before you fly — verification can take 24 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>WeChat (微信).</strong> China&apos;s everything app. Messaging, payments, mini-programs for booking Forbidden City tickets. Link your same card.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>VPN.</strong> Google, WhatsApp, Instagram, and many Western sites are blocked. Download ExpressVPN, Astrill, or Let&apos;s VPN before arriving — you cannot access their websites from inside China.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Amap (高德地图).</strong> The best map app for China. Works without VPN. Has English directions. Google Maps is inaccurate even with a VPN because of coordinate shifting.</p>
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
                As of 2024, citizens of most Western countries (US, Canada, UK, EU, Australia, New Zealand) can enter China visa-free for 15–30 days. Check the latest rules on the Chinese embassy website for your nationality — policies change frequently. If you need a visa, the standard tourist visa (L visa) allows 30 days and costs roughly $140–160 USD. Processing takes 4–5 business days.
              </p>
              <p>
                Always carry your passport — hotels need it for check-in, some attractions require it for entry, and police can ask for it.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Beijing vs Shanghai as Your First City</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[var(--foreground)]">
                <thead>
                  <tr className="border-b border-[var(--line)]">
                    <th className="py-3 pr-4 font-semibold"></th>
                    <th className="py-3 px-4 font-semibold">Beijing 北京</th>
                    <th className="py-3 px-4 font-semibold">Shanghai 上海</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="py-3 pr-4 font-medium">Best for</td>
                    <td className="py-3 px-4">History, culture, iconic sights</td>
                    <td className="py-3 px-4">Modern city, nightlife, food scene</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">English support</td>
                    <td className="py-3 px-4">Metro only. Streets: limited</td>
                    <td className="py-3 px-4">Metro + restaurants + shops</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Culture shock</td>
                    <td className="py-3 px-4">Higher — more &quot;real China&quot;</td>
                    <td className="py-3 px-4">Lower — very international</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Western food</td>
                    <td className="py-3 px-4">Available in Sanlitun area</td>
                    <td className="py-3 px-4">Everywhere</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Sights</td>
                    <td className="py-3 px-4">Great Wall, Forbidden City, Temple of Heaven</td>
                    <td className="py-3 px-4">Bund, Yu Garden, French Concession</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Recommendation</td>
                    <td className="py-3 px-4 font-bold">Best first city overall</td>
                    <td className="py-3 px-4">Best if you want soft landing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[var(--muted)]">Most travelers do both. The Beijing–Shanghai bullet train takes 4.5 hours (¥553 second class). If you must pick one: Beijing for the bucket-list moments, Shanghai for the comfort.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What Surprises First-Timers</h2>
            <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)]">
              <li><strong>Cash is barely used.</strong> Even street vendors scan your phone. Set up mobile payment before landing.</li>
              <li><strong>Toilets are squat style in most public places.</strong> Carry toilet paper and hand sanitizer — they are rarely provided.</li>
              <li><strong>Google doesn&apos;t work.</strong> Not just search — Maps, Gmail, YouTube, all blocked. A VPN is essential.</li>
              <li><strong>The city is enormous.</strong> Allow 30–60 minutes between sights, even ones that look close on a map.</li>
              <li><strong>Security checks are everywhere.</strong> Metro stations, museums, shopping malls — all X-ray your bags. It takes 10–30 seconds each time.</li>
              <li><strong>People may stare or take photos.</strong> Foreigners are still a novelty in some areas. A smile or wave usually gets a friendly reaction.</li>
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