import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Passport & Registration Rules | Trail of China',
  description:
    'Hotel registration, police checks, and passport requirements for travelers in China. Visa overstays and lost passport procedures.',
}

const tocItems = [
  { id: 'carrying-your-passport', title: 'Carrying Your Passport' },
  { id: 'hotel-registration', title: 'Hotel Registration' },
  { id: 'police-registration', title: 'Police Registration' },
  { id: 'visa-overstays', title: 'Visa Overstays' },
  { id: 'lost-passport', title: 'Lost Passport' },
]

const quickInfoPills = [
  'Original passport required',
  'Register within 24 hours',
  'Overstay fine: ¥500/day',
]

export default function PassportRulesPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🛂"
        heroImage={{ src: 'https://picsum.photos/seed/china-passport-rules/800/400', alt: 'Passport and registration rules in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Passport Rules' },
        ]}
        category="How China Differs"
        title="Passport & Registration Rules"
        intro="Chinese law requires foreigners to carry their passport at all times and register with police when staying overnight. Here's what you need to know."
        whyYouNeedThis={[
          'Chinese law requires foreigners to carry their original passport, not just a photocopy.',
          'Hotels, trains, attractions, and police checks can all require your passport at short notice.',
          'If you stay outside a licensed hotel, you must complete temporary residence registration within 24 hours.',
          'Overstays or missing registration can lead to fines, future visa problems, or detention.',
        ]}
        proTips={[
          'Screenshot your passport info page (as backup, not replacement)',
          'Keep photocopies in separate location from passport',
          'Set phone reminders for visa expiry dates',
          'Carry hotel business card in Chinese',
          "Don't let anyone keep your passport (except hotels briefly during check-in)",
        ]}
        related={[
          { label: 'Visa Guide', href: '/china-basics/how-china-differs/visa-guide' },
          { label: 'Security Standards', href: '/china-basics/how-china-differs/security-standards' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
        ]}
        relatedArticles={[
          {
            title: 'Visa Guide',
            description: 'Complete China visa walkthrough.',
            href: '/china-basics/how-china-differs/visa-guide',
          },
          {
            title: 'Security Standards',
            description: 'Safety and security tips for China.',
            href: '/china-basics/how-china-differs/security-standards',
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
            <h2 id="carrying-your-passport" className="text-2xl font-extrabold text-slate-900">
              Carrying Your Passport
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Always carry:</strong> Original passport (not photocopies)</li>
              <li><strong>Police checks:</strong> Can happen anywhere, especially near borders</li>
              <li><strong>Hotels:</strong> Required for check-in</li>
              <li><strong>Attractions:</strong> Some require ID for tickets</li>
              <li><strong>Trains:</strong> Required for tickets and boarding</li>
            </ul>
          </div>

          <div>
            <h2 id="hotel-registration" className="text-2xl font-extrabold text-slate-900">
              Hotel Registration
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Automatic:</strong> Licensed hotels register you electronically</li>
              <li><strong>Receipt:</strong> Keep hotel registration slip they provide</li>
              <li><strong>Airbnb:</strong> Host must register you within 24 hours</li>
              <li><strong>Unlicensed hotels:</strong> Cannot legally register foreigners</li>
              <li><strong>Duration:</strong> Registration valid for your stay</li>
            </ul>
          </div>

          <div>
            <h2 id="police-registration" className="text-2xl font-extrabold text-slate-900">
              Police Registration (for non-hotel stays)
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              If staying with friends/family, you must register within 24 hours:
            </p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>1. Go to local police station (派出所) with your host</li>
              <li>2. Bring: Passport, visa, host&apos;s ID card, rental agreement (if applicable)</li>
              <li>3. Fill out temporary residence form</li>
              <li>4. Keep the receipt they give you</li>
            </ol>
          </div>

          <div>
            <h2 id="visa-overstays" className="text-2xl font-extrabold text-slate-900">
              Visa Overstays
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li><strong>Fine:</strong> ¥500 per day overstayed</li>
              <li><strong>Records:</strong> May affect future visa applications</li>
              <li><strong>Action:</strong> Go to Exit-Entry Bureau immediately if overstayed</li>
              <li><strong>Extension:</strong> Possible at local PSB before expiry</li>
            </ul>
          </div>

          <div>
            <h2 id="lost-passport" className="text-2xl font-extrabold text-slate-900">
              Lost Passport
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>1. File police report immediately</li>
              <li>2. Contact your embassy/consulate</li>
              <li>3. Apply for emergency travel document</li>
              <li>4. Visit Exit-Entry Bureau to update records</li>
            </ol>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="text-lg font-extrabold text-amber-900">Important</h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-950 md:text-base">
              Failure to register or carry your passport can result in fines (¥2,000+) or detention. Always comply with police requests politely.
            </p>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="📄"
          title="Check Your Visa Status Too"
          description="Passport rules and visa validity are tightly linked. Overstays get expensive fast."
          buttonText="Read the Visa Guide →"
          buttonHref="/china-basics/how-china-differs/visa-guide"
          variant="secondary"
        />
      </div>
    </div>
  )
}
