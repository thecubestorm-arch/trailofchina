import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dujiangyan Panda Valley (都江堰熊猫谷) — See Pandas Without the Crowds',
  description:
    'Skip the crowded Chengdu panda base — Dujiangyan has fewer tourists, more natural enclosures, and a volunteer program that puts you inches from the pandas. Plus, the 2,200-year-old irrigation system next door is a UNESCO masterpiece.',
  keywords: [
    'Dujiangyan Panda Valley',
    '都江堰熊猫谷',
    'Dujiangyan panda volunteer',
    'panda base near Chengdu',
    'Dujiangyan Irrigation System',
    'Dujiangyan day trip',
    'see pandas in China',
    'panda volunteer program',
  ],
  openGraph: {
    title: 'Dujiangyan Panda Valley (都江堰熊猫谷) — See Pandas Without the Crowds',
    description:
      'Fewer tourists, natural enclosures, and a volunteer program inches from the pandas. Plus a 2,200-year-old UNESCO irrigation system.',
    url: 'https://www.trailofchina.com/destinations/chengdu/day-trips/dujiangyan-panda-valley',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Dujiangyan Panda Valley — See Pandas Without the Crowds - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/chengdu/day-trips/dujiangyan-panda-valley',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How is Dujiangyan Panda Valley different from the Chengdu Panda Base?',
    answer:
      'The Chengdu Research Base (in northern Chengdu) is larger and more famous, but it gets extremely crowded — especially on weekends, when tour groups pack the viewing platforms. Dujiangyan Panda Valley (熊猫谷) is smaller, receives far fewer visitors, and has more natural, forested enclosures where pandas roam rather than sit in concrete pens. The pandas at Dujiangyan are generally more active because the environment is closer to their natural habitat. If you want a peaceful, up-close panda experience, Dujiangyan is the better choice.',
  },
  {
    question: 'How do I book the panda volunteer program at Dujiangyan?',
    answer:
      'The volunteer program (¥700–900) lets you clean enclosures, prepare bamboo, and observe pandas at close range for a half day. You need to book well in advance — often 2–4 weeks ahead — through the official Dujiangyan Panda Base website or via a tour operator. The program runs mornings only (arrive by 8 AM), and participants must be 12+ years old. Wear clothes you don\'t mind getting dirty and closed-toe shoes.',
  },
  {
    question: 'Can I combine Dujiangyan Panda Valley and the Irrigation System in one day?',
    answer:
      'Yes, and you should. The Dujiangyan Irrigation System (都江堰) is a 15-minute taxi ride from the Panda Valley, and together they make a perfect full day trip from Chengdu. Start at the Panda Valley at 8 AM for feeding time, then head to the Irrigation System around 11 AM when the panda crowds (small as they are) thin out. Take the high-speed train from Chengdu to Dujiangyan Station (30 minutes, ¥10–15) and you can be at the Panda Valley by 8:30 AM.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Chengdu', path: '/destinations/chengdu' },
  { name: 'Day Trips', path: '/destinations/chengdu/day-trips' },
  { name: 'Dujiangyan Panda Valley', path: '/destinations/chengdu/day-trips/dujiangyan-panda-valley' },
]);

const searchQuery = encodeURIComponent('Dujiangyan panda volunteer tour from Chengdu');

export default function DujiangyanPandaValleyPage() {
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
        name="Dujiangyan Panda Valley"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Chengdu', href: '/destinations/chengdu' },
          { label: 'Day Trips', href: '/destinations/chengdu/day-trips' },
        ]}
        nameZh="都江堰熊猫谷"
        city="Chengdu"
        images={[
          { src: 'https://picsum.photos/seed/dujiangyan-panda-eating/800/600', alt: 'Giant panda eating bamboo in a forested enclosure at Dujiangyan Panda Valley' },
          { src: 'https://picsum.photos/seed/dujiangyan-irrigation-dam/800/600', alt: 'The ancient Dujiangyan irrigation dam and fish mouth levee' },
          { src: 'https://picsum.photos/seed/dujiangyan-panda-climbing/800/600', alt: 'Panda climbing a tree in natural forest habitat at Dujiangyan' },
          { src: 'https://picsum.photos/seed/dujiangyan-bridge-view/800/600', alt: 'View from Anlan Suspension Bridge over the Min River at Dujiangyan' },
          { src: 'https://picsum.photos/seed/dujiangyan-red-panda/800/600', alt: 'Red panda at Dujiangyan Panda Valley feeding station' },
        ]}
        hook="Skip the crowded Chengdu panda base — Dujiangyan has fewer tourists, more natural enclosures, and a volunteer program that puts you inches from the pandas. Plus, the 2,200-year-old irrigation system next door is a UNESCO masterpiece."
        quickInfo={{
          price: '¥58 (Panda Valley), ¥80 (Irrigation System)',
          hours: '8:00–17:00 (Panda Valley), 8:00–17:30 (Irrigation System)',
          bestTime: '8–9 AM for feeding time, weekdays preferred',
          metro: '30 min high-speed train to Dujiangyan',
        }}
        whyYouLoveIt={`The Chengdu Research Base gets the fame, the Instagram posts, and the tour buses. It also gets the crowds — by 10 AM on a weekend, you'll be sharing a viewing platform with 200 people, all jostling for a photo of a sleeping panda. The pandas, for their part, are mostly sleeping, because pandas are active at dawn and then nap through the heat of the day.

Dujiangyan Panda Valley (熊猫谷) is the alternative most visitors don't know about. It's smaller — about 30 pandas compared to Chengdu's 200+ — but that's exactly the point. The enclosures are forested and natural, with bamboo groves and climbing structures. The pandas here are more active because the environment lets them behave like pandas, not like zoo exhibits. And the number of visitors at any given time is a fraction of what you'll find in Chengdu.

Then there's the volunteer program. For ¥700–900, you spend a half day cleaning enclosures, preparing bamboo, and observing pandas at close range. You won't be hugging a panda (that's illegal and unethical), but you will be close enough to hear them crunch through stalks of bamboo — a sound like someone stepping on celery. It's one of the most genuinely memorable animal experiences in China.

And when you're done with the pandas, the Dujiangyan Irrigation System is a 15-minute taxi ride away — a 2,200-year-old engineering marvel that still irrigates 5,300 km² of farmland today. It's a UNESCO World Heritage Site, it's genuinely impressive, and most foreign tourists skip it entirely. Their loss.`}
        description={`Dujiangyan Panda Valley (都江堰熊猫谷) is a giant panda conservation and research center located in Dujiangyan City, 60 km northwest of Chengdu. Unlike the more famous Chengdu Research Base in the city's north, the Dujiangyan facility houses fewer pandas in larger, more natural enclosures — forested habitats where the animals climb trees, forage, and behave more like wild pandas than zoo residents.

Entry costs ¥58 and includes access to all viewing areas. The park is smaller than the Chengdu base, which means you can see everything in 2–3 hours at a relaxed pace. The star attraction is feeding time (8–9 AM), when the pandas are most active and the bamboo disappears at an alarming rate.

The volunteer program (¥700–900, advance booking required) runs mornings and includes cleaning enclosures, preparing bamboo feed, and observing pandas at close range. Participants must be 12 or older, wear closed-toe shoes, and bring a willingness to get dirty. It's one of the few programs in China that lets visitors genuinely participate in panda care rather than just take photos.

The Dujiangyan Irrigation System (都江堰) is a 15-minute taxi ride away. Built in 256 BC by the engineer Li Bing, this system uses no dams — instead, a clever series of levees, channels, and spillways diverts the Min River's floodwaters while preserving its natural flow. It's still in use today, irrigating over 5,300 km² of the Sichuan basin. Entry costs ¥80, and the site includes the Anlan Suspension Bridge, Erwang Temple, and the famous "Fish Mouth" levee that splits the river.`}
        hours="8:00–17:00 (Panda Valley), 8:00–17:30 (Irrigation System)"
        price="¥58 (Panda Valley), ¥80 (Irrigation System), ¥700–900 (volunteer program)"
        nearestSubway="30 min high-speed train from Chengdu to Dujiangyan Station"
        bestTime="Weekday mornings 8–9 AM for feeding time"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=103.6100%2C30.9969%2C103.6300%2C31.0169&layer=mapnik&marker=31.0069%2C103.6200"
        address="No. 5, Panda Valley Road, Dujiangyan City, Sichuan"
        addressZh="四川省都江堰市熊猫谷路5号"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Giant Panda Base (Chengdu)', description: "The famous panda base in the city — bigger, but much more crowded.", href: '/destinations/chengdu/what-to-do/giant-panda-base' },
          { title: 'Mount Qingcheng Day Trip', description: 'Birthplace of Taoism — misty forests and hidden temples, same train line as Dujiangyan.', href: '/destinations/chengdu/day-trips/mount-qingcheng' },
          { title: 'Leshan Giant Buddha', description: "The world's largest stone Buddha — a 71-meter cliff carving two hours from Chengdu.", href: '/destinations/chengdu/day-trips/leshan-giant-buddha' },
          { title: 'Chengdu Day Trips', description: 'All the best day trips from Chengdu in one guide.', href: '/destinations/chengdu/day-trips' },
          { title: 'Chengdu Local Tips', description: 'Practical insider tips for navigating Chengdu.', href: '/destinations/chengdu/local-tips' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By high-speed train (recommended): Trains depart from Chengdu Railway Station (成都站) to Dujiangyan Station (都江堰站) every 15–20 minutes. The journey takes 25–30 minutes and costs ¥10–15. From Dujiangyan Station, take bus 9 or a DiDi to the Panda Valley (about 15 minutes, ¥2 by bus or ¥15 by DiDi). For the Irrigation System, take bus 4 or a DiDi from the station (10 minutes).

By bus: Chengdu Chadianzi Bus Station runs buses to Dujiangyan every 10 minutes (¥25, 60 minutes). From the bus station, both the Panda Valley and Irrigation System are a short taxi ride.

By private driver or tour: A DiDi from central Chengdu costs ¥100–150 one way (45 minutes on the expressway). Organized day tours combining the Panda Valley and Irrigation System run ¥300–500 including transport and tickets — good value if you want a hassle-free day.`,
          whatToSkip: `Skip the Chengdu Panda Base on weekends. If you must choose between the two panda facilities, Dujiangyan offers a better experience per minute and per yuan. The Chengdu base is worth visiting only if you're specifically interested in panda research or red pandas (which are in a separate area).

At the Irrigation System, skip the expensive "premium" tour package that some ticket sellers try to push. The standard ¥80 ticket covers everything worth seeing — the Fish Mouth levee, Anlan Suspension Bridge, Erwang Temple, and all the viewpoints. The "premium" version just adds a guide and a tea ceremony you don't need.

Don't combine the Panda Valley, Irrigation System, AND Mount Qingcheng in one day. That's three major attractions and you'll be rushing through all of them. Pick two: Panda Valley + Irrigation System (one day, relaxed), or Irrigation System + Qingcheng (one day, more walking).`,
          photographyTips: `Pandas are most active at 8–9 AM during feeding time. This is your window — they eat for about 45 minutes, then settle into their bamboo-and-nap routine for the rest of the day. Arrive at opening, go straight to the main viewing areas, and shoot while they're upright and eating.

Use a long lens (200mm+) for close-up face shots without crowding the viewing rails. The Dujiangyan enclosures are more spacious than Chengdu's, which means you'll need more reach but also get more natural behavior. Pandas climbing trees are the best shots — they're surprisingly agile and the forest background beats a concrete pen any day.

At the Irrigation System, the classic shot is the Fish Mouth levee from the viewpoint above — where the Min River splits into two channels. Shoot in late morning or early afternoon when the sun lights the water from above. The Anlan Suspension Bridge is photogenic but gets crowded; walk to the far end and shoot back toward the temple for a cleaner composition.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Get Inches from the Pandas
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a Dujiangyan day trip from Chengdu with high-speed train tickets, panda base entry, and an optional volunteer program slot. Combine with the 2,200-year-old irrigation system next door.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Dujiangyan Panda Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Volunteer program available</span>
                <span>✓ Irrigation System included</span>
                <span>✓ Skip the Chengdu crowds</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}