import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Liziba Monorail Station (李子坝) Chongqing | Train Through a Building',
  description: "Chongqing's viral internet sensation — a monorail train passing straight through a residential apartment building. The train enters on floor 6 and exits on floor 7 while residents live on the other floors. It went viral in 2018 and now has its own viewing platform.",
  openGraph: {
    title: 'Liziba Monorail Station (李子坝) Chongqing | Train Through a Building',
    description: "Chongqing's viral internet sensation — a monorail train passing straight through a residential apartment building.",
  },
};

const searchQuery = encodeURIComponent('Liziba Monorail Station Chongqing');

const tips = [
  { type: 'tip' as const, text: 'The viewing platform is across the street — best photo spot' },
  { type: 'tip' as const, text: 'Trains pass every 3-5 minutes' },
  { type: 'tip' as const, text: 'Ride the train yourself (Line 2)' },
  { type: 'tip' as const, text: 'There\'s a small tourist info center' },
  { type: 'tip' as const, text: 'Combine with Three Gorges Museum' },
  { type: 'photo' as const, text: 'Monorail entering the building from viewing platform' },
  { type: 'photo' as const, text: 'Train inside the building' },
  { type: 'photo' as const, text: 'The building itself' },
] as const;

const relatedLinks = [] as const;

export default function LizibaMonorailPage() {
  return (
    <AttractionPage
      name="Liziba Monorail Station"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="李子坝"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/liziba-train/800/600', alt: 'Monorail train entering the residential building at Liziba' },
        { src: 'https://picsum.photos/seed/liziba-building/800/600', alt: 'The apartment building with the train track running through it' },
        { src: 'https://picsum.photos/seed/liziba-platform/800/600', alt: 'Platform inside the building where residents and trains coexist' },
        { src: 'https://picsum.photos/seed/liziba-street/800/600', alt: 'Street view looking up at the train passing through the building' },
        { src: 'https://picsum.photos/seed/liziba-monorail/800/600', alt: 'Chongqing monorail on Line 2 approaching Liziba Station' },
      ]}
      hook="The train that goes THROUGH a residential building — yes, really. Stand on the platform inside someone's apartment building and watch the train arrive."
      quickInfo={{
        price: '¥2–7',
        hours: '6:30–22:30',
        bestTime: 'Anytime (10 min show)',
        metro: 'Liziba Station (Line 2)',
      }}
      whyYouLoveIt={`This is the engineering flex that went viral for a reason. A train actually passes through the middle of a 19-story residential building. Not under it, not next to it — through it, on the 6th and 7th floors, while people live their normal lives on every other floor. The building and the rail were planned together in the late 1990s when Chongqing realized it needed a metro but had no flat ground to put it on. So they built the rail into the building.

Standing on the viewing platform across the street, you watch the train emerge from what looks like a giant hole in someone's living room. It happens every 3–5 minutes, and every time, the crowd gasps like it's the first time. But the real Chongqing move is to actually ride it. Get on Line 2, stand at the front of the first carriage, and watch the train approach the building from the inside. You see the facade coming at you, then you're inside, then you're through — the whole thing takes about 10 seconds but it's one of the most surreal transit experiences on the planet.

This is peak Chongqing — a city so vertical, so constrained by geography, that it can't even put trains on the ground. It costs ¥2 to ride, takes 10 minutes to experience, and you'll talk about it for years.`}
      description="Chongqing's viral internet sensation — a monorail train passing straight through a residential apartment building. The train enters on floor 6 and exits on floor 7 while residents live on the other floors. It went viral in 2018 and now has its own viewing platform."
      hours="Viewing platform: all day, trains: 6:30-22:30"
      price="Free to watch, ¥2-7 to ride"
      nearestSubway="Liziba, Line 2"
      bestTime="Any time (frequent trains)"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5289%2C29.5527%2C106.5389%2C29.5587&layer=mapnik&marker=29.5557%2C106.5339"
      address="Liziba Station, Yuzhong District"
      addressZh="重庆市渝中区李子坝站"
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Yangtze River Cable Car", description: "Explore Yangtze River Cable Car, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Three Gorges Museum", description: "Explore Three Gorges Museum, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/three-gorges-museum" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
      practicalDetails={{
        gettingThere: `Take Metro Line 2 and get off at Liziba Station. Use the exit that leads toward the street — you'll emerge right across from the viewing platform. The platform is free, paved, and built specifically for tourists who want to photograph the train. You literally cannot miss it; just follow the crowd holding up phones.

To ride the train through the building, stay on Line 2 and ride in the direction of Yudong. Liziba is the station where the magic happens. Stand at the very front of the first carriage (there's a window) for the best view of the approach. The train slows down as it enters the building, so you'll get a good look at the interior of the station inside the apartment block.`,
        whatToSkip: `Nothing — this is free, quick, and there's nothing to waste money on. The viewing platform has a few souvenir stalls and a small info center, but they're unobtrusive. You don't need to book anything, queue for anything (except maybe a photo spot on the platform during peak hours), or spend more than ¥2 if you ride the train. It's one of the few attractions in Chongqing that's exactly as advertised and costs almost nothing.

That said, don't bother with the expensive "tour packages" that some operators sell online. You don't need a guide to watch a train go through a building. Just show up, look up, and wait 5 minutes.`,
        photographyTips: `The classic shot is from the street-level viewing platform looking up at the train entering the building. Wait for a train to approach — you'll hear it before you see it — and shoot in burst mode as it enters the facade. The best light is in the morning when the sun is behind you, or late afternoon when the building facade is in warm light.

For a different perspective, get on the train itself and shoot from inside the station as the train arrives. The view of the platform inside someone's apartment building, with residential doors visible alongside the metro platform, is genuinely surreal. The interior lighting is fluorescent and harsh, so don't expect magazine-quality shots — but the content is unforgettable.

From the street below, step back a bit and include the street life in the foreground — vendors, pedestrians, the chaos of Chongqing's streetscape. The contrast between ordinary daily life and a train passing through a building is what makes this place special.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want the Full Chongqing Transit Experience?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a private tour that combines Liziba, the Yangtze Cable Car, and hidden viewpoints — a local guide shows you how Chongqing moves.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Transit Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Liziba + cable car combined</span>
              <span>✓ Local English-speaking guide</span>
              <span>✓ Hidden photo spots</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
