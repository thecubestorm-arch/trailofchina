import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Trail of China | Your Ultimate China Travel Guide 2025',
  description: 'Complete China travel guide for Western tourists. Visa-free 2025, city guides, apps, itineraries, and everything you need to know before visiting China.',
  keywords: 'China travel, China visa free 2025, Shanghai guide, Beijing travel, China tourism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
