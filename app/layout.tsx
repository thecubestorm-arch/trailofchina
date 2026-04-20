import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Trail of China | Premium China Travel Guide for First-Time Visitors',
    template: '%s | Trail of China',
  },
  description:
    'Complete China travel guide for Western travelers. Visa-free updates, city guides, transport, apps, and practical tips for your first China trip.',
  keywords:
    'China travel, China visa free 2025, Shanghai guide, Beijing travel, China tourism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-china-dark antialiased">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
