import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: '7 Common Mistakes in Beijing (And How to Avoid Them)',
  description: 'Avoid the 7 most common mistakes tourists make in Beijing: going to Badaling instead of Mutianyu, not booking Forbidden City tickets, eating on Wangfujing tourist street, and more.',
  keywords: ['Beijing mistakes', 'Beijing tourist traps', 'Beijing travel tips', 'Badaling vs Mutianyu', 'Beijing common errors'],
  path: '/destinations/beijing/common-mistakes',
})

const faqs = [
  {
    question: 'Why should I avoid Badaling Great Wall?',
    answer: 'Badaling is the closest section to Beijing but also the most crowded — up to 80,000 visitors per day. Mutianyu is 30 minutes farther but has a fraction of the crowds, better-preserved walls, a cable car, and a toboggan slide. Always choose Mutianyu.',
  },
  {
    question: 'Do I really need to book Forbidden City tickets in advance?',
    answer: 'Yes, absolutely. The Forbidden City caps daily visitors at 30,000 and tickets sell out — often by 8 AM on the day. Book exactly 7 days in advance via the WeChat mini-program at midnight Beijing time. Same-day tickets are almost never available.',
  },
  {
    question: 'Is Wangfujing Street Food worth visiting?',
    answer: 'The famous Wangfujing Snack Street is a tourist trap with overpriced novelty foods like scorpions and starfish on sticks. Real Beijing street food — jianbing, lamb skewers, zhajiangmian — is found in hutongs and local neighborhoods at a fraction of the price.',
  },
]

const mistakes = [
  {
    title: 'Going to Badaling instead of Mutianyu',
    description: 'Badaling (八达岭) is the closest Great Wall section and the one on every tour bus route. That means 80,000 visitors on a busy day, wall-to-wall crowds, and pushy souvenir vendors. Mutianyu (慕田峪) is just 30 minutes farther but has a fraction of the visitors, better-preserved stonework, mountain scenery, a cable car up, and a toboggan slide down. The math is simple.',
    fix: 'Book a Mutianyu shuttle or DiDi from downtown. ¥40 entrance, ¥120 cable car + toboggan combo.',
  },
  {
    title: 'Trying to see everything in 2 days',
    description: 'Beijing is huge — 21 million people, 16,000 km². The Forbidden City alone takes 3–4 hours. Mutianyu is a full day round trip. The Summer Palace needs half a day. Two days guarantees you either skip major sights or sprint through them without absorbing anything.',
    fix: 'Plan at least 3–4 days. If you only have 2, prioritize the Forbidden City + Great Wall on day 1, and Temple of Heaven + hutongs on day 2.',
  },
  {
    title: 'Not booking Forbidden City tickets in advance',
    description: 'The Forbidden City (故宫博物院) caps daily visitors at 30,000 and requires real-name registration with your passport number. Tickets often sell out by 8 AM on the day of visit. Showing up without a ticket means you stare at the Meridian Gate from the outside.',
    fix: 'Book exactly 7 days ahead via the Palace Museum WeChat mini-program (故宫博物院). Set an alarm for midnight Beijing time when the booking window opens.',
  },
  {
    title: 'Eating only on Wangfujing tourist food street',
    description: 'Wangfujing Snack Street (王府井小吃街) is designed for tourists. You will pay ¥50 for a scorpion on a stick that no local would ever eat. The real food — jianbing (煎饼, ¥8), lamb skewers (羊肉串, ¥15), zhajiangmian (炸酱面, ¥25) — is in hutongs and neighborhood restaurants where locals actually eat.',
    fix: 'Skip the tourist street. Eat in Dongcheng hutongs, near Nanluoguxiang, or at Guijie (簋街) — the 24-hour restaurant street.',
  },
  {
    title: 'Skipping the hutongs',
    description: 'Most visitors walk past hutong neighborhoods (胡同) on their way from the Forbidden City to a taxi. These ancient alleyway districts are the last living piece of old Beijing — courtyard homes, local shops, hidden cafés, and real neighborhood life. Once they are gone, they are gone.',
    fix: 'Walk the Nanluoguxiang (南锣鼓巷) area, explore around Drum and Bell Towers (钟鼓楼), or take a rickshaw tour through Shichahai (什刹海) hutongs. Free to wander.',
  },
  {
    title: 'Not setting up DiDi or a transport card',
    description: 'Beijing taxis are metered (¥13 base fare) but drivers rarely speak English and may take the scenic route. Street hailing is chaotic. Without DiDi (the Chinese Uber), you are stuck negotiating fares or pointing at maps.',
    fix: 'Download DiDi within the Alipay or WeChat app before you arrive. The English interface shows the price upfront, tracks the route, and lets you input destinations in English. Metro payment: just scan Alipay or WeChat Pay at turnstiles — no transport card needed.',
  },
  {
    title: 'Visiting during Chinese national holidays',
    description: 'October 1–7 (National Day / Golden Week), May 1–5 (Labor Day), and Chinese New Year bring 700+ million domestic tourists onto the move. Beijing sights are at maximum capacity. Hotels double in price. Train tickets sell out instantly.',
    fix: 'Check the Chinese holiday calendar before booking. Best windows: April, late May, September, late October–November. Avoid Golden Week at all costs.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Beijing?', description: '3-5 day guide with day-by-day breakdowns.', href: '/destinations/beijing/how-many-days' },
  { title: 'Beijing for First-Timers', description: 'Everything first-time visitors need to know.', href: '/destinations/beijing/for-first-timers' },
  { title: 'Beijing Transport Guide', description: 'Metro, DiDi, taxi, and airport explained.', href: '/destinations/beijing/transport-guide' },
  { title: 'Beijing Local Tips', description: 'Money-saving hacks and insider knowledge.', href: '/destinations/beijing/local-tips' },
]

export default function BeijingCommonMistakesPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Beijing', path: '/destinations/beijing' },
    { name: 'Common Mistakes', path: '/destinations/beijing/common-mistakes' },
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
              { label: 'Common Mistakes' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="错" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              7 Common Mistakes Tourists Make in Beijing
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">错误</span>
              <span className="text-lg">• Destinations • Beijing</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Badaling ≠ the Wall</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Book tickets early</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Eat where locals eat</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            These are the mistakes we see over and over. Avoid all seven and your Beijing trip goes from &quot;fine&quot; to unforgettable.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/beijing-mistakes-mutianyu/1600/900" alt="Mutianyu Great Wall with few visitors, Beijing" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-6">The Mistakes</h2>
            <ol className="list-decimal pl-6 space-y-8 text-[var(--foreground)]">
              {mistakes.map((mistake) => (
                <li key={mistake.title} className="leading-relaxed">
                  <p className="mb-2"><strong>{mistake.title}</strong></p>
                  <p className="text-[var(--muted)] mb-3">{mistake.description}</p>
                  <p className="text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3"><strong>✓ Fix:</strong> {mistake.fix}</p>
                </li>
              ))}
            </ol>
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
            title="Plan Smarter"
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