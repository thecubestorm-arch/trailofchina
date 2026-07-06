import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mount Qingcheng (青城山) — Birthplace of Taoism, Day Trip from Chengdu',
  description:
    'Qingcheng is where Taoism was born — misty forests, hidden temples, and a tranquility that feels 2,000 years away from Chengdu\'s spicy chaos. Complete guide to Front Mountain, Back Mountain, and getting there.',
  keywords: [
    'Mount Qingcheng',
    'Qingcheng Mountain',
    '青城山',
    'Qingcheng day trip from Chengdu',
    'Front Mountain Qingcheng',
    'Back Mountain Qingcheng',
    'Taoism birthplace',
    'Qingcheng hiking',
  ],
  openGraph: {
    title: 'Mount Qingcheng (青城山) — Birthplace of Taoism',
    description:
      'Misty forests, hidden temples, and tranquility 2,000 years away from Chengdu. Complete guide to Front Mountain and Back Mountain.',
    url: 'https://www.trailofchina.com/destinations/chengdu/day-trips/mount-qingcheng',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Mount Qingcheng — Birthplace of Taoism - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/chengdu/day-trips/mount-qingcheng',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'Should I visit Front Mountain or Back Mountain at Qingcheng?',
    answer:
      'Front Mountain (前山) is the cultural route — Taoist temples, pavilions, and centuries of history in a compact area that takes 2–3 hours. Back Mountain (后山) is the nature route — hiking trails through gorges, waterfalls, and forest, taking 4–6 hours. If you want a relaxed half day with cultural sights, choose Front Mountain. If you want a proper hike with scenery, choose Back Mountain. Most casual visitors prefer Front Mountain.',
  },
  {
    question: 'How do I get to Mount Qingcheng from Chengdu?',
    answer:
      'Take the high-speed train from Chengdu to Qingchengshan Station (青城山站). Trains depart from Chengdu Railway Station (成都站) and take about 30 minutes (¥10–15). From the station, take bus 101 or a 10-minute taxi to the Front Mountain entrance. For Back Mountain, continue on bus 101 to the Tai\'an Township (泰安乡) terminus.',
  },
  {
    question: 'How difficult is the hiking at Qingcheng Back Mountain?',
    answer:
      'Back Mountain has well-maintained stone steps and boardwalks but is a genuine hike with significant elevation gain. Allow 4–6 hours for the full circuit. The cable cars (¥30 each, two sections) can cut the hike roughly in half. Wear proper shoes — the stone steps get slippery when wet. Bring water and snacks as mountain vendors are limited.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Chengdu', path: '/destinations/chengdu' },
  { name: 'Day Trips', path: '/destinations/chengdu/day-trips' },
  { name: 'Mount Qingcheng', path: '/destinations/chengdu/day-trips/mount-qingcheng' },
]);

const searchQuery = encodeURIComponent('Mount Qingcheng tour from Chengdu');

export default function MountQingchengPage() {
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
        name="Mount Qingcheng"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Chengdu', href: '/destinations/chengdu' },
          { label: 'Day Trips', href: '/destinations/chengdu/day-trips' },
        ]}
        nameZh="青城山"
        city="Chengdu"
        images={[
          { src: 'https://picsum.photos/seed/qingcheng-misty-path/800/600', alt: 'Misty stone path winding through bamboo forest on Mount Qingcheng' },
          { src: 'https://picsum.photos/seed/qingcheng-temple-gate/800/600', alt: 'Taoist temple gate on Mount Qingcheng with incense smoke' },
          { src: 'https://picsum.photos/seed/qingcheng-waterfall/800/600', alt: 'Waterfall cascading down mossy rocks on Qingcheng Back Mountain' },
          { src: 'https://picsum.photos/seed/qingcheng-cable-car/800/600', alt: 'Cable car rising above forest canopy on Mount Qingcheng' },
          { src: 'https://picsum.photos/seed/qingcheng-pavilion/800/600', alt: 'Wooden pavilion perched on a cliff edge overlooking Qingcheng valley' },
        ]}
        hook="Qingcheng is where Taoism was born — misty forests, hidden temples, and a tranquility that feels 2,000 years away from Chengdu's spicy chaos."
        quickInfo={{
          price: '¥80 (Front Mountain), ¥20 (Back Mountain)',
          hours: '8:00–17:30 (year-round)',
          bestTime: 'Mar–Jun, Sep–Nov for clear skies',
          metro: '30 min high-speed train + 10 min bus',
        }}
        whyYouLoveIt={`Chengdu is loud. The hotpot restaurants, the mahjong tables spilling onto sidewalks, the tour groups with megaphones, the motorcycles on every road — it's a city that doesn't know how to whisper. Mount Qingcheng is the antidote.

This is where Zhang Daoling founded Taoism in 142 AD, establishing the Celestial Masters tradition on a mountain so draped in mist that it feels like the clouds themselves are permanent residents. The temples are small, wooden, and painted in fading reds and golds — not the grand imperial architecture you see in the cities, but something older and humbler. Incense drifts through the courtyards. Daoist priests in simple robes tend the altars. A cat sleeps on the warm stones of a temple step. It's the most peaceful place within an hour of Chengdu, and most foreign tourists never make it here.

Front Mountain (前山) is the cultural route: temples, pavilions, and centuries of Taoist history in a compact area that you can cover in a half day. Back Mountain (后山) is where hikers go — gorges, waterfalls, dense forest, and a sense of isolation that feels much further than 60 km from a city of 20 million people. Both are worth your time. Neither will disappoint.`}
        description={`Mount Qingcheng (青城山) is a Taoist mountain located 65 km west of Chengdu in Dujiangyan City. It's one of the four sacred Taoist mountains in China and the birthplace of Taoism, where Zhang Daoling established the Way of the Celestial Masters in 142 AD. The mountain is divided into two distinct areas: Front Mountain (前山) and Back Mountain (后山).

Front Mountain is the cultural heart of Qingcheng — a cluster of Taoist temples, pavilions, and shrines connected by stone paths winding through bamboo and cypress forest. The main temples include Jianfu Palace (建福宫), Tianshi Cave (天师洞), and Shangqing Palace (上清宫). Most visitors spend 2–3 hours walking the circuit. A cable car (¥35 one way) covers the steepest section, saving about 45 minutes of climbing.

Back Mountain is the wilder, less-developed side — a 4–6 hour hiking loop through the Wulong Gorge (五龙沟), past waterfalls, across suspension bridges, and through forest so thick the sun barely reaches the trail. Two cable car sections (¥30 each) can shorten the hike. Entry is just ¥20, making it one of the best-value nature trips from Chengdu.

The mountain is accessible via high-speed train from Chengdu (30 minutes to Qingchengshan Station) followed by a 10-minute bus ride. It's easily combined with Dujiangyan in a single day trip.`}
        hours="8:00–17:30 (year-round)"
        price="¥80 (Front Mountain), ¥20 (Back Mountain), cable cars ¥30–35 each"
        nearestSubway="30 min high-speed train from Chengdu + 10 min bus"
        bestTime="March–June and September–November for clear skies and comfortable hiking"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=103.5629%2C30.8869%2C103.5829%2C30.9069&layer=mapnik&marker=30.8969%2C103.5729"
        address="Qingchengshan Town, Dujiangyan City, Sichuan"
        addressZh="四川省都江堰市青城山镇"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Dujiangyan Panda Valley', description: 'See pandas without the crowds — plus a 2,200-year-old UNESCO irrigation system.', href: '/destinations/chengdu/day-trips/dujiangyan-panda-valley' },
          { title: 'Leshan Giant Buddha', description: 'The world\'s largest stone Buddha — a 71-meter cliff carving you have to see from the water.', href: '/destinations/chengdu/day-trips/leshan-giant-buddha' },
          { title: 'Wenshu Monastery', description: "Chengdu's most peaceful Buddhist temple — incense, tea, and a slower pace.", href: '/destinations/chengdu/what-to-do/wenshu-monastery' },
          { title: 'Chengdu Day Trips', description: 'All the best day trips from Chengdu in one guide.', href: '/destinations/chengdu/day-trips' },
          { title: 'Chengdu Local Tips', description: 'Practical insider tips for navigating Chengdu.', href: '/destinations/chengdu/local-tips' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By high-speed train (recommended): Trains depart from Chengdu Railway Station (成都站) to Qingchengshan Station (青城山站) roughly every 20–30 minutes. The journey takes about 30 minutes and costs ¥10–15. From the station, take bus 101 (¥2, 10 minutes) or a taxi (¥10–15) to the Front Mountain entrance. For Back Mountain, continue on bus 101 to the Tai'an Township terminus.

By bus: Chengdu Chadianzi Bus Station (茶店子客运站) runs buses to Qingchengshan every 30 minutes (¥25, 90 minutes). Less convenient than the train but an option if train tickets sell out.

By private driver or DiDi: From central Chengdu, a DiDi costs ¥120–180 one way and takes about 70 minutes. Hiring a driver for the full day runs ¥400–600 and makes it easy to combine Qingcheng with Dujiangyan in one trip.`,
          whatToSkip: `Skip Qingcheng on rainy days unless you enjoy hiking on slippery stone steps with zero visibility. The mountain's beauty depends on the views and the forest light — both disappear in heavy rain. A light drizzle is fine and adds to the misty atmosphere, but a full downpour makes the experience miserable and the stairs dangerous.

Skip the tourist restaurants near the Front Mountain entrance — overpriced and mediocre. Pack snacks or eat at one of the small vegetarian noodle shops inside the mountain (the ones run by the temples are simple, cheap, and actually good).

Don't try to do both Front Mountain and Back Mountain in one day unless you're very fit and start at 7 AM. Most people pick one. Front Mountain for culture and a relaxed pace; Back Mountain for hiking and nature.`,
          photographyTips: `The mist is your best subject. Qingcheng's signature look is bamboo and cypress fading into cloud — shoot at the edges of the paths where the forest disappears into white. A 70–200mm telephoto compresses the layers of trees and mist beautifully.

At the temples, look for details: incense smoke curling past red pillars, cats sleeping on warm stone, lanterns hanging from eaves. These small moments are more compelling than wide-angle temple shots that every tourist takes.

On Back Mountain, the waterfalls and suspension bridges are the highlights. Use a polarizing filter to cut the glare on wet rocks, and shoot the waterfalls with a slow shutter speed (1/4 to 1 second) to get that silky water effect. A tripod helps, but balancing the camera on a rock works in a pinch.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Find Peace on Taoism&apos;s Sacred Mountain
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a Mount Qingcheng day trip from Chengdu with train tickets, a local guide, and flexible timing for Front Mountain temples or Back Mountain hiking.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Mount Qingcheng Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Round-trip train included</span>
                <span>✓ Choose Front or Back Mountain</span>
                <span>✓ Combine with Dujiangyan</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}