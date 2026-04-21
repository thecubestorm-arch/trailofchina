'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'trail_of_china_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY)
    setVisible(!savedConsent)
  }, [])

  function handleAccept() {
    window.localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--line)] bg-[#f5f1ea]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[var(--muted)]">
          This site uses cookies to support essential functionality, analytics, and affiliate attribution.
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8f431c]"
          >
            Accept
          </button>
          <Link
            href="/cookie-policy"
            className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
