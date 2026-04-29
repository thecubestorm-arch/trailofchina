import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Alipay in China: Complete Setup Guide for Foreigners',
  description:
    'Step-by-step guide to setting up Alipay as a foreigner in China. Link international cards, verify identity, and pay everywhere like a local.',
}

const setupSteps = [
  {
    title: 'Download and install',
    description:
      'Download Alipay from the iOS App Store or Google Play. On first launch, switch the language to English in Settings via Me → Settings → General → Language. The English interface now covers the essential payment and travel features most visitors need.',
  },
  {
    title: 'Link your Visa or Mastercard',
    description:
      'Go to Me → Bank Cards → Add Card and choose the international card option. Enter the card details exactly as they appear on your passport. Alipay supports foreign-issued Visa and Mastercard directly, although transactions over ¥200 may include a small surcharge.',
  },
  {
    title: 'Complete passport verification',
    description:
      'Open Me → Identity Verification and upload your passport details. This unlocks higher payment limits and features such as ride-hailing and broader service access. Approval can be instant, but some passports take one to three business days.',
  },
  {
    title: 'Make a small test payment',
    description:
      'Try a low-stakes purchase at a convenience store such as FamilyMart, 7-Eleven, or Lawson. Tap Scan in Alipay and point your camera at the merchant QR code. A successful first payment confirms your card, identity, and app permissions are all working together.',
  },
  {
    title: 'Troubleshoot common issues',
    description:
      'If a card is declined, try another international card first. If verification stalls, double-check that your passport name matches your card profile exactly, then contact Alipay support with your verification details. Resolve this before relying on Alipay for transit or larger purchases.',
  },
]

const relatedArticles = [
  {
    title: 'WeChat Pay Guide',
    description: 'The other must-have payment app for China travelers.',
    href: '/china-basics/what-apps-to-use/wechat-pay',
  },
  {
    title: 'Payment Apps Overview',
    description: 'Why you need Alipay and WeChat Pay in cashless China.',
    href: '/china-basics/what-apps-to-use/payment',
  },
  {
    title: 'Meituan Guide',
    description: 'Order food delivery and book hotels with Meituan.',
    href: '/china-basics/what-apps-to-use/meituan',
  },
]

export default function AlipayPage() {
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
              { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
              { label: 'Alipay' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="支" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Alipay in China: Complete Setup Guide for Foreigners
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">支付宝</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">10M+ merchants</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Visa + Mastercard</span>
          <span className="text-[var(--muted)]">·</span>
          <span>QR payments</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          Foreigners can now link international Visa and Mastercard directly in Alipay, with no Chinese bank account needed.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Why You Need This
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Alipay is China&apos;s most widely used payment platform, accepted by over 10 million merchants nationwide. As a
              foreigner, you can now link international Visa and Mastercard cards directly, making it possible to pay for
              almost everything without cash.
            </p>
            <p>
              Over 90% of merchants in China accept <strong>Alipay</strong>, from street food stalls to high-speed train
              bookings. Many smaller businesses no longer accept cash or prefer not to deal with change, so having Alipay
              ready before you land removes a lot of friction from your first days in China.
            </p>
            <p>
              Beyond payments, Alipay mini-programs let you book hotels, order food delivery, buy train tickets, and handle
              day-to-day logistics without downloading a stack of separate apps. In practice, that makes it one of the most
              useful tools a traveler can set up in advance.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Step-by-Step Setup
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step) => (
              <li key={step.title} className="leading-relaxed">
                <p>
                  <strong>{step.title}.</strong> {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Mini-Apps: Your Gateway to Chinese Services
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Alipay is more than a payment wallet. Its mini-app ecosystem turns one familiar app into a practical control
              center for transport, deliveries, healthcare, and daily logistics across China.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mt-8 mb-3">Transit tickets</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Buy subway, bus, and train tickets directly in Alipay. In many cities, your transit QR code becomes the only
              ticket you need at the gate.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mt-8 mb-3">
            Meituan food delivery
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Order meals, desserts, and groceries through the Meituan mini-app without juggling a second account or a
              separate app download.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mt-8 mb-3">Hospital booking</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Many hospitals let you book appointments, pay bills, and check results inside Alipay, which is why locals rely
              on it for everyday healthcare tasks.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mt-8 mb-3">Bike sharing</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Unlock shared bikes from HelloBike and similar providers by scanning the QR code on the bike, then pay
              automatically through your linked card.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Transit: Using Alipay on Subway and Buses
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Most major Chinese cities now integrate Alipay directly into public transport. Once activated for the city you
              are in, it becomes one of the fastest ways to move through stations and onto buses without buying separate
              tickets.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mt-8 mb-3">Subway</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              In cities such as Beijing, Shanghai, Guangzhou, and Shenzhen, open Alipay, go to Transit, select your city,
              and activate the local transit code. After that, scan your QR code at the turnstile and the fare is charged
              automatically. It is often quicker than buying a single-use ticket, especially during rush hour.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mt-8 mb-3">Buses</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Buses usually use the same city transit activation. Show the QR code when boarding and scan it at the door
              reader. Some cities also support NFC, but QR remains the most broadly reliable option for visitors using
              foreign cards.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>
              Enable auto-translate in Alipay settings so merchant names and product listings are easier to understand at a
              glance.
            </p>
            <p>
              Use Alipay mini-apps for DiDi, Meituan, and 12306 when possible, since that keeps your transport, delivery,
              and payment flow inside one familiar interface.
            </p>
            <p>
              Save a screenshot of your payment QR code before entering stations or rural areas where mobile data may be
              unreliable.
            </p>
            <p>
              Showing your QR code can still work with weak signal, because the merchant can scan first and process the
              charge once connectivity catches up.
            </p>
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
          title="Need Internet in China?"
          description="Get an eSIM before you go and stay connected the moment you land."
          buttonText="Get an eSIM →"
          buttonHref="/china-basics/how-to-get-internet/airalo-esim"
          variant="primary"
        />
      </main>
    </div>
  )
}
