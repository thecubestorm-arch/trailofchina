'use client'

import { FormEvent, useState } from 'react'
import { pdf } from '@react-pdf/renderer'
import ChinaChecklistPdf from '@/components/ChinaChecklistPdf'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const STORAGE_KEY = 'trail_of_china_checklist_emails'

export default function ChecklistDownload() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const saveEmailForMarketing = (value: string) => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
      const current = Array.isArray(parsed) ? parsed : []
      const next = [{ email: value, capturedAt: new Date().toISOString() }, ...current]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      const fallback = [{ email: value, capturedAt: new Date().toISOString() }]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    const normalizedEmail = email.trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    try {
      const blob = await pdf(<ChinaChecklistPdf />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'china-arrival-checklist-trail-of-china.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)

      // TODO: replace localStorage capture with server-side marketing endpoint integration.
      saveEmailForMarketing(normalizedEmail)

      setSuccess('Your checklist is downloading! Check your inbox for more China travel tips.')
      setEmail('')
    } catch {
      setError('Something went wrong while generating your PDF. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="rounded-[1.75rem] border border-[#ebe4d8] bg-[#fffaf3] px-5 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#af5d32]">Free Download</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-[#1f2933] sm:text-4xl">Download Your China Arrival Checklist</h2>
        <p className="mt-4 text-base leading-7 text-[#34404b]">
          Get a detailed 2-page checklist of everything to do before and after landing. Free.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-start">
          <label htmlFor="checklist-email" className="sr-only">
            Email address
          </label>
          <input
            id="checklist-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#d9d0c2] bg-white px-4 py-3 text-[#1f2933] shadow-sm outline-none transition focus:border-[#af5d32] focus:ring-2 focus:ring-[#af5d32]/30 sm:flex-1"
            autoComplete="email"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#af5d32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8f431c] disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isSubmitting ? 'Preparing your checklist...' : 'Get My Free Checklist'}
          </button>
        </form>

        {error ? <p className="mt-3 text-sm text-[#9d2b2b]">{error}</p> : null}
        {success ? <p className="mt-3 text-sm text-[#2f6b3f]">{success}</p> : null}
      </div>
    </section>
  )
}
