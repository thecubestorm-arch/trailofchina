import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Yu Garden Shanghai (豫园) | Complete Visitor Guide',
  description:
    'Everything you need to visit Yu Garden in Shanghai: hours, prices, best times, what to see in the bazaar, and how to avoid crowds.',
  openGraph: {
    title: 'Yu Garden Shanghai (豫园) | Complete Visitor Guide',
    description:
      'Everything you need to visit Yu Garden in Shanghai: hours, prices, best times, what to see in the bazaar, and how to avoid crowds.',
    url: 'https://trailofchina.com/destinations/shanghai/what-to-do/yu-garden',
    type: 'website',
  },
};

export default function YuGardenPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Arrive before 9 AM on a weekday for the most peaceful experience — tour groups typically arrive after 10 AM',
    },
    {
      type: 'tip' as const,
      text: 'Explore the side streets of the bazaar, not just the main lane — better prices and more authentic snacks',
    },
    {
      type: 'tip' as const,
      text: 'Try xiaolongbao at nearby Jia Jia Tang Bao after your visit — it\'s a 5-minute walk north on Huanghe Road',
    },
    {
      type: 'tip' as const,
      text: 'The garden is compact — budget 1-1.5 hours for the garden itself, another hour for the surrounding bazaar',
    },
    {
      type: 'tip' as const,
      text: 'Bring cash — many bazaar stalls don\'t accept international cards, though Alipay and WeChat Pay work',
    },
  ];


  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'The Dragon Wall (龙墙) — the garden\'s most iconic photo with its undulating ceramic dragons',
    },
    {
      type: 'photo' as const,
      text: 'The Exquisite Jade Rock (玉玲珑) — a 3-meter porous Taihu stone, the garden\'s centerpiece',
    },
    {
      type: 'photo' as const,
      text: 'The zigzag bridge over the lotus pond — classic composition with the Huxinting Teahouse in the background',
    },
    {
      type: 'photo' as const,
      text: 'Overlooking the bazaar rooftops from the garden\'s elevated pavilions — great contrast of old and new Shanghai',
    },
  ];

  return (
    <AttractionPage
      name="Yu Garden"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Shanghai', href: '/destinations/shanghai' },
      { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
    ]}
      nameZh="豫园"
      city="Shanghai"
      description={`Yu Garden (豫园), meaning "Garden of Happiness," is a 400-year-old classical Chinese garden in the heart of Shanghai's Old City. Built in 1559 during the Ming Dynasty by Pan Yunduan as a private retreat for his aging father, the garden survived wars, occupations, and the Cultural Revolution to become one of Shanghai's most beloved landmarks.

The garden spans about 2 hectares and features the essential elements of classical Chinese landscape design: rockeries carved from Taihu stones, carp-filled ponds, zigzag bridges, and intricately carved wooden pavilions. The Exquisite Jade Rock (玉玲珑), a porous 3-meter stone with 72 holes, is the garden's most famous feature — water poured over it flows through every hole simultaneously.

Surrounding the garden is the Yuyuan Bazaar, a bustling marketplace of souvenir shops, snack stalls, and traditional crafts. The bazaar's architecture mimics Ming and Qing dynasty styles, creating an atmospheric (if touristy) contrast to the serene garden within. The Huxinting Teahouse, reached via a zigzag bridge, sits in the middle of the lotus pond and offers traditional tea service with a view.`}
      hours="8:30-17:00 (last entry 16:45, closed Mondays)"
      price="¥40 (April-October), ¥30 (November-March)"
      nearestSubway="Yuyuan Garden Station, Line 10"
      bestTime="Early morning weekdays (8:30-9:30 AM) before tour groups arrive"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4877%2C31.2245%2C121.4977%2C31.2305&layer=mapnik&marker=31.2275%2C121.4927"
        
      relatedLinks={[
        { title: 'The Bund', href: '/destinations/shanghai/what-to-do/bund' },
        { title: 'Shanghai Tower', href: '/destinations/shanghai/what-to-do/shanghai-tower' },
        { title: 'French Concession', href: '/destinations/shanghai/what-to-do/french-concession' },
        { title: 'Where to Eat in Shanghai', href: '/destinations/shanghai/where-to-eat' },
        { title: 'Shanghai Local Tips', href: '/destinations/shanghai/local-tips' },
        { title: 'Shanghai Guide', href: '/destinations/shanghai' },
      ]}
      relatedArticles={[
        { title: "The Bund", description: "Shanghai's iconic waterfront district with colonial architecture and stunning views of Pudong.", href: "/destinations/shanghai/what-to-do/bund" },
        { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest, offering panoramic city views.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
        { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets and historic architecture.", href: "/destinations/shanghai/what-to-do/french-concession" },
        { title: "Bund Area", description: "Explore the historic waterfront district and its colonial-era buildings.", href: "/destinations/shanghai/where-to-stay/bund-area" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}