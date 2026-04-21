import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chengdu: Local Tips | Trail of China',
  description: 'Insider tips for Chengdu - scams, transport, and local advice.',
};

export default function ChengduLocalTips() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Chengdu Local Tips</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Getting Around</h2>
          <ul className="space-y-2 text-[#5d6a73]">
            <li>• Metro covers most tourist areas</li>
            <li>• DiDi works well for taxis</li>
            <li>• Panda Base is 30 min from center by metro + bus</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Scams to Avoid</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <ul className="text-red-900 space-y-2">
              <li>• "Panda research donation" - fake collectors near base</li>
              <li>• Teahouse scams in People's Park - check prices first</li>
              <li>• Fake monks asking for donations</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Local Customs</h2>
          <ul className="space-y-2 text-[#5d6a73]">
            <li>• "Shuǎ là" (shua la) = relaxed lifestyle - embrace it</li>
            <li>• Tea houses are for socializing, not just drinking</li>
            <li>• Spicy tolerance builds - don't show off day 1</li>
          </ul>
        </section>

        <div className="mt-12">
          <a href="/destinations/chengdu" className="text-[#af5d32] hover:underline">← Back to Chengdu Guide</a>
        </div>
      </main>
    </div>
  );
}
