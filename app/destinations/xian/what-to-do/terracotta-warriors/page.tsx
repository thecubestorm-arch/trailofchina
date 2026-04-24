import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Terracotta Warriors (兵马俑) - Xi\'an\'s Ancient Army',
  description:
    'The 2,200-year-old army of Emperor Qin Shi Huang. Three main pits with over 8,000 life-sized soldiers, horses, and chariots.',
  openGraph: {
    title: 'Terracotta Warriors (兵马俑) - Xi\'an\'s Ancient Army',
    description:
      'The 2,200-year-old army of Emperor Qin Shi Huang. Three main pits with over 8,000 life-sized soldiers, horses, and chariots.',
    url: 'https://trailofchina.com/destinations/xian/what-to-do/terracotta-warriors',
    type: 'website',
  },
};

export default function TerracottaWarriorsPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Pit 1 is the largest and most impressive — arrives first and should be your priority',
    },
    {
      type: 'tip',
      text: 'Arrive near opening time (8:30 AM) to beat tour groups — the site becomes extremely crowded by 10:30 AM',
    },
    {
      type: 'tip',
      text: 'The shuttle bus from Xi\'an Station takes 1 hour and costs ¥20-30 round trip',
    },
    {
      type: 'tip',
      text: 'Pit 3 is the command center — smaller but historically important as the headquarters',
    },
    {
      type: 'tip',
      text: 'Pit 2 has the cavalry and archers — less crowded and shows different troop types',
    },
    {
      type: 'tip',
      text: 'The Exhibition Hall holds the actual armor and weapons, plus detailed maps of the excavation process',
    },
    {
      type: 'tip',
      text: 'Audio guides are available and recommended — the history is complex and worth understanding',
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'Pit 1 from the upper viewing platform — the classic overview shot with the entire army laid out',
    },
    {
      type: 'photo',
      text: 'Pit 2\'s cavalry formation — unique pose and better lighting in the morning',
    },
    {
      type: 'photo',
      text: 'The Terracotta Horse at the Exhibition Hall — the only complete horse found at the site',
    },
    {
      type: 'photo',
      text: 'The bronze chariot at the Exhibition Hall — the most intricate artifact at the site',
    },
  ] as const

  return (
    <AttractionPage
      name="Terracotta Warriors"
      breadcrumbs={[
      { label: "Home", href: '/' },
      { label: "Destinations", href: '/destinations' },
      { label: "Xi'an", href: '/destinations/xian' },
      { label: "What to Do", href: '/destinations/xian/what-to-do' },
    ]}
      nameZh="兵马俑"
      city="Xi'an"
      hook="8,000 soldiers standing in formation for 2,200 years — every single one has a different face."
      quickInfo={{
        price: '¥120',
        hours: '8:30–17:00',
        bestTime: 'Morning, weekdays',
        metro: 'Bus 306 from station',
      }}
      whyYouLoveIt={`Pit 1 is overwhelming the moment you step in. Six thousand soldiers stand in battle formation — infantry in front, chariots behind, flanked by cavalry. The scale is so large that photographs don't do it justice. You need to see it to understand why every Chinese schoolchild learns about this site. No two faces are the same. Archaeologists believe each warrior was modeled on a real soldier in Emperor Qin Shi Huang's army. The detail is staggering — mustaches, armor clasps, fingernails, even the tread pattern on the soles of their shoes.

Pit 2 is where you'll find the cavalry and archers, including the famous kneeling archer whose armor plates overlap like fish scales. Pit 3 is tiny by comparison — just 89 soldiers — but it was the command center, and that makes it historically significant. Don't skip the Exhibition Hall: the bronze chariots are impossibly intricate, with gilded silver ornaments and working mechanical parts. One chariot alone took eight years to restore. This is not a museum of old pottery — this is the funeral guard of a man who believed he would rule in the afterlife exactly as he ruled on earth.`}
      images={[
        { src: 'https://picsum.photos/seed/terracotta-pit1/800/600', alt: 'Terracotta Warriors in formation in Pit 1' },
        { src: 'https://picsum.photos/seed/terracotta-face/800/600', alt: 'Close-up of unique warrior faces' },
        { src: 'https://picsum.photos/seed/terracotta-formation/800/600', alt: 'Battle formation of terracotta soldiers' },
        { src: 'https://picsum.photos/seed/terracotta-chariot/800/600', alt: 'Bronze chariot in the Exhibition Hall' },
        { src: 'https://picsum.photos/seed/terracotta-horses/800/600', alt: 'Terracotta horses and cavalry' },
      ]}
      practicalDetails={{
        gettingThere: `Bus 306 from East Square of Xi'an Railway Station, 1 hour. The bus is clearly marked and departs every 10–15 minutes. Buy tickets at the window (¥7 one way) — ignore anyone offering "direct" shuttles, which are just overpriced taxis. The last bus back to Xi'an leaves around 19:00, so plan accordingly.

If you prefer a faster route, DiDi (Chinese Uber) costs around ¥80–100 from the city center and takes 40 minutes. This is worth it if you're traveling in a group of 3–4.`,
        whatToSkip: `Every tour bus stops at a "souvenir factory" on the way — this is a commission stop, not a cultural site. The factory sells replica warriors at inflated prices and eats up 45 minutes of your time. Tell your guide you want to skip it, or simply take the public bus which doesn't stop there.

The audio guide (¥30) is not worth it — the narration is dry and out of sync with the exhibits. Instead, read the English signage or download a free podcast about the warriors before you go.`,
        photographyTips: `Pit 1 panorama from the upper viewing platform is the money shot — arrive at opening time for the best light and fewer people. For warrior face close-ups, walk to the far end of the platform where the crowd thins and you can get clear shots without heads in the frame.

Flash photography is prohibited and actively policed — the UV light damages the pigments that still cling to some warriors. Bring a lens with a wide aperture (f/2.8 or better) for low-light shots in Pit 2 and the Exhibition Hall. The bronze chariots are behind glass, so shoot at an angle to avoid reflections.`,
      }}
      description={`The Terracotta Warriors (兵马俑) are the 2,200-year-old army of China\'s first emperor, Qin Shi Huang. Discovered in 1974 by farmers digging a well, the site contains over 8,000 life-sized soldiers, 130 chariots with 520 horses, and 150 cavalry horses.

The warriors were buried with the emperor in 210-209 BC to protect him in the afterlife. Each warrior is unique — different facial features, heights, and uniforms indicating rank. They were originally painted in bright colors, but most pigment deteriorated upon exposure to air after excavation.

The three main pits form a battle formation: Pit 1 is the main army (6,000 soldiers), Pit 2 is the cavalry and archers (1,300 soldiers), and Pit 3 is the command center (89 soldiers). The emperor\'s actual tomb mound remains unexcavated — archaeological concern about preserving the artifacts has led to leaving it undisturbed.

The site is a UNESCO World Heritage site and one of China\'s most famous attractions, drawing over 10 million visitors annually. It provides an unparalleled glimpse into ancient Chinese military organization, craftsmanship, and beliefs about the afterlife.`}
      hours="8:30-17:00 (last entry 16:00)"
      price="¥120 (including bus shuttle from Xi\'an Station)"
      nearestSubway="Shuttle bus from Xi\'an Station (20-30 minutes)"
      bestTime="Morning hours (8:30-10:30 AM) to beat tour groups"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=109.2727%2C34.3844%2C109.2827%2C34.3904&layer=mapnik&marker=34.3874%2C109.2777"
      address="Qinling North Road, Lintong District"
      addressZh="西安市临潼区秦陵北路"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "City Wall", description: "Best-preserved ancient city wall with a 13.7 km perimeter.", href: "/destinations/xian/what-to-do/city-wall" },
        { title: "Muslim Quarter", description: "Historic Islamic neighborhood with amazing street food.", href: "/destinations/xian/what-to-do/muslim-quarter" },
        { title: "Yangroupaomo", description: "Xi'an's iconic lamb-oatmeal breakfast soup.", href: "/destinations/xian/where-to-eat/yangroupaomo" },
        { title: "Xi'an Local Tips", description: "Practical tips for navigating Xi'an like a local.", href: "/destinations/xian/local-tips" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
        { title: "Where to Eat in Xi'an", description: "Discover Xi'an's best local dishes and restaurants.", href: "/destinations/xian/where-to-eat" },
        { title: "Big Wild Goose Pagoda", description: "Explore Big Wild Goose Pagoda, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/big-wild-geese-pagoda" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
