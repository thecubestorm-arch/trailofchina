import { Metadata } from 'next';
import InteractiveMapClient from './InteractiveMapClient';

export const metadata: Metadata = {
  title: 'Interactive Map',
  description: 'Interactive map of China destinations. Coming soon!',
  robots: {
    index: false,
  },
};

export default function InteractiveMapPage() {
  return <InteractiveMapClient />;
}
