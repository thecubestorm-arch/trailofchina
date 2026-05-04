import { Metadata } from 'next';
import InteractiveMapClient from './InteractiveMapClient';

export const metadata: Metadata = {
  title: 'Interactive Map | Trail of China',
  description: 'Interactive map of China destinations. Coming soon!',
  robots: {
    index: false,
  },
};

export default function InteractiveMapPage() {
  return <InteractiveMapClient />;
}
