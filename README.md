# AI TECH BD — Appointment Booking & Scheduling Platform

Enterprise appointment booking system for **AI TECH BD** with frictionless guest booking, optional payments, automated email confirmations, real-time availability, multi-language support (English / Bangla), a client dashboard, Gemini AI advisor, and a dedicated admin portal.

Original Google AI Studio app: https://ai.studio/apps/6cf36731-d5be-454e-9b0a-63c861c7ed54

## Features

- Guest and signed-in booking wizard (service → date/time → details → confirm)
- Service catalog and testimonials landing experience
- Client dashboard with calendar of upcoming appointments
- Admin portal at `/?admin` or `/admin` (staff login gate)
- Package / service management for admins
- Gemini AI advisor modal (server-side Gemini API)
- Gmail / Google sign-in helpers and notification + payment modals
- RTL-aware i18n and light/dark theme via booking context
- Express + Vite + WebSocket server (`server.ts`)

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS 4
- Express, WebSockets, Nodemailer
- Firebase client SDK
- Google Gemini (`@google/genai`)

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
cp .env.example .env.local
# Set GEMINI_API_KEY and APP_URL in .env.local
npm run dev
```

`npm run dev` starts `tsx server.ts` (API + Vite frontend).

| Script | Purpose |
|--------|---------|
| `npm run dev` / `npm start` | Run Express + Vite |
| `npm run build` | Production Vite build |
| `npm run preview` | Preview production build |
| `npm run lint` | Typecheck |

## Environment

See `.env.example`:

- `GEMINI_API_KEY` — required for the AI advisor
- `APP_URL` — public URL for OAuth callbacks and email links

Firebase and Gmail OAuth settings live in `firebase-applet-config.json` and `src/lib/workspaceAuth.ts`.

## Project layout

```
server.ts                 Express + Vite middleware + APIs
src/App.tsx               Public site + admin route switch
src/context/BookingContext.tsx
src/components/           Booking wizard, dashboards, admin, auth, payments
src/lib/i18n.ts           English / Bangla strings
src/lib/mockData.ts       Seed services / slots
src/types/index.ts
```

## Admin

Open `http://localhost:3000/?admin` (or `/admin`) for the staff portal. Regular visitors never see admin chrome on the marketing/booking site.
