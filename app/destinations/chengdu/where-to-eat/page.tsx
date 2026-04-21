import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chengdu: Where to Eat | Trail of China',
  description: 'Best food in Chengdu - Sichuan hotpot, street food, and local restaurants.',
};

export default function ChengduWhereToEat() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Where to Eat in Chengdu</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Sichuan Hotpot</h2>
          <p className="text-[#5d6a73] mb-4">
            The #1 must-try. Spicy broth with Sichuan peppercorns creates a numbing sensation (málà).
            Start mild and work your way up.
          </p>
          <div className="bg-[#fffaf3] rounded-xl p-4 border border-[#ebe4d8]">
            <p className="text-sm text-[#5d6a73]"><strong>Famous chains:</strong> Haidilao (service), Shancheng Laoma (spicy)</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Chuan Chuan Xiang</h2>
          <p className="text-[#5d6a73] mb-4">
            Skewered meats and vegetables cooked in spicy broth. Cheap and delicious street food style.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Dan Dan Noodles</h2>
          <p className="text-[#5d6a73] mb-4">
            Iconic Sichuan dish - spicy peanut sauce, minced pork, spring onions.
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/chengdu" className="text-[#af5d32] hover:underline">← Back to Chengdu Guide</a>
        </div>
      </main>
    </div>
  );
}
