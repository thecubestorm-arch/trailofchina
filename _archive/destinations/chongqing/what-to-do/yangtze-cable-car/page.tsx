import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Yangtze River Cable Car (长江索道) Chongqing | Ride, Views & Tickets',
  description: "Chongqing's most iconic experience — a cable car gliding over the Yangtze River between the Yuzhong peninsula and Nan'an district. The 4-minute ride gives you panoramic views of the mountain city skyline, the river, and the chaotic beauty of Chongqing's vertical urban landscape.",
  openGraph: {
    title: 'Yangtze River Cable Car (长江索道) Chongqing | Ride, Views & Tickets',
    description: "Chongqing's most iconic experience — a cable car gliding over the Yangtze River with panoramic views of the mountain city skyline.",
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Yangtze River Cable Car (长江索道) Chongqing | Ride, Views & Tickets - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Yangtze River Cable Car Chongqing');

const tips = [
  { type: 'tip' as const, text: 'Buy tickets online (WeChat mini-program) — lines are long' },
  { type: 'tip' as const, text: 'Go at sunset for the best photos' },
  { type: 'tip' as const, text: 'The north station (Yuzhong) is the main tourist entry' },
  { type: 'tip' as const, text: "Don't sit — stand by the window for photos" },
  { type: 'tip' as const, text: 'Combine with Hongya Cave visit' },
  { type: 'photo' as const, text: 'Skyline view from cable car' },
  { type: 'photo' as const, text: 'Yangtze River below' },
  { type: 'photo' as const, text: 'Cable car crossing at sunset' },
  { type: 'photo' as const, text: 'Both station platforms' },
] as const;

const relatedLinks = [] as const;

export default function YangtzeCableCarPage() {
  return (
    <AttractionPage
      name="Yangtze River Cable Car"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="长江索道"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/yangtze-cable-car/800/600', alt: 'Chongqing cable car crossing the Yangtze River at sunset' },
        { src: 'https://picsum.photos/seed/yangtze-crossing/800/600', alt: 'View from inside the cable car looking down at the Yangtze River' },
        { src: 'https://picsum.photos/seed/yangtze-night/800/600', alt: 'Night view from the cable car with city lights below' },
        { src: 'https://picsum.photos/seed/yangtze-skyline/800/600', alt: 'Chongqing skyline seen from the cable car high above the river' },
        { src: 'https://picsum.photos/seed/yangtze-river/800/600', alt: 'The Yangtze River flowing beneath the cable car route' },
      ]}
      hook="Chongqing's most cinematic commute — a 4-minute ride across the Yangtze River in a cable car that feels like flying through the skyline."
      quickInfo={{
        price: '¥20',
        hours: '7:00–22:00',
        bestTime: 'Sunset or night for lights',
        metro: 'Xiaoshizi (Line 1)',
      }}
      whyYouLoveIt={`There are few things in China that feel genuinely cinematic, and this is one of them. For ¥20, you step into a cable car that locals have been using as an actual commute since 1987, and for four minutes you're suspended over the Yangtze River with the entire mountain cityscape spreading out in every direction. The vertigo hits first — you're higher than you expect, and the river below looks both very far away and very real. Then the view takes over.

To your left, the Yuzhong peninsula rises in impossible layers of buildings, bridges, and overpasses stacked on top of each other like someone spilled a city from the sky. To your right, the newer Nan'an district climbs the opposite hillside. Straight ahead, the river bends and you can see the Chaotianmen confluence in the distance. The contrast is what gets you — ancient river, modern skyline, and this rickety cable car somehow bridging them both.

Locals use this thing every day to get to work. They stand there scrolling on their phones while tourists hyperventilate by the windows. That's part of the charm — this isn't a tourist ride built for views; it's working public transit that happens to have the best views in the city. Ride it at sunset when the sky turns orange behind the mountains, or at night when the whole city becomes a galaxy of lights below you. Either way, you won't forget it.`}
      description="Chongqing's most iconic experience — a cable car gliding over the Yangtze River between the Yuzhong peninsula and Nan'an district. The 4-minute ride gives you panoramic views of the mountain city skyline, the river, and the chaotic beauty of Chongqing's vertical urban landscape."
      hours="7:00-22:00"
      price="¥20 one-way, ¥30 round-trip"
      nearestSubway="Xiaoshizi, Line 1"
      bestTime="Sunset (6:00-7:30 PM) for golden hour skyline"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5794%2C29.5550%2C106.5894%2C29.5610&layer=mapnik&marker=29.5580%2C106.5844"
      address="Xinhua Road, Yuzhong District"
      addressZh="重庆市渝中区新华路"
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Hongya Cave", description: "Explore Hongya Cave, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/hongya-cave" },
        { title: "Ciqikou", description: "Explore Ciqikou, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/ciqikou" },
        { title: "Where to Eat in Chongqing", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
      practicalDetails={{
        gettingThere: `Take Metro Line 1 to Xiaoshizi Station. From the exit, walk about 5 minutes toward the river on Xinhua Road. The cable car station is clearly marked and hard to miss — just follow the crowd, or look for the cable lines running overhead. The north station (Xinhua Road) is the main tourist entry point and the one you'll want if you're coming from the city center.

If you ride one-way to the south bank (Nan'an), you can explore the Longmenhao area and then either take the cable car back (¥30 round-trip if bought together) or continue exploring the south side. The south bank station is less crowded for the return journey, so some travelers buy a one-way ticket, explore the south bank, and ride back from the less busy station. Either strategy works — just factor in the queue times.`,
        whatToSkip: `Weekends. The queue on a Saturday or Sunday can stretch to 2 hours, and the cable car cabins get packed to capacity with no room to move, let alone take photos. If your schedule allows, come on a weekday — preferably a Tuesday or Wednesday — when the wait is typically 15–30 minutes and you'll have breathing room inside the cabin.

The round-trip ticket sounds like a good deal but consider whether you'll actually use it. If you plan to explore the south bank after crossing (which you should — the Longmenhao old street area is worth a walk), you'll naturally make your way back by metro or taxi rather than returning to the cable car station. Buy one-way unless you're specifically doing a round-trip for the photography.`,
        photographyTips: `The best footage is video, not stills. Set your phone to record before you board, hold it steady against the window, and capture the whole 4-minute crossing. The motion of the city sliding by below, the river passing underneath, and the skyline growing and shrinking in the frame makes for footage that looks like a drone shot — except you're in a 40-year-old cable car that commuters take to work.

For stills, stand by the window on the side facing the Yuzhong peninsula (usually the left side when departing from the north station). The layered buildings, bridges, and overpasses create a vertigo-inducing composition that's pure Chongqing. At night, the city lights reflect off the river and the dark silhouette of the mountains behind creates a dramatic backdrop.

If you're serious about photography, ride at sunset during the "blue hour" — the 20 minutes after the sun goes down when the sky is deep blue and the city lights are fully on. The contrast is magical. For the absolute best shot, have someone photograph you from the south bank as your cabin arrives — the cable car framed against the illuminated skyline is an iconic Chongqing image.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want the Full Skyline Experience?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a private evening tour that combines the cable car, Hongya Cave, and a riverside viewpoint — a local guide handles the timing so you catch every moment.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book an Evening Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Cable car + Hongya Cave</span>
              <span>✓ Skip-the-line timing</span>
              <span>✓ Local English-speaking guide</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
