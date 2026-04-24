import { Metadata } from 'next';
import LeafletMapClient from './LeafletMapClient';

export const metadata: Metadata = {
  title: 'Destinations — Interactive Map | Trail of China',
  description: "Explore China destinations on an interactive map. Beijing, Shanghai, Xi'an, Chengdu, Chongqing.",
};

export default function Destinations2Page() {
  return <LeafletMapClient />;
}
