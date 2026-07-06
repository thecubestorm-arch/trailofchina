import { Metadata } from 'next';
import InteractiveMapClient from './InteractiveMapClient';

export const metadata: Metadata = {
  title: 'Interactive Map',
  description: 'Interactive map of China destinations. Coming soon!',
  robots: {
    index: false,
  },
  openGraph: {
    title: 'Interactive Map - Trail of China',
    description: 'Interactive map of China destinations.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Interactive Map - Trail of China' }],
  },
};

export default function InteractiveMapPage() {
  return <InteractiveMapClient />;
}
