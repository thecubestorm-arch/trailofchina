import { Metadata } from 'next';
import ShanghaiFilterClient from './ShanghaiFilterClient';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Search & Filter | Trail of China',
  description: 'Find the best things to do, where to eat, and where to stay in Shanghai. Search and filter by price, vibe, and category.',
};

export default function Shanghai5Page() {
  return <ShanghaiFilterClient />;
}