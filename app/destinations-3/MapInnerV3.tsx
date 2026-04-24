'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import Link from 'next/link';
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
}

interface TrainRoute {
  from: string;
  to: string;
  time: string;
  color: string;
  weight: number;
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
  },
];

const trainRoutes: TrainRoute[] = [
  { from: 'Beijing', to: 'Shanghai', time: '4.5h', color: '#af5d32', weight: 2.5 },
  { from: 'Beijing', to: "Xi'an", time: '2.5h', color: '#ebe4d8', weight: 1.5 },
  { from: "Xi'an", to: 'Chengdu', time: '3h', color: '#ebe4d8', weight: 1.5 },
  { from: 'Chengdu', to: 'Chongqing', time: '1h', color: '#ebe4d8', weight: 1.5 },
];

// ── Custom terracotta marker icon with pulsing animation ────────────
const cityIcon = (isHovered: boolean) =>
  L.divIcon({
    className: 'custom-city-marker',
    html: `
      <div class="city-marker-dot ${isHovered ? 'pulsing' : ''}"></div>
      <div class="city-marker-label">
        <div class="city-marker-name"></div>
        <div class="city-marker-tag"></div>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12],
  });

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

// ── Hover Tooltip (custom HTML overlay) ──────────────────────────────
function HoverTooltip({
  city,
  position,
  mapRef,
}: {
  city: City;
  position: L.LatLng;
  mapRef: React.RefObject<L.Map | null>;
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

  // Keep tooltip inside map bounds
  const tooltipWidth = 260;
  const tooltipHeight = 220;
  const padding = 16;

  let left = coords.x + 20;
  let top = coords.y - tooltipHeight / 2;

  if (left + tooltipWidth > (mapRef.current?.getContainer().offsetWidth || 800) - padding) {
    left = coords.x - tooltipWidth - 20;
  }
  if (top < padding) top = padding;
  if (top + tooltipHeight > (mapRef.current?.getContainer().offsetHeight || 500) - padding) {
    top = (mapRef.current?.getContainer().offsetHeight || 500) - tooltipHeight - padding;
  }

  return (
    <div
      className="pointer-events-none absolute z-[900] rounded-xl border border-[#ebe4d8] bg-white p-3 shadow-xl transition-opacity duration-150"
      style={{
        left,
        top,
        width: tooltipWidth,
      }}
    >
      <img
        src={`https://picsum.photos/seed/${city.imageSeed}/400/200`}
        alt={city.name}
        className="mb-2 h-[60px] w-full rounded-lg object-cover"
        loading="eager"
      />
      <h4 className="text-base font-bold text-[#1a3a4a]">{city.name}</h4>
      <p className="mt-0.5 text-xs font-semibold text-[#af5d32]">{city.bestFor}</p>
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
      <div className="mt-2 text-sm font-semibold text-[#af5d32]">
        Explore →
      </div>
    </div>
  );
}

// ── Most Popular Route Indicator ────────────────────────────────────
function RouteIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 z-[800] max-w-xs rounded-xl border border-[#ebe4d8] bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#af5d32]">
        Most Popular Route
      </p>
      <p className="mt-1 text-sm font-medium text-[#1a3a4a]">
        Beijing → Xi'an → Chengdu → Chongqing → Shanghai
      </p>
      <div className="mt-2 flex items-center gap-1 text-xs text-[#64748b]">
        <span className="inline-block h-0.5 w-4 bg-[#af5d32]" />
        <span>by bullet train</span>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────
export default function MapInnerV3() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Resolve city coordinates for polylines
  const routePolylines = useMemo(() => {
    const cityMap = new Map(cities.map((c) => [c.name, [c.lat, c.lng] as [number, number]]));
    return trainRoutes
      .map((route) => {
        const from = cityMap.get(route.from);
        const to = cityMap.get(route.to);
        return from && to ? { ...route, from, to } : null;
      })
      .filter(Boolean) as (TrainRoute & { from: [number, number]; to: [number, number] })[];
  }, []);

  const hoveredCityData = useMemo(
    () => cities.find((c) => c.name === hoveredCity) || null,
    [hoveredCity]
  );

  const hoveredLatLng = useMemo(() => {
    if (!hoveredCityData) return null;
    return new L.LatLng(hoveredCityData.lat, hoveredCityData.lng);
  }, [hoveredCityData]);

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
        imageAlt: 'Terracotta Warriors in Xi\'an',
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

        .custom-city-marker {
          background: transparent !important;
          border: none !important;
          width: auto !important;
          height: auto !important;
          white-space: nowrap;
        }

        .city-marker-dot {
          width: 20px;
          height: 20px;
          background: #af5d32;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.15s ease;
        }

        .city-marker-dot:hover {
          transform: scale(1.15);
        }

        .city-marker-dot.pulsing {
          animation: map-pulse 2s infinite;
        }

        /* Always-visible city name label */
        .city-marker-label {
          position: absolute;
          left: 50%;
          top: 26px;
          transform: translateX(-50%);
          text-align: center;
          pointer-events: none;
        }

        .city-marker-name {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #1a3a4a;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9), 0 0 4px rgba(255, 255, 255, 0.8);
          line-height: 1.2;
        }

        .city-marker-tag {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 9px;
          font-weight: 600;
          color: #af5d32;
          margin-top: 1px;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9), 0 0 4px rgba(255, 255, 255, 0.8);
          line-height: 1.2;
        }

        /* Dashed line for train routes */
        .leaflet-overlay-pane svg path {
          transition: stroke-width 0.2s ease;
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
      `}</style>

      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* ── Hero ── */}
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-6xl">
            Explore China
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#64748b] md:mx-0">
            5 incredible cities, thousands of years of history, one unforgettable
            trip
          </p>
        </div>

        {/* ── Leaflet Map ── */}
        <section className="mt-10 md:mt-14">
          <div className="overflow-hidden rounded-xl border border-[#ebe4d8] shadow-sm">
            <div className="relative h-[400px] w-full md:h-[500px]">
              <MapContainer
                center={[33, 108]}
                zoom={4}
                minZoom={3}
                maxZoom={10}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
                ref={mapRef}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {/* Train route polylines */}
                {routePolylines.map((route, i) => (
                  <Polyline
                    key={i}
                    positions={[route.from, route.to]}
                    pathOptions={{
                      color: route.color,
                      weight: route.weight,
                      dashArray: '8 6',
                      opacity: route.color === '#af5d32' ? 0.7 : 0.5,
                      lineCap: 'round',
                    }}
                  />
                ))}

                {/* City markers — no popups, hover triggers tooltip */}
                {cities.map((city) => (
                  <Marker
                    key={city.name}
                    position={[city.lat, city.lng]}
                    icon={cityIcon(hoveredCity === city.name)}
                    eventHandlers={{
                      mouseover: () => setHoveredCity(city.name),
                      mouseout: () => setHoveredCity(null),
                    }}
                  />
                ))}
              </MapContainer>

              {/* Custom hover tooltip overlay */}
              {hoveredCityData && hoveredLatLng && mapRef.current && (
                <HoverTooltip
                  city={hoveredCityData}
                  position={hoveredLatLng}
                  mapRef={mapRef}
                />
              )}

              {/* Most popular route indicator */}
              <RouteIndicator />
            </div>
          </div>
        </section>

        {/* ── Plan Your Trip CTA ── */}
        <section className="mt-8">
          <Link
            href="/plan-your-trip/preplanned-trips"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#1a3a4a] px-6 py-4 text-center text-white transition-colors hover:bg-[#0f252f] md:py-5"
          >
            <span className="text-base font-semibold md:text-lg">
              Ready to plan?
            </span>
            <span className="text-base text-[#af5d32] md:text-lg">
              → Find your perfect China itinerary
            </span>
          </Link>
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

        {/* ── Coming Soon ── */}
        <div className="mt-12 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
          <h3 className="mb-1 font-semibold text-amber-800">
            💡 More Coming Soon
          </h3>
          <p className="text-amber-900">
            Guilin (Karst mountains), Hong Kong, Shenzhen, and more destinations.
          </p>
        </div>
      </main>
    </div>
  );
}
