import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'VPN Guide for China Travel',
  description:
    'Plan a reliable VPN setup for China before departure, including backup access methods and stability tips.',
}

export default function VpnGuidePage() {
  return (
    <div>
      <GuideArticlePage
      category="What Apps to Use"
      title="VPN Guide for China Travel"
      intro="If you rely on global services for work or communication, configure your VPN before arrival. Last-minute setup inside China can be unreliable."
      whyYouNeedThis={[
        'Access behavior differs by network and region, so a pre-tested setup avoids disruption.',
        'Backup server profiles improve reliability during peak usage hours.',
        'A VPN can be critical for remote workers who need stable access to global tools.',
      ]}
      setupSteps={[
        {
          title: 'Install and test before flying',
          description:
            'Complete installation and account activation at home, then verify connection speed on both Wi-Fi and mobile networks.',
        },
        {
          title: 'Add at least two protocol/server options',
          description:
            'Configure multiple connection modes so you can switch quickly if one profile becomes unstable.',
        },
        {
          title: 'Enable auto-connect on insecure networks',
          description:
            'For airport or hotel Wi-Fi, auto-connect helps protect your session and reduces manual setup each time.',
        },
        {
          title: 'Keep support docs accessible offline',
          description:
            'Save troubleshooting steps as screenshots or notes in case you cannot load support pages during an outage.',
        },
      ]}
      proTips={[
        'Test your VPN right after hotel check-in in each new city.',
        'Use wired or high-quality hotel Wi-Fi for important meetings.',
        'Maintain one non-VPN fallback workflow for local services that work better directly.',
      ]}
      scamAlerts={[
        'Avoid unknown “free VPN” links shared in travel chat groups; many harvest data or credentials.',
        'Do not purchase VPN accounts from street vendors or unofficial QR posters.',
      ]}
      related={[
        { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
        { label: 'eSIM Guide', href: '/china-basics/how-to-get-internet/esim' },
        { label: 'Communication App', href: '/china-basics/what-apps-to-use/communication' },
      ]}
      />
      <div className="mt-8">
        <ContextualCTA
          icon="🔒"
          title="Don't Wait Until You Land"
          description="Install your VPN before entering China — the download sites are blocked otherwise."
          buttonText="Get ExpressVPN →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="secondary"
        />
      </div>
    </div>
  )
}
