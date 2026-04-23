import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Didi Chuxing Guide: China\'s Uber for Taxis & Ride-Hailing | Trail of China',
  description:
    'How to use Didi (滴滴) in China: ride-hailing, bike sharing, and bus routes. Setup guide, safety tips, and pricing for foreign travelers.',
}

export default function DidiPage() {
  return (
    <GuideArticlePage
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' }, { label: 'Didi' }]}
      relatedArticles={[
        { title: 'Alipay Guide', description: 'Pay for Didi rides and more with Alipay.', href: '/china-basics/what-apps-to-use/alipay' },
        { title: 'How to Get Around', description: 'All transportation options in China.', href: '/china-basics/how-to-get-around' },
      ]}
      category="What Apps to Use"
      title="Didi Chuxing Guide: China's Uber for Taxis & Ride-Hailing"
      intro="Didi Chuxing is China's dominant ride-hailing platform, serving over 300 million users and operating in more than 500 Chinese cities. Often called China's Uber, Didi offers everything from economy rides to premium chauffeured services and bike sharing. For travelers, Didi is the most reliable and affordable way to get around cities without owning a car or speaking fluent Chinese."
      whyYouNeedThis={[
        'Didi dominates China\'s ride-hailing market with over 80% share — it\'s the default for locals and tourists alike.',
        'Prices are 30-50% cheaper than international Uber rates, with transparent pricing and no surge pricing during normal hours.',
        'The app supports English interface with bilingual drivers, making communication easier for foreigners.',
        'Didi\'s bike-sharing integration means you can rent bikes directly without separate app downloads or deposits.',
        'Safety features like real-time trip sharing and SOS emergency buttons provide peace of mind in unfamiliar cities.',
      ]}
      setupSteps={[
        {
          title: 'Download Didi and set language to English',
          description:
            'Search for "Didi Chuxing" or "Didi" in your app store. The official app is blue with white text. On first launch, navigate to Settings (gear icon) → Language to switch to English. Note that while the interface supports English, most driver communications and street addresses will still appear in Chinese.',
        },
        {
          title: 'Create an account with your phone number',
          description:
            'Enter your international phone number with country code (e.g., +1 for US, +86 for China). You will receive an SMS verification code. Didi requires phone verification for all users to prevent spam and ensure accountability. Keep your phone signal strong during registration — international SMS delivery can take 3-5 minutes.',
        },
        {
          title: 'Link payment methods',
          description:
            'Go to My → Wallet → Add Payment Method. Didi accepts Alipay, WeChat Pay, and international cards through Alipay partnerships. For tourists, the most reliable option is linking Alipay (which you set up in Step 1) and using Alipay as your default payment method within Didi. Some premium services may require Chinese bank accounts.',
        },
        {
          title: 'Set up your profile and preferences',
          description:
            'Complete your profile with a name and photo for driver reference. In Settings, enable "English Interface" and "Bilingual Drivers" to increase your chances of getting drivers who speak basic English. Save common destinations (hotel, airport) for quick access.',
        },
        {
          title: 'Test with a short ride',
          description:
            'Book a short ride within your neighborhood (under ¥10). Open Didi, tap "Ride", enter your destination address in pinyin if you can\'t read Chinese characters (e.g., "jiayu guan" for嘉玉馆), and confirm your pick-up location. Didi will match you with the nearest available driver within 2-3 minutes.',
        },
      ]}
      proTips={[
        'Always confirm the license plate matches your app before getting in the car — this is a critical safety measure.',
        'Sit in the back seat (right side) unless traveling alone — it\'s the custom for passengers and gives drivers space.',
        'Screenshot your ride details (license plate, driver name, estimated arrival) and share with a friend before departure.',
        'Set your destination in English by tapping the map pin, then typing your location in pinyin (e.g., "gugong" for故宫, "tiananmen" for天安门).',
        'Didi Express (快车) is the most affordable option (¥2-4/km), while Didi Premier (专车) offers luxury vehicles at 30-50% higher prices.',
        'For airport trips, book 30-60 minutes in advance — traffic to major airports can be heavy, and Didi drivers face penalties for late arrivals.',
        'Didi\'s bike-sharing (青桔单车) integrates directly into the app — no deposit required for foreign users, just pay per ride.',
      ]}
      scamAlerts={[
        'Always verify the license plate matches your app before entering the vehicle — this is the most common scam tactic.',
        'Use the "Share Trip" feature to send your real-time location and ETA to trusted contacts.',
        'Didi\'s built-in SOS button (appears during rides) connects you directly to emergency services and your emergency contacts.',
        'Keep your phone charged during rides — if you need to show your destination or verify with the driver, your phone should be ready.',
        'Avoid unmarked vehicles or drivers who approach you outside stations — always use the official Didi app to book.',
        'If you feel uncomfortable during a ride, use the SOS button immediately and let the system handle it — Didi takes safety seriously.',
      ]}
      related={[
        { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
        { label: 'Payment Apps Overview', href: '/china-basics/what-apps-to-use/payment' },
        { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
      ]}
    />
  )
}
