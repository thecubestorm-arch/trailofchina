import type { Metadata } from 'next'
import HomeV2Client from './HomeV2Client'

export const metadata: Metadata = {
  title: 'Trail of China — First-Trip China Travel Guide',
  description:
    'Practical guides, honest advice, and ready-made itineraries for Western travelers exploring China for the first time.',
  openGraph: {
    title: 'Trail of China — First-Trip China Travel Guide',
    description:
      'Practical guides, honest advice, and ready-made itineraries for Western travelers exploring China for the first time.',
    type: 'website',
  },
}

export default function HomeV2Page() {
  return <HomeV2Client />
}
