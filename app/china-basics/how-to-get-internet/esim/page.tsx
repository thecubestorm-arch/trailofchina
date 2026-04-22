import { Metadata } from 'next';
import ContextualCTA from '@/components/ContextualCTA';

export const metadata: Metadata = {
  title: 'eSIM Cards for China | Trail of China',
  description: 'Best eSIM providers for China travel: Airalo, Holafly, Ubigi. Setup guide, pricing, and recommendations.',
};

export default function EsimPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">eSIM Cards for China</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            eSIMs are the easiest way to get internet in China. Activate before you leave home 
            and have data the moment you land. No airport queues, no language barriers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top eSIM Providers</h2>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. Airalo (Mosalink)</h3>
              <p className="text-gray-600 mb-2">Best overall value. 1GB for 7 days: $5.50</p>
              <ul className="text-gray-700 list-disc pl-5">
                <li>Easy app-based setup</li>
                <li>Multiple data plans (1GB to 20GB)</li>
                <li>Works immediately after landing</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Holafly</h3>
              <p className="text-gray-600 mb-2">Best for unlimited data. 7 days: $19.00</p>
              <ul className="text-gray-700 list-disc pl-5">
                <li>Truly unlimited data (no throttling)</li>
                <li>Longer trip plans available</li>
                <li>24/7 support</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. Ubigi</h3>
              <p className="text-gray-600 mb-2">Best for multi-country trips. 1GB: $8.00</p>
              <ul className="text-gray-700 list-disc pl-5">
                <li>Works across Asia</li>
                <li>Easy top-up</li>
                <li>Reliable coverage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Setup</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Before you travel:</strong> Download the provider's app (Airalo, Holafly, etc.)</li>
            <li><strong>Purchase plan:</strong> Select China plan, complete payment</li>
            <li><strong>Install eSIM:</strong> Follow app's QR code instructions</li>
            <li><strong>Activate:</strong> Enable data roaming before landing</li>
            <li><strong>Connect:</strong> Your phone connects automatically upon arrival</li>
          </ol>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Install your eSIM 1 day before travel</li>
            <li>• Screenshot your QR code as backup</li>
            <li>• Buy slightly more data than you think you need</li>
            <li>• Top-ups are instant if you run low</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Important Limitations</h3>
          <p className="text-[var(--foreground)]">eSIMs use roaming networks, so they bypass the Great Firewall. However, speeds may be slower than local SIMs. VPN still recommended for full internet access.</p>
        </div>

        <div className="mt-8">
          <ContextualCTA
            icon="📱"
            title="Get Your eSIM Before You Fly"
            description="Set up data in 2 minutes — no physical SIM needed. Works on arrival."
            buttonText="Get your eSIM →"
            buttonHref="/china-basics/how-to-get-internet/esim"
            variant="primary"
          />
        </div>
      </main>
    </div>
  );
}
