import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chongqing: Local Tips | Trail of China',
  description: 'Insider tips for Chongqing - navigation, transport, and fog.',
};

export default function ChongqingLocalTips() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Chongqing Local Tips</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">The "Mountain City" Reality</h2>
          <ul className="space-y-2 text-[#5d6a73]">
            <li>• Maps show flat - reality is vertical</li>
            <li>• 10-minute walk = 500 steps up/down</li>
            <li>• "First floor" might be 8th floor elsewhere</li>
            <li>• Always check which floor exits to street level</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Fog and Weather</h2>
          <p className="text-[#5d6a73] mb-4">
            Chongqing has 100+ foggy days/year. Winter can be grey and damp. 
            Spring and autumn are best for clear views.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Hotpot Warning</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <p className="text-red-900">
              Even "mild" (微辣) is spicy for foreigners. Start with 
              "clear broth" (清汤) and add chili gradually. Have milk/tea ready.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <a href="/destinations/chongqing" className="text-[#af5d32] hover:underline">← Back to Chongqing Guide</a>
        </div>
      </main>
    </div>
  );
}
