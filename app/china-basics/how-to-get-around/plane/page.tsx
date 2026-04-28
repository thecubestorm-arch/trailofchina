import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'Domestic Flights in China | Trail of China',
  description:
    'Guide to booking and flying domestic flights in China. Airlines, airports, booking tips, and what to expect at security checks.',
};

export default function PlanePage() {
  return (
    <div>
      <GuideArticlePage
        icon="✈️"
        heroImage={{ src: 'https://picsum.photos/seed/china-domestic-flight/800/400', alt: 'Domestic Flights in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Plane' },
        ]}
        category="How to Get Around"
        title="Domestic Flights"
        intro="For long distances or remote destinations like Tibet and Xinjiang, domestic flights are often the best option. China's airline network is extensive and flights are frequently cheaper than high-speed trains."
        proTips={[
          'Book 2-3 weeks ahead for best prices',
          'Tuesday/Wednesday flights are usually cheaper',
          'Consider bullet trains for routes under 4 hours',
          'Join airline loyalty programs for lounge access',
          'Shanghai-Beijing flight is only worth it if you live far from train stations',
        ]}
        related={[
          { label: 'Train Travel', href: '/china-basics/how-to-get-around/train' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          { title: 'Train Travel', description: 'Often faster and more convenient than flights.', href: '/china-basics/how-to-get-around/train' },
          { title: 'How to Get Around', description: 'All transportation options in China.', href: '/china-basics/how-to-get-around' },
        ]}
        tocItems={[
          { id: 'major-airlines', title: 'Major Airlines' },
          { id: 'how-to-book', title: 'How to Book' },
          { id: 'at-the-airport', title: 'At the Airport' },
          { id: 'common-issues', title: 'Common Issues' },
        ]}
      >
        {/* Major Airlines */}
        <div id="major-airlines" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Major Airlines</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Air China:</strong> Flag carrier, extensive network, good service</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>China Eastern:</strong> Based in Shanghai, competitive prices</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>China Southern:</strong> Largest fleet, good for southern routes</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Hainan Airlines:</strong> Premium service, often rated best in China</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Spring Airlines:</strong> Budget option, basic but cheap</li>
          </ul>
        </div>

        {/* How to Book */}
        <div id="how-to-book" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Book</h2>
          <ol className="mt-4 space-y-2 list-decimal pl-5">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Trip.com:</strong> English interface, foreigner-friendly</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Ctrip:</strong> Chinese app with better prices (need Chinese skills)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Airline websites:</strong> Direct booking often cheapest</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Travel agents:</strong> For complex itineraries</li>
          </ol>
        </div>

        {/* At the Airport */}
        <div id="at-the-airport" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">At the Airport</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Arrive 2 hours early for domestic flights</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Security is strict — similar to international</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Power banks must be carried on, not checked</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Keep passport handy for multiple checks</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Delays are common — download airline app for updates</li>
          </ul>
        </div>

        {/* Common Issues */}
        <div id="common-issues" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Common Issues</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Weather delays in winter (smog/fog) and summer (storms)</li>
            <li className="text-sm leading-relaxed md:text-base">• Chinese airlines rarely announce delays in English</li>
            <li className="text-sm leading-relaxed md:text-base">• Airport food is overpriced — eat before you go</li>
            <li className="text-sm leading-relaxed md:text-base">• Some smaller airports are far from city centers</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}