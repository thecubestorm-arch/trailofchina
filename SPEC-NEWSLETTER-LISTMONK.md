# SPEC: Newsletter Signup — Listmonk Integration

## Overview
Add a newsletter signup component to Trail of China that connects to Listmonk (self-hosted).

## Listmonk Config
- **API URL:** https://listmonk-xyme.srv1019856.hstgr.cloud/api
- **List ID:** 1
- **API Token:** sE3NzvZoH4xwYByT2ek1soJBD4za7Zeb
- **Auth:** Token-based (Authorization: token api_user:token)

## Signup Form Design
- Minimal, clean, matches site design
- Terracotta accent (#af5d32), dark teal (#1a3a4a), cream (#f5f1ea)
- Serif heading, simple input + button
- Placeholder text: "Your email address"
- Button text: "Get China Tips" or similar
- Success message: "Check your inbox to confirm!" (double opt-in)
- Error handling: show error message inline

## Placement
1. **Footer** — replace or augment the existing email capture (ChecklistDownload). Add a small newsletter signup section below or next to the existing PDF download.
2. **About page** — add a small CTA section at the bottom before the company info
3. **Blog posts** — add inline signup after article content (future, not now)

## Technical Approach
- Create `components/NewsletterSignup.tsx` ("use client" component)
- POST to Listmonk API `/subscribers` endpoint with:
  - email: user's email
  - name: optional (don't require it)
  - lists: [1] (the China Travel Tips list)
  - status: "pending" (triggers double opt-in confirmation email)
- Use fetch with Authorization token header
- Track signup with Umami: `trackEvent('newsletter_signup', { source: 'footer' | 'about' })`
- Handle errors gracefully (already subscribed, invalid email, network error)
- The API token should NOT be exposed in client-side code — use an environment variable or a Next.js API route

## Security Note
- The Listmonk API token is a secret. DO NOT hardcode it in client-side components.
- Create a Next.js API route at `/api/newsletter` that proxies the request to Listmonk
- The API route stores the token as an environment variable: `LISTMONK_API_TOKEN`
- Client component calls `/api/newsletter` which then calls Listmonk

## Environment Variable
Add to `.env.local` (and Vercel env vars):
```
LISTMONK_API_URL=https://listmonk-xyme.srv1019856.hstgr.cloud/api
LISTMONK_API_TOKEN=sE3NzvZoH4xwYByT2ek1soJBD4za7Zeb
LISTMONK_LIST_ID=1
```

## Double Opt-in
- Listmonk handles this automatically when status is "pending"
- The subscriber gets a confirmation email with a link
- Only after clicking the link are they added to the list
- This is GDPR/nDSG compliant

## Files to Create/Modify
1. `app/api/newsletter/route.ts` — API route proxying to Listmonk
2. `components/NewsletterSignup.tsx` — signup form component
3. `components/Footer.tsx` — add newsletter signup
4. `app/about/page.tsx` — add newsletter CTA section
5. `.env.local` — add Listmonk env vars