import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Shared Bikes in China | Trail of China',
  description: 'Guide to using shared bicycles in Chinese cities. Mobike, HelloBike, and tips.',
}

const tocItems = [
  { id: 'major-bike-brands', title: 'Major Bike Brands' },
  { id: 'how-to-use', title: 'How to Use' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'pro-tips', title: 'Pro Tips' },
  { id: 'safety-first', title: 'Safety First' },
]

const quickInfoPills = [
  'Usually ¥1.5-2 for 30 minutes',
  'Best for 1-3km trips',
  'Check tires and brakes first',
]

export default function BicyclePage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚲"
        heroImage={{ src: 'https://picsum.photos/seed/china-shared-bikes/800/400', alt: 'Shared bicycles in a Chinese city' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Bicycle' },
        ]}
        category="How to Get Around"
        title="Shared Bicycles"
        intro="Shared bikes are everywhere in Chinese cities. They're cheap, convenient for short trips, and a fun way to explore neighborhoods at your own pace."
        whyYouNeedThis={[
          "Shared bikes are one of the cheapest and fastest ways to cover short urban trips in China.",
          'They are ideal for exploring neighborhoods at your own pace instead of staying on fixed transit routes.',
          'You can unlock them directly through major apps or payment platforms without dealing with language-heavy taxi interactions.',
          'They are especially useful for areas like hutongs and side streets where cars and metro are less convenient.',
        ]}
        related={[
          { label: 'Metro & Subway', href: '/china-basics/how-to-get-around/metro-subway' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          {
            title: 'Metro & Subway',
            description: 'City subway systems across China.',
            href: '/china-basics/how-to-get-around/metro-subway',
          },
          {
            title: 'How to Get Around',
            description: 'All transportation options in China.',
            href: '/china-basics/how-to-get-around',
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
            <h2 id="major-bike-brands" className="text-2xl font-extrabold text-slate-900">
              Major Bike Brands
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Meituan (美团):</strong> Yellow bikes, most common, app required</li>
              <li><strong>HelloBike (哈啰):</strong> Blue bikes, Alipay integration</li>
              <li><strong>DiDi Bike:</strong> Green bikes, DiDi app</li>
            </ul>
          </div>

          <div>
            <h2 id="how-to-use" className="text-2xl font-extrabold text-slate-900">
              How to Use
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>1. Download bike app or use within Alipay/WeChat</li>
              <li>2. Scan QR code on bike to unlock</li>
              <li>3. Ride to destination</li>
              <li>4. Park in designated area and lock manually</li>
              <li>5. Payment automatic from linked account</li>
            </ol>
          </div>

          <div>
            <h2 id="pricing" className="text-2xl font-extrabold text-slate-900">
              Pricing
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Usually ¥1.5-2 for 30 minutes</li>
              <li>Monthly passes available (¥10-20)</li>
              <li>Deposit usually required (refundable)</li>
              <li>Overage fees for long rides</li>
            </ul>
          </div>

          <div id="pro-tips" className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-2xl font-extrabold text-amber-900">Pro Tips</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-amber-950 md:text-base">
              <li>Check bike condition before unlocking (tires, brakes)</li>
              <li>Use bikes for distances 1-3km</li>
              <li>Great for exploring hutongs (old neighborhoods)</li>
              <li>Avoid during rush hour - dangerous traffic</li>
              <li>Download multiple apps - not all bikes work with one</li>
            </ul>
          </div>

          <div id="safety-first" className="rounded-2xl border border-[#ebe4d8] bg-[#faf8f4] p-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Safety First</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Traffic is chaotic - ride defensively</li>
              <li>Stay in bike lanes where available</li>
              <li>No helmets provided - ride carefully</li>
              <li>Watch for cars turning right on red</li>
              <li>Don&apos;t ride on sidewalks (technically illegal)</li>
            </ul>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🚇"
          title="Need a Longer-Distance Option?"
          description="Bikes are great for short hops, but metro systems are the backbone of city travel in China."
          buttonText="Read the Metro Guide →"
          buttonHref="/china-basics/how-to-get-around/metro-subway"
          variant="secondary"
        />
      </div>
    </div>
  )
}
