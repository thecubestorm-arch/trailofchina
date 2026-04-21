import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chengdu: What to Do | Trail of China',
  description: 'Best things to do in Chengdu - pandas, temples, and cultural experiences.',
};

export default function ChengduWhatToDo() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">What to Do in Chengdu</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Giant Panda Breeding Base</h2>
          <p className="text-[#5d6a73] mb-4">
            Visit pandas at their most active time. Arrive by 8am to see them eating breakfast.
            Afternoon pandas mostly sleep.
          </p>
          <div className="bg-[#fffaf3] rounded-xl p-4 border border-[#ebe4d8]">
            <p className="text-sm text-[#5d6a73]"><strong>Tip:</strong> Book tickets online, expect crowds on weekends.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">People's Park (Renmin Park)</h2>
          <p className="text-[#5d6a73] mb-4">
            Traditional teahouse, dancing, ear cleaning, and mahjong. The heart of local life.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Jinli Ancient Street</h2>
          <p className="text-[#5d6a73] mb-4">
            Touristy but charming old street near Wuhou Shrine. Good for snacks and souvenirs.
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/chengdu" className="text-[#af5d32] hover:underline">← Back to Chengdu Guide</a>
        </div>
      </main>
    </div>
  );
}
