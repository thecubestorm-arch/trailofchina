'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Polygon, Tooltip, useMap, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { MapPin, List, ArrowRight, Lightbulb, ShieldCheck, X, ChevronLeft, ChevronRight } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import FooterCTA from '@/components/FooterCTA'

const cities = [
  { key: 'beijing', name: 'Beijing', nameZh: '北京', lat: 39.90, lng: 116.41, bestFor: 'History & Culture', hook: 'The capital, the Great Wall, the hutongs', thingsToDo: 7, whereToEat: 6, href: '/destinations/beijing', featured: true, duration: '3-5 days', priceLevel: '$$', bestSeason: 'Mar-May, Sep-Nov',
    images: ['beijing-great-wall', 'beijing-forbidden-city', 'beijing-temple-of-heaven', 'beijing-hutong', 'beijing-duck'],
  },
  { key: 'shanghai', name: 'Shanghai', nameZh: '上海', lat: 31.23, lng: 121.47, bestFor: 'Modern & Nightlife', hook: "Colonial elegance meets tomorrow's skyline", thingsToDo: 6, whereToEat: 5, href: '/destinations/shanghai', featured: true, duration: '3-4 days', priceLevel: '$$', bestSeason: 'Mar-May, Sep-Nov',
    images: ['shanghai-bund', 'shanghai-tower', 'shanghai-yu-garden', 'shanghai-nanjing-road', 'shanghai-night'],
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

const chinaBoundary: [number, number][] = [
  [49.760270, 127.657407], [49.440600, 129.397818], [48.729687, 130.582293], [47.790132, 130.987282],
  [47.788970, 132.506672], [48.183442, 133.373596], [48.478230, 135.026311], [47.578440, 134.500814],
  [47.212467, 134.112362], [46.116927, 133.769644], [45.144066, 133.097127], [45.321162, 131.883454],
  [44.967953, 131.025212], [44.111520, 131.288555], [42.929990, 131.144688], [42.903015, 130.633866],
  [42.395009, 130.640016], [42.985387, 129.994267], [42.424982, 129.596669], [41.994285, 128.052215],
  [41.466772, 128.208433], [41.503152, 127.343783], [41.816569, 126.869083], [41.107336, 126.182045],
  [40.569824, 125.079942], [39.928493, 124.265625], [39.637788, 122.867570], [39.170452, 122.131388],
  [38.897471, 121.054554], [39.360854, 121.585995], [39.750261, 121.376757], [40.422443, 122.168595],
  [40.946390, 121.640359], [40.593388, 120.768629], [39.898056, 119.639602], [39.252333, 119.023464],
  [39.204274, 118.042749], [38.737636, 117.532702], [38.061476, 118.059699], [37.897325, 118.878150],
  [37.448464, 118.911636], [37.156389, 119.702802], [37.870428, 120.823457], [37.481123, 121.711259],
  [37.454484, 122.357937], [36.930614, 122.519995], [36.651329, 121.104164], [36.111440, 120.637009],
  [35.609791, 119.664562], [34.909859, 119.151208], [34.360332, 120.227525], [33.376723, 120.620369],
  [32.460319, 121.229014], [31.692174, 121.908146], [30.949352, 121.891919], [30.676267, 121.264257],
  [30.142915, 121.503519], [29.832520, 122.092114], [29.018022, 121.938428], [28.225513, 121.684439],
  [28.135673, 121.125661], [27.053207, 120.395473], [25.740781, 119.585497], [24.547391, 118.656871],
  [23.624501, 117.281606], [22.782873, 115.890735], [22.668074, 114.763827], [22.223760, 114.152547],
  [22.548340, 113.806780], [22.051367, 113.241078], [21.550494, 111.843592], [21.397144, 110.785466],
  [20.341033, 110.444039], [20.282457, 109.889861], [21.008227, 109.627655], [21.395051, 109.864488],
  [21.715212, 108.522813], [21.552380, 108.050180], [21.811899, 107.043420], [22.218205, 106.567273],
  [22.794268, 106.725403], [22.976892, 105.811247], [23.352063, 105.329209], [22.819150, 104.476858],
  [22.703757, 103.504515], [22.708795, 102.706992], [22.464753, 102.170436], [22.318199, 101.652018],
  [21.174367, 101.803120], [21.201652, 101.270026], [21.436573, 101.180005], [21.849984, 101.150033],
  [21.558839, 100.416538], [21.742937, 99.983489], [22.118314, 99.240899], [22.949039, 99.531992],
  [23.142722, 98.898749], [24.063286, 98.660262], [23.897405, 97.604720], [25.083637, 97.724609],
  [25.918703, 98.671838], [26.743536, 98.712094], [27.508812, 98.682690], [27.747221, 98.246231],
  [28.335945, 97.911988], [28.261583, 97.327114], [28.411031, 96.248833], [28.830980, 96.586591],
  [29.452802, 96.117679], [29.031717, 95.404802], [29.277438, 94.565990], [28.640629, 93.413348],
  [27.896876, 92.503119], [27.771742, 91.696657], [28.040614, 91.258854], [28.064954, 90.730514],
  [28.296439, 90.015829], [28.042759, 89.475810], [27.299316, 88.814248], [28.086865, 88.730326],
  [27.876542, 88.120441], [27.974262, 86.954517], [28.203576, 85.823320], [28.642774, 85.011638],
  [28.839894, 84.234580], [29.320226, 83.898993], [29.463732, 83.337115], [30.115268, 82.327513],
  [30.422717, 81.525804], [30.183481, 81.111256], [30.882715, 79.721367], [31.515906, 78.738894],
  [32.618164, 78.458446], [32.483780, 79.176129], [32.994395, 79.208892], [33.506198, 78.811086],
  [34.321936, 78.912269], [35.494010, 77.837451], [35.898403, 76.192848], [36.666806, 75.896897],
  [37.133031, 75.158028], [37.419990, 74.980002], [37.990007, 74.829986], [38.378846, 74.864816],
  [38.606507, 74.257514], [38.505815, 73.928852], [39.431237, 73.675379], [39.660008, 73.960013],
  [39.893973, 73.822244], [40.366425, 74.776862], [40.562072, 75.467828], [40.427946, 76.526368],
  [41.066486, 76.904484], [41.185316, 78.187197], [41.582243, 78.543661], [42.123941, 80.119430],
  [42.349999, 80.259990], [42.920068, 80.180150], [43.180362, 80.866206], [44.917517, 79.966106],
  [45.317027, 81.947071], [45.539650, 82.458926], [47.330031, 83.180484], [47.000956, 85.164290],
  [47.452969, 85.720484], [48.455751, 85.768233], [48.549182, 86.598776], [49.214981, 87.359970],
  [49.297198, 87.751264], [48.599463, 88.013832], [48.069082, 88.854298], [47.693549, 90.280826],
  [46.888146, 90.970809], [45.719716, 90.585768], [45.286073, 90.945540], [45.115076, 92.133891],
  [44.975472, 93.480734], [44.352332, 94.688929], [44.241331, 95.306875], [43.319449, 95.762455],
  [42.725635, 96.349396], [42.748890, 97.451757], [42.524691, 99.515817], [42.663804, 100.845866],
  [42.514873, 101.833040], [41.907468, 103.312278], [41.908347, 104.522282], [41.597410, 104.964994],
  [42.134328, 106.129316], [42.481516, 107.744773], [42.519446, 109.243596], [42.871234, 110.412103],
  [43.406834, 111.129682], [43.743118, 111.829588], [44.073176, 111.667737], [44.457442, 111.348377],
  [45.102079, 111.873306], [45.011646, 112.436062], [44.808893, 113.463907], [45.339817, 114.460332],
  [45.727235, 115.985096], [46.388202, 116.717868], [46.672733, 117.421701], [46.805412, 118.874326],
  [46.692680, 119.663270], [47.048059, 119.772824], [47.747060, 118.866574], [48.066730, 118.064143],
  [47.697709, 117.295507], [47.853410, 116.308953], [47.726545, 115.742837], [48.135383, 115.485282],
  [49.134598, 116.191802], [49.888531, 116.678801], [49.510983, 117.879244], [50.142883, 119.288461],
  [50.582908, 119.279366], [51.643566, 120.182050], [51.964115, 120.738191], [52.516226, 120.725789],
  [52.753886, 120.177089], [53.251401, 121.003085], [53.431726, 122.245748], [53.458804, 123.571507],
  [53.161045, 125.068211], [52.792799, 125.946349], [51.784255, 126.564399], [51.353894, 126.939157],
  [50.739797, 127.287456], [49.760270, 127.657407],
]

const taiwanBoundary: [number, number][] = [
  [25.300000, 121.560000], [24.860000, 121.860000], [24.100000, 121.820000], [23.300000, 121.520000],
  [22.500000, 121.120000], [21.930000, 120.710000], [22.180000, 120.350000], [22.880000, 120.180000],
  [23.700000, 120.350000], [24.500000, 120.820000], [25.120000, 121.260000], [25.300000, 121.560000],
]

const hainanBoundary: [number, number][] = [
  [20.080000, 110.720000], [19.730000, 111.050000], [19.150000, 110.950000], [18.500000, 110.450000],
  [18.200000, 109.700000], [18.520000, 108.980000], [19.200000, 108.700000], [19.850000, 109.200000],
  [20.080000, 110.720000],
]

const surroundingArea: [number, number][][] = [
  [
    [55.000000, 70.000000],
    [55.000000, 145.000000],
    [15.000000, 145.000000],
    [15.000000, 70.000000],
    [55.000000, 70.000000],
  ],
  chinaBoundary,
  taiwanBoundary,
  hainanBoundary,
]

const chinaFillStyle = {
  fillColor: '#f5f1ea',
  fillOpacity: 0.4,
  color: '#af5d32',
  weight: 2,
  opacity: 0.8,
}

const surroundingAreaStyle = {
  fillColor: '#94a3b8',
  fillOpacity: 0.08,
  color: '#94a3b8',
  weight: 0.5,
  opacity: 0.3,
}

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
  html: '<div style="width:6px;height:6px;background:#94a3b8;border:1.5px solid white;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>',
  iconSize: [10, 10],
  iconAnchor: [5, 5],
})

function MapEventHandler() {
  const map = useMap()

  useEffect(() => {
    map.setMaxBounds([[15, 70], [55, 140]])
    map.setMinZoom(4)
    map.setMaxZoom(8)
  }, [map])

  return null
}

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
  const imagesRef = useRef<HTMLDivElement | null>(null)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updatePos = useCallback(() => {
    if (!city) {
      setPos(null)
      return
    }
    const p = map.latLngToContainerPoint([city.lat, city.lng])
    setPos({ x: p.x, y: p.y })
  }, [city, map])

  const updateImageScrollState = useCallback(() => {
    const container = imagesRef.current
    if (!container) return

    const nextScrollLeft = container.scrollLeft
    const maxScrollLeft = container.scrollWidth - container.clientWidth

    setScrollLeft(nextScrollLeft)
    setCanScrollLeft(nextScrollLeft > 4)
    setCanScrollRight(nextScrollLeft < maxScrollLeft - 4)
  }, [])

  useEffect(() => {
    updatePos()
  }, [updatePos])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (imagesRef.current) {
        imagesRef.current.scrollLeft = 0
      }
      updateImageScrollState()
    })

    return () => cancelAnimationFrame(frame)
  }, [city, updateImageScrollState])

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
          <div className="bg-white rounded-xl shadow-lg border border-[#ebe4d8] min-w-[240px] max-w-[280px] overflow-hidden sm:min-w-[280px] sm:max-w-[320px]">
            <div className="relative group/images px-3 pt-3 pb-1">
              <div
                ref={imagesRef}
                onScroll={updateImageScrollState}
                data-scroll-left={scrollLeft > 0 ? 'true' : 'false'}
                className="flex gap-1 overflow-x-auto scroll-smooth scrollbar-hide overscroll-x-contain snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
              >
                {city.images.map((img, i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${img}/280/180`}
                    alt={`${city.name} ${i + 1}`}
                    className="h-20 w-auto rounded-md object-cover flex-shrink-0 snap-start sm:h-16"
                    loading="lazy"
                  />
                ))}
              </div>
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    imagesRef.current?.scrollBy({ left: -120, behavior: 'smooth' })
                  }}
                  className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full p-1 bg-white/95 text-[#1a3a4a] shadow transition-opacity hover:bg-[#f8f5ef] opacity-100 sm:left-0 sm:h-7 sm:w-7 sm:p-0"
                  aria-label={`Scroll ${city.name} images left`}
                >
                  <ChevronLeft size={14} />
                </button>
              )}
              {canScrollRight && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    imagesRef.current?.scrollBy({ left: 120, behavior: 'smooth' })
                  }}
                  className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full p-1 bg-white/95 text-[#1a3a4a] shadow transition-opacity hover:bg-[#f8f5ef] opacity-100 sm:right-0 sm:h-7 sm:w-7 sm:p-0"
                  aria-label={`Scroll ${city.name} images right`}
                >
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
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
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white drop-shadow-sm" />
          </div>
        </Link>
      </div>
    </div>
  )
}

function MapClickHandler({ onClick }: { onClick: () => void }) {
  useMapEvent('click', onClick)
  return null
}

function FlyToCity({ activePopupCity }: { activePopupCity: string | null }) {
  const map = useMap()

  useEffect(() => {
    if (!activePopupCity) return
    const city = cities.find((item) => item.key === activePopupCity)
    if (!city) return
    map.flyTo([city.lat, city.lng], Math.max(map.getZoom(), 5), {
      duration: 0.8,
    })
  }, [activePopupCity, map])

  return null
}

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
      <FlyToCity activePopupCity={activePopupCity} />
      <Polygon positions={surroundingArea} pathOptions={surroundingAreaStyle} interactive={false} />
      <Polygon positions={chinaBoundary} pathOptions={chinaFillStyle} interactive={false} />
      <Polygon positions={taiwanBoundary} pathOptions={chinaFillStyle} interactive={false} />
      <Polygon positions={hainanBoundary} pathOptions={chinaFillStyle} interactive={false} />
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
          <Tooltip direction="top" offset={[0, -8]} className="!bg-white !text-[#1a3a4a] !border-[#ebe4d8] !rounded-lg !shadow-md !px-2.5 !py-1.5">
            <span className="text-xs font-semibold whitespace-nowrap">
              {city.name} · {city.nameZh} — Coming Soon
            </span>
          </Tooltip>
        </Marker>
      ))}
      <MapPopup city={activeCity} onEnter={onPopupEnter} onLeave={onPopupLeave} onClose={onPopupClose} />
    </>
  )
}

export default function DestinationsMapInner() {
  const [mounted, setMounted] = useState(false)
  const [viewMode, setViewMode] = useState<'list' | 'split'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('destinations-view-mode')
      if (saved === 'split') return 'split'
      const params = new URLSearchParams(window.location.search)
      if (params.get('view') === 'split') return 'split'
    }
    return 'list'
  })
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
                onClick={() => { setViewMode('list'); localStorage.setItem('destinations-view-mode', 'list') }}
                className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#1a3a4a] text-white'
                    : 'bg-white text-[#64748b] hover:bg-[#f5f1ea]'
                }`}
              >
                <List size={14} /> List
              </button>
              <button
                onClick={() => { setViewMode('split'); localStorage.setItem('destinations-view-mode', 'split') }}
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
                  src={`https://picsum.photos/seed/${city.images[0]}/600/400`}
                  alt={city.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCity === city.key ? 'scale-105' : ''}`}
                />
                <div className="absolute inset-0 flex items-center justify-between px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                    className="w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={14} className="text-[#1a3a4a]" />
                  </button>
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                    className="w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight size={14} className="text-[#1a3a4a]" />
                  </button>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
                  {city.images.map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`} />
                  ))}
                </div>
                {city.featured && (
                  <div className="absolute top-3 right-3 bg-[#af5d32] text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <span>★</span> Most Popular
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#1a3a4a]/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {city.bestFor}
                </div>
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

        <div className="mt-12 border-t border-[#ebe4d8] pt-8">
          <h2 className="text-lg font-bold text-[#1a3a4a] mb-4">Coming Soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {comingSoon.map((city) => (
              <div key={city.key} className="group relative rounded-lg overflow-hidden border border-[#ebe4d8] bg-gray-100 aspect-square">
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

      {viewMode === 'split' && (
        <div className="hidden md:flex max-w-6xl mx-auto px-4 py-6 gap-4" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="w-[calc(100vw-2rem)] max-w-[380px] flex-shrink-0 overflow-y-auto pr-2 sm:w-[380px]" style={{ scrollbarWidth: 'thin' }}>
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
                  <div className="w-20 h-[60px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={`https://picsum.photos/seed/${city.key}-thumb/160/120`}
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                  <ArrowRight size={14} className="text-[#af5d32] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t border-[#ebe4d8] pt-4">
              <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">
                Coming Soon
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {comingSoon.map((city) => (
                  <span key={city.key} className="px-2.5 py-1 rounded-full bg-[#f5f1ea] text-xs text-[#64748b]">
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 relative z-0 rounded-xl overflow-hidden border border-[#ebe4d8]">
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
              <TileLayer attribution="&copy; OSM &copy; CARTO" url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
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
            <div style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 1000, width: 36, height: 36, borderRadius: '50%', background: 'white', border: '1px solid #ebe4d8', boxShadow: '0 1px 4px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 14, color: '#1a3a4a', pointerEvents: 'none' }}>N</div>
          </div>
        </div>
      )}

      {mobileMapOpen && (
        <div className="fixed inset-0 z-[80] md:hidden bg-white">
          <div className="relative z-0 h-full w-full">
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
            <TileLayer attribution="&copy; OSM &copy; CARTO" url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
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
          <div style={{ position: 'absolute', bottom: 60, right: 20, zIndex: 1000, width: 36, height: 36, borderRadius: '50%', background: 'white', border: '1px solid #ebe4d8', boxShadow: '0 1px 4px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 14, color: '#1a3a4a', pointerEvents: 'none' }}>N</div>
          </div>
        </div>
      )}

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
