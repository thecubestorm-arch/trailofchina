'use client'

import { FormEvent, useRef, useState } from 'react'
import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'
import { trackEvent, trackCheatSheetEmail } from '@/lib/analytics'
import ChinaCheatSheet from '@/components/ChinaCheatSheet'

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LISTMONK_PUBLIC_URL = 'https://listmonk-xyme.srv1019856.hstgr.cloud/api/public/subscription'
const LIST_UUID = 'f634aecd-46d7-4348-b6f1-342b18bb9f1c'

const GOOGLE_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwF8BMqJvlTOzi8RvaZt4IavOOfrTQLTbDSc0qqoY87vi4NHJTNsVQh44cCDwfPF0-zIA/exec'

export default function FooterEmailCTA() {
  const inputId = 'footer-email-cta'
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(true)
  const [status, setStatus] = useState<SubmissionState>('idle')
  const [message, setMessage] = useState('')
  const cheatSheetContainerRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()
    setMessage('')

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')

    // 1. Send to Google Sheets (PDF email capture)
    try {
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalizedEmail,
          date: new Date().toISOString(),
          source: 'footer-cta',
        }),
      })
    } catch {}

    // 2. Subscribe to newsletter if checked
    if (newsletter) {
      try {
        await fetch(LISTMONK_PUBLIC_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: normalizedEmail,
            name: '',
            list_uuids: [LIST_UUID],
          }),
        })
        trackEvent('newsletter_signup', { source: 'footer' })
      } catch {}
    }

    // 3. Generate PDF
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
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const imageHeight = (canvas.height * pageWidth) / canvas.width

      for (let i = 0; i < 2; i += 1) {
        if (i > 0) pdf.addPage()
        pdf.addImage(imageData, 'PNG', 0, -(pageHeight * i), pageWidth, imageHeight)
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

      trackCheatSheetEmail()
      setStatus('success')
      setMessage(
        newsletter
          ? 'Your cheat sheet is downloading! Check your inbox to confirm the newsletter.'
          : 'Your cheat sheet is downloading!'
      )
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong generating the PDF. Please try again.')
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
          width: '800px',
          height: 'auto',
        }}
      >
        <ChinaCheatSheet />
      </div>

      <section id="footer-email-cta" className="rounded-[1.5rem] border border-[#d9d0c2] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(175,93,50,0.08))] p-5 shadow-[0_14px_34px_rgba(50,41,30,0.08)] sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#af5d32]">Free Download</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-[#1a3a4a]">China Arrival Cheat Sheet</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#5f6f79]">
          A 2-page PDF with everything you need at arrival — payment apps, transit phrases, VPN setup, and more.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            autoComplete="email"
            required
            disabled={status === 'submitting'}
            className="h-11 w-full rounded-full border border-[#d8ccbc] bg-[#fdfbf7] px-4 text-sm text-[#1a3a4a] outline-none transition focus:border-[#af5d32] focus:ring-2 focus:ring-[#af5d32]/20 disabled:cursor-not-allowed disabled:opacity-70 sm:flex-1"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#af5d32] px-6 text-sm font-semibold text-white transition hover:bg-[#8f431c] disabled:cursor-not-allowed disabled:opacity-75 sm:min-w-[160px] sm:w-auto sm:shrink-0"
          >
            {status === 'submitting' ? 'Preparing...' : 'Get Free PDF'}
          </button>
        </form>

        <label className="mt-3 flex items-center gap-2 cursor-pointer select-none min-h-[44px]">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="h-4 w-4 rounded border-[#d8ccbc] text-[#af5d32] accent-[#af5d32]"
          />
          <span className="text-xs text-[#5f6f79]">
            Also sign me up for the <strong className="text-[#1a3a4a]">China Travel Tips</strong> newsletter
          </span>
        </label>

        {message ? (
          <p className={`mt-3 text-sm ${status === 'success' ? 'text-[#2f6b3f]' : 'text-[#9d2b2b]'}`}>{message}</p>
        ) : null}
      </section>
    </>
  )
}
