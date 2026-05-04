import type { Metadata } from 'next'

type MakeMetadataInput = Metadata & {
  path: string
}

export function makeMetadata({
  path,
  alternates,
  openGraph,
  twitter,
  ...metadata
}: MakeMetadataInput): Metadata {
  return {
    ...metadata,
    alternates: {
      ...alternates,
      canonical: path,
    },
    openGraph: {
      ...openGraph,
      images: openGraph?.images ?? [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Trail of China' }],
    },
    twitter: {
      card: 'summary_large_image',
      images: twitter?.images ?? ['/og-default.jpg'],
      ...twitter,
    },
  }
}
