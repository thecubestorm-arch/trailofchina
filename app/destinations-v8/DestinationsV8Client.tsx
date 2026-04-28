'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MapComponent = dynamic(() => import('./DestinationsMapInner'), { ssr: false })

export default function DestinationsV8Client() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-[#64748b]">Loading…</div>
        </div>
      }
    >
      <MapComponent />
    </Suspense>
  )
}