# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Next.js dev server
npm run build      # Production build (ESLint + TS errors ignored during builds)
npm run lint       # ESLint via next lint
npm run start      # Start production server
```

No test runner is configured. Prisma generates on `postinstall`.

## Architecture

**Stack:** Next.js 14 (App Router), React 18, TypeScript 5, Tailwind CSS, Prisma (MySQL), NextAuth v5 beta

**Path alias:** `@/*` → `./src/*`

### Route Groups

- `(root)/` — Public marketing site with `HeaderV2` + `FooterV2` layout
- `(auth)/` — Login page; redirects logged-in users by role
- `superadmin/`, `admin/`, `partner/`, `student/` — Role-gated portals; each layout checks `session.user.role` server-side and redirects to `/login` if unauthorized

### Key Directories

- `src/actions/` — Server actions (`"use server"`). Email sending in `mailSending.ts`, auth wrappers, Gemini AI search, CRUD actions organized by role (`superAdmin/`, `partner/`)
- `src/components/pages/` — Page-level components. Active versions use `*V2` suffix. Organized by route: `services/`, `stydy-destinations/` (typo is intentional), `contact/`, etc.
- `src/components/ui/` — shadcn/ui primitives (Radix-based)
- `src/components/homev2/` — Homepage sections (shared `TrustBarSection` used across service pages)
- `src/constants/data.ts` — `NAVBAR_DATA` (nav dropdown structure), `STUDY_DESTINATIONS_FULLDATA` (used for `generateStaticParams()`)
- `src/lib/clients.ts` — Singleton Prisma client (uses global in dev to prevent hot-reload exhaustion)
- `src/lib/getSession.ts` — React `cache()`-wrapped `auth()` for server component session reads
- `src/lib/utils.ts` — `cn()` for merging Tailwind classes

### Auth

NextAuth v5 beta with Credentials provider. JWT stores `id` and `role`. Roles: `superadmin`, `admin`, `partner`, `student`. Middleware is minimal; role guards live in layout files.

### Email

Nodemailer via `src/actions/mailSending.ts`. SMTP: `uniguru.co:465`. Functions: `sendContactEmail`, `sendFinanceSupportEmail`, `sendAccommodationEnquiryEmail`, `sendScholarshipEnquiryEmail`, `sendConsultationEmail`, etc. HTML templates in `src/lib/emailTemplates/`.

### Study Destinations

Statically generated via `generateStaticParams()` from `STUDY_DESTINATIONS_FULLDATA` constant (not DB). Each destination has typed data including quick facts, costs, careers, resources.

## Patterns

- Always use `"use server"` directive at top of files in `src/actions/`
- Import Prisma client from `@/lib/clients`, never instantiate directly
- Use `getSession()` from `@/lib/getSession.ts` for server-side session reads
- Use `cn()` from `@/lib/utils` for Tailwind class merging
- Nav links are defined in `src/constants/data.ts` — update `NAVBAR_DATA.subOptions` when adding new service pages

## Service Pages Design System

Premium service pages (air-ticketing, financial-help, etc.) share a consistent design system:
- **Colors:** Navy `#0f2554` / `#1a3b85`, gold accent `#D4AF37`, hero overlay `#0a1628`
- **Container:** `max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8`
- **Structure:** Hero (Unsplash bg + gradient overlay) → TrustBarSection → What You Get cards → Content sections → How It Works (timeline) → Boundaries table (will/won't) → Form section with 3/5 + 2/5 grid layout
- **Form pattern:** `lg:grid-cols-5` with `lg:col-span-3` form + `lg:col-span-2` sidebar (glass cards: `bg-white/10 backdrop-blur-sm rounded-xl border border-white/15`). All form rows use `sm:grid-cols-2`
- **CustomDropdown:** Reusable dropdown with icons, descriptions, click-outside-close, clear option
- **Icons:** `lucide-react` exclusively
- **Toasts:** `react-hot-toast`
- **CTAs:** Primary gold button scrolls to form `#section-id`, secondary WhatsApp link (+44 7747 525946)
