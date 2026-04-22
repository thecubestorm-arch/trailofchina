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
  }
]
