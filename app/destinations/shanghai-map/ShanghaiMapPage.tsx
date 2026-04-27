'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ShanghaiLeafletMap = dynamic(() => import('./ShanghaiLeafletMap'), { ssr: false })

export default function ShanghaiMapPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="text-[#64748b]">Loading map…</div></div>}>
      <ShanghaiLeafletMap />
    </Suspense>
  )
}