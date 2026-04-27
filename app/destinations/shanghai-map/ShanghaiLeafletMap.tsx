'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { X, MapPin, ArrowRight } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// ── POI Data ─────────────────────────────────────────────────────
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

const pois: POI[] = [
  // Attractions
  { name: 'The Bund', lat: 31.2400, lng: 121.4900, category: 'attraction', hook: "Shanghai's most iconic waterfront promenade", tag: 'Free', href: '/destinations/shanghai/what-to-do/bund', imageSeed: 'shanghai-bund' },
  { name: 'Yu Garden', lat: 31.2270, lng: 121.4920, category: 'attraction', hook: 'A 400-year-old classical garden', tag: '¥40', href: '/destinations/shanghai/what-to-do/yu-garden', imageSeed: 'shanghai-yugarden' },
  { name: 'French Concession', lat: 31.2100, lng: 121.4600, category: 'attraction', hook: 'Tree-lined avenues, Art Deco villas, and cafés', tag: 'Free', href: '/destinations/shanghai/what-to-do/french-concession', imageSeed: 'shanghai-frenchconcession' },
  { name: 'Shanghai Tower', lat: 31.2355, lng: 121.5015, category: 'attraction', hook: "World's second-tallest building with observation deck", tag: '¥180', href: '/destinations/shanghai/what-to-do/shanghai-tower', imageSeed: 'shanghai-tower' },
  { name: 'Tianzifang', lat: 31.2030, lng: 121.4680, category: 'attraction', hook: 'Winding alleyways with studios and galleries', tag: 'Free', href: '/destinations/shanghai/what-to-do', imageSeed: 'shanghai-tianzifang' },
  { name: 'Jade Buddha Temple', lat: 31.2230, lng: 121.4420, category: 'attraction', hook: 'Serene temple with white jade Buddhas', tag: '¥20', href: '/destinations/shanghai/what-to-do', imageSeed: 'shanghai-jadebuddha' },
  // Food
  { name: 'Xiaolongbao', lat: 31.2250, lng: 121.4750, category: 'food', hook: "Shanghai's iconic soup dumplings", tag: '¥30', href: '/destinations/shanghai/where-to-eat/xiaolongbao', imageSeed: 'xiaolongbao' },
  { name: 'Shengjianbao', lat: 31.2380, lng: 121.4880, category: 'food', hook: 'Pan-fried buns with crispy bottom', tag: '¥15', href: '/destinations/shanghai/where-to-eat/shengjianbao', imageSeed: 'shengjianbao' },
  { name: 'Hairy Crab', lat: 31.2150, lng: 121.4900, category: 'food', hook: 'Autumn delicacy from Yangcheng Lake', tag: '¥200+', href: '/destinations/shanghai/where-to-eat/hairy-crab', imageSeed: 'hairy-crab' },
  { name: 'Scallion Oil Noodles', lat: 31.2320, lng: 121.4550, category: 'food', hook: 'Simple, fragrant, deeply comforting', tag: '¥25–40', href: '/destinations/shanghai/where-to-eat/scallion-oil-noodles', imageSeed: 'scallion-noodles' },
  // Stay
  { name: 'Bund Area', lat: 31.2450, lng: 121.4920, category: 'stay', hook: 'Iconic skyline · Historic architecture', href: '/destinations/shanghai/where-to-stay/bund-area', imageSeed: 'shanghai-bund-area' },
  { name: 'French Concession Stay', lat: 31.2080, lng: 121.4580, category: 'stay', hook: 'Cafés & boutiques · Tree-lined streets', href: '/destinations/shanghai/where-to-stay/french-concession', imageSeed: 'shanghai-french-concession-stay' },
  { name: "Jing'an", lat: 31.2340, lng: 121.4460, category: 'stay', hook: 'Local life · Metro hub', href: '/destinations/shanghai/where-to-stay/jingan', imageSeed: 'shanghai-jingan' },
  { name: 'Xintiandi', lat: 31.2190, lng: 121.4750, category: 'stay', hook: 'Modern luxury · Nightlife', href: '/destinations/shanghai/where-to-stay/xintiandi', imageSeed: 'shanghai-xintiandi' },
  // Essentials
  { name: 'Pudong Airport', lat: 31.1443, lng: 121.8082, category: 'essential', hook: 'Main international airport — Maglev connects to city', href: '/china-basics/how-to-get-around', imageSeed: 'pudong-airport' },
  { name: 'Shanghai Metro', lat: 31.2300, lng: 121.4730, category: 'essential', hook: 'Excellent coverage — 19 lines, English signs', href: '/china-basics/how-to-get-around', imageSeed: 'shanghai-metro' },
]

const categoryConfig: Record<POICategory, { emoji: string; color: string; label: string }> = {
  attraction: { emoji: '🏛️', color: '#af5d32', label: 'Things to Do' },
  food: { emoji: '🍜', color: '#f97316', label: 'Where to Eat' },
  stay: { emoji: '🏨', color: '#3b82f6', label: 'Where to Stay' },
  essential: { emoji: 'ℹ️', color: '#1a3a4a', label: 'Essentials' },
}

// ── Icons ────────────────────────────────────────────────────────
const poiMarkerIcon = (category: POICategory) => {
  const cfg = categoryConfig[category]
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;width:32px;height:32px">
      <div style="position:absolute;inset:0;background:${cfg.color};border-radius:50%;opacity:0.2;animation:pulse-ring 2s ease-out infinite"></div>
      <div style="position:absolute;inset:5px;background:${cfg.color};border:2px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;font-size:14px">${cfg.emoji}</div>
    </div>
    <style>@keyframes pulse-ring{0%{transform:scale(0.8);opacity:0.3}70%{transform:scale(1.8);opacity:0}100%{transform:scale(1.8);opacity:0}}</style>`,
    iconSize: [32, 32], iconAnchor: [16, 16],
  })
}

// ── Component ────────────────────────────────────────────────────
export default function ShanghaiLeafletMap() {
  const [mounted, setMounted] = useState(false)
  const [activeFilters, setActiveFilters] = useState<Set<POICategory>>(new Set(['attraction', 'food', 'stay', 'essential']))

  useEffect(() => { setMounted(true) }, [])

  const toggleFilter = useCallback((cat: POICategory) => {
    setActiveFilters(prev => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }, [])

  const filteredPois = useMemo(() => pois.filter(p => activeFilters.has(p.category)), [activeFilters])

  if (!mounted) return <div className="min-h-screen bg-white flex items-center justify-center"><div className="text-[#64748b]">Loading…</div></div>

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#ebe4d8] sticky top-0 z-[70]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/destinations/shanghai" className="w-8 h-8 rounded-full bg-[#f5f1ea] flex items-center justify-center hover:bg-[#ebe4d8] transition-colors">
              <X size={16} className="text-[#1a3a4a]" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-[#1a3a4a]">Shanghai Map</h1>
              <p className="text-xs text-[#64748b]">{filteredPois.length} points of interest</p>
            </div>
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
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${isActive ? 'text-white' : 'bg-[#f5f1ea] text-[#64748b] border border-[#ebe4d8]'}`}
                style={isActive ? { backgroundColor: cfg.color } : {}}
              >
                {cfg.emoji} {cfg.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1">
        <MapContainer
          center={[31.23, 121.47]}
          zoom={13}
          minZoom={11}
          maxZoom={18}
          scrollWheelZoom
          style={{ height: '100%', width: '100%', minHeight: 'calc(100vh - 110px)' }}
        >
          <TileLayer
            attribution='&copy; OSM &copy; CARTO'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {filteredPois.map((poi, i) => (
            <Marker key={`${poi.category}-${i}`} position={[poi.lat, poi.lng]} icon={poiMarkerIcon(poi.category)}>
              <Popup>
                <div style={{ minWidth: 200 }}>
                  <img src={`https://picsum.photos/seed/${poi.imageSeed}/400/200`} alt={poi.name} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 16 }}>{categoryConfig[poi.category].emoji}</span>
                    <strong style={{ color: '#1a3a4a', fontSize: 14 }}>{poi.name}</strong>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748b', margin: '4px 0' }}>{poi.hook}</p>
                  {poi.tag && <span style={{ fontSize: 11, color: '#af5d32', fontWeight: 600 }}>{poi.tag}</span>}
                  <a href={poi.href} style={{ display: 'inline-block', marginTop: 8, fontSize: 13, fontWeight: 600, color: '#af5d32' }}>Explore →</a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}