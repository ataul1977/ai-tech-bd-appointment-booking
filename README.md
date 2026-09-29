# AI TECH BD — Appointment Booking & Scheduling Platform

Enterprise consultation booking system for **AI TECH BD** (Dhaka). Guest booking with no payment required, automated confirmations, multi-language UI (EN / BN), client dashboard, Gemini AI advisor, and a dedicated staff admin portal.

**AI Studio app:** https://ai.studio/apps/6cf36731-d5be-454e-9b0a-63c861c7ed54

## Features

- Frictionless guest booking (name, email, phone, company — no account required)
- Zero payment at booking — consultations confirmed without deposit
- Service catalog: AI/LLM, cloud & Kubernetes, software architecture, cybersecurity, enterprise consulting
- Staff calendars with availability and duration-aware slots
- Meeting formats: Google Meet, in-person Dhaka, phone
- Client dashboard for upcoming/past appointments
- Admin portal at `/?admin` or `/admin` (bookings, packages, Gmail dispatch)
- Gemini advisor for service recommendations (server-side `@google/genai`)
- English and Bangla i18n, light/dark theme
- System email + in-app notifications

## Stack

React 19, Vite 8, Tailwind CSS 4, Express + tsx, Gemini API, Firebase, Nodemailer, Motion, Lucide.

## Local setup

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local
# Set GEMINI_API_KEY and APP_URL in .env.local
npm run dev
```

| Command | Purpose |
|---|---|
| `npm run dev` / `npm start` | Express + Vite (`tsx server.ts`) |
| `npm run build` | Production client build |
| `npm run lint` | Typecheck |

```
GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
```

## Routes

| Path | Audience |
|---|---|
| `/` | Public booking site |
| `/?admin` or `/admin` | Staff administration portal |

Keep `GEMINI_API_KEY` and Gmail tokens server-side only.
