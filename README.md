# AI TECH BD — Appointment Booking & Scheduling Platform

Enterprise appointment booking system for **AI TECH BD** (Dhaka).

Frictionless guest booking, no payment required at checkout, automated confirmation emails, real-time availability, multi-language UI (EN / BN / AR / ES), client dashboard, and a dedicated staff admin portal.

## Features

- Public booking wizard: service → specialist → date/time → client details → confirmation
- Guest booking (no account required)
- Services catalogue: AI engineering, software architecture, cloud/DevOps, cybersecurity, enterprise consulting
- Client dashboard with upcoming sessions, calendar view, booking reference lookup
- Admin portal at `/?admin` or `/admin` (appointments, packages, notifications, Gmail dispatch)
- Optional Gemini advisor (`GEMINI_API_KEY`)
- Light/dark theme and RTL for Arabic
- Local payment rail placeholders (bKash / Nagad); booking itself is zero-payment

## Stack

React 19, Vite 8, Tailwind CSS 4, Motion, Lucide, Express + tsx, Gemini (`@google/genai`), Firebase, Google Identity Services, Nodemailer.

## Run locally

Prerequisites: Node.js 20+

```bash
npm install
cp .env.example .env.local
# set GEMINI_API_KEY if you want the advisor
npm run dev
```

Open the printed local URL (typically `http://localhost:3000`).

Admin portal: `http://localhost:3000/?admin`

## Scripts

- `npm run dev` / `npm start` — Express + Vite (`tsx server.ts`)
- `npm run build` — production client build
- `npm run preview` — preview the Vite build
- `npm run lint` — TypeScript check

## Project structure

```
src/
  App.tsx                 Public site + admin route
  components/             Booking wizard, dashboards, admin, payments
  context/BookingContext  App state, appointments, i18n, theme
  lib/                    mock data, i18n, workspace auth
  types/                  Domain types
server.ts                 Express host + Gemini / mail endpoints
```

## Environment

See `.env.example`.

- `GEMINI_API_KEY` — Gemini advisor and server-side AI
- `APP_URL` — public origin (OAuth callbacks, email links)

## License

Private business application for AI TECH BD. All rights reserved unless otherwise agreed.
