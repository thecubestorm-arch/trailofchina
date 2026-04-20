import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where to Stay in Beijing | Trail of China',
  description: 'Best neighborhoods and hotels in Beijing. Hutongs, Wangfujing, Sanlitun areas.',
};

export default function BeijingWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Stay in Beijing</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Areas</h2>
          <div className="space-y-4">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏛️ Dongcheng (Hutongs)</h3>
              <p className="text-gray-700">Near Forbidden City, traditional courtyard hotels.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🛍️ Wangfujing</h3>
              <p className="text-gray-700">Shopping street, close to attractions, many hotels.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
