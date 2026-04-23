'use client'

import { FormEvent, useRef, useState } from 'react'
import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'
import ChinaCheatSheet from '@/components/ChinaCheatSheet'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const STORAGE_KEY = 'trail_of_china_checklist_emails'
const GOOGLE_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwF8BMqJvlTOzi8RvaZt4IavOOfrTQLTbDSc0qqoY87vi4NHJTNsVQh44cCDwfPF0-zIA/exec'

export default function ChecklistDownload() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const cheatSheetContainerRef = useRef<HTMLDivElement>(null)

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

    try {
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalizedEmail,
          date: new Date().toISOString(),
          source: 'checklist-pdf',
        }),
      })
    } catch {}

    setIsSubmitting(true)

    try {
      if (!cheatSheetContainerRef.current) {
        throw new Error('Cheat sheet not mounted')
      }

      const canvas = await html2canvas(cheatSheetContainerRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#faf7f2',
      })

      const imageData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const imageHeight = (canvas.height * pageWidth) / canvas.width
      const totalPages = 2

      for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
        if (pageIndex > 0) {
          pdf.addPage()
        }

        pdf.addImage(imageData, 'PNG', 0, -(pageHeight * pageIndex), pageWidth, imageHeight)
      }

      const pdfBlob = pdf.output('blob')
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'china-arrival-cheat-sheet-trail-of-china.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)

      saveEmailForMarketing(normalizedEmail)

      setSuccess('Your cheat sheet is downloading! Check your inbox for more China travel tips.')
      setEmail('')
    } catch {
      setError('Something went wrong while generating your PDF. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div
        ref={cheatSheetContainerRef}
        style={{
          position: 'fixed',
          left: '-9999px',
          top: 0,
          zIndex: -1,
          overflow: 'hidden',
          width: 0,
          height: 0,
        }}
      >
        <ChinaCheatSheet />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32]">Free Download</p>
        <p className="mt-1 font-serif text-lg leading-tight text-[#1f2933]">China Arrival Cheat Sheet</p>

        <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start">
          <label htmlFor="cheat-sheet-email" className="sr-only">
            Email address
          </label>
          <input
            id="cheat-sheet-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-[#d9d0c2] bg-white px-3 py-2 text-sm text-[#1f2933] outline-none transition focus:border-[#af5d32] focus:ring-2 focus:ring-[#af5d32]/30 sm:min-w-[220px]"
            autoComplete="email"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#af5d32] px-4 text-sm font-semibold text-white transition hover:bg-[#8f431c] disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isSubmitting ? 'Preparing...' : 'Get My Free Cheat Sheet'}
          </button>
        </form>

        {error ? <p className="mt-2 text-xs text-[#9d2b2b]">{error}</p> : null}
        {success ? <p className="mt-2 text-xs text-[#2f6b3f]">{success}</p> : null}
      </div>
    </>
  )
}
