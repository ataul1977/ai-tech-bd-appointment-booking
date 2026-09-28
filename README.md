# AI TECH BD — Appointment Booking & Scheduling Platform

Enterprise appointment booking system for **AI TECH BD** with guest booking (no payment required), automated confirmation emails, real-time availability, multi-language support, a client dashboard, and a dedicated staff admin portal.

## Features

- Frictionless guest booking wizard (service → date/time → details)
- Zero payment required at booking time
- Gemini AI advisor for service recommendations
- Client dashboard and calendar
- Staff admin portal at `/?admin` or `/admin`
- Package / service management
- Multi-language + RTL and light/dark theme

## Quick start

```bash
npm install
cp .env.example .env.local
# Set GEMINI_API_KEY in .env.local
npm run dev
```

| Route | Audience |
|---|---|
| `/` | Public booking site |
| `/?admin` or `/admin` | Staff administration portal |

Requires Node.js 20+. Set `GEMINI_API_KEY` and `APP_URL` from `.env.example`.
