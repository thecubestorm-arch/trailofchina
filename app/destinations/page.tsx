import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Destinations | Trail of China',
  description: 'Explore the best destinations in China. Detailed guides for Shanghai, Beijing, and more cities.',
};

export default function DestinationsHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Destinations</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China is vast and diverse, from ultra-modern megacities to ancient historical sites. 
            Each destination offers a unique glimpse into different facets of Chinese culture, 
            history, and daily life.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/destinations/shanghai" className="block group h-full">
            <div className="h-full border-2 border-gray-200 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
              <div className="text-4xl mb-4">🏙️</div>
              <h2 className="text-2xl font-semibold mb-2">Shanghai</h2>
              <p className="text-gray-600">China's futuristic financial hub with colonial charm.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-flex items-center gap-1">
                <span className="group-hover:underline">Explore Shanghai</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>

          <Link href="/destinations/beijing" className="block group h-full">
            <div className="h-full border-2 border-gray-200 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
              <div className="text-4xl mb-4">🏛️</div>
              <h2 className="text-2xl font-semibold mb-2">Beijing</h2>
              <p className="text-gray-600">Ancient capital with the Great Wall and Forbidden City.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-flex items-center gap-1">
                <span className="group-hover:underline">Explore Beijing</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Coming Soon</h3>
          <p className="text-amber-900">
            More destinations guides are being added: Xi'an (Terracotta Warriors), 
            Chengdu (Pandas), Guilin (Karst mountains), and Hong Kong.
          </p>
        </div>
      </main>
    </div>
  );
}
