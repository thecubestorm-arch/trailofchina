import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Alipay in China: Complete Setup Guide for Foreigners',
  description:
    'Step-by-step guide to setting up Alipay as a foreigner in China. Link international cards, verify identity, and pay everywhere like a local.',
}

export default function AlipayPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Overview Section */}
      <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-china-red">What Apps to Use</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Alipay in China: Complete Setup Guide for Foreigners
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          Alipay is China's most widely used payment platform, accepted by over 10 million merchants nationwide. 
          As a foreigner, you can now link international Visa and Mastercard cards directly — making it possible to 
          pay for almost everything without cash.
        </p>
      </section>

      {/* Payment Setup Section with Anchor */}
      <section id="payment" className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Payment Setup</h2>
        <div className="card-base">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Why you need this</h3>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Over 90% of merchants in China accept Alipay, from street food stalls to high-speed train bookings.</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Many smaller businesses no longer accept cash or prefer not to deal with change.</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Alipay mini-programs let you book hotels, order food delivery, and buy train tickets without downloading separate apps.</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Having Alipay set up before arrival eliminates the stress of finding ATMs or exchanging large amounts of cash.</li>
          </ul>
        </div>
        <div className="mt-8 card-base">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Step-by-step setup guide</h3>
          <ol className="mt-5 space-y-4">
            <li key="download" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 1</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Download & Install</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Download Alipay from your app store (iOS App Store or Google Play). On first launch, switch the language 
                to English in Settings (Me → Settings → General → Language). The English interface covers all essential functions.
              </p>
            </li>
            <li key="card" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 2</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Link Foreign Visa/Mastercard</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Go to Me → Bank Cards → Add Card. Select "International Card" and enter your Visa or Mastercard details. 
                The name must match your passport exactly. Alipay now supports foreign cards through a partnership with Adyen, 
                though a small 3% surcharge may apply on transactions over ¥200.
              </p>
            </li>
            <li key="verification" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 3</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Identity Verification (Passport)</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Go to Me → Identity Verification and upload photos of your passport. This is required for payments above ¥1,000 
                and for features like ride-hailing. Verification typically takes 1-3 business days but can be instant for some passports.
              </p>
            </li>
            <li key="first-payment" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 4</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">First Payment (QR Scan)</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Try buying a bottle of water at a convenience store (FamilyMart, 7-Eleven, Lawson). Open Alipay, tap Scan, 
                and point your camera at the merchant QR code. The payment should process in seconds.
              </p>
            </li>
            <li key="issues" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 5</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Common Issues & Fixes</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                If your card gets declined, try a different card or use the "Tour Pass" feature which lets you preload 
                a balance from your credit card. If verification stalls, email support@alipay.com with your passport details. 
                Alipay support is generally responsive to foreign users.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Mini-Apps Section */}
      <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Mini-Apps — Your Gateway to Chinese Services</h2>
        <p className="text-lg text-slate-700 mb-6">
          Alipay is more than just payments — it houses hundreds of mini-apps (小程序) that turn it into a gateway for hundreds of services:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
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
      </section>

      {/* Transit Section */}
      <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Transit — Using Alipay on Subway and Buses</h2>
        <p className="text-lg text-slate-700 mb-6">
          Most major Chinese cities have integrated Alipay into their public transit systems. Here's how it works:
        </p>
        <div className="card-base rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Subway</h3>
          <p className="text-slate-700 mb-4">
            In cities like Beijing, Shanghai, Guangzhou, and Shenzhen, you can activate transit in Alipay: 
            Open Alipay → Transit → Select City → Activate. Once activated, simply scan your QR code at the turnstile — 
            payment is automatic and often faster than buying tickets.
          </p>
        </div>
        <div className="card-base rounded-xl p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Buses</h3>
          <p className="text-slate-700 mb-4">
            For buses, the process is similar — activate transit in Alipay for your city, then scan the QR code at the bus door. 
            Some cities also support NFC tapping with your phone, but QR scanning works everywhere.
          </p>
        </div>
      </section>

      {/* Pro Tips Section */}
      <div className="container-px mx-auto max-w-4xl py-12 md:py-16 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Pro Tips</h2>
        <ul className="mt-3 space-y-2">
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Enable "Auto-Translate" in Alipay settings to auto-translate merchant names and product descriptions.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Use Alipay mini-programs for DiDi (ride-hailing), Meituan (food delivery), and 12306 (train tickets) — all in English inside Alipay.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Take a screenshot of your payment QR code before entering areas with poor signal (subway stations, rural areas).</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Alipay works offline for showing your QR code — the merchant scans it and payment processes when signal returns.</li>
        </ul>
      </div>

      {/* Scam Alerts Section */}
      <div className="container-px mx-auto max-w-4xl py-12 md:py-16 rounded-2xl border border-[var(--accent-soft)] bg-[var(--accent-soft)] p-6">
        <h2 className="text-2xl font-black text-slate-900">Scam Alerts</h2>
        <ul className="mt-3 space-y-2">
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Only scan QR codes displayed at official merchant counters. Never scan codes from strangers or printed on flyers.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• If someone asks you to transfer money via Alipay to "help" them, decline — this is a common tourist scam.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Do not share your payment QR code screenshot with anyone; it can be used to initiate unwanted charges.</li>
        </ul>
      </div>

      {/* Related Pages Section */}
      <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <h2 className="text-2xl font-extrabold text-slate-900">Related pages</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/china-basics/what-apps-to-use/wechat-pay#payment" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-china-red hover:text-china-red">
            WeChat Pay Guide
          </a>
          <a href="/china-basics/what-apps-to-use/payment" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-china-red hover:text-china-red">
            Payment Apps Overview
          </a>
          <a href="/china-basics/how-to-get-internet" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-china-red hover:text-china-red">
            Internet Setup
          </a>
          <a href="/china-basics/what-apps-to-use" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-china-red hover:text-china-red">
            Apps Overview
          </a>
        </div>
      </section>
    </div>
  )
}
