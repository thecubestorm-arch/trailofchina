import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Xi'an: What to Do | Trail of China",
  description: "Best things to do in Xi'an - Terracotta Warriors and ancient sites.",
};

export default function XianWhatToDo() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">What to Do in Xi'an</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Terracotta Warriors</h2>
          <p className="text-[#5d6a73] mb-4">
            One of the world's greatest archaeological finds. 8,000+ life-sized soldiers 
            buried with Emperor Qin Shi Huang. Pit 1 is most impressive.
          </p>
          <div className="bg-[#fffaf3] rounded-xl p-4 border border-[#ebe4d8]">
            <p className="text-sm text-[#5d6a73]"><strong>Go early!</strong> Arrive at 8am opening to beat crowds and tour groups.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">City Wall</h2>
          <p className="text-[#5d6a73] mb-4">
            Best preserved city wall in China. 14km loop - rent bikes and cycle the top.
            Sunset views are magical.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Muslim Quarter</h2>
          <p className="text-[#5d6a73] mb-4">
            Vibrant street food and market area. Try lamb skewers, roujiamo (Chinese burger),
            and yangroupaomo (lamb soup).
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/xian" className="text-[#af5d32] hover:underline">← Back to Xi'an Guide</a>
        </div>
      </main>
    </div>
  );
}
