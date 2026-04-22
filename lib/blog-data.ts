export type BlogPost = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readingTime: string
  tags: string[]
  content: string
  imageUrl: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-time-in-china-survival-guide",
    title: "First Time in China: A Complete 2025 Survival Guide",
    description: "Everything you need to know before your first trip to China - from visa requirements to mobile apps and payment methods.",
    category: "China Basics",
    date: "2025-03-15",
    readingTime: "8 min",
    tags: ["Visa", "Apps", "Payment", "Internet"],
    imageUrl: "https://picsum.photos/seed/china-street-food/800/400",
    content: `**Visa Requirements and Application Process**

Getting a China visa can be daunting for first-time visitors. As of 2025, most travelers need to apply for a visa before arrival. The process typically involves submitting your passport, completed application form, photos, and supporting documents like flight itineraries and hotel bookings to the Chinese embassy or consulate in your country. Processing times can take 4-5 working days, so plan ahead. Some cities offer visa-free transit policies for 24-72 hours if you're continuing to a third country, but for most tourists, a full visa is required. Make sure your passport has at least six months validity remaining from your planned departure date from China.
`

  },
  {
    slug: "shanghai-vs-beijing",
    title: "Shanghai vs Beijing: Which City Should You Visit First?",
    description: "Comparing China's two largest cities - Shanghai's modern skyline versus Beijing's historical richness, and which更适合 first-time visitors.",
    category: "Destinations",
    date: "2025-04-01",
    readingTime: "6 min",
    tags: ["Shanghai", "Beijing", "Comparison"],
    imageUrl: "https://picsum.photos/seed/shanghai-skyline/800/400",
    content: `**Modern Megacity vs Historical Capital**

Shanghai and Beijing represent two very different sides of China, and the choice between them depends on what kind of experience you're seeking. Shanghai is China's financial capital and most international city, with its iconic skyline featuring the Oriental Pearl Tower and the futuristic Pudong district. The city exudes a cosmopolitan vibe with colonial architecture in the Bund area, luxury shopping in Nanjing Road, and vibrant nightlife. For first-time visitors interested in modern China and business, Shanghai provides an impressive introduction.
`
  },
  {
    slug: "great-wall-sections-compared",
    title: "The Great Wall: Mutianyu vs Badaling vs Jinshanling Compared",
    description: "Choosing the right Great Wall section for your visit - comparing accessibility, crowds, hiking difficulty, and unique features.",
    category: "Destinations",
    date: "2025-04-10",
    readingTime: "10 min",
    tags: ["Great Wall", "Hiking", "Beijing"],
    imageUrl: "https://picsum.photos/seed/great-wall-hike/800/400",
    content: `**The Classic Tourist Section**

Badaling is the most famous and most visited section of the Great Wall, located about 70 kilometers north of Beijing. It was the first section restored after the 1950s and has been visited by over 370 million people, including numerous world leaders. The advantage is excellent facilities, easy access via subway and bus, and wheelchair accessibility on some sections. However, it's also the most crowded, especially during holidays and weekends. If you visit during peak season, expect long queues and crowded cable cars.
`
  },
  {
    slug: "top-5-things-shanghai",
    title: "Top 5 Things to Do in Shanghai for First-Time Visitors",
    description: "From the iconic Bund waterfront to serene classical gardens, discover the 5 absolute must-see experiences in Shanghai.",
    category: "City Guide",
    date: "2025-04-15",
    readingTime: "6 min",
    tags: ["Shanghai", "Attractions", "First Time"],
    imageUrl: "https://picsum.photos/seed/shanghai-bund-night/800/400",
    content: `**1. The Bund (外滩)**

Shanghai's iconic waterfront is the one place you absolutely cannot skip. The colonial-era buildings on the west bank face Pudong's futuristic skyline across the Huangpu River, creating one of the world's great urban vistas. Come at night when both sides light up — the view from the promenade is unforgettable. Take the ¥2 ferry across the river for the best budget photo op in China.

**2. Yu Garden (豫园)**

This 400-year-old classical Chinese garden is a peaceful oasis hidden within a bustling bazaar. Pavilions, rockeries, and koi ponds create the perfect introduction to traditional Chinese landscape design. Arrive early (before 9 AM) to enjoy it without the crowds. The surrounding City God Temple area is great for souvenirs and street food.

**3. French Concession**

Tree-lined streets, European architecture, and some of the city's best cafes and boutiques make this the perfect neighborhood for a lazy afternoon stroll. Head to Fuxing Park to watch locals practice tai chi, then explore Tianzifang's maze of artsy alleyways. This is the Shanghai that feels nothing like a tourist attraction — and that's exactly why you should go.

**4. Shanghai Tower**

The world's second-tallest building offers 360-degree views from 546 meters up. The elevator hits 74 km/h, making it one of the fastest on Earth. Book online to skip lines, and try to go on a clear day — smog can reduce visibility dramatically. The observation deck stays open until 10 PM, making it a great evening activity.

**5. Shanghai Museum**

Free entry and one of the best collections of ancient Chinese art anywhere — calligraphy, jade, bronze, ceramics, and paintings spanning 5,000 years. Allow 2-3 hours. The audio guide is worth the ¥40. Located on People's Square, it's easy to combine with a visit to Nanjing Road.

**Pro Tip:** Buy a Shanghai Metro pass for ¥18/day — it covers all lines and saves tons of time vs. taxis in traffic. Download the Metropolis app for English-language navigation.
`
  },
  {
    slug: "top-5-things-beijing",
    title: "Top 5 Things to Do in Beijing: The Essential Guide",
    description: "Beijing's 3,000 years of history pack a punch. Here are the 5 experiences that define China's capital for first-time visitors.",
    category: "City Guide",
    date: "2025-04-16",
    readingTime: "7 min",
    tags: ["Beijing", "Attractions", "History"],
    imageUrl: "https://picsum.photos/seed/beijing-great-wall/800/400",
    content: `**1. The Forbidden City (故宫)**

The world's largest palace complex — 980 buildings, 8,700 rooms, 500 years of imperial rule. Enter through the Meridian Gate and walk the central axis north through succession halls of increasing intimacy. The final exit leads directly into Jingshan Park for a panoramic overview of the entire complex. Allow 3-4 hours minimum. Book tickets online in advance — same-day tickets often sell out.

**2. Great Wall at Mutianyu (慕田峪)**

Skip the tourist-clogged Badaling and head to Mutianyu instead. This section is beautifully restored but far less crowded, with watchtowers offering stunning mountain views. The cable car up and toboggan slide down make it fun for all ages. It's 90 minutes from the city center — book a shared bus or driver. Go early morning for the best light and fewest people.

**3. Temple of Heaven (天坛)**

The Hall of Prayer for Good Harvests is Beijing's most iconic silhouette. But the real magic is in the park at 6 AM — hundreds of locals doing tai chi, sword dancing, choir singing, and calligraphy on the ground with water brushes. Come for the architecture, stay for the living culture. The park opens at 6 AM (buildings at 8), and early morning is peak people-watching.

**4. Summer Palace (颐和园)**

Empress Dowager Cixi's imperial retreat centers on Kunming Lake and Longevity Hill. The 728-meter Long Corridor features painted scenes from Chinese literature. Rent a rowboat in summer, or walk the lake perimeter in winter when it freezes. The Marble Boat — a pavilion built to look like a ship — symbolizes Cixi's notorious extravagance.

**5. Hutongs (胡同)**

Beijing's ancient alleyway neighborhoods are disappearing fast, but the ones that remain offer a window into traditional life. Take a rickshaw tour through the Nanluoguxiang and Yandai Xiejie areas, or explore on foot. Many hutongs now house craft shops, cafes, and courtyard restaurants. The contrast between old alleys and new Beijing is what makes this city endlessly fascinating.

**Pro Tip:** Beijing is huge — group sights by district (Dongcheng: Forbidden City + Temple of Heaven; Haidian: Summer Palace) to avoid spending half your day in traffic.
`
  },
  {
    slug: "top-5-things-chengdu",
    title: "Top 5 Things to Do in Chengdu: Pandas, Spice, and Slow Living",
    description: "Chengdu moves at its own pace. Discover the 5 essential experiences in China's most laid-back major city.",
    category: "City Guide",
    date: "2025-04-17",
    readingTime: "6 min",
    tags: ["Chengdu", "Pandas", "Food"],
    imageUrl: "https://picsum.photos/seed/chengdu-panda/800/400",
    content: `**1. Chengdu Research Base of Giant Panda Breeding**

This is the reason most people come to Chengdu — and it delivers. See giant pandas at their most active during morning feeding time (arrive by 8 AM). The red panda enclosure is equally charming. Budget 3-4 hours. Book online to skip the queue, and take the internal shuttle if you want to save walking energy for the rest of the day.

**2. Jinli Ancient Street (锦里)**

A reconstructed Qing-dynasty market street that's touristy but irresistible. Snack on rabbit heads, sugar paintings, and Sichuan peppercorn everything. The lantern-lit evening atmosphere is magical. It's right next to Wuhou Shrine, so combine both in one visit.

**3. People's Park Teahouse (人民公园)**

Chengdu's famous slow living distilled into one spot. Sit under the trees, order gaiwan tea (¥15-30), and watch locals play mahjong, practice calligraphy, or just nap. The ear-cleaning service is uniquely Chengdu. This is not a tourist show — it's real daily life, and it's wonderful.

**4. Sichuan Opera (川剧)**

The face-changing performance (变脸) is one of China's most spectacular traditional arts. Performers switch masks in fractions of a second — the secret technique is a closely guarded tradition. Shows run nightly at several theaters; Jinjiang Theater is the most authentic. Book the VIP seat for the best view of the mask changes.

**5. Kuanzhai Alley (宽窄巷子)**

Three parallel alleys — Wide, Narrow, and Well — offer a polished blend of old and new. Traditional courtyard homes now house craft breweries, tea houses, and boutique shops. Less chaotic than Jinli, more upscale. Great for an evening stroll and dinner.

**Pro Tip:** Chengdu's food is famously spicy. If you can't handle heat, learn the phrase "微辣" (wēi là, mild spicy) — though even Chengdu's "mild" will test your tolerance.
`
  },
  {
    slug: "top-5-things-xian",
    title: "Top 5 Things to Do in Xi'an: Ancient Capital, Living History",
    description: "Xi'an was China's capital for 13 dynasties. These 5 experiences bring 3,000 years of history to life.",
    category: "City Guide",
    date: "2025-04-18",
    readingTime: "6 min",
    tags: ["Xi'an", "Terracotta Warriors", "History"],
    imageUrl: "https://picsum.photos/seed/xian-terracotta/800/400",
    content: `**1. Terracotta Warriors (兵马俑)**

One of the greatest archaeological discoveries of the 20th century. Over 8,000 life-sized clay soldiers, each with unique facial features, guard Emperor Qin Shi Huang's tomb. Pit 1 is the most impressive — rows of warriors stretching into the distance. Hire an audio guide or a local guide (¥150-200) to understand what you're seeing. It's 40 km from the city center — allow a full half day.

**2. Xi'an City Wall (城墙)**

The most complete city wall in China, dating to the Ming dynasty. Rent a bicycle (¥45 for 2 hours) and ride the 14-km perimeter on top of the wall. The views of old and new Xi'an are spectacular. Go at sunset for golden light on the red lanterns. The south gate (Yongningmen) is the most photogenic entrance.

**3. Muslim Quarter (回民街)**

A food lover's paradise and cultural crossroads. Xi'an's Hui Muslim community has been here since the Silk Road era. Try yangroupaomo (lamb soup with bread), roujiamo (Chinese hamburger), and pomegranate juice. Come hungry and graze — the best food is at the small stalls, not the restaurants. Evening is peak time when the whole street comes alive.

**4. Bell and Drum Towers (钟鼓楼)**

The twin Ming-dynasty towers mark Xi'an's geographic and historic center. The Bell Tower sits in a traffic circle with four radiating streets; the Drum Tower is a 5-minute walk west. Climb both for city views. The underground passage connecting them passes through a shopping area — follow the signs carefully. The combo ticket is better value than buying separately.

**5. Big Wild Goose Pagoda (大雁塔)**

Built in 652 AD to house Buddhist scriptures brought from India by monk Xuanzang. The pagoda leans slightly — it survived a 1556 earthquake that killed 830,000 people. The surrounding Da Ci'en Temple is peaceful and the evening fountain show (free, 8 PM) is surprisingly spectacular. The adjacent plaza has street food and cultural performances.

**Pro Tip:** Xi'an's best food is in the Muslim Quarter, but avoid the main strip at peak dinner time. Walk one block north or south for the same food at half the price.
`
  },
  {
    slug: "top-5-things-chongqing",
    title: "Top 5 Things to Do in Chongqing: China's Cyberpunk Megacity",
    description: "Chongqing defies expectations. Part mountain fortress, part neon dreamscape, these are the 5 things you must experience.",
    category: "City Guide",
    date: "2025-04-19",
    readingTime: "6 min",
    tags: ["Chongqing", "Nightlife", "Food"],
    imageUrl: "https://picsum.photos/seed/chongqing-night/800/400",
    content: `**1. Hongya Cave (洪崖洞)**

Chongqing's most famous sight — a 75-meter cliffside complex of shops, restaurants, and traditional stilt houses (吊脚楼) stacked 11 stories high. At night, the warm lighting turns it into something out of Spirited Away. The view from the opposite bank (Qiansimen Bridge) is the classic shot. Go after 8 PM for the full effect. It's free to wander, but the restaurants are overpriced — eat elsewhere.

**2. Yangtze River Cable Car (长江索道)**

A commuting cable car that crosses the Yangtze River in 4 minutes, offering stunning views of the mountain city skyline. The ¥20 single ride is one of the best value experiences in China. Go at sunset when the city lights start twinkling. The south station has a small museum about the cable car's history. Expect a queue on weekends — go on a weekday morning.

**3. Ciqikou Old Town (磁器口)**

A 1,000-year-old riverside town (now a district of Chongqing) with cobbled streets, tea houses, and snack vendors. Sample 陈麻花 (Chen's fried dough twists), the town's famous snack — you'll see shops competing for your attention with free samples. The riverside teahouses are perfect for an afternoon break. Come early — by noon, the main street is packed.

**4. Liziba Monorail Station (李子坝)**

The famous station where the monorail passes straight through a residential building. It's a quick photo stop — take Line 2 to Liziba and watch the train enter the building from the street below. The city built a dedicated viewing platform for tourists. It's quick but iconic — this is the image that went viral and put Chongqing on the map for many travelers.

**5. Eling Park (鹅岭公园)**

The best free viewpoint in Chongqing. Climb to the top for a 360-degree panorama of the mountain city, the Yangtze and Jialing rivers, and the endless skyline. Go at dusk when the city transitions from day to neon night. The park itself is peaceful — a contrast to Chongqing's intense energy below. The former Australian embassy building inside is now a small art gallery.

**Pro Tip:** Chongqing is a 3D city — navigation apps regularly fail here. Trust the locals when they say "go up" — your destination might literally be above you. Take the escalators (not stairs) in the hillside.
`
  }
]
