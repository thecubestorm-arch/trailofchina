import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'Passport & Registration Rules | Trail of China',
  description:
    'Hotel registration, police checks, and passport requirements for travelers in China. Visa overstays and lost passport procedures.',
};

export default function PassportRulesPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🛂"
        heroImage={{ src: 'https://picsum.photos/seed/china-passport-rules/800/400', alt: 'Passport & Registration Rules in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Passport Rules' },
        ]}
        category="How China Differs"
        title="Passport & Registration Rules"
        intro="Chinese law requires foreigners to carry their passport at all times and register with police when staying overnight. Here's what you need to know."
        proTips={[
          'Screenshot your passport info page (as backup, not replacement)',
          'Keep photocopies in separate location from passport',
          'Set phone reminders for visa expiry dates',
          'Carry hotel business card in Chinese',
          'Don\'t let anyone keep your passport (except hotels briefly during check-in)',
        ]}
        related={[
          { label: 'Visa Guide', href: '/china-basics/how-china-differs/visa-guide' },
          { label: 'Security Standards', href: '/china-basics/how-china-differs/security-standards' },
        ]}
        relatedArticles={[
          { title: 'Visa Guide', description: 'Complete China visa walkthrough.', href: '/china-basics/how-china-differs/visa-guide' },
          { title: 'Security Standards', description: 'Safety and security tips for China.', href: '/china-basics/how-china-differs/security-standards' },
        ]}
        tocItems={[
          { id: 'carrying-passport', title: 'Carrying Your Passport' },
          { id: 'hotel-registration', title: 'Hotel Registration' },
          { id: 'police-registration', title: 'Police Registration' },
          { id: 'visa-overstays', title: 'Visa Overstays' },
          { id: 'lost-passport', title: 'Lost Passport' },
          { id: 'important-notice', title: 'Important Notice' },
        ]}
      >
        {/* Carrying Your Passport */}
        <div id="carrying-passport" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Carrying Your Passport</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Always carry:</strong> Original passport (not photocopies)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Police checks:</strong> Can happen anywhere, especially near borders</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Hotels:</strong> Required for check-in</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Attractions:</strong> Some require ID for tickets</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Trains:</strong> Required for tickets and boarding</li>
          </ul>
        </div>

        {/* Hotel Registration */}
        <div id="hotel-registration" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Hotel Registration</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Automatic:</strong> Licensed hotels register you electronically</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Receipt:</strong> Keep hotel registration slip they provide</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Airbnb:</strong> Host must register you within 24 hours</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Unlicensed hotels:</strong> Cannot legally register foreigners</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Duration:</strong> Registration valid for your stay</li>
          </ul>
        </div>

        {/* Police Registration */}
        <div id="police-registration" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Police Registration (for non-hotel stays)</h2>
          <p className="text-slate-700 mt-4 mb-4">If staying with friends/family, you must register within 24 hours:</p>
          <ol className="text-slate-700 space-y-2 list-decimal pl-5">
            <li className="text-sm leading-relaxed md:text-base">Go to local police station (派出所) with your host</li>
            <li className="text-sm leading-relaxed md:text-base">Bring: Passport, visa, host's ID card, rental agreement (if applicable)</li>
            <li className="text-sm leading-relaxed md:text-base">Fill out temporary residence form</li>
            <li className="text-sm leading-relaxed md:text-base">Keep the receipt they give you</li>
          </ol>
        </div>

        {/* Visa Overstays */}
        <div id="visa-overstays" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Visa Overstays</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Fine:</strong> ¥500 per day overstayed</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Records:</strong> May affect future visa applications</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Action:</strong> Go to Exit-Entry Bureau immediately if overstayed</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Extension:</strong> Possible at local PSB before expiry</li>
          </ul>
        </div>

        {/* Lost Passport */}
        <div id="lost-passport" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Lost Passport</h2>
          <ol className="mt-4 text-slate-700 space-y-2 list-decimal pl-5">
            <li className="text-sm leading-relaxed md:text-base">File police report immediately</li>
            <li className="text-sm leading-relaxed md:text-base">Contact your embassy/consulate</li>
            <li className="text-sm leading-relaxed md:text-base">Apply for emergency travel document</li>
            <li className="text-sm leading-relaxed md:text-base">Visit Exit-Entry Bureau to update records</li>
          </ol>
        </div>

        {/* Important Notice */}
        <div id="important-notice" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Important</h3>
          <p className="text-sm leading-relaxed text-red-800 md:text-base">
            Failure to register or carry your passport can result in fines (¥2,000+) 
            or detention. Always comply with police requests politely.
          </p>
        </div>
      </GuideArticlePage>
    </div>
  );
}