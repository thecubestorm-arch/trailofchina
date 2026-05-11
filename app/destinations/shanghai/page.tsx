import { Metadata } from 'next';
import ShanghaiHubClient from './ShanghaiHubClient';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide',
  description: 'Complete Shanghai travel guide: best things to do, where to eat, local tips, and itineraries for first-time visitors.',
  alternates: { canonical: '/destinations/shanghai' },
};

export default function ShanghaiPage() {
  return <ShanghaiHubClient />;
}
