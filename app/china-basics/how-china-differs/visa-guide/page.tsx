import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'China Visa Guide: Everything You Need to Know (2025) | Trail of China',
  description:
    'Complete China visa guide for tourists — L visa, M visa, transit visas, 144-hour visa-free entry, and Swiss/EU citizen info.',
}

export default function VisaGuidePage() {
  return (
    <GuideArticlePage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Basics', href: '/china-basics' },
        { label: 'How China Differs', href: '/china-basics/how-china-differs' },
        { label: 'Visa Guide', href: undefined }
      ]}
      category="How China Differs"
      title="China Visa Guide: Everything You Need to Know (2025)"
      intro="Getting a China visa can feel intimidating, but the process is straightforward once you understand the requirements. This guide covers everything — visa types, application steps, costs, processing times, and the latest visa-free entry policies for eligible nationalities."
      whyYouNeedThis={[
        'Most nationalities need a visa to enter China — arriving without one means being turned away at the border.',
        'Applying early (4-6 weeks before travel) avoids stress and expensive rush fees.',
        'Understanding which visa type you need (L tourist, M business, transit) prevents application rejections.',
        'Some nationalities now qualify for visa-free entry (15-30 days) — you might not need a visa at all.',
      ]}
      setupSteps={[
        {
          title: 'Check if you qualify for visa-free entry',
          description:
            'As of 2025, China offers visa-free entry (15-30 days) to citizens of many countries including France, Germany, Italy, Spain, Malaysia, Thailand, Singapore, and more. Check the latest list on the Chinese embassy website for your nationality. Swiss citizens currently qualify for 15-day visa-free entry.',
        },
        {
          title: 'Determine your visa type',
          description:
            'L Visa (Tourist): For sightseeing, visiting friends/family. Most common. M Visa (Business): For meetings, trade fairs, business negotiations. G Visa (Transit): For transiting through China (often not needed for stays under 24-72 hours in some cities). Q Visa (Family): For visiting Chinese relatives.',
        },
        {
          title: 'Prepare your documents',
          description:
            'You need: (1) Valid passport with 6+ months remaining and 2+ blank pages, (2) Completed visa application form (via China Online Visa Application — COVA), (3) Recent passport photo (33mm x 48mm, white background), (4) Round-trip flight itinerary, (5) Hotel bookings or invitation letter, (6) Bank statements showing sufficient funds.',
        },
        {
          title: 'Submit your application',
          description:
            'Submit in person or by mail to the Chinese Visa Application Service Center (CVASC) in your country. Some countries now allow online submission. Processing typically takes 4-5 business days. Expedited processing (2-3 days) is available for an extra fee.',
        },
        {
          title: 'Collect your visa and verify details',
          description:
            'Check your visa sticker for: correct name, passport number, validity dates, number of entries (1, 2, or multiple), and duration of stay per entry. Errors must be corrected before travel.',
        },
      ]}
      proTips={[
        'Apply 4-6 weeks before your trip — standard processing is 4-5 business days but delays can happen.',
        'Multiple-entry visas are worth requesting if you plan to visit Hong Kong/Macau and re-enter mainland China.',
        'The 10-year L visa is available to US, UK, Canadian, and some EU citizens — request it if eligible for future flexibility.',
        'Keep copies of your visa, passport, and itinerary in a separate bag. Also save digital copies in cloud storage.',
        'Register with your country\'s embassy in China for safety alerts and emergency assistance.',
        'Swiss and EU citizens: check the latest visa-free policy before applying — China has been expanding visa-free entry and policies change frequently.',
      ]}
      scamAlerts={[
        'Only apply through official Chinese Visa Application Service Centers (CVASC) — third-party agencies charge unnecessary markups.',
        'Never accept "visa on arrival" offers from unofficial sources — China does not offer visa on arrival for most nationalities.',
        'Some visa agencies promise "guaranteed approval" — this is impossible. Visa decisions are always at the discretion of the consulate.',
        'Beware of fake invitation letters — using fraudulent documents can result in a permanent visa ban.',
      ]}
      relatedArticles={[
        { title: 'Passport Rules in China', description: 'Entry requirements, passport validity, and registration rules.', href: '/china-basics/how-china-differs/passport-rules' },
        { title: 'How China Differs', description: 'Cultural differences, censorship, and safety standards.', href: '/china-basics/how-china-differs' },
      ]}
      related={[
        { label: 'How China Differs', href: '/china-basics/how-china-differs' },
        { label: 'Passport Rules', href: '/china-basics/how-china-differs/passport-rules' },
        { label: 'Internet & VPN', href: '/china-basics/how-to-get-internet' },
        { label: 'Apps You Need', href: '/china-basics/what-apps-to-use' },
      ]}
    />
  )
}