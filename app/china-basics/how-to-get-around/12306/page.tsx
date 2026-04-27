import type { Metadata } from 'next'
import ContextualCTA from '@/components/ContextualCTA'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: '12306 Train Booking: How to Buy China Train Tickets Like a Local',
  description:
    'Master the 12306 app — China\'s official train booking platform. Step-by-step guide for foreigners to book high-speed rail tickets, pick seats, and book with confidence.',
}

export default function TrainBookingPage() {
  return (
    <div>
      <GuideArticlePage
      heroImage={{ src: "https://picsum.photos/seed/china-train/800/400", alt: "Train travel in China" }}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'How to Get Around', href: '/china-basics/how-to-get-around' }, { label: '12306 Train Booking' }]}
      relatedArticles={[
        { title: 'Train Travel in China', description: 'Everything about high-speed rail and seat types.', href: '/china-basics/how-to-get-around/train' },
        { title: 'Travel Booking Apps', description: 'Trip.com and other booking platforms.', href: '/china-basics/what-apps-to-use/travel' },
      ]}
      category="How to Get Around"
      title="12306 Train Booking: How to Buy China Train Tickets Like a Local"
      intro="China's high-speed rail network is the world's largest and most efficient, connecting every major city at speeds up to 350 km/h. The 12306 app is the official booking platform — no markup, real-time availability, and the ability to pick your exact seat."
      whyYouNeedThis={[
        '12306 is the only official source — third-party sites add markups of ¥20-50 per ticket and may sell out faster.',
        'China\'s high-speed trains sell out during peak times (holidays, weekends), so booking in advance is essential.',
        'The app lets you select specific seats (window, aisle) and classes (second class, first class, business class).',
        'E-tickets mean no paper ticket needed — just scan your passport at the station gate.',
      ]}
      setupSteps={[
        {
          title: 'Download the 12306 app and switch to English',
          description:
            'Download "China Railway 12306" from your app store. On first launch, tap the language icon to switch to English. The English interface covers all essential booking functions.',
        },
        {
          title: 'Register with your passport information',
          description:
            'Tap "Register" and enter your passport number, full name (exactly as on your passport), nationality, and phone number. Your phone number can be from any country — SMS verification works internationally.',
        },
        {
          title: 'Verify your identity',
          description:
            'After registration, you will see your verification status. Most foreign passports are verified automatically within 24 hours. If not, you can verify at any train station ticket counter with your passport.',
        },
        {
          title: 'Search for trains and select your route',
          description:
            'Enter your departure and arrival cities, date, and preferred time. The app shows all available trains with duration, price, and seat availability. High-speed trains (G/D trains) are fastest; K/T trains are slower but cheaper.',
        },
        {
          title: 'Choose your seat class and position',
          description:
            'Second class (二等座) is comfortable and affordable. First class (一等座) offers wider seats and more legroom. Business class (商务座) is premium with reclining seats. You can pick window or aisle in most seat maps.',
        },
        {
          title: 'Pay and receive your e-ticket',
          description:
            'Pay via Alipay, WeChat Pay, or international Visa/Mastercard. Your e-ticket is linked to your passport number — just scan your passport at the station turnstile to enter. No need to print anything.',
        },
      ]}
      proTips={[
        'Book 15 days in advance for the best availability — tickets go on sale 15 days before departure.',
        'Second class on G-trains is perfectly comfortable for most routes under 5 hours.',
        'If your train is sold out, check the "waitlist" feature — cancellations are common and you may get a seat.',
        'Arrive at the station 30-45 minutes early for major cities; security lines can be long during rush hours.',
        'The 12306 app works offline for viewing your booked tickets — screenshot your ticket details before leaving WiFi.',
        'Children under 1.2m ride free (no seat), under 1.5m pay child fare (with seat).',
      ]}
      related={[
        { label: 'Getting Around China', href: '/china-basics/how-to-get-around' },
        { label: 'Train Travel Guide', href: '/china-basics/how-to-get-around/train' },
        { label: 'Payment Apps', href: '/china-basics/what-apps-to-use/payment' },
        { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
      ]}
    />
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <ContextualCTA
        icon="🚄"
        title="Book Trains Easily with Trip.com"
        description="The easiest way for foreigners to book China trains in English with foreign cards."
        buttonText="Book on Trip.com →"
        buttonHref="/china-basics/what-apps-to-use/trip-com"
        variant="secondary"
      />
    </div>
  </div>
)
}