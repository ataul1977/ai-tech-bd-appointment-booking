# AI TECH BD — Appointment Booking & Scheduling Platform

Enterprise appointment booking system for **AI TECH BD**.

- Guest booking with no payment required
- Automated email confirmations
- Real-time availability
- Multi-language (EN / BN) and RTL-aware UI
- Client dashboard and calendar
- Dedicated staff admin portal (`/admin` or `?admin`)
- Gemini AI advisor for service recommendations

Original AI Studio app: https://ai.studio/apps/6cf36731-d5be-454e-9b0a-63c861c7ed54

## Stack

- React 19 + TypeScript + Vite 8
- Express + tsx server (`server.ts`) for API, email, and Gemini
- Tailwind CSS 4
- Firebase Auth (Google)
- Nodemailer
- `@google/genai`

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
cp .env.example .env.local
```

Set in `.env.local`:

```
GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
```

Add any Firebase / Gmail SMTP secrets your deployment already uses.

```bash
npm run dev
```

- Public site: booking wizard, services, testimonials, client dashboard
- Admin portal: `/admin` or `/?admin`

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start Express + Vite via `tsx server.ts` |
| `npm run build` | Production Vite build |
| `npm run lint` | Typecheck |
| `npm run preview` | Preview static build |

## Notes

- Guest booking is designed to complete without charging the client.
- Admin is a separate route so visitors never see staff tools.
- Keep API keys out of git. Use `.env.local` only.
