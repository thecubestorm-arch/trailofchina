import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Domestic Flights in China | Trail of China',
  description:
    'Guide to booking and flying domestic flights in China. Airlines, airports, booking tips, and what to expect at security checks.',
}

export default function PlanePage() {
  return (
    <div>
      <GuideArticlePage
        icon="✈️"
        heroImage={{ src: 'https://picsum.photos/seed/china-domestic-flights/800/400', alt: 'Domestic flights in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Plane' },
        ]}
        category="How to Get Around"
        title="Domestic Flights"
        intro="For long distances or remote destinations like Tibet and Xinjiang, domestic flights are often the best option. China's airline network is extensive and flights are frequently cheaper than high-speed trains."
        whyYouNeedThis={[
          'For long distances, domestic flights are often the best option',
          'Flights are useful for remote destinations like Tibet and Xinjiang',
          "China's airline network is extensive",
          'Flights are frequently cheaper than high-speed trains',
        ]}
        proTips={[
          'Book 2-3 weeks ahead for best prices',
          'Tuesday/Wednesday flights are usually cheaper',
          'Consider bullet trains for routes under 4 hours',
          'Join airline loyalty programs for lounge access',
          'Shanghai-Beijing flight is only worth it if you live far from train stations',
        ]}
        quickInfo="Best for long distances · Arrive 2 hours early · Delays are common"
        tocItems={[
          { id: 'major-airlines', title: 'Major Airlines' },
          { id: 'how-to-book', title: 'How to Book' },
          { id: 'at-the-airport', title: 'At the Airport' },
          { id: 'common-issues', title: 'Common Issues' },
        ]}
        relatedArticles={[
          {
            title: 'Train Travel',
            description: 'Often faster and more convenient than flights.',
            href: '/china-basics/how-to-get-around/train',
          },
          {
            title: 'How to Get Around',
            description: 'All transportation options in China.',
            href: '/china-basics/how-to-get-around',
          },
        ]}
      >
        <section id="major-airlines" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Major Airlines</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li><strong>Air China:</strong> Flag carrier, extensive network, good service</li>
            <li><strong>China Eastern:</strong> Based in Shanghai, competitive prices</li>
            <li><strong>China Southern:</strong> Largest fleet, good for southern routes</li>
            <li><strong>Hainan Airlines:</strong> Premium service, often rated best in China</li>
            <li><strong>Spring Airlines:</strong> Budget option, basic but cheap</li>
          </ul>
        </section>

        <section id="how-to-book" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Book</h2>
          <ol className="list-decimal space-y-3 pl-6 text-slate-700">
            <li><strong>Trip.com:</strong> English interface, foreigner-friendly</li>
            <li><strong>Ctrip:</strong> Chinese app with better prices (need Chinese skills)</li>
            <li><strong>Airline websites:</strong> Direct booking often cheapest</li>
            <li><strong>Travel agents:</strong> For complex itineraries</li>
          </ol>
        </section>

        <section id="at-the-airport" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">At the Airport</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Arrive 2 hours early for domestic flights</li>
            <li>Security is strict - similar to international</li>
            <li>Power banks must be carried on, not checked</li>
            <li>Keep passport handy for multiple checks</li>
            <li>Delays are common - download airline app for updates</li>
          </ul>
        </section>

        <section id="common-issues" className="rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-6">
          <h2 className="text-2xl font-extrabold text-[var(--accent-strong)]">Common Issues</h2>
          <ul className="mt-4 space-y-2 text-[var(--foreground)]">
            <li>• Weather delays in winter (smog/fog) and summer (storms)</li>
            <li>• Chinese airlines rarely announce delays in English</li>
            <li>• Airport food is overpriced - eat before you go</li>
            <li>• Some smaller airports are far from city centers</li>
          </ul>
        </section>
      </GuideArticlePage>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="🚄"
          title="Compare Flights With Trains"
          description="For many routes, high-speed rail is more convenient once you factor in airport transfers, security, and delays."
          buttonText="Train Travel Guide →"
          buttonHref="/china-basics/how-to-get-around/train"
          variant="secondary"
        />
      </div>
    </div>
  )
}
