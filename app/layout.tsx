import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Travel China Without Confusion',
    template: '%s | Trail of China',
  },
  description:
    'Start planning your first China trip with practical prep guides, destination overviews, and realistic itinerary ideas for international travelers.',
  keywords: 'China travel guide,first trip to China,China itinerary,China travel planning,travel China first time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" style={{ backgroundColor: '#f5f1ea' }}>
        <div className="relative min-h-screen" style={{ backgroundColor: '#f5f1ea' }}>
          <Navigation />
          <main style={{ backgroundColor: '#f5f1ea' }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
