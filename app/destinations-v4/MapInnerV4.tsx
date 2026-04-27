'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Map as MapIcon, List, Search } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// ── City Data (same) ─────────────────────────────────────────────
const cities = [
  { key: 'shanghai', name: 'Shanghai', lat: 31.23, lng: 121.47, bestFor: 'Modern & Nightlife', hook: "Colonial elegance meets tomorrow's skyline", thingsToDo: 6, whereToEat: 5, href: '/destinations/shanghai' },
  { key: 'beijing', name: 'Beijing', lat: 39.90, lng: 116.41, bestFor: 'History & Culture', hook: 'The capital, the Great Wall, the hutongs', thingsToDo: 7, whereToEat: 6, href: '/destinations/beijing' },
  { key: 'xian', name: "Xi'an", lat: 34.26, lng: 108.94, bestFor: 'Ancient Wonders', hook: '3,000 years of Chinese history', thingsToDo: 5, whereToEat: 4, href: '/destinations/xian' },
  { key: 'chengdu', name: 'Chengdu', lat: 30.57, lng: 104.07, bestFor: 'Food & Pandas', hook: 'Pandas, hotpot, and the slow life', thingsToDo: 6, whereToEat: 4, href: '/destinations/chengdu' },
  { key: 'chongqing', name: 'Chongqing', lat: 29.56, lng: 106.55, bestFor: 'Urban Adventure', hook: "China's cyberpunk megacity", thingsToDo: 6, whereToEat: 3, href: '/destinations/chongqing' },
]

const comingSoonCities = [
  { key: 'hangzhou', name: 'Hangzhou', lat: 30.27, lng: 120.15 },
  { key: 'suzhou', name: 'Suzhou', lat: 31.30, lng: 120.59 },
  { key: 'guilin', name: 'Guilin', lat: 25.27, lng: 110.29 },
  { key: 'guangzhou', name: 'Guangzhou', lat: 23.13, lng: 113.26 },
  { key: 'nanjing', name: 'Nanjing', lat: 32.06, lng: 118.80 },
  { key: 'lhasa', name: 'Lhasa', lat: 29.65, lng: 91.10 },
  { key: 'kunming', name: 'Kunming', lat: 25.04, lng: 102.72 },
]

const pois: Record<string, Array<{ name: string; lat: number; lng: number; category: 'attraction' | 'food' | 'transport' }>> = {
  shanghai: [
    { name: 'Yu Garden', lat: 31.227, lng: 121.492, category: 'attraction' },
    { name: 'The Bund', lat: 31.240, lng: 121.490, category: 'attraction' },
    { name: 'Shanghai Tower', lat: 31.235, lng: 121.501, category: 'attraction' },
    { name: 'French Concession', lat: 31.210, lng: 121.460, category: 'attraction' },
    { name: 'Xiaolongbao', lat: 31.225, lng: 121.475, category: 'food' },
    { name: 'Lujiazui Station', lat: 31.239, lng: 121.504, category: 'transport' },
  ],
  beijing: [
    { name: 'Forbidden City', lat: 39.916, lng: 116.397, category: 'attraction' },
    { name: 'Great Wall', lat: 40.432, lng: 116.570, category: 'attraction' },
    { name: 'Temple of Heaven', lat: 39.882, lng: 116.407, category: 'attraction' },
    { name: '798 Art District', lat: 39.984, lng: 116.496, category: 'attraction' },
    { name: 'Peking Duck', lat: 39.900, lng: 116.395, category: 'food' },
    { name: 'Dongzhimen Station', lat: 39.949, lng: 116.432, category: 'transport' },
  ],
  xian: [
    { name: 'Terracotta Army', lat: 34.384, lng: 109.278, category: 'attraction' },
    { name: 'City Wall', lat: 34.258, lng: 108.946, category: 'attraction' },
    { name: 'Muslim Quarter', lat: 34.266, lng: 108.940, category: 'food' },
  ],
  chengdu: [
    { name: 'Giant Panda Base', lat: 30.734, lng: 104.145, category: 'attraction' },
    { name: 'Jinli Street', lat: 30.646, lng: 104.048, category: 'food' },
    { name: 'Wide Alley', lat: 30.670, lng: 104.055, category: 'attraction' },
  ],
  chongqing: [
    { name: 'Hongya Cave', lat: 29.562, lng: 106.578, category: 'attraction' },
    { name: 'Ciqikou', lat: 29.580, lng: 106.450, category: 'attraction' },
    { name: 'Liziba Station', lat: 29.558, lng: 106.530, category: 'transport' },
  ],
}

const categoryConfig = {
  attraction: { emoji: '🏛️', color: '#af5d32', label: 'Attractions' },
  food: { emoji: '🍜', color: '#f97316', label: 'Food' },
  transport: { emoji: '🚇', color: '#3b82f6', label: 'Transport' },
}

// ── Icons ────────────────────────────────────────────────────────
const cityLabelIcon = (name: string, bestFor: string, isComingSoon: boolean) => L.divIcon({
  className: '',
  html: `<div style="white-space:nowrap;pointer-events:auto">
    <div style="display:flex;align-items:center;gap:6px">
      <div style="width:${isComingSoon ? 8 : 14}px;height:${isComingSoon ? 8 : 14}px;background:${isComingSoon ? '#94a3b8' : '#af5d32'};border:${isComingSoon ? 2 : 3}px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>
      <div>
        <div style="font-weight:700;font-size:13px;color:${isComingSoon ? '#64748b' : '#1a3a4a'};text-shadow:0 1px 3px white,0 0 8px white">${name}</div>
        <div style="font-size:10px;color:${isComingSoon ? '#94a3b8' : '#af5d32'};text-shadow:0 1px 3px white,0 0 8px white">${isComingSoon ? 'Coming Soon' : bestFor}</div>
      </div>
    </div>
  </div>`,
  iconSize: [0, 0], iconAnchor: [0, 0],
})

const poiIcon = (category: 'attraction' | 'food' | 'transport') => {
  const cfg = categoryConfig[category]
  return L.divIcon({
    className: '',
    html: `<div style="width:28px;height:28px;background:${cfg.color};border:2px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 4px rgba(0,0,0,0.2);cursor:pointer">${cfg.emoji}</div>`,
    iconSize: [28, 28], iconAnchor: [14, 14],
  })
}

const activeCityIcon = L.divIcon({
  className: '',
  html: `<div style="width:16px;height:16px;background:#af5d32;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
  iconSize: [16, 16], iconAnchor: [8, 8],
})

const comingSoonIcon = L.divIcon({
  className: '',
  html: `<div style="width:10px;height:10px;background:#94a3b8;border:2px solid white;border-radius:50%"></div>`,
  iconSize: [10, 10], iconAnchor: [5, 5],
})

// ── Map Event Handler ────────────────────────────────────────────
function MapEventHandler({ selectedCity }: { selectedCity: string | null }) {
  const map = useMap()
  useEffect(() => {
    if (selectedCity) {
      const city = cities.find(c => c.key === selectedCity)
      if (city) map.flyTo([city.lat, city.lng], 12, { duration: 1.5 })
    } else {
      map.flyTo([33, 108], 4, { duration: 1.5 })
    }
  }, [selectedCity, map])
  return null
}

// ── Main Component ───────────────────────────────────────────────
export default function MapInnerV4() {
  const [mounted, setMounted] = useState(false)
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set(['attraction', 'food', 'transport']))
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const toggleFilter = useCallback((cat: string) => {
    setActiveFilters(prev => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }, [])

  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return cities
    const q = searchQuery.toLowerCase()
    return cities.filter(c => c.name.toLowerCase().includes(q) || c.bestFor.toLowerCase().includes(q) || c.hook.toLowerCase().includes(q))
  }, [searchQuery])

  const selectedCityData = useMemo(() => cities.find(c => c.key === selectedCity), [selectedCity])
  const selectedPois = useMemo(() => {
    if (!selectedCity || !pois[selectedCity]) return []
    return pois[selectedCity].filter(p => activeFilters.has(p.category))
  }, [selectedCity, activeFilters])

  if (!mounted) {
    return <div className="min-h-screen bg-[#f5f1ea] flex items-center justify-center"><div className="text-[#64748b]">Loading…</div></div>
  }

  return (
    <div className="h-screen bg-[#f5f1ea] flex flex-col">
      {/* ── Dual Panel Layout (desktop) ──────────────────────── */}
      {viewMode === 'map' ? (
        <div className="flex-1 flex overflow-hidden">
          {/* LEFT PANEL */}
          <div className="w-[340px] flex-shrink-0 bg-white border-r border-[#ebe4d8] flex flex-col overflow-hidden">
            {/* Search */}
            <div className="p-3 border-b border-[#ebe4d8]">
              <div className="flex items-center gap-2 bg-[#f5f1ea] rounded-lg px-3 py-2">
                <Search size={16} className="text-[#64748b]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="flex-1 bg-transparent text-sm outline-none text-[#1a3a4a] placeholder:text-[#64748b]"
                />
              </div>
            </div>

            {/* Filter chips */}
            <div className="px-3 py-2 border-b border-[#ebe4d8] flex gap-1.5 overflow-x-auto scrollbar-hide">
              {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((cat) => {
                const cfg = categoryConfig[cat]
                const isActive = activeFilters.has(cat)
                return (
                  <button
                    key={cat}
                    onClick={() => toggleFilter(cat)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${isActive ? 'text-white' : 'bg-[#f5f1ea] text-[#64748b] border border-[#ebe4d8]'}`}
                    style={isActive ? { backgroundColor: cfg.color } : {}}
                  >
                    {cfg.emoji} {cfg.label}
                  </button>
                )
              })}
            </div>

            {/* City list */}
            <div className="flex-1 overflow-y-auto">
              {filteredCities.map((city) => (
                <button
                  key={city.key}
                  onClick={() => setSelectedCity(prev => prev === city.key ? null : city.key)}
                  className={`w-full flex items-center gap-3 p-3 text-left transition-colors border-l-4 ${selectedCity === city.key ? 'border-l-[#af5d32] bg-[#fdf8f3]' : 'border-l-transparent hover:bg-[#f5f1ea]'}`}
                >
                  <img
                    src={`https://picsum.photos/seed/${city.key}-thumb/128/128`}
                    alt={city.name}
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#1a3a4a] truncate">{city.name}</h3>
                    <p className="text-xs text-[#af5d32] font-medium">{city.bestFor}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{city.thingsToDo} things · {city.whereToEat} eats</p>
                  </div>
                  <ArrowRight size={14} className="text-[#64748b] flex-shrink-0 ml-auto" />
                </button>
              ))}

              {/* Coming Soon */}
              <div className="border-t border-[#ebe4d8]">
                <button onClick={() => setShowComingSoon(!showComingSoon)} className="w-full p-3 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wider hover:bg-[#f5f1ea]">
                  Coming Soon ({comingSoonCities.length}) {showComingSoon ? '▲' : '▼'}
                </button>
                {showComingSoon && (
                  <div className="px-3 pb-3 flex flex-wrap gap-1.5">
                    {comingSoonCities.map((city) => (
                      <span key={city.key} className="px-3 py-1.5 rounded-full bg-[#f5f1ea] text-xs text-[#64748b] border border-[#ebe4d8]">{city.name}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Map/List toggle in panel */}
            <div className="p-3 border-t border-[#ebe4d8]">
              <button onClick={() => setViewMode('list')} className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#f5f1ea] text-xs font-semibold text-[#64748b] hover:bg-[#ebe4d8] transition-colors">
                <List size={14} /> Switch to List View
              </button>
            </div>
          </div>

          {/* RIGHT PANEL - Map */}
          <div className="flex-1 relative">
            <div className="w-full h-full">
              <MapContainer center={[33, 108]} zoom={4} minZoom={3} maxZoom={16} scrollWheelZoom touchZoom style={{ height: '100%', width: '100%' }}>
                <TileLayer attribution='&copy; OSM &copy; CARTO' url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                <MapEventHandler selectedCity={selectedCity} />
                {cities.map((city) => (
                  <Marker key={city.key} position={[city.lat, city.lng]} icon={cityLabelIcon(city.name, city.bestFor, false)}
                    eventHandlers={{ click: () => setSelectedCity(prev => prev === city.key ? null : city.key) }}
                  />
                ))}
                {comingSoonCities.map((city) => (
                  <Marker key={city.key} position={[city.lat, city.lng]} icon={cityLabelIcon(city.name, '', true)} />
                ))}
                {selectedPois.map((poi, i) => (
                  <Marker key={`${selectedCity}-poi-${i}`} position={[poi.lat, poi.lng]} icon={poiIcon(poi.category)} />
                ))}
              </MapContainer>
            </div>

            {/* Back button */}
            {selectedCity && (
              <button onClick={() => setSelectedCity(null)} className="absolute top-4 left-4 z-[50] bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-sm font-semibold text-[#1a3a4a] shadow-lg hover:bg-white flex items-center gap-1.5">
                <ArrowLeft size={14} /> Back to overview
              </button>
            )}

            {/* POI count */}
            {selectedCity && selectedPois.length > 0 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[50] bg-[#1a3a4a] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                {selectedPois.length} points of interest
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ── LIST VIEW ────────────────────────────────────────── */
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#1a3a4a]">Explore China</h1>
              <button onClick={() => setViewMode('map')} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#af5d32] text-white text-sm font-semibold hover:bg-[#9a4f28] transition-colors">
                <MapIcon size={14} /> Map View
              </button>
            </div>

            {/* Mini map */}
            <div className="w-full h-[200px] rounded-xl overflow-hidden border border-[#ebe4d8] mb-8">
              <MapContainer center={[33, 108]} zoom={3} scrollWheelZoom={false} dragging={false} touchZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                {cities.map((city) => (<Marker key={city.key} position={[city.lat, city.lng]} icon={activeCityIcon} />))}
                {comingSoonCities.map((city) => (<Marker key={city.key} position={[city.lat, city.lng]} icon={comingSoonIcon} />))}
              </MapContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city) => (
                <Link key={city.key} href={city.href} className="group rounded-xl overflow-hidden border border-[#ebe4d8] bg-white hover:shadow-lg transition-shadow">
                  <img src={`https://picsum.photos/seed/${city.key}-list/600/300`} alt={city.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4">
                    <p className="text-xs font-semibold text-[#af5d32] uppercase tracking-wider">{city.bestFor}</p>
                    <h3 className="text-lg font-bold text-[#1a3a4a] mt-1">{city.name}</h3>
                    <p className="text-sm text-[#64748b] mt-1">{city.hook}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32]">Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}