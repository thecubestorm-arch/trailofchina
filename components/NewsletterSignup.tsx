'use client'

import { FormEvent, useId, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

type NewsletterSignupProps = {
  source: string
  heading?: string
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const API_URL = process.env.NEXT_PUBLIC_LISTMONK_API_URL
const API_TOKEN = process.env.NEXT_PUBLIC_LISTMONK_API_TOKEN
const LIST_ID = Number(process.env.NEXT_PUBLIC_LISTMONK_LIST_ID)

function getErrorMessage(status: number, payload: unknown) {
  const message =
    typeof payload === 'object' && payload !== null && 'message' in payload && typeof payload.message === 'string'
      ? payload.message
      : typeof payload === 'object' && payload !== null && 'error' in payload && typeof payload.error === 'string'
        ? payload.error
        : ''

  const normalized = message.toLowerCase()

  if (normalized.includes('subscriber already exists') || normalized.includes('already subscribed')) {
    return 'That email is already on the list. Check your inbox in case the confirmation email is still waiting.'
  }

  if (normalized.includes('invalid email') || normalized.includes('invalid e-mail') || status === 400) {
    return 'Please enter a valid email address.'
  }

  return 'Something went wrong. Please try again in a moment.'
}

export default function NewsletterSignup({ source, heading = 'Get China Tips' }: NewsletterSignupProps) {
  const inputId = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmissionState>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()
    setMessage('')

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    if (!API_URL || !API_TOKEN || !Number.isFinite(LIST_ID)) {
      setStatus('error')
      setMessage('Newsletter signup is not configured right now. Please try again later.')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(`${API_URL}/subscribers`, {
        method: 'POST',
        headers: {
          Authorization: `token api_user:${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: normalizedEmail,
          name: '',
          lists: [LIST_ID],
          status: 'pending',
          preconfirm_subscriptions: false,
        }),
      })

      const payload = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(getErrorMessage(response.status, payload))
      }

      trackEvent('newsletter_signup', { source })
      setStatus('success')
      setMessage('Check your inbox to confirm!')
      setEmail('')
    } catch (error) {
      const nextMessage =
        error instanceof TypeError || (error instanceof Error && /fetch|network/i.test(error.message))
          ? 'Network error. Please check your connection and try again.'
          : error instanceof Error && error.message
            ? error.message
            : 'Network error. Please check your connection and try again.'

      setStatus('error')
      setMessage(nextMessage)
    }
  }

  return (
    <section className="rounded-[1.5rem] border border-[#d9d0c2] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(175,93,50,0.08))] p-5 shadow-[0_14px_34px_rgba(50,41,30,0.08)] sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#af5d32]">Newsletter</p>
      <h3 className="mt-2 font-serif text-2xl leading-tight text-[#1a3a4a]">{heading}</h3>
      <p className="mt-2 max-w-xl text-sm leading-6 text-[#5f6f79]">
        Visa friction, payment quirks, transport tips, and planning notes for first-time China trips.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          autoComplete="email"
          required
          disabled={status === 'submitting'}
          className="h-11 w-full rounded-full border border-[#d8ccbc] bg-[#fdfbf7] px-4 text-sm text-[#1a3a4a] outline-none transition focus:border-[#af5d32] focus:ring-2 focus:ring-[#af5d32]/20 disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[260px]"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#1a3a4a] px-5 text-sm font-semibold text-[#f5f1ea] transition hover:bg-[#122b37] disabled:cursor-not-allowed disabled:opacity-75"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get China Tips'}
        </button>
      </form>

      {message ? (
        <p className={`mt-3 text-sm ${status === 'success' ? 'text-[#2f6b3f]' : 'text-[#9d2b2b]'}`}>{message}</p>
      ) : null}
    </section>
  )
}
