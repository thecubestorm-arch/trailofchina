import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Payment Apps: Alipay and WeChat Pay',
  description:
    'Step-by-step setup for Alipay and WeChat Pay, including card linking, identity checks, and payment backup strategy.',
}

export default function PaymentAppsPage() {
  return (
    <GuideArticlePage
      category="What Apps to Use"
      title="Payment Apps: Alipay and WeChat Pay"
      intro="Most stores, taxis, and convenience shops in China prefer QR payments. Setting up both apps gives you redundancy if one account is limited or a merchant only accepts one platform."
      whyYouNeedThis={[
        'Cash is still accepted, but digital payment is the normal flow for transport, food, and tickets.',
        'Some merchants support only Alipay or only WeChat Pay, so having both reduces friction.',
        'A verified wallet helps with online bookings and mini-program purchases.',
      ]}
      setupSteps={[
        {
          title: 'Install both apps and switch language settings',
          description:
            'Install Alipay and WeChat, then set interface language to English where available so verification prompts are clearer.',
        },
        {
          title: 'Link an international bank card',
          description:
            'Add your Visa or Mastercard in each app. Enter cardholder name exactly as on the card to avoid automated mismatch flags.',
        },
        {
          title: 'Complete identity verification',
          description:
            'Upload passport details when requested. Some features stay locked until identity review is complete, so do this before flying.',
        },
        {
          title: 'Test a small payment',
          description:
            'Run a low-value transaction, such as a convenience store purchase, and confirm push notifications and receipts are working.',
        },
      ]}
      proTips={[
        'Turn on biometric login so QR payments are faster in crowded places.',
        'Carry one backup physical card in case app verification is delayed.',
        'Save screenshots of your wallet profile and card status before departure.',
      ]}
      scamAlerts={[
        'Do not scan random QR codes handed to you on the street; pay only on official merchant terminals.',
        'If a stranger offers to “help verify” your account, decline and use in-app support only.',
      ]}
      related={[
        { label: 'Maps Apps', href: '/china-basics/what-apps-to-use/maps' },
        { label: 'Travel Booking Apps', href: '/china-basics/what-apps-to-use/travel' },
        { label: 'Internet Setup', href: '/china-basics/how-to-get-internet' },
      ]}
    />
  )
}
