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
      scamAlerts={[
        'Be cautious of fake WeChat accounts impersonating hotels and requesting deposits.',
        'Never share verification SMS codes, even if a contact claims to be support.',
      ]}
      related={[
        { label: 'VPN Guide', href: '/china-basics/what-apps-to-use/vpn' },
        { label: 'Cultural Differences', href: '/china-basics/how-china-differs/cultural-differences' },
        { label: 'Shanghai Local Tips', href: '/destinations/shanghai/local-tips' },
      ]}
    />
  )
}
