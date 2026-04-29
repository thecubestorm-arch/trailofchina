import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Car Rental in China | Trail of China',
  description: 'Guide to renting a car in China. Requirements, rental companies, and driving tips.',
}

const tocItems = [
  { id: 'requirements', title: 'Requirements' },
  { id: 'rental-companies', title: 'Rental Companies' },
  { id: 'driving-in-china', title: 'Driving in China' },
  { id: 'costs', title: 'Costs' },
  { id: 'when-to-rent', title: 'When to Rent' },
  { id: 'consider-carefully', title: 'Consider Carefully' },
]

const quickInfoPills = [
  'Economy car: ¥200-400 per day',
  'Insurance: ¥50-100 per day',
  'Best for remote areas',
]

export default function CarPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚗"
        heroImage={{ src: 'https://picsum.photos/seed/china-car-rental/800/400', alt: 'Car rental and driving in China' }}
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
          'A rental car gives you maximum flexibility when public transport does not reach your destination well.',
          'It is one of the few practical ways to visit remote rural areas, small villages, and scenic routes on your own schedule.',
          'Families or groups may find private transport more convenient than coordinating trains, buses, and taxis.',
          'Driving in China comes with major legal and practical hurdles, so you need to understand the tradeoffs before committing.',
        ]}
        related={[
          { label: 'Didi Ride-Hailing', href: '/china-basics/how-to-get-around/didi' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          {
            title: 'Didi Ride-Hailing',
            description: 'Skip self-driving and let Didi handle it.',
            href: '/china-basics/how-to-get-around/didi',
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
            <h2 id="requirements" className="text-2xl font-extrabold text-slate-900">
              Requirements
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Valid foreign license</strong> plus official translation</li>
              <li><strong>OR Chinese driver&apos;s license</strong> (difficult to obtain)</li>
              <li><strong>Passport</strong> for registration</li>
              <li><strong>Credit card</strong> for deposit</li>
              <li><strong>Age:</strong> Usually 21-25+ depending on company</li>
            </ul>
          </div>

          <div>
            <h2 id="rental-companies" className="text-2xl font-extrabold text-slate-900">
              Rental Companies
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Avis, Hertz, Enterprise:</strong> International chains, airport locations</li>
              <li><strong>eHi (一嗨租车):</strong> Major local company, English website</li>
              <li><strong>Shouqi (首汽租车):</strong> Government-backed, reliable</li>
              <li><strong>Alibaba&apos;s car rental:</strong> Through Alipay app</li>
            </ul>
          </div>

          <div>
            <h2 id="driving-in-china" className="text-2xl font-extrabold text-slate-900">
              Driving in China
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Drive on the <strong>right</strong> side</li>
              <li>Traffic is aggressive - expect the unexpected</li>
              <li>GPS navigation essential (Baidu Maps)</li>
              <li>Speed cameras everywhere</li>
              <li>Parking can be challenging in cities</li>
              <li>Highways are excellent and well-marked</li>
            </ul>
          </div>

          <div>
            <h2 id="costs" className="text-2xl font-extrabold text-slate-900">
              Costs
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Economy car: ¥200-400 per day</li>
              <li>Insurance: ¥50-100 per day (highly recommended)</li>
              <li>Toll roads: ¥0.5-1 per km on highways</li>
              <li>Gas: Similar to US/European prices</li>
              <li>Parking: ¥10-50 per day in cities</li>
            </ul>
          </div>

          <div id="when-to-rent" className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-2xl font-extrabold text-amber-900">When to Rent</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-amber-950 md:text-base">
              <li>Exploring rural areas (Guilin, Yunnan, Tibet)</li>
              <li>Traveling with family (more convenient)</li>
              <li>Visiting multiple small villages</li>
              <li>Avoid if staying mainly in big cities</li>
            </ul>
          </div>

          <div id="consider-carefully" className="rounded-2xl border border-[#ebe4d8] bg-[#faf8f4] p-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Consider Carefully</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Traffic accidents are common</li>
              <li>Chinese driving style is chaotic</li>
              <li>Road signs mostly in Chinese</li>
              <li>Cities have traffic restrictions (license plate rules)</li>
              <li>Alternative: Hire a driver (¥500-800/day)</li>
            </ul>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🚕"
          title="Prefer Not to Drive Yourself?"
          description="For most travelers, Didi is cheaper, simpler, and far less stressful than renting a car in China."
          buttonText="See the Didi Guide →"
          buttonHref="/china-basics/how-to-get-around/didi"
          variant="secondary"
        />
      </div>
    </div>
  )
}
