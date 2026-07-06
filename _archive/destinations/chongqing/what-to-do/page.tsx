import Link from 'next/link';
import { Metadata } from 'next';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles'
import ToursCTA from '@/components/ToursCTA'

export const metadata: Metadata = {
  title: 'What to Do in Chongqing',
  description:
    'Top things to do in Chongqing: Hongyadong, Yangtze Cable Car, Ciqikou, Liziba Monorail, and more.',
  openGraph: {
    title: 'What to Do in Chongqing - Trail of China',
    description: 'Hongya Cave, cable car, and top attractions in Chongqing.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'What to Do in Chongqing - Trail of China' }],
  },
};

export default function ChongqingWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chongqing', href: '/destinations/chongqing' },
            { label: 'What to Do' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">What to Do in Chongqing</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing is dramatic, vertical, and full of cinematic viewpoints. These are the essential
            experiences for first-time visitors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>

          <div className="space-y-4">
            <Link href="/destinations/chongqing/what-to-do/hongya-cave" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Hongyadong (洪崖洞) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                A cliffside complex of stilted buildings glowing above the river. Visit after sunset when
                the entire facade lights up.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Best after 19:00 | 💰 Free to enter | 📍 Jialing River waterfront</p>
            </Link>

            <Link href="/destinations/chongqing/what-to-do/yangtze-cable-car" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Yangtze River Cable Car (长江索道) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                One of Chongqing&apos;s signature rides, crossing the Yangtze with panoramic views of bridges,
                high-rises, and layered roads.
              </p>
              <p className="text-sm text-[#64748b]">🕐 7:30-22:30 | 💰 ~¥20 one-way | 📍 Yuzhong to Nan&apos;an</p>
            </Link>

            <Link href="/destinations/chongqing/what-to-do/ciqikou" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Ciqikou Ancient Town (磁器口) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                Historic lanes with teahouses, street snacks, and old Chongqing character. Great for slow
                walking and sampling local bites.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Daytime to early evening | 💰 Free area entry | 📍 Shapingba District</p>
            </Link>

            <Link href="/destinations/chongqing/what-to-do/three-gorges-museum" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">4. Three Gorges Museum <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                The best place to understand Chongqing&apos;s wartime role, migration history, and Three Gorges
                cultural legacy.
              </p>
              <p className="text-sm text-[#64748b]">🕐 9:00-17:00 (closed Mondays) | 💰 Free | 📍 Across from People&apos;s Square</p>
            </Link>

            <Link href="/destinations/chongqing/what-to-do/liziba-monorail" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">5. Liziba Monorail Station (李子坝) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                Chongqing&apos;s famous train-through-a-building scene. A quick stop, but a must for the iconic
                city photo.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Trains all day | 💰 Free to view | 📍 Line 2, Liziba Station</p>
            </Link>

            <Link href="/destinations/chongqing/what-to-do/eling-park" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">6. Eling Park <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                A peaceful hilltop park with one of the best skyline panoramas over both major rivers and
                dense urban layers.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Sunrise to evening | 💰 Free | 📍 Yuzhong peninsula edge</p>
            </Link>
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

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Want something more authentic?</h2>
          <p className="text-gray-700 mb-3">
            Discover the real Chongqing with locals — old town walks behind the souvenir shops, hotpot boot camps, mountain city photography, and the legendary ¥2 ferry.
          </p>
          <Link href="/destinations/chongqing/local-experiences" className="inline-block text-[#af5d32] font-medium hover:underline">
            Local Experiences in Chongqing →
          </Link>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Chongqing Trip"
            description="See our curated 7-day itinerary with everything timed and mapped out."
            buttonText="See Chongqing itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Chongqing" />
        <RelatedArticles articles={[
          {title: 'Hongya Cave', description: 'The iconic stilt-house complex lit up at night.', href: '/destinations/chongqing/what-to-do/hongya-cave'},
          {title: 'Liziba Monorail', description: 'The train that goes right through a residential building.', href: '/destinations/chongqing/what-to-do/liziba-monorail'},
          {title: 'Where to Eat in Chongqing', description: 'Chongqing hotpot, xiaomian, and more.', href: '/destinations/chongqing/where-to-eat'},
          {title: 'Chongqing Local Tips', description: 'Navigating the 3D city like a local.', href: '/destinations/chongqing/local-tips'},
        ]} />
      </main>
    </div>
  );
}
