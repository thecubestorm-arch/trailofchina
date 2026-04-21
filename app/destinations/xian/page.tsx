import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Xi'an Travel Guide | Trail of China",
  description: "Terracotta Warriors, ancient history, and the Muslim Quarter. Complete Xi'an travel guide.",
};

export default function XianPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Xi'an Travel Guide</h1>
        
        <section className="mb-8">
          <p className="text-lg text-[#5d6a73] leading-relaxed">
            Ancient capital of China for 13 dynasties. Home to the famous Terracotta Warriors,
            a complete Ming Dynasty city wall, and vibrant Muslim Quarter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Quick Facts</h2>
          <div className="bg-[#fffaf3] rounded-xl p-6 border border-[#ebe4d8]">
            <ul className="space-y-2 text-[#5d6a73]">
              <li><strong>Best time:</strong> March-May, September-November</li>
              <li><strong>Must-see:</strong> Terracotta Warriors, City Wall, Muslim Quarter</li>
              <li><strong>Known for:</strong> Ancient history, lamb skewers</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {title: 'What to Do', desc: 'Terracotta Warriors, City Wall', href: '/destinations/xian/what-to-do'},
            {title: 'Where to Eat', desc: 'Muslim Quarter, lamb skewers', href: '/destinations/xian/where-to-eat'},
            {title: 'Where to Stay', desc: 'Inside vs outside the wall', href: '/destinations/xian/where-to-stay'},
            {title: 'Local Tips', desc: 'Scams, transport, timing', href: '/destinations/xian/local-tips'},
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
            <li>• Visit Terracotta Warriors EARLY (8am opening)</li>
            <li>• Rent bikes and cycle the City Wall at sunset</li>
            <li>• Muslim Quarter is best at night for atmosphere</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
