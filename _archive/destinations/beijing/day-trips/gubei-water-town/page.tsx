import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Gubei Water Town & Simatai Great Wall (古北水镇) — Night Walks on the Wall',
  description:
    'Gubei Water Town is a recreated canal village with lantern-lit streets — but the real draw is Simatai, the only Great Wall section open for night tours. Complete guide to tickets, bus times, and what to eat.',
  keywords: [
    'Gubei Water Town',
    'Gubei Water Town Beijing',
    'Simatai Great Wall night tour',
    'Gubeikou Water Town',
    'Simatai Great Wall at night',
    'Beijing day trips',
    'Gubei Water Town tickets',
    'Miyun day trip',
  ],
  openGraph: {
    title: 'Gubei Water Town & Simatai Great Wall (古北水镇) — Night Walks on the Wall',
    description:
      "Gubei Water Town + Simatai Great Wall — the only Great Wall section you can walk at night. Guide to tickets, transport, and timing.",
    url: 'https://www.trailofchina.com/destinations/beijing/day-trips/gubei-water-town',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Gubei Water Town and Simatai Great Wall at Night - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/beijing/day-trips/gubei-water-town',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'Can you really walk the Great Wall at night at Simatai?',
    answer:
      'Yes — Simatai is the only Great Wall section in China that offers official night tours. The wall is illuminated by floodlights from below, and you can walk a 500-metre restored stretch between several watchtowers. Night tours run from mid-June to mid-October, typically 5:30 PM to 9:00 PM (last entry 8:10 PM). You need a separate night ticket (¥200 including cable car) or the Gubei Water Town combo.',
  },
  {
    question: 'How do I get to Gubei Water Town from Beijing?',
    answer:
      'The easiest way is the direct tourist bus from Wangjing West metro station (望京西站, Line 13/15). Buses depart at 8:00 AM and 9:00 AM, returning at 5:00 PM and 9:00 PM (extended to 10 PM on summer weekends). The trip takes about 2 hours and costs ¥48 one-way. Book on the WeChat mini-program "古北水镇" or buy at the station. Alternatively, DiDi from central Beijing costs ¥250–350 one way (2 hours).',
  },
  {
    question: 'Is Gubei Water Town worth visiting?',
    answer:
      'As an authentic historic village — no. Gubei was built from scratch in 2014 on the site of an older settlement, and it shows. The canals, stone bridges, and dye workshops are beautiful but stage-managed. The real reason to come is the combo: a pleasant afternoon in the water town, dinner, then the Simatai night walk. The wall under floodlights is genuinely spectacular and unlike any other Great Wall experience.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Beijing', path: '/destinations/beijing' },
  { name: 'Day Trips', path: '/destinations/beijing/day-trips' },
  { name: 'Gubei Water Town', path: '/destinations/beijing/day-trips/gubei-water-town' },
]);

const searchQuery = encodeURIComponent('Gubei Water Town Simatai Great Wall tour');

export default function GubeiWaterTownPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AuthorByline date="May 2025" />
      <AttractionPage
        name="Gubei Water Town"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Beijing', href: '/destinations/beijing' },
          { label: 'Day Trips', href: '/destinations/beijing/day-trips' },
        ]}
        nameZh="古北水镇"
        city="Beijing"
        images={[
          { src: 'https://picsum.photos/seed/gubei-night-lanterns/800/600', alt: 'Gubei Water Town lantern-lit streets at night' },
          { src: 'https://picsum.photos/seed/gubei-simatai-night/800/600', alt: 'Simatai Great Wall illuminated by floodlights at night' },
          { src: 'https://picsum.photos/seed/gubei-canal/800/600', alt: 'Stone bridges and canals in Gubei Water Town' },
          { src: 'https://picsum.photos/seed/gubei-simatai-wall/800/600', alt: 'Simatai Great Wall watchtowers at dusk' },
          { src: 'https://picsum.photos/seed/gubei-dye-workshop/800/600', alt: 'Traditional dye workshop at Gubei Water Town' },
        ]}
        hook="Gubei Water Town is part recreated village, part light show — but the real reason to come is Simatai, the only Great Wall section you can walk at night under floodlights. The contrast of ancient wall and modern lighting is unforgettable."
        quickInfo={{
          price: '¥140 town + ¥40 wall (day) / ¥200 night',
          hours: 'Town 9:00–22:00; Wall night tour 17:30–21:00 (Jun–Oct)',
          bestTime: 'Jun–Oct for night tours; Sep–Oct best weather',
          metro: '2h by bus from Wangjing West',
        }}
        whyYouLoveIt={`Let's be honest about Gubei Water Town: it's not an authentic historic village. It was built from scratch in 2014, a kind of Chinese Colonial Williamsburg with canals, stone bridges, and workshops where you can watch dyeing, brewing, and paper-making demonstrations. If you've been to Wuzhen or Zhouzhuang, you know the model — tourist-ready, photogenic, and about as spontaneous as a film set.

But here's the thing: the setting works. Nestled against the mountains at the Gubeikou pass, with the Simatai Great Wall looming directly above it, Gubei has a backdrop that no other water town can match. And the night transformation is real — when the lanterns come on and the canals reflect the warm glow, it's genuinely beautiful, even knowing it was designed to be. The food stalls sell actual decent food (the roast lamb and buckwheat noodles are regional specialties), and the craft workshops are staffed by people who genuinely know their trade.

The payoff is Simatai at night. Walking the wall under floodlights, with the Miyun reservoir glittering below and the watchtowers lit in sequence up the mountain, is something that doesn't exist anywhere else in China. The wall feels different in the dark — quieter, more mysterious, more like the military structure it actually was. You understand why this pass was strategic: you can see for miles in every direction, even at night. It's the Great Wall experience that Badaling and Mutianyu can't provide.`}
        description={`Gubei Water Town (古北水镇) is a reconstructed canal-side village in Miyun District, about 120 km northeast of central Beijing. Built on the site of the historic Gubeikou garrison town at the foot of the Simatai Great Wall, it opened in 2014 as a tourism and cultural complex covering 9 km² with hotels, restaurants, workshops, and performance spaces.

The water town features a network of canals crossed by stone bridges, with buildings designed in Ming and Qing dynasty northern architectural styles. Key attractions include a traditional dye workshop (永顺染坊), a distillery (司马烧锅), a shadow puppet theatre, and a kite museum. In the evening, thousands of red lanterns illuminate the streets, and the town hosts a water-and-light show on the central canal.

Simatai Great Wall (司马台长城) rises directly above the water town. Built during the Ming dynasty under Qi Jiguang, it's known for its steep, narrow construction and the distinctive "Fairy Tower" (仙女楼) and "Heavenly Bridge" (天桥) — a narrow wall segment connecting two peaks. In 1987, Simatai was the first Great Wall section opened to foreign tourists, but the more dramatic sections were later closed for preservation. Since 2014, a 500-metre restored stretch has been opened for night tours, illuminated from below by floodlights — the only Great Wall section in China with official night access.

The combined experience works best as a late-afternoon arrival: explore the water town at dusk, eat dinner as the lanterns come on, then take the cable car up to Simatai for the night walk. The tourist bus schedule is designed for this rhythm.`}
        hours="Water town: 9:00–22:00; Simatai day: 9:00–17:00; Simatai night tour: 17:30–21:00 (mid-Jun to mid-Oct only)"
        price="Water town ¥140; Simatai day visit ¥40; Simatai night tour ¥200 (includes cable car); combo tickets available"
        nearestSubway="No metro — 2h by tourist bus from Wangjing West (望京西) or 2h by car/DiDi"
        bestTime="Mid-June to mid-October for night tours; September–October for comfortable weather and autumn colours"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=117.2266%2C40.6524%2C117.2666%2C40.6924&layer=mapnik&marker=40.6724%2C117.2466"
        address="Gubeikou Town, Miyun District, Beijing"
        addressZh="北京市密云区古北口镇"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Mutianyu Great Wall', description: 'The best Great Wall day trip for first-time visitors.', href: '/destinations/beijing/day-trips/mutianyu-great-wall' },
          { title: 'Great Wall of China', description: 'Overview of all Great Wall sections near Beijing.', href: '/destinations/beijing/what-to-do/great-wall' },
          { title: 'Ming Tombs', description: "The Ming emperors' burial valley — another classic day trip.", href: '/destinations/beijing/day-trips/ming-tombs' },
          { title: 'Chengde Mountain Resort', description: 'Qing dynasty summer capital — 1 hour by bullet train.', href: '/destinations/beijing/day-trips/chengde' },
          { title: 'Beijing Local Tips', description: 'Practical tips for navigating Beijing like a local.', href: '/destinations/beijing/local-tips' },
          { title: 'Where to Eat in Beijing', description: "Beijing's best dishes and where to find them.", href: '/destinations/beijing/where-to-eat' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By tourist bus (recommended): Direct buses depart from Wangjing West metro station (望京西站, Lines 13 and 15). Departures at 8:00 AM and 9:00 AM; return buses at 5:00 PM and 9:00 PM (extended to 10 PM on summer Fridays and Saturdays). Journey time: about 2 hours. Cost: ¥48 one-way. Book tickets in advance on the WeChat mini-program "古北水镇" or buy at the bus departure point. The bus drops you right at the water town entrance.

By DiDi or private car: From central Beijing, DiDi costs ¥250–350 one way and takes 1.5–2 hours depending on traffic. A full-day driver who waits costs ¥700–900. This is convenient if you want to stay for the night tour and return late, since the last tourist bus leaves at 9 PM.

By public bus (slower): Bus 980 Express from Dongzhimen to Miyun (70 min, ¥10), then local bus 51 to Gubeikou (60 min, ¥5). Total journey: 2.5–3 hours. Not recommended unless you're on a tight budget and have time to spare.`,
          whatToSkip: `Don't come here for "authentic China." Gubei Water Town is a purpose-built tourism complex — enjoyable on its own terms, but not a real village. If authentic historic architecture is your priority, go to a real water town like Wuzhen or Zhouzhuang near Shanghai instead.

Skip the expensive hotel restaurants inside the water town. The food is fine but priced at 2–3× what you'd pay outside. Instead, eat at the street food stalls along the main canal — the roast lamb skewers (烤羊腿), buckwheat noodles (饸饹面), and Miyun chestnut cakes (密云栗子糕) are regional specialties and much better value.

Avoid visiting on summer weekends if you can help it. The water town gets crowded with Beijing families escaping the heat, and the Simatai night tour has limited capacity. Weekday visits are much more pleasant. Also, the night tour is cancelled in rain or high wind — check the weather forecast before committing.`,
          photographyTips: `The Simatai night wall shot is one of the most unique Great Wall photos you can take. The floodlights create a dramatic upward glow on the stone, and the Miyun reservoir below reflects city lights on the far shore. Use a tripod (they're allowed on the night tour) and shoot long exposures from the watchtower platforms — 10–20 seconds at ISO 100 captures the light trails of the cable car and the ambient glow perfectly.

Inside the water town, the canals at dusk are the money shot. Position yourself on one of the stone bridges and shoot downstream as the lanterns reflect on the water. The best time is the 30-minute window when the sky still has blue in it but the lanterns are fully lit — pure magic for photography.

The dye workshop (永顺染坊) is photogenic during the day — long bolts of fabric hanging in the courtyard, dye vats in rich indigo and red. Shoot from the second floor looking down for a graphic, pattern-based composition.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Walk the Great Wall at Night
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a tour that includes the Gubei Water Town afternoon and the Simatai night walk — transport, tickets, and timing all sorted.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Gubei + Simatai Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Night tour access included</span>
                <span>✓ Round-trip transport</span>
                <span>✓ Dinner in water town</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}