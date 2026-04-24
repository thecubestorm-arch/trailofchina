import { Metadata } from 'next';
import ShanghaiHubClient from './ShanghaiHubClient';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Things to Do, Where to Eat, Where to Stay | Trail of China',
  description: 'Colonial elegance meets tomorrow\'s skyline. Discover top things to do, where to eat, where to stay, and local tips for Shanghai, China.',
};

export default function Shanghai4Page() {
  return <ShanghaiHubClient />;
}
