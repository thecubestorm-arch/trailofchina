'use client'

import { useState, FormEvent } from 'react'
import { MapPin } from 'lucide-react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const GOOGLE_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwF8BMqJvlTOzi8RvaZt4IavOOfrTQLTbDSc0qqoY87vi4NHJTNsVQh44cCDwfPF0-zIA/exec'

export default function InteractiveMapClient() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const normalizedEmail = email.trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    try {
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalizedEmail,
          date: new Date().toISOString(),
          source: 'interactive-map-notify',
        }),
      }).catch(() => {})

      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20 text-center">
        <div className="mb-8">
          <MapPin className="mx-auto text-[#af5d32]" size={64} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a3a4a]">Interactive Map</h1>

        <p className="text-lg md:text-xl text-[#64748b] mb-8 max-w-xl mx-auto">
          Explore China&apos;s destinations on an interactive map. Coming soon!
        </p>

        <div className="bg-[#f5f1ea] rounded-xl p-6 md:p-8 max-w-lg mx-auto mb-10">
          <h2 className="font-semibold text-[#1a3a4a] mb-4">What to expect:</h2>
          <ul className="text-[#64748b] space-y-2 text-left">
            <li>✓ Clickable destinations across China</li>
            <li>✓ Route planning between cities</li>
            <li>✓ Points of interest markers</li>
            <li>✓ Travel time estimates</li>
          </ul>
        </div>

        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-green-700 font-semibold mb-1">You&apos;re on the list! 🎉</p>
            <p className="text-green-600 text-sm">We&apos;ll notify you when the interactive map launches.</p>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-[#64748b] mb-4">Want to be notified when it&apos;s ready?</p>
            <form onSubmit={handleSubmit} className="flex gap-2 justify-center max-w-md mx-auto">
              <input
                id="map-notify-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-[#ebe4d8] rounded-lg px-4 py-2.5 text-sm text-[#1a3a4a] placeholder:text-[#64748b]/60 focus:border-[#af5d32] focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#af5d32] text-white px-6 py-2.5 rounded-lg hover:bg-[#9a4f28] transition-colors text-sm font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Notify Me'}
              </button>
            </form>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        )}

        <div className="mt-12 text-sm text-[#64748b]">
          <p>Expected launch: Q2 2026</p>
        </div>
      </main>
    </div>
  )
}