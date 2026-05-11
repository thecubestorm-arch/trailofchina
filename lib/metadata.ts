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
  const title = typeof metadata.title === 'string' ? metadata.title : 'Trail of China'
  const ogAlt = `${title} - Trail of China`

  return {
    ...metadata,
    alternates: {
      ...alternates,
      canonical: path,
    },
    openGraph: {
      ...openGraph,
      images: openGraph?.images ?? [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      images: twitter?.images ?? ['https://www.trailofchina.com/og-default.jpg'],
      ...twitter,
    },
  }
}
