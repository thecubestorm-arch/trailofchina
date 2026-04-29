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
          <div>
            <h2 id="payment-setup" className="text-2xl font-extrabold text-slate-900">Payment Setup</h2>

            <div className="mt-6 card-base">
              <h3 className="text-2xl font-extrabold text-slate-900">Step-by-step setup guide</h3>
              <ol className="mt-5 space-y-4">
                <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 1</p>
                  <h4 className="mt-1 text-lg font-extrabold text-slate-900">Download &amp; Install</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                    Download Alipay from your app store (iOS App Store or Google Play). On first launch, switch the language
                    to English in Settings (Me → Settings → General → Language). The English interface covers all essential functions.
                  </p>
                </li>
                <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 2</p>
                  <h4 className="mt-1 text-lg font-extrabold text-slate-900">Link Foreign Visa/Mastercard</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                    Go to Me → Bank Cards → Add Card. Select &quot;International Card&quot; and enter your Visa or Mastercard details.
                    The name must match your passport exactly. Alipay now supports foreign cards through a partnership with Adyen,
                    though a small 3% surcharge may apply on transactions over ¥200.
                  </p>
                </li>
                <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 3</p>
                  <h4 className="mt-1 text-lg font-extrabold text-slate-900">Identity Verification (Passport)</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                    Go to Me → Identity Verification and upload photos of your passport. This is required for payments above ¥1,000
                    and for features like ride-hailing. Verification typically takes 1-3 business days but can be instant for some passports.
                  </p>
                </li>
                <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 4</p>
                  <h4 className="mt-1 text-lg font-extrabold text-slate-900">First Payment (QR Scan)</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                    Try buying a bottle of water at a convenience store (FamilyMart, 7-Eleven, Lawson). Open Alipay, tap Scan,
                    and point your camera at the merchant QR code. The payment should process in seconds.
                  </p>
                </li>
                <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 5</p>
                  <h4 className="mt-1 text-lg font-extrabold text-slate-900">Common Issues &amp; Fixes</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                    If your card gets declined, try a different card or use the &quot;Tour Pass&quot; feature which lets you preload
                    a balance from your credit card. If verification stalls, email support@alipay.com with your passport details.
                    Alipay support is generally responsive to foreign users.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <h2 id="mini-apps" className="text-2xl font-extrabold text-slate-900">Mini-Apps — Your Gateway to Chinese Services</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Alipay is more than just payments — it houses hundreds of mini-apps (小程序) that turn it into a gateway for hundreds of services:
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="card-base rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transit Tickets</h3>
                <p className="text-slate-700">Buy subway, bus, and train tickets directly in Alipay. Many cities now scan QR codes at turnstiles — no separate ticket needed.</p>
              </div>
              <div className="card-base rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Meituan Food Delivery</h3>
                <p className="text-slate-700">Order from 100,000+ restaurants via the Meituan mini-app inside Alipay. Includes meals, desserts, and groceries.</p>
              </div>
              <div className="card-base rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hospital Booking</h3>
                <p className="text-slate-700">Book doctor appointments, pay medical bills, and check lab results — widely used by locals for daily healthcare.</p>
              </div>
              <div className="card-base rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bike Sharing</h3>
                <p className="text-slate-700">Unlock shared bikes from HelloBike and other providers. Scan the QR on the bike to start your ride.</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 id="transit" className="text-2xl font-extrabold text-slate-900">Transit — Using Alipay on Subway and Buses</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Most major Chinese cities have integrated Alipay into their public transit systems. Here&apos;s how it works:
            </p>
            <div className="mt-6 card-base rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Subway</h3>
              <p className="text-slate-700">
                In cities like Beijing, Shanghai, Guangzhou, and Shenzhen, you can activate transit in Alipay:
                Open Alipay → Transit → Select City → Activate. Once activated, simply scan your QR code at the turnstile —
                payment is automatic and often faster than buying tickets.
              </p>
            </div>
            <div className="mt-6 card-base rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Buses</h3>
              <p className="text-slate-700">
                For buses, the process is similar — activate transit in Alipay for your city, then scan the QR code at the bus door.
                Some cities also support NFC tapping with your phone, but QR scanning works everywhere.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-black text-slate-900">Pro Tips</h2>
              <ul className="mt-3 space-y-2">
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Enable &quot;Auto-Translate&quot; in Alipay settings to auto-translate merchant names and product descriptions.</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Use Alipay mini-programs for DiDi (ride-hailing), Meituan (food delivery), and 12306 (train tickets) — all in English inside Alipay.</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Take a screenshot of your payment QR code before entering areas with poor signal (subway stations, rural areas).</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Alipay works offline for showing your QR code — the merchant scans it and payment processes when signal returns.</li>
              </ul>
            </div>
          </div>
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
