import type { Metadata } from 'next'
import PlanYourTripV5Client from './PlanYourTripV5Client'

export const metadata: Metadata = {
  title: 'Plan Your Trip Variant 5 | Trail of China',
  description: 'Visual route storytelling variant of the Plan Your Trip hub for Trail of China.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PlanYourTripV5Page() {
  return <PlanYourTripV5Client />
}
