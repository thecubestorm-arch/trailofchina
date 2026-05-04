import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { defaultLocale } from '../i18n'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
// Search temporarily disabled — will be re-enabled after review
// import { SearchProvider } from '@/components/SearchProvider'
// import SearchCommandPalette from '@/components/SearchCommandPalette'

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
      <head>
        <script defer src="https://umami-analytics-wuzf.srv1019856.hstgr.cloud/script.js" data-website-id="e6431fc1-db47-401c-96c4-a4d794d0e4fe" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "wlqd442wnx");` }} />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#f5f1ea' }}>
        <NextIntlClientProvider locale={defaultLocale}>
          <div className="relative min-h-screen" style={{ backgroundColor: '#f5f1ea' }}>
            <Navigation />
            <main style={{ backgroundColor: '#f5f1ea' }}>{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
