# AI TECH BD — Appointment Booking & Scheduling Platform

Enterprise appointment booking system for **AI TECH BD**.

Guest booking with no payment required, automated confirmation emails, real-time availability, multi-language UI (including RTL), client dashboard, Gemini AI advisor, and a dedicated staff admin portal.

## Features

- Frictionless guest booking wizard (service → date/time → details → confirm)
- Zero payment required for consultation bookings
- Client dashboard and booking calendar
- Staff admin portal (`/admin` or `?admin`) with package/service management
- Gemini-powered booking advisor
- Multi-language + RTL support
- System email confirmations (Nodemailer / Gmail)
- WebSocket live slot lock and booking dispatch
- Dark/light theme

## Stack

- React 19 + TypeScript + Vite
- Express + WebSocket (`server.ts`)
- Tailwind CSS 4
- Firebase (auth / workspace)
- Google Gemini (`@google/genai`)
- Nodemailer

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
cp .env.example .env.local
# set GEMINI_API_KEY in .env.local
npm run dev
```

The app starts from `tsx server.ts` (Express + Vite middleware in development). Default port: `3000`.

### Environment

| Variable | Purpose |
|---|---|
| `GEMINI_API_KEY` | Gemini advisor and server-side AI |
| `APP_URL` | Public URL for OAuth callbacks and email links |
| `PORT` | Server port (default 3000) |

Gmail sending uses the configured workspace account in `server.ts`. Connect Gmail from the admin tools if you need live mail.

## Admin portal

Open:

- `http://localhost:3000/admin`
- or `http://localhost:3000/?admin`

Regular visitors do not see the staff shell.

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Development server |
| `npm start` | Same as dev / production entry (`tsx server.ts`) |
| `npm run build` | Vite production build |
| `npm run preview` | Preview static build |
| `npm run lint` | Typecheck (`tsc --noEmit`) |

## Project layout

```
src/
  App.tsx
  components/     # booking wizard, dashboards, admin, navbar, payments
  context/        # BookingContext
  lib/            # i18n, mock data, workspace auth
  types/
server.ts         # Express + WebSocket + Gemini + mailer
```

## Source

Originally generated as a Google AI Studio applet. This repository is the standalone runnable app.

Repository: https://github.com/ataul1977/ai-tech-bd-appointment-booking
