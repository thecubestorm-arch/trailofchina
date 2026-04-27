import type { Metadata } from 'next'
import ShanghaiMapPage from './ShanghaiMapPage'

export const metadata: Metadata = {
  title: 'Shanghai Interactive Map | Trail of China',
  description: 'Explore Shanghai on an interactive map — attractions, restaurants, hotels, and essentials.',
}

export default function Page() {
  return <ShanghaiMapPage />
}