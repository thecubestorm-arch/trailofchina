import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'Car Rental in China | Trail of China',
  description: 'Guide to renting a car in China. Requirements, rental companies, and driving tips.',
};

export default function CarPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚗"
        heroImage={{ src: 'https://picsum.photos/seed/china-car-rental/800/400', alt: 'Car Rental in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Car' },
        ]}
        category="How to Get Around"
        title="Car Rental"
        intro="Renting a car gives maximum flexibility but is challenging in China. Most travelers prefer trains and ride-hailing, but cars are useful for remote areas."
        whyYouNeedThis={[
          'Essential for exploring rural areas (Guilin, Yunnan, Tibet) where public transit is limited',
          'More convenient when traveling with family or large groups',
          'Useful for visiting multiple small villages in one day',
          'Generally avoid if staying mainly in big cities — traffic and parking are challenging',
        ]}
        proTips={[
          'Exploring rural areas (Guilin, Yunnan, Tibet)',
          'Traveling with family (more convenient)',
          'Visiting multiple small villages',
          'Avoid if staying mainly in big cities',
        ]}
        related={[
          { label: 'Didi Ride-Hailing', href: '/china-basics/how-to-get-around/didi' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          { title: 'Didi Ride-Hailing', description: 'Skip self-driving and let Didi handle it.', href: '/china-basics/how-to-get-around/didi' },
          { title: 'How to Get Around', description: 'All transportation options in China.', href: '/china-basics/how-to-get-around' },
        ]}
        tocItems={[
          { id: 'requirements', title: 'Requirements' },
          { id: 'rental-companies', title: 'Rental Companies' },
          { id: 'driving-in-china', title: 'Driving in China' },
          { id: 'costs', title: 'Costs' },
          { id: 'consider-carefully', title: 'Consider Carefully' },
        ]}
      >
        {/* Requirements */}
        <div id="requirements" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Requirements</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Valid foreign license</strong> plus official translation</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>OR Chinese driver's license</strong> (difficult to obtain)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Passport</strong> for registration</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Credit card</strong> for deposit</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Age:</strong> Usually 21-25+ depending on company</li>
          </ul>
        </div>

        {/* Rental Companies */}
        <div id="rental-companies" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Rental Companies</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Avis, Hertz, Enterprise:</strong> International chains, airport locations</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>eHi (一嗨租车):</strong> Major local company, English website</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Shouqi (首汽租车):</strong> Government-backed, reliable</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Alibaba's car rental:</strong> Through Alipay app</li>
          </ul>
        </div>

        {/* Driving in China */}
        <div id="driving-in-china" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Driving in China</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Drive on the <strong>right</strong> side</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Traffic is aggressive — expect the unexpected</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• GPS navigation essential (Baidu Maps)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Speed cameras everywhere</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Parking can be challenging in cities</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Highways are excellent and well-marked</li>
          </ul>
        </div>

        {/* Costs */}
        <div id="costs" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Costs</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Economy car: ¥200-400 per day</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Insurance: ¥50-100 per day (highly recommended)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Toll roads: ¥0.5-1 per km on highways</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Gas: Similar to US/European prices</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Parking: ¥10-50 per day in cities</li>
          </ul>
        </div>

        {/* Consider Carefully */}
        <div id="consider-carefully" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Consider Carefully</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Traffic accidents are common</li>
            <li className="text-sm leading-relaxed md:text-base">• Chinese driving style is chaotic</li>
            <li className="text-sm leading-relaxed md:text-base">• Road signs mostly in Chinese</li>
            <li className="text-sm leading-relaxed md:text-base">• Cities have traffic restrictions (license plate rules)</li>
            <li className="text-sm leading-relaxed md:text-base">• Alternative: Hire a driver (¥500-800/day)</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}