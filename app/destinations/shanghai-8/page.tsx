import { Metadata } from 'next';
import ShanghaiSuperClient from './ShanghaiSuperClient';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Trail of China',
  description: 'Explore Shanghai — the Bund, Yu Garden, French Concession, and more. Search, filter, and plan your perfect trip.',
};

export default function Shanghai8Page() {
  return <ShanghaiSuperClient />;
}