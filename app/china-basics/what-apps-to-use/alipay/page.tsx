import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Alipay in China: Complete Setup Guide for Foreigners',
  description:
    'Step-by-step guide to setting up Alipay as a foreigner in China. Link international cards, verify identity, and pay everywhere like a local.',
}

export default function AlipayPage() {
  return (
    <GuideArticlePage
      category="What Apps to Use"
      title="Alipay in China: Complete Setup Guide for Foreigners"
      intro="Alipay is China's most widely used payment platform, accepted by over 10 million merchants nationwide. As a foreigner, you can now link international Visa and Mastercard cards directly — making it possible to pay for almost everything without cash."
      whyYouNeedThis={[
        'Over 90% of merchants in China accept Alipay, from street food stalls to high-speed train bookings.',
        'Many smaller businesses no longer accept cash or prefer not to deal with change.',
        'Alipay mini-programs let you book hotels, order food delivery, and buy train tickets without downloading separate apps.',
        'Having Alipay set up before arrival eliminates the stress of finding ATMs or exchanging large amounts of cash.',
      ]}
      setupSteps={[
        {
          title: 'Download Alipay and set language to English',
          description:
            'Download Alipay from your app store. On first launch, switch the language to English in Settings (Me → Settings → General → Language). The English interface is not complete but covers all essential functions.',
        },
        {
          title: 'Create an account with your phone number',
          description:
            'Use your home country phone number to register. You will receive an SMS verification code. Write down your login details — recovering a Chinese app account from abroad can be frustrating.',
        },
        {
          title: 'Link your international credit or debit card',
          description:
            'Go to Me → Bank Cards → Add Card. Select "International Card" and enter your Visa or Mastercard details. The name must match your passport exactly. Alipay now supports foreign cards through a partnership with Adyen, though a small 3% surcharge may apply on transactions over ¥200.',
        },
        {
          title: 'Complete identity verification',
          description:
            'Go to Me → Identity Verification and upload photos of your passport. This is required for payments above ¥1,000 and for features like ride-hailing. Verification typically takes 1-3 business days but can be instant for some passports.',
        },
        {
          title: 'Enable payment passwords and biometrics',
          description:
            'Set a 6-digit payment PIN and enable Face ID or fingerprint authentication. This makes QR code payments much faster — essential for the rapid pace of Chinese checkout lines.',
        },
        {
          title: 'Test with a small purchase',
          description:
            'Try buying a bottle of water at a convenience store (FamilyMart, 7-Eleven, Lawson). Open Alipay, tap Scan, and point your camera at the merchant QR code. The payment should process in seconds.',
        },
      ]}
      proTips={[
        'Enable "Auto-Translate" in Alipay settings to auto-translate merchant names and product descriptions.',
        'Use Alipay mini-programs for DiDi (ride-hailing), Meituan (food delivery), and 12306 (train tickets) — all in English inside Alipay.',
        'Take a screenshot of your payment QR code before entering areas with poor signal (subway stations, rural areas).',
        'If your card gets declined, try a different card or use the "Tour Pass" feature which lets you preload a balance from your credit card.',
        'Alipay works offline for showing your QR code — the merchant scans it and payment processes when signal returns.',
      ]}
      scamAlerts={[
        'Only scan QR codes displayed at official merchant counters. Never scan codes from strangers or printed on flyers.',
        'If someone asks you to transfer money via Alipay to "help" them, decline — this is a common tourist scam.',
        'Do not share your payment QR code screenshot with anyone; it can be used to initiate unwanted charges.',
      ]}
      related={[
        { label: 'WeChat Pay Guide', href: '/china-basics/what-apps-to-use/wechat-pay' },
        { label: 'Payment Apps Overview', href: '/china-basics/what-apps-to-use/payment' },
        { label: 'Internet Setup', href: '/china-basics/how-to-get-internet' },
        { label: 'Apps Overview', href: '/china-basics/what-apps-to-use' },
      ]}
    />
  )
}