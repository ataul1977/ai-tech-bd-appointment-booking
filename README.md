# AI TECH BD — Appointment Booking & Scheduling Platform

Enterprise appointment booking for **AI TECH BD** (Dhaka).

Guest booking with no payment required, automated confirmation emails, real-time availability, multi-language UI (EN / BN / AR / ES), client dashboard, and a dedicated staff admin portal.

## Features

- Booking wizard: service → specialist → slot → client details
- Zero payment required at booking (optional bKash / Nagad / card / Stripe)
- Client dashboard and calendar
- Admin portal at `/?admin` or `/admin`
- Package / service management
- Gemini AI advisor
- Email dispatch logs
- RTL-aware i18n and dark / light theme

## Stack

React 19, Vite 8, Tailwind CSS 4, Express (`server.ts`), Gemini (`@google/genai`), Firebase (optional), Nodemailer.

## Run locally

```bash
npm install
cp .env.example .env.local
# set GEMINI_API_KEY and APP_URL
npm run dev
```

Admin: `http://localhost:3000/?admin`

Full source is in the attached project archive used to generate this product.
