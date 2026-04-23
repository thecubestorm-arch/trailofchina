import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Holafly eSIM for China: Review, Pricing & Is It Worth It? (2025)',
  description:
    'Holafly eSIM for China — detailed review of unlimited data plans, speeds, and reliability. Compare with Airalo and find the best eSIM for your China trip.',
}

export default function HolaflyEsimPage() {
  return (
    <GuideArticlePage
      heroImage={{ src: "https://picsum.photos/seed/holafly-esim/800/400", alt: "Holafly eSIM for China" }}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' }, { label: 'Holafly eSIM' }]}
      relatedArticles={[
        { title: 'Airalo eSIM Guide', description: 'Compare with Airalo for budget eSIM options.', href: '/china-basics/how-to-get-internet/airalo-esim' },
        { title: 'How to Get Internet', description: 'All connectivity options for China travelers.', href: '/china-basics/how-to-get-internet' },
      ]}
      category="How to Get Internet"
      title="Holafly eSIM for China: Review, Pricing & Is It Worth It? (2025)"
      intro="Holafly differentiates itself from other eSIM providers with one key feature: unlimited data. For travelers who do not want to worry about gigabyte limits, Holafly offers peace of mind — but is it worth the premium price? Here is our honest review based on real usage in China."
      whyYouNeedThis={[
        'Unlimited data means zero anxiety about running out — stream, video call, and use maps without counting megabytes.',
        'Holafly supports tethering/hotspot, so you can share your connection with travel companions.',
        'Instant eSIM activation works on the same day as purchase — no waiting for shipping.',
        'Having reliable internet on arrival is essential for DiDi, maps, translation, and payment apps in China.',
      ]}
      setupSteps={[
        {
          title: 'Check phone compatibility and purchase',
          description:
            'Confirm your phone supports eSIM (iPhone XS+, Pixel 3+, Galaxy S20+). Visit holafly.com, select China, and choose your plan: 5 days ($19), 10 days ($27), 15 days ($34), 20 days ($39), 30 days ($49), 60 days ($69), 90 days ($97). Prices are higher than Airalo but include unlimited data.',
        },
        {
          title: 'Install the eSIM via QR code',
          description:
            'After purchase, Holafly emails a QR code. Open Settings → Mobile Data → Add eSIM and scan the QR code. The eSIM installs in under 2 minutes. Do this before you leave home — you need WiFi for installation.',
        },
        {
          title: 'Configure dual SIM settings on arrival',
          description:
            'In China, go to Settings → Mobile Data. Set the Holafly eSIM as your data line and enable Data Roaming for it. Keep your home SIM active for calls and SMS. Turn off Data Roaming on your home SIM to avoid roaming charges.',
        },
        {
          title: 'Verify connection and test speed',
          description:
            'Open a speed test app or browse a website to confirm data is working. Holafly connects to China Unicom by default. Speeds typically range from 5-30 Mbps in cities — fast enough for maps, messaging, and video calls.',
        },
      ]}
      proTips={[
        'Holafly uses China Unicom — coverage is excellent in cities and major tourist areas but can be weak in remote regions.',
        'Unlimited data is throttled after a certain threshold (typically 1-2 GB per day at full speed, then reduced). Check current terms on Holafly\'s website.',
        'The Great Firewall blocks Google, Meta, and many Western apps — Holafly data does NOT bypass censorship. You still need a VPN.',
        'Holafly offers 24/7 customer support via chat, which is helpful if something goes wrong mid-trip.',
        'If traveling with others, you can share your connection via hotspot — a big advantage over data-capped eSIMs.',
      ]}
      related={[
        { label: 'Airalo eSIM Review', href: '/china-basics/how-to-get-internet/airalo-esim' },
        { label: 'Internet in China Overview', href: '/china-basics/how-to-get-internet' },
        { label: 'eSIM Guide', href: '/china-basics/how-to-get-internet/esim' },
        { label: 'VPN & Censorship', href: '/china-basics/how-china-differs/censorship' },
      ]}
    />
  )
}