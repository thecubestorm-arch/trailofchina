'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MapComponent = dynamic(() => import('./MapInner'), { ssr: false });

export default function DestinationsMapClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-[#64748b]">Loading map…</div>
        </div>
      }
    >
      <MapComponent />
    </Suspense>
  );
}
