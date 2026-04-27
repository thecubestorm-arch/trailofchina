'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MapComponent = dynamic(() => import('./MapInnerV2'), { ssr: false })

export default function DestinationsV2Client() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f5f1ea] flex items-center justify-center">
          <div className="text-[#64748b]">Loading map…</div>
        </div>
      }
    >
      <MapComponent />
    </Suspense>
  )
}