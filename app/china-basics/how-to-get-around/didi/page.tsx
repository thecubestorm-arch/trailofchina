import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'DiDi Ride-Hailing in China | Trail of China',
  description:
    "Complete guide to using DiDi, China's Uber equivalent. Setup, payment, car types, and safety tips for foreign travelers.",
};

export default function DidiPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚕"
        heroImage={{ src: 'https://picsum.photos/seed/didi-ride-hailing-china/800/400', alt: 'DiDi Ride-Hailing in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Didi' },
        ]}
        category="How to Get Around"
        title="DiDi Ride-Hailing"
        intro="DiDi is China's Uber — essential for getting around cities conveniently. It's cheaper than taxis, eliminates language barriers, and works in every major city."
        setupSteps={[
          { title: 'Download DiDi', description: 'Available on App Store/Google Play' },
          { title: 'Register', description: 'Use foreign phone number + verification code' },
          { title: 'Link payment', description: 'International credit cards now accepted' },
          { title: 'Set up profile', description: 'Add photo for driver identification' },
        ]}
        proTips={[
          'Take screenshot of driver info before ride',
          'Share trip with friends via app feature',
          'Rate drivers honestly — it matters',
          'Pin your location accurately on map',
          'Learn "I am here" in Chinese: "Wǒ zài zhèlǐ" (我在这里)',
        ]}
        related={[
          { label: 'Taxi Guide', href: '/china-basics/how-to-get-around/taxi' },
          { label: 'Didi App Guide', href: '/china-basics/what-apps-to-use/didi' },
        ]}
        relatedArticles={[
          { title: 'Taxi Guide', description: 'Traditional taxi tips and getting around.', href: '/china-basics/how-to-get-around/taxi' },
          { title: 'Didi App Guide', description: 'Set up the Didi app for ride-hailing.', href: '/china-basics/what-apps-to-use/didi' },
        ]}
        tocItems={[
          { id: 'how-to-use', title: 'How to Use' },
          { id: 'car-types', title: 'Car Types' },
          { id: 'safety', title: 'Safety First' },
        ]}
      >
        {/* How to Use */}
        <div id="how-to-use" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Use</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Enter destination (English works in major cities)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Select car type: Express (快车) is cheapest</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Wait for driver assignment (usually under 2 minutes)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Check license plate before getting in</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Payment is automatic after ride</li>
          </ul>
        </div>

        {/* Car Types */}
        <div id="car-types" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Car Types</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Express (快车):</strong> Standard private cars, cheapest</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Premier (专车):</strong> Higher-end cars, professional drivers</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Taxi (出租车):</strong> Traditional taxis via app</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Six-seater (六座):</strong> For groups or lots of luggage</li>
          </ul>
        </div>

        {/* Safety */}
        <div id="safety" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Safety First</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Always check license plate matches app</li>
            <li className="text-sm leading-relaxed md:text-base">• Sit in back seat, not front</li>
            <li className="text-sm leading-relaxed md:text-base">• Share your trip with someone</li>
            <li className="text-sm leading-relaxed md:text-base">• Use official DiDi app only (no clones)</li>
            <li className="text-sm leading-relaxed md:text-base">• Emergency button in app if needed</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}