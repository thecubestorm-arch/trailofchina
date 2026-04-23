import type { Metadata } from 'next'
import ContextualCTA from '@/components/ContextualCTA'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Maps Apps for China',
  description:
    'Choose the best map tools for China travel, including local app options, offline backups, and translation tactics.',
}

export default function MapsAppsPage() {
  return (
    <div>
      <GuideArticlePage
      icon="/images/icons/baidu.svg"
      heroImage={{ src: "https://picsum.photos/seed/china-maps/800/400", alt: "Navigation in China" }}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' }, { label: 'Maps' }]}
      relatedArticles={[
        { title: 'How to Get Around', description: 'Navigation tips for trains, metro, and taxis.', href: '/china-basics/how-to-get-around' },
        { title: 'Didi Guide', description: 'Ride-hailing with built-in navigation.', href: '/china-basics/what-apps-to-use/didi' },
      ]}
      category="What Apps to Use"
      title="Maps Apps for China"
      intro="Standard global maps can miss details or use different naming conventions. A local-first map stack helps you find exact metro exits, shopping malls, and pickup points."
      whyYouNeedThis={[
        'Chinese addresses are often easier to locate with Chinese text input.',
        'Accurate pin drops matter for ride-hailing and delivery-style pickup zones.',
        'Offline map access is useful when switching SIMs or during weak signal periods.',
      ]}
      setupSteps={[
        {
          title: 'Install one global map and one China-focused map',
          description:
            'Use a familiar global app for planning and a local app such as Amap/Baidu Maps for on-the-ground accuracy.',
        },
        {
          title: 'Pre-save hotel and station names in Chinese',
          description:
            'Ask your hotel for its name and address in Chinese characters so taxi drivers and map search can match exactly.',
        },
        {
          title: 'Download offline zones for your arrival city',
          description:
            'Keep an offline layer for airport transfers and initial navigation if your mobile data setup is delayed.',
        },
        {
          title: 'Create favorites for repeated locations',
          description:
            'Pin hotels, major attractions, rail stations, and embassy contacts before each city transfer day.',
        },
      ]}
      proTips={[
        'Use screenshot translation for Chinese-only POI details.',
        'Share precise map pins in WeChat when meeting local guides or drivers.',
        'Include nearest metro exit number in your notes for faster navigation.',
      ]}
      related={[
        { label: 'DiDi and Travel Apps', href: '/china-basics/what-apps-to-use/travel' },
        { label: 'Metro and Subway Guide', href: '/china-basics/how-to-get-around/metro-subway' },
        { label: 'Shanghai Local Tips', href: '/destinations/shanghai/local-tips' },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <ContextualCTA
        icon="🌐"
        title="Need Internet in China?"
        description="Get an eSIM before you go and stay connected the moment you land."
        buttonText="Get an eSIM →"
        buttonHref="/china-basics/how-to-get-internet/airalo-esim"
        variant="secondary"
      />
    </div>
  </div>
)
}
