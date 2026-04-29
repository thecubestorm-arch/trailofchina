import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Payment Apps in China: Why You Need Alipay & WeChat Pay | Trail of China',
  description:
    'China is essentially cashless. Learn why Alipay and WeChat Pay are essential — not just for payments, but for transit, food delivery, mini-apps, and more.',
}

const setupSteps = [
  {
    title: 'Get both Alipay and WeChat Pay',
    description:
      'They are free, and some merchants only accept one or the other. Having both means you are never stuck at a cash-only counter.',
  },
  {
    title: 'Start with Alipay for standalone functionality',
    description:
      'If you must choose one first, go with Alipay. Transit tickets, food delivery, and broader service mini-apps generally work better there.',
  },
  {
    title: 'Add WeChat Pay for social payments',
    description:
      'If you are traveling with Chinese friends or staying with locals, WeChat Pay is essential for red packets, bill splitting, and casual social transfers.',
  },
  {
    title: 'Link your international card before you arrive',
    description:
      'Both apps now support Visa and Mastercard. The name on the card must match your passport. Do this at home with stable internet.',
  },
  {
    title: 'Verify your identity with your passport',
    description:
      'Both apps may ask for passport verification. Have it ready, and give approval one to three days if the process is not instant.',
  },
  {
    title: 'Set a payment PIN and enable biometrics',
    description:
      'Create a six-digit PIN and enable Face ID or fingerprint. You will use these apps dozens of times per day once you are in China.',
  },
]

const relatedArticles = [
  {
    title: 'Alipay Setup Guide',
    description: 'Step-by-step Alipay setup for foreigners.',
    href: '/china-basics/what-apps-to-use/alipay',
  },
  {
    title: 'WeChat Pay Guide',
    description: 'Complete WeChat Pay walkthrough.',
    href: '/china-basics/what-apps-to-use/wechat-pay',
  },
  {
    title: 'How to Get Internet in China',
    description: 'eSIM, physical SIM, and Wi-Fi options for staying connected.',
    href: '/china-basics/how-to-get-internet',
  },
]

export default function PaymentAppsPage() {
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
              { label: 'Payment Apps' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="付" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Payment Apps in China: Why You Need More Than Cash
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">支付</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">95%+ mobile payment culture</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Alipay + WeChat Pay</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Foreign cards supported</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          China has gone almost entirely cashless. You can still survive with cash, but you will constantly be taking the slow
          path through a system that expects your phone to be your wallet.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/payment-china/1600/900"
            alt="Digital payment in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Street vendors, taxi drivers, convenience stores, and even temple donation boxes now expect QR-based payments.
              Cash is accepted in theory, but in practice it often slows things down or leaves staff scrambling for change.
            </p>
            <p>
              Payment apps do more than settle transactions. They unlock subway gates, bus fares, train bookings, food
              delivery, and service mini-apps. In that sense, they are infrastructure apps, not just wallets.
            </p>
            <p>
              The good news is that foreign credit cards now work with both major platforms. Setting them up before arrival is
              one of the highest-leverage prep steps you can take.
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
                {index === 3 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/payment-link-card/800/1200"
                      alt="Adding a foreign card to a payment app"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                    <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Alipay and WeChat Pay Roles</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Alipay</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Alipay is usually the better standalone travel app. It has stronger transit, delivery, and utility-style
              service integrations, so it often feels more complete for solo travelers managing practical tasks.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">WeChat Pay</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              WeChat Pay is essential for social payments, group travel, and merchants that are deeply tied to the WeChat
              ecosystem. It is also the more natural tool when money moves through chats rather than formal checkout flows.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/payment-qr-codes/1600/900"
              alt="QR code payment in China"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
            <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Carry a small backup of cash anyway. A few ¥100 notes are enough for the rare edge case where digital payment
            fails or the merchant is off the grid.
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
          icon="📱"
          title="Stay Connected in China"
          description="Get an eSIM before you land and activate your payment apps the moment you arrive."
          buttonText="Get an eSIM →"
          buttonHref="/china-basics/how-to-get-internet/airalo-esim"
          variant="primary"
        />
      </div>
    </div>
  )
}
