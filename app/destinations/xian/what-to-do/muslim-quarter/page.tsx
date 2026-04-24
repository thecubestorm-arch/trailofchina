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

const searchQuery = encodeURIComponent("Xi'an Muslim Quarter food tour");

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
      hook="Chaos, smoke, and the best street food in China — roujiamo, biangbiang noodles, lamb skewers every 10 meters."
      quickInfo={{
        price: 'Free to wander',
        hours: '11:00–23:00',
        bestTime: 'Evening for atmosphere',
        metro: 'Zhonglou (Line 2)',
      }}
      whyYouLoveIt={`The Muslim Quarter is sensory overload in the best possible way. Walk down Beiyuanmen at 7 PM and the air is thick with smoke from lamb skewers sizzling over charcoal, the slap of hand-pulled noodles against countertops, and vendors shouting prices in a mix of Mandarin and Hui dialect. This is not sanitized tourist food — this is a 1,000-year-old community cooking the same dishes their ancestors cooked when Xi'an was the eastern terminus of the Silk Road.

The Hui Muslim culture here is unique in China. You'll see men in white skullcaps and women in headscarves, Arabic calligraphy on shop signs next to Chinese characters, and halal restaurants serving dishes you won't find anywhere else in the country. The Great Mosque, hidden behind a wooden gate that looks like a Chinese temple, is the oldest in China — built in 742 AD, it's a masterpiece of Chinese-Islamic architecture where upturned eaves meet prayer halls. This is Xi'an's beating heart, and you can feel the history in every bite.`}
      images={[
        { src: 'https://picsum.photos/seed/muslim-quarter-street/800/600', alt: "Bustling street in Xi'an Muslim Quarter at night" },
        { src: 'https://picsum.photos/seed/muslim-quarter-food/800/600', alt: "Street food stalls with lamb skewers and roujiamo" },
        { src: 'https://picsum.photos/seed/muslim-quarter-night/800/600', alt: "Muslim Quarter neon lights and crowds at night" },
        { src: 'https://picsum.photos/seed/muslim-quarter-lamb/800/600', alt: "Lamb skewers grilling over charcoal" },
        { src: 'https://picsum.photos/seed/muslim-quarter-noodles/800/600', alt: "Hand-pulled biangbiang noodles being made" },
      ]}
      practicalDetails={{
        gettingThere: `Metro Line 2 to Zhonglou (Bell Tower) Station. Take Exit B and walk west on West Street — you'll smell the Muslim Quarter before you see it. The main entrance is a grand wooden archway at the intersection with Beiyuanmen. The walk from the metro takes 3 minutes.

The quarter is a maze of narrow lanes branching off Beiyuanmen. Don't worry about getting lost — the area is compact and every lane eventually loops back. The Great Mosque is about 200 meters down Huajue Lane, marked by a traditional Chinese-style wooden gate.`,
        whatToSkip: `Cultural show restaurants on the main drag are tourist traps — they serve watered-down versions of local dishes at double the price while dancers perform generic "folk" routines. The real food is on the street. Follow the smoke and the longest queues of locals, not the neon signs.

Avoid the souvenir shops selling "authentic" Silk Road trinkets — most are mass-produced in Yiwu. If you want to buy something, get dried fruit or spices from the food vendors instead. The persimmon cakes (柿子饼) from the stall near the Great Mosque are genuinely local and delicious.`,
        photographyTips: `Night photography is where the Muslim Quarter shines. The neon signs, steam from food stalls, and crowds create a Blade Runner atmosphere. Shoot at f/1.8 or wider with a high ISO (3200–6400) to capture the energy without a flash — flash kills the mood and annoys vendors.

For food close-ups, ask permission first (most vendors are proud of their work and will pose). The hand-pulled noodle stations are the most photogenic — the slap of the dough, the stretch of the strands, and the flour dust in the air make for dynamic action shots. The Great Mosque courtyards are peaceful and beautifully lit in late afternoon — perfect for architecture photography with the Chinese-Islamic fusion details.`,
      }}
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
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than a Food Tourist Walk?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Eat like a local. Book a food tour through hidden alley eateries with introductions to local families and deep insights into Hui culture and history.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Food Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Hidden alley eateries</span>
              <span>✓ Local family introductions</span>
              <span>✓ Hui culture & history</span>
            </div>
          </div>
        </section>
      }
    />
  );
}