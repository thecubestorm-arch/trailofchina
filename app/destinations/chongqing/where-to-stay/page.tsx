import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chongqing: Where to Stay | Trail of China',
  description: 'Best areas to stay in Chongqing - Jiefangbei vs riverside.',
};

export default function ChongqingWhereToStay() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Where to Stay in Chongqing</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Jiefangbei (City Center)</h2>
          <p className="text-[#5d6a73] mb-4">
            Central business district, metro hub, walking distance to shopping and food.
            Best for first-timers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Nanbin Road (Riverside)</h2>
          <p className="text-[#5d6a73] mb-4">
            Hotels with Yangtze River views. Near Hongyadong. Great for photos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Warning: Navigation</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-900">
              Chongqing is 3D - your hotel might be on "1st floor" but 10 stories up. 
              Check if your hotel has river views or is in a valley.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <a href="/destinations/chongqing" className="text-[#af5d32] hover:underline">← Back to Chongqing Guide</a>
        </div>
      </main>
    </div>
  );
}
