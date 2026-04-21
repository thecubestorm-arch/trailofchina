import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chongqing: Where to Eat | Trail of China',
  description: 'Best food in Chongqing - authentic hotpot and local specialties.',
};

export default function ChongqingWhereToEat() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Where to Eat in Chongqing</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Authentic Chongqing Hotpot</h2>
          <p className="text-[#5d6a73] mb-4">
            The REAL thing - much spicier than Chengdu. Sichuan peppercorns create 
            a numbing sensation called "málà."
          </p>
          <ul className="space-y-2 text-[#5d6a73]">
            <li><strong>Peiyan Teahouse Hotpot:</strong> Old school, local favorite</li>
            <li><strong>Zhishan Huayuan:</strong> Hole-in-the-wall, amazing broth</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Xiaomian (Little Noodles)</h2>
          <p className="text-[#5d6a73] mb-4">
            Chongqing breakfast staple - spicy wheat noodles with pickled vegetables.
            Every street has a stall.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Night Markets</h2>
          <p className="text-[#5d6a73] mb-4">
            Try Bayi Road and Jiaochangkou for street food and local snacks.
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/chongqing" className="text-[#af5d32] hover:underline">← Back to Chongqing Guide</a>
        </div>
      </main>
    </div>
  );
}
