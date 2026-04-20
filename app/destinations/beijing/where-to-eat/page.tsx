import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where to Eat in Beijing | Trail of China',
  description: 'Best Peking duck restaurants, hutong food, and local eats in Beijing.',
};

export default function BeijingWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Eat in Beijing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing's culinary scene is hearty and flavorful. From imperial banquets to street-side 
            snacks, here's where to eat like a local.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-Try Foods</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Peking Duck (北京烤鸭)</h3>
              <p className="text-gray-700">Crispy skin, tender meat, wrapped in pancakes with plum sauce.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Jianbing (煎饼)</h3>
              <p className="text-gray-700">Crispy crepe with egg, scallions, and crispy cracker. Popular breakfast.</p>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book Peking duck restaurants in advance</li>
            <li>• Try hutong restaurants for authentic local food</li>
            <li>• Avoid Wangfujing Snack Street - tourist trap</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
