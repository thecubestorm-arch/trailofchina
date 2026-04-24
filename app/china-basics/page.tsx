import type { Metadata } from 'next'
import ChinaBasicsClient from './ChinaBasicsClient'

export const metadata: Metadata = {
  title: 'China Basics - Everything You Need to Know',
  description:
    'Master the essentials for your first China trip: apps, internet setup, cultural differences, and transport basics in one practical hub.',
  alternates: {
    canonical: '/china-basics',
  },
}

export default function ChinaBasicsPage() {
  return <ChinaBasicsClient />
}
