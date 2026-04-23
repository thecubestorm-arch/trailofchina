import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: "Bell Tower Area (钟楼) - Best Neighborhood to Stay in Xi'an",
  description:
    "Stay at Xi'an's central crossroads. Best transport links, walk to everything inside the City Wall, and ideal for first-time visitors.",
  openGraph: {
    title: "Bell Tower Area (钟楼) - Best Neighborhood to Stay in Xi'an",
    description:
      "Stay at Xi'an's central crossroads. Best transport links, walk to everything inside the City Wall, and ideal for first-time visitors.",
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Bell+Tower+Area&description=Central+Xi%27an+with+the+best+transport+links',
        width: 1200,
        height: 630,
        alt: "Bell Tower Area Xi'an",
      },
    ],
  },
};

export default function BellTowerPage() {
  return (
    <NeighborhoodPage
      name="Bell Tower Area"
      nameZh="钟楼"
      city="Xi'an"
      description="The Bell Tower sits at the exact center of Xi'an — where the city's two main axes cross inside the Ming-dynasty walls. Staying here means you can walk to the Muslim Quarter in 5 minutes, reach the City Wall gates in 10, and catch Line 2 in any direction. The area is dense with mid-range business hotels and a few international chains, plus endless shopping options along Dong Dajie and Nan Dajie. It's the pragmatic choice: not the most atmospheric, but the most efficient base for seeing the city."
      vibe="Central, practical, well-connected"
      bestFor="First-time visitors who want to walk everywhere inside the City Wall"
      priceRange="¥300-900/night"
      nearestSubway="Zhonglou (Bell Tower, Line 2)"
      tips={[
        { type: 'tip', text: 'Ask for a room facing away from the Bell Tower plaza — it gets loud with evening music and crowds' },
        { type: 'tip', text: 'Line 2 from Bell Tower connects directly to the high-speed rail station in 30 minutes' },
        { type: 'tip', text: 'The underground shopping mall beneath the Bell Tower is surprisingly useful for basics and snacks' },
      ] as const}
      relatedLinks={[
        { title: 'Muslim Quarter', href: '/destinations/xian/where-to-stay/muslim-quarter' },
        { title: 'Dayan Pagoda Area', href: '/destinations/xian/where-to-stay/dayan-pagoda' },
        { title: "Where to Stay in Xi'an", href: '/destinations/xian/where-to-stay' },
      ]}
      relatedArticles={[
        { title: "Xi'an Food Guide: Beyond the Muslim Quarter", description: "Where locals actually eat in Xi'an — it's not all on Huimin Jie.", href: '/blog/xian-food-guide' },
        { title: 'Terracotta Warriors: How to Visit Without the Crowds', description: 'Timing, transport, and ticket tips for Xi\'an\'s #1 attraction.', href: '/blog/terracotta-warriors-guide' },
      ]}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Destinations', href: '/destinations' },
        { label: "Xi'an", href: '/destinations/xian' },
        { label: 'Where to Stay', href: '/destinations/xian/where-to-stay' },
        { label: 'Bell Tower Area' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/bell-tower-xian-1/800/500", alt: "Xi'an Bell Tower illuminated at night at the city center" },
        { src: "https://picsum.photos/seed/bell-tower-xian-2/800/500", alt: "Dong Dajie shopping street near the Bell Tower in Xi'an" },
        { src: "https://picsum.photos/seed/bell-tower-xian-3/800/500", alt: "City Wall gates visible from central Xi'an near Bell Tower" },
      ]}
    />
  );
}