import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Cycling the Xi\'an City Wall: The Ultimate Ancient Wall Experience',
  description:
    'Rent a bike and cycle the 14km ancient City Wall of Xi\'an. Complete guide with hours, tickets, best time to visit, and tips for the ultimate wall experience.',
  openGraph: {
    title: 'Cycling the Xi\'an City Wall: The Ultimate Ancient Wall Experience',
    description:
      'Rent a bike and cycle the 14km ancient City Wall of Xi\'an. Complete guide with hours, tickets, best time to visit, and tips for the ultimate wall experience.',
    url: 'https://www.trailofchina.com/destinations/xian/what-to-do/city-wall',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent("Xi'an City Wall cycling tour");

export default function CityWallPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Go early morning (7-9 AM) or sunset (5-7 PM) for the best light and fewer crowds',
    },
    {
      type: 'tip' as const,
      text: 'Rent a bike at the South Gate (Yongningmen) — it\'s the most scenic entrance with the best facilities',
    },
    {
      type: 'tip' as const,
      text: 'Allow 2 hours for the full 14km loop — the wall is wide and flat, suitable for all fitness levels',
    },
    {
      type: 'tip' as const,
      text: 'Bring water and sunscreen — there\'s limited shade on the wall, especially in summer',
    },
    {
      type: 'tip' as const,
      text: 'Bike rental costs ¥45 for 3 hours — bring your passport or leave a deposit',
    },
  ];


  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'South Gate at sunset — the illuminated watchtowers create a stunning silhouette against the evening sky',
    },
    {
      type: 'photo' as const,
      text: 'Watchtower interiors — climb the ancient steps for panoramic views of old and new Xi\'an',
    },
    {
      type: 'photo' as const,
      text: 'Cycling shot on the wall — capture the contrast between ancient bricks and modern city skyline',
    },
    {
      type: 'photo' as const,
      text: 'Night view from the wall — the city lights create a magical atmosphere after dark',
    },
  ];

  return (
    <AttractionPage
      name="Xi'an City Wall"
      breadcrumbs={[
      { label: "Home", href: '/' },
      { label: "Destinations", href: '/destinations' },
      { label: "Xi'an", href: '/destinations/xian' },
      { label: "What to Do", href: '/destinations/xian/what-to-do' },
    ]}
      nameZh="西安城墙"
      city="Xi'an"
      hook="The most complete city wall in China — rent a bike and ride 14 km on top of 600-year-old fortifications."
      quickInfo={{
        price: '¥54',
        hours: '8:00–22:00',
        bestTime: 'Sunset for golden hour',
        metro: 'Yongningmen (Line 2)',
      }}
      whyYouLoveIt={`Cycling the full 14-kilometer loop is the single best way to understand Xi'an. The wall is 12 meters high and 15 meters thick at the base — wide enough that you're literally riding on top of a 600-year-old fortress. The South Gate (Yongningmen) is the most grand, with a massive watchtower complex that looks like something from a war movie. Rent a bike there for ¥45 and give yourself two hours for the full loop, stopping at watchtowers along the way.

Sunset is the absolute best time. The golden light hits the ancient bricks, the city begins to glow, and from the wall you can see the contrast between the old city within (traditional rooftops, the Muslim Quarter's minaret) and the modern metropolis beyond. At night, the wall is floodlit in warm amber and the watchtowers glow like lanterns. It's one of the most romantic things you can do in China, and almost no Western tourists know about it.`}
      images={[
        { src: 'https://picsum.photos/seed/city-wall-bike/800/600', alt: "Cycling on top of Xi'an ancient City Wall" },
        { src: 'https://picsum.photos/seed/city-wall-sunset/800/600', alt: "Xi'an City Wall at golden hour" },
        { src: 'https://picsum.photos/seed/city-wall-gate/800/600', alt: "South Gate watchtower of Xi'an City Wall" },
        { src: 'https://picsum.photos/seed/city-wall-view/800/600', alt: "View of old and new Xi'an from the City Wall" },
        { src: 'https://picsum.photos/seed/city-wall-moat/800/600', alt: "City Wall moat reflections at dusk" },
      ]}
      practicalDetails={{
        gettingThere: `Metro Line 2 to Yongningmen Station (South Gate). Use Exit C and you're literally at the base of the watchtower. This is the main entrance — the most grand, best lit, and the only one with full bike rental facilities. The other three gates (North, East, West) also have access but fewer amenities.

If you enter from South Gate, walk through the tunnel under the wall and emerge into the inner courtyard. Ticket booths are on your right; bike rental is straight ahead past the archery range.`,
        whatToSkip: `Electric golf carts (¥80) are a tourist trap — they drive slowly, the drivers talk nonstop in Chinese, and you miss the entire point of being on the wall. Rent a bicycle instead. The bikes are single-speed cruisers with baskets and are perfectly adequate for the flat, wide surface.

The archery range inside the South Gate courtyard is overpriced (¥30 for 10 arrows) and not authentic — the bows are modern compound bows, not traditional Chinese recurve. Skip it unless you're traveling with kids who need a distraction.`,
        photographyTips: `Sunset from any watchtower facing west is the money shot — the golden light on the ancient bricks with the modern city skyline behind. The best spot is the Southeast Corner Tower, which juts out at a 45-degree angle and gives you unobstructed views in three directions.

For the "ancient vs modern" contrast shot, stop at the Northeast section where the wall runs parallel to the train tracks — you can frame a high-speed train passing below the 600-year-old fortification. At night, the moat reflections are stunning from the bridge just south of the South Gate. Bring a tripod for clean night shots.`,
      }}
      description={`The Xi'an City Wall is the best-preserved ancient city wall in China, and cycling its 14-kilometer perimeter is the ultimate way to experience this 600-year-old Ming dynasty fortress. Built in 1370 during the reign of Emperor Zhu Yuanzhang, the wall originally protected the city from invaders and today stands as a testament to ancient Chinese military architecture.

The wall is massive — 12 meters tall, 15 meters thick at the base, and wide enough on top for soldiers to march in formation. Today, it's wide enough for cyclists and pedestrians to enjoy leisurely laps while taking in panoramic views of Xi'an. From the wall, you can see the contrast between the old city within (with its traditional architecture and the Muslim Quarter) and the modern metropolis sprawling beyond.

Four main gates punctuate the wall: South Gate (Yongningmen, the most grand), North Gate (Anyuanmen), East Gate (Changlemen), and West Gate (Andingmen). The South Gate is the highlight, with its impressive watchtower complex and beautiful evening illuminations. Renting a bike at any gate lets you complete the full loop in about 2 hours, stopping at watchtowers along the way for photos and rest.

The wall is especially magical at sunset when the golden light bathes the ancient bricks and the city begins to glow. Evening visits are popular, and the wall is lit beautifully after dark. Whether you're a history buff, photography enthusiast, or just looking for a unique way to see Xi'an, cycling the City Wall is an unforgettable experience.`}
      hours="8:00-22:00 (varies by season, check ahead)"
      price="¥54 (includes wall access), bike rental ¥45/3 hours"
      nearestSubway="Yongningmen (South Gate), Line 2"
      bestTime="Early morning (7-9 AM) or sunset (5-7 PM) for best light and fewer crowds"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=108.9158%2C34.2621%2C108.9258%2C34.2681&layer=mapnik&marker=34.2651%2C108.9208"
      address="South Gate, Beilin District"
      addressZh="西安市碑林区南门"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Terracotta Warriors", description: "2,200-year-old army of China's first emperor, Qin Shi Huang.", href: "/destinations/xian/what-to-do/terracotta-warriors" },
        { title: "Muslim Quarter", description: "Historic Islamic neighborhood with amazing street food.", href: "/destinations/xian/what-to-do/muslim-quarter" },
        { title: "Yangroupaomo", description: "Xi'an's iconic lamb-oatmeal breakfast soup.", href: "/destinations/xian/where-to-eat/yangroupaomo" },
        { title: "Bell & Drum Tower", description: "Explore Bell & Drum Tower, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/bell-drum-tower" },
        { title: "Big Wild Goose Pagoda", description: "Explore Big Wild Goose Pagoda, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/big-wild-goose-pagoda" },
        { title: "Where to Eat in Xi'an", description: "Discover Xi'an's best local dishes and restaurants.", href: "/destinations/xian/where-to-eat" },
        { title: "Xi'an Local Tips", description: "Practical tips for navigating Xi'an like a local.", href: "/destinations/xian/local-tips" },
        { title: "Xi'an Guide", description: "Complete guide to planning your Xi'an trip.", href: "/destinations/xian" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than a Standard Wall Walk?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Ride the wall at sunset. Book a cycling tour that includes the best gate views, historical context for each section, and the magic of the city at night.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Cycling Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Sunset cycling experience</span>
              <span>✓ Gate history explained</span>
              <span>✓ Night views included</span>
            </div>
          </div>
        </section>
      }
    />
  );
}