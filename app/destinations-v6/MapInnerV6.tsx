'use client'

// Placeholder — will be replaced with full implementation
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import 'leaflet/dist/leaflet.css'

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

// China-only tile layer that masks other countries
const chinaCityIcon = (name: string, bestFor: string) => L.divIcon({
  className: '',
  html: `<div style="white-space:nowrap;pointer-events:auto;cursor:pointer">
    <div style="display:flex;align-items:center;gap:6px">
      <div style="width:14px;height:14px;background:#af5d32;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>
      <div>
        <div style="font-weight:700;font-size:13px;color:#1a3a4a;text-shadow:0 1px 3px white,0 0 8px white">${name}</div>
        <div style="font-size:10px;color:#af5d32;text-shadow:0 1px 3px white,0 0 8px white">${bestFor}</div>
      </div>
    </div>
  </div>`,
  iconSize: [0, 0], iconAnchor: [0, 0],
})

const comingSoonMapIcon = (name: string) => L.divIcon({
  className: '',
  html: `<div style="white-space:nowrap;pointer-events:auto;cursor:default">
    <div style="display:flex;align-items:center;gap:4px">
      <div style="width:8px;height:8px;background:#94a3b8;border:2px solid white;border-radius:50%"></div>
      <div style="font-weight:600;font-size:11px;color:#94a3b8;text-shadow:0 1px 3px white">${name}</div>
    </div>
  </div>`,
  iconSize: [0, 0], iconAnchor: [0, 0],
})

export default function MapInnerV6() {
  const [mounted, setMounted] = useState(false)
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white flex items-center justify-center"><div className="text-[#64748b]">Loading…</div></div>
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── Header with Map/List toggle ──────────────────────── */}
      <div className="sticky top-0 z-[70] bg-white border-b border-[#ebe4d8]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1a3a4a]">Explore China</h1>
            <p className="text-sm text-[#64748b] mt-0.5">{cities.length} destinations · {comingSoon.length} coming soon</p>
          </div>
          <div className="flex rounded-lg border border-[#ebe4d8] overflow-hidden">
            <button onClick={() => setViewMode('map')} className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 ${viewMode === 'map' ? 'bg-[#1a3a4a] text-white' : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'}`}>
              🗺️ Map
            </button>
            <button onClick={() => setViewMode('list')} className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 ${viewMode === 'list' ? 'bg-[#1a3a4a] text-white' : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'}`}>
              📋 List
            </button>
          </div>
        </div>
      </div>

      {/* ── MAP VIEW ─────────────────────────────────────────── */}
      {viewMode === 'map' && (
        <div className="flex-1 relative">
          <div className="w-full h-[calc(100vh-80px)]">
            <MapContainer
              center={[34, 108]}
              zoom={4}
              minZoom={4}
              maxZoom={7}
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
              {cities.map((city) => (
                <Marker
                  key={city.key}
                  position={[city.lat, city.lng]}
                  icon={chinaCityIcon(city.name, city.bestFor)}
                >
                  <Popup>
                    <div style={{ minWidth: 240 }}>
                      <div style={{ display: 'flex', gap: 4, marginBottom: 8, overflowX: 'auto' }}>
                        {city.images.slice(0, 5).map((img, i) => (
                          <img key={i} src={`https://picsum.photos/seed/${img}/120/80`} alt="" style={{ width: 48, height: 48, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
                        ))}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#1a3a4a' }}>{city.name}</div>
                      <div style={{ fontSize: 12, color: '#af5d32', fontWeight: 600 }}>{city.bestFor}</div>
                      <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>{city.hook}</div>
                      <a href={city.href} style={{ display: 'inline-block', marginTop: 8, fontSize: 13, fontWeight: 600, color: '#af5d32' }}>Explore {city.name} →</a>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {comingSoon.map((city) => (
                <Marker key={city.key} position={[city.lat, city.lng]} icon={comingSoonMapIcon(city.name)} />
              ))}
            </MapContainer>
          </div>
        </div>
      )}

      {/* ── LIST VIEW ────────────────────────────────────────── */}
      {viewMode === 'list' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link key={city.key} href={city.href} className="group rounded-xl overflow-hidden border border-[#ebe4d8] bg-white hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={`https://picsum.photos/seed/${city.key}-list/600/400`} alt={city.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#af5d32] text-white text-xs font-bold px-2.5 py-1 rounded-full">{city.bestFor}</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#1a3a4a]">{city.name}</h3>
                  <p className="text-xs text-[#af5d32] font-semibold">{city.nameZh}</p>
                  <p className="text-sm text-[#64748b] mt-1">{city.hook}</p>
                  <p className="text-xs text-[#64748b] mt-2">{city.thingsToDo} things to do · {city.whereToEat} restaurants</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32]">Explore →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 border-t border-[#ebe4d8] pt-8">
            <h2 className="text-lg font-bold text-[#1a3a4a] mb-4">Coming Soon</h2>
            <div className="flex flex-wrap gap-3">
              {comingSoon.map((city) => (
                <span key={city.key} className="px-4 py-2 rounded-full bg-[#f5f1ea] text-sm text-[#64748b] border border-[#ebe4d8]">{city.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}