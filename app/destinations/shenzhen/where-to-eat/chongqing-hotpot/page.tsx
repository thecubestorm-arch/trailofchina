import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Chongqing Hotpot in Shenzhen — The Mashup City Does Spicy', description: 'Authentic Chongqing hotpot in Shenzhen — boiling broth, mountains of chili, and beef offal. The mashup city does spicy right.', keywords: ['Chongqing hotpot Shenzhen', 'spicy hotpot Shenzhen', 'Shenzhen hotpot restaurant'], openGraph: { title: 'Chongqing Hotpot in Shenzhen', description: 'The mashup city does spicy — authentic Chongqing hotpot.', url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-eat/chongqing-hotpot', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Chongqing Hotpot in Shenzhen - Trail of China' }] } };

const faqJsonLd = faqPageSchema([{ question: 'Is Chongqing hotpot too spicy?', answer: "It can be! Order yuanyang pot (鸳鸯锅) — half spicy, half mild broth. Cook delicate items in the mild side and adventurous items in the spicy side." }, { question: 'What should I order at hotpot?', answer: 'Beef tripe, duck blood, tofu skin, enoki mushrooms, and potato slices are classic. Get a sesame oil and garlic dip to cool the heat.' }]);
const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Eat', path: '/destinations/shenzhen/where-to-eat' }, { name: 'Chongqing Hotpot', path: '/destinations/shenzhen/where-to-eat/chongqing-hotpot' }]);

export default function ChongqingHotpotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Chongqing Hotpot in Shenzhen"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' },
          { label: 'Where to Eat', href: '/destinations/shenzhen/where-to-eat' },
        ]}
        nameZh="重庆火锅"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-hotpot-1/800/600', alt: 'Chongqing hotpot with red broth bubbling' },
          { src: 'https://picsum.photos/seed/shenzhen-hotpot-2/800/600', alt: 'Hotpot ingredients laid out' },
          { src: 'https://picsum.photos/seed/shenzhen-hotpot-3/800/600', alt: 'Sesame oil dip for hotpot' },
        ]}
        hook="The mashup city does spicy — authentic Chongqing hotpot without leaving Shenzhen. Boiling broth, mountains of chili, and beef offal."
        quickInfo={{ price: '¥80–150/person', hours: '11:00–02:00', bestTime: 'Evening', metro: 'Multiple' }}
        whyYouLoveIt={`Shenzhen's population includes millions of migrants from Sichuan and Chongqing, and they brought their hotpot with them. The result: some of the best Chongqing-style hotpot outside of Chongqing itself.

The format is simple: a vat of boiling red oil and chili broth in the center of the table, and you cook raw ingredients in it. Classic items include beef tripe (毛肚, cook for 15 seconds), duck blood (鸭血, let it simmer), tofu skin, lotus root, and enoki mushrooms. The dip is sesame oil with raw garlic — it cools the heat and adds richness.`}
        description={`Chongqing hotpot (重庆火锅) has become one of Shenzhen's most popular dining experiences, thanks to the city's large population of migrants from southwestern China. The signature style features a vat of boiling red broth packed with Sichuan peppercorns and dried chilies, into which diners cook raw ingredients.`}
        hours="11:00–02:00"
        price="¥80–150 per person"
        nearestSubway="Multiple locations"
        bestTime="Evening (18:00–21:00)"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0400%2C22.5200%2C114.0700%2C22.5500&layer=mapnik&marker=22.5361%2C114.0550"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Dim Sum', description: 'The Cantonese alternative — mild and delicate.', href: '/destinations/shenzhen/where-to-eat/dim-sum' },
          { title: 'Where to Stay in Shenzhen', description: 'Best neighborhoods.', href: '/destinations/shenzhen/where-to-stay' },
        ]}
        tips={[
          { type: 'tip', text: 'Order yuanyang pot (鸳鸯锅) — half spicy, half mild — so everyone can eat at their comfort level.' },
          { type: 'tip', text: 'The sesame oil and garlic dip is essential — it cools the heat and adds flavor.' },
        ]}
        practicalDetails={{
          gettingThere: "Hotpot restaurants are everywhere in Shenzhen. Haidilao (海底捞) is the most famous chain with English menus and legendary service. Local Chongqing-style shops are spicier and cheaper.",
        }}
      />
    </>
  );
}