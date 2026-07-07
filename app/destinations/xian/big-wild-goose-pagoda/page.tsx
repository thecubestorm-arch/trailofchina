import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Big Wild Goose Pagoda: Xi\'an\'s Most Iconic Buddhist Landmark',
  description:
    'Visit the Big Wild Goose Pagoda — a 7th-century Buddhist pagoda and Xi\'an symbol. Complete guide with hours, tickets, night fountain show, and nearby temples.',
  openGraph: {
    title: 'Big Wild Goose Pagoda: Xi\'an\'s Most Iconic Buddhist Landmark',
    description:
      'Visit the Big Wild Goose Pagoda — a 7th-century Buddhist pagoda and Xi\'an symbol. Complete guide with hours, tickets, night fountain show, and nearby temples.',
    url: 'https://www.trailofchina.com/destinations/xian/what-to-do/big-wild-goose-pagoda',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent("Big Wild Goose Pagoda tour Xi'an");

export default function BigWildGoosePagodaPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Come for the evening fountain show (free) — it starts around 8 PM and is spectacular with the pagoda lit up',
    },
    {
      type: 'tip' as const,
      text: 'North Square is the best spot for photos — wide open space with the pagoda framed against the sky',
    },
    {
      type: 'tip' as const,
      text: 'Pagoda climb costs extra (¥25) but worth it — 7 stories with views over Xi\'an and close-up looks at Buddhist relics',
    },
    {
      type: 'tip' as const,
      text: 'Allow 2-3 hours to explore the full Da Ci\'en Temple complex, not just the pagoda',
    },
    {
      type: 'tip' as const,
      text: 'Combine with a visit to nearby Small Wild Goose Pagoda (小雁塔) for a full day of Tang dynasty Buddhist sites',
    },
  ];


  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'Pagoda reflection in the North Square fountain pools — especially beautiful at dusk with lights on',
    },
    {
      type: 'photo' as const,
      text: 'Climbing the pagoda stairs — capture the ancient brickwork and Buddhist statues on each level',
    },
    {
      type: 'photo' as const,
      text: 'Fountain show at night — the water dances in sync with music while the pagoda glows in the background',
    },
    {
      type: 'photo' as const,
      text: 'Da Ci\'en Temple courtyard — traditional architecture with incense burners and prayer flags',
    },
  ];

  return (
    <AttractionPage
      name="Big Wild Goose Pagoda"
      breadcrumbs={[
      { label: "Home", href: '/' },
      { label: "Destinations", href: '/destinations' },
      { label: "Xi'an", href: '/destinations/xian' },
      { label: "What to Do", href: '/destinations/xian/what-to-do' },
    ]}
      nameZh="大雁塔"
      city="Xi'an"
      hook="A 1,300-year-old pagoda that leans slightly — Xi'an's own Pisa, with a nightly fountain show that's better than the pagoda."
      quickInfo={{
        price: '¥40 pagoda · ¥25 temple · Free fountain',
        hours: '8:00–17:00 · Fountain ~20:00',
        bestTime: 'Evening for fountain show',
        metro: 'Dayanta (Line 3)',
      }}
      whyYouLoveIt={`The pagoda itself is ancient and beautiful — a seven-story brick tower built in 652 AD by the monk Xuanzang to house Buddhist scriptures he brought back from India. Xuanzang's journey inspired Journey to the West, one of China's most beloved novels, and standing at the base of the pagoda he built, you can feel the weight of that story. The tower leans slightly to the west (like Xi'an's own Pisa) and has survived earthquakes, wars, and 1,300 years of weathering. Climbing the narrow interior stairs to the top is steep but worth it for the views over the temple complex and the city beyond.

But honestly? The nightly fountain show is the real star. Asia's largest musical fountain erupts in choreographed water jets synchronized to music, with the illuminated pagoda as the backdrop — and it's completely free. The show runs for about 20 minutes and draws crowds that fill the entire North Square. It's touristy, it's loud, it's unapologetically spectacular, and it's one of the most memorable things you'll do in Xi'an. Come for the history, stay for the fountain.`}
      images={[
        { src: 'https://picsum.photos/seed/dayanta-pagoda/800/600', alt: "Big Wild Goose Pagoda at Da Ci'en Temple" },
        { src: 'https://picsum.photos/seed/dayanta-fountain/800/600', alt: "North Square musical fountain show" },
        { src: 'https://picsum.photos/seed/dayanta-night/800/600', alt: "Pagoda illuminated at night" },
        { src: 'https://picsum.photos/seed/dayanta-temple/800/600', alt: "Da Ci'en Temple courtyard" },
        { src: 'https://picsum.photos/seed/dayanta-park/800/600', alt: "Pagoda park and gardens" },
      ]}
      practicalDetails={{
        gettingThere: `Metro Line 3 to Dayanta (Big Wild Goose Pagoda) Station. Take Exit C and walk 5 minutes north — you'll see the pagoda as soon as you emerge. The station is literally named after the pagoda, so it's impossible to miss. The walk takes you through a pleasant pedestrian plaza with shops and cafes.

If you're coming from the City Wall area, take Line 4 to Dayanta Station and transfer to Line 3, or just take a DiDi for ¥15–20 — it's faster and avoids the transfer.`,
        whatToSkip: `Climbing the pagoda costs an extra ¥25 on top of the temple entry fee, and the view from the top is underwhelming — Xi'an's skyline is not particularly photogenic from up there, and the windows are small and dirty. The better view is from the ground looking up at the pagoda, or from the North Square fountain area where you get the full pagoda framed against the sky.

The temple's "Buddhist relic exhibition" is a small room with replica artifacts and poor English signage. Skip it unless you're deeply interested in Buddhist history. The real value of the temple complex is the architecture, the courtyards, and the atmosphere — not the exhibits.`,
        photographyTips: `The night fountain show is the money shot — the illuminated pagoda reflected in the fountain pools with water jets dancing in the foreground. Arrive 30 minutes early to stake out a spot near the center of North Square, about 50 meters back from the fountain edge. This distance gives you the full pagoda in frame with the fountain in the foreground. A tripod is essential for long-exposure water shots during the show.

For the pagoda silhouette at sunset, position yourself at the south end of the North Square fountain pools just before the sun drops below the horizon. The pagoda backlit against an orange sky, with its reflection in the still water, is the single most beautiful shot in Xi'an. The best time is 15–20 minutes before sunset in summer, or 30 minutes before in winter.`,
      }}
      description={`The Big Wild Goose Pagoda (大雁塔) is Xi'an's most iconic Buddhist monument and a towering symbol of the city's golden age as the eastern terminus of the Silk Road. Built in 652 AD during the Tang Dynasty, this seven-story brick pagoda was commissioned by the famous monk Xuanzang ( immortalized in Journey to the West) to house Buddhist scriptures and relics he brought back from his epic 17-year pilgrimage to India.

Standing 64 meters tall, the pagoda exemplifies classic Tang dynasty architecture with its simple, elegant lines and slightly inward-sloping walls. Unlike many wooden pagodas that burned down over the centuries, this brick structure has survived earthquakes, wars, and 1,300 years of weathering. You can climb the interior stairs (steep and narrow) to each of the seven levels, where Buddhist statues and ancient inscriptions await. From the top, you'll enjoy sweeping views over Xi'an and the surrounding temple grounds.

The pagoda sits within the Da Ci\'en Temple complex (大慈恩寺), a peaceful oasis of traditional Chinese Buddhist architecture. The temple's main halls feature colorful murals, gilded Buddha statues, and incense-filled courtyards where monks still conduct daily prayers. The grounds are beautifully landscaped with pine trees, stone steles, and quiet paths perfect for contemplation.

Just north of the temple lies the North Square, home to Asia's largest musical fountain show. Every evening (typically 8 PM, check schedule), water jets dance in choreographed patterns synchronized to music, with the illuminated pagoda as the backdrop — and it's completely free to watch. This combination of ancient spirituality and modern spectacle makes the Big Wild Goose Pagoda a must-visit landmark that captures Xi'an's ability to honor its past while embracing the present.`}
      hours="8:00-17:30 (temple complex), fountain show ~20:00 daily"
      price="Temple ¥40, Pagoda climb extra ¥25, Fountain show free"
      nearestSubway="Dayanta (Big Wild Goose Pagoda), Line 3 or 4"
      bestTime="Late afternoon (4-6 PM) to explore temple, stay for evening fountain show"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=108.9544%2C34.2168%2C108.9644%2C34.2228&layer=mapnik&marker=34.2198%2C108.9594"
      address="1 Yanta Road, Yanta District"
      addressZh="西安市雁塔区雁塔路1号"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "City Wall", description: "Explore City Wall, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/city-wall" },
        { title: "Muslim Quarter", description: "Explore Muslim Quarter, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/muslim-quarter" },
        { title: "Bell & Drum Tower", description: "Explore Bell & Drum Tower, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/bell-drum-tower" },
        { title: "Terracotta Warriors", description: "Explore Terracotta Warriors, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/terracotta-warriors" },
        { title: "Where to Eat in Xi'an", description: "Discover Xi'an's best local dishes and restaurants.", href: "/destinations/xian/where-to-eat" },
        { title: "Xi'an Local Tips", description: "Practical tips for navigating Xi'an like a local.", href: "/destinations/xian/local-tips" },
        { title: "Xi'an Guide", description: "Complete guide to planning your Xi'an trip.", href: "/destinations/xian" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than Just the Pagoda View?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Discover the full story. Book a tour that covers the Buddhist history, includes the evening fountain show, and gets you access to the monastery grounds beyond the tourist areas.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Guided Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Buddhist history deep dive</span>
              <span>✓ Evening fountain show</span>
              <span>✓ Monastery ground access</span>
            </div>
          </div>
        </section>
      }
    />
  );
}