import Link from 'next/link'

const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'China Basics', href: '/china-basics' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Plan Your Trip', href: '/plan-your-trip' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Apps to Use', href: '/china-basics/what-apps-to-use' },
      { label: 'Internet Setup', href: '/china-basics/how-to-get-internet' },
      { label: 'Getting Around', href: '/china-basics/how-to-get-around' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Interactive Map', href: '/interactive-map' },
      { label: 'Visa-Free 2025', href: '/' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-black text-china-red">Trail of China</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Premium, practical travel guidance for first-time visitors to China.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">{column.title}</h3>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-china-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 py-4">
        <p className="container-px mx-auto max-w-6xl text-xs text-slate-500">
          © {new Date().getFullYear()} Trail of China. Built for confident first-time travel.
        </p>
      </div>
    </footer>
  )
}
