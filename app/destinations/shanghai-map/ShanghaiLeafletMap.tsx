'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Polyline,
  useMap,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { X, List, Map as MapIcon } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// ── Types ────────────────────────────────────────────────────────
type POICategory = 'attraction' | 'food' | 'stay' | 'essential'

interface POI {
  name: string
  lat: number
  lng: number
  category: POICategory
  hook: string
  tag?: string
  href: string
  imageSeed: string
}

// ── POI Data ─────────────────────────────────────────────────────
const pois: POI[] = [
  // Must-See
  {
    name: 'The Bund',
    lat: 31.24,
    lng: 121.49,
    category: 'attraction',
    hook: "Shanghai's most iconic waterfront promenade",
    tag: 'Free',
    href: '/destinations/shanghai/what-to-do/bund',
    imageSeed: 'shanghai-bund',
  },
  {
    name: 'Yu Garden',
    lat: 31.227,
    lng: 121.492,
    category: 'attraction',
    hook: 'A 400-year-old classical garden',
    tag: '¥40',
    href: '/destinations/shanghai/what-to-do/yu-garden',
    imageSeed: 'shanghai-yugarden',
  },
  {
    name: 'French Concession',
    lat: 31.21,
    lng: 121.46,
    category: 'attraction',
    hook: 'Tree-lined avenues, Art Deco villas, and cafés',
    tag: 'Free',
    href: '/destinations/shanghai/what-to-do/french-concession',
    imageSeed: 'shanghai-frenchconcession',
  },
  {
    name: 'Shanghai Tower',
    lat: 31.2355,
    lng: 121.5015,
    category: 'attraction',
    hook: "World's second-tallest building with observation deck",
    tag: '¥180',
    href: '/destinations/shanghai/what-to-do/shanghai-tower',
    imageSeed: 'shanghai-tower',
  },
  {
    name: 'Tianzifang',
    lat: 31.203,
    lng: 121.468,
    category: 'attraction',
    hook: 'Winding alleyways with studios and galleries',
    tag: 'Free',
    href: '/destinations/shanghai/what-to-do',
    imageSeed: 'shanghai-tianzifang',
  },
  {
    name: 'Jade Buddha Temple',
    lat: 31.223,
    lng: 121.442,
    category: 'attraction',
    hook: 'Serene temple with white jade Buddhas',
    tag: '¥20',
    href: '/destinations/shanghai/what-to-do',
    imageSeed: 'shanghai-jadebuddha',
  },
  // Eats
  {
    name: 'Xiaolongbao',
    lat: 31.225,
    lng: 121.475,
    category: 'food',
    hook: "Shanghai's iconic soup dumplings",
    tag: '¥30',
    href: '/destinations/shanghai/where-to-eat/xiaolongbao',
    imageSeed: 'xiaolongbao',
  },
  {
    name: 'Shengjianbao',
    lat: 31.238,
    lng: 121.488,
    category: 'food',
    hook: 'Pan-fried buns with crispy bottom',
    tag: '¥15',
    href: '/destinations/shanghai/where-to-eat/shengjianbao',
    imageSeed: 'shengjianbao',
  },
  {
    name: 'Hairy Crab',
    lat: 31.215,
    lng: 121.49,
    category: 'food',
    hook: 'Autumn delicacy from Yangcheng Lake',
    tag: '¥200+',
    href: '/destinations/shanghai/where-to-eat/hairy-crab',
    imageSeed: 'hairy-crab',
  },
  {
    name: 'Scallion Oil Noodles',
    lat: 31.232,
    lng: 121.455,
    category: 'food',
    hook: 'Simple, fragrant, deeply comforting',
    tag: '¥25–40',
    href: '/destinations/shanghai/where-to-eat/scallion-oil-noodles',
    imageSeed: 'scallion-noodles',
  },
  // Stays
  {
    name: 'Bund Area',
    lat: 31.245,
    lng: 121.492,
    category: 'stay',
    hook: 'Iconic skyline · Historic architecture',
    href: '/destinations/shanghai/where-to-stay/bund-area',
    imageSeed: 'shanghai-bund-area',
  },
  {
    name: 'French Concession Stay',
    lat: 31.208,
    lng: 121.458,
    category: 'stay',
    hook: 'Cafés & boutiques · Tree-lined streets',
    href: '/destinations/shanghai/where-to-stay/french-concession',
    imageSeed: 'shanghai-french-concession-stay',
  },
  {
    name: "Jing'an",
    lat: 31.234,
    lng: 121.446,
    category: 'stay',
    hook: 'Local life · Metro hub',
    href: '/destinations/shanghai/where-to-stay/jingan',
    imageSeed: 'shanghai-jingan',
  },
  {
    name: 'Xintiandi',
    lat: 31.219,
    lng: 121.475,
    category: 'stay',
    hook: 'Modern luxury · Nightlife',
    href: '/destinations/shanghai/where-to-stay/xintiandi',
    imageSeed: 'shanghai-xintiandi',
  },
  // Need to Know
  {
    name: 'Pudong Airport',
    lat: 31.1443,
    lng: 121.8082,
    category: 'essential',
    hook: 'Main international airport — Maglev connects to city',
    href: '/china-basics/how-to-get-around',
    imageSeed: 'pudong-airport',
  },
  {
    name: 'Shanghai Metro',
    lat: 31.23,
    lng: 121.473,
    category: 'essential',
    hook: 'Excellent coverage — 19 lines, English signs',
    href: '/china-basics/how-to-get-around',
    imageSeed: 'shanghai-metro',
  },
]

const categoryConfig: Record<
  POICategory,
  { emoji: string; color: string; label: string }
> = {
  attraction: { emoji: '🏛️', color: '#af5d32', label: 'Must-See' },
  food: { emoji: '🍜', color: '#f97316', label: 'Eats' },
  stay: { emoji: '🏨', color: '#3b82f6', label: 'Stays' },
  essential: { emoji: 'ℹ️', color: '#1a3a4a', label: 'Need to Know' },
}

// ── Shanghai Boundary ─────────────────────────────────────────────
const shanghaiBoundary: [number, number][] = [
  [31.4, 121.2],
  [31.42, 121.35],
  [31.38, 121.5],
  [31.35, 121.6],
  [31.3, 121.65],
  [31.25, 121.7],
  [31.2, 121.75],
  [31.15, 121.7],
  [31.1, 121.6],
  [31.05, 121.5],
  [31.02, 121.35],
  [31.05, 121.2],
  [31.1, 121.1],
  [31.2, 121.05],
  [31.3, 121.08],
  [31.4, 121.2],
]

// ── Metro Data ───────────────────────────────────────────────────
interface MetroLine {
  name: string
  color: string
  stations: [number, number][]
  stationNames?: string[]
}

const metroLines: MetroLine[] = [
  {
    name: 'Line 2',
    color: '#a0c814',
    stations: [
      [31.1443, 121.8082], // Pudong Airport
      [31.2397, 121.4998], // Lujiazui
      [31.2329, 121.4747], // People's Square
      [31.2235, 121.4453], // Jing'an Temple
      [31.1979, 121.3356], // Hongqiao Airport
    ],
    stationNames: ['Pudong Airport', 'Lujiazui', "People's Square", "Jing'an Temple", 'Hongqiao Airport'],
  },
  {
    name: 'Line 1',
    color: '#e3002b',
    stations: [
      [31.2329, 121.4747], // People's Square
      [31.1956, 121.4367], // Xujiahui
    ],
    stationNames: ["People's Square", 'Xujiahui'],
  },
  {
    name: 'Line 10',
    color: '#c7a4d6',
    stations: [
      [31.227, 121.492], // Yuyuan Garden
      [31.219, 121.475], // Xintiandi
      [31.297, 121.503], // Fudan University
    ],
    stationNames: ['Yu Garden', 'Xintiandi', 'Fudan University'],
  },
]

// ── Icons ────────────────────────────────────────────────────────
const poiMarkerIcon = (category: POICategory) => {
  const cfg = categoryConfig[category]
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;width:32px;height:32px">
      <div style="position:absolute;inset:5px;background:${cfg.color};border:2px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;font-size:14px">${cfg.emoji}</div>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })
}

const stationIcon = L.divIcon({
  className: '',
  html: `<div style="width:10px;height:10px;background:#1a3a4a;border:2px solid white;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
})

const poiLabelIcon = (name: string) =>
  L.divIcon({
    className: '',
    html: `<div style="background:white;padding:2px 8px;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,0.15);font-size:11px;font-weight:600;color:#1a3a4a;white-space:nowrap;">${name}</div>`,
    iconSize: [80, 20],
    iconAnchor: [-12, 10],
  })

// ── Zoom Tracker ─────────────────────────────────────────────────
function ZoomTracker({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvents({
    zoomend: (e) => onZoom(e.target.getZoom()),
  })
  return null
}

// ── Map FlyTo ────────────────────────────────────────────────────
function FlyToMarker({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo([lat, lng], 15, { duration: 1 })
  }, [map, lat, lng])
  return null
}

// ── Metro Legend ─────────────────────────────────────────────────
function MetroLegend() {
  return (
    <div
      className="absolute bottom-3 right-3 z-[500] bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-[#ebe4d8]"
      style={{ fontSize: 11 }}
    >
      <div className="font-semibold text-[#1a3a4a] mb-1">Metro</div>
      {metroLines.map((line) => (
        <div key={line.name} className="flex items-center gap-1.5 mb-0.5">
          <span
            className="inline-block rounded-full"
            style={{
              width: 12,
              height: 3,
              backgroundColor: line.color,
            }}
          />
          <span className="text-[#64748b]">{line.name}</span>
        </div>
      ))}
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────
export default function ShanghaiLeafletMap() {
  const [mounted, setMounted] = useState(false)
  const [activeFilters, setActiveFilters] = useState<Set<POICategory>>(
    new Set(['attraction', 'food', 'stay', 'essential'])
  )
  const [mobileView, setMobileView] = useState<'list' | 'map'>('map')
  const [zoom, setZoom] = useState(13)
  const [flyTo, setFlyTo] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleFilter = useCallback((cat: POICategory) => {
    setActiveFilters((prev) => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }, [])

  const filteredPois = useMemo(
    () => pois.filter((p) => activeFilters.has(p.category)),
    [activeFilters]
  )

  const handlePoiClick = useCallback((poi: POI) => {
    setFlyTo({ lat: poi.lat, lng: poi.lng })
    if (window.innerWidth < 768) setMobileView('map')
  }, [])

  if (!mounted)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-[#64748b]">Loading…</div>
      </div>
    )

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#ebe4d8] sticky top-0 z-[70]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/destinations/shanghai"
              className="w-8 h-8 rounded-full bg-[#f5f1ea] flex items-center justify-center hover:bg-[#ebe4d8] transition-colors"
            >
              <X size={16} className="text-[#1a3a4a]" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-[#1a3a4a]">
                Shanghai Map
              </h1>
              <p className="text-xs text-[#64748b]">
                {filteredPois.length} points of interest
              </p>
            </div>
          </div>
          {/* Mobile toggle */}
          <div className="flex md:hidden bg-[#f5f1ea] rounded-full p-0.5">
            <button
              onClick={() => setMobileView('list')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                mobileView === 'list'
                  ? 'bg-white text-[#1a3a4a] shadow-sm'
                  : 'text-[#64748b]'
              }`}
            >
              <List size={14} className="inline mr-1" />
              List
            </button>
            <button
              onClick={() => setMobileView('map')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                mobileView === 'map'
                  ? 'bg-white text-[#1a3a4a] shadow-sm'
                  : 'text-[#64748b]'
              }`}
            >
              <MapIcon size={14} className="inline mr-1" />
              Map
            </button>
          </div>
        </div>
        {/* Filter chips */}
        <div className="max-w-6xl mx-auto px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {(Object.keys(categoryConfig) as POICategory[]).map((cat) => {
            const cfg = categoryConfig[cat]
            const isActive = activeFilters.has(cat)
            return (
              <button
                key={cat}
                onClick={() => toggleFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'bg-[#f5f1ea] text-[#64748b] border border-[#ebe4d8]'
                }`}
                style={isActive ? { backgroundColor: cfg.color } : {}}
              >
                {cfg.emoji} {cfg.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Split view container */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left: POI List */}
        <div
          className={`${
            mobileView === 'list' ? 'flex' : 'hidden md:flex'
          } md:w-[40%] w-full flex-col border-r border-[#ebe4d8] overflow-hidden`}
        >
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredPois.length === 0 && (
              <p className="text-sm text-[#64748b] text-center py-8">
                No points of interest match your filters.
              </p>
            )}
            {filteredPois.map((poi, i) => {
              const cfg = categoryConfig[poi.category]
              return (
                <button
                  key={`${poi.category}-${i}`}
                  onClick={() => handlePoiClick(poi)}
                  className="w-full text-left bg-[#faf8f4] hover:bg-[#f5f1ea] rounded-xl p-3 transition-colors border border-[#ebe4d8] group"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                      style={{ backgroundColor: cfg.color + '15' }}
                    >
                      {cfg.emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-semibold px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: cfg.color + '15',
                            color: cfg.color,
                          }}
                        >
                          {cfg.label}
                        </span>
                        {poi.tag && (
                          <span className="text-[10px] text-[#af5d32] font-semibold">
                            {poi.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-[#1a3a4a] mt-0.5 group-hover:text-[#af5d32] transition-colors">
                        {poi.name}
                      </h3>
                      <p className="text-xs text-[#64748b] mt-0.5 line-clamp-2">
                        {poi.hook}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Map */}
        <div
          className={`${
            mobileView === 'map' ? 'flex' : 'hidden md:flex'
          } md:w-[60%] w-full relative`}
          style={{ minHeight: 400 }}
        >
          <MapContainer
            center={[31.23, 121.47]}
            zoom={13}
            minZoom={11}
            maxZoom={18}
            scrollWheelZoom
            style={{ height: '100%', width: '100%', minHeight: 500 }}
          >
            <ZoomTracker onZoom={setZoom} />
            {flyTo && <FlyToMarker lat={flyTo.lat} lng={flyTo.lng} />}

            <TileLayer
              attribution="&copy; OSM &copy; CARTO"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {/* Shanghai boundary */}
            <Polygon
              positions={shanghaiBoundary}
              pathOptions={{
                fillColor: '#1a3a4a',
                fillOpacity: 0.05,
                color: '#1a3a4a',
                weight: 1.5,
                dashArray: '6, 6',
                opacity: 0.4,
              }}
            />

            {/* Metro lines */}
            {metroLines.map((line) => (
              <Polyline
                key={line.name}
                positions={line.stations}
                pathOptions={{
                  color: line.color,
                  weight: 4,
                  opacity: 0.85,
                }}
              />
            ))}

            {/* Metro station markers */}
            {metroLines.map((line) =>
              line.stations.map((pos, idx) => (
                <Marker key={`${line.name}-st-${idx}`} position={pos} icon={stationIcon}>
                  <Popup>
                    <div className="text-xs">
                      <div
                        className="font-bold mb-0.5"
                        style={{ color: line.color }}
                      >
                        {line.name}
                      </div>
                      <div className="text-[#1a3a4a]">
                        {line.stationNames?.[idx]}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))
            )}

            {/* POI labels (zoom >= 13) */}
            {zoom >= 13 &&
              filteredPois.map((poi, i) => (
                <Marker
                  key={`label-${poi.category}-${i}`}
                  position={[poi.lat, poi.lng]}
                  icon={poiLabelIcon(poi.name)}
                  zIndexOffset={-100}
                />
              ))}

            {/* POI markers with popups */}
            {filteredPois.map((poi, i) => (
              <Marker
                key={`${poi.category}-${i}`}
                position={[poi.lat, poi.lng]}
                icon={poiMarkerIcon(poi.category)}
              >
                <Popup>
                  <Link
                    href={poi.href}
                    className="block no-underline"
                    style={{ minWidth: 200 }}
                  >
                    <img
                      src={`https://picsum.photos/seed/${poi.imageSeed}/400/200`}
                      alt={poi.name}
                      style={{
                        width: '100%',
                        height: 100,
                        objectFit: 'cover',
                        borderRadius: 8,
                        marginBottom: 8,
                      }}
                    />
                    <div className="flex items-center gap-1.5">
                      <span style={{ fontSize: 16 }}>
                        {categoryConfig[poi.category].emoji}
                      </span>
                      <strong
                        style={{ color: '#1a3a4a', fontSize: 14 }}
                      >
                        {poi.name}
                      </strong>
                    </div>
                    <p
                      style={{
                        fontSize: 12,
                        color: '#64748b',
                        margin: '4px 0',
                      }}
                    >
                      {poi.hook}
                    </p>
                    {poi.tag && (
                      <span
                        style={{
                          fontSize: 11,
                          color: '#af5d32',
                          fontWeight: 600,
                        }}
                      >
                        {poi.tag}
                      </span>
                    )}
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#af5d32',
                      }}
                    >
                      Explore →
                    </div>
                  </Link>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          <MetroLegend />
        </div>
      </div>
    </div>
  )
}
