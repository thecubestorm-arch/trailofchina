import { Metadata } from 'next';
import ShanghaiStoryClient from './ShanghaiStoryClient';

export const metadata: Metadata = {
  title: 'Shanghai — A Travel Story | Trail of China',
  description: 'Experience Shanghai through an immersive travel guide. Colonial elegance meets tomorrow\'s skyline.',
};

export default function Shanghai6Page() {
  return <ShanghaiStoryClient />;
}