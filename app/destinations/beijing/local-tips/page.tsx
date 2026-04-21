import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beijing Local Tips | Trail of China',
  description: 'Insider tips, scams to avoid, and local secrets for visiting Beijing.',
};

export default function BeijingLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Beijing Local Tips</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Scams to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🚕 Fake Taxis at Tourist Sites</h3>
              <p className="text-[var(--foreground)]">Always use official taxis or ride apps.</p>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Insider Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Use subway day pass for multiple rides</li>
            <li>• Download offline maps before exploring hutongs</li>
            <li>• Carry small bills for street food</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
