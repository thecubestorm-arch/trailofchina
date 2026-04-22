import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'WeChat Pay in China: The Ultimate Foreigner\'s Guide',
  description:
    'How to set up WeChat Pay as a tourist in China. Link international credit cards, send hongbao, scan QR codes, and pay like 1.3 billion locals.',
}

export default function WeChatPayPage() {
  return (
    <GuideArticlePage
      category="What Apps to Use"
      title="WeChat Pay in China: The Ultimate Foreigner's Guide"
      intro="WeChat Pay is built into China's most essential app — WeChat. With over 1.3 billion users, it's how China pays for everything from street snacks to utility bills. The good news: foreigners can now link international cards directly."
      whyYouNeedThis={[
        'WeChat is China\'s everything app — messaging, social media, payments, ride-hailing, and mini-programs all in one.',
        'Some merchants and services only accept WeChat Pay, not Alipay, especially in smaller cities.',
        'WeChat Pay lets you send and receive money from Chinese friends, split bills, and send hongbao (red envelopes).',
        'Mini-programs inside WeChat handle hotel bookings, food delivery, museum tickets, and more — most require WeChat Pay.',
      ]}
      setupSteps={[
        {
          title: 'Download WeChat and create an account',
          description:
            'Download WeChat from your app store and register with your phone number. You will need at least one contact on WeChat to verify your account — ask a friend or use the "shake" feature to find nearby users.',
        },
        {
          title: 'Set up WeChat Pay',
          description:
            'Open WeChat → Me → Services → Wallet → Add Bank Card. Select "International Card" and enter your Visa or Mastercard. Name on card must exactly match your passport name.',
        },
        {
          title: 'Verify your identity',
          description:
            'WeChat requires identity verification for foreign users. Go to Me → Settings → Account Security → Identity Verification. Upload your passport photo page. Processing takes 1-3 days but can be faster.',
        },
        {
          title: 'Set a payment PIN and enable biometrics',
          description:
            'Create a 6-digit payment PIN. Enable Face ID or fingerprint for faster payments — you will use this dozens of times per day in China.',
        },
        {
          title: 'Practice scanning and being scanned',
          description:
            'Two payment modes: "Scan" (you scan merchant QR code) and "Money" (merchant scans your QR code). Try both at a convenience store. Most transactions under ¥1,000 work immediately.',
        },
      ]}
      proTips={[
        'WeChat Pay has a "Tour Pass" feature for tourists that lets you preload funds — useful if direct card payments are declined.',
        'The hongbao (red envelope) feature is fun and cultural — send small amounts to Chinese friends for good luck during holidays.',
        'Screenshot your WeChat Pay QR code before going to areas with poor signal. Merchants can scan it even without active internet on your end.',
        'WeChat mini-programs are incredibly powerful — you can order Didi rides, book hotels, buy train tickets, and order food delivery all without leaving WeChat.',
        'Group payment feature ("AA Pay") lets you split bills with friends — very useful when traveling in a group.',
      ]}
      scamAlerts={[
        'Never send money to people you just met online through WeChat — romance and investment scams targeting foreigners are common.',
        'Be cautious of "friend requests" from strangers asking you to transfer money — always verify identity through other channels.',
        'Only scan QR codes at official merchant counters, not from random people or flyers.',
      ]}
      related={[
        { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
        { label: 'Payment Apps Overview', href: '/china-basics/what-apps-to-use/payment' },
        { label: 'Internet Setup', href: '/china-basics/how-to-get-internet' },
        { label: 'Apps Overview', href: '/china-basics/what-apps-to-use' },
      ]}
    />
  )
}