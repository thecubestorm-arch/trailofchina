import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: '12306 Train Booking: How to Buy China Train Tickets Like a Local',
  description:
    'Master the 12306 app — China\'s official train booking platform. Step-by-step guide for foreigners to book high-speed rail tickets, pick seats, and avoid scams.',
}

export default function TrainBookingPage() {
  return (
    <GuideArticlePage
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
      scamAlerts={[
        'Only book through the official 12306 app or website (www.12306.cn). Third-party booking sites charge extra fees.',
        'Never buy tickets from people outside train stations claiming "sold out" — these are often counterfeit or overpriced.',
        'Some scam apps mimic 12306 — always download from official app stores and verify the developer is "China Railway".',
      ]}
      related={[
        { label: 'Getting Around China', href: '/china-basics/how-to-get-around' },
        { label: 'Train Travel Guide', href: '/china-basics/how-to-get-around/train' },
        { label: 'Payment Apps', href: '/china-basics/what-apps-to-use/payment' },
        { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
      ]}
    />
  )
}