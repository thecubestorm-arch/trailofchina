import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'eSIM Cards for China | Trail of China',
  description:
    'Best eSIM providers for China travel: Airalo, Holafly, Ubigi. Setup guide, pricing, and recommendations.',
}

export default function EsimPage() {
  return (
    <div>
      <GuideArticlePage
        icon="📱"
        heroImage={{ src: 'https://picsum.photos/seed/esim-china/800/400', alt: 'eSIM card setup for China travel' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
          { label: 'eSIM' },
        ]}
        category="How to Get Internet"
        title="eSIM Cards for China"
        intro="eSIMs are the easiest way to get internet in China. Activate before you leave home and have data the moment you land. No airport queues, no language barriers."
        whyYouNeedThis={[
          'You need internet for maps, translation, ride-hailing, and mobile payments — all essential in China.',
          'eSIMs let you set up data before you travel, so you are connected the moment you land.',
          'No need to find a store, show your passport, or deal with language barriers at the airport.',
          'eSIMs use roaming networks, which means they bypass the Great Firewall — Google Maps and Gmail work without a VPN.',
        ]}
        setupSteps={[
          { title: 'Download the app', description: 'Get Airalo, Holafly, or Ubigi from your app store before you travel.' },
          { title: 'Purchase a plan', description: 'Select a China plan that matches your trip length and data needs.' },
          { title: 'Install the eSIM', description: 'Follow the app\'s QR code instructions to install the eSIM profile on your phone.' },
          { title: 'Enable data roaming', description: 'Turn on data roaming in your phone settings before you land in China.' },
          { title: 'Connect automatically', description: 'Your phone connects to a network as soon as you arrive — no further steps needed.' },
        ]}
        proTips={[
          'Install your eSIM 1 day before travel so you can test it.',
          'Screenshot your QR code as a backup in case you need to reinstall.',
          'Buy slightly more data than you think you need — top-ups are instant if you run low.',
          'eSIMs use roaming networks, so speeds may be slower than local SIMs. A VPN is still recommended for full internet access.',
        ]}
        related={[
          { label: 'Physical SIM', href: '/china-basics/how-to-get-internet/physical-sim' },
          { label: 'Airalo eSIM', href: '/china-basics/how-to-get-internet/airalo-esim' },
          { label: 'Holafly eSIM', href: '/china-basics/how-to-get-internet/holafly-esim' },
          { label: 'VPN Guide', href: '/china-basics/what-apps-to-use/vpn' },
        ]}
        relatedArticles={[
          { title: 'Airalo eSIM Guide', description: 'Budget-friendly eSIM with good China coverage.', href: '/china-basics/how-to-get-internet/airalo-esim' },
          { title: 'Holafly eSIM Guide', description: 'Unlimited data eSIM option for China.', href: '/china-basics/how-to-get-internet/holafly-esim' },
          { title: 'How to Get Internet', description: 'All connectivity options compared.', href: '/china-basics/how-to-get-internet' },
          { title: 'VPN Guide', description: 'Access blocked sites with a reliable VPN.', href: '/china-basics/what-apps-to-use/vpn' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🔒"
          title="Don't Forget a VPN"
          description="A VPN is essential in China — install it before you arrive."
          buttonText="Get a VPN for China →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="primary"
        />
      </div>
    </div>
  )
}
