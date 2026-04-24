import { Metadata } from 'next';
import ShanghaiSuperClient from '../shanghai-8/ShanghaiSuperClient';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Trail of China',
  description: 'Complete Shanghai travel guide: best things to do, where to eat, local tips, and itineraries for first-time visitors.',
  alternates: { canonical: '/destinations/shanghai' },
};

export default function ShanghaiPage() {
  return <ShanghaiSuperClient />;
}
