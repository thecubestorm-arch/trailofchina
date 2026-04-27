import type { Metadata } from 'next'
import DestinationsV2Client from './DestinationsV2Client'

export const metadata: Metadata = {
  title: 'Explore China — Map & List View | Trail of China',
  description: 'Explore Beijing, Shanghai, Xi\'an, Chengdu, Chongqing and more. Switch between map and list views to plan your China trip.',
}

export default function DestinationsV2Page() {
  return <DestinationsV2Client />
}