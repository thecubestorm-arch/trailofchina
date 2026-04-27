'use client'

import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { MapPin, List, ArrowRight, Lightbulb, ShieldCheck } from 'lucide-react'
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

// ── Map Icons ────────────────────────────────────────────────────
const cityMarker = (city: typeof cities[0], isHovered: boolean) => L.divIcon({
  className: '',
  html: `<div style="width:${isHovered ? 20 : 14}px;height:${isHovered ? 20 : 14}px;background:#af5d32;border:${isHovered ? 4 : 3}px solid white;border-radius:50%;box-shadow:${isHovered ? '0 4px 12px rgba(175,93,50,0.4)' : '0 2px 6px rgba(0,0,0,0.3)'};transform:scale(${isHovered ? 1.3 : 1});transition:all 0.2s ease;"></div>`,
  iconSize: [isHovered ? 20 : 14, isHovered ? 20 : 14],
  iconAnchor: [isHovered ? 10 : 7, isHovered ? 10 : 7],
})

const comingSoonMarker = () => L.divIcon({
  className: '',
  html: `<div style="width:8px;height:8px;background:#94a3b8;border:2px solid white;border-radius:50%;"></div>`,
  iconSize: [8, 8],
  iconAnchor: [4, 4],
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

// ── Main Component ───────────────────────────────────────────────
export default function MapInnerV6() {
  const [mounted, setMounted] = useState(false)
  const [viewMode, setViewMode] = useState<'list' | 'split'>('list')
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [mobileMapOpen, setMobileMapOpen] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => { setMounted(true) }, [])

  const handleCityMouseEnter = (key: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setHoveredCity(key)
  }

  const handleCityMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredCity(null), 200)
  }

  if (!mounted) {
    return <div className="min-h-screen bg-white flex items-center justify-center"><div className="text-[#64748b]">Loading…</div></div>
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
              <button onClick={() => setViewMode('list')} className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors ${viewMode === 'list' ? 'bg-[#1a3a4a] text-white' : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'}`}>
                <List size={14} /> List
              </button>
              <button onClick={() => setViewMode('split')} className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors ${viewMode === 'split' ? 'bg-[#1a3a4a] text-white' : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'}`}>
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
              className="group rounded-xl overflow-hidden border border-[#ebe4d8] bg-white hover:shadow-lg transition-all relative"
              onMouseEnter={() => handleCityMouseEnter(city.key)}
              onMouseLeave={handleCityMouseLeave}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${city.key}-list/600/400`}
                  alt={city.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${hoveredCity === city.key ? 'scale-105' : ''}`}
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
                
                <p className="text-xs text-[#64748b] mt-3">{city.thingsToDo} things to do · {city.whereToEat} restaurants</p>
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
              <div key={city.key} className="group relative rounded-lg overflow-hidden border border-[#ebe4d8] bg-gray-100 aspect-square">
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
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
              { icon: MapPin, title: 'Pre-Planned Trips', description: '7, 10, or 14-day routes — ', link: { href: '/plan-your-trip/preplanned-trips', label: 'browse itineraries' } },
              { icon: Lightbulb, title: 'Custom Planner', description: 'Build your own — ', link: { href: '/plan-your-trip/travel-planner', label: 'start planning' } },
              { icon: ShieldCheck, title: 'China Basics', description: 'Apps, internet, payments — ', link: { href: '/china-basics', label: 'get prepared' } },
            ]}
            trustText="Free guides · Updated regularly · Written by China travelers"
          />
        </div>
      </div>

      {/* ── SPLIT VIEW (Desktop only) ────────────────────────── */}
      {viewMode === 'split' && (
        <div className="hidden md:flex max-w-6xl mx-auto px-4 py-6 gap-4 h-[calc(100vh-80px)]">
          {/* Left: City list */}
          <div className="w-[340px] flex-shrink-0 overflow-y-auto pr-2">
            <div className="space-y-3">
              {cities.map((city) => (
                <Link
                  key={city.key}
                  href={city.href}
                  className={`group flex items-start gap-3 rounded-xl p-3 border transition-all ${
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
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-[#1a3a4a]">{city.name}</h3>
                      <span className="text-xs text-[#af5d32] font-medium">{city.nameZh}</span>
                      <span className="text-[10px] text-[#64748b] bg-[#f5f1ea] px-1.5 py-0.5 rounded-full truncate max-w-[90px]">{city.bestFor}</span>
                    </div>
                    <p className="text-xs text-[#64748b] mt-1">{city.thingsToDo} things to do · {city.whereToEat} restaurants</p>
                    <p className="text-xs text-[#64748b] mt-0.5 line-clamp-1">{city.hook}</p>
                  </div>
                  <ArrowRight size={14} className="text-[#af5d32] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
                </Link>
              ))}
            </div>

            {/* Coming Soon in split view */}
            <div className="mt-6 border-t border-[#ebe4d8] pt-4">
              <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">Coming Soon</h3>
              <div className="flex flex-wrap gap-1.5">
                {comingSoon.map((city) => (
                  <span key={city.key} className="px-2.5 py-1 rounded-full bg-[#f5f1ea] text-xs text-[#64748b]">{city.name}</span>
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
                attribution='&copy; OSM &copy; CARTO'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <MapEventHandler />
              {cities.map((city) => (
                <Marker
                  key={`${city.key}-${hoveredCity === city.key ? 'h' : 'n'}`}
                  position={[city.lat, city.lng]}
                  icon={cityMarker(city, hoveredCity === city.key)}
                  eventHandlers={{
                    click: () => { window.location.href = city.href },
                  }}
                />
              ))}
              {comingSoon.map((city) => (
                <Marker
                  key={city.key}
                  position={[city.lat, city.lng]}
                  icon={comingSoonMarker()}
                />
              ))}
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
              attribution='&copy; OSM &copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <MapEventHandler />
            {cities.map((city) => (
              <Marker
                key={city.key}
                position={[city.lat, city.lng]}
                icon={cityMarker(city, false)}
                eventHandlers={{
                  click: () => { window.location.href = city.href },
                }}
              />
            ))}
            {comingSoon.map((city) => (
              <Marker
                key={city.key}
                position={[city.lat, city.lng]}
                icon={comingSoonMarker()}
              />
            ))}
          </MapContainer>
        </div>
      )}

      {/* ── Mobile Floating Toggle ───────────────────────────── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] md:hidden">
        <button
          onClick={() => setMobileMapOpen(!mobileMapOpen)}
          className="bg-[#1a3a4a] text-white px-5 py-3 rounded-full shadow-xl text-sm font-semibold flex items-center gap-2"
        >
          {mobileMapOpen ? (
            <>📋 List</>
          ) : (
            <>🗺️ Map</>
          )}
        </button>
      </div>
    </div>
  )
}
