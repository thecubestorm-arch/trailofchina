import type { Metadata } from 'next'
import Link from 'next/link'
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
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <nav aria-label="breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#64748b]">
            <li>
              <Link href="/" className="text-[#af5d32] hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/china-basics" className="text-[#af5d32] hover:underline">
                China Basics
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/china-basics/what-apps-to-use" className="text-[#af5d32] hover:underline">
                What Apps to Use
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#1a3a4a]" aria-current="page">
              Alipay
            </li>
          </ol>
        </nav>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link
              href="/china-basics/what-apps-to-use"
              className="text-[#af5d32] uppercase tracking-[0.2em] text-xs font-semibold hover:underline"
            >
              What Apps to Use
            </Link>
            <span className="text-[#5d6a73] text-sm">April 2025 · 6 min read</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-6 leading-tight">
            Alipay in China: Complete Setup Guide for Foreigners
          </h1>

          <img
            src="https://picsum.photos/seed/alipay-china/800/400"
            alt="Alipay in China"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose max-w-none">
            <p className="text-lg text-[#5d6a73] mb-8 leading-relaxed">
              Alipay is China&apos;s most widely used payment platform, accepted by over 10 million merchants nationwide. As a
              foreigner, you can now link international Visa and Mastercard cards directly, making it possible to pay for
              almost everything without cash.
            </p>

            <div className="text-[#1a3a4a]">
              <blockquote className="border-l-4 border-[#af5d32] pl-4 italic text-[#5d6a73] my-6">
                Foreigners can now link international Visa and Mastercard directly in Alipay, with no Chinese bank account
                needed.
              </blockquote>

              <p className="mb-4 leading-relaxed">
                Over 90% of merchants in China accept <strong className="font-bold text-[#1a3a4a]">Alipay</strong>, from
                street food stalls to high-speed train bookings. Many smaller businesses no longer accept cash or prefer not
                to deal with change, so having Alipay ready before you land removes a lot of friction from your first days in
                China.
              </p>

              <p className="mb-4 leading-relaxed">
                Beyond payments, Alipay mini-programs let you book hotels, order food delivery, buy train tickets, and handle
                day-to-day logistics without downloading a stack of separate apps. In practice, that makes it one of the most
                useful tools a traveler can set up in advance.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong className="font-bold text-[#1a3a4a]">Quick info:</strong> 10M+ merchants, Visa and Mastercard
                support, QR payments, and mini-apps for transit and daily services.
              </p>

              <hr className="border-t border-[#ebe4d8] my-8" />

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a] mt-10 mb-4">Payment Setup</h2>

              <ol className="list-decimal pl-6 mb-4 space-y-4">
                {setupSteps.map((step) => (
                  <li key={step.title} className="leading-relaxed">
                    <strong className="font-bold text-[#1a3a4a]">{step.title}.</strong> {step.description}
                  </li>
                ))}
              </ol>

              <hr className="border-t border-[#ebe4d8] my-8" />

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a] mt-10 mb-4">
                Mini-Apps: Your Gateway to Chinese Services
              </h2>

              <p className="mb-4 leading-relaxed">
                Alipay is more than a payment wallet. Its mini-app ecosystem turns one familiar app into a practical control
                center for transport, deliveries, healthcare, and daily logistics across China.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mt-8 mb-3">Transit tickets</h3>
              <p className="mb-4 leading-relaxed">
                Buy subway, bus, and train tickets directly in Alipay. In many cities, your transit QR code becomes the only
                ticket you need at the gate.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mt-8 mb-3">Meituan food delivery</h3>
              <p className="mb-4 leading-relaxed">
                Order meals, desserts, and groceries through the Meituan mini-app without juggling a second account or a
                separate app download.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mt-8 mb-3">Hospital booking</h3>
              <p className="mb-4 leading-relaxed">
                Many hospitals let you book appointments, pay bills, and check results inside Alipay, which is why locals
                rely on it for everyday healthcare tasks.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mt-8 mb-3">Bike sharing</h3>
              <p className="mb-4 leading-relaxed">
                Unlock shared bikes from HelloBike and similar providers by scanning the QR code on the bike, then pay
                automatically through your linked card.
              </p>

              <hr className="border-t border-[#ebe4d8] my-8" />

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a3a4a] mt-10 mb-4">
                Transit: Using Alipay on Subway and Buses
              </h2>

              <p className="mb-4 leading-relaxed">
                Most major Chinese cities now integrate Alipay directly into public transport. Once activated for the city
                you are in, it becomes one of the fastest ways to move through stations and onto buses without buying separate
                tickets.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mt-8 mb-3">Subway</h3>
              <p className="mb-4 leading-relaxed">
                In cities such as Beijing, Shanghai, Guangzhou, and Shenzhen, open Alipay, go to Transit, select your city,
                and activate the local transit code. After that, scan your QR code at the turnstile and the fare is charged
                automatically. It is often quicker than buying a single-use ticket, especially during rush hour.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a3a4a] mt-8 mb-3">Buses</h3>
              <p className="mb-4 leading-relaxed">
                Buses usually use the same city transit activation. Show the QR code when boarding and scan it at the door
                reader. Some cities also support NFC, but QR remains the most broadly reliable option for visitors using
                foreign cards.
              </p>

              <blockquote className="border-l-4 border-[#af5d32] pl-4 italic text-[#5d6a73] my-6">
                <p className="mb-4 leading-relaxed">
                  <strong className="font-bold text-[#1a3a4a]">Pro tip:</strong> Enable auto-translate in Alipay settings so
                  merchant names and product listings are easier to understand at a glance.
                </p>
                <p className="mb-4 leading-relaxed">
                  <strong className="font-bold text-[#1a3a4a]">Pro tip:</strong> Use Alipay mini-apps for DiDi, Meituan, and
                  12306 when possible, since that keeps your transport, delivery, and payment flow inside one familiar
                  interface.
                </p>
                <p className="mb-4 leading-relaxed">
                  <strong className="font-bold text-[#1a3a4a]">Pro tip:</strong> Save a screenshot of your payment QR code
                  before entering stations or rural areas where mobile data may be unreliable.
                </p>
                <p className="mb-0 leading-relaxed">
                  <strong className="font-bold text-[#1a3a4a]">Pro tip:</strong> Showing your QR code can still work with
                  weak signal, because the merchant can scan first and process the charge once connectivity catches up.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#ebe4d8]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#af5d32] mb-4">Related Articles</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                  <h3 className="font-serif text-lg font-semibold text-[#1a3a4a] hover:text-[#af5d32] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#5d6a73] leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ContextualCTA
            icon="🌐"
            title="Need Internet in China?"
            description="Get an eSIM before you go and stay connected the moment you land."
            buttonText="Get an eSIM →"
            buttonHref="/china-basics/how-to-get-internet/airalo-esim"
            variant="primary"
          />
        </div>
      </div>
    </div>
  )
}
