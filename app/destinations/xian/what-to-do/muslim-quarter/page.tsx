import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Xi\'an Muslim Quarter: Street Food Paradise & Hidden Mosque',
  description:
    'Explore Xi\'an\'s vibrant Muslim Quarter — street food capital of China with the stunning Great Mosque. Food guide, walking route, and what to eat.',
  openGraph: {
    title: 'Xi\'an Muslim Quarter: Street Food Paradise & Hidden Mosque',
    description:
      'Explore Xi\'an\'s vibrant Muslim Quarter — street food capital of China with the stunning Great Mosque. Food guide, walking route, and what to eat.',
    url: 'https://trailofchina.com/destinations/xian/what-to-do/muslim-quarter',
    type: 'website',
  },
};

export default function MuslimQuarterPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Visit in the evening (6-9 PM) for the best food scene — stalls are fully operational and the atmosphere is electric',
    },
    {
      type: 'tip' as const,
      text: 'Try yangroupaomo (羊肉泡馍) — shredded lamb in broth with hand-torn bread, a Xi\'an specialty',
    },
    {
      type: 'tip' as const,
      text: 'Great Mosque entry is ¥25 — opens at 8 AM, closes around 7 PM (check prayer times)',
    },
    {
      type: 'tip' as const,
      text: 'Dress modestly if visiting the mosque — cover shoulders and knees, remove shoes before prayer halls',
    },
    {
      type: 'tip' as const,
      text: 'Bring cash — many small stalls don\'t accept international cards, though WeChat Pay and Alipay work',
    },
  ];


  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'Great Mosque entrance gate — stunning Chinese-Islamic architecture with traditional upturned eaves',
    },
    {
      type: 'photo' as const,
      text: 'Bustling food stalls at night — capture the steam, flames, and vibrant street life',
    },
    {
      type: 'photo' as const,
      text: 'Roujiamo (Chinese hamburger) being made — the crispy bread and spiced meat make great food photography',
    },
    {
      type: 'photo' as const,
      text: 'Courtyards inside the Great Mosque — peaceful gardens with traditional Chinese pavilions and Arabic calligraphy',
    },
  ];

  return (
    <AttractionPage
      name="Muslim Quarter"
      breadcrumbs={[
      { label: "Home", href: '/' },
      { label: "Destinations", href: '/destinations' },
      { label: "Xi'an", href: '/destinations/xian' },
      { label: "What to Do", href: '/destinations/xian/what-to-do' },
    ]}
      nameZh="回民街"
      city="Xi'an"
      images={[
        { src: 'https://picsum.photos/seed/muslim-quarter-1/800/500', alt: "Xi'an Muslim Quarter bustling street food stalls at night" },
        { src: 'https://picsum.photos/seed/muslim-quarter-2/800/500', alt: "Great Mosque Chinese-Islamic architecture in Xi'an" },
        { src: 'https://picsum.photos/seed/muslim-quarter-3/800/500', alt: "Roujiamo being prepared at Xi'an Muslim Quarter" },
      ]}
      description={`The Muslim Quarter (回民街) is Xi'an's beating heart of Hui Muslim culture and the street food capital of northwest China. This bustling network of narrow lanes, tucked behind the Drum Tower, has been home to Xi'an's Muslim community for over 1,000 years. The aromas here are intoxicating — cumin-spiced lamb sizzling over charcoal, hand-pulled noodles being slapped against countertops, and sweet osmanthus cakes steaming in bamboo baskets.

The quarter's main drag, Beiyuanmen, is lined with food stalls, souvenir shops, and restaurants serving halal specialties. Must-try dishes include roujiamo (often called the world's first hamburger — spiced meat stuffed in crispy flatbread), yangroupaomo (shredded lamb soup where you tear your own bread into bite-sized pieces), and biangbiang noodles (wide, belt-like noodles with chili oil and garlic). For dessert, try persimmon cakes or sweet fermented rice drink.

Hidden within the chaos is the Great Mosque (清真大寺), one of China's oldest and most architecturally unique mosques. Built in 742 AD during the Tang Dynasty, it blends traditional Chinese garden architecture with Islamic function — think upturned eaves, wooden pavilions, and stone steles with Arabic calligraphy. The mosque's five courtyards are peaceful oases from the frenetic streets outside, with pine trees, koi ponds, and prayer halls.

The Muslim Quarter is best explored on foot, ideally in the evening when the food scene reaches its peak. Come hungry, bring cash, and let your nose guide you through the smoky, savory labyrinth. Whether you're a foodie chasing authentic flavors or a culture enthusiast seeking Xi'an's Hui heritage, the Muslim Quarter delivers an unforgettable sensory experience.`}
      hours="24/7 (shops), best 6-9 PM for food; Great Mosque 8:00-19:00"
      price="Free to enter; food ¥10-30 per dish; Great Mosque ¥25"
      nearestSubway="Zhonglou (Bell Tower), Line 2 or 6"
      bestTime="Evening (6-9 PM) for food scene; weekday mornings for quieter mosque visit"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=108.9339%2C34.2604%2C108.9439%2C34.2664&layer=mapnik&marker=34.2634%2C108.9389"
      address="Muslim Quarter, Lianhu District"
      addressZh="西安市莲湖区回民街"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Terracotta Warriors", description: "2,200-year-old army of China's first emperor, Qin Shi Huang.", href: "/destinations/xian/what-to-do/terracotta-warriors" },
        { title: "City Wall", description: "Best-preserved ancient city wall with a 14 km perimeter.", href: "/destinations/xian/what-to-do/city-wall" },
        { title: "Yangroupaomo", description: "Xi'an's iconic lamb-oatmeal breakfast soup.", href: "/destinations/xian/where-to-eat/yangroupaomo" },
        { title: "Bell & Drum Tower", description: "Explore Bell & Drum Tower, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/bell-drum-tower" },
        { title: "Big Wild Goose Pagoda", description: "Explore Big Wild Goose Pagoda, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/big-wild-goose-pagoda" },
        { title: "Where to Eat in Xi'an", description: "Discover Xi'an's best local dishes and restaurants.", href: "/destinations/xian/where-to-eat" },
        { title: "Xi'an Local Tips", description: "Practical tips for navigating Xi'an like a local.", href: "/destinations/xian/local-tips" },
        { title: "Xi'an Guide", description: "Complete guide to planning your Xi'an trip.", href: "/destinations/xian" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
