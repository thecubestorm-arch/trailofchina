import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Communication App: WeChat',
  description:
    'Set up WeChat for messaging, service mini-programs, and travel coordination in China.',
}

export default function CommunicationAppsPage() {
  return (
    <GuideArticlePage
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' }, { label: 'Communication' }]}
      relatedArticles={[
        { title: 'WeChat Pay Guide', description: 'Set up WeChat Pay for payments, mini programs, and P2P transfers.', href: '/china-basics/what-apps-to-use/wechat-pay' },
        { title: 'Payment Apps Overview', description: 'Why you need Alipay and WeChat Pay in cashless China.', href: '/china-basics/what-apps-to-use/payment' },
      ]}
      category="What Apps to Use"
      title="Communication App: WeChat"
      intro="WeChat is much more than chat. Hotels, tour operators, and local contacts often coordinate schedules, tickets, and payments through it."
      whyYouNeedThis={[
        'Most local businesses prefer WeChat for quick support and confirmations.',
        'Mini-programs can provide tickets, queue numbers, and service notifications.',
        'Voice notes and translation features make real-time communication easier.',
      ]}
      setupSteps={[
        {
          title: 'Register your account before departure',
          description:
            'Complete phone verification while your home SIM is active. Recovery is easier when setup is done before travel day.',
        },
        {
          title: 'Set profile and privacy controls',
          description:
            'Add a recognizable photo and name, then review privacy settings so only intended contacts can view your moments and details.',
        },
        {
          title: 'Enable translation and backup options',
          description:
            'Turn on translation tools and ensure chat backup settings are active so critical booking messages are not lost.',
        },
        {
          title: 'Practice sharing location and contacts',
          description:
            'Learn how to share live location and hotel contacts to simplify meetup and emergency coordination.',
        },
      ]}
      proTips={[
        'Keep key travel contacts pinned at the top of your chat list.',
        'Use labels or notes to remember who is hotel staff, driver, or guide.',
        'Export essential booking confirmations as screenshots for offline access.',
      ]}
      related={[
        { label: 'VPN Guide', href: '/china-basics/what-apps-to-use/vpn' },
        { label: 'Cultural Differences', href: '/china-basics/how-china-differs/cultural-differences' },
        { label: 'Shanghai Local Tips', href: '/destinations/shanghai/local-tips' },
      ]}
    />
  )
}
