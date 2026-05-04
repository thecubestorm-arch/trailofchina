import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: "WeChat Pay in China: The Ultimate Foreigner's Guide",
  description:
    'How to set up WeChat Pay as a tourist in China. Link international credit cards, send hongbao, scan QR codes, and pay like 1.3 billion locals.',

  path: '/china-basics/what-apps-to-use/wechat-pay',
})

const setupSteps = [
  {
    title: 'Download WeChat and create an account',
    description:
      'Download WeChat from your app store and register with your phone number. You will need at least one contact on WeChat to verify your account. Ask a friend or use the shake feature to find nearby users.',
  },
  {
    title: 'Activate WeChat Wallet',
    description:
      'Open WeChat, then go to Me, Services, Wallet, and Add Bank Card. Select International Card and enter your Visa or Mastercard. The name on the card must exactly match your passport name.',
  },
  {
    title: 'Verify your identity',
    description:
      'WeChat requires identity verification for foreign users. Go to Me, Settings, Account Security, and Identity Verification, then upload your passport photo page. Processing usually takes one to three days but can be faster.',
  },
  {
    title: 'Set a payment PIN and enable biometrics',
    description:
      'Create a six-digit payment PIN and enable Face ID or fingerprint for faster payments. You will use this constantly in China.',
  },
  {
    title: 'Practice scanning and being scanned',
    description:
      'There are two payment modes. In Scan mode, you scan the merchant QR code. In Money mode, the merchant scans your QR code. Try both at a convenience store. Most transactions under ¥1,000 work immediately.',
  },
  {
    title: 'Learn the red packet basics',
    description:
      'Red packets, or hongbao, are a cultural tradition for sending small amounts of money in chats or during holidays. WeChat Pay makes this easy and turns a payment tool into a social one.',
  },
]

const relatedArticles = [
  {
    title: 'Alipay Guide',
    description: 'Set up Alipay as your backup payment method.',
    href: '/china-basics/what-apps-to-use/alipay',
  },
  {
    title: 'Payment Apps Overview',
    description: 'Why you need both payment apps in China.',
    href: '/china-basics/what-apps-to-use/payment',
  },
  {
    title: 'Didi Guide',
    description: 'Pay for rides with WeChat Pay via Didi.',
    href: '/china-basics/what-apps-to-use/didi',
  },
]

export default function WeChatPayPage() {
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
              { label: 'WeChat Pay' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="微" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            WeChat Pay in China: The Ultimate Foreigner&apos;s Guide
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">微信支付</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">1.3B+ users</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Visa + Mastercard</span>
          <span className="text-[var(--muted)]">·</span>
          <span>QR payments + mini-programs</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          WeChat Pay is built into China&apos;s most essential app. For many visitors, it is both a wallet and the social layer
          that unlocks chats, bookings, ride-hailing, and day-to-day coordination.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/wechat-pay-china/1600/900"
            alt="WeChat Pay in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              WeChat is China&apos;s everything app. Messaging, social media, payments, ride-hailing, and mini-programs all sit
              inside one interface, so setting up WeChat Pay gives you more than a second wallet.
            </p>
            <p>
              Some merchants and services only accept WeChat Pay, especially in smaller cities. It also handles person-to-person
              transfers, bill splitting, and hongbao in a way Alipay does not.
            </p>
            <p>
              Mini-programs inside WeChat cover hotel bookings, food delivery, museum tickets, customer support, and other
              services that often assume WeChat Pay is already active.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Step-by-Step Setup</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="leading-relaxed">
                <p>
                  <strong>{step.title}.</strong> {step.description}
                </p>
                {index === 1 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/wechat-wallet-card/800/1200"
                      alt="WeChat Pay wallet setup screen"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/wechat-passport-verification/800/1200"
                      alt="WeChat identity verification screen"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
                {index === 4 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/wechat-qr-payment/800/1200"
                      alt="WeChat QR payment mode"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How It Fits Daily Travel</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Merchant payments</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              WeChat Pay works for convenience stores, restaurants, taxis, cafes, and smaller neighborhood businesses. In some
              places it is the only digital payment option the staff expects you to use.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Social payments</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              If you are traveling with Chinese friends, staying with locals, or joining group meals, WeChat Pay is usually
              how money moves. Splitting bills and sending small repayments is far smoother inside WeChat than outside it.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Mini-programs</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Mini-programs are the reason many travelers keep reaching for WeChat. You can order DiDi rides, book hotels,
              buy train tickets, and access service flows without leaving the app, but payment often depends on WeChat Pay
              already being live.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Screenshot your WeChat Pay QR code before going into weak-signal areas. Merchants can still scan it even if your
            own connection is unstable.
          </blockquote>
        </section>

        <section className="border-t border-[#ebe4d8] pt-8">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Related Articles</h2>
          <div className="divide-y divide-[#ebe4d8]">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href} className="block py-4 transition-opacity hover:opacity-80">
                <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">{article.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="💳"
          title="Also Set Up Alipay"
          description="Some merchants only accept Alipay. Having both means you are never stuck."
          buttonText="Alipay Setup Guide →"
          buttonHref="/china-basics/what-apps-to-use/alipay"
          variant="secondary"
        />
      </div>
    </div>
  )
}
