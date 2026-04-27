import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { defaultLocale } from '../i18n'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import { SearchProvider } from '@/components/SearchProvider'
import SearchCommandPalette from '@/components/SearchCommandPalette'

export const metadata: Metadata = {
  title: {
    default: 'Travel China Without Confusion',
    template: '%s | Trail of China',
  },
  description:
    'Start planning your first China trip with practical prep guides, destination overviews, and realistic itinerary ideas for international travelers.',
  keywords: 'China travel guide,first trip to China,China itinerary,China travel planning,travel China first time',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const dynamic = 'force-static'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" style={{ backgroundColor: '#f5f1ea' }}>
        <NextIntlClientProvider locale={defaultLocale}>
          <SearchProvider>
            <div className="relative min-h-screen" style={{ backgroundColor: '#f5f1ea' }}>
              <Navigation />
              <main style={{ backgroundColor: '#f5f1ea' }}>{children}</main>
              <Footer />
              <CookieConsent />
              <SearchCommandPalette />
            </div>
          </SearchProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
