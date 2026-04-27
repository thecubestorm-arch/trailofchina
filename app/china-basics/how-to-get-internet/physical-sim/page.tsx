import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Physical SIM Cards in China | Trail of China',
  description:
    'Complete guide to buying physical SIM cards at Chinese airports. Best carriers, pricing, requirements, and setup.',
}

export default function PhysicalSimPage() {
  return (
    <div>
      <GuideArticlePage
        icon="📲"
        heroImage={{ src: 'https://picsum.photos/seed/sim-card-china/800/400', alt: 'Buying a physical SIM card in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
          { label: 'Physical SIM' },
        ]}
        category="How to Get Internet"
        title="Physical SIM Cards in China"
        intro="Physical SIM cards offer the best value and fastest speeds in China. You can buy them at any major airport from official carrier stores."
        whyYouNeedThis={[
          'Physical SIMs give you a real local number and access to China\'s fastest mobile networks.',
          'Data plans are generous and cheap compared to roaming or eSIM options.',
          'You get better speeds than eSIM roaming, which matters for maps and video calls.',
          'A local number lets you receive SMS from Chinese services like Alipay and WeChat.',
        ]}
        setupSteps={[
          { title: 'Find the carrier store', description: 'Look for official stores after customs: 中国移动 (China Mobile), 中国联通 (China Unicom), or 中国电信 (China Telecom).' },
          { title: 'Show your passport', description: 'Chinese law requires passport registration for all SIM cards. The staff will handle this for you.' },
          { title: 'Choose a plan', description: 'Ask for a tourism SIM (旅游卡) for short stays. China Unicom is the most foreigner-friendly.' },
          { title: 'Staff installs it', description: 'They will insert the SIM, activate it, and make sure it works before you leave.' },
          { title: 'Test before leaving', description: 'Open a browser and check that data works. Keep the receipt for any issues.' },
        ]}
        proTips={[
          'China Unicom is the most foreigner-friendly carrier with the best balance of price and coverage.',
          'Ask for a "tourism SIM" (旅游卡) for short stays — these have shorter commitments.',
          'Keep your home SIM in your luggage, not your phone, to avoid confusion.',
          'Download offline maps before swapping SIMs, just in case.',
          'Bring cash or have Alipay/WeChat ready — both are accepted at carrier stores.',
        ]}
        related={[
          { label: 'eSIM Guide', href: '/china-basics/how-to-get-internet/esim' },
          { label: 'Airalo eSIM', href: '/china-basics/how-to-get-internet/airalo-esim' },
          { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
          { label: 'VPN Guide', href: '/china-basics/what-apps-to-use/vpn' },
        ]}
        relatedArticles={[
          { title: 'eSIM Guide', description: 'Compare eSIM options for easier setup.', href: '/china-basics/how-to-get-internet/esim' },
          { title: 'Airalo eSIM Guide', description: 'Budget-friendly eSIM with good China coverage.', href: '/china-basics/how-to-get-internet/airalo-esim' },
          { title: 'How to Get Internet', description: 'All connectivity options for China travelers.', href: '/china-basics/how-to-get-internet' },
          { title: 'VPN Guide', description: 'Access blocked sites with a reliable VPN.', href: '/china-basics/what-apps-to-use/vpn' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="📱"
          title="Want Zero Airport Hassle?"
          description="Set up an eSIM before you fly and skip the carrier store queue entirely."
          buttonText="See eSIM Options →"
          buttonHref="/china-basics/how-to-get-internet/esim"
          variant="secondary"
        />
      </div>
    </div>
  )
}
