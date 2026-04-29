import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Alipay in China: Complete Setup Guide for Foreigners',
  description:
    'Step-by-step guide to setting up Alipay as a foreigner in China. Link international cards, verify identity, and pay everywhere like a local.',
}

const tocItems = [
  { id: 'payment-setup', title: 'Payment Setup' },
  { id: 'mini-apps', title: 'Mini-Apps' },
  { id: 'transit', title: 'Transit' },
]

export default function AlipayPage() {
  return (
    <div>
      <GuideArticlePage
        icon="💙"
        heroImage={{ src: 'https://picsum.photos/seed/alipay-china/800/400', alt: 'Alipay in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
          { label: 'Alipay' },
        ]}
        category="What Apps to Use"
        title="Alipay in China: Complete Setup Guide for Foreigners"
        intro="Alipay is China's most widely used payment platform, accepted by over 10 million merchants nationwide. As a foreigner, you can now link international Visa and Mastercard cards directly — making it possible to pay for almost everything without cash."
        keyTakeaway="Foreigners can now link international Visa and Mastercard directly in Alipay — no Chinese bank account needed."
        updatedAt="April 2025"
        whyYouNeedThis={[
          'Over 90% of merchants in China accept Alipay, from street food stalls to high-speed train bookings.',
          'Many smaller businesses no longer accept cash or prefer not to deal with change.',
          'Alipay mini-programs let you book hotels, order food delivery, and buy train tickets without downloading separate apps.',
          'Having Alipay set up before arrival eliminates the stress of finding ATMs or exchanging large amounts of cash.',
        ]}
        quickInfo="10M+ merchants · Visa + Mastercard support · QR payments + mini-apps"
        tocItems={tocItems}
        related={[
          { label: 'WeChat Pay', href: '/china-basics/what-apps-to-use/wechat-pay' },
          { label: 'Payment Apps', href: '/china-basics/what-apps-to-use/payment' },
          { label: 'Meituan', href: '/china-basics/what-apps-to-use/meituan' },
          { label: 'Trip.com', href: '/china-basics/what-apps-to-use/trip-com' },
        ]}
        relatedArticles={[
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
        ]}
      >
        <>
          <section aria-labelledby="payment-setup" className="border-t border-[#ebe4d8] pt-10">
            <h2 id="payment-setup" className="font-serif text-2xl font-bold text-[#1a3a4a] md:text-3xl">
              Payment Setup
            </h2>

            <ol className="mt-8 space-y-8">
              {[
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
              ].map((step, index, steps) => (
                <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4 md:gap-6">
                  <div className="relative flex justify-center">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#fcfaf6] font-serif text-lg font-bold text-[#af5d32] ring-1 ring-[#af5d32]/20">
                      {index + 1}
                    </span>
                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-10 h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-[#ebe4d8]"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">{step.title}</h3>
                    <p className="mt-2 text-base leading-8 text-[#5d6a73] md:text-lg">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="mini-apps" className="border-t border-[#ebe4d8] pt-10">
            <h2 id="mini-apps" className="font-serif text-2xl font-bold text-[#1a3a4a] md:text-3xl">
              Mini-Apps: Your Gateway to Chinese Services
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5d6a73] md:text-lg">
              Alipay is more than a payment wallet. Its mini-app ecosystem turns one familiar app into a practical control
              center for transport, deliveries, healthcare, and daily logistics across China.
            </p>
            <div className="mt-8 grid gap-0 md:grid-cols-2">
              <div className="border-t border-[#ebe4d8] bg-[#f5f1ea] px-6 py-6 md:px-8">
                <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Transit tickets</h3>
                <p className="mt-3 text-base leading-8 text-[#5d6a73] md:text-lg">
                  Buy subway, bus, and train tickets directly in Alipay. In many cities, your transit QR code becomes the only
                  ticket you need at the gate.
                </p>
              </div>
              <div className="border-t border-[#ebe4d8] bg-white px-6 py-6 md:px-8">
                <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Meituan food delivery</h3>
                <p className="mt-3 text-base leading-8 text-[#5d6a73] md:text-lg">
                  Order meals, desserts, and groceries through the Meituan mini-app without juggling a second account or a separate app download.
                </p>
              </div>
              <div className="border-t border-[#ebe4d8] bg-white px-6 py-6 md:px-8">
                <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Hospital booking</h3>
                <p className="mt-3 text-base leading-8 text-[#5d6a73] md:text-lg">
                  Many hospitals let you book appointments, pay bills, and check results inside Alipay, which is why locals rely on it for everyday healthcare tasks.
                </p>
              </div>
              <div className="border-t border-[#ebe4d8] bg-[#f5f1ea] px-6 py-6 md:px-8">
                <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Bike sharing</h3>
                <p className="mt-3 text-base leading-8 text-[#5d6a73] md:text-lg">
                  Unlock shared bikes from HelloBike and similar providers by scanning the QR code on the bike, then pay automatically through your linked card.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="transit" className="border-t border-[#ebe4d8] pt-10">
            <h2 id="transit" className="font-serif text-2xl font-bold text-[#1a3a4a] md:text-3xl">
              Transit: Using Alipay on Subway and Buses
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5d6a73] md:text-lg">
              Most major Chinese cities now integrate Alipay directly into public transport. Once activated for the city you are in,
              it becomes one of the fastest ways to move through stations and onto buses without buying separate tickets.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Subway</h3>
                <p className="mt-3 text-base leading-8 text-[#5d6a73] md:text-lg">
                  In cities such as Beijing, Shanghai, Guangzhou, and Shenzhen, open Alipay, go to Transit, select your city,
                  and activate the local transit code. After that, scan your QR code at the turnstile and the fare is charged automatically.
                  It is often quicker than buying a single-use ticket, especially during rush hour.
                </p>
              </div>

              <div className="border-t border-[#ebe4d8] pt-8">
                <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Buses</h3>
                <p className="mt-3 text-base leading-8 text-[#5d6a73] md:text-lg">
                  Buses usually use the same city transit activation. Show the QR code when boarding and scan it at the door reader.
                  Some cities also support NFC, but QR remains the most broadly reliable option for visitors using foreign cards.
                </p>
              </div>
            </div>

            <div className="mt-10 border-l-4 border-[#af5d32] bg-[#fcfaf6] py-5 pl-5 md:pl-6">
              <h2 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Pro Tips</h2>
              <ul className="mt-4 space-y-3">
                <li className="text-base leading-8 text-[#5d6a73] md:text-lg">
                  Enable auto-translate in Alipay settings so merchant names and product listings are easier to understand at a glance.
                </li>
                <li className="text-base leading-8 text-[#5d6a73] md:text-lg">
                  Use Alipay mini-apps for DiDi, Meituan, and 12306 when possible, since that keeps your transport, delivery, and payment flow inside one familiar interface.
                </li>
                <li className="text-base leading-8 text-[#5d6a73] md:text-lg">
                  Save a screenshot of your payment QR code before entering stations or rural areas where mobile data may be unreliable.
                </li>
                <li className="text-base leading-8 text-[#5d6a73] md:text-lg">
                  Remember that showing your QR code can work even with weak signal, because the merchant can scan first and process the charge once connectivity catches up.
                </li>
              </ul>
            </div>
          </section>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
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
  )
}
