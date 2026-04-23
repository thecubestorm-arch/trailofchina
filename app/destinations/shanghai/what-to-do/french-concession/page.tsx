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
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4567%2C31.2097%2C121.4667%2C31.2157&layer=mapnik&marker=31.2127%2C121.4617"
      address="Fuxing Middle Road, Huangpu District"
      addressZh="上海市黄浦区复兴中路"
        
      relatedLinks={[
        { title: 'The Bund', href: '/destinations/shanghai/what-to-do/bund' },
        { title: 'Yu Garden', href: '/destinations/shanghai/what-to-do/yu-garden' },
        { title: 'Shanghai Tower', href: '/destinations/shanghai/what-to-do/shanghai-tower' },
        { title: 'Where to Eat in Shanghai', href: '/destinations/shanghai/where-to-eat' },
        { title: 'Shanghai Local Tips', href: '/destinations/shanghai/local-tips' },
        { title: 'Shanghai Guide', href: '/destinations/shanghai' },
      ]}
      relatedArticles={[
        { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
        { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
        { title: "The Bund", description: "Shanghai's iconic waterfront with colonial architecture.", href: "/destinations/shanghai/what-to-do/bund" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}