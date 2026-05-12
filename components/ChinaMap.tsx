"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

const cities = [
  {
    name: "Beijing",
    x: 490,
    y: 140,
    hook: "Imperial grandeur meets modern ambition",
    thingsToDo: 7,
    imageSeed: "beijing-map-thumb",
    href: "/destinations/beijing/what-to-do",
  },
  {
    name: "Shanghai",
    x: 580,
    y: 280,
    hook: "Colonial elegance meets tomorrow's skyline",
    thingsToDo: 6,
    imageSeed: "shanghai-map-thumb",
    href: "/destinations/shanghai/what-to-do",
  },
  {
    name: "Xi'an",
    x: 420,
    y: 300,
    hook: "3,000 years of Chinese history in one city",
    thingsToDo: 5,
    imageSeed: "xian-map-thumb",
    href: "/destinations/xian/what-to-do",
  },
  {
    name: "Chengdu",
    x: 330,
    y: 380,
    hook: "Pandas, hotpot, and the slow life",
    thingsToDo: 6,
    imageSeed: "chengdu-map-thumb",
    href: "/destinations/chengdu/what-to-do",
  },
  {
    name: "Chongqing",
    x: 370,
    y: 400,
    hook: "China's cyberpunk megacity",
    thingsToDo: 6,
    imageSeed: "chongqing-map-thumb",
    href: "/destinations/chongqing/what-to-do",
  },
]

const railConnections = [
  { from: 0, to: 1, thick: true }, // Beijing -> Shanghai
  { from: 0, to: 2, thick: false }, // Beijing -> Xi'an
  { from: 2, to: 3, thick: false }, // Xi'an -> Chengdu
  { from: 3, to: 4, thick: false }, // Chengdu -> Chongqing
]

// Simplified stylized China outline
const chinaPath =
  "M 260,180 L 280,160 L 320,140 L 380,120 L 440,100 L 500,90 L 540,95 L 580,110 L 620,130 L 640,150 L 650,170 L 640,190 L 620,210 L 600,230 L 610,250 L 630,270 L 640,290 L 630,310 L 610,330 L 580,350 L 550,370 L 520,390 L 500,410 L 480,430 L 450,450 L 420,470 L 400,480 L 380,490 L 350,500 L 320,510 L 290,520 L 270,510 L 250,490 L 240,470 L 250,450 L 260,430 L 270,410 L 280,390 L 290,370 L 300,350 L 310,330 L 320,310 L 330,290 L 310,280 L 290,270 L 270,260 L 250,250 L 240,230 L 230,210 L 220,190 L 240,180 Z"

const facts = [
  { label: "1.4B+", sub: "Population" },
  { label: "15–30 Days", sub: "visa-free" },
  { label: "¥ (CNY)", sub: "Currency" },
  { label: "9.6M km²", sub: "Area" },
]

export default function ChinaMap() {
  const [activeCity, setActiveCity] = useState<number | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleMouseEnter = useCallback((index: number) => {
    setActiveCity(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveCity(null)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGGElement>) => {
    const rect = e.currentTarget.closest("svg")?.getBoundingClientRect()
    if (!rect) return
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handlePinClick = useCallback((index: number) => {
    setActiveCity((prev) => (prev === index ? null : index))
  }, [])

  return (
    <div className="w-full">
      {/* Desktop SVG Map */}
      <div className="relative mx-auto hidden max-w-4xl md:block">
        <svg
          viewBox="0 0 800 600"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* China outline */}
          <path
            d={chinaPath}
            fill="#f5f1ea"
            stroke="#ebe4d8"
            strokeWidth={1.5}
            filter="url(#softShadow)"
          />

          {/* Rail connection lines */}
          {railConnections.map((conn, i) => {
            const a = cities[conn.from]
            const b = cities[conn.to]
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={conn.thick ? "#af5d32" : "#ebe4d8"}
                strokeWidth={conn.thick ? 1.5 : 1}
                strokeDasharray="6 4"
                opacity={conn.thick ? 0.6 : 0.4}
              />
            )
          })}

          {/* City pins */}
          {cities.map((city, i) => (
            <g
              key={city.name}
              className="cursor-pointer transition-transform duration-200"
              style={{
                transformOrigin: `${city.x}px ${city.y}px`,
              }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onClick={() => handlePinClick(i)}
            >
              {/* Pulsing ring */}
              <circle
                cx={city.x}
                cy={city.y}
                r={6}
                fill="none"
                stroke="#af5d32"
                strokeWidth={1.5}
                opacity={0.4}
              >
                <animate
                  attributeName="r"
                  values="6;16"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Outer pin */}
              <circle cx={city.x} cy={city.y} r={6} fill="#af5d32" />

              {/* Inner dot */}
              <circle cx={city.x} cy={city.y} r={3} fill="white" />

              {/* City label */}
              <text
                x={city.x}
                y={city.y + 20}
                textAnchor="middle"
                fontSize={11}
                fontWeight={700}
                fill="#1a3a4a"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                {city.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {activeCity !== null && (
          <div
            className="pointer-events-none absolute z-10 w-56 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-lg"
            style={{
              left: Math.min(
                Math.max(tooltipPos.x + 16, 0),
                800 - 240
              ),
              top: Math.min(
                Math.max(tooltipPos.y - 60, 0),
                600 - 180
              ),
            }}
          >
            <Image
              src={`https://picsum.photos/seed/${cities[activeCity].imageSeed}/400/200`}
              alt={cities[activeCity].name}
              width={400}
              height={200}
              className="mb-3 h-24 w-full rounded-lg object-cover"
            />
            <h4 className="text-base font-bold text-[#1a3a4a]">
              {cities[activeCity].name}
            </h4>
            <p className="mt-1 text-sm text-[#64748b]">
              {cities[activeCity].hook}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-[#f5f1ea] px-2.5 py-0.5 text-xs text-[#1a3a4a]">
                {cities[activeCity].thingsToDo} things to do
              </span>
              <span className="text-sm font-semibold text-[#af5d32]">
                Explore →
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile: City list cards */}
      <div className="space-y-4 md:hidden">
        {cities.map((city) => (
          <Link
            key={city.name}
            href={city.href}
            className="flex items-start gap-4 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <Image
              src={`https://picsum.photos/seed/${city.imageSeed}/120/120`}
              alt={city.name}
              width={120}
              height={120}
              className="h-20 w-20 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <h4 className="text-base font-bold text-[#1a3a4a]">{city.name}</h4>
              <p className="mt-0.5 text-sm text-[#64748b]">{city.hook}</p>
              <span className="mt-2 inline-flex items-center rounded-full bg-[#f5f1ea] px-2.5 py-0.5 text-xs text-[#1a3a4a]">
                {city.thingsToDo} things to do
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Facts bar */}
      <div className="mt-8 grid grid-cols-2 gap-3 rounded-xl bg-[#f5f1ea] p-4 sm:grid-cols-4 md:mt-10 md:p-6">
        {facts.map((f) => (
          <div key={f.label} className="text-center">
            <div className="text-lg font-bold text-[#1a3a4a] md:text-xl">
              {f.label}
            </div>
            <div className="mt-0.5 text-xs uppercase tracking-wider text-[#64748b] md:text-sm">
              {f.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
