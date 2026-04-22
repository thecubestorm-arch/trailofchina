import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do in Chongqing | Trail of China',
  description:
    'Top things to do in Chongqing: Hongyadong, Yangtze Cable Car, Ciqikou, Liziba Monorail, and more.',
};

export default function ChongqingWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">What to Do in Chongqing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing is dramatic, vertical, and full of cinematic viewpoints. These are the essential
            experiences for first-time visitors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. Hongyadong (洪崖洞)</h3>
              <p className="text-gray-700 mb-2">
                A cliffside complex of stilted buildings glowing above the river. Visit after sunset when
                the entire facade lights up.
              </p>
              <p className="text-sm text-gray-600">🕐 Best after 19:00 | 💰 Free to enter | 📍 Jialing River waterfront</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Yangtze River Cable Car (长江索道)</h3>
              <p className="text-gray-700 mb-2">
                One of Chongqing&apos;s signature rides, crossing the Yangtze with panoramic views of bridges,
                high-rises, and layered roads.
              </p>
              <p className="text-sm text-gray-600">🕐 7:30-22:30 | 💰 ~¥20 one-way | 📍 Yuzhong to Nan&apos;an</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. Ciqikou Ancient Town (磁器口)</h3>
              <p className="text-gray-700 mb-2">
                Historic lanes with teahouses, street snacks, and old Chongqing character. Great for slow
                walking and sampling local bites.
              </p>
              <p className="text-sm text-gray-600">🕐 Daytime to early evening | 💰 Free area entry | 📍 Shapingba District</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">4. Three Gorges Museum</h3>
              <p className="text-gray-700 mb-2">
                The best place to understand Chongqing&apos;s wartime role, migration history, and Three Gorges
                cultural legacy.
              </p>
              <p className="text-sm text-gray-600">🕐 9:00-17:00 (closed Mondays) | 💰 Free | 📍 Across from People&apos;s Square</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">5. Liziba Monorail Station (李子坝)</h3>
              <p className="text-gray-700 mb-2">
                Chongqing&apos;s famous train-through-a-building scene. A quick stop, but a must for the iconic
                city photo.
              </p>
              <p className="text-sm text-gray-600">🕐 Trains all day | 💰 Free to view | 📍 Line 2, Liziba Station</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">6. Eling Park</h3>
              <p className="text-gray-700 mb-2">
                A peaceful hilltop park with one of the best skyline panoramas over both major rivers and
                dense urban layers.
              </p>
              <p className="text-sm text-gray-600">🕐 Sunrise to evening | 💰 Free | 📍 Yuzhong peninsula edge</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Kuixinglou:</strong> A surreal "ground floor" that sits many stories above another street</li>
            <li><strong>Shibati:</strong> Restored hillside lanes with classic mountain-city atmosphere</li>
            <li><strong>Huguang Guild Hall:</strong> Elegant Qing-era architecture near the river</li>
            <li><strong>Night river cruise views:</strong> Better skyline framing than many observation decks</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Do Hongyadong and cable car near sunset for best light</li>
            <li>• Use metro + walking bridges; road traffic is slower than it looks</li>
            <li>• Carry comfortable shoes - stairs and elevation changes are constant</li>
            <li>• Save offline map pins for entrances on different elevation levels</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-8">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tourist Traps to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Paying premium rates for "private" Hongyadong photo spots</li>
            <li>• Assuming one map pin equals one correct entrance level</li>
            <li>• Taking taxi detours at peak hour instead of metro lines</li>
          </ul>
        </div>

        <Link href="/destinations/chongqing" className="text-[var(--accent)] hover:underline">
          ← Back to Chongqing Guide
        </Link>

        <section className="mt-8 pt-8 border-t" aria-labelledby="explore-in-detail">
          <h2 id="explore-in-detail" className="text-xl font-semibold mb-3 text-gray-900">Explore in Detail</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/destinations/chongqing/what-to-do/yangtze-cable-car" className="text-[var(--accent)] hover:underline">
              Yangtze Cable Car →
            </Link>
            <Link href="/destinations/chongqing/what-to-do/ciqikou" className="text-[var(--accent)] hover:underline">
              Ciqikou →
            </Link>
            <Link href="/destinations/chongqing/what-to-do/three-gorges-museum" className="text-[var(--accent)] hover:underline">
              Three Gorges Museum →
            </Link>
            <Link href="/destinations/chongqing/what-to-do/liziba-monorail" className="text-[var(--accent)] hover:underline">
              Liziba Monorail →
            </Link>
            <Link href="/destinations/chongqing/what-to-do/eling-park" className="text-[var(--accent)] hover:underline">
              Eling Park →
            </Link>
            <Link href="/destinations/chongqing/what-to-do/hongya-cave" className="text-[var(--accent)] hover:underline">
              Hongya Cave →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
