import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Safety & Security in China | Trail of China',
  description:
    'Safety tips and how to stay secure while traveling in China. General safety, digital security, and emergency contacts.',
}

const tocItems = [
  { id: 'general-safety', title: 'General Safety' },
  { id: 'protecting-belongings', title: 'Protecting Your Belongings' },
  { id: 'digital-security', title: 'Digital Security' },
  { id: 'emergency-contacts', title: 'Emergency Contacts' },
]

const quickInfoPills = [
  'Violent crime is rare',
  'Police: 110',
  'Medical: 120',
]

export default function SecurityStandardsPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🛡️"
        heroImage={{ src: 'https://picsum.photos/seed/china-security-standards/800/400', alt: 'Safety and security in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Security Standards' },
        ]}
        category="How China Differs"
        title="Safety & Security in China"
        intro="China is generally very safe for travelers. Violent crime is rare. Here's how to protect yourself."
        whyYouNeedThis={[
          'China is generally safe, but transport hubs and tourist areas still attract pickpockets and opportunistic theft.',
          'Digital security matters because travelers rely heavily on phones, QR codes, payments, and public networks.',
          'Knowing the local emergency numbers saves time if something goes wrong.',
          'Basic preparation makes it easier to navigate unfamiliar places confidently and avoid preventable problems.',
        ]}
        proTips={[
          'Register with your embassy (recommended)',
          'Keep digital copies of passport and visa',
          "Learn your hotel's name and address in Chinese",
          'Trust your instincts - if something feels off, leave',
          'Most locals are genuinely helpful',
        ]}
        related={[
          { label: 'Passport Rules', href: '/china-basics/how-china-differs/passport-rules' },
          { label: 'Cultural Differences', href: '/china-basics/how-china-differs/cultural-differences' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
        ]}
        relatedArticles={[
          {
            title: 'Passport Rules',
            description: 'Entry and registration requirements.',
            href: '/china-basics/how-china-differs/passport-rules',
          },
          {
            title: 'Cultural Differences',
            description: 'What surprises Western visitors most.',
            href: '/china-basics/how-china-differs/cultural-differences',
          },
        ]}
        tocItems={tocItems}
      >
        <>
          <div className="flex flex-wrap gap-3">
            {quickInfoPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {pill}
              </span>
            ))}
          </div>

          <div>
            <h2 id="general-safety" className="text-2xl font-extrabold text-slate-900">
              General Safety
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Violent crime:</strong> Very rare against tourists</li>
              <li><strong>Walking at night:</strong> Generally safe in all major cities</li>
              <li><strong>Police presence:</strong> Heavy and visible</li>
              <li><strong>Pickpockets:</strong> Exist in tourist areas and transport hubs</li>
              <li><strong>Emergency number:</strong> 110 (police), 120 (medical)</li>
            </ul>
          </div>

          <div>
            <h2 id="protecting-belongings" className="text-2xl font-extrabold text-slate-900">
              Protecting Your Belongings
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Keep phone and wallet in front pockets</li>
              <li>Use crossbody bags, not backpacks, in crowds</li>
              <li>Be extra vigilant at train stations and tourist sites</li>
              <li>Don&apos;t leave bags unattended (even for photos)</li>
              <li>Use hotel safes for passports and extra cash</li>
            </ul>
          </div>

          <div>
            <h2 id="digital-security" className="text-2xl font-extrabold text-slate-900">
              Digital Security
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Use VPN on all devices</li>
              <li>Avoid public WiFi for banking</li>
              <li>Enable two-factor authentication</li>
              <li>Be cautious of QR codes (can be malicious)</li>
              <li>Keep apps updated</li>
            </ul>
          </div>

          <div id="emergency-contacts" className="rounded-xl border border-green-200 bg-green-50 p-5">
            <h2 className="text-2xl font-extrabold text-green-900">Emergency Contacts</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-green-950 md:text-base">
              <li>Police: 110</li>
              <li>Medical: 120</li>
              <li>Fire: 119</li>
              <li>Tourist Hotline: 12301</li>
            </ul>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🛂"
          title="Know the Rules Before You Go"
          description="Safety is easier when your documents and registration are handled correctly from day one."
          buttonText="See Passport Rules →"
          buttonHref="/china-basics/how-china-differs/passport-rules"
          variant="secondary"
        />
      </div>
    </div>
  )
}
