'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// ── Data ─────────────────────────────────────────────────────────────
interface City {
  name: string;
  lat: number;
  lng: number;
  bestFor: string;
  hook: string;
  thingsToDo: number;
  whereToEat: number;
  imageSeed: string;
  href: string;
  comingSoon?: boolean;
  labelOffset?: { x: number; y: number };
}

const cities: City[] = [
  {
    name: 'Beijing',
    lat: 39.9042,
    lng: 116.4074,
    bestFor: 'History & Culture',
    hook: 'Imperial grandeur meets modern ambition',
    thingsToDo: 7,
    whereToEat: 6,
    imageSeed: 'beijing-map-thumb',
    href: '/destinations/beijing/what-to-do',
    labelOffset: { x: 20, y: -5 },
  },
  {
    name: 'Shanghai',
    lat: 31.2304,
    lng: 121.4737,
    bestFor: 'Modern & Nightlife',
    hook: "Colonial elegance meets tomorrow's skyline",
    thingsToDo: 6,
    whereToEat: 5,
    imageSeed: 'shanghai-map-thumb',
    href: '/destinations/shanghai/what-to-do',
    labelOffset: { x: 20, y: 0 },
  },
  {
    name: "Xi'an",
    lat: 34.2658,
    lng: 108.9541,
    bestFor: 'Ancient Wonders',
    hook: '3,000 years of Chinese history in one city',
    thingsToDo: 5,
    whereToEat: 4,
    imageSeed: 'xian-map-thumb',
    href: '/destinations/xian/what-to-do',
    labelOffset: { x: -60, y: 0 },
  },
  {
    name: 'Chengdu',
    lat: 30.5728,
    lng: 104.0668,
    bestFor: 'Food & Pandas',
    hook: 'Pandas, hotpot, and the slow life',
    thingsToDo: 6,
    whereToEat: 4,
    imageSeed: 'chengdu-map-thumb',
    href: '/destinations/chengdu/what-to-do',
    labelOffset: { x: -60, y: 0 },
  },
  {
    name: 'Chongqing',
    lat: 29.4316,
    lng: 106.9123,
    bestFor: 'Urban Adventure',
    hook: "China's cyberpunk megacity",
    thingsToDo: 6,
    whereToEat: 3,
    imageSeed: 'chongqing-map-thumb',
    href: '/destinations/chongqing/what-to-do',
    labelOffset: { x: 20, y: 10 },
  },
  // ── Coming Soon cities ──────────────────────────────────────────
  {
    name: 'Hangzhou',
    lat: 30.2741,
    lng: 120.1551,
    bestFor: 'West Lake & Tea Culture',
    hook: 'Serene lake landscapes and centuries of tea tradition',
    thingsToDo: 5,
    whereToEat: 4,
    imageSeed: 'hangzhou-map-thumb',
    href: '#',
    comingSoon: true,
    labelOffset: { x: -60, y: 20 },
  },
  {
    name: 'Suzhou',
    lat: 31.2990,
    lng: 120.5853,
    bestFor: 'Gardens & Canals',
    hook: 'Classical gardens and silk-lined waterways',
    thingsToDo: 4,
    whereToEat: 3,
    imageSeed: 'suzhou-map-thumb',
    href: '#',
    comingSoon: true,
    labelOffset: { x: -80, y: 0 },
  },
  {
    name: 'Guilin',
    lat: 25.2744,
    lng: 110.2900,
    bestFor: 'Karst Mountains',
    hook: 'Otherworldly limestone peaks along the Li River',
    thingsToDo: 5,
    whereToEat: 3,
    imageSeed: 'guilin-map-thumb',
    href: '#',
    comingSoon: true,
    labelOffset: { x: 20, y: 0 },
  },
  {
    name: 'Guangzhou',
    lat: 23.1291,
    lng: 113.2644,
    bestFor: 'Canton & Dim Sum',
    hook: 'Birthplace of Cantonese cuisine and dim sum culture',
    thingsToDo: 5,
    whereToEat: 5,
    imageSeed: 'guangzhou-map-thumb',
    href: '#',
    comingSoon: true,
    labelOffset: { x: -80, y: 0 },
  },
  {
    name: 'Nanjing',
    lat: 32.0603,
    lng: 118.7969,
    bestFor: 'Ancient Capital',
    hook: 'Former capital steeped in wartime and dynastic history',
    thingsToDo: 6,
    whereToEat: 4,
    imageSeed: 'nanjing-map-thumb',
    href: '#',
    comingSoon: true,
    labelOffset: { x: -70, y: 0 },
  },
  {
    name: 'Lhasa',
    lat: 29.6500,
    lng: 91.1000,
    bestFor: 'Tibetan Heartland',
    hook: 'Potala Palace and high-altitude spirituality',
    thingsToDo: 4,
    whereToEat: 2,
    imageSeed: 'lhasa-map-thumb',
    href: '#',
    comingSoon: true,
    labelOffset: { x: 20, y: 0 },
  },
  {
    name: 'Kunming',
    lat: 25.0389,
    lng: 102.7183,
    bestFor: 'Spring City',
    hook: 'Eternal spring and gateway to Yunnan minority culture',
    thingsToDo: 5,
    whereToEat: 3,
    imageSeed: 'kunming-map-thumb',
    href: '#',
    comingSoon: true,
  },
];

// ── Custom city marker icon with visible name + tag ────────────────
const cityIcon = (city: City, isHovered: boolean) => {
  const offsetX = city.labelOffset?.x ?? 20;
  const offsetY = city.labelOffset?.y ?? 0;
  const dotSize = city.comingSoon ? 8 : 14;
  const dotStyle = city.comingSoon
    ? `width: ${dotSize}px; height: ${dotSize}px; background: #94a3b8; border: 2px solid white;`
    : `width: ${dotSize}px; height: ${dotSize}px; background: #af5d32; border: 3px solid white;`;
  const nameColor = city.comingSoon ? '#64748b' : '#1a3a4a';
  const tagColor = city.comingSoon ? '#94a3b8' : '#af5d32';
  const comingSoonBadge = city.comingSoon
    ? '<span class="coming-soon-badge">Coming Soon</span>'
    : '';
  const labelStyle = city.labelOffset
    ? `left: ${offsetX}px; top: ${offsetY}px; transform: none;`
    : `left: ${offsetX}px; top: 50%; transform: translateY(-50%);`;

  const iconSize = city.comingSoon ? [32, 32] : [44, 44];
  const iconAnchor = city.comingSoon ? [16, 16] : [22, 22];

  return L.divIcon({
    className: `custom-city-marker${city.comingSoon ? ' coming-soon-marker' : ''}`,
    html: `
      <div class="city-marker-wrapper" data-coming-soon="${city.comingSoon ? 'true' : 'false'}">
        <div style="position: relative; width: ${iconSize[0]}px; height: ${iconSize[1]}px; display: flex; align-items: center; justify-content: center;">
          <div class="city-marker-pulse ${isHovered ? 'pulsing' : ''}"></div>
          <div class="city-marker-dot" style="${dotStyle}"></div>
        </div>
        <div class="city-marker-label" style="${labelStyle}">
          <span class="city-name" style="color: ${nameColor}">${city.name}</span>
          <span class="city-tag" style="color: ${tagColor}">${city.bestFor}</span>
          ${comingSoonBadge}
        </div>
      </div>
    `,
    iconSize: iconSize as [number, number],
    iconAnchor: iconAnchor as [number, number],
  });
};

// ── PhotoCard component ─────────────────────────────────────────────
function PhotoCard({
  title,
  preview,
  imageSrc,
  imageAlt,
  href,
  index,
}: {
  title: string;
  preview: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  index: number;
}) {
  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-xl border border-[#ebe4d8] bg-white shadow-sm transition-all duration-200 hover:shadow-md"
    >
      <article className="grid md:grid-cols-[200px_1fr]">
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-48 w-full object-cover md:h-full"
          />
        </div>
        <div className="p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">
            Destination
          </p>
          <h3 className="mt-2 text-xl font-bold text-[#1f2933] md:text-2xl">
            {index + 1}. {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#4a5568] md:text-base">
            {preview}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] md:text-base">
            Explore →
          </span>
        </div>
      </article>
    </Link>
  );
}

// ── Hover Tooltip (positioned above marker, clickable) ─────────────
function HoverTooltip({
  city,
  position,
  mapRef,
  onMouseEnter,
  onMouseLeave,
}: {
  city: City;
  position: L.LatLng;
  mapRef: React.RefObject<L.Map | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const updatePosition = () => {
      const point = map.latLngToContainerPoint(position);
      setCoords({ x: point.x, y: point.y });
    };

    updatePosition();
    map.on('move zoom', updatePosition);
    return () => {
      map.off('move zoom', updatePosition);
    };
  }, [position, mapRef]);

  if (!coords) return null;

  const tooltipWidth = 260;
  const tooltipHeight = city.comingSoon ? 180 : 220;
  const gap = 8;
  const padding = 12;

  // Position above the marker by default
  let left = coords.x - tooltipWidth / 2;
  let top = coords.y - tooltipHeight - gap;

  const mapContainer = mapRef.current?.getContainer();
  const cw = mapContainer?.offsetWidth || 800;
  const ch = mapContainer?.offsetHeight || 500;

  // Horizontal clamp
  left = Math.max(padding, Math.min(left, cw - tooltipWidth - padding));

  // If tooltip goes above the map, place it below the marker
  if (top < padding) {
    top = coords.y + gap + 14; // 14px = marker dot radius
  }
  // Ensure it doesn't go below the map
  if (top + tooltipHeight > ch - padding) {
    top = ch - tooltipHeight - padding;
  }

  return (
    <div
      className={`absolute z-[80] rounded-xl border border-[#ebe4d8] bg-white p-3 shadow-xl transition-all duration-150 ${
        city.comingSoon
          ? ''
          : 'cursor-pointer hover:shadow-2xl hover:border-[#af5d32]'
      }`}
      style={{
        left,
        top,
        width: tooltipWidth,
        pointerEvents: 'auto',
        animation: 'tooltip-fade-in 0.2s ease',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!city.comingSoon ? (
        <Link href={city.href} className="block">
          <img
            src={`https://picsum.photos/seed/${city.imageSeed}/400/200`}
            alt={city.name}
            className="mb-2 h-[60px] w-full rounded-lg object-cover"
            loading="eager"
          />
          <h4 className="text-base font-bold text-[#1a3a4a]">{city.name}</h4>
          <p className="mt-0.5 text-xs font-semibold text-[#af5d32]">
            {city.bestFor}
          </p>
          <p className="mt-1 text-sm leading-snug text-[#64748b]">{city.hook}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-[#64748b]">
            <span className="rounded-full bg-[#f5f1ea] px-2 py-0.5 font-medium text-[#1a3a4a]">
              {city.thingsToDo} things to do
            </span>
            <span>·</span>
            <span className="rounded-full bg-[#f5f1ea] px-2 py-0.5 font-medium text-[#1a3a4a]">
              {city.whereToEat} where to eat
            </span>
          </div>
        </Link>
      ) : (
        <>
          <img
            src={`https://picsum.photos/seed/${city.imageSeed}/400/200`}
            alt={city.name}
            className="mb-2 h-[60px] w-full rounded-lg object-cover"
            loading="eager"
          />
          <h4 className="text-base font-bold text-[#1a3a4a]">{city.name}</h4>
          <p className="mt-0.5 text-xs font-semibold text-[#af5d32]">
            {city.bestFor}
          </p>
          <p className="mt-1 text-sm leading-snug text-[#64748b]">{city.hook}</p>
          <span className="mt-2 inline-block rounded-full bg-[#f5f1ea] px-2 py-0.5 text-xs font-semibold text-[#94a3b8]">
            Coming Soon
          </span>
        </>
      )}
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────
export default function MapInnerV3() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [tappedCity, setTappedCity] = useState<string | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const activeTooltipCity = hoveredCity || tappedCity;

  const activeCityData = useMemo(
    () => cities.find((c) => c.name === activeTooltipCity) || null,
    [activeTooltipCity]
  );

  const activeLatLng = useMemo(() => {
    if (!activeCityData) return null;
    return new L.LatLng(activeCityData.lat, activeCityData.lng);
  }, [activeCityData]);

  const handleMarkerEnter = (name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setHoveredCity(name);
  };

  const handleMarkerLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredCity(null);
    }, 300);
  };

  const handleMarkerClick = (name: string) => {
    setTappedCity((prev) => (prev === name ? null : name));
  };

  const handleMapBackgroundClick = () => {
    setTappedCity(null);
  };

  const handleTooltipEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleTooltipLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredCity(null);
    }, 300);
  };

  const cityCards = useMemo(
    () => [
      {
        title: 'Beijing',
        preview:
          'The ancient capital with 3,000 years of history. Home to the Great Wall, Forbidden City, and some of the best street food on the planet.',
        imageSrc: '/images/beijing/great-wall.jpg',
        imageAlt: 'The Great Wall near Beijing',
        href: '/destinations/beijing',
      },
      {
        title: 'Shanghai',
        preview:
          "China's futuristic financial hub where colonial-era architecture meets glittering skyscrapers. Walk the Bund, explore hidden alleyways, and eat your way through the city's incredible food scene.",
        imageSrc: '/images/shanghai/bund-skyline.jpg',
        imageAlt: 'Shanghai skyline at night',
        href: '/destinations/shanghai',
      },
      {
        title: "Xi'an",
        preview:
          "The gateway to the Silk Road and the legendary Terracotta Warriors. Walk the ancient city wall, explore Muslim Quarter street food, and discover a city where history lives.",
        imageSrc: '/images/xian/terracotta-warriors.jpg',
        imageAlt: "Terracotta Warriors in Xi'an",
        href: '/destinations/xian',
      },
      {
        title: 'Chengdu',
        preview:
          'Home of the giant pandas, fiery Sichuan hotpot, and the most relaxed vibe of any Chinese megacity. Spend days in teahouses, nights in spice markets.',
        imageSrc: '/images/chengdu/pandas.jpg',
        imageAlt: 'Giant pandas in Chengdu',
        href: '/destinations/chengdu',
      },
      {
        title: 'Chongqing',
        preview:
          'The mountain city built on cliffs above the Yangtze River. Famous for the hottest hotpot in China, vertical streets, and a cyberpunk skyline.',
        imageSrc: '/images/chongqing/skyline-night.jpg',
        imageAlt: 'Chongqing skyline at night',
        href: '/destinations/chongqing',
      },
    ],
    []
  );

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-[#64748b]">Loading map…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Inject custom marker + pulse CSS */}
      <style jsx global>{`
        @keyframes map-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(175, 93, 50, 0.6);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(175, 93, 50, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(175, 93, 50, 0);
          }
        }

        @keyframes map-pulse-muted {
          0% {
            box-shadow: 0 0 0 0 rgba(148, 163, 184, 0.5);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(148, 163, 184, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(148, 163, 184, 0);
          }
        }

        .custom-city-marker {
          background: transparent !important;
          border: none !important;
          width: auto !important;
          height: auto !important;
          white-space: nowrap;
        }

        .city-marker-wrapper {
          position: relative;
        }

        .city-marker-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(175, 93, 50, 0.4);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .city-marker-wrapper[data-coming-soon="true"] .city-marker-pulse {
          width: 16px;
          height: 16px;
          background: rgba(148, 163, 184, 0.35);
        }

        .city-marker-pulse.pulsing {
          opacity: 1;
          animation: map-pulse 2s ease-out infinite;
        }

        .city-marker-wrapper[data-coming-soon="true"] .city-marker-pulse.pulsing {
          animation: map-pulse-muted 2s ease-out infinite;
        }

        .city-marker-dot {
          position: relative;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          z-index: 2;
          transition: transform 0.15s ease;
          cursor: pointer;
        }

        .city-marker-dot:hover {
          transform: scale(1.15);
        }

        .city-marker-label {
          position: absolute;
          top: 50%;
          white-space: nowrap;
          pointer-events: none;
          z-index: 3;
        }

        .city-name {
          display: block;
          font-size: 13px;
          font-weight: 700;
          text-shadow: 0 0 4px white, 0 0 8px white;
          background: rgba(255, 255, 255, 0.85);
          padding: 1px 6px;
          border-radius: 4px;
          line-height: 1.3;
        }

        .city-tag {
          display: block;
          font-size: 10px;
          font-weight: 600;
          margin-top: 1px;
          text-shadow: 0 0 4px white, 0 0 8px white;
          line-height: 1.3;
        }

        .coming-soon-badge {
          display: block;
          font-size: 9px;
          font-weight: 600;
          color: #94a3b8;
          margin-top: 2px;
          text-shadow: 0 0 4px white, 0 0 8px white;
          line-height: 1.3;
          letter-spacing: 0.02em;
        }

        .coming-soon-marker .city-name {
          font-size: 10px;
          padding: 0 3px;
        }

        .coming-soon-marker .city-tag {
          font-size: 8px;
          display: none;
        }

        .coming-soon-marker .coming-soon-badge {
          display: none;
        }

        .coming-soon-marker .city-marker-dot {
          width: 8px;
          height: 8px;
        }

        .coming-soon-marker .city-marker-pulse {
          width: 12px;
          height: 12px;
        }

        /* Custom tooltip animation */
        @keyframes tooltip-fade-in {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Z-index fix: keep Leaflet layers below navbar */
        .leaflet-pane {
          z-index: 10 !important;
        }
        .leaflet-top,
        .leaflet-bottom {
          z-index: 20 !important;
        }
      `}</style>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* ── Hero ── */}
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-6xl">
            Explore China
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#64748b] md:mx-0">
            Incredible cities, thousands of years of history, one unforgettable
            trip
          </p>
        </div>

        {/* ── Leaflet Map ── */}
        <section className="mt-10 md:mt-14">
          <div className="overflow-hidden rounded-xl border border-[#ebe4d8] shadow-sm">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] z-10">
              <MapContainer
                center={[33, 108]}
                zoom={4}
                minZoom={3}
                maxZoom={10}
                scrollWheelZoom={true}
                touchZoom={true}
                style={{ height: '100%', width: '100%' }}
                ref={mapRef}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {/* City markers — hover + tap triggers tooltip */}
                {cities.map((city) => (
                  <Marker
                    key={city.name}
                    position={[city.lat, city.lng]}
                    icon={cityIcon(city, activeTooltipCity === city.name)}
                    eventHandlers={{
                      mouseover: () => handleMarkerEnter(city.name),
                      mouseout: () => handleMarkerLeave(),
                      click: () => {
                        handleMarkerClick(city.name);
                      },
                    }}
                  />
                ))}
              </MapContainer>

              {/* Custom hover/tap tooltip overlay */}
              {activeCityData && activeLatLng && mapRef.current && (
                <div
                  className="absolute inset-0 z-[900]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMapBackgroundClick();
                  }}
                >
                  <HoverTooltip
                    city={activeCityData}
                    position={activeLatLng}
                    mapRef={mapRef}
                    onMouseEnter={handleTooltipEnter}
                    onMouseLeave={handleTooltipLeave}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Plan Your Trip CTA (compact) ── */}
        <section className="mt-8">
          <div className="rounded-2xl bg-[#1a3a4a] p-4 text-center md:p-6">
            <h2 className="mb-2 text-lg font-bold text-white md:text-xl">
              Ready to Explore China?
            </h2>
            <p className="mx-auto mb-4 max-w-lg text-xs text-white/70 md:text-sm">
              Get a ready-made itinerary or build your own with our travel planner.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Link
                href="/plan-your-trip/preplanned-trips"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#9a4f28]"
              >
                Find Your Perfect Trip
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/plan-your-trip/travel-planner"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Plan Your Own Trip
              </Link>
            </div>
          </div>
        </section>

        {/* ── Browse by City ── */}
        <section className="mt-16 md:mt-20">
          <h2 className="mb-8 text-2xl font-bold text-[#1a3a4a] md:text-3xl">
            Browse by City
          </h2>
          <div className="space-y-6">
            {cityCards.map((card, index) => (
              <PhotoCard key={card.href} {...card} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
