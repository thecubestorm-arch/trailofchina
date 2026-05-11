import type { Metadata } from 'next'
import ChinaBasicsClient from './ChinaBasicsClient'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'China Basics - Everything You Need to Know',
  description:
    'Master the essentials for your first China trip: apps, internet setup, cultural differences, and transport basics in one practical hub.',
  alternates: {
    canonical: '/china-basics',
  },
}

export default function ChinaBasicsPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ChinaBasicsClient />
    </>
  )
}
