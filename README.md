# NexusPay HR — Marketing Website

Official responsive marketing site for the NexusPay HR HRIS/HRMS platform.
Communicates the unified Core HR → Workforce Tracking → Payroll value
proposition and captures 14-day free trial leads.

## Design direction

The visual identity is a **passbook ledger**: warm paper background, deep
teal-green ink (`#0F6E5C`), a stamp-ink mustard accent (`#C77D2E`) for
statutory/CTA moments, and a navy "seal" tone (`#2B4C7E`) for
trust/compliance content. Fraunces (display) pairs with Manrope (body) and
IBM Plex Mono (figures/ledger data) — see `tailwind.config.ts` for the full
token system. The interactive pricing calculator is styled as a passbook
entry page and is the page's signature element, tying the EPF/ETF/local
bank story directly into the UI rather than treating it as a badge row.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS with a custom design-token theme
- shadcn-style primitives (Button, Card, Dialog, Input, Label, Slider,
  Switch, Tabs) built on Radix UI, in `components/ui/`
- lucide-react icons

## Structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Homepage composition
  globals.css          Base styles + ledger texture utilities
  api/trial-signup/    Lead-capture API route (stub — wire to your CRM)
components/
  site/                Marketing sections (Header, Hero, FeatureTabs, ...)
  ui/                  shadcn-style primitives
lib/utils.ts           cn() class merge + LKR currency formatter
```

## Key interactive modules

- **Header** — sticky, anchor nav (`Features`, `Payroll`, `Mobile App`,
  `Pricing`, `FAQs`), dual CTAs.
- **Hero + Trust bar** — value prop, inline SVG dashboard preview (no
  external image assets), EPF/ETF/APIT stamp badges, local bank list.
- **CategoryTaxonomy** — Core HR → Workforce Tracking → Payroll, Oracle
  HCM-style progression.
- **FeatureTabs** — 4-tab switcher (Core HRIS, Attendance, Leave, Statutory
  Payroll) with bullets + a live-preview panel per tab.
- **PayrollCompliance** — EPF/ETF/APIT detail and local bank disbursement
  badges (Commercial Bank, Sampath, HNB, BOC, NDB).
- **MobileAppSpotlight** — Flutter ESS app phone mockup: GPS check-in,
  leave balances, approval feed, password-protected payslips.
- **PricingCalculator** — headcount slider (5–200+), Starter (LKR 200–300)
  and Growth (LKR 350–500) per-user ranges, annual billing toggle (15%
  discount), rendered as passbook ledger rows.
- **TrialModal** — 60-second signup (name, work email, company, phone,
  headcount) with client-side validation and a `POST /api/trial-signup`
  dispatch. `TrialModalContext` lets any CTA on the page open it, optionally
  pre-filling headcount from the calculator.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Wiring up lead capture

`app/api/trial-signup/route.ts` validates and logs submissions. Replace the
`console.log` with your CRM/provisioning integration (HubSpot, Salesforce,
internal signups service, etc.) and trigger your welcome email / account
provisioning workflow there.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo in Vercel — `vercel.json` sets the framework and build
   commands; no extra configuration is required.
3. Every pull request automatically gets a preview deployment; merges to
   `main` deploy to production.
4. Run Lighthouse against the preview URL before merging; the build uses
   `next/font` (self-hosted, zero layout shift), inline SVG instead of
   raster hero imagery, and static generation for the homepage to keep
   performance scores above 90.

## Browser & device support

Responsive from 375px mobile up through tablet and desktop breakpoints;
tested against Chrome, Safari and Edge rendering behavior (flexbox/grid,
`backdrop-filter`, `details/summary`, Radix primitives — no
browser-specific APIs used).
