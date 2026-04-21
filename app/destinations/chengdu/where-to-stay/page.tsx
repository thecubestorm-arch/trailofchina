import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chengdu: Where to Stay | Trail of China',
  description: 'Best neighborhoods and hotels in Chengdu for tourists.',
};

export default function ChengduWhereToStay() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Where to Stay in Chengdu</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Chunxi Road Area</h2>
          <p className="text-[#5d6a73] mb-4">
            Central shopping district, metro access, lots of food options. Good for first-timers.
          </p>
          <div className="bg-[#fffaf3] rounded-xl p-4 border border-[#ebe4d8]">
            <p className="text-sm text-[#5d6a73]"><strong>Stay here if:</strong> You want central location and shopping.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Wuhouci Area</h2>
          <p className="text-[#5d6a73] mb-4">
            Near Jinli Street and Wuhou Shrine. Traditional atmosphere, quieter at night.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Near Panda Base</h2>
          <p className="text-[#5d6a73] mb-4">
            If pandas are your main goal, staying nearby saves travel time.
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/chengdu" className="text-[#af5d32] hover:underline">← Back to Chengdu Guide</a>
        </div>
      </main>
    </div>
  );
}
