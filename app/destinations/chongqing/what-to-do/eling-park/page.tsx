import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Eling Park (鹅岭公园) Chongqing | Best Panoramic City Views',
  description: "The highest point on the Yuzhong peninsula and Chongqing's best free viewpoint. A quiet park with pavilions, a century-old mansion, and a two-story observation tower. From the top you see the Yangtze and Jialing rivers converging, the mountain skyline, and the vertical cityscape that makes Chongqing unique.",
  openGraph: {
    title: 'Eling Park (鹅岭公园) Chongqing | Best Panoramic City Views',
    description: "The highest point on the Yuzhong peninsula and Chongqing's best free viewpoint with a two-story observation tower.",
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Eling Park (鹅岭公园) Chongqing | Best Panoramic City Views - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Eling Park Chongqing');

const tips = [
  { type: 'tip' as const, text: 'Climb the tower (¥5) for the best 360° view' },
  { type: 'tip' as const, text: 'Go at night when the city lights up' },
  { type: 'tip' as const, text: 'The park is quiet' },
  { type: 'tip' as const, text: 'Combine with nearby Testbed 2 art district' },
  { type: 'tip' as const, text: 'Walk down through old residential areas' },
  { type: 'photo' as const, text: '360° view from tower' },
  { type: 'photo' as const, text: 'Sunset over two rivers' },
  { type: 'photo' as const, text: 'Illuminated skyline at night' },
  { type: 'photo' as const, text: 'Park pavilions' },
] as const;

const relatedLinks = [] as const;

export default function ElingParkPage() {
  return (
    <AttractionPage
      name="Eling Park"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="鹅岭公园"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/eling-park-view/800/600', alt: '360-degree panoramic view of Chongqing from Eling Park tower' },
        { src: 'https://picsum.photos/seed/eling-park-sunset/800/600', alt: 'Sunset over the Yangtze and Jialing rivers from Eling Park' },
        { src: 'https://picsum.photos/seed/eling-park-rivers/800/600', alt: 'The confluence of Yangtze and Jialing rivers seen from above' },
        { src: 'https://picsum.photos/seed/eling-park-garden/800/600', alt: 'Traditional pavilion and gardens in Eling Park' },
        { src: 'https://picsum.photos/seed/eling-park-night/800/600', alt: 'Chongqing city lights at night from Eling Park viewpoint' },
      ]}
      hook="The best free viewpoint in Chongqing — climb to the top for a 360° panorama of the Yangtze and Jialing rivers meeting."
      quickInfo={{
        price: 'Free',
        hours: '6:00–22:00',
        bestTime: 'Sunset',
        metro: 'Eling (Line 1)',
      }}
      whyYouLoveIt={`This is the place where Chongqing's geography finally makes sense. Standing on top of the Liangjiang Pavilion in Eling Park, you can see both rivers — the brown, muscular Yangtze curling in from the south and the greener Jialing sliding down from the north — meeting at Chaotianmen in a visible convergence line. For the first time, you understand why this city exists where it does, why it grew vertically instead of outward, and why the locals call it a "mountain city" with such pride.

The park itself is a quiet, tree-covered hilltop oasis in the middle of one of China's densest urban areas. Pavilions dot the hillside, old men practice tai chi on the lawns, and a century-old mansion (the former residence of a warlord) sits half-hidden in the trees. But you're here for the tower — a modest-looking two-story structure that, once climbed, reveals the single best view in the entire city. The ¥5 entrance fee is basically a donation to the view gods.

At sunset, the rivers turn gold, the mountains behind the city go purple, and the first lights of the skyline start flickering on. You can stand there for an hour without getting bored because every direction shows you something different — the river traffic, the cable cars, the bridges, the layers of buildings climbing the hills. This is the view that makes you finally "get" Chongqing, and it's completely free except for that tower fee.`}
      description="The highest point on the Yuzhong peninsula and Chongqing's best free viewpoint. A quiet park with pavilions, a century-old mansion, and a two-story observation tower. From the top you see the Yangtze and Jialing rivers converging, the mountain skyline, and the vertical cityscape that makes Chongqing unique."
      hours="6:00-22:00"
      price="Free entry (tower ¥5)"
      nearestSubway="Eling, Line 1"
      bestTime="Sunset or night for illuminated skyline"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5268%2C29.5494%2C106.5368%2C29.5554&layer=mapnik&marker=29.5524%2C106.5318"
      address="Eling Main Street, Yuzhong District"
      addressZh="重庆市渝中区鹅岭正街"
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Yangtze River Cable Car", description: "Explore Yangtze River Cable Car, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Hongya Cave", description: "Explore Hongya Cave, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/hongya-cave" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
      practicalDetails={{
        gettingThere: `Take Metro Line 1 to Eling Station. From the exit, it's a short but steep walk uphill — about 10 minutes on foot. The path is well-marked and paved, but it's genuinely uphill the whole way, which is very on-brand for Chongqing. If you're not up for the climb, a taxi or Didi can drop you right at the park entrance for under ¥15 from most central locations.

The park entrance is free and open from 6 AM to 10 PM. The Liangjiang Pavilion (两江亭) observation tower is inside the park, toward the highest point. Follow the signs or just walk uphill until you see the pagoda-style tower. There's a small ticket booth at the base — ¥5 gets you to the top floor with the 360° views.`,
        whatToSkip: `The cable car that runs near the park is overpriced for what is essentially a very short ride. It was once a functional transit link but is now a tourist-only attraction that costs ¥20 for a 2-minute trip. Skip it — the walk is more interesting, and the views from the tower are infinitely better. Save your money for the ¥5 tower entrance instead.

The park's interior tea houses and small restaurants are pleasant but overpriced. Bring your own water and snacks, or eat before you come. The mansion (飞阁) has been converted into a cafe that charges premium prices for average coffee. The building is beautiful, but you can admire the exterior without buying anything.`,
        photographyTips: `The sunset panorama from the top of the Liangjiang Pavilion is the money shot. Arrive about 45 minutes before sunset to secure a spot on the upper deck — it's small and fills up fast. The view looking west captures the sun dropping behind the hills, with the Jialing River glowing gold below. Bring a wide-angle lens if you have one; the 360° view is wider than any phone camera can comfortably capture.

For night shots, the tower is open until 10 PM and the city lights are spectacular. The challenge is camera shake — the upper deck can vibrate slightly when crowded, and long exposures are tricky without a tripod. A small travel tripod or even a beanbag to rest your camera on the railing makes a huge difference. The lights on the bridges and along the riverbanks create natural leading lines that draw the eye into the frame.

From the ground level of the park, the old mansion (飞阁) framed by trees makes a beautiful architectural shot, especially in the soft morning light. The traditional pavilions scattered through the park are also photogenic — try shooting through the trees to get layers of foreground, midground, and the distant skyline.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want the Best Sunset View in Chongqing?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a private sunset tour that combines Eling Park, Testbed 2 art district, and a riverside dinner — a local guide knows the timing and the hidden spots.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Sunset Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Eling Park + Testbed 2 combined</span>
              <span>✓ Local English-speaking guide</span>
              <span>✓ Best timing for golden hour</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
