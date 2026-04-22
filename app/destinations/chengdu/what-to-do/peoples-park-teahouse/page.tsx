import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'People\'s Park Teahouse Chengdu | The Most Chengdu Experience',
  description:
    'The Heming Teahouse in People\'s Park is where Chengdu\'s slow-living culture peaks. Hundreds of bamboo chairs under ginkgo trees, ear-cleaning services, mahjong tables, and ¥15 tea refills. This single experience defines what makes Chengdu different from every other Chinese city.',
  openGraph: {
    title: 'People\'s Park Teahouse Chengdu | The Most Chengdu Experience',
    description:
      'The Heming Teahouse in People\'s Park is where Chengdu\'s slow-living culture peaks.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/peoples-park-teahouse',
    type: 'website',
  },
};

export default function PeoplesParkTeahousePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Sit anywhere — a tea master will come to you with their long-stream kettle',
    },
    {
      type: 'tip',
      text: 'Ear cleaning (采耳) is a Chengdu specialty — try it for ¥20-30, it\'s surprisingly relaxing',
    },
    {
      type: 'tip',
      text: 'Ginkgo trees turn gold in November — best time for autumn photography',
    },
    {
      type: 'tip',
      text: 'Try the bamboo chair area not the indoor section — more authentic Chengdu atmosphere',
    },
    {
      type: 'tip',
      text: 'Arrive before 2 PM on weekends — tables fill up quickly',
    },
  ] as const;

  const photoSpots = [
    {
      type: 'photo',
      text: 'Hundreds of bamboo chairs from above — the iconic view that defines Chengdu\'s tea culture',
    },
    {
      type: 'photo',
      text: 'Ear-cleaning service — capture the traditional practice in action',
    },
    {
      type: 'photo',
      text: 'Ginkgo trees in autumn — golden leaves falling on bamboo chairs',
    },
    {
      type: 'photo',
      text: 'Tea master pouring long-stream water — the teacup held high, water flowing from Kung Fu height',
    },
  ] as const;

  const relatedLinks = [
    { title: 'Wenshu Monastery', href: '/destinations/chengdu/what-to-do/wenshu-monastery' },
    { title: 'Jinli', href: '/destinations/chengdu/what-to-do/jinli-ancient-street' },
    { title: 'Chengdu Where to Eat', href: '/destinations/chengdu/where-to-eat' },
    { title: 'Chengdu Guide', href: '/destinations/chengdu' },
  ] as const;

  return (
    <AttractionPage
      name="People\'s Park Teahouse"
      nameZh="人民公园茶馆"
      city="Chengdu"
      description={`The Heming Teahouse in People\'s Park is where Chengdu\'s slow-living culture peaks. Hundreds of bamboo chairs under ginkgo trees, ear-cleaning services, mahjong tables, and ¥15 tea refills. This single experience defines what makes Chengdu different from every other Chinese city.`}
      hours="7:00-22:00"
      price="¥15-25 for tea + seat"
      nearestSubway="People\'s Park, Line 2"
      bestTime="Afternoon (1:00-5:00 PM)"
      tips={[...tips, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=30.6550&lon=104.0686&zoom=16&marker=30.6550%2C104.0686"
      relatedLinks={relatedLinks}
    />
  );
}
