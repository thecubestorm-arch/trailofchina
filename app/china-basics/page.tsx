import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'China Basics - Everything You Need to Know',
  description:
    'Master the essentials for your first China trip: apps, internet setup, cultural differences, and transport basics in one practical hub.',
}

const basicsCards = [
  {
    icon: '📱',
    title: 'What Apps to Use',
    href: '/china-basics/what-apps-to-use/',
    description:
      'China runs on super apps, and having the right ones saves you hours from day one. Set up payments, maps, rides, and communication before you land.',
  },
  {
    icon: '🌐',
    title: 'How to Get Internet',
    href: '/china-basics/how-to-get-internet/',
    description:
      'Reliable internet is the difference between smooth travel and constant friction. Compare eSIM and physical SIM options so you can stay connected everywhere.',
  },
  {
    icon: '🧭',
    title: 'How China Differs',
    href: '/china-basics/how-china-differs/',
    description:
      'China can feel very different from Western travel norms in daily life and digital habits. Learn the cultural and practical shifts before they surprise you.',
  },
  {
    icon: '🚄',
    title: 'How to Get Around',
    href: '/china-basics/how-to-get-around/',
    description:
      'High-speed rail, metro systems, and app-based taxis make moving around efficient once you know the system. Use this guide to avoid rookie mistakes and travel confidently.',
  },
]

export default function ChinaBasicsPage() {
  return (
    <section className="container-px mx-auto max-w-6xl py-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-china-red">China Basics</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        China Basics - Everything You Need to Know
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
        This section is built for first-time visitors who want clear, actionable guidance before departure. Pick a topic below and follow the step-by-step playbooks.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {basicsCards.map((card) => (
          <article key={card.title} className="card-base h-full">
            <p className="text-3xl" aria-hidden="true">
              {card.icon}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{card.description}</p>
            <Link href={card.href} className="mt-6 inline-flex text-sm font-bold text-china-red">
              Learn more →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-black text-slate-900">Scam Alert For First-Timers</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
          Be cautious with unsolicited “tour helpers” near train stations and major attractions. If someone pressures you to scan a QR code or enter a random shop, politely decline and walk away.
        </p>
      </div>
    </section>
  )
}
