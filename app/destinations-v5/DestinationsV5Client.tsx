'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MapComponent = dynamic(() => import('./MapInnerV5'), { ssr: false })

export default function DestinationsV5Client() {
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