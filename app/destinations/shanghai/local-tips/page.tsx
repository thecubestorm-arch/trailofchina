import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shanghai Local Tips | Trail of China',
  description: 'Insider tips, scams to avoid, and local secrets for visiting Shanghai.',
};

export default function ShanghaiLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Shanghai Local Tips</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Navigate Shanghai like a local with these insider tips and warnings about common scams.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Scams to Avoid</h2>
          
          <div className="space-y-4">
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🍵 Tea Ceremony Scam</h3>
              <p className="text-[var(--foreground)]">
                Friendly locals approach tourists claiming to practice English, then invite you to an 
                expensive tea house. Bill can be ¥500-2000.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Never follow strangers to tea houses.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🎨 Art Student Scam</h3>
              <p className="text-[var(--foreground)]">
                "Art students" invite you to see their work, then pressure you to buy overpriced art.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Politely decline gallery invitations from strangers.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🚕 Fake Taxi Scam</h3>
              <p className="text-[var(--foreground)]">
                Unofficial drivers at airports charge 3-5x normal rates.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Use official taxi queue or DiDi app only.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Money-Saving Tips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Metro day pass (¥18) if taking 4+ rides</li>
            <li>Happy hour at Bund bars (5-7pm) for skyline views</li>
            <li>Free walking tours (tip-based) for orientation</li>
            <li>Eat breakfast on the street (under ¥15)</li>
            <li>Museums are mostly free on certain days</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Local Etiquette</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Queuing is becoming more common - respect lines</li>
            <li>Tipping is not expected (unlike Western countries)</li>
            <li>Bargaining is normal in markets, not in malls</li>
            <li>Keep voice down in public - loud foreigners stand out</li>
            <li>Don't stick chopsticks upright in rice</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Insider Secrets</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Best Bund photos from the riverside promenade on Pudong side</li>
            <li>• Propaganda Poster Museum is hidden in apartment basement - amazing</li>
            <li>• Century Park free entry before 6am</li>
            <li>• Buy metro card - refundable deposit, saves time</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
