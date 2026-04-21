import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Xi'an: Where to Eat | Trail of China",
  description: 'Best food in Xi\'an - Muslim Quarter and local specialties.',
};

export default function XianWhereToEat() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Where to Eat in Xi'an</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Muslim Quarter</h2>
          <p className="text-[#5d6a73] mb-4">
            The center of Xi'an food culture. Hundreds of stalls selling everything from 
            lamb skewers to sweet rice cakes.
          </p>
          <ul className="space-y-2 text-[#5d6a73]">
            <li><strong>Yangroupaomo:</strong> Lamb soup with bread pieces</li>
            <li><strong>Roujiamo:</strong> Chinese "hamburger" with shredded pork</li>
            <li><strong>Liangpi:</strong> Cold skin noodles, perfect summer dish</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Biangbiang Noodles</h2>
          <p className="text-[#5d6a73] mb-4">
            Hand-pulled wide noodles native to Shaanxi. The character has 58 strokes!
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/xian" className="text-[#af5d32] hover:underline">← Back to Xi'an Guide</a>
        </div>
      </main>
    </div>
  );
}
