import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'How to Get Internet in China | Trail of China',
  description:
    'Complete guide to getting internet in China: eSIM vs physical SIM cards, best providers, setup instructions, and pricing.',
}

export default function InternetHub() {
  return (
    <div>
      <GuideArticlePage
        icon="📶"
        heroImage={{ src: 'https://picsum.photos/seed/internet-china/800/400', alt: 'Staying connected while traveling in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Internet' },
        ]}
        category="How to Get Internet"
        title="How to Get Internet in China"
        intro="Staying connected in China is crucial for navigation, translation, and payments. Choose the setup that fits your trip length and comfort level."
        whyYouNeedThis={[
          'Google Maps, WhatsApp, Instagram, and Gmail are all blocked in China without a workaround.',
          'You need internet for navigation, translation, mobile payments, and ride-hailing — all daily essentials.',
          'Having a working connection from the moment you land removes a huge source of travel stress.',
          'China\'s mobile networks are fast and reliable once you are connected.',
        ]}
        setupSteps={[
          { title: 'Choose your method', description: 'eSIM for zero hassle before arrival, physical SIM for best value and speed, or both as backup.' },
          { title: 'eSIM setup (optional)', description: 'Buy and install an eSIM like Airalo or Holafly 1–2 days before departure. Activate on landing.' },
          { title: 'Physical SIM setup (optional)', description: 'Buy from an official carrier store at the airport after customs. Bring your passport.' },
          { title: 'Install a VPN', description: 'Download and test a VPN before you fly. Once inside China, VPN websites are blocked.' },
          { title: 'Test everything', description: 'Check maps, messaging, and payments work before leaving the airport or your hotel.' },
        ]}
        proTips={[
          'eSIMs bypass the Great Firewall through roaming — Google Maps works without a VPN.',
          'Physical SIMs are cheaper and faster but require a passport and airport store visit.',
          'Many travelers use both: eSIM for immediate arrival connectivity, local SIM for speed and value.',
          'Download a VPN before you arrive — you cannot access VPN websites from inside China.',
          'Screenshot important addresses in Chinese in case you lose connectivity.',
        ]}
        related={[
          { label: 'eSIM Guide', href: '/china-basics/how-to-get-internet/esim' },
          { label: 'Physical SIM', href: '/china-basics/how-to-get-internet/physical-sim' },
          { label: 'Airalo eSIM', href: '/china-basics/how-to-get-internet/airalo-esim' },
          { label: 'Holafly eSIM', href: '/china-basics/how-to-get-internet/holafly-esim' },
          { label: 'VPN Guide', href: '/china-basics/what-apps-to-use/vpn' },
        ]}
        relatedArticles={[
          { title: 'eSIM Guide', description: 'The easiest way to get online before you land.', href: '/china-basics/how-to-get-internet/esim' },
          { title: 'Physical SIM Guide', description: 'Best value and speed from local carriers.', href: '/china-basics/how-to-get-internet/physical-sim' },
          { title: 'Airalo eSIM', description: 'Affordable data plans that work right away.', href: '/china-basics/how-to-get-internet/airalo-esim' },
          { title: 'Holafly eSIM', description: 'Unlimited data eSIM for worry-free browsing.', href: '/china-basics/how-to-get-internet/holafly-esim' },
          { title: 'VPN Guide', description: 'Access blocked sites with a reliable VPN.', href: '/china-basics/what-apps-to-use/vpn' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🔒"
          title="Download a VPN Before You Fly"
          description="China blocks Google, WhatsApp, and Instagram. A VPN is non-negotiable — install it before arrival."
          buttonText="See VPN Recommendations →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="primary"
        />
      </div>
    </div>
  )
}
