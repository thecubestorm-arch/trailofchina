import type { Metadata } from 'next'
import ContextualCTA from '@/components/ContextualCTA'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Packing List for China: What to Bring & What to Skip | Trail of China',
  description:
    'The ultimate China packing checklist: documents, electronics, clothing, toiletries, money, and tech essentials. Plus what to leave at home.',
}

export default function PackingListPage() {
  return (
    <div>
      <GuideArticlePage
      heroImage={{ src: "https://picsum.photos/seed/packing-china/800/400", alt: "Packing for China" }}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Basics', href: '/china-basics' },
        { label: 'Before You Go', href: '/china-basics/before-you-go' },
        { label: 'Packing List', href: undefined },
      ]}
      category="Before You Go"
      title="Packing List for China"
      intro="Packing for China is straightforward once you know what matters. Bring the right documents, tech, and personal items — and leave expensive jewelry and excess valuables at home. This checklist covers everything from toilet paper to VPN apps."
      whyYouNeedThis={[
        'Public restrooms in China often lack toilet paper — bring your own or regret it.',
        'China uses unique power outlets (Type A and I) — a universal adapter is essential.',
        'You cannot download a VPN after arrival — install and test it before you fly.',
        'Alipay works best when set up before departure, not at the airport.',
      ]}
      setupSteps={[
        {
          title: 'Essential documents',
          description:
            'Passport (6+ months validity, 2+ blank pages). Printed visa confirmation if required. Travel insurance documents (paper + digital). Hotel addresses written in Chinese characters — taxi drivers rarely read English. Flight itineraries and booking confirmations. A photocopy of your passport stored separately from the original.',
        },
        {
          title: 'Electronics & power',
          description:
            'Universal travel adapter (China uses Type A and I plugs, 220V). Power bank — you will use your phone constantly for payments, maps, and translation. Unlocked smartphone (so you can use a Chinese SIM or eSIM). Charging cables (bring a spare). Consider a voltage converter if your devices do not support 220V (most modern chargers do).',
        },
        {
          title: 'Clothing & footwear',
          description:
            'Comfortable walking shoes with good grip — you will walk 15,000+ steps daily in cities. Layers: lightweight breathable clothes for outdoors, plus a light jacket because indoor air conditioning is aggressively cold. Modest clothing for temples (shoulders and knees covered). A compact umbrella or light rain jacket. Comfortable sandals for hotel rooms and casual wear.',
        },
        {
          title: 'Toiletries & personal care',
          description:
            'Toilet paper or travel tissues — public restrooms rarely provide it. Hand sanitizer and wet wipes — useful when soap is missing. Sunscreen (SPF 30+), sunglasses, and a hat — summer sun is intense. Any prescription medications in original packaging with a doctor\'s note. Basic first-aid kit: pain relievers, anti-diarrheal, band-aids, motion sickness tablets.',
        },
        {
          title: 'Money & payments',
          description:
            'Some cash in Chinese Yuan (CNY) — small vendors and rural areas still prefer cash. A working Alipay account set up and verified before departure. At least one backup credit or debit card. Notify your bank of travel dates to avoid card blocks. A small wallet or coin pouch for cash and receipts.',
        },
        {
          title: 'Tech & connectivity',
          description:
            'VPN app downloaded, installed, and tested before departure — you cannot download it in China. Offline maps downloaded (Google Maps offline works for saved areas; Baidu Maps for local navigation). Translation app with offline Chinese language pack. eSIM purchased and ready to activate, or a travel SIM plan. Messaging apps (WeChat) set up with key contacts added.',
        },
        {
          title: 'Leave these at home',
          description:
            'Expensive jewelry, large amounts of cash, and bulky valuables. China is safe, but flaunting wealth attracts unnecessary attention. Heavy books — use an e-reader or phone instead. Excessive toiletries — everything is available at local convenience stores (7-Eleven, FamilyMart) and supermarkets. A hard-shell large suitcase — soft bags are easier on trains and in compact hotel rooms.',
        },
      ]}
      proTips={[
        'Pack a day bag small enough for daily carry — you will need it for water, tissues, and shopping.',
        'Bring a reusable water bottle and fill it with boiled or bottled water. Tap water is not drinkable.',
        'Ziplock bags are surprisingly useful: wet clothes, leftover snacks, organizing cables.',
        'If you wear contact lenses, bring extra solution — brands differ in China and may not match your prescription.',
        'A portable door lock or doorstop adds peace of mind in budget accommodations.',
        'Pack earplugs and an eye mask — city noise and bright mornings are real.',
      ]}
      relatedArticles={[
        { title: 'Is China Safe?', description: 'Safety tips and what to expect as a tourist.', href: '/china-basics/before-you-go/is-china-safe' },
        { title: 'Visa Guide', description: 'Do you need a visa? Types, processing, and visa-free entry.', href: '/china-basics/how-china-differs/visa-guide' },
        { title: 'How to Get Internet', description: 'eSIMs, SIMs, and staying connected in China.', href: '/china-basics/how-to-get-internet' },
        { title: 'VPN Setup', description: 'Which VPNs work and how to set them up before arrival.', href: '/china-basics/what-apps-to-use/vpn' },
      ]}
      related={[
        { label: 'Before You Go', href: '/china-basics/before-you-go' },
        { label: 'Is China Safe?', href: '/china-basics/before-you-go/is-china-safe' },
        { label: 'Internet & eSIM', href: '/china-basics/how-to-get-internet' },
        { label: 'VPN Setup', href: '/china-basics/what-apps-to-use/vpn' },
      ]}
    />
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <ContextualCTA
        icon="🌐"
        title="Get an eSIM Before You Go"
        description="Stay connected in China with an eSIM — activate before you land."
        buttonText="Get an eSIM →"
        buttonHref="/china-basics/how-to-get-internet/airalo-esim"
        variant="primary"
      />
    </div>
  </div>
)
}
