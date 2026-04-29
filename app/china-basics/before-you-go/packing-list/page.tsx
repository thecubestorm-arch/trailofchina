import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Packing List for China: What to Bring & What to Skip | Trail of China',
  description:
    'The ultimate China packing checklist: documents, electronics, clothing, toiletries, money, and tech essentials. Plus what to leave at home.',
}

const checklistReasons = [
  'Public restrooms in China often lack toilet paper, so bringing your own matters immediately.',
  'China uses Type A and Type I plugs, so a universal adapter is essential.',
  'You cannot reliably download a VPN after arrival, so install and test it before you fly.',
  'Alipay works best when it is already set up before departure, not while you are tired at the airport.',
]

const packingSections = [
  {
    title: 'Essential documents',
    description:
      'Passport with at least six months validity and two blank pages. Printed visa confirmation if required. Travel insurance documents in paper and digital form. Hotel addresses written in Chinese characters because taxi drivers rarely read English. Flight itineraries and booking confirmations. A photocopy of your passport stored separately from the original.',
  },
  {
    title: 'Electronics and power',
    description:
      'Bring a universal travel adapter because China uses Type A and Type I plugs with 220V power. Pack a power bank because your phone will be doing maps, payments, translation, and ticketing all day. Use an unlocked smartphone if you want a Chinese SIM or eSIM. Bring charging cables and a spare if possible. Most modern chargers support 220V, but check before you fly.',
  },
  {
    title: 'Clothing and footwear',
    description:
      'Comfortable walking shoes with good grip matter more than anything fashionable because city days often run past 15,000 steps. Pack lightweight layers, a light jacket for aggressive indoor air conditioning, modest clothing for temples, and a compact umbrella or light rain jacket. Comfortable sandals help in hotel rooms and casual evenings.',
  },
  {
    title: 'Toiletries and personal care',
    description:
      'Pack toilet paper or travel tissues because public restrooms rarely provide it. Hand sanitizer and wet wipes help when soap is missing. Sunscreen, sunglasses, and a hat are useful in summer. Bring prescription medications in original packaging with a doctor\'s note. A compact first-aid kit with pain relievers, anti-diarrheal medicine, bandages, and motion sickness tablets covers most routine issues.',
  },
  {
    title: 'Money and payments',
    description:
      'Carry some Chinese Yuan for small vendors and rural areas that still prefer cash. Set up and verify Alipay before departure. Bring at least one backup credit or debit card. Notify your bank of travel dates to reduce card blocks. A small wallet or coin pouch helps with cash and receipts.',
  },
  {
    title: 'Tech and connectivity',
    description:
      'Download, install, and test your VPN before departure because you may not be able to access VPN sites once inside China. Download offline maps and an offline Chinese language pack for your translation app. Buy an eSIM ahead of time or decide on a travel SIM plan. Set up WeChat and add key contacts before leaving home.',
  },
  {
    title: 'Leave these at home',
    description:
      'Skip expensive jewelry, large amounts of cash, and bulky valuables because they add risk without much value. Heavy books are rarely worth carrying when an e-reader or phone works better. Excess toiletries are unnecessary because convenience stores and supermarkets stock the basics. A hard-shell large suitcase is less practical than softer luggage on trains and in compact hotel rooms.',
  },
]

const proTips = [
  'Pack a day bag small enough for everyday carry because you will want room for water, tissues, and small purchases.',
  'Bring a reusable water bottle and fill it with bottled or boiled water since tap water is not drinkable.',
  'Ziplock bags are useful for wet clothes, snacks, and cable organization.',
  'If you wear contact lenses, bring extra solution because local brands may differ from what you use at home.',
  'A portable door lock or doorstop adds peace of mind in budget accommodations.',
  'Pack earplugs and an eye mask if you are sensitive to city noise or early morning light.',
]

const relatedArticles = [
  {
    title: 'Is China Safe?',
    description: 'Safety tips and what to expect as a tourist.',
    href: '/china-basics/before-you-go/is-china-safe',
  },
  {
    title: 'Visa Guide',
    description: 'Do you need a visa? Types, processing, and visa-free entry.',
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    title: 'How to Get Internet',
    description: 'eSIMs, SIMs, and staying connected in China.',
    href: '/china-basics/how-to-get-internet',
  },
  {
    title: 'VPN Setup',
    description: 'Which VPNs work and how to set them up before arrival.',
    href: '/china-basics/what-apps-to-use/vpn',
  },
]

export default function PackingListPage() {
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
              { label: 'Packing List' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="包" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Packing List for China
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">行李</span>
            <span className="text-lg">• China Basics • Before You Go</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Documents first</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Adapter + VPN</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Pack lighter than you think</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          Packing for China gets easier once you focus on the items that solve real arrival problems rather than trying to
          prepare for everything.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/packing-china/1600/900"
            alt="Packed travel bag for a China trip"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with packing checklist image</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Packing for China is straightforward once you know what matters. Bring the right documents, tech, and
              personal items, and leave expensive jewelry and excess valuables at home. This checklist covers everything
              from toilet paper to VPN apps.
            </p>
            <ul>
              {checklistReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Pack</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {packingSections.map((section) => (
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
          icon="🌐"
          title="Get an eSIM Before You Go"
          description="Stay connected in China with an eSIM that is ready before you land."
          buttonText="Get an eSIM →"
          buttonHref="/china-basics/how-to-get-internet/airalo-esim"
          variant="primary"
        />
      </main>
    </div>
  )
}
