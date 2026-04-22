import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Chongqing Local Tips | Trail of China',
  description:
    'Practical Chongqing local tips: 3D navigation, foggy weather, spicy food reality, monorail logistics, and DiDi use.',
};

export default function ChongqingLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chongqing', href: '/destinations/chongqing' },
            { label: 'Local Tips' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Chongqing Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing works differently from most cities. These local realities will save time, reduce stress,
            and help you avoid common first-timer mistakes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Essential Practical Tips</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. It&apos;s a 3D City - Maps Can Mislead</h3>
              <p className="text-gray-700 mb-2">
                A destination may be directly above or below you with no direct staircase. Always verify the
                correct street level and entrance side.
              </p>
              <p className="text-sm text-gray-600">🕐 Check before every transfer | 💰 Free habit | 📍 Most critical in Yuzhong</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Fog Is Normal (100+ Days/Year)</h3>
              <p className="text-gray-700 mb-2">
                The city often has low-visibility days, especially in cooler seasons. Plan flexible skyline
                slots and prioritize indoor attractions on foggy mornings.
              </p>
              <p className="text-sm text-gray-600">🕐 Most common in winter/spring | 💰 N/A | 📍 Affects river viewpoints</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. "Mild" Usually Means Spicy</h3>
              <p className="text-gray-700 mb-2">
                Even reduced-heat dishes can be intense for newcomers. Ask for minimal chili and use a split
                broth at hotpot if you&apos;re uncertain.
              </p>
              <p className="text-sm text-gray-600">🕐 Every meal matters | 💰 Same price either way | 📍 Hotpot and xiaomian shops</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">4. Monorail Timing Tips</h3>
              <p className="text-gray-700 mb-2">
                Use off-peak windows to visit Liziba and central transfer stations. Peak rush can make short
                rides significantly slower.
              </p>
              <p className="text-sm text-gray-600">🕐 Aim for 10:00-16:30 | 💰 Metro fares are low | 📍 Line 2 and interchanges</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">5. DiDi Is Essential Backup</h3>
              <p className="text-gray-700 mb-2">
                Keep DiDi ready for late-night returns, bad weather, or confusing multi-level drop-offs where
                walking routes become inefficient.
              </p>
              <p className="text-sm text-gray-600">🕐 Especially after 21:00 | 💰 Usually reasonable in-city | 📍 Use precise pickup pins</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Dual-level viewpoints:</strong> Check both upper and lower roads for better angles</li>
            <li><strong>Short ferry alternatives:</strong> Useful when bridges are congested</li>
            <li><strong>Neighborhood wet markets:</strong> Excellent morning snapshots of local daily life</li>
            <li><strong>Metro station exits:</strong> Some exits save 15-20 minutes of climbing</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Screenshot destination names in Chinese for smoother ride-hailing</li>
            <li>• Add extra transfer time whenever your route changes elevation</li>
            <li>• Wear grippy shoes; rain + steep steps can be slippery</li>
            <li>• Keep a light layer year-round - humidity can feel cooler than forecast</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-8">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tourist Traps to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Trusting one map app blindly without cross-checking entrance levels</li>
            <li>• Over-scheduling outdoor viewpoints during heavy fog periods</li>
            <li>• Waiting for street taxis in difficult pickup zones instead of using DiDi</li>
          </ul>
        </div>

        <Link href="/destinations/chongqing" className="text-[var(--accent)] hover:underline">
          ← Back to Chongqing Guide
        </Link>
      </main>
    </div>
  );
}
