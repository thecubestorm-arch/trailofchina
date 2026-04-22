import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'The Bund (外滩) - Shanghai\'s Historic Waterfront',
  description:
    'Shanghai\'s iconic waterfront promenade with colonial-era buildings and the Pudong skyline. Free to visit, best at sunset.',
  openGraph: {
    title: 'The Bund (外滩) - Shanghai\'s Historic Waterfront',
    description:
      'Shanghai\'s iconic waterfront promenade with colonial-era buildings and the Pudong skyline. Free to visit, best at sunset.',
    url: 'https://trailofchina.com/destinations/shanghai/what-to-do/bund',
    type: 'website',
  },
};

export default function BundPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Best time to visit is during "golden hour" — 30 minutes before sunset until about 20 minutes after',
    },
    {
      type: 'tip',
      text: 'Walk the entire 1.5 km promenade — each section has different architecture and energy',
    },
    {
      type: 'tip',
      text: 'Visit the building interiors — many are now hotels, restaurants, or museums open to the public',
    },
    {
      type: 'tip',
      text: 'Cross the road (carefully) for photos with the Pudong skyline in the background',
    },
    {
      type: 'tip',
      text: 'Nighttime offers the best photos — the buildings are lit up and the skyline looks dramatically different',
    },
    {
      type: 'tip',
      text: 'Take the ferry (¥2) across the Huangpu River to Pudong for a different perspective',
    },
    {
      type: 'tip',
      text: 'Avoid Chinese national holidays — the area becomes completely packed and walking is difficult',
    },
    {
      type: 'tip',
      text: 'The Bund View Hotel bar (18th floor) has the best view, but you need to be a guest or spend significantly',
    },
  ] as const

  const scamAlerts = [
    {
      type: 'scam',
      text: 'Ignore "free" tea offerings from people near the promenade — they will demand exorbitant payment',
    },
    {
      type: 'scam',
      text: 'Avoid photo scams where someone asks you to take their photo then demands money',
    },
    {
      type: 'scam',
      text: 'Bicycle rentals near the promenade often overcharge tourists — stick to official stations or DiDi',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'From the Pudong Side (Jin Mao Tower area) — the classic postcard view with all 33 buildings',
    },
    {
      type: 'photo',
      text: 'Nanjing Road intersection — where shopping meets the waterfront',
    },
    {
      type: 'photo',
      text: 'Shanghai World Financial Center bridge — unique angle through the building',
    },
    {
      type: 'photo',
      text: 'Bund Square at night — the water reflections are stunning',
    },
  ] as const

  return (
    <AttractionPage
      name="The Bund"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Shanghai', href: '/destinations/shanghai' },
      { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
    ]}
      nameZh="外滩"
      city="Shanghai"
      description={`The Bund (外滩) is Shanghai\'s most famous landmark — a 1.5 km waterfront promenade along the Huangpu River, lined with 33 buildings in various colonial-era architectural styles. Built in the early 20th century, it was once the heart of Shanghai\'s International Settlement.

The buildings were constructed between 1897 and 1937 by foreign banks and trading houses, representing styles from Neoclassical and Beaux-Arts to Art Deco. Each building has its own history, from the HSBC Building (now the Shanghai Pudong Development Bank) to the Astor House Hotel (now a restaurant).

Opposite the Bund stands the modern Pudong skyline, including the 492-meter Shanghai Tower, the 468-meter Oriental Pearl Tower, and the 420-meter Jin Mao Tower. This dramatic contrast between old and new — European colonial past and Asian economic present — makes The Bund one of the world\'s most photographed locations.

The area has evolved from a colonial enclave to asymbol of Shanghai\'s global ambitions, with luxury hotels, restaurants, and shopping replacing the old foreign firms. It remains free to walk and is the city\'s most popular photo spot.`}
      hours="24 hours (best during golden hour and nighttime)"
      price="Free"
      nearestSubway="Nanjing East Road Station, Line 2/10"
      bestTime="Golden hour (30 minutes before sunset) and nighttime for the skyline lights"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=31.2333&lon=121.4737&zoom=15&marker=31.2333%2C121.4737"
      relatedLinks={[
        { title: 'Shanghai Tower', href: '/destinations/shanghai/what-to-do/shanghai-tower' },
        { title: 'Yu Garden', href: '/destinations/shanghai/what-to-do/yu-garden' },
        { title: 'French Quarter', href: '/destinations/shanghai/what-to-do/french-quarter' },
        { title: 'Shanghai Local Tips', href: '/destinations/shanghai/local-tips' },
        { title: 'China Basics', href: '/china-basics' },
        { title: 'Where to Eat in Shanghai', href: '/destinations/shanghai/where-to-eat' },
      ]}
      relatedArticles={[
        { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
        { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
        { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets.", href: "/destinations/shanghai/what-to-do/french-concession" },
      ]}
    />
  );
}
