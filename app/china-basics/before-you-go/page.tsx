import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Before You Go to China | Visa, Safety & Packing | Trail of China',
  description:
    'Everything to check before your China trip: visa requirements, safety tips, and what to pack. Get ready before you fly.',
}

export default function BeforeYouGoPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🧳"
        heroImage={{ src: 'https://picsum.photos/seed/packing-china/800/400', alt: 'Preparing for a trip to China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'Before You Go' },
        ]}
        category="Before You Go"
        title="Before You Go"
        intro="Get the paperwork, safety basics, and packing sorted before departure. These are the things every first-timer needs to check — visa, safety, and what to bring."
        whyYouNeedThis={[
          'China has specific entry requirements that can take weeks to arrange — starting early avoids last-minute panic.',
          'Understanding local safety and customs helps you travel with confidence.',
          'Packing the right items (and leaving the wrong ones at home) makes your trip smoother.',
          'Having apps, payments, and connectivity set up before arrival removes 90% of arrival stress.',
        ]}
        setupSteps={[
          { title: 'Check your visa', description: 'Verify if you need a visa, which type, and how long processing takes. Some nationalities have visa-free entry.' },
          { title: 'Download essential apps', description: 'Get WeChat, Alipay, a VPN, and translation apps before you leave. Many are blocked from inside China.' },
          { title: 'Set up connectivity', description: 'Buy an eSIM or plan to get a physical SIM at the airport. Test your VPN before departure.' },
          { title: 'Read the safety guide', description: 'China is safe, but knowing local etiquette, food safety tips, and emergency numbers helps.' },
          { title: 'Pack smart', description: 'Bring adapters, toilet paper, a VPN-ready device, and cash. Leave sensitive political materials at home.' },
        ]}
        proTips={[
          'Start your visa application at least 4–6 weeks before travel.',
          'Screenshot important addresses and confirmations in Chinese.',
          'Keep your passport valid for at least 6 months beyond your planned exit date.',
          'Download offline maps and translation packs as backups.',
          'Notify your bank you will be in China to avoid card blocks.',
        ]}
        related={[
          { label: 'Visa Guide', href: '/china-basics/how-china-differs/visa-guide' },
          { label: 'Packing List', href: '/china-basics/before-you-go/packing-list' },
          { label: 'Is China Safe?', href: '/china-basics/before-you-go/is-china-safe' },
          { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
        ]}
        relatedArticles={[
          { title: 'Visa Guide', description: 'Everything about China visas and visa-free entry.', href: '/china-basics/how-china-differs/visa-guide' },
          { title: 'Is China Safe?', description: 'Safety tips and what to expect as a tourist.', href: '/china-basics/before-you-go/is-china-safe' },
          { title: 'Packing List', description: 'What to pack and what to leave at home.', href: '/china-basics/before-you-go/packing-list' },
          { title: 'What Apps to Use', description: 'Essential apps to download before your trip.', href: '/china-basics/what-apps-to-use' },
          { title: 'Passport Rules', description: 'Entry requirements and passport validity.', href: '/china-basics/how-china-differs/passport-rules' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="📱"
          title="Get Your Apps Ready"
          description="WeChat, Alipay, VPN, and more — set them up before you fly so nothing is blocked on arrival."
          buttonText="See Essential Apps →"
          buttonHref="/china-basics/what-apps-to-use"
          variant="secondary"
        />
      </div>
    </div>
  )
}
