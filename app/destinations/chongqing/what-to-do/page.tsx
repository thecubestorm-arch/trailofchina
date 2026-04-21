import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chongqing: What to Do | Trail of China',
  description: 'Best things to do in Chongqing - Hongyadong, cable cars, and rivers.',
};

export default function ChongqingWhatToDo() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">What to Do in Chongqing</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Hongyadong (Stilt Houses)</h2>
          <p className="text-[#5d6a73] mb-4">
            Iconic cliffside buildings that inspired Spirited Away. Best viewed at night 
            when lit up like a fantasy world.
          </p>
          <div className="bg-[#fffaf3] rounded-xl p-4 border border-[#ebe4d8]">
            <p className="text-sm text-[#5d6a73]"><strong>Tip:</strong> Take photos from across the river for best views.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Yangtze River Cable Car</h2>
          <p className="text-[#5d6a73] mb-4">
            Cross the river in a cable car with incredible city views. Classic Chongqing experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Ciqikou Old Town</h2>
          <p className="text-[#5d6a73] mb-4">
            1,000+ year old porcelain village. Cobblestone streets, tea houses, snacks.
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/chongqing" className="text-[#af5d32] hover:underline">← Back to Chongqing Guide</a>
        </div>
      </main>
    </div>
  );
}
