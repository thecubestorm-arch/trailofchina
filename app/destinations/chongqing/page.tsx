import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chongqing Travel Guide | Trail of China',
  description: 'Mountain city, spicy hotpot, and Yangtze River. Complete Chongqing travel guide.',
};

export default function ChongqingPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Chongqing Travel Guide</h1>
        
        <section className="mb-8">
          <p className="text-lg text-[#5d6a73] leading-relaxed">
            The "Mountain City" where buildings stack on hills and you might exit a building 
            on the 5th floor to find yourself at street level. Famous for hotpot and rivers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Quick Facts</h2>
          <div className="bg-[#fffaf3] rounded-xl p-6 border border-[#ebe4d8]">
            <ul className="space-y-2 text-[#5d6a73]">
              <li><strong>Best time:</strong> April-June, September-October</li>
              <li><strong>Must-see:</strong> Hongyadong, Yangtze River, cable cars</li>
              <li><strong>Known for:</strong> Hotpot, hilly terrain, fog</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {title: 'What to Do', desc: 'Hongyadong, cable cars, rivers', href: '/destinations/chongqing/what-to-do'},
            {title: 'Where to Eat', desc: 'Authentic hotpot, night markets', href: '/destinations/chongqing/where-to-eat'},
            {title: 'Where to Stay', desc: 'Jiefangbei vs Nanbin Road', href: '/destinations/chongqing/where-to-stay'},
            {title: 'Local Tips', desc: 'Navigation, transport, fog', href: '/destinations/chongqing/local-tips'},
          ].map((card) => (
            <a key={card.href} href={card.href} className="block group">
              <div className="bg-[#fffaf3] rounded-xl p-6 border border-[#ebe4d8] hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                <h3 className="text-xl font-serif font-semibold text-[#1f2933] mb-2">{card.title}</h3>
                <p className="text-[#5d6a73]">{card.desc}</p>
              </div>
            </a>
          ))}
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <h3 className="font-semibold text-amber-800 mb-2">Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Maps are 2D - actual walking includes hills and stairs</li>
            <li>• Try the cable car across Yangtze River (Rongchang)</li>
            <li>• Hotpot here is SPICY - even "mild" is hot</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
