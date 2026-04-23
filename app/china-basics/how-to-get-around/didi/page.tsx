import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'DiDi Ride-Hailing in China | Trail of China',
  description:
    'Complete guide to using DiDi, China\'s Uber equivalent. Setup, payment, car types, and safety tips for foreign travelers.',
};

export default function DidiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How to Get Around',href:'/china-basics/how-to-get-around'},{label:'Didi'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">DiDi Ride-Hailing</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            DiDi is China's Uber - essential for getting around cities conveniently. 
            It's cheaper than taxis, eliminates language barriers, and works in every major city.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">App Setup</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Download DiDi:</strong> Available on App Store/Google Play</li>
            <li><strong>Register:</strong> Use foreign phone number + verification code</li>
            <li><strong>Link payment:</strong> International credit cards now accepted</li>
            <li><strong>Set up profile:</strong> Add photo for driver identification</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Enter destination (English works in major cities)</li>
            <li>Select car type: Express (快车) is cheapest</li>
            <li>Wait for driver assignment (usually under 2 minutes)</li>
            <li>Check license plate before getting in</li>
            <li>Payment is automatic after ride</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Car Types</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Express (快车):</strong> Standard private cars, cheapest</li>
            <li><strong>Premier (专车):</strong> Higher-end cars, professional drivers</li>
            <li><strong>Taxi (出租车):</strong> Traditional taxis via app</li>
            <li><strong>Six-seater (六座):</strong> For groups or lots of luggage</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Take screenshot of driver info before ride</li>
            <li>• Share trip with friends via app feature</li>
            <li>• Rate drivers honestly - it matters</li>
            <li>• Pin your location accurately on map</li>
            <li>• Learn "I am here" in Chinese: "Wǒ zài zhèlǐ" (我在这里)</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Safety First</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Always check license plate matches app</li>
            <li>• Sit in back seat, not front</li>
            <li>• Share your trip with someone</li>
            <li>• Use official DiDi app only (no clones)</li>
            <li>• Emergency button in app if needed</li>
          </ul>
        </div>
              <RelatedArticles articles={[{title:'Taxi Guide',description:'Traditional taxi tips and scams to watch for.',href:'/china-basics/how-to-get-around/taxi'},{title:'Didi App Guide',description:'Set up the Didi app for ride-hailing.',href:'/china-basics/what-apps-to-use/didi'}]} />
      </main>
    </div>
  );
}
