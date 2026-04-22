import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safety & Security in China | Trail of China',
  description:
    'Safety tips, common scams, and how to stay secure while traveling in China. General safety, digital security, and emergency contacts.',
};

export default function SecurityStandardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Safety & Security in China</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China is generally very safe for travelers. Violent crime is rare, but petty theft 
            and scams exist. Here's how to protect yourself.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">General Safety</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Violent crime:</strong> Very rare against tourists</li>
            <li><strong>Walking at night:</strong> Generally safe in all major cities</li>
            <li><strong>Police presence:</strong> Heavy and visible</li>
            <li><strong>Pickpockets:</strong> Exist in tourist areas and transport hubs</li>
            <li><strong>Emergency number:</strong> 110 (police), 120 (medical)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Scams to Avoid</h2>
          
          <div className="space-y-4">
            <div className="bg-[var(--accent-soft)] rounded-lg p-4">
              <h3 className="font-semibold text-[var(--accent-strong)] mb-2">🎨 Art Student Scam</h3>
              <p className="text-[var(--foreground)]">Friendly "art students" invite you to a tea house or art gallery, then present an inflated bill. Never follow strangers.</p>
            </div>
            
            <div className="bg-[var(--accent-soft)] rounded-lg p-4">
              <h3 className="font-semibold text-[var(--accent-strong)] mb-2">🚕 Fake Taxi Scam</h3>
              <p className="text-[var(--foreground)]">Unofficial drivers overcharge or take longer routes. Always use official taxis or DiDi app.</p>
            </div>
            
            <div className="bg-[var(--accent-soft)] rounded-lg p-4">
              <h3 className="font-semibold text-[var(--accent-strong)] mb-2">🏛️ Closed Attraction Scam</h3>
              <p className="text-[var(--foreground)]">Touts claim attractions are closed and offer expensive alternatives. Verify opening times officially.</p>
            </div>
            
            <div className="bg-[var(--accent-soft)] rounded-lg p-4">
              <h3 className="font-semibold text-[var(--accent-strong)] mb-2">💱 Currency Exchange Scam</h3>
              <p className="text-[var(--foreground)]">Unofficial exchange services shortchange or give fake bills. Use banks or ATMs only.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Protecting Your Belongings</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Keep phone and wallet in front pockets</li>
            <li>Use crossbody bags, not backpacks, in crowds</li>
            <li>Be extra vigilant at train stations and tourist sites</li>
            <li>Don't leave bags unattended (even for photos)</li>
            <li>Use hotel safes for passports and extra cash</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Digital Security</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Use VPN on all devices</li>
            <li>Avoid public WiFi for banking</li>
            <li>Enable two-factor authentication</li>
            <li>Be cautious of QR codes (can be malicious)</li>
            <li>Keep apps updated</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Register with your embassy (recommended)</li>
            <li>• Keep digital copies of passport and visa</li>
            <li>• Learn your hotel's name and address in Chinese</li>
            <li>• Trust your instincts - if something feels off, leave</li>
            <li>• Most locals are genuinely helpful, not scammers</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <h3 className="font-semibold text-green-800 mb-2">✅ Emergency Contacts</h3>
          <ul className="text-green-900 space-y-2">
            <li>• Police: 110</li>
            <li>• Medical: 120</li>
            <li>• Fire: 119</li>
            <li>• Tourist Hotline: 12301</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
