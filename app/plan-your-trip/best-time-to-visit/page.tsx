import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Best Time to Visit China — Month-by-Month Guide (2025) | Trail of China',
  description:
    'When is the best time to visit China? Month-by-month climate guide, peak seasons, holidays to avoid, and the ideal months for every region.',
  openGraph: {
    title: 'Best Time to Visit China — Month-by-Month Guide (2025)',
    description:
      'From cherry-blossom spring to golden autumn — find the perfect season for your China trip.',
    type: 'article',
  },
}

export default function BestTimeToVisitPage() {
  return (
    <GuideArticlePage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Plan Your Trip', href: '/plan-your-trip' },
        { label: 'Best Time to Visit', href: undefined },
      ]}
      category="Plan Your Trip"
      title="Best Time to Visit China"
      intro="China is vast — climate ranges from Siberian winters in Harbin to tropical summers in Hainan. When to visit depends on where you're going and what you want to experience."
      whyYouNeedThis={[
        '🌸 Spring (March–May): Mild temperatures, cherry blossoms, fewer crowds before summer peak',
        '☀️ Summer (June–August): Hot and humid, but great for Tibet, Inner Mongolia, and beaches',
        '🍂 Autumn (September–November): THE best time — comfortable temps, fall foliage, golden light',
        '❄️ Winter (December–February): Cold but magical — Harbin Ice Festival, fewer tourists, lower prices',
      ]}
      setupSteps={[
        {
          title: 'Spring (March–May)',
          description:
            'Beijing 10–25°C, Shanghai 12–25°C, Chengdu 15–25°C. Best for: Great Wall hiking, Shanghai strolling, Xi\'an exploring. Avoid: May Day holiday (first week of May) — huge crowds everywhere.',
        },
        {
          title: 'Summer (June–August)',
          description:
            'Beijing 25–35°C, Shanghai 28–35°C, Chengdu 25–30°C. Best for: Tibet, Yunnan, Inner Mongolia — cooler highland destinations. Avoid: Chinese school holidays (July–August) plus extreme heat and humidity in eastern cities.',
        },
        {
          title: 'Autumn (September–November)',
          description:
            'Beijing 10–25°C, Shanghai 15–28°C. Best for: Everything — comfortable weather, clear skies, fall colors. October is THE month. Avoid: National Day holiday (Oct 1–7) — everything is booked solid and prices skyrocket.',
        },
        {
          title: 'Winter (December–February)',
          description:
            'Beijing –5 to 5°C, Shanghai 3–10°C. Best for: Harbin Ice Festival, hotpot season, fewer crowds, lower prices. Avoid: Chinese New Year (2-week period, dates vary by lunar calendar) — transport chaos, everything closed or packed.',
        },
        {
          title: 'Holidays to Avoid',
          description:
            'Chinese New Year (January–February, dates shift yearly), May Day (first week of May), and National Day (October 1–7). During these periods hotels, trains, and flights sell out weeks in advance and prices can triple. If you must travel then, book 2+ months ahead.',
        },
      ]}
      proTips={[
        'Book 3+ months ahead for October travel — it is peak season for a reason and availability disappears fast.',
        'Chinese New Year dates shift every year (January–February) — check the lunar calendar before booking.',
        'Shoulder seasons (March, November) offer the best price-to-weather ratio — mild temps, lower prices, fewer crowds.',
        'South China (Guangxi, Yunnan) is pleasant year-round — your perfect winter escape when the north freezes.',
      ]}
      relatedArticles={[
        {
          title: 'Budget Guide — Cost of Travel in China',
          description: 'Daily budgets, accommodation, food, and transport costs for every travel style.',
          href: '/plan-your-trip/budget',
        },
        {
          title: 'Preplanned Trips',
          description: 'Ready-made 7, 10, and 14-day itineraries covering China\'s highlights.',
          href: '/plan-your-trip/preplanned-trips',
        },
        {
          title: 'China Visa Guide',
          description: 'Everything you need to know about visas and visa-free entry.',
          href: '/china-basics/how-china-differs/visa-guide',
        },
      ]}
      related={[
        { label: 'Budget Guide', href: '/plan-your-trip/budget' },
        { label: 'Preplanned Trips', href: '/plan-your-trip/preplanned-trips' },
        { label: 'Travel Planner', href: '/plan-your-trip/travel-planner' },
        { label: 'Visa Guide', href: '/china-basics/how-china-differs/visa-guide' },
        { label: 'Trip.com Guide', href: '/china-basics/what-apps-to-use/trip-com' },
      ]}
    />
  )
}
