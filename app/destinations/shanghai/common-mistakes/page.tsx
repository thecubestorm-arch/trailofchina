import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: '6 Common Mistakes in Shanghai (And How to Avoid Them)',
  description: 'Avoid the 6 most common mistakes tourists make in Shanghai: missing the Bund at night, not setting up Alipay/WeChat Pay, overpaying on Nanjing Road, skipping the French Concession, and more.',
  keywords: ['Shanghai mistakes', 'Shanghai tourist traps', 'Shanghai travel tips', 'Shanghai common errors', 'Shanghai Bund mistakes'],
  path: '/destinations/shanghai/common-mistakes',
})

const faqs = [
  {
    question: 'Why should I see the Bund at night?',
    answer: 'The Bund transforms after dark. Pudong\'s skyline — Oriental Pearl Tower, Shanghai Tower, SWFC — lights up across the Huangpu River and reflects on the water. By day it is just a nice promenade; by night it is one of the world\'s great city views. Go between 7-9 PM for the best light.',
  },
  {
    question: 'Do I really need Alipay and WeChat Pay in Shanghai?',
    answer: 'Yes. Shanghai is almost entirely cashless. Street vendors, convenience stores, metro, DiDi, restaurants — all expect mobile payment. Cash works at some larger stores and hotels, but you will be stuck without Alipay or WeChat Pay. Set both up before you arrive.',
  },
  {
    question: 'Is Nanjing Road worth visiting?',
    answer: 'Nanjing Road (南京路) is worth a quick walk but not a shopping trip. It is overpriced and crowded with international chain stores you can find anywhere. For real shopping, go to Tianzifang, French Concession boutiques, or AP Plaza. For food, definitely avoid the tourist restaurants on Nanjing Road.',
  },
]

const mistakes = [
  {
    title: 'Missing the Bund at night',
    description: 'The Bund (外滩) by day is a pleasant waterfront walk. The Bund at night — when Pudong\'s skyline erupts in light across the Huangpu River — is one of the most iconic views in Asia. Many tourists see it once during the day and move on. That is like visiting Times Square at noon.',
    fix: 'Visit the Bund twice: once at dawn for empty walkways and photos, and once after 7 PM when the skyline lights up. The light show runs until 10 PM (11 PM on weekends). Free.',
  },
  {
    title: 'Not setting up Alipay/WeChat Pay before arriving',
    description: 'Shanghai is one of the most cashless cities on earth. Street vendors, metro turnstiles, DiDi, restaurants, even vending machines — all scan your phone. Without mobile payment set up, you will be fumbling for cash that nobody wants to take. The setup process can take 24 hours for identity verification.',
    fix: 'Download Alipay (支付宝) and WeChat (微信) before your flight. Link an international Visa or Mastercard. Complete identity verification. Test with a small payment at a convenience store on arrival.',
  },
  {
    title: 'Overpaying on Nanjing Road',
    description: 'Nanjing Road (南京路) is Shanghai\'s most famous shopping street — and its most overpriced. International chain stores at full retail, tourist-trap restaurants with ¥80 bowls of noodles, and aggressive touts pulling you into &quot;bargain&quot; shops. The prices are 2–3× what locals pay elsewhere.',
    fix: 'Walk Nanjing Road for the spectacle (5 minutes is enough). Shop at Tianzifang (田子坊) for unique crafts, French Concession boutiques for fashion, or AP Plaza for electronics. Eat anywhere except Nanjing Road tourist restaurants.',
  },
  {
    title: 'Skipping the French Concession',
    description: 'The French Concession (法租界) is Shanghai\'s most livable neighborhood — tree-lined streets, Art Deco villas, independent cafés, boutique shops, and hidden bars. Many tourists walk the Bund and Nanjing Road but never venture into the streets where actual Shanghainese spend their time.',
    fix: 'Spend at least a full afternoon in the French Concession. Walk Fuxing Road (复兴路), explore Sinan Mansions (思南公馆), stop at a coffee shop on Anfu Road (安福路). Free to wander.',
  },
  {
    title: 'Eating only in tourist restaurants',
    description: 'The restaurants on Nanjing Road, the Bund, and Yu Garden bazaar are designed for tourists. You will pay ¥80–150 for a plate of noodles that costs ¥25 in a neighborhood shop 10 minutes away. The food is often simplified for foreign palates.',
    fix: 'Eat where locals eat. Shengjianbao (生煎包) at Yang\'s Dumplings (小杨生煎) — ¥15 for 4. Scallion oil noodles (葱油拌面) at a neighborhood shop — ¥25. Xiaolongbao at Jia Jia Tang Bao (佳家汤包) — ¥30. Skip any restaurant with picture menus facing the street.',
  },
  {
    title: 'Not taking the ¥2 ferry across the river',
    description: 'The Bund Sightseeing Tunnel (外滩观光隧道) is a ¥50 one-way ride through a neon-lit underground tube — basically a 3-minute light show. Tourists take it because they do not know there is a better option. The public ferry (轮渡) costs ¥2, takes 10 minutes, and gives you actual river views.',
    fix: 'Skip the sightseeing tunnel entirely. Take the public ferry from Dongchang Road Ferry Terminal (东昌路渡口) to the Bund side. ¥2 with Alipay scan. Runs every 10 minutes until 9 PM. Actual river views, not neon lights.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Shanghai?', description: '3-4 day guide with day-by-day plans.', href: '/destinations/shanghai/how-many-days' },
  { title: 'Shanghai for First-Timers', description: 'Everything first-time visitors need to know.', href: '/destinations/shanghai/for-first-timers' },
  { title: 'Shanghai Transport Guide', description: 'Metro, Maglev, DiDi, and airport explained.', href: '/destinations/shanghai/transport-guide' },
  { title: 'Shanghai Local Tips', description: 'Money-saving hacks and insider knowledge.', href: '/destinations/shanghai/local-tips' },
]

export default function ShanghaiCommonMistakesPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Shanghai', path: '/destinations/shanghai' },
    { name: 'Common Mistakes', path: '/destinations/shanghai/common-mistakes' },
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
              { label: 'Common Mistakes' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="错" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              6 Common Mistakes Tourists Make in Shanghai
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">错误</span>
              <span className="text-lg">• Destinations • Shanghai</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Bund at night = mandatory</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Set up mobile pay</span>
            <span className="text-[var(--muted)]">·</span>
            <span>¥2 ferry &gt; ¥50 tunnel</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Shanghai is easy to get wrong in small ways. These six mistakes are the ones we see most often — and every one is easy to fix.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/shanghai-mistakes-bund/1600/900" alt="The Bund illuminated at night with Pudong skyline, Shanghai" className="h-64 w-full rounded-lg object-cover md:h-96" />
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