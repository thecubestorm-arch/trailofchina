import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Public Buses in China | Trail of China',
  description:
    'Guide to using public buses in China. Routes, payment with Alipay/WeChat, bus etiquette, and when buses are the best option.',
}

export default function BusPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚌"
        heroImage={{ src: 'https://picsum.photos/seed/bus-china/800/400', alt: 'Public bus in a Chinese city' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Bus' },
        ]}
        category="How to Get Around"
        title="Public Buses"
        intro="Buses are the cheapest way to get around but can be confusing for tourists. They are best used when you know the route or have a local to guide you."
        whyYouNeedThis={[
          'Buses cost only ¥2–4 per ride — the cheapest transport option in any Chinese city.',
          'Airport express buses are reliable and much cheaper than taxis.',
          'Tourist shuttle buses reach major attractions that the metro does not.',
          'Some cities have scenic tour buses that double as sightseeing experiences.',
        ]}
        setupSteps={[
          { title: 'Find your route', description: 'Use Baidu Maps or apps like Moovit to plan your bus route before heading out.' },
          { title: 'Get to the stop', description: 'Bus stop signs show routes in Chinese. Major stops have English announcements.' },
          { title: 'Pay your fare', description: 'Tap a transport card, scan Alipay/WeChat QR, or pay exact cash (coins or small bills).' },
          { title: 'Board and ride', description: 'Enter through the front door, exit through the back. Watch for your stop on the display.' },
          { title: 'Know when to get off', description: 'Press the stop button or the driver may not stop. Have your destination written in Chinese.',
        },
        ]}
        proTips={[
          'Airport express buses are reliable and cheap — check routes before you land.',
          'Baidu Maps shows bus routes with real-time arrival info.',
          'Keep exact change if paying cash — drivers do not give change.',
          'Buses can get extremely crowded during rush hour (7–9 AM, 5–7 PM).',
          'Last buses often end early (20:00–22:00) — check schedules in advance.',
          'Give up your seat for elderly, pregnant, or disabled passengers.',
        ]}
        related={[
          { label: 'Train Travel', href: '/china-basics/how-to-get-around/train' },
          { label: 'Getting Around Hub', href: '/china-basics/how-to-get-around' },
          { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
        ]}
        relatedArticles={[
          { title: 'Train Travel', description: 'High-speed rail between Chinese cities.', href: '/china-basics/how-to-get-around/train' },
          { title: 'Metro & Subway', description: 'Navigate Chinese city subways.', href: '/china-basics/how-to-get-around/metro-subway' },
          { title: 'Getting Around', description: 'All transport options for China travelers.', href: '/china-basics/how-to-get-around' },
          { title: 'Alipay Guide', description: 'Pay for buses, metro, and everything else.', href: '/china-basics/what-apps-to-use/alipay' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🚄"
          title="Traveling Between Cities?"
          description="China's high-speed rail is fast, affordable, and connects every major city. Book tickets online with 12306."
          buttonText="Train Travel Guide →"
          buttonHref="/china-basics/how-to-get-around/train"
          variant="secondary"
        />
      </div>
    </div>
  )
}
