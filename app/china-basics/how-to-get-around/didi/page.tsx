import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'DiDi Ride-Hailing in China | Trail of China',
  description:
    "Complete guide to using DiDi, China's Uber equivalent. Setup, payment, car types, and safety tips for foreign travelers.",
}

const tocItems = [
  { id: 'app-setup', title: 'App Setup' },
  { id: 'how-to-use', title: 'How to Use' },
  { id: 'car-types', title: 'Car Types' },
  { id: 'pro-tips', title: 'Pro Tips' },
  { id: 'safety-first', title: 'Safety First' },
]

const quickInfoPills = [
  'Usually under 2 minutes to match',
  'Express is the cheapest option',
  'Foreign cards now accepted',
]

export default function DidiPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚕"
        heroImage={{ src: 'https://picsum.photos/seed/china-didi-transport/800/400', alt: 'Didi ride-hailing in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Didi' },
        ]}
        category="How to Get Around"
        title="DiDi Ride-Hailing"
        intro="DiDi is China's Uber - essential for getting around cities conveniently. It's cheaper than taxis, eliminates language barriers, and works in every major city."
        whyYouNeedThis={[
          'DiDi is the default ride-hailing option in major Chinese cities and is often easier than flagging taxis.',
          'The app removes a lot of the language friction by handling pickup, destination, and payment inside the platform.',
          'It is typically cheaper and more predictable than traditional taxis, especially for travelers unfamiliar with local routes.',
          'Knowing the car types and safety basics makes city travel much smoother, especially on arrival day.',
        ]}
        relatedArticles={[
          {
            title: 'Taxi Guide',
            description: 'Traditional taxi tips and getting around.',
            href: '/china-basics/how-to-get-around/taxi',
          },
          {
            title: 'Didi App Guide',
            description: 'Set up the Didi app for ride-hailing.',
            href: '/china-basics/what-apps-to-use/didi',
          },
        ]}
        tocItems={tocItems}
      >
        <>
          <div className="flex flex-wrap gap-3">
            {quickInfoPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {pill}
              </span>
            ))}
          </div>

          <div>
            <h2 id="app-setup" className="text-2xl font-extrabold text-slate-900">
              App Setup
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Download DiDi:</strong> Available on App Store/Google Play</li>
              <li><strong>Register:</strong> Use foreign phone number + verification code</li>
              <li><strong>Link payment:</strong> International credit cards now accepted</li>
              <li><strong>Set up profile:</strong> Add photo for driver identification</li>
            </ol>
          </div>

          <div>
            <h2 id="how-to-use" className="text-2xl font-extrabold text-slate-900">
              How to Use
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Enter destination (English works in major cities)</li>
              <li>Select car type: Express (快车) is cheapest</li>
              <li>Wait for driver assignment (usually under 2 minutes)</li>
              <li>Check license plate before getting in</li>
              <li>Payment is automatic after ride</li>
            </ul>
          </div>

          <div>
            <h2 id="car-types" className="text-2xl font-extrabold text-slate-900">
              Car Types
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Express (快车):</strong> Standard private cars, cheapest</li>
              <li><strong>Premier (专车):</strong> Higher-end cars, professional drivers</li>
              <li><strong>Taxi (出租车):</strong> Traditional taxis via app</li>
              <li><strong>Six-seater (六座):</strong> For groups or lots of luggage</li>
            </ul>
          </div>

          <div id="pro-tips" className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-2xl font-extrabold text-amber-900">Pro Tips</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-amber-950 md:text-base">
              <li>Take screenshot of driver info before ride</li>
              <li>Share trip with friends via app feature</li>
              <li>Rate drivers honestly - it matters</li>
              <li>Pin your location accurately on map</li>
              <li>Learn &quot;I am here&quot; in Chinese: &quot;Wǒ zài zhèlǐ&quot; (我在这里)</li>
            </ul>
          </div>

          <div id="safety-first" className="rounded-2xl border border-[#ebe4d8] bg-[#faf8f4] p-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Safety First</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Always check license plate matches app</li>
              <li>Sit in back seat, not front</li>
              <li>Share your trip with someone</li>
              <li>Use official DiDi app only (no clones)</li>
              <li>Emergency button in app if needed</li>
            </ul>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="📱"
          title="Set Up the App Before You Need It"
          description="The transport guide explains how to use Didi, but the app guide covers payments and setup in more detail."
          buttonText="Open the Didi App Guide →"
          buttonHref="/china-basics/what-apps-to-use/didi"
          variant="secondary"
        />
      </div>
    </div>
  )
}
