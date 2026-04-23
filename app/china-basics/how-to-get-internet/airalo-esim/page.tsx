import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Airalo eSIM for China: Honest Review & Setup Guide (2025)',
  description:
    'Airalo eSIM for China — honest review of coverage, speed, pricing, and setup. Is it the best eSIM for China travelers? Pros, cons, and alternatives.',
}

export default function AiraloEsimPage() {
  return (
    <GuideArticlePage
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' }, { label: 'Airalo eSIM' }]}
      relatedArticles={[
        { title: 'Holafly eSIM Guide', description: 'Compare with Holafly for unlimited data eSIM.', href: '/china-basics/how-to-get-internet/holafly-esim' },
        { title: 'How to Get Internet', description: 'All connectivity options for China travelers.', href: '/china-basics/how-to-get-internet' },
      ]}
      category="How to Get Internet"
      title="Airalo eSIM for China: Honest Review & Setup Guide (2025)"
      intro="Airalo is one of the most popular eSIM providers for China travelers, offering affordable data plans that activate instantly without swapping physical SIM cards. But how well does it actually work on the ground? Here is our honest, experience-based review."
      whyYouNeedThis={[
        'An eSIM lets you keep your home SIM for calls/texts while getting local data in China — no physical SIM swap needed.',
        'Airalo offers some of the cheapest China data plans on the market, starting at just a few dollars.',
        'Instant activation means you land with working internet — no hunting for a SIM card shop at the airport.',
        'Having data on arrival is essential for ride-hailing, maps, translation apps, and payment apps like Alipay.',
      ]}
      setupSteps={[
        {
          title: 'Check eSIM compatibility on your phone',
          description:
            'Most iPhones (XS and newer), Google Pixels (3 and newer), and many Samsung Galaxy phones support eSIM. Check your phone settings under "SIM" or "Mobile Data" — if you see "Add eSIM" or "Add Mobile Plan," your phone supports it.',
        },
        {
          title: 'Download the Airalo app and create an account',
          description:
            'Download Airalo from the App Store or Google Play. Create an account with your email — this is where your eSIMs and purchase history live.',
        },
        {
          title: 'Purchase the China eSIM plan',
          description:
            'Search for "China" in Airalo. Plans include: 1GB/7 days (~$5), 3GB/30 days (~$13), 5GB/30 days (~$18), 10GB/30 days (~$28). Choose based on your trip length and data needs. 5GB is enough for most 2-week trips.',
        },
        {
          title: 'Install the eSIM before departure',
          description:
            'After purchase, tap "Install eSIM" and follow the on-screen instructions. The eSIM activates only when you arrive in China — install it at home while you have good WiFi.',
        },
        {
          title: 'Configure data settings on arrival',
          description:
            'Once in China, go to Settings → Mobile Data and set the Airalo eSIM as your data line. Turn on "Data Roaming" for the eSIM line. Your home SIM stays active for calls and texts.',
        },
      ]}
      proTips={[
        'Install the eSIM before you leave home — you need WiFi for the initial download and activation.',
        'Airalo uses local carrier networks (China Unicom or China Telecom) — coverage is solid in cities but can be spotty in rural areas.',
        'The Great Firewall blocks Google, Meta, and many Western apps — Airalo data does NOT bypass censorship. You still need a VPN for that.',
        'Airalo eSIMs are data-only — you cannot receive SMS or make phone calls on the eSIM number.',
        'Screenshot your eSIM QR code as a backup in case you need to reinstall.',
      ]}
      related={[
        { label: 'Holafly eSIM Review', href: '/china-basics/how-to-get-internet/holafly-esim' },
        { label: 'Internet in China Overview', href: '/china-basics/how-to-get-internet' },
        { label: 'eSIM Guide', href: '/china-basics/how-to-get-internet/esim' },
        { label: 'VPN & Censorship', href: '/china-basics/how-china-differs/censorship' },
      ]}
    />
  )
}