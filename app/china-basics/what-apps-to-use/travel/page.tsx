import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Travel Apps: Trip.com and DiDi',
  description:
    'How to use Trip.com and DiDi for flights, trains, hotels, and local rides across China with fewer booking mistakes.',
}

export default function TravelAppsPage() {
  return (
    <GuideArticlePage
      heroImage={{ src: "https://picsum.photos/seed/travel-apps-china/800/400", alt: "Travel apps in China" }}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' }, { label: 'Travel Booking' }]}
      relatedArticles={[
        { title: 'How to Get Around', description: 'Transportation overview: trains, planes, taxis, and more.', href: '/china-basics/how-to-get-around' },
        { title: '12306 Train Booking', description: 'Book China train tickets directly like a local.', href: '/china-basics/how-to-get-around/12306' },
      ]}
      category="What Apps to Use"
      title="Travel Apps: Trip.com and DiDi"
      intro="Trip.com is strong for flights, trains, and hotels in one account. DiDi is the default ride-hailing tool in many cities and makes airport transfers much easier."
      whyYouNeedThis={[
        'A centralized booking history helps when plans change during multi-city trips.',
        'DiDi reduces language friction by showing exact pickup and drop-off data.',
        'App receipts and e-tickets simplify check-ins and reimbursement tracking.',
      ]}
      setupSteps={[
        {
          title: 'Create and verify your Trip.com account',
          description:
            'Add passport details in profile settings so rail and flight bookings can be issued correctly without last-minute edits.',
        },
        {
          title: 'Install DiDi and link payment options',
          description:
            'Set your default payment method in DiDi and test location permissions for accurate pickup detection.',
        },
        {
          title: 'Practice one mock booking flow',
          description:
            'Before travel, simulate a train booking and cancel before payment so you understand seat class and station filtering.',
        },
        {
          title: 'Set notification preferences',
          description:
            'Enable push alerts for boarding changes, gate updates, and driver arrival timing to avoid missed windows.',
        },
      ]}
      proTips={[
        'Book high-speed rail at least several days ahead on weekends and holidays.',
        'For airport pickups, use the exact terminal-level pickup pin shown in DiDi.',
        'Keep a screenshot of your booking reference if mobile signal is unstable.',
      ]}
      related={[
        { label: 'Train Travel Guide', href: '/china-basics/how-to-get-around/train' },
        { label: 'Taxi Basics', href: '/china-basics/how-to-get-around/taxi' },
        { label: '7-Day Route', href: '/plan-your-trip/preplanned-trips/7-day-route' },
      ]}
    />
  )
}
