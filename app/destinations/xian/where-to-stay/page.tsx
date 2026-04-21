import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Xi'an: Where to Stay | Trail of China",
  description: "Best areas to stay in Xi'an - inside or outside the city wall.",
};

export default function XianWhereToStay() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f1ea'}}>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1f2933]">Where to Stay in Xi'an</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Inside the City Wall</h2>
          <p className="text-[#5d6a73] mb-4">
            Historic center near Bell Tower and Muslim Quarter. Atmospheric but more expensive.
          </p>
          <div className="bg-[#fffaf3] rounded-xl p-4 border border-[#ebe4d8]">
            <p className="text-sm text-[#5d6a73]"><strong>Best for:</strong> First-timers, atmosphere, walking to sights</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f2933]">Near the Train Station</h2>
          <p className="text-[#5d6a73] mb-4">
            Budget-friendly hotels, good transport connections. Further from main sights.
          </p>
        </section>

        <div className="mt-12">
          <a href="/destinations/xian" className="text-[#af5d32] hover:underline">← Back to Xi'an Guide</a>
        </div>
      </main>
    </div>
  );
}
