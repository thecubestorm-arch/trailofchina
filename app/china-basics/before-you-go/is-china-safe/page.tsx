import type { Metadata } from 'next'
import ContextualCTA from '@/components/ContextualCTA'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Is China Safe? A Traveler\'s Safety Guide | Trail of China',
  description:
    'China is one of the safest countries for tourists. Learn about crime rates, common scams, women\'s safety, food safety, emergency numbers, and what to watch out for.',
}

export default function IsChinaSafePage() {
  return (
    <div>
      <GuideArticlePage
      heroImage={{ src: "https://picsum.photos/seed/china-safe-travel/800/400", alt: "Safety in China" }}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Basics', href: '/china-basics' },
        { label: 'Before You Go', href: '/china-basics/before-you-go' },
        { label: 'Is China Safe?', href: undefined },
      ]}
      category="Before You Go"
      title="Is China Safe?"
      intro="China is one of the safest countries in the world for tourists. Violent crime against foreigners is extremely rare, streets are well-lit and patrolled, and locals are generally helpful. Still, it pays to know the few risks that do exist — and how to avoid them."
      whyYouNeedThis={[
        'China has very low violent crime rates — safer than most Western cities for tourists.',
        'Understanding common scams (overpricing, fake taxis) saves you money and frustration.',
        'Knowing emergency numbers (110, 120, 119) gives you confidence if something goes wrong.',
        'Food and water safety basics prevent the most common travel illness in China.',
      ]}
      setupSteps={[
        {
          title: 'Understand the big picture: China is very safe',
          description:
            'Violent crime against tourists is rare. Muggings and armed robbery are almost unheard of in tourist areas. Cities have extensive CCTV coverage and police presence. The biggest "risk" most travelers face is being overcharged at a market — not physical harm.',
        },
        {
          title: 'Watch for petty theft and scams',
          description:
            'Pickpocketing exists but is uncommon — mostly in crowded markets, train stations, and tourist hotspots. Keep your phone and wallet in front pockets. Scams to watch for: taxi drivers who refuse the meter (insist on it or use Didi), tea house scams (friendly strangers inviting you to an expensive tea ceremony), and art gallery scams. At markets, prices are often inflated for foreigners — haggle confidently or shop at fixed-price stores.',
        },
        {
          title: 'Women travelers: generally very safe',
          description:
            'Street harassment is rare in China. Solo female travelers report feeling safe walking alone at night in most cities. Exercise the same caution you would anywhere: avoid poorly lit areas late at night, keep someone informed of your plans, and trust your instincts. Public transport is safe, though rush-hour crowds can be uncomfortable.',
        },
        {
          title: 'Night safety and public areas',
          description:
            'Most city centers are lively and safe well past midnight. Parks, shopping districts, and restaurant areas stay busy into the night. Avoid walking alone in isolated or unlit areas. If you feel unsafe, head to a convenience store (they are everywhere and open late) or a hotel lobby.',
        },
        {
          title: 'Food safety: mostly fine, use common sense',
          description:
            'Street food is generally safe if you follow basic rules: eat where locals are lining up, avoid raw or undercooked meat, and skip unpeeled fruit from street vendors. Stick to busy stalls with high turnover. Restaurant food is reliably safe in cities. Tap water is NOT drinkable — always drink bottled or boiled water.',
        },
        {
          title: 'Health and air quality',
          description:
            'Air quality can be poor in major cities (Beijing, Shanghai, Chengdu) especially in winter. Consider bringing a reusable N95 mask if you are sensitive. Tap water is not drinkable — buy bottled water or use a kettle. Pharmacies are common and carry most basic medications. For serious issues, international hospitals in major cities have English-speaking staff.',
        },
        {
          title: 'Save these emergency numbers',
          description:
            'Police: 110 | Ambulance: 120 | Fire: 119 | These work from any phone, including without a SIM card. Add them to your phone before arrival. The 110 police number is widely understood and operators in major cities often have basic English skills.',
        },
      ]}
      proTips={[
        'Download offline maps before arrival — they help you navigate without needing internet or a SIM.',
        'Take a photo of your passport and visa and store it in cloud storage. Also keep a printed copy separate from your passport.',
        'Use Didi (ride-hailing app) instead of hailing taxis on the street — prices are fixed and trackable.',
        'If you lose your passport, report it to the nearest police station immediately and contact your embassy.',
        'Travel insurance is strongly recommended — medical care for foreigners is cash-up-front at most hospitals.',
        'Carry toilet paper and hand sanitizer — public restrooms often lack both.',
      ]}
      relatedArticles={[
        { title: 'Visa Guide', description: 'Do you need a visa? Types, processing, and visa-free entry.', href: '/china-basics/how-china-differs/visa-guide' },
        { title: 'Packing List', description: 'What to bring — and what to leave at home.', href: '/china-basics/before-you-go/packing-list' },
        { title: 'Censorship & Internet', description: 'What\'s blocked and how to stay connected.', href: '/china-basics/how-china-differs/censorship' },
        { title: 'Passport Rules', description: 'Entry requirements and passport validity.', href: '/china-basics/how-china-differs/passport-rules' },
      ]}
      related={[
        { label: 'Before You Go', href: '/china-basics/before-you-go' },
        { label: 'Visa Guide', href: '/china-basics/how-china-differs/visa-guide' },
        { label: 'Packing List', href: '/china-basics/before-you-go/packing-list' },
        { label: 'Censorship', href: '/china-basics/how-china-differs/censorship' },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <ContextualCTA
        icon="📋"
        title="Ready to Plan?"
        description="Download our free China Cheat Sheet — quick reference for phrases, etiquette, and essentials."
        buttonText="Get the Cheat Sheet →"
        buttonHref="#cheat-sheet"
        variant="secondary"
      />
    </div>
  </div>
)
}
