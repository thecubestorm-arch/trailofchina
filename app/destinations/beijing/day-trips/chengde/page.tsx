import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Chengde Mountain Resort (承德避暑山庄) — The Best Day Trip Nobody Takes from Beijing',
  description:
    'Chengde was the Qing dynasty\'s summer capital: 5.6 km² of imperial gardens, Tibetan temples, and a "Little Potala Palace" — all 2 hours by bullet train from Beijing. Almost no foreign tourists visit.',
  keywords: [
    'Chengde day trip from Beijing',
    'Chengde Mountain Resort',
    'Bishu Shanzhuang',
    'Putuozongcheng Temple',
    'Little Potala Palace Chengde',
    'Chengde Eight Outer Temples',
    'Beijing day trips',
  ],
  openGraph: {
    title: 'Chengde Mountain Resort (承德避暑山庄) — The Best Day Trip Nobody Takes from Beijing',
    description:
      "Chengde was the Qing dynasty's summer capital: 5.6 km² of imperial gardens and Tibetan temples, 2 hours by bullet train from Beijing.",
    url: 'https://www.trailofchina.com/destinations/beijing/day-trips/chengde',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Chengde Mountain Resort — Qing Dynasty Summer Palace - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/beijing/day-trips/chengde',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'Can I visit Chengde as a day trip from Beijing?',
    answer:
      'Yes, but it\'s a long day. The high-speed train takes about 1 hour each way from Beijing North station (with some services from Beijing Chaoyang). If you catch the 7:00 AM train, you\'ll have about 6–7 hours in Chengde before the last return train around 6 PM. For a more relaxed visit, stay overnight — Chengde has decent hotels near the Mountain Resort from ¥200–400/night.',
  },
  {
    question: 'What should I see first in Chengde — the Mountain Resort or the temples?',
    answer:
      'Start with the Mountain Resort (Bishu Shanzhuang) in the morning while it\'s cool. The complex is enormous — 5.6 km² — and you\'ll need at least 3 hours for the lakes, palaces, and mountain area. After lunch, visit Putuozongcheng Temple (the "Little Potala") — it\'s the most visually striking of the Eight Outer Temples and only 10 minutes away by taxi.',
  },
  {
    question: 'How much does it cost to visit Chengde?',
    answer:
      'The high-speed train from Beijing costs about ¥110–150 one-way. Mountain Resort entry is ¥130 (peak season, Jun–Sep) or ¥90 (off-peak). Putuozongcheng Temple is ¥80. Other temples range ¥40–80. Budget ¥350–500 total for transport and entry, plus meals.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Beijing', path: '/destinations/beijing' },
  { name: 'Day Trips', path: '/destinations/beijing/day-trips' },
  { name: 'Chengde', path: '/destinations/beijing/day-trips/chengde' },
]);

const searchQuery = encodeURIComponent('Chengde Mountain Resort tour from Beijing');

export default function ChengdePage() {
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
        name="Chengde Mountain Resort"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Beijing', href: '/destinations/beijing' },
          { label: 'Day Trips', href: '/destinations/beijing/day-trips' },
        ]}
        nameZh="承德避暑山庄"
        city="Beijing"
        images={[
          { src: 'https://picsum.photos/seed/chengde-palace/800/600', alt: 'Imperial palace buildings at Chengde Mountain Resort' },
          { src: 'https://picsum.photos/seed/chengde-little-potala/800/600', alt: 'Putuozongcheng Temple — the Little Potala Palace of Chengde' },
          { src: 'https://picsum.photos/seed/chengde-lakes/800/600', alt: 'Serene lakes and pavilions inside Bishu Shanzhuang' },
          { src: 'https://picsum.photos/seed/chengde-temple-roof/800/600', alt: 'Tibetan-style golden roof of a Chengde Outer Temple' },
          { src: 'https://picsum.photos/seed/chengde-garden/800/600', alt: 'Imperial garden pathways at Chengde Mountain Resort' },
        ]}
        hook="Chengde was the Qing dynasty's summer escape — 5.6 km² of imperial gardens and Tibetan temples, all 2 hours from Beijing by bullet train. Almost no foreign tourists visit."
        quickInfo={{
          price: '¥130 Mountain Resort + ¥80 Putuozongcheng',
          hours: '8:00–17:30 (summer), 8:30–17:00 (winter)',
          bestTime: 'May–Oct, especially Sep',
          metro: '1h by bullet train from Beijing',
        }}
        whyYouLoveIt={`Chengde is the day trip that makes you feel like you've discovered something. While every other tourist is queueing at the Great Wall or Forbidden City, you're walking through an imperial summer resort the size of a small city, built by emperors who needed to escape Beijing's brutal summers. The Kangxi and Qianlong emperors spent months here every year — and when you see the scale of the place, you understand why.

The Mountain Resort (Bishu Shanzhuang) is the centrepiece: 5.6 square kilometres of palaces, lakes, pagodas, and mountain paths. The front section is a sequence of reception halls where the emperors held court. The middle section is a lake district with pavilions and bridges that rival any garden in Suzhou. The back section climbs into pine-covered hills with panoramic viewpoints. You could spend an entire day here and not see everything.

But the real shock is the Eight Outer Temples, especially Putuozongcheng Temple. Built in 1771 as a replica of Lhasa's Potala Palace, it rises in white and red tiers above the city — you can see it from the Mountain Resort's hill paths. Walking through its halls with their Tibetan murals and gilded Buddhas, you're reminded that the Qing empire wasn't just Chinese — it was Manchu, Mongolian, and Tibetan all at once. Chengde was built to hold that empire together.`}
        description={`Chengde (承德) sits 230 km northeast of Beijing in Hebei province, reachable in roughly 1 hour by high-speed train. For over a century (1703–1820), it served as the Qing dynasty's secondary capital, where emperors Kangxi and Qianlong spent several months each year conducting state affairs, receiving foreign envoys, and hunting.

The Mountain Resort (避暑山庄, Bishu Shanzhuang) was begun by Kangxi in 1703 and expanded by Qianlong over 89 years. At 5.6 km², it's the largest existing imperial garden- palace complex in the world — twice the size of the Summer Palace in Beijing. It has four distinct zones: the palace area (front), the lake area (centre), the plain area (grasslands for Mongolian-style hunting encampments), and the mountain area (back), which covers 80% of the total area.

Surrounding the Mountain Resort are the Eight Outer Temples (外八庙), built between 1713 and 1780. These are not Chinese-style temples — they're architectural statements of Qing imperial power, built in Tibetan, Mongolian, and Han Chinese styles to impress visiting delegations from those regions. The most spectacular is Putuozongcheng Temple (普陀宗乘之庙), modelled on Lhasa's Potala Palace, with its tiered white walls and crimson central hall rising dramatically above the surrounding hills.

Today Chengde receives about 4 million domestic tourists per year but only a handful of international visitors. The infrastructure is solid — high-speed train, good hotels, decent restaurants — but almost all information is in Chinese only. This makes it a rewarding destination for travellers willing to navigate without an English safety net.`}
        hours="8:00–17:30 (peak season Jun–Sep), 8:30–17:00 (off-peak Oct–May)"
        price="Mountain Resort ¥130 (peak) / ¥90 (off-peak); Putuozongcheng Temple ¥80; other temples ¥40–80"
        nearestSubway="High-speed train from Beijing North (北京北站) or Beijing Chaoyang (北京朝阳站), ~1h"
        bestTime="May through October, with September being ideal — mild weather, autumn colours, fewer domestic tour groups"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=117.9097%2C41.9338%2C117.9497%2C41.9738&layer=mapnik&marker=41.9538%2C117.9297"
        address="No. 1 Lizhengmen Road, Shuangqiao District, Chengde, Hebei"
        addressZh="河北省承德市双桥区丽正门路1号"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Great Wall of China', description: 'Overview of all Great Wall sections near Beijing.', href: '/destinations/beijing/what-to-do/great-wall' },
          { title: 'Mutianyu Great Wall', description: 'The best Great Wall day trip from Beijing.', href: '/destinations/beijing/day-trips/mutianyu-great-wall' },
          { title: 'Summer Palace', description: "Beijing's own imperial garden retreat.", href: '/destinations/beijing/what-to-do/summer-palace' },
          { title: 'Forbidden City', description: 'The primary imperial palace in central Beijing.', href: '/destinations/beijing/what-to-do/forbidden-city' },
          { title: 'Beijing Local Tips', description: 'Practical tips for navigating Beijing like a local.', href: '/destinations/beijing/local-tips' },
          { title: 'Temple of Heaven', description: 'Where Ming and Qing emperors prayed for good harvests.', href: '/destinations/beijing/what-to-do/temple-of-heaven' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By high-speed train: The fastest option. Trains depart from Beijing North station (北京北站) or Beijing Chaoyang station (北京朝阳站) and take 58–75 minutes, arriving at Chengde South (承德南站). Fares are ¥110–150 one way. Book on 12306.cn or the 12306 app (English version available). Trains run roughly every 30–60 minutes from 7 AM to 7 PM.

From Chengde South station to the Mountain Resort: Take a DiDi (¥20–25, 15 min) or local bus (bus 5 or 15, ¥2, 25 min). The resort entrance is right in the city centre.

By long-distance bus: Buses depart from Beijing Liuliqiao Long-Distance Bus Station (六里桥客运站) every 30–60 minutes, take about 3.5–4 hours, and cost ¥80–100. Not recommended if the high-speed train is running — it's slower and less comfortable.

If staying overnight, Chengde has plenty of hotels near the Mountain Resort. A decent 3-star runs ¥200–350/night; 4-star from ¥400. Book on Trip.com (English interface) or Meituan (better prices, Chinese only).`,
          whatToSkip: `Don't try to see all eight Outer Temples — you'll burn out. Focus on Putuozongcheng Temple (the Little Potala) and maybe one more if you have time. The others are smaller and less visually dramatic, and the walking between them adds up quickly in the heat.

Skip the "Chengde Imperial Banquet" dinner shows at the big hotels near the resort — they're overpriced and the food is banquet-standard (meaning: looks impressive, tastes forgettable). Instead, eat at small restaurants on Nanguan Street (南关大街) near the resort entrance — the lamb dishes and buckwheat noodles are local specialties and cost a fraction of the banquet price.

Don't bother with the electric carts inside the Mountain Resort unless you have mobility issues. The lake area is flat and pleasant to walk, and the mountain area's viewpoints are worth the climb. The carts zip past the best parts.`,
          photographyTips: `The classic shot of Putuozongcheng Temple is from the Mountain Resort's hill area — from the "Four Clouds Pavilion" (四亭) viewpoints, you can frame the temple's white-and-red tiers against the Chengde skyline. Late afternoon light hits the temple's western face, warming the white walls with golden light.

Inside the Mountain Resort, the lake area at dawn is magical — mist on the water, no crowds, and the pavilion reflections are mirror-perfect. Arrive at the 8 AM opening and head straight for the lake section before the tour groups arrive.

For a unique perspective, shoot the Mountain Resort's palace area from the approach path — the succession of courtyards and the scale of the main hall (Danbo Jingcheng, 淡泊敬诚) are best captured with a wide-angle lens from the entrance gate looking inward.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Explore Chengde with a Local Guide
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Almost no foreign tourists make it to Chengde. Go with a guide who knows the Mountain Resort's hidden corners and the stories behind the Eight Outer Temples.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Chengde Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Round-trip train tickets</span>
                <span>✓ English-speaking guide</span>
                <span>✓ Skip the navigation stress</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}