import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Meituan App Guide: Food Delivery, Hotels & Deals in China | Trail of China',
  description:
    'Complete guide to Meituan (美团): order food delivery, book hotels, buy movie tickets, and get group deals. Setup tips for foreign travelers in China.',
}

export default function MeituanPage() {
  return (
    <GuideArticlePage
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' }, { label: 'Meituan' }]}
      relatedArticles={[
        { title: 'Alipay Guide', description: 'Pay for Meituan orders with Alipay.', href: '/china-basics/what-apps-to-use/alipay' },
        { title: 'Payment Apps Overview', description: 'Why you need Alipay and WeChat Pay in cashless China.', href: '/china-basics/what-apps-to-use/payment' },
      ]}
      category="What Apps to Use"
      title="Meituan App Guide: Food Delivery, Hotels & Deals in China"
      intro="Meituan is China's super-app for food delivery, hotel bookings, movie tickets, and group buying deals. Often called the 'Everything App,' Meituan serves over 600 million users monthly and powers nearly half of China's food delivery orders. As a foreign traveler, Meituan is essential for finding authentic local food and securing discounted experiences."
      whyYouNeedThis={[
        'Meituan dominates China\'s food delivery market with over 50% share — restaurants expect Meituan orders.',
        'Hotel deals are often 20-40% cheaper through Meituan than booking directly at the front desk.',
        'Movie tickets are cheaper on Meituan, and you can skip ticket counter lines entirely.',
        'Group buying (团购) on Meituan offers discounted spa treatments, escape rooms, and local experiences.',
        'Bike sharing integration means you can unlock Meituan bikes directly without separate app downloads.',
      ]}
      setupSteps={[
        {
          title: 'Download Meituan and set language to English',
          description:
            'Search for "Meituan" in your app store or download from the official website. On first launch, tap your profile icon and navigate to Settings → Language to switch to English. Note that Meituan\'s English support is limited to essential functions — you\'ll encounter Chinese text for menus and merchant details.',
        },
        {
          title: 'Create an account with your phone number',
          description:
            'Enter your international phone number with country code (e.g., +1 for US, +44 for UK). You will receive an SMS verification code. Meituan requires phone verification for all users to prevent spam. Keep your phone signal strong during registration — international SMS delivery can take 3-5 minutes.',
        },
        {
          title: 'Link payment methods',
          description:
            'Go to My → Wallet → Add Payment Method. Meituan accepts Alipay, WeChat Pay, and international cards through Alipay partnerships. For tourists, the most reliable option is linking Alipay (which you set up in Step 1) and using Alipay as your default payment method within Meituan.',
        },
        {
          title: 'Complete identity verification (if needed)',
          description:
            'For orders above ¥200 or hotel bookings, you may need to verify your passport. Go to My → Identity Verification and upload a photo of your passport. This step is required for hotel check-ins and some high-value transactions.',
        },
        {
          title: 'Test with a small food delivery',
          description:
            'Order a ¥15-20 meal from a nearby restaurant. Search for "food" (食物) or "delivery" (外卖), select a popular restaurant, add items to cart, and proceed to checkout. Meituan will show delivery fees based on your distance from the restaurant.',
        },
      ]}
      proTips={[
        'Search in pinyin (Romanized Chinese) if you can\'t read Chinese characters — type "yi dian" for "coffee" or "fan cai" for "rice dishes".',
        'Delivery fees typically range from ¥3-8 based on distance — orders over ¥50 often qualify for free delivery.',
        'Minimum order amounts vary by restaurant (usually ¥15-30). Combine orders with travel companions to meet minimums and split delivery fees.',
        'Use the "GroupBuying" (团购) section for discounted spa treatments, hot pot meals, and local experiences. These deals often require advance booking and have time limits for usage.',
        'Meituan\'s bike-sharing integration means you can rent bikes without the separate Mobike or Hellobike apps — just look for the bike icon in the main Meituan menu.',
        'Save screenshots of your order confirmations and delivery tracking — Meituan\'s customer support can be difficult to reach if you don\'t speak Chinese.',
      ]}
      scamAlerts={[
        'Only order from restaurants with verified "Official Store" badges or high ratings (4.7+ stars). Unverified restaurants may have higher prices or poor quality.',
        'Beware of "group buying" scams where fake deals promise discounts but never materialize. Stick to Meituan\'s official GroupBuying section with clearly stated terms.',
        'If a merchant asks you to pay outside Meituan (cash or direct transfer), decline — Meituan offers buyer protection only for in-app transactions.',
        'Don\'t use third-party Meituan codes or coupons from unknown websites — many are expired or fraudulent.',
      ]}
      related={[
        { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
        { label: 'WeChat Pay Guide', href: '/china-basics/what-apps-to-use/wechat-pay' },
        { label: 'Payment Apps Overview', href: '/china-basics/what-apps-to-use/payment' },
        { label: 'Travel Booking', href: '/china-basics/what-apps-to-use/travel' },
        { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
      ]}
    />
  )
}
