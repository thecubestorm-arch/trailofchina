import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Shanghai French Concession | Walking Guide, Cafes & Hidden Streets',
  description:
    'Explore Shanghai\'s French Concession: tree-lined streets, Art Deco architecture, best cafes, boutiques, and hidden lane houses.',
  openGraph: {
    title: 'Shanghai French Concession | Walking Guide, Cafes & Hidden Streets',
    description:
      'Explore Shanghai\'s French Concession: tree-lined streets, Art Deco architecture, best cafes, boutiques, and hidden lane houses.',
    url: 'https://trailofchina.com/destinations/shanghai/what-to-do/french-concession',
    type: 'website',
  },
};

export default function FrenchConcessionPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Best on weekday afternoons — weekends bring crowds to popular cafes and Wukang Road',
    },
    {
      type: 'tip' as const,
      text: 'Wear comfortable walking shoes — the area is best explored on foot, and distances between hidden gems add up',
    },
    {
      type: 'tip' as const,
      text: 'Explore the lane houses (弄堂) off main streets — push through gateways to discover courtyard gardens and local life',
    },
    {
      type: 'tip' as const,
      text: 'Tianzifang (田子坊) is the artsy alleyway complex — go for galleries and cafes, but expect tourist prices',
    },
    {
      type: 'tip' as const,
      text: 'Wukang Road (武康路) is the most photogenic street — Art Deco villas, plane tree canopy, and the iconic Wukang Mansion',
    },
    {
      type: 'tip' as const,
      text: 'Stop at a courtyard cafe for a slow coffee — the area is about atmosphere, not rushing between sights',
    },
  ];

  const scamAlerts = [
    {
      type: 'scam' as const,
      text: 'Some "heritage" shops in Tianzifang sell mass-produced goods at boutique prices — check quality before buying',
    },
    {
      type: 'scam' as const,
      text: 'Avoid "art galleries" that pressure you to buy — many are commercial operations, not genuine artist studios',
    },
  ];

  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'Wukang Mansion (武康大楼) from the street corner — Shanghai\'s most photographed Art Deco building',
    },
    {
      type: 'photo' as const,
      text: 'Plane tree canopy on Fuxing Road (复兴路) — dappled light through the leaves, especially in autumn',
    },
    {
      type: 'photo' as const,
      text: 'Tianzifang narrow alleyways — colorful balconies, hanging laundry, and potted plants framing the shot',
    },
    {
      type: 'photo' as const,
      text: 'Lane house courtyards — peek through iron gates for glimpses of 1930s Shanghai life',
    },
  ];

  return (
    <AttractionPage
      name="French Concession"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Shanghai', href: '/destinations/shanghai' },
      { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
    ]}
      nameZh="法租界"
      city="Shanghai"
      description={`The French Concession (法租界) is Shanghai's most atmospheric neighborhood — a leafy enclave of plane tree-lined streets, 1930s Art Deco villas, and hidden lane houses that feels worlds apart from the city's hyper-modern skyline.

Established in 1849 as a French colonial settlement, the concession grew into Shanghai's most elegant district. Today, the colonial architecture remains, repurposed as trendy cafes, cocktail bars, boutique hotels, and designer shops. The area roughly spans from Huaihai Road (淮海路) in the north to Zhaojiabang Road in the south, and from Ruijin Road (瑞金路) in the east to Xingfu Road (幸福路) in the west.

Key streets to explore include Wukang Road (武康路) with its iconic Wukang Mansion, Fuxing Road (复兴路) for its canopy of plane trees, and Hunan Road (湖南路) for quiet villa-lined blocks. Tianzifang (田子坊), in the northeastern corner, is a maze of narrow alleys filled with galleries, craft shops, and cafes built into converted lane houses.

The French Concession is less a single attraction and more an experience — plan 2-3 hours to wander without a strict itinerary. Stop for coffee, browse a bookshop, and let the neighborhood's slow rhythm pull you in.`}
      hours="Always open (outdoor neighborhood — cafes and shops typically 10:00-22:00)"
      price="Free (outdoor area — individual venues vary)"
      nearestSubway="South Shaanxi Road Station, Lines 1/10/12"
      bestTime="Weekday afternoons for fewer crowds; autumn for golden plane tree leaves"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=31.2108&lon=121.4589&zoom=15&marker=31.2108%2C121.4589"
      relatedLinks={[
        { title: 'The Bund', href: '/destinations/shanghai/what-to-do/bund' },
        { title: 'Yu Garden', href: '/destinations/shanghai/what-to-do/yu-garden' },
        { title: 'Shanghai Tower', href: '/destinations/shanghai/what-to-do/shanghai-tower' },
        { title: 'Where to Eat in Shanghai', href: '/destinations/shanghai/where-to-eat' },
        { title: 'Shanghai Local Tips', href: '/destinations/shanghai/local-tips' },
        { title: 'Shanghai Guide', href: '/destinations/shanghai' },
      ]}
    />
  );
}