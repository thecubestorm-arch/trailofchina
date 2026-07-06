'use client'

import { type FormEvent, useState } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const cities = ['Beijing', 'Shanghai', "Xi'an", 'Chengdu', 'Guilin/Yangshuo', 'Hong Kong']
const durations = ['7 days', '10 days', '14 days', '21+ days']
const interests = [
  'History & Culture',
  'Food & Dining',
  'Nature & Scenery',
  'Modern Cities',
  'Adventure',
  'Relaxation',
]
const budgets = ['Budget', 'Mid-range', 'Luxury']

export default function TravelPlannerForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    trackEvent('travel_planner_submit')
    setSubmitted(true)
  }

  return (
    <form
      className="space-y-8 rounded-xl border border-[var(--line)] bg-white/60 p-6 md:p-8 backdrop-blur-sm"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="mb-4 block text-xl font-serif font-bold text-[var(--foreground)] sm:text-2xl">
          Which cities do you want to visit?
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <label
              key={city}
              className="flex min-h-[52px] cursor-pointer items-center gap-3 rounded-lg border border-[var(--line)] p-3 text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
            >
              <input type="checkbox" name="cities" value={city} className="h-4 w-4 accent-[var(--primary)]" />
              <span>{city}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="duration"
          className="mb-4 block text-xl font-serif font-bold text-[var(--foreground)] sm:text-2xl"
        >
          Trip duration
        </label>
        <select
          id="duration"
          name="duration"
          defaultValue=""
          className="w-full rounded-lg border border-[var(--line)] bg-transparent p-3 text-[var(--foreground)] md:w-1/2"
        >
          <option value="" disabled>
            Select a trip length
          </option>
          {durations.map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-4 block text-xl font-serif font-bold text-[var(--foreground)] sm:text-2xl">
          What are you most interested in?
        </label>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <label
              key={interest}
              className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-[var(--line)] px-4 py-2 text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
            >
              <input type="checkbox" name="interests" value={interest} className="sr-only" />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-4 block text-xl font-serif font-bold text-[var(--foreground)] sm:text-2xl">
          Budget level
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {budgets.map((budget) => (
            <label
              key={budget}
              className="flex min-h-[52px] cursor-pointer items-center gap-3 rounded-lg border border-[var(--line)] p-3 text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
            >
              <input type="radio" name="budget" value={budget} className="h-4 w-4 accent-[var(--primary)]" />
              <span>{budget}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="rounded-full bg-[var(--primary)] px-8 py-3 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          Get My Custom Itinerary
        </button>
        {submitted ? (
          <div className="mt-4 rounded-xl border border-[#b7d7c4] bg-[#effaf3] px-4 py-3 text-sm text-[#1d5c3f]">
            ✅ Thanks! We will send your custom itinerary within 48 hours.
          </div>
        ) : null}
        <p className="mt-3 text-sm text-[var(--muted)]">
          Prefer to compare route ideas first? Explore{' '}
          <Link
            href="/plan-your-trip/preplanned-trips"
            className="underline decoration-[var(--primary)] underline-offset-2"
          >
            preplanned trips
          </Link>
          .
        </p>
      </div>
    </form>
  )
}
