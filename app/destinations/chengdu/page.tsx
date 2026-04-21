import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chengdu Travel Guide | Trail of China',
  description: 'Pandas, teahouses, and the best Sichuan food. Complete Chengdu travel guide.',
};

export default function ChengduPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Chengdu Travel Guide</h1>
        
        <section className="mb-8">
          <p className="text-lg text-[#5d6a73] leading-relaxed">
            The relaxed capital of Sichuan province, famous for giant pandas, 
            traditional teahouses, and the spiciest food in China.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Quick Facts</h2>
          <div className="bg-[#fffaf3] rounded-xl p-6 border border-[#ebe4d8]">
            <ul className="space-y-2 text-[#5d6a73]">
              <li><strong>Best time:</strong> March-June, September-November</li>
              <li><strong>Must-see:</strong> Giant Panda Base, People's Park</li>
              <li><strong>Known for:</strong> Sichuan hotpot, tea culture</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {title: 'What to Do', desc: 'Pandas, parks, temples', href: '/destinations/chengdu/what-to-do'},
            {title: 'Where to Eat', desc: 'Hotpot, street food', href: '/destinations/chengdu/where-to-eat'},
            {title: 'Where to Stay', desc: 'Best neighborhoods', href: '/destinations/chengdu/where-to-stay'},
            {title: 'Local Tips', desc: 'Scams, transport', href: '/destinations/chengdu/local-tips'},
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
            <li>• Visit pandas EARLY (8am)</li>
            <li>• Try hotpot - start mild, build up</li>
            <li>• People's Park teahouse experience</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
