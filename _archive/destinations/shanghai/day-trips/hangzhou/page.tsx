import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hangzhou (杭州) — West Lake and Tea Country Day Trip from Shanghai',
  description:
    'One hour from Shanghai by bullet train, Hangzhou delivers West Lake cycling, Lingyin Temple\'s Buddhist caves, and Longjing tea hills where you can drink fresh-picked green tea overlooking the lake. Complete guide.',
  keywords: [
    'Hangzhou day trip from Shanghai',
    'West Lake Hangzhou',
    'Lingyin Temple',
    'Longjing tea village',
    'Hangzhou from Shanghai train',
    'West Lake bike ride',
    'Hangzhou tea country',
  ],
  openGraph: {
    title: 'Hangzhou (杭州) — West Lake and Tea Country Day Trip from Shanghai',
    description:
      "Marco Polo called it 'the finest city in the world' — West Lake, Lingyin Temple, and tea hills make it a perfect day escape from Shanghai.",
    url: 'https://www.trailofchina.com/destinations/shanghai/day-trips/hangzhou',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Hangzhou West Lake and Tea Country — Day Trip from Shanghai - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/shanghai/day-trips/hangzhou',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get from Shanghai to Hangzhou by train?',
    answer:
      'Take a G-series bullet train from Shanghai Hongqiao Railway Station to Hangzhou East Station (杭州东站). The trip takes 45–60 minutes and costs ¥73–117 depending on class. Trains run every 5–10 minutes from 6 AM to 9 PM. Book on Trip.com or 12306 in advance — weekend trains sell out, especially the morning departures.',
  },
  {
    question: 'Should I walk or bike around West Lake?',
    answer:
      'Bike, without question. West Lake\'s perimeter is about 15 km — walkable in theory but exhausting in practice, especially in summer heat. Shared bikes (HelloRide, Meituan) are available everywhere for ¥1.5–3 per ride. Cycling the full loop takes 90 minutes at a leisurely pace; walking takes 4+ hours. The Su Causeway (苏堤) section is pedestrian-only and perfect for a walking segment if you want both.',
  },
  {
    question: 'What should I eat in Hangzhou?',
    answer:
      'Hangzhou cuisine is one of China\'s Eight Great Traditions. Must-try dishes: Dongpo pork (东坡肉, braised pork belly), West Lake vinegar fish (西湖醋鱼), and beggar\'s chicken (叫花鸡). For lunch, head to a restaurant on or near Nanshan Road overlooking the lake. If you go to Longjing tea village, the farmhouses there serve home-cooked meals with tea-infused dishes — the tea-smoked ribs are incredible.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Shanghai', path: '/destinations/shanghai' },
  { name: 'Day Trips', path: '/destinations/shanghai/day-trips' },
  { name: 'Hangzhou', path: '/destinations/shanghai/day-trips/hangzhou' },
]);

const searchQuery = encodeURIComponent('Hangzhou West Lake private day tour from Shanghai');

export default function HangzhouPage() {
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
        name="Hangzhou"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Shanghai', href: '/destinations/shanghai' },
          { label: 'Day Trips', href: '/destinations/shanghai/day-trips' },
        ]}
        nameZh="杭州"
        city="Shanghai"
        images={[
          { src: 'https://picsum.photos/seed/hangzhou-west-lake/800/600', alt: 'West Lake with misty hills and traditional boat, Hangzhou' },
          { src: 'https://picsum.photos/seed/hangzhou-lingyin-temple/800/600', alt: 'Lingyin Temple Buddhist grotto carvings, Hangzhou' },
          { src: 'https://picsum.photos/seed/hangzhou-longjing-tea/800/600', alt: 'Longjing tea terraces on green hills above West Lake, Hangzhou' },
          { src: 'https://picsum.photos/seed/hangzhou-su-causeway/800/600', alt: 'Su Causeway walking path with willow trees along West Lake' },
          { src: 'https://picsum.photos/seed/hangzhou-leifeng-pagoda/800/600', alt: 'Leifeng Pagoda at sunset overlooking West Lake, Hangzhou' },
        ]}
        hook="Marco Polo called Hangzhou 'the finest city in the world' — and 700 years later, West Lake still earns the title. The tea hills behind it make it a perfect day escape from Shanghai."
        quickInfo={{
          price: 'West Lake free, Lingyin Temple ¥75',
          hours: 'West Lake 24h, Lingyin 7:00–18:00',
          bestTime: 'Mar–May, Sep–Nov, weekday mornings',
          metro: '1h bullet train from Hongqiao',
        }}
        whyYouLoveIt={`There are famous lakes, and then there's West Lake. It's been the subject of Chinese poetry and painting for 1,200 years, and when you see it — the causeways stretching across still water, the pagodas on the far shore, the willows trailing their branches in the shallows — you understand why. The lake is free, it's in the center of the city, and you can bike its entire perimeter in 90 minutes. That alone makes Hangzhou worth the trip.

But the real secret is the tea. The Longjing (Dragon Well) tea hills rise directly behind the lake, and the village at the top is where China's most prestigious green tea is grown and processed. You can walk into a farmer's house, sit at their kitchen table, and drink tea that was picked that morning while looking down at the lake below. No reservation, no tour, no ticket. Just walk up the hill and find a farmhouse with their door open. They'll pour you tea and sell you some if you want. It's one of the most genuine experiences you can have in China.

Lingyin Temple gets crowded, but the cave carvings in Feilai Peak beside it don't — hundreds of Buddhist figures carved into the limestone between the 10th and 14th centuries, scattered along forest paths. Walk past the main temple entrance and into the hillside paths. Most tour groups never get past the incense-burning courtyard.`}
        description={`Hangzhou (杭州) is 170 km southwest of Shanghai, a 45–60 minute ride on the G-series bullet trains from Shanghai Hongqiao. It's been one of China's most important cities for over a millennium — capital of the Southern Song dynasty (1127–1279), and a center of silk, tea, and Buddhist culture. Marco Polo visited in the late 13th century and famously described it as "the finest and most splendid city in the world."

West Lake (西湖) is the centerpiece — a 6.4 km² freshwater lake surrounded by gardens, temples, and causeways. It's free to access 24 hours a day. The two most famous causeways are the Su Causeway (苏堤, 2.8 km) and the Bai Causeway (白堤, 1 km), both lined with willow trees and peach blossoms. Shared bikes are available at every entrance; cycling the full perimeter is the best way to see it.

Lingyin Temple (灵隐寺, ¥75 entry including Feilai Peak) is one of China's wealthiest and most important Buddhist monasteries, founded in 326 AD. The adjacent Feilai Peak (飞来峰) has over 300 Buddhist stone carvings tucked into caves and cliff faces along forested walking paths — many predating the temple itself.

Longjing Tea Village (龙井村, free) sits in the hills above the lake's southwest corner. You can reach it on foot (30-minute uphill walk from the lake) or by DiDi. The terraced tea fields produce China's most celebrated green tea, and local farmers welcome visitors for tastings and purchases at farmhouse prices. Spring harvest (late March through April) is peak season — the hills are alive with pickers and the fresh tea is at its best.`}
        hours="West Lake 24h, Lingyin Temple 7:00–18:00 (winter to 17:30), Longjing village daylight hours"
        price="West Lake free, Lingyin Temple ¥75, Longjing Tea Village free (tea tasting ¥20–100 per person)"
        nearestSubway="1h bullet train from Shanghai Hongqiao Station to Hangzhou East"
        bestTime="March–May (spring tea harvest, blossoms) and September–November (clear skies, autumn colors)"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=120.1185%2C30.2220%2C120.1785%2C30.2620&layer=mapnik&marker=30.2420%2C120.1485"
        address="West Lake Scenic Area, Xihu District, Hangzhou, Zhejiang Province"
        addressZh="浙江省杭州市西湖区西湖风景名胜区"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'The Bund', description: "Shanghai's iconic waterfront promenade.", href: '/destinations/shanghai/what-to-do/bund' },
          { title: 'Yu Garden', description: 'A classical garden in the heart of Shanghai.', href: '/destinations/shanghai/what-to-do/yu-garden' },
          { title: 'Suzhou Day Trip', description: 'Classical gardens and Tongli water town.', href: '/destinations/shanghai/day-trips/suzhou' },
          { title: 'Zhujiajiao Water Town', description: "Shanghai's own 1,700-year-old water town.", href: '/destinations/shanghai/day-trips/zhujiajiao' },
          { title: 'Shanghai Local Tips', description: 'Practical tips for navigating Shanghai.', href: '/destinations/shanghai/local-tips' },
          { title: 'Where to Eat in Shanghai', description: "Shanghai's best dishes and where to find them.", href: '/destinations/shanghai/where-to-eat' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `From Shanghai Hongqiao Railway Station, take any G-series bullet train to Hangzhou East Station (杭州东站). The journey takes 45–60 minutes and costs ¥73 (second class) or ¥117 (first class). Trains depart every 5–10 minutes from roughly 6 AM to 9 PM. Book tickets on Trip.com or the 12306 app in advance — especially morning departures on weekends, which sell out days ahead.

From Hangzhou East Station to West Lake: Take Metro Line 1 to Fengqi Road Station (凤起路站), about 20 minutes, ¥4. Walk south 10 minutes to the lake's northeast corner. Alternatively, a DiDi from Hangzhou East to the lake costs ¥25–35 and takes 15–20 minutes.

For the return trip, the last G-series train from Hangzhou East to Shanghai Hongqiao typically departs around 9:30 PM. Check the schedule on the day — seasonal adjustments are common. If you're staying for dinner and a night view of the lake, book a later train.`,
          whatToSkip: `The "Impression West Lake" evening show — it's a Zhang Yimou-directed outdoor performance on the lake, and while technically impressive, tickets start at ¥300 and the narrative is incomprehensible unless you speak fluent Mandarin. You'll get a more authentic (and free) West Lake experience by walking the Su Causeway at sunset.

Skip the boat tours that circle the lake — they're ¥50–150 for a slow, crowded ride. If you want to be on the water, rent a rowboat from one of the lakeside docks (¥150/hour, negotiable). You row yourself, it's peaceful, and the lake is yours.

The commercial tea shops near the Leifeng Pagoda entrance sell overpriced Longjing tea in gift packaging. The real tea is up the hill in Longjing village — half the price, ten times the quality, and you get to talk to the person who grew it.`,
          photographyTips: `The classic West Lake shot is from the Su Causeway, looking south toward the distant hills with a willow-framed foreground. Early morning fog (common in spring and autumn) creates a painterly effect — arrive before 7 AM when the causeway is empty and the mist hangs low over the water.

Leifeng Pagoda at sunset is the money shot. The pagoda is on the lake's south shore, and the sun sets behind the hills to the west, painting the sky. The pagoda itself is a modern reconstruction with an elevator — purists groan, but the observation deck at the top gives the best elevated view of the entire lake. Sunset hours vary by season; check locally.

In Longjing village, the best photos are of the tea pickers at work (spring only — late March through April). Ask before photographing individuals, but the terrace landscapes are fair game. A 50mm lens captures the rolling hills and tea rows beautifully; switch to a wide angle to include the lake visible below the terraces.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Discover Hangzhou with a Local
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private Hangzhou day tour from Shanghai with hotel pickup, train tickets, and an English-speaking guide who knows the best tea farmhouses and hidden West Lake viewpoints.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Private Hangzhou Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Hotel pickup in Shanghai</span>
                <span>✓ Train tickets included</span>
                <span>✓ Tea tasting in Longjing village</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}