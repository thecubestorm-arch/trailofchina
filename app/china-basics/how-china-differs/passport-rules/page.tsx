import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Passport & Registration Rules | Trail of China',
  description:
    'Hotel registration, police checks, and passport requirements for travelers in China. Visa overstays and lost passport procedures.',
};

export default function PassportRulesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How China Differs',href:'/china-basics/how-china-differs'},{label:'Passport Rules'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Passport & Registration Rules</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chinese law requires foreigners to carry their passport at all times and register 
            with police when staying overnight. Here's what you need to know.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Carrying Your Passport</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Always carry:</strong> Original passport (not photocopies)</li>
            <li><strong>Police checks:</strong> Can happen anywhere, especially near borders</li>
            <li><strong>Hotels:</strong> Required for check-in</li>
            <li><strong>Attractions:</strong> Some require ID for tickets</li>
            <li><strong>Trains:</strong> Required for tickets and boarding</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Registration</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Automatic:</strong> Licensed hotels register you electronically</li>
            <li><strong>Receipt:</strong> Keep hotel registration slip they provide</li>
            <li><strong>Airbnb:</strong> Host must register you within 24 hours</li>
            <li><strong>Unlicensed hotels:</strong> Cannot legally register foreigners</li>
            <li><strong>Duration:</strong> Registration valid for your stay</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Police Registration (for non-hotel stays)</h2>
          <p className="text-gray-700 mb-4">If staying with friends/family, you must register within 24 hours:</p>
          <ol className="text-gray-700 list-decimal pl-5 space-y-2">
            <li>Go to local police station (派出所) with your host</li>
            <li>Bring: Passport, visa, host's ID card, rental agreement (if applicable)</li>
            <li>Fill out temporary residence form</li>
            <li>Keep the receipt they give you</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Visa Overstays</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Fine:</strong> ¥500 per day overstayed</li>
            <li><strong>Records:</strong> May affect future visa applications</li>
            <li><strong>Action:</strong> Go to Exit-Entry Bureau immediately if overstayed</li>
            <li><strong>Extension:</strong> Possible at local PSB before expiry</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Lost Passport</h2>
          <ol className="text-gray-700 list-decimal pl-5 space-y-2">
            <li>File police report immediately</li>
            <li>Contact your embassy/consulate</li>
            <li>Apply for emergency travel document</li>
            <li>Visit Exit-Entry Bureau to update records</li>
          </ol>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Screenshot your passport info page (as backup, not replacement)</li>
            <li>• Keep photocopies in separate location from passport</li>
            <li>• Set phone reminders for visa expiry dates</li>
            <li>• Carry hotel business card in Chinese</li>
            <li>• Don't let anyone keep your passport (except hotels briefly during check-in)</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Important</h3>
          <p className="text-[var(--foreground)]">
            Failure to register or carry your passport can result in fines (¥2,000+) 
            or detention. Always comply with police requests politely.
          </p>
        </div>
              <RelatedArticles articles={[{title:'Visa Guide',description:'Complete China visa walkthrough.',href:'/china-basics/how-china-differs/visa-guide'},{title:'Security Standards',description:'Safety and security tips for China.',href:'/china-basics/how-china-differs/security-standards'}]} />
      </main>
    </div>
  );
}
