import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Metro & Subway in China | Trail of China',
  description:
    'Complete guide to using the metro and subway systems in Chinese cities. Shanghai, Beijing, Guangzhou, and more. Payment, etiquette, and tips.',
}

export default function MetroPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚇"
        heroImage={{ src: 'https://picsum.photos/seed/china-metro-subway/800/400', alt: 'Metro and subway travel in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Metro & Subway' },
        ]}
        category="How to Get Around"
        title="Metro & Subway"
        intro="China's metro systems are modern, efficient, and often the best way to navigate major cities. Shanghai and Beijing have some of the world's longest networks, with stations near every major attraction."
        whyYouNeedThis={[
          'China\'s metro systems are modern, efficient, and often the best way to navigate major cities',
          "Shanghai and Beijing have some of the world's longest networks",
          'Stations are near every major attraction',
        ]}
        proTips={[
          'Download city metro apps for offline maps',
          'Avoid rush hour (7-9am, 5-7pm) - extremely crowded',
          'Last trains around 22:00-23:00 depending on line',
          'English signage is standard in major cities',
          'Station announcements in Chinese and English',
          'Free metro maps available at tourist info centers',
        ]}
        quickInfo="Best for major cities · Security check at every station · Last trains around 22:00-23:00"
        tocItems={[
          { id: 'major-metro-systems', title: 'Major Metro Systems' },
          { id: 'how-to-pay', title: 'How to Pay' },
          { id: 'metro-etiquette', title: 'Metro Etiquette' },
          { id: 'things-to-know', title: 'Things to Know' },
        ]}
        relatedArticles={[
          {
            title: 'Alipay Guide',
            description: 'Pay for metro rides with Alipay.',
            href: '/china-basics/what-apps-to-use/alipay',
          },
          {
            title: 'How to Get Around',
            description: 'All transportation options in China.',
            href: '/china-basics/how-to-get-around',
          },
        ]}
      >
        <section id="major-metro-systems" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Major Metro Systems</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li><strong>Shanghai:</strong> World&apos;s longest network, 20+ lines</li>
            <li><strong>Beijing:</strong> Second longest, covers all major sites</li>
            <li><strong>Guangzhou:</strong> Extensive network including Foshan</li>
            <li><strong>Shenzhen:</strong> Modern, easy to navigate</li>
            <li><strong>Xi&apos;an, Chengdu, Hangzhou:</strong> Growing networks</li>
          </ul>
        </section>

        <section id="how-to-pay" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Pay</h2>
          <ol className="list-decimal space-y-3 pl-6 text-slate-700">
            <li><strong>Metro Card:</strong> Rechargeable card, slight discount</li>
            <li><strong>Alipay/WeChat QR:</strong> Scan at gates, most convenient</li>
            <li><strong>Single tickets:</strong> Buy at machines (Chinese interface mostly)</li>
            <li><strong>Phone NFC:</strong> Apple Pay/Google Pay work in some cities</li>
          </ol>
        </section>

        <section id="metro-etiquette" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Metro Etiquette</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Stand right, walk left on escalators</li>
            <li>Let passengers exit before entering</li>
            <li>Priority seating for elderly, pregnant, disabled</li>
            <li>No eating or drinking on trains</li>
            <li>Security check required at every station (like airports)</li>
            <li>Baggage x-ray for all bags</li>
          </ul>
        </section>

        <section id="things-to-know" className="rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-6">
          <h2 className="text-2xl font-extrabold text-[var(--accent-strong)]">Things to Know</h2>
          <ul className="mt-4 space-y-2 text-[var(--foreground)]">
            <li>• Some stations have LONG walks between lines (10+ minutes)</li>
            <li>• Stations can have multiple exits - wrong exit = big detour</li>
            <li>• Check exit numbers on maps before you arrive</li>
            <li>• Air conditioning is strong - bring a layer</li>
          </ul>
        </section>
      </GuideArticlePage>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="💳"
          title="Set Up Mobile Payment First"
          description="Metro gates in many cities work best with Alipay or WeChat QR codes, so payment setup makes subway travel much smoother."
          buttonText="Alipay Setup Guide →"
          buttonHref="/china-basics/what-apps-to-use/alipay"
          variant="secondary"
        />
      </div>
    </div>
  )
}
