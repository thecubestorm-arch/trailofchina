'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Polygon, Tooltip, useMap, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { MapPin, List, ArrowRight, Lightbulb, ShieldCheck, X } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import FooterCTA from '@/components/FooterCTA'

// ── Data ─────────────────────────────────────────────────────────
const cities = [
  { key: 'shanghai', name: 'Shanghai', nameZh: '上海', lat: 31.23, lng: 121.47, bestFor: 'Modern & Nightlife', hook: "Colonial elegance meets tomorrow's skyline", thingsToDo: 6, whereToEat: 5, href: '/destinations/shanghai', featured: true, duration: '3-4 days', priceLevel: '$$', bestSeason: 'Mar-May, Sep-Nov',
    images: ['shanghai-bund', 'shanghai-tower', 'shanghai-yu-garden', 'shanghai-nanjing-road', 'shanghai-night'],
  },
  { key: 'beijing', name: 'Beijing', nameZh: '北京', lat: 39.90, lng: 116.41, bestFor: 'History & Culture', hook: 'The capital, the Great Wall, the hutongs', thingsToDo: 7, whereToEat: 6, href: '/destinations/beijing', featured: false, duration: '3-5 days', priceLevel: '$$', bestSeason: 'Mar-May, Sep-Nov',
    images: ['beijing-great-wall', 'beijing-forbidden-city', 'beijing-temple-of-heaven', 'beijing-hutong', 'beijing-duck'],
  },
  { key: 'xian', name: "Xi'an", nameZh: '西安', lat: 34.26, lng: 108.94, bestFor: 'Ancient Wonders', hook: '3,000 years of Chinese history', thingsToDo: 5, whereToEat: 4, href: '/destinations/xian', featured: false, duration: '2-3 days', priceLevel: '$', bestSeason: 'Mar-Jun, Sep-Nov',
    images: ['xian-warriors', 'xian-wall', 'xian-muslim-quarter', 'xian-pagoda', 'xian-noodles'],
  },
  { key: 'chengdu', name: 'Chengdu', nameZh: '成都', lat: 30.57, lng: 104.07, bestFor: 'Food & Pandas', hook: 'Pandas, hotpot, and the slow life', thingsToDo: 6, whereToEat: 4, href: '/destinations/chengdu', featured: false, duration: '2-3 days', priceLevel: '$', bestSeason: 'Mar-Jun, Sep-Nov',
    images: ['chengdu-pandas', 'chengdu-hotpot', 'chengdu-alleys', 'chengdu-tea', 'chengdu-night'],
  },
  { key: 'chongqing', name: 'Chongqing', nameZh: '重庆', lat: 29.56, lng: 106.55, bestFor: 'Urban Adventure', hook: "China's cyberpunk megacity", thingsToDo: 6, whereToEat: 3, href: '/destinations/chongqing', featured: false, duration: '2-3 days', priceLevel: '$', bestSeason: 'Mar-May, Oct-Nov',
    images: ['chongqing-hongya', 'chongqing-river', 'chongqing-bridge', 'chongqing-streets', 'chongqing-night'],
  },
]

const comingSoon = [
  { key: 'hangzhou', name: 'Hangzhou', nameZh: '杭州', lat: 30.27, lng: 120.15 },
  { key: 'suzhou', name: 'Suzhou', nameZh: '苏州', lat: 31.30, lng: 120.59 },
  { key: 'guilin', name: 'Guilin', nameZh: '桂林', lat: 25.27, lng: 110.29 },
  { key: 'guangzhou', name: 'Guangzhou', nameZh: '广州', lat: 23.13, lng: 113.26 },
  { key: 'nanjing', name: 'Nanjing', nameZh: '南京', lat: 32.06, lng: 118.80 },
  { key: 'lhasa', name: 'Lhasa', nameZh: '拉萨', lat: 29.65, lng: 91.10 },
  { key: 'kunming', name: 'Kunming', nameZh: '昆明', lat: 25.04, lng: 102.72 },
]

// ── China Boundary ─────────────────────────────────────────────────
const chinaBoundary: [number, number][] = [
  [53.55, 123.27], [53.33, 124.71], [52.29, 125.79], [50.85, 127.50], [49.59, 128.90],
  [48.85, 130.68], [47.25, 131.98], [45.90, 133.62], [45.00, 135.00], [43.60, 134.50],
  [42.00, 133.00], [40.00, 131.00], [39.00, 128.00], [37.50, 126.00], [36.00, 124.00],
  [35.00, 122.00], [33.00, 121.00], [31.50, 122.50], [30.50, 123.00], [29.00, 122.00],
  [28.00, 121.00], [26.50, 120.00], [25.00, 119.50], [24.00, 118.00], [23.00, 117.00],
  [22.50, 115.50], [21.80, 114.00], [21.50, 112.50], [21.80, 111.00], [22.20, 109.50],
  [22.00, 108.00], [21.50, 106.50], [21.80, 105.00], [22.50, 103.50], [23.00, 102.00],
  [24.00, 101.00], [25.00, 100.00], [26.00, 99.00], [27.00, 98.50], [28.00, 97.50],
  [29.00, 97.00], [30.00, 96.50], [31.00, 96.00], [32.00, 95.50], [33.00, 95.00],
  [34.00, 94.50], [35.00, 94.00], [36.00, 93.50], [37.00, 93.00], [38.00, 92.50],
  [39.00, 92.00], [40.00, 91.50], [41.00, 91.00], [42.00, 90.50], [43.00, 90.00],
  [44.00, 89.50], [45.00, 89.00], [46.00, 88.50], [47.00, 88.00], [48.00, 87.50],
  [49.00, 87.00], [50.00, 87.50], [51.00, 88.00], [52.00, 89.00], [53.00, 90.00],
  [53.55, 123.27],
]

// ── Map Icons ────────────────────────────────────────────────────
const cityMarkerIcon = (city: typeof cities[0], isHovered: boolean) => {
  const dotSize = isHovered ? 12 : 8
  const html = `
    <div style="display:flex;align-items:center;gap:5px;cursor:pointer;white-space:nowrap;transform:translateY(-50%);">
      <div style="width:${dotSize}px;height:${dotSize}px;background:#af5d32;border:2px solid white;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.25);transform:scale(${isHovered ? 1.4 : 1});transition:transform 0.2s ease;"></div>
      <div style="background:white;padding:3px 8px;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,0.12);font-size:12px;font-weight:600;color:#1a3a4a;font-family:system-ui,-apple-system,sans-serif;border:1.5px solid ${isHovered ? '#af5d32' : 'transparent'};transition:border-color 0.2s ease;">${city.name}</div>
    </div>
  `
  return L.divIcon({
    className: '',
    html,
    iconSize: [140, 28],
    iconAnchor: [isHovered ? 8 : 6, isHovered ? 8 : 6],
  })
}

const comingSoonMarkerIcon = () => L.divIcon({
  className: '',
  html: `<div style="width:6px;height:6px;background:#94a3b8;border:1.5px solid white;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
})

// ── Map Event Handler ────────────────────────────────────────────
function MapEventHandler() {
  const map = useMap()
  useEffect(() => {
    map.setMaxBounds([[15, 70], [55, 140]])
    map.setMinZoom(4)
    map.setMaxZoom(8)
  }, [map])
  return null
}

// ── Map Popup ────────────────────────────────────────────────────
function MapPopup({
  city,
  onEnter,
  onLeave,
  onClose,
}: {
  city: (typeof cities)[0] | null
  onEnter: () => void
  onLeave: () => void
  onClose: () => void
}) {
  const map = useMap()
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  const updatePos = useCallback(() => {
    if (!city) {
      setPos(null)
      return
    }
    const p = map.latLngToContainerPoint([city.lat, city.lng])
    setPos({ x: p.x, y: p.y })
  }, [city, map])

  useEffect(() => {
    updatePos()
  }, [updatePos])

  useMapEvent('move', updatePos)
  useMapEvent('zoom', updatePos)

  if (!city || !pos) return null

  return (
    <div
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -100%) translateY(-14px)',
        zIndex: 2000,
        pointerEvents: 'auto',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative">
        {/* Close button (mobile only) */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClose()
          }}
          className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-[#ebe4d8] md:hidden cursor-pointer"
          aria-label="Close popup"
        >
          <X size={12} className="text-[#64748b]" />
        </button>
        <Link href={city.href} className="block no-underline">
          <div className="bg-white rounded-xl shadow-lg border border-[#ebe4d8] min-w-[280px] max-w-[320px] overflow-hidden">
            {/* Photo gallery */}
            <div
              className="flex gap-1 overflow-x-auto px-3 pt-3 pb-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {city.images.map((img, i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${img}/280/180`}
                  alt={`${city.name} ${i + 1}`}
                  className="h-16 w-auto rounded-md object-cover flex-shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Content */}
            <div className="px-3 pb-3 pt-1">
              <h4 className="text-sm font-bold text-[#1a3a4a]">
                {city.name} · <span className="text-[#af5d32]">{city.nameZh}</span>
              </h4>
              <p className="text-xs text-[#64748b] mt-0.5 line-clamp-2">{city.hook}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-[10px] font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-0.5 rounded-full border border-[#ebe4d8]">
                  ⏱ {city.duration}
                </span>
                <span className="text-[10px] font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-0.5 rounded-full border border-[#ebe4d8]">
                  {city.priceLevel}
                </span>
                <span className="text-[10px] font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-0.5 rounded-full border border-[#ebe4d8]">
                  🌤 {city.bestSeason}
                </span>
              </div>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#af5d32]">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white drop-shadow-sm" />
          </div>
        </Link>
      </div>
    </div>
  )
}

// ── Map Click Handler ────────────────────────────────────────────
function MapClickHandler({ onClick }: { onClick: () => void }) {
  useMapEvent('click', onClick)
  return null
}

// ── Map Layers ───────────────────────────────────────────────────
function MapLayers({
  hoveredCity,
  activePopupCity,
  onMarkerEnter,
  onMarkerLeave,
  onMarkerClick,
  onPopupEnter,
  onPopupLeave,
  onPopupClose,
  onMapClick,
}: {
  hoveredCity: string | null
  activePopupCity: string | null
  onMarkerEnter: (key: string) => void
  onMarkerLeave: () => void
  onMarkerClick: (key: string) => void
  onPopupEnter: () => void
  onPopupLeave: () => void
  onPopupClose: () => void
  onMapClick: () => void
}) {
  const activeKey = hoveredCity || activePopupCity
  const activeCity = cities.find((c) => c.key === activeKey) || null

  return (
    <>
      <MapClickHandler onClick={onMapClick} />
      <Polygon
        positions={chinaBoundary}
        pathOptions={{
          fillColor: '#1a3a4a',
          fillOpacity: 0.03,
          color: '#1a3a4a',
          weight: 1,
          dashArray: '4 4',
          opacity: 0.3,
        }}
      />
      {cities.map((city) => (
        <Marker
          key={city.key}
          position={[city.lat, city.lng]}
          icon={cityMarkerIcon(city, hoveredCity === city.key)}
          eventHandlers={{
            mouseover: () => onMarkerEnter(city.key),
            mouseout: onMarkerLeave,
            click: (e) => {
              if (e.originalEvent) {
                ;(e.originalEvent as Event).stopPropagation()
              }
              onMarkerClick(city.key)
            },
          }}
        />
      ))}
      {comingSoon.map((city) => (
        <Marker
          key={city.key}
          position={[city.lat, city.lng]}
          icon={comingSoonMarkerIcon()}
          eventHandlers={{
            mouseover: () => onMarkerEnter(city.key),
            mouseout: onMarkerLeave,
          }}
        >
          <Tooltip
            direction="top"
            offset={[0, -8]}
            className="!bg-white !text-[#1a3a4a] !border-[#ebe4d8] !rounded-lg !shadow-md !px-2.5 !py-1.5"
          >
            <span className="text-xs font-semibold whitespace-nowrap">
              {city.name} · {city.nameZh} — Coming Soon
            </span>
          </Tooltip>
        </Marker>
      ))}
      <MapPopup
        city={activeCity}
        onEnter={onPopupEnter}
        onLeave={onPopupLeave}
        onClose={onPopupClose}
      />
    </>
  )
}

// ── Main Component ───────────────────────────────────────────────
export default function MapInnerV6() {
  const [mounted, setMounted] = useState(false)
  const [viewMode, setViewMode] = useState<'list' | 'split'>('list')
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [activePopupCity, setActivePopupCity] = useState<string | null>(null)
  const [mobileMapOpen, setMobileMapOpen] = useState(false)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCityMouseEnter = useCallback((key: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setHoveredCity(key)
  }, [])

  const handleCityMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCity(null)
    }, 300)
  }, [])

  const handleMarkerEnter = useCallback((key: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setHoveredCity(key)
  }, [])

  const handleMarkerLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCity(null)
    }, 300)
  }, [])

  const handleMarkerClick = useCallback((key: string) => {
    setActivePopupCity((prev) => (prev === key ? null : key))
  }, [])

  const handlePopupEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
  }, [])

  const handlePopupLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCity(null)
      setActivePopupCity(null)
    }, 300)
  }, [])

  const handlePopupClose = useCallback(() => {
    setHoveredCity(null)
    setActivePopupCity(null)
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
  }, [])

  const handleMapClick = useCallback(() => {
    setActivePopupCity(null)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-[#64748b]">Loading…</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-[#f5f1ea] to-white border-b border-[#ebe4d8]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] leading-tight">
                5 Cities That Will Change How You See China
              </h1>
              <p className="text-base md:text-lg text-[#64748b] mt-4 leading-relaxed">
                From ancient capitals to futuristic skylines, these are the destinations that make China unforgettable. Hand-picked, thoroughly researched, and ready to explore.
              </p>
              <p className="text-sm text-[#64748b] mt-2">
                {cities.length} destinations · {comingSoon.length} coming soon
              </p>
            </div>
            <div className="flex rounded-lg border border-[#ebe4d8] overflow-hidden bg-white flex-shrink-0">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#1a3a4a] text-white'
                    : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'
                }`}
              >
                <List size={14} /> List
              </button>
              <button
                onClick={() => setViewMode('split')}
                className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'split'
                    ? 'bg-[#1a3a4a] text-white'
                    : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'
                }`}
              >
                <MapPin size={14} /> Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIST VIEW (cards + coming soon + footer) ─────────── */}
      <div className={`max-w-6xl mx-auto px-4 py-8 ${viewMode === 'split' ? 'md:hidden' : ''}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.key}
              href={city.href}
              className="group rounded-xl overflow-hidden border border-[#ebe4d8] bg-white hover:shadow-lg transition-all duration-300 relative"
              onMouseEnter={() => handleCityMouseEnter(city.key)}
              onMouseLeave={handleCityMouseLeave}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${city.key}-list/600/400`}
                  alt={city.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCity === city.key ? 'scale-105' : ''
                  }`}
                />
                {/* Featured badge */}
                {city.featured && (
                  <div className="absolute top-3 right-3 bg-[#af5d32] text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <span>★</span> Most Popular
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#1a3a4a]/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {city.bestFor}
                </div>
                {/* Photo count indicator */}
                <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                  {city.images.length} photos
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1a3a4a]">{city.name}</h3>
                  <span className="text-xs text-[#af5d32] font-semibold">{city.nameZh}</span>
                </div>
                <p className="text-sm text-[#64748b] mt-1">{city.hook}</p>
                {/* Quick info pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-1 rounded-full border border-[#ebe4d8]">
                    ⏱ {city.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-1 rounded-full border border-[#ebe4d8]">
                    {city.priceLevel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-1 rounded-full border border-[#ebe4d8]">
                    🌤 {city.bestSeason}
                  </span>
                </div>
                <p className="text-xs text-[#64748b] mt-3">
                  {city.thingsToDo} things to do · {city.whereToEat} restaurants
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 border-t border-[#ebe4d8] pt-8">
          <h2 className="text-lg font-bold text-[#1a3a4a] mb-4">Coming Soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {comingSoon.map((city) => (
              <div
                key={city.key}
                className="group relative rounded-lg overflow-hidden border border-[#ebe4d8] bg-gray-100 aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white text-sm font-bold">{city.name}</div>
                  <div className="text-white/80 text-xs">{city.nameZh}</div>
                </div>
                <div className="absolute top-2 left-2 bg-[#64748b] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12">
          <FooterCTA
            title="Plan Your China Trip"
            subtitle="Pre-planned itineraries or a custom trip planner — find what works for you."
            quickInfo={[
              {
                icon: MapPin,
                title: 'Pre-Planned Trips',
                description: '7, 10, or 14-day routes — ',
                link: { href: '/plan-your-trip/preplanned-trips', label: 'browse itineraries' },
              },
              {
                icon: Lightbulb,
                title: 'Custom Planner',
                description: 'Build your own — ',
                link: { href: '/plan-your-trip/travel-planner', label: 'start planning' },
              },
              {
                icon: ShieldCheck,
                title: 'China Basics',
                description: 'Apps, internet, payments — ',
                link: { href: '/china-basics', label: 'get prepared' },
              },
            ]}
            trustText="Free guides · Updated regularly · Written by China travelers"
          />
        </div>
      </div>

      {/* ── SPLIT VIEW (Desktop only) ────────────────────────── */}
      {viewMode === 'split' && (
        <div className="hidden md:flex max-w-6xl mx-auto px-4 py-6 gap-4" style={{ height: 'calc(100vh - 200px)' }}>
          {/* Left: City list */}
          <div className="w-[380px] flex-shrink-0 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
            <div className="space-y-3">
              {cities.map((city) => (
                <Link
                  key={city.key}
                  href={city.href}
                  className={`group flex items-start gap-3 rounded-xl p-3 border transition-all duration-200 ${
                    hoveredCity === city.key
                      ? 'border-[#af5d32] bg-[#fdf8f3] shadow-md'
                      : 'border-[#ebe4d8] bg-white hover:border-[#af5d32]/40 hover:shadow-sm'
                  }`}
                  onMouseEnter={() => handleCityMouseEnter(city.key)}
                  onMouseLeave={handleCityMouseLeave}
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-[60px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={`https://picsum.photos/seed/${city.key}-thumb/160/120`}
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-[#1a3a4a]">{city.name}</h3>
                      <span className="text-xs text-[#af5d32] font-medium">{city.nameZh}</span>
                      <span className="text-[10px] text-[#64748b] bg-[#f5f1ea] px-1.5 py-0.5 rounded-full truncate max-w-[90px]">
                        {city.bestFor}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748b] mt-1">
                      {city.thingsToDo} things to do · {city.whereToEat} restaurants
                    </p>
                    <p className="text-xs text-[#64748b] mt-0.5 line-clamp-1">{city.hook}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-[#af5d32] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-2"
                  />
                </Link>
              ))}
            </div>

            {/* Coming Soon in split view */}
            <div className="mt-6 border-t border-[#ebe4d8] pt-4">
              <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">
                Coming Soon
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {comingSoon.map((city) => (
                  <span
                    key={city.key}
                    className="px-2.5 py-1 rounded-full bg-[#f5f1ea] text-xs text-[#64748b]"
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex-1 relative rounded-xl overflow-hidden border border-[#ebe4d8]">
            <MapContainer
              center={[34, 108]}
              zoom={4}
              minZoom={4}
              maxZoom={8}
              maxBounds={[[15, 70], [55, 140]]}
              maxBoundsViscosity={1.0}
              scrollWheelZoom
              touchZoom
              zoomControl={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution="&copy; OSM &copy; CARTO"
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <MapEventHandler />
              <MapLayers
                hoveredCity={hoveredCity}
                activePopupCity={activePopupCity}
                onMarkerEnter={handleMarkerEnter}
                onMarkerLeave={handleMarkerLeave}
                onMarkerClick={handleMarkerClick}
                onPopupEnter={handlePopupEnter}
                onPopupLeave={handlePopupLeave}
                onPopupClose={handlePopupClose}
                onMapClick={handleMapClick}
              />
            </MapContainer>
          </div>
        </div>
      )}

      {/* ── Mobile Map Overlay ───────────────────────────────── */}
      {mobileMapOpen && (
        <div className="fixed inset-0 z-[80] md:hidden bg-white">
          <MapContainer
            center={[34, 108]}
            zoom={4}
            minZoom={4}
            maxZoom={8}
            maxBounds={[[15, 70], [55, 140]]}
            maxBoundsViscosity={1.0}
            scrollWheelZoom
            touchZoom
            zoomControl={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution="&copy; OSM &copy; CARTO"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <MapEventHandler />
            <MapLayers
              hoveredCity={hoveredCity}
              activePopupCity={activePopupCity}
              onMarkerEnter={handleMarkerEnter}
              onMarkerLeave={handleMarkerLeave}
              onMarkerClick={handleMarkerClick}
              onPopupEnter={handlePopupEnter}
              onPopupLeave={handlePopupLeave}
              onPopupClose={handlePopupClose}
              onMapClick={handleMapClick}
            />
          </MapContainer>
        </div>
      )}

      {/* ── Mobile Floating Toggle ───────────────────────────── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] md:hidden">
        <button
          onClick={() => {
            setActivePopupCity(null)
            setMobileMapOpen((prev) => !prev)
          }}
          className="bg-[#1a3a4a] text-white px-5 py-3 rounded-full shadow-xl text-sm font-semibold flex items-center gap-2"
        >
          {mobileMapOpen ? (
            <>
              <List size={16} /> Show List
            </>
          ) : (
            <>
              <MapPin size={16} /> Show Map
            </>
          )}
        </button>
      </div>
    </div>
  )
}
