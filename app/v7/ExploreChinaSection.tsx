'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, List, Map as MapIcon } from 'lucide-react'
import { exploreCities } from '@/app/v7/exploreChinaData'

const ExploreChinaMap = dynamic(() => import('@/app/v7/ExploreChinaMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[420px] rounded-[1.75rem] border border-[#1a3a4a]/10 bg-white" />
  ),
})

export default function ExploreChinaSection() {
  const [activeCityKey, setActiveCityKey] = useState(exploreCities[0].key)
  const [mobileView, setMobileView] = useState<'list' | 'map'>('list')

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#af5d32]">
          Explore China
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Explore Our Destinations</h2>
        <p className="mt-3 text-base leading-7 text-[#1a3a4a]/72">
          5 destinations, hand-picked for first-time travelers
        </p>
      </div>

      <div className="relative rounded-[2rem] border border-[#1a3a4a]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.92))] p-3 shadow-[0_24px_60px_rgba(26,58,74,0.08)] sm:p-4">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[420px_minmax(0,1fr)]">
          <div
            className={`rounded-[1.75rem] border border-[#1a3a4a]/10 bg-white/90 p-3 lg:h-[640px] lg:overflow-y-auto ${
              mobileView === 'map' ? 'hidden lg:block' : 'block'
            }`}
          >
            <div className="space-y-3">
              {exploreCities.map((city) => {
                const isActive = activeCityKey === city.key

                return (
                  <article
                    key={city.key}
                    className={`rounded-[1.5rem] border p-3 transition-all ${
                      isActive
                        ? 'border-[#af5d32]/35 bg-[#fcfaf6] shadow-[0_16px_36px_rgba(175,93,50,0.12)]'
                        : 'border-[#1a3a4a]/8 bg-white hover:border-[#af5d32]/25'
                    }`}
                    onMouseEnter={() => setActiveCityKey(city.key)}
                  >
                    <div className="flex gap-3">
                      <img
                        src={`https://picsum.photos/seed/${city.imageSeed}/240/240`}
                        alt={`${city.name} travel preview`}
                        className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-base font-semibold text-[#1a3a4a]">{city.name}</h3>
                              {city.popular ? (
                                <span className="rounded-full bg-[#af5d32]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#af5d32]">
                                  Popular
                                </span>
                              ) : null}
                            </div>
                            <p className="mt-0.5 text-sm font-medium text-[#af5d32]">{city.nameZh}</p>
                          </div>
                          <Link
                            href={city.href}
                            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#af5d32] transition-colors hover:text-[#8f4a28] min-h-[44px] py-1 md:min-h-0 md:py-0"
                          >
                            Explore
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                        <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#1a3a4a]/72">
                          {city.hook}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-[11px] font-semibold text-[#1a3a4a]/80">
                            {city.duration}
                          </span>
                          <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-[11px] font-semibold text-[#1a3a4a]/80">
                            {city.price}
                          </span>
                          <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-[11px] font-semibold text-[#1a3a4a]/80">
                            {city.season}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className={`${mobileView === 'list' ? 'hidden lg:block' : 'block'} relative z-0 lg:h-[640px]`}>
            <ExploreChinaMap activeCityKey={activeCityKey} onActiveCityChange={setActiveCityKey} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileView((current) => (current === 'list' ? 'map' : 'list'))}
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#1a3a4a] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(26,58,74,0.22)]"
          aria-label={mobileView === 'list' ? 'Show map view' : 'Show list view'}
        >
          {mobileView === 'list' ? <MapIcon size={16} /> : <List size={16} />}
          {mobileView === 'list' ? 'Map' : 'List'}
        </button>
      </div>
    </section>
  )
}
