'use client'

import { useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { DivIcon, Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Minus, Plus } from 'lucide-react'
import {
  chinaBoundary,
  exploreCities,
  hainanBoundary,
  surroundingArea,
  taiwanBoundary,
} from '@/app/v7/exploreChinaData'

type ExploreChinaMapProps = {
  activeCityKey: string
  onActiveCityChange: (key: string) => void
}

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false })
const Polygon = dynamic(() => import('react-leaflet').then((mod) => mod.Polygon), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false })
const Tooltip = dynamic(() => import('react-leaflet').then((mod) => mod.Tooltip), { ssr: false })

const chinaFillStyle = {
  fillColor: '#f5f1ea',
  fillOpacity: 0.75,
  color: '#af5d32',
  weight: 1.5,
  opacity: 0.9,
}

const surroundingAreaStyle = {
  fillColor: '#94a3b8',
  fillOpacity: 0.12,
  color: '#94a3b8',
  weight: 0.6,
  opacity: 0.35,
}

function createCityMarker(name: string, active: boolean): DivIcon {
  const dotSize = active ? 16 : 12
  const dotShadow = active ? '0 6px 16px rgba(175,93,50,0.32)' : '0 4px 10px rgba(26,58,74,0.18)'
  const labelBorder = active ? 'rgba(175,93,50,0.28)' : 'rgba(26,58,74,0.08)'
  const labelBackground = active ? 'rgba(245,241,234,0.98)' : 'rgba(255,255,255,0.96)'

  return L.divIcon({
    className: '',
    html: `
      <div style="display:flex;align-items:center;gap:8px;white-space:nowrap;transform:translateY(-50%);">
        <div style="width:${dotSize}px;height:${dotSize}px;border-radius:999px;background:#af5d32;border:2px solid #f5f1ea;box-shadow:${dotShadow};"></div>
        <div style="padding:5px 10px;border-radius:999px;background:${labelBackground};border:1px solid ${labelBorder};box-shadow:0 2px 8px rgba(26,58,74,0.10);font-size:12px;font-weight:700;color:#1a3a4a;">${name}</div>
      </div>
    `,
    iconSize: [156, 36],
    iconAnchor: [10, 10],
    popupAnchor: [60, -10],
  })
}

export default function ExploreChinaMap({
  activeCityKey,
  onActiveCityChange,
}: ExploreChinaMapProps) {
  const [selectedCityKey, setSelectedCityKey] = useState<string | null>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markerRefs = useRef<Record<string, LeafletMarker | null>>({})

  const markerIcons = useMemo<Record<string, DivIcon>>(
    () =>
      Object.fromEntries(
        exploreCities.map((city) => [city.key, createCityMarker(city.name, city.key === activeCityKey)])
      ),
    [activeCityKey]
  )

  const handleMarkerClick = (cityKey: string) => {
    const city = exploreCities.find((entry) => entry.key === cityKey)
    if (!city) return

    onActiveCityChange(city.key)
    setSelectedCityKey(city.key)
    mapRef.current?.flyTo([city.lat, city.lng], 8, {
      animate: true,
      duration: 1.1,
    })
    window.setTimeout(() => {
      markerRefs.current[city.key]?.openPopup()
    }, 180)
  }

  const adjustZoom = (delta: 1 | -1) => {
    const map = mapRef.current
    if (!map) return

    if (delta > 0) {
      map.zoomIn()
      return
    }

    map.zoomOut()
  }

  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-[1.75rem] border border-[#1a3a4a]/10 bg-white">
      <MapContainer
        center={[34, 108]}
        zoom={4}
        minZoom={4}
        maxZoom={8}
        maxBounds={[[15, 70], [55, 140]]}
        maxBoundsViscosity={1}
        scrollWheelZoom
        touchZoom
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
        ref={(instance: LeafletMap | null) => {
          mapRef.current = instance
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Polygon positions={surroundingArea} pathOptions={surroundingAreaStyle} interactive={false} />
        <Polygon positions={chinaBoundary} pathOptions={chinaFillStyle} interactive={false} />
        <Polygon positions={taiwanBoundary} pathOptions={chinaFillStyle} interactive={false} />
        <Polygon positions={hainanBoundary} pathOptions={chinaFillStyle} interactive={false} />
        {exploreCities.map((city) => (
          <Marker
            key={city.key}
            position={[city.lat, city.lng]}
            icon={markerIcons[city.key]}
            ref={(instance: LeafletMarker | null) => {
              markerRefs.current[city.key] = instance
            }}
            eventHandlers={{
              mouseover: () => onActiveCityChange(city.key),
              click: () => handleMarkerClick(city.key),
              popupclose: () => {
                setSelectedCityKey((current) => (current === city.key ? null : current))
              },
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -12]}
              opacity={1}
              className="!rounded-xl !border !border-[#1a3a4a]/10 !bg-white !px-3 !py-2 !text-[#1a3a4a] !shadow-lg"
            >
              <div className="text-xs font-semibold">
                {city.name} · {city.nameZh}
              </div>
              <div className="mt-1 text-[11px] text-[#1a3a4a]/70">{city.hook}</div>
            </Tooltip>
            <Popup closeButton={false} offset={[0, -10]} className="explore-city-popup">
              <Link
                href={city.href}
                className="block w-[220px] cursor-pointer overflow-hidden rounded-[1.1rem] bg-[#f5f1ea] text-[#1a3a4a] no-underline transition-transform hover:scale-[1.01]"
              >
                <img
                  src={`https://picsum.photos/seed/${city.imageSeed}/480/280`}
                  alt={`${city.name} city preview`}
                  className="h-28 w-full object-cover"
                />
                <div className="p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a3a4a]">{city.name}</h3>
                      <p className="mt-0.5 text-xs font-medium text-[#af5d32]">{city.nameZh}</p>
                    </div>
                    {city.popular ? (
                      <span className="rounded-full bg-[#af5d32] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                        Popular
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#1a3a4a]/75">{city.hook}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#1a3a4a]/78">
                      {city.duration}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#1a3a4a]/78">
                      {city.price}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#1a3a4a]/78">
                      {city.season}
                    </span>
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="pointer-events-none absolute right-5 top-5 z-[500] flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a4a]/10 bg-white/95 shadow-[0_10px_30px_rgba(26,58,74,0.10)]">
        <div className="flex flex-col items-center leading-none text-[#1a3a4a]">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">N</span>
          <span className="text-base leading-none">↑</span>
        </div>
      </div>

      <div className="absolute right-5 top-20 z-[500] flex flex-col gap-2">
        <button
          type="button"
          onClick={() => adjustZoom(1)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#af5d32] text-white shadow-[0_14px_24px_rgba(175,93,50,0.26)] transition-colors hover:bg-[#8f4a28]"
          aria-label="Zoom in"
        >
          <Plus size={18} />
        </button>
        <button
          type="button"
          onClick={() => adjustZoom(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#af5d32] text-white shadow-[0_14px_24px_rgba(175,93,50,0.26)] transition-colors hover:bg-[#8f4a28]"
          aria-label="Zoom out"
        >
          <Minus size={18} />
        </button>
      </div>
    </div>
  )
}
