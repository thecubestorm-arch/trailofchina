import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Payment Apps in China: Why You Need Alipay & WeChat Pay | Trail of China',
  description:
    'China is essentially cashless. Learn why Alipay and WeChat Pay are essential — not just for payments, but for transit, food delivery, mini-apps, and more.',
}

export default function PaymentAppsPage() {
  return (
    <div>
      <GuideArticlePage
        icon="💳"
        heroImage={{ src: 'https://picsum.photos/seed/payment-china/800/400', alt: 'Digital payment in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
          { label: 'Payment Apps' },
        ]}
        category="What Apps to Use"
        title="Payment Apps in China: Why You Need More Than Cash"
        intro="China has gone almost entirely cashless. Street vendors, taxi drivers, convenience stores, even temple donation boxes — they all use QR codes. If you show up with only cash, you will manage, but you will stand out and slow yourself down. Setting up Alipay and WeChat Pay before you arrive is one of the most important things you can do for a smooth trip."
        whyYouNeedThis={[
          '95%+ of transactions in major cities are mobile payments — cash is accepted but often inconvenient',
          'No need for small change — split bills, pay exact amounts, tip delivery drivers, all from your phone',
          'Subway and buses accept mobile payment at turnstiles — no ticket machines needed',
          'Online bookings (trains, hotels, event tickets) are easier with a verified payment app',
          'Foreign credit cards work — both Alipay and WeChat Pay now support Visa, Mastercard, and other international cards',
        ]}
        setupSteps={[
          {
            title: 'Get both Alipay and WeChat Pay',
            description: `They are free, and some merchants only accept one or the other. Having both means you are never stuck at a cash-only counter.`,
          },
          {
            title: 'Alipay first for standalone functionality',
            description: `If you must choose one first, go with Alipay — transit tickets, food delivery, hospital booking all work better inside Alipay.`,
          },
          {
            title: 'WeChat Pay first for social payments',
            description: `If you are traveling with Chinese friends or staying with locals, WeChat Pay is essential — red packets, splitting bills, and social transactions are its superpower.`,
          },
          {
            title: 'Link your international card before you arrive',
            description: `Both apps now support Visa and Mastercard. Name on card must match your passport. Do this at home with reliable Wi-Fi — you need internet to verify.`,
          },
          {
            title: 'Verify your identity with your passport',
            description: `Both apps may ask for passport verification. Have it ready. Processing takes 1–3 days but can be faster.`,
          },
          {
            title: 'Set a payment PIN and enable biometrics',
            description: `Create a 6-digit PIN and enable Face ID or fingerprint for faster payments — you will use this dozens of times per day in China.`,
          },
        ]}
        proTips={[
          'Set up before you arrive — you need internet to link your card and verify your identity. Do it at home with reliable Wi-Fi',
          'Link a foreign Visa or Mastercard — both apps now support international cards. A 1–3% foreign transaction fee may apply',
          'Carry backup cash — a few ¥100 bills for the rare cash-only situation (some small temples, remote areas)',
          'Verify your identity — both apps may ask for passport verification. Have it ready when setting up',
          'Keep both apps updated — China updates payment apps frequently; older versions may not work at some merchants',
        ]}
        related={[
          { label: 'Alipay', href: '/china-basics/what-apps-to-use/alipay' },
          { label: 'WeChat Pay', href: '/china-basics/what-apps-to-use/wechat-pay' },
          { label: 'VPN', href: '/china-basics/what-apps-to-use/vpn' },
          { label: 'eSIM', href: '/china-basics/how-to-get-internet/esim' },
        ]}
        relatedArticles={[
          {
            title: 'Alipay Setup Guide',
            description: 'Step-by-step Alipay setup for foreigners.',
            href: '/china-basics/what-apps-to-use/alipay',
          },
          {
            title: 'WeChat Pay Guide',
            description: 'Complete WeChat Pay walkthrough.',
            href: '/china-basics/what-apps-to-use/wechat-pay',
          },
          {
            title: 'How to Get Internet in China',
            description: 'eSIM, physical SIM, and Wi-Fi options for staying connected.',
            href: '/china-basics/how-to-get-internet',
          },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="📱"
          title="Stay Connected in China"
          description="Get an eSIM before you land and activate your payment apps the moment you arrive."
          buttonText="Get an eSIM →"
          buttonHref="/china-basics/how-to-get-internet/airalo-esim"
          variant="primary"
        />
      </div>
    </div>
  )
}
