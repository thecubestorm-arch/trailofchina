import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Xi'an: Local Tips | Trail of China",
  description: "Insider tips for Xi'an - scams, transport, and advice.",
};

export default function XianLocalTips() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Xi'an Local Tips</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Terracotta Warriors</h2>
          <ul className="space-y-2 text-[#5d6a73]">
            <li>• Bus 306 from Xi'an Railway Station (1 hour)</li>
            <li>• Go EARLY (8am) - tour groups arrive 9am</li>
            <li>• Allow 3-4 hours minimum</li>
            <li>• Visit pits in order: 1, 3, 2 (1 is largest)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Scams to Avoid</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <ul className="text-red-900 space-y-2">
              <li>• "Free" tours to Terracotta Warriors with shopping stops</li>
              <li>• Fake jade and "antiques" at tourist sites</li>
              <li>• Tea ceremony scams in Muslim Quarter</li>
            </ul>
          </div>
        </section>

        <div className="mt-12">
          <a href="/destinations/xian" className="text-[#af5d32] hover:underline">← Back to Xi'an Guide</a>
        </div>
      </main>
    </div>
  );
}
