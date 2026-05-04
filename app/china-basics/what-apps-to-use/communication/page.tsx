import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Communication App: WeChat',
  description:
    'Set up WeChat for messaging, service mini-programs, and travel coordination in China.',

  path: '/china-basics/what-apps-to-use/communication',
})

const setupSteps = [
  {
    title: 'Register your account before departure',
    description:
      'Complete phone verification while your home SIM is active. Recovery is easier when setup is done before travel day.',
  },
  {
    title: 'Set profile and privacy controls',
    description:
      'Add a recognizable photo and name, then review privacy settings so only intended contacts can view your moments and details.',
  },
  {
    title: 'Enable translation and backup options',
    description:
      'Turn on translation tools and ensure chat backup settings are active so critical booking messages are not lost.',
  },
  {
    title: 'Practice sharing location and contacts',
    description:
      'Learn how to share live location and hotel contacts to simplify meetup and emergency coordination.',
  },
]

const relatedArticles = [
  {
    title: 'WeChat Pay Guide',
    description: 'Set up WeChat Pay for payments, mini programs, and P2P transfers.',
    href: '/china-basics/what-apps-to-use/wechat-pay',
  },
  {
    title: 'Payment Apps Overview',
    description: 'Why you need Alipay and WeChat Pay in cashless China.',
    href: '/china-basics/what-apps-to-use/payment',
  },
]

export default function CommunicationAppsPage() {
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
              { label: 'Communication' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="信" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Communication App: WeChat
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">微信</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Messaging + mini-programs</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Location sharing</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Useful for hotels and guides</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          In China, WeChat is often the channel through which practical travel actually happens. Hotels, guides, drivers, and
          service staff frequently prefer it over email or SMS.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-communication/1600/900"
            alt="Communication apps in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Most local businesses prefer WeChat for quick support, confirmations, and follow-up questions. If a hotel needs
              to send check-in details or a guide wants to pin a meeting point, WeChat is often the assumed channel.
            </p>
            <p>
              Mini-programs inside WeChat can surface queue numbers, service notifications, and tickets without forcing you
              onto separate platforms. That matters because China&apos;s service stack is often bundled into WeChat by default.
            </p>
            <p>
              Voice notes, built-in translation tools, and live location sharing make real-time coordination much easier than
              relying on email or international messaging apps that may be blocked or ignored.
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
                {index === 2 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/wechat-translation/800/1200"
                      alt="WeChat translation and backup settings"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How Travelers Use It</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Business and service chats</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Hotels, tour operators, local contacts, and small businesses often coordinate changes, send payment prompts, and
              answer questions inside WeChat. You do not need to love the app to benefit from having it ready.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Translation and voice</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Voice notes can be faster than typed translation when you are moving, and in-app translation helps unpack the
              short Chinese messages you will inevitably receive from drivers, hosts, and ticketing contacts.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Pin your key chats at the top: hotel, driver, guide, and any local emergency contact. It saves time when you are
            rushing through a station or trying to solve a problem quickly.
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
          icon="🌐"
          title="Need Internet in China?"
          description="Get an eSIM before you go and stay connected the moment you land."
          buttonText="Get an eSIM →"
          buttonHref="/china-basics/how-to-get-internet/airalo-esim"
          variant="secondary"
        />
      </div>
    </div>
  )
}
