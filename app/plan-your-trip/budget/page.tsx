import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'China Budget Guide — Cost of Travel in China (2025) | Trail of China',
  description:
    'Complete China travel budget guide: daily costs, accommodation, food, transport, attractions, and money-saving tips for every travel style.',
  openGraph: {
    title: 'China Budget Guide — What Everything Actually Costs',
    description:
      'Budget traveler to luxury explorer: real prices for hotels, food, trains, attractions, and more.',
    type: 'article',
  },
}

export default function BudgetGuidePage() {
  return (
    <GuideArticlePage
      heroImage={{ src: "https://picsum.photos/seed/china-budget/800/400", alt: "Budget travel in China" }}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Plan Your Trip', href: '/plan-your-trip' },
        { label: 'Budget Guide', href: undefined },
      ]}
      category="Plan Your Trip"
      title="Budget Guide — Cost of Travel in China"
      intro="China can be surprisingly affordable or comfortably luxurious — a budget traveler can get by on ¥200/day while a luxury trip runs ¥2000+. Here is what everything actually costs."
      whyYouNeedThis={[
        '💰 Daily budget: ¥200–300 (budget), ¥500–800 (mid-range), ¥1500+ (luxury)',
        '🏨 Budget hotels: ¥80–150/night, Mid-range: ¥300–600, Luxury: ¥800–2000+',
        '🍜 Street food: ¥5–15/meal, Restaurant: ¥30–80, High-end: ¥150–500+',
        '🚄 High-speed train: ¥50–600 depending on distance, Flights: ¥200–1000',
        '🎫 Attractions: ¥20–60 typical entry, ¥100–200 for major sites',
        '📱 eSIM: $5–15, VPN: $3–12/month',
      ]}
      setupSteps={[
        {
          title: 'Accommodation',
          description:
            'Hostels ¥50–80/night, budget hotels ¥100–200, mid-range ¥300–600, luxury ¥800+. Prices are highest in Shanghai and Beijing; Chengdu, Chongqing, and Xi\'an offer better value. Book through Trip.com or Ctrip for English support and foreign-card payments.',
        },
        {
          title: 'Food & Drink',
          description:
            'Street food ¥5–15/meal (noodles, baozi, jianbing), local restaurants ¥20–50, mid-range dining ¥50–100, beer ¥5–15, coffee ¥15–30. Avoid restaurants directly next to major tourist attractions — walk two blocks and pay half the price for better food.',
        },
        {
          title: 'Transportation',
          description:
            'Metro ¥3–7/ride, bus ¥1–2, Didi (Chinese Uber) ¥10–30 for short trips. High-speed trains are the best value for intercity travel — ¥50–600 depending on distance and class. Domestic flights ¥200–1000; book 2+ weeks ahead for deals.',
        },
        {
          title: 'Attractions & Activities',
          description:
            'Most temples and parks: ¥20–60. Forbidden City: ¥60. Great Wall (Mutianyu/Badaling): ¥40–65. Terracotta Warriors: ¥120. Many museums are free with passport. Book tickets online through Trip.com — often cheaper than at the gate and you skip the queue.',
        },
        {
          title: 'City Cost Comparison',
          description:
            'Shanghai and Beijing are the most expensive cities — expect to pay 30–50% more for hotels and dining. Chengdu and Chongqing are the most affordable major cities with excellent food scenes. Xi\'an sits in the middle: great value with world-class attractions.',
        },
      ]}
      proTips={[
        'China is cheaper than Japan or Korea but pricier than Southeast Asia — budget accordingly.',
        'Alipay and WeChat Pay are accepted everywhere — you will rarely need cash. Set up mobile payments before you arrive.',
        'High-speed trains are the best value for intercity travel — comfortable, punctual, and often faster than flying when you factor in airport time.',
        'Attraction tickets booked online through Trip.com are often cheaper than at the gate and let you skip the ticket line.',
        'Avoid tourist restaurants near major attractions — walk two blocks for half-price food that locals actually eat.',
      ]}
      relatedArticles={[
        {
          title: 'Best Time to Visit China',
          description: 'Month-by-month climate guide and the ideal seasons for every region.',
          href: '/plan-your-trip/best-time-to-visit',
        },
        {
          title: 'Preplanned Trips',
          description: 'Ready-made 7, 10, and 14-day itineraries covering China\'s highlights.',
          href: '/plan-your-trip/preplanned-trips',
        },
        {
          title: 'Trip.com Guide',
          description: 'Book trains, hotels, flights, and attraction tickets — all in English.',
          href: '/china-basics/what-apps-to-use/trip-com',
        },
      ]}
      related={[
        { label: 'Best Time to Visit', href: '/plan-your-trip/best-time-to-visit' },
        { label: 'Preplanned Trips', href: '/plan-your-trip/preplanned-trips' },
        { label: 'Travel Planner', href: '/plan-your-trip/travel-planner' },
        { label: 'Trip.com Guide', href: '/china-basics/what-apps-to-use/trip-com' },
        { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
      ]}
    />
  )
}
