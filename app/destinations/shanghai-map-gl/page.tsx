import type { Metadata } from 'next'
import ShanghaiMapGLPage from './ShanghaiMapGLPage'

export const metadata: Metadata = {
  title: 'Shanghai Interactive Map (GL) | Trail of China',
  description: 'Explore Shanghai on a WebGL-powered interactive map — attractions, restaurants, hotels, and essentials.',
}

export default function Page() {
  return <ShanghaiMapGLPage />
}