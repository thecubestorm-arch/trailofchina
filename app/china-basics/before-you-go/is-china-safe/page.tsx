import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: "Is China Safe? A Traveler's Safety Guide | Trail of China",
  description:
    "China is one of the safest countries for tourists. Learn about crime rates, common scams, women's safety, food safety, emergency numbers, and what to watch out for.",
}

const safetyPoints = [
  'China has very low violent crime rates, making it safer than most Western cities for tourists.',
  'Understanding common scams such as overpricing and fake taxis saves you money and frustration.',
  'Knowing emergency numbers like 110, 120, and 119 gives you confidence if something goes wrong.',
  'Food and water safety basics prevent the most common travel illness in China.',
]

const safetySections = [
  {
    title: 'Understand the big picture: China is very safe',
    description:
      'Violent crime against tourists is rare. Muggings and armed robbery are almost unheard of in tourist areas. Cities have extensive CCTV coverage and police presence. The biggest "risk" most travelers face is being overcharged at a market, not physical harm.',
  },
  {
    title: 'Watch for petty theft and scams',
    description:
      'Pickpocketing exists but is uncommon, mostly in crowded markets, train stations, and tourist hotspots. Keep your phone and wallet in front pockets. Scams to watch for include taxi drivers who refuse the meter, tea house scams, and art gallery scams. At markets, prices are often inflated for foreigners, so haggle confidently or shop at fixed-price stores.',
  },
  {
    title: 'Women travelers: generally very safe',
    description:
      'Street harassment is rare in China. Solo female travelers report feeling safe walking alone at night in most cities. Exercise the same caution you would anywhere: avoid poorly lit areas late at night, keep someone informed of your plans, and trust your instincts. Public transport is safe, though rush-hour crowds can be uncomfortable.',
  },
  {
    title: 'Night safety and public areas',
    description:
      'Most city centers are lively and safe well past midnight. Parks, shopping districts, and restaurant areas stay busy into the night. Avoid walking alone in isolated or unlit areas. If you feel unsafe, head to a convenience store or a hotel lobby.',
  },
  {
    title: 'Food safety: mostly fine, use common sense',
    description:
      'Street food is generally safe if you follow basic rules: eat where locals are lining up, avoid raw or undercooked meat, and skip unpeeled fruit from street vendors. Stick to busy stalls with high turnover. Restaurant food is reliably safe in cities. Tap water is not drinkable, so always drink bottled or boiled water.',
  },
  {
    title: 'Health and air quality',
    description:
      'Air quality can be poor in major cities such as Beijing, Shanghai, and Chengdu, especially in winter. Consider bringing a reusable N95 mask if you are sensitive. Tap water is not drinkable, so buy bottled water or use a kettle. Pharmacies are common and carry most basic medications. For serious issues, international hospitals in major cities have English-speaking staff.',
  },
  {
    title: 'Save these emergency numbers',
    description:
      'Police: 110. Ambulance: 120. Fire: 119. These work from any phone, including without a SIM card. Add them to your phone before arrival. The 110 police number is widely understood, and operators in major cities often have basic English skills.',
  },
]

const proTips = [
  'Download offline maps before arrival so you can still navigate without a SIM or active data.',
  'Take a photo of your passport and visa, store it in cloud storage, and keep a printed copy separate from your passport.',
  'Use Didi instead of hailing taxis on the street so prices are fixed and the ride is trackable.',
  'If you lose your passport, report it to the nearest police station immediately and contact your embassy.',
  'Travel insurance is strongly recommended because medical care for foreigners is usually cash-up-front.',
  'Carry toilet paper and hand sanitizer because public restrooms often lack both.',
]

const relatedArticles = [
  {
    title: 'Visa Guide',
    description: 'Do you need a visa? Types, processing, and visa-free entry.',
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    title: 'Packing List',
    description: 'What to bring and what to leave at home.',
    href: '/china-basics/before-you-go/packing-list',
  },
  {
    title: 'Censorship & Internet',
    description: "What's blocked and how to stay connected.",
    href: '/china-basics/how-china-differs/censorship',
  },
  {
    title: 'Passport Rules',
    description: 'Entry requirements and passport validity.',
    href: '/china-basics/how-china-differs/passport-rules',
  },
]

export default function IsChinaSafePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
      }}
    >
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'China Basics', href: '/china-basics' },
              { label: 'Before You Go', href: '/china-basics/before-you-go' },
              { label: 'Is China Safe?' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="安" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Is China Safe?
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">安全</span>
            <span className="text-lg">• China Basics • Before You Go</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Low violent crime</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Common-sense scams</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Emergency numbers matter</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          China is one of the safest countries most travelers will ever visit, but confidence comes from knowing the few
          friction points before you land.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-safe-travel/1600/900"
            alt="Safe evening street scene in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China is one of the safest countries in the world for tourists. Violent crime against foreigners is
              extremely rare, streets are well-lit and patrolled, and locals are generally helpful. Still, it pays to
              know the few risks that do exist and how to avoid them.
            </p>
            <ul>
              {safetyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Expect</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {safetySections.map((section) => (
              <li key={section.title} className="leading-relaxed">
                <p>
                  <strong>{section.title}.</strong> {section.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            {proTips.map((tip) => (
              <p key={tip}>{tip}</p>
            ))}
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Related Articles</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContextualCTA
          icon="📋"
          title="Ready to Plan?"
          description="Download our free China Cheat Sheet for quick-reference phrases, etiquette, and arrival essentials."
          buttonText="Get the Cheat Sheet →"
          buttonHref="#cheat-sheet"
          variant="secondary"
        />
      </main>
    </div>
  )
}
