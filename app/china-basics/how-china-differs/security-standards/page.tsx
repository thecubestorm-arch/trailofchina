import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'Safety & Security in China | Trail of China',
  description:
    'Safety tips and how to stay secure while traveling in China. General safety, digital security, and emergency contacts.',
};

export default function SecurityStandardsPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🔒"
        heroImage={{ src: 'https://picsum.photos/seed/china-safety-security/800/400', alt: 'Safety & Security in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Security Standards' },
        ]}
        category="How China Differs"
        title="Safety & Security in China"
        intro="China is generally very safe for travelers. Violent crime is rare. Here's how to protect yourself."
        proTips={[
          'Register with your embassy (recommended)',
          'Keep digital copies of passport and visa',
          'Learn your hotel\'s name and address in Chinese',
          'Trust your instincts — if something feels off, leave',
          'Most locals are genuinely helpful',
        ]}
        related={[
          { label: 'Passport Rules', href: '/china-basics/how-china-differs/passport-rules' },
          { label: 'Cultural Differences', href: '/china-basics/how-china-differs/cultural-differences' },
        ]}
        relatedArticles={[
          { title: 'Passport Rules', description: 'Entry and registration requirements.', href: '/china-basics/how-china-differs/passport-rules' },
          { title: 'Cultural Differences', description: 'What surprises Western visitors most.', href: '/china-basics/how-china-differs/cultural-differences' },
        ]}
        tocItems={[
          { id: 'general-safety', title: 'General Safety' },
          { id: 'protecting-belongings', title: 'Protecting Your Belongings' },
          { id: 'digital-security', title: 'Digital Security' },
          { id: 'emergency-contacts', title: 'Emergency Contacts' },
        ]}
      >
        {/* General Safety */}
        <div id="general-safety" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">General Safety</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Violent crime:</strong> Very rare against tourists</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Walking at night:</strong> Generally safe in all major cities</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Police presence:</strong> Heavy and visible</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Pickpockets:</strong> Exist in tourist areas and transport hubs</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Emergency number:</strong> 110 (police), 120 (medical)</li>
          </ul>
        </div>

        {/* Protecting Your Belongings */}
        <div id="protecting-belongings" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Protecting Your Belongings</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Keep phone and wallet in front pockets</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Use crossbody bags, not backpacks, in crowds</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Be extra vigilant at train stations and tourist sites</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Don't leave bags unattended (even for photos)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Use hotel safes for passports and extra cash</li>
          </ul>
        </div>

        {/* Digital Security */}
        <div id="digital-security" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Digital Security</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Use VPN on all devices</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Avoid public WiFi for banking</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Enable two-factor authentication</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Be cautious of QR codes (can be malicious)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Keep apps updated</li>
          </ul>
        </div>

        {/* Emergency Contacts */}
        <div id="emergency-contacts" className="rounded-xl border border-green-200 bg-green-50 p-5">
          <h3 className="font-semibold text-green-800 mb-2">✅ Emergency Contacts</h3>
          <ul className="text-green-900 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Police: 110</li>
            <li className="text-sm leading-relaxed md:text-base">• Medical: 120</li>
            <li className="text-sm leading-relaxed md:text-base">• Fire: 119</li>
            <li className="text-sm leading-relaxed md:text-base">• Tourist Hotline: 12301</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}