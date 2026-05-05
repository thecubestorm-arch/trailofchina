import type { Metadata } from 'next'
import PlanYourTripV4Client from './PlanYourTripV4Client'

export const metadata: Metadata = {
  title: 'Plan Your Trip Variant 4 | Trail of China',
  description: 'Decision-flow style Plan Your Trip hub variant for Trail of China.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PlanYourTripV4Page() {
  return <PlanYourTripV4Client />
}
