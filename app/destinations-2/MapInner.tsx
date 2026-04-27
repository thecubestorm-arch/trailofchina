'use client';

import { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Link from 'next/link';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';

// ── Fix default icon paths ──────────────────────────────────────────
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// ── City data ──────────────────────────────────────────────────────
const cities = [
  {
    name: 'Beijing',
    lat: 39.9042,
    lng: 116.4074,
    hook: 'Imperial grandeur meets modern ambition',
    thingsToDo: 7,
    imageSeed: 'beijing-map-thumb',
    href: '/destinations/beijing',
  },
  {
    name: 'Shanghai',
    lat: 31.2304,
    lng: 121.4737,
    hook: "Colonial elegance meets tomorrow's skyline",
    thingsToDo: 6,
    imageSeed: 'shanghai-map-thumb',
    href: '/destinations/shanghai',
  },
  {
    name: "Xi'an",
    lat: 34.2658,
    lng: 108.9541,
    hook: '3,000 years of Chinese history in one city',
    thingsToDo: 5,
    imageSeed: 'xian-map-thumb',
    href: '/destinations/xian',
  },
  {
    name: 'Chengdu',
    lat: 30.5728,
    lng: 104.0668,
    hook: 'Pandas, hotpot, and the slow life',
    thingsToDo: 6,
    imageSeed: 'chengdu-map-thumb',
    href: '/destinations/chengdu',
  },
  {
    name: 'Chongqing',
    lat: 29.4316,
    lng: 106.9123,
    hook: "China's cyberpunk megacity",
    thingsToDo: 6,
    imageSeed: 'chongqing-map-thumb',
    href: '/destinations/chongqing',
  },
];

// ── Custom terracotta marker icon ────────────────────────────────────
const cityIcon = L.divIcon({
  className: 'custom-city-marker',
  html: `<div class="city-marker-dot"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -12],
});

// ── Info pills ─────────────────────────────────────────────────────
const infoPills = [
  { label: '1.4B+', sub: 'Population' },
  { label: '15 Days', sub: 'visa-free' },
  { label: '¥ (CNY)', sub: 'Currency' },
  { label: '9.6M km²', sub: 'Area' },
];

// ── PhotoCard component (matching site style) ─────────────────────
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
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
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

// ── Main component ──────────────────────────────────────────────────
export default function MapInner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* Inject custom marker CSS */}
      <style jsx global>{`
        .custom-city-marker {
          background: transparent !important;
          border: none !important;
        }
        .city-marker-dot {
          width: 20px;
          height: 20px;
          background: #af5d32;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-content {
          margin: 12px 16px;
          font-family: inherit;
        }
      `}</style>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* ── Hero ── */}
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-6xl">
            Explore China
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#64748b] md:mx-0">
            5 incredible cities, thousands of years of history, one unforgettable
            trip
          </p>

          {/* Quick info pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {infoPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f1ea] px-3 py-1 text-sm text-[#1f2933]"
              >
                <strong>{pill.label}</strong>
                <span className="text-[#64748b]">{pill.sub}</span>
              </span>
            ))}
          </div>
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
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {cities.map((city) => (
                  <Marker
                    key={city.name}
                    position={[city.lat, city.lng]}
                    icon={cityIcon}
                  >
                    <Popup>
                      <div className="min-w-[200px]">
                        <div className="relative mb-2 h-[100px] w-full overflow-hidden rounded-lg">
                          <Image
                            src={`https://picsum.photos/seed/${city.imageSeed}/400/200`}
                            alt={city.name}
                            fill
                            className="object-cover"
                            sizes="200px"
                          />
                        </div>
                        <h4
                          className="text-lg font-bold"
                          style={{ color: '#1a3a4a' }}
                        >
                          {city.name}
                        </h4>
                        <p
                          className="mt-1 text-sm"
                          style={{ color: '#64748b' }}
                        >
                          {city.hook}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-[#f5f1ea] px-2.5 py-0.5 text-xs font-medium text-[#1f2933]">
                            {city.thingsToDo} things to do
                          </span>
                        </div>
                        <Link
                          href={city.href}
                          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32]"
                        >
                          Explore →
                        </Link>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {/* City labels overlay */}
              {cities.map((city) => {
                // Approximate pixel position at zoom 4 — Leaflet handles this natively,
                // but we use native Leaflet tooltips for labels instead of DOM overlay
                return null;
              })}
            </div>
          </div>
        </section>

        {/* ── China Facts Bar ── */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#f5f1ea] p-6 text-center md:grid-cols-4">
            {infoPills.map((pill) => (
              <div key={pill.label}>
                <div className="text-xl font-bold text-[#1a3a4a]">
                  {pill.label}
                </div>
                <div className="mt-1 text-sm text-[#64748b]">{pill.sub}</div>
              </div>
            ))}
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
