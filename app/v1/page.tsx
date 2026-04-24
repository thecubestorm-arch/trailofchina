import { Metadata } from 'next'
import HomeV1Client from './HomeV1Client'

export const metadata: Metadata = {
  title: 'Trail of China – First-Trip China Travel Guide',
  description:
    'Visa tips, app setup, itineraries — everything you need for a smooth first trip to China. Written by travelers who\'ve been there.',
  openGraph: {
    title: 'Trail of China – First-Trip China Travel Guide',
    description:
      'Visa tips, app setup, itineraries — everything you need for a smooth first trip to China. Written by travelers who\'ve been there.',
    images: ['/images/hero/china-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/china-hero.jpg'],
  },
}

export default function HomePageV1() {
  return <HomeV1Client />
}
