'use client'

import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { MapPin, List, X, ArrowRight } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// ── Data ─────────────────────────────────────────────────────────
const cities = [
  { key: 'shanghai', name: 'Shanghai', nameZh: '上海', lat: 31.23, lng: 121.47, bestFor: 'Modern & Nightlife', hook: "Colonial elegance meets tomorrow's skyline", thingsToDo: 6, whereToEat: 5, href: '/destinations/shanghai',
    images: ['shanghai-bund', 'shanghai-tower', 'shanghai-yu-garden', 'shanghai-nanjing-road', 'shanghai-night'],
  },
  { key: 'beijing', name: 'Beijing', nameZh: '北京', lat: 39.90, lng: 116.41, bestFor: 'History & Culture', hook: 'The capital, the Great Wall, the hutongs', thingsToDo: 7, whereToEat: 6, href: '/destinations/beijing',
    images: ['beijing-great-wall', 'beijing-forbidden-city', 'beijing-temple-of-heaven', 'beijing-hutong', 'beijing-duck'],
  },
  { key: 'xian', name: "Xi'an", nameZh: '西安', lat: 34.26, lng: 108.94, bestFor: 'Ancient Wonders', hook: '3,000 years of Chinese history', thingsToDo: 5, whereToEat: 4, href: '/destinations/xian',
    images: ['xian-warriors', 'xian-wall', 'xian-muslim-quarter', 'xian-pagoda', 'xian-noodles'],
  },
  { key: 'chengdu', name: 'Chengdu', nameZh: '成都', lat: 30.57, lng: 104.07, bestFor: 'Food & Pandas', hook: 'Pandas, hotpot, and the slow life', thingsToDo: 6, whereToEat: 4, href: '/destinations/chengdu',
    images: ['chengdu-pandas', 'chengdu-hotpot', 'chengdu-alleys', 'chengdu-tea', 'chengdu-night'],
  },
  { key: 'chongqing', name: 'Chongqing', nameZh: '重庆', lat: 29.56, lng: 106.55, bestFor: 'Urban Adventure', hook: "China's cyberpunk megacity", thingsToDo: 6, whereToEat: 3, href: '/destinations/chongqing',
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
// Numbered pulsating marker
const numberedPulseIcon = (num: number) => L.divIcon({
  className: '',
  html: `<div style="position:relative;width:36px;height:36px">
    <div style="position:absolute;inset:0;background:#af5d32;border-radius:50%;opacity:0.25;animation:pulse-ring 2s ease-out infinite"></div>
    <div style="position:absolute;inset:6px;background:#af5d32;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center">
      <span style="color:white;font-size:12px;font-weight:800">${num}</span>
    </div>
  </div>
  <style>@keyframes pulse-ring{0%{transform:scale(0.8);opacity:0.4}70%{transform:scale(2);opacity:0}100%{transform:scale(2);opacity:0}}</style>`,
  iconSize: [36, 36], iconAnchor: [18, 18],
})

const comingSoonMapIcon = (name: string) => L.divIcon({
  className: '',
  html: `<div style="white-space:nowrap;pointer-events:none">
    <div style="display:flex;align-items:center;gap:4px">
      <div style="width:8px;height:8px;background:#94a3b8;border:2px solid white;border-radius:50%"></div>
      <div style="font-weight:600;font-size:11px;color:#94a3b8;text-shadow:0 1px 3px white,0 0 8px white">${name}</div>
    </div>
  </div>`,
  iconSize: [0, 0], iconAnchor: [0, 0],
})

// ── Map Event Handler ────────────────────────────────────────────
function MapEventHandler() {
  const map = useMap()
  useEffect(() => {
    // Disable drag outside China bounds
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

  const hoveredCityData = cities.find(c => c.key === hoveredCity)

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header with toggle ──────────────────────────────── */}
      <div className="bg-white border-b border-[#ebe4d8]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1a3a4a]">Explore China</h1>
            <p className="text-sm text-[#64748b] mt-0.5">{cities.length} destinations · {comingSoon.length} coming soon</p>
          </div>
          <div className="flex rounded-lg border border-[#ebe4d8] overflow-hidden">
            <button onClick={() => setViewMode('list')} className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors ${viewMode === 'list' ? 'bg-[#1a3a4a] text-white' : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'}`}>
              <List size={14} /> List
            </button>
            <button onClick={() => setViewMode('split')} className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors ${viewMode === 'split' ? 'bg-[#1a3a4a] text-white' : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'}`}>
              <MapPin size={14} /> Map
            </button>
          </div>
        </div>
      </div>

      {/* ── LIST VIEW (default) ──────────────────────────────── */}
      {viewMode === 'list' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, i) => (
              <Link
                key={city.key}
                href={city.href}
                className="group rounded-xl overflow-hidden border border-[#ebe4d8] bg-white hover:shadow-lg transition-all"
                onMouseEnter={() => handleCityMouseEnter(city.key)}
                onMouseLeave={handleCityMouseLeave}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${city.key}-list/600/400`}
                    alt={city.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${hoveredCity === city.key ? 'scale-105' : ''}`}
                  />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#af5d32] text-white text-sm font-extrabold flex items-center justify-center shadow-lg border-2 border-white">
                    {i + 1}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#1a3a4a]/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {city.bestFor}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#1a3a4a]">{city.name}</h3>
                    <span className="text-xs text-[#af5d32] font-semibold">{city.nameZh}</span>
                  </div>
                  <p className="text-sm text-[#64748b] mt-1">{city.hook}</p>
                  <p className="text-xs text-[#64748b] mt-2">{city.thingsToDo} things to do · {city.whereToEat} restaurants</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 border-t border-[#ebe4d8] pt-8">
            <h2 className="text-lg font-bold text-[#1a3a4a] mb-4">Coming Soon</h2>
            <div className="flex flex-wrap gap-3">
              {comingSoon.map((city) => (
                <span key={city.key} className="px-4 py-2 rounded-full bg-[#f5f1ea] text-sm text-[#64748b] border border-[#ebe4d8]">{city.name} ({city.nameZh})</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── SPLIT VIEW (Map + Side List, Airbnb-style) ────────── */}
      {viewMode === 'split' && (
        <div className="max-w-6xl mx-auto px-4 py-6 flex gap-4 h-[calc(100vh-80px)]">
          {/* Left: City list */}
          <div className="w-[340px] flex-shrink-0 overflow-y-auto pr-2">
            <div className="space-y-3">
              {cities.map((city, i) => (
                <Link
                  key={city.key}
                  href={city.href}
                  className={`group flex items-center gap-3 rounded-xl p-3 border transition-all ${
                    hoveredCity === city.key
                      ? 'border-[#af5d32] bg-[#fdf8f3] shadow-md'
                      : 'border-[#ebe4d8] bg-white hover:border-[#af5d32]/40 hover:shadow-sm'
                  }`}
                  onMouseEnter={() => handleCityMouseEnter(city.key)}
                  onMouseLeave={handleCityMouseLeave}
                >
                  {/* Number */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0 ${
                    hoveredCity === city.key ? 'bg-[#af5d32] text-white' : 'bg-[#f5f1ea] text-[#1a3a4a]'
                  }`}>
                    {i + 1}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[#1a3a4a]">{city.name}</h3>
                    <p className="text-xs text-[#af5d32] font-medium">{city.bestFor}</p>
                    <p className="text-xs text-[#64748b] mt-0.5 line-clamp-1">{city.hook}</p>
                  </div>
                  <ArrowRight size={14} className="text-[#af5d32] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
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
              {cities.map((city, i) => (
                <Marker
                  key={city.key}
                  position={[city.lat, city.lng]}
                  icon={numberedPulseIcon(i + 1)}
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

            {/* Hover preview card (overlaid on map) */}
            {hoveredCityData && (
              <div
                className="absolute bottom-4 left-4 right-4 z-[50] bg-white rounded-xl shadow-2xl border border-[#ebe4d8] overflow-hidden transition-all duration-200"
                onMouseEnter={() => handleCityMouseEnter(hoveredCityData.key)}
                onMouseLeave={handleCityMouseLeave}
              >
                {/* Photo strip */}
                <div className="flex gap-1 overflow-x-auto scrollbar-hide p-2">
                  {hoveredCityData.images.map((img, i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/${img}/300/200`}
                      alt={`${hoveredCityData.name} photo ${i + 1}`}
                      className="w-24 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                  ))}
                </div>
                <div className="px-4 pb-3 pt-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#1a3a4a]">{hoveredCityData.name}</h3>
                    <span className="text-xs text-[#af5d32] font-semibold">{hoveredCityData.nameZh}</span>
                  </div>
                  <p className="text-xs text-[#af5d32] font-medium">{hoveredCityData.bestFor}</p>
                  <p className="text-sm text-[#64748b] mt-1">{hoveredCityData.hook}</p>
                  <Link href={hoveredCityData.href} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] hover:underline">
                    Explore {hoveredCityData.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}