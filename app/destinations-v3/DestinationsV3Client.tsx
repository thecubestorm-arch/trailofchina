'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MapComponent = dynamic(() => import('./MapInnerV3'), { ssr: false })

export default function DestinationsV3Client() {
  return (
    <Suspense
      fallback={
        <div className="h-screen bg-[#f5f1ea] flex items-center justify-center">
          <div className="text-[#64748b]">Loading map…</div>
        </div>
      }
    >
      <MapComponent />
    </Suspense>
  )
}