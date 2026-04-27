'use client'

import { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { Search, SlidersHorizontal, MapPin, X, Heart, Star, ChevronRight } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// ── Data ─────────────────────────────────────────────────────────
const destinations = [
  {
    key: 'shanghai', name: 'Shanghai', nameZh: '上海',
    lat: 31.23, lng: 121.47,
    tagline: "Colonial elegance meets tomorrow's skyline",
    bestFor: 'Modern & Nightlife',
    categories: ['modern', 'nightlife', 'food', 'shopping'],
    thingsToDo: 6, whereToEat: 5,
    rating: 4.8, reviews: 1247,
    hero: 'https://picsum.photos/seed/shanghai-hero/800/600',
    thumb: 'https://picsum.photos/seed/shanghai-thumb/400/300',
    href: '/destinations/shanghai',
    featured: true,
  },
  {
    key: 'beijing', name: 'Beijing', nameZh: '北京',
    lat: 39.90, lng: 116.41,
    tagline: 'The capital, the Great Wall, the hutongs',
    bestFor: 'History & Culture',
    categories: ['history', 'culture', 'food'],
    thingsToDo: 7, whereToEat: 6,
    rating: 4.9, reviews: 2103,
    hero: 'https://picsum.photos/seed/beijing-hero/800/600',
    thumb: 'https://picsum.photos/seed/beijing-thumb/400/300',
    href: '/destinations/beijing',
    featured: true,
  },
  {
    key: 'xian', name: "Xi'an", nameZh: '西安',
    lat: 34.26, lng: 108.94,
    tagline: '3,000 years of Chinese history',
    bestFor: 'Ancient Wonders',
    categories: ['history', 'ancient', 'food'],
    thingsToDo: 5, whereToEat: 4,
    rating: 4.7, reviews: 834,
    hero: 'https://picsum.photos/seed/xian-hero/800/600',
    thumb: 'https://picsum.photos/seed/xian-thumb/400/300',
    href: '/destinations/xian',
    featured: false,
  },
  {
    key: 'chengdu', name: 'Chengdu', nameZh: '成都',
    lat: 30.57, lng: 104.07,
    tagline: 'Pandas, hotpot, and the slow life',
    bestFor: 'Food & Pandas',
    categories: ['food', 'nature', 'culture'],
    thingsToDo: 6, whereToEat: 4,
    rating: 4.8, reviews: 956,
    hero: 'https://picsum.photos/seed/chengdu-hero/800/600',
    thumb: 'https://picsum.photos/seed/chengdu-thumb/400/300',
    href: '/destinations/chengdu',
    featured: false,
  },
  {
    key: 'chongqing', name: 'Chongqing', nameZh: '重庆',
    lat: 29.56, lng: 106.55,
    tagline: "China's cyberpunk megacity",
    bestFor: 'Urban Adventure',
    categories: ['modern', 'food', 'nightlife'],
    thingsToDo: 6, whereToEat: 3,
    rating: 4.6, reviews: 612,
    hero: 'https://picsum.photos/seed/chongqing-hero/800/600',
    thumb: 'https://picsum.photos/seed/chongqing-thumb/400/300',
    href: '/destinations/chongqing',
    featured: false,
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

const categoryChips = [
  { key: 'all', label: 'All destinations', icon: '🌏' },
  { key: 'history', label: 'History', icon: '🏛️' },
  { key: 'food', label: 'Food', icon: '🍜' },
  { key: 'modern', label: 'Modern', icon: '🌃' },
  { key: 'culture', label: 'Culture', icon: '🎭' },
  { key: 'nature', label: 'Nature', icon: '🐼' },
  { key: 'nightlife', label: 'Nightlife', icon: '🍸' },
  { key: 'ancient', label: 'Ancient', icon: '⚱️' },
  { key: 'shopping', label: 'Shopping', icon: '🛍️' },
]

// ── Map Icons ────────────────────────────────────────────────────
const priceTagIcon = (name: string, isActive: boolean) => L.divIcon({
  className: '',
  html: `<div style="
    background:${isActive ? '#af5d32' : '#1a3a4a'};
    color:white;
    padding:4px 10px;
    border-radius:20px;
    font-size:12px;
    font-weight:700;
    white-space:nowrap;
    box-shadow:0 2px 8px rgba(0,0,0,0.25);
    border:2px solid white;
    pointer-events:auto;
    transition:transform 0.2s;
    ${isActive ? 'transform:scale(1.15);' : ''}
  ">${name}</div>`,
  iconSize: [0, 0], iconAnchor: [0, 20],
})

const comingSoonMapIcon = (name: string) => L.divIcon({
  className: '',
  html: `<div style="
    background:#94a3b8;
    color:white;
    padding:3px 8px;
    border-radius:20px;
    font-size:10px;
    font-weight:600;
    white-space:nowrap;
    box-shadow:0 1px 4px rgba(0,0,0,0.15);
    border:1.5px solid white;
    opacity:0.6;
  ">${name}</div>`,
  iconSize: [0, 0], iconAnchor: [0, 16],
})

// ── Map Event Handler ────────────────────────────────────────────
function MapEventHandler({ hoveredCity }: { hoveredCity: string | null }) {
  const map = useMap()
  // Subtle pan toward hovered city (no zoom change)
  useEffect(() => {
    if (hoveredCity) {
      const city = destinations.find(c => c.key === hoveredCity)
      if (city) map.panTo([city.lat, city.lng], { animate: true, duration: 0.5 })
    }
  }, [hoveredCity, map])
  return null
}

// ── Main Component ───────────────────────────────────────────────
export default function MapInnerV5() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeChip, setActiveChip] = useState('all')
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [showMap, setShowMap] = useState(true)
  const [showMobileMap, setShowMobileMap] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const filteredDestinations = useMemo(() => {
    let result = destinations
    if (activeChip !== 'all') {
      result = result.filter(d => d.categories.includes(activeChip))
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.bestFor.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q)
      )
    }
    return result
  }, [activeChip, searchQuery])

  if (!mounted) {
    return <div className="min-h-screen bg-white flex items-center justify-center"><div className="text-[#64748b]">Loading…</div></div>
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── SEARCH BAR (Airbnb-style pill) ───────────────────── */}
      <div className="sticky top-0 z-[70] bg-white border-b border-[#ebe4d8]">
        <div className="max-w-[1760px] mx-auto px-6 py-4">
          {/* Search pill */}
          <div className="flex items-center bg-white border border-[#ebe4d8] rounded-full shadow-sm hover:shadow-md transition-shadow max-w-xl mx-auto">
            <div className="flex-1 flex items-center px-5 py-3">
              <Search size={18} className="text-[#af5d32] mr-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="flex-1 text-sm text-[#1a3a4a] placeholder:text-[#94a3b8] outline-none bg-transparent"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="ml-2">
                  <X size={16} className="text-[#64748b]" />
                </button>
              )}
            </div>
            <button className="bg-[#af5d32] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#9a4f28] transition-colors">
              Search
            </button>
          </div>

          {/* Category chips (Airbnb horizontal scroll) */}
          <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {categoryChips.map((chip) => (
              <button
                key={chip.key}
                onClick={() => setActiveChip(chip.key)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all border ${
                  activeChip === chip.key
                    ? 'border-[#1a3a4a] text-[#1a3a4a] shadow-[inset_0_0_0_2px_#1a3a4a]'
                    : 'border-transparent text-[#64748b] hover:border-[#ebe4d8] hover:text-[#1a3a4a]'
                }`}
              >
                <span className="text-base">{chip.icon}</span>
                {chip.label}
              </button>
            ))}
            {/* Spacer for scroll */}
            <div className="w-4 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT: Cards + Map ────────────────────────── */}
      <div className="flex-1 flex relative">
        {/* LEFT: Card Grid */}
        <div className="flex-1 overflow-y-auto" ref={cardsRef}>
          <div className="max-w-[1760px] mx-auto px-6 py-6">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#64748b]">
                {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} in China
              </p>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1a3a4a] text-sm font-semibold text-[#1a3a4a] hover:bg-[#f5f1ea] transition-colors">
                <SlidersHorizontal size={14} />
                Filters
              </button>
            </div>

            {/* Card Grid (Airbnb-style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map((dest) => (
                <Link
                  key={dest.key}
                  href={dest.href}
                  className="group block"
                  onMouseEnter={() => setHoveredCity(dest.key)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  {/* Card */}
                  <div className={`rounded-xl overflow-hidden transition-all duration-200 ${
                    hoveredCity === dest.key
                      ? 'shadow-xl scale-[1.02]'
                      : 'shadow-sm hover:shadow-lg'
                  }`}>
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={dest.hero}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Heart button */}
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all"
                      >
                        <Heart size={16} className="text-[#1a3a4a]" />
                      </button>
                      {/* Featured badge */}
                      {dest.featured && (
                        <div className="absolute top-3 left-3 bg-[#af5d32] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Guest favorite
                        </div>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-[15px] font-bold text-[#1a3a4a] leading-tight">{dest.name}</h3>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Star size={12} className="text-[#1a3a4a] fill-[#1a3a4a]" />
                          <span className="text-xs font-semibold text-[#1a3a4a]">{dest.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#af5d32] font-semibold mt-0.5">{dest.bestFor}</p>
                      <p className="text-xs text-[#64748b] mt-1 line-clamp-2">{dest.tagline}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-[#64748b]">
                        <span>{dest.thingsToDo} things to do</span>
                        <span>·</span>
                        <span>{dest.whereToEat} restaurants</span>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        <MapPin size={12} className="text-[#af5d32]" />
                        <span className="text-xs text-[#af5d32] font-medium">{dest.nameZh}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ── Coming Soon Section ────────────────────────── */}
            <div className="mt-12 border-t border-[#ebe4d8] pt-8">
              <h2 className="text-lg font-bold text-[#1a3a4a] mb-1">Coming Soon</h2>
              <p className="text-sm text-[#64748b] mb-6">More destinations being added regularly</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                {comingSoon.map((city) => (
                  <div key={city.key} className="group relative rounded-xl overflow-hidden aspect-square">
                    <img
                      src={`https://picsum.photos/seed/${city.key}-soon/400/400`}
                      alt={city.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-bold">{city.name}</p>
                      <p className="text-white/70 text-xs">{city.nameZh}</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 text-[#64748b] text-[10px] font-bold px-2 py-1 rounded-full">
                      Soon
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Trip Planning CTA ───────────────────────────── */}
            <div className="mt-12 mb-8 bg-gradient-to-br from-[#1a3a4a] to-[#2d5a6a] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Not sure where to start?</h2>
              <p className="text-white/70 mb-6 max-w-md">Let us help you plan the perfect China trip based on your interests, budget, and travel style.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/plan-your-trip/preplanned-trips" className="px-6 py-3 bg-[#af5d32] rounded-lg font-semibold hover:bg-[#9a4f28] transition-colors text-sm">
                  Browse pre-planned trips
                </Link>
                <Link href="/plan-your-trip/travel-planner" className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors text-sm">
                  Custom trip planner
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Map (desktop only, Airbnb split-view) */}
        {showMap && (
          <div className="hidden lg:block w-[45%] xl:w-[50%] sticky top-[120px] h-[calc(100vh-120px)]">
            <div className="h-full w-full p-2">
              <div className="h-full w-full rounded-xl overflow-hidden border border-[#ebe4d8]">
                <MapContainer
                  center={[32, 108]}
                  zoom={4}
                  minZoom={3}
                  maxZoom={12}
                  scrollWheelZoom
                  zoomControl={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; OSM &copy; CARTO'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  />
                  <MapEventHandler hoveredCity={hoveredCity} />
                  {filteredDestinations.map((dest) => (
                    <Marker
                      key={dest.key}
                      position={[dest.lat, dest.lng]}
                      icon={priceTagIcon(dest.name, hoveredCity === dest.key)}
                      eventHandlers={{
                        click: () => window.location.href = dest.href,
                        mouseover: () => setHoveredCity(dest.key),
                        mouseout: () => setHoveredCity(null),
                      }}
                    />
                  ))}
                  {comingSoon.map((city) => (
                    <Marker
                      key={city.key}
                      position={[city.lat, city.lng]}
                      icon={comingSoonMapIcon(city.name)}
                    />
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── MOBILE: "Show map" floating button ─────────────────── */}
      <button
        onClick={() => setShowMobileMap(true)}
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-[#1a3a4a] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-xl flex items-center gap-2 hover:bg-[#2d5a6a] transition-colors"
      >
        <MapPin size={16} /> Show map
      </button>

      {/* ── MOBILE: Full-screen map overlay ────────────────────── */}
      {showMobileMap && (
        <div className="lg:hidden fixed inset-0 z-[80] bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#ebe4d8]">
            <h3 className="text-sm font-bold text-[#1a3a4a]">Map</h3>
            <button onClick={() => setShowMobileMap(false)} className="w-8 h-8 rounded-full bg-[#f5f1ea] flex items-center justify-center">
              <X size={16} className="text-[#1a3a4a]" />
            </button>
          </div>
          <div className="flex-1">
            <MapContainer
              center={[32, 108]}
              zoom={4}
              minZoom={3}
              maxZoom={12}
              scrollWheelZoom
              zoomControl={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
              {destinations.map((dest) => (
                <Marker
                  key={dest.key}
                  position={[dest.lat, dest.lng]}
                  icon={priceTagIcon(dest.name, false)}
                  eventHandlers={{ click: () => window.location.href = dest.href }}
                />
              ))}
              {comingSoon.map((city) => (
                <Marker key={city.key} position={[city.lat, city.lng]} icon={comingSoonMapIcon(city.name)} />
              ))}
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  )
}