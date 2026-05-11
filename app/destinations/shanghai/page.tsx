import { Metadata } from 'next';
import ShanghaiHubClient from './ShanghaiHubClient';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide',
  description: 'Complete Shanghai travel guide: best things to do, where to eat, local tips, and itineraries for first-time visitors.',
  alternates: { canonical: '/destinations/shanghai' },
};

export default function ShanghaiPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Shanghai", path: "/destinations/shanghai" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <ShanghaiHubClient />
    </>
  );
}
