'use client'

import { useMemo } from 'react'
import { MapContainer, Marker, Polygon, TileLayer, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
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

const chinaFillStyle = {
  fillColor: '#f5f1ea',
  fillOpacity: 0.75,
  color: '#af5d32',
  weight: 2,
  opacity: 0.95,
}

const surroundingAreaStyle = {
  fillColor: '#94a3b8',
  fillOpacity: 0.12,
  color: '#94a3b8',
  weight: 0.6,
  opacity: 0.35,
}

function createCityMarker(name: string, active: boolean) {
  const dotSize = active ? 14 : 10
  const labelBorder = active ? '#af5d32' : 'rgba(26,58,74,0.08)'

  return L.divIcon({
    className: '',
    html: `
      <div style="display:flex;align-items:center;gap:6px;white-space:nowrap;transform:translateY(-50%);">
        <div style="width:${dotSize}px;height:${dotSize}px;border-radius:999px;background:#af5d32;border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.22);"></div>
        <div style="padding:4px 9px;border-radius:999px;background:rgba(255,255,255,0.96);border:1px solid ${labelBorder};box-shadow:0 2px 8px rgba(26,58,74,0.10);font-size:12px;font-weight:600;color:#1a3a4a;">${name}</div>
      </div>
    `,
    iconSize: [150, 32],
    iconAnchor: [8, 8],
  })
}

export default function ExploreChinaMap({
  activeCityKey,
  onActiveCityChange,
}: ExploreChinaMapProps) {
  const markerIcons = useMemo(
    () =>
      Object.fromEntries(
        exploreCities.map((city) => [city.key, createCityMarker(city.name, city.key === activeCityKey)])
      ),
    [activeCityKey]
  )

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
            eventHandlers={{
              mouseover: () => onActiveCityChange(city.key),
              click: () => onActiveCityChange(city.key),
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
          </Marker>
        ))}
      </MapContainer>

      <div className="pointer-events-none absolute right-5 top-5 z-[500] flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a4a]/10 bg-white/95 shadow-[0_10px_30px_rgba(26,58,74,0.10)]">
        <div className="flex flex-col items-center leading-none text-[#1a3a4a]">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">N</span>
          <span className="text-base leading-none">↑</span>
        </div>
      </div>
    </div>
  )
}
