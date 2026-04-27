'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ShanghaiMapGL = dynamic(() => import('./ShanghaiMapGL'), { ssr: false })

export default function ShanghaiMapGLPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="text-[#64748b]">Loading map…</div></div>}>
      <ShanghaiMapGL />
    </Suspense>
  )
}