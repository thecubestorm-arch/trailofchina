import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: "Dayan Pagoda Area (大雁塔) - Best Neighborhood to Stay in Xi'an",
  description:
    "Stay near the Big Wild Goose Pagoda in Xi'an's modern south side. Clean, quiet, and perfect for families and longer stays.",
  openGraph: {
    title: "Dayan Pagoda Area (大雁塔) - Best Neighborhood to Stay in Xi'an",
    description:
      "Stay near the Big Wild Goose Pagoda in Xi'an's modern south side. Clean, quiet, and perfect for families and longer stays.",
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Dayan+Pagoda+Area&description=Modern+and+clean+near+the+Big+Wild+Goose+Pagoda',
        width: 1200,
        height: 630,
        alt: "Dayan Pagoda Area Xi'an",
      },
    ],
  },
};

export default function DayanPagodaPage() {
  return (
    <NeighborhoodPage
      name="Dayan Pagoda Area"
      nameZh="大雁塔"
      city="Xi'an"
      description="The Dayan Pagoda (Big Wild Goose Pagoda) area is Xi'an's modern face — wide boulevards, new business hotels, shopping malls, and the expansive Da Ci'en Temple plaza with its evening fountain show. South of the City Wall, this district is cleaner and quieter than the old town, making it popular with families and business travelers. You're walking distance from the pagoda, Tang Paradise, and several museums. The downside: you'll need a metro ride (Line 3) to reach the Muslim Quarter and Bell Tower, and the evening food scene here is more mall than market."
      vibe="Modern, clean, family-friendly"
      bestFor="Families, business travelers, and those who prefer quiet hotels"
      priceRange="¥280-1200/night"
      nearestSubway="Dayan Pagoda (Line 3), Xiaozhai (Line 2/3)"
      tips={[
        { type: 'tip', text: 'The evening fountain show at Dayan Pagoda is free and spectacular — check times as they vary by season' },
        { type: 'tip', text: 'Xiaozhai station gives you both Line 2 and Line 3 access — better hotel base than right at the pagoda' },
        { type: 'tip', text: 'Weekend rates at business hotels here drop significantly — great value for Friday/Saturday stays' },
      ] as const}
      relatedLinks={[
        { title: 'Muslim Quarter', href: '/destinations/xian/where-to-stay/muslim-quarter' },
        { title: 'Bell Tower Area', href: '/destinations/xian/where-to-stay/bell-tower' },
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
        { label: 'Dayan Pagoda Area' },
      ]}
    />
  );
}