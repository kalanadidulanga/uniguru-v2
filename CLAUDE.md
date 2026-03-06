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

**Stack:** Next.js 14.2 (App Router), React 18, TypeScript 5, Tailwind CSS, Prisma (MySQL), NextAuth v5 beta (v5.0.0-beta.23)

**Path alias:** `@/*` → `./src/*`

**Image config:** `next.config.mjs` allows remote images from any hostname (HTTP/HTTPS). ESLint and TypeScript build errors are ignored.

### Route Groups

- `(root)/` - Public marketing site with `HeaderV2` + `FooterV2` layout
- `(auth)/` - Login page; redirects logged-in users by role
- `superadmin/`, `admin/`, `partner/`, `student/` - Role-gated portals; each layout checks `session.user.role` server-side and redirects to `/login` if unauthorized

### Key Directories

- `src/actions/` - Server actions (`"use server"`). Email sending in `mailSending.ts`, auth wrappers, Gemini AI search (`gemini.ts`), CRUD actions organized by role (`superAdmin/`, `partner/`)
- `src/components/pages/` - Page-level components. Active versions use `*V2` suffix. Organized by route: `services/`, `stydy-destinations/` (typo is intentional), `contact/`, etc.
- `src/components/ui/` - shadcn/ui primitives (Radix-based)
- `src/components/homev2/` - Homepage sections (shared `TrustBarSection` used across service pages)
- `src/constants/data.ts` - `NAVBAR_DATA`, `COMPANY_INFO` (phone, email, WhatsApp), `STUDY_DESTINATIONS_FULLDATA`, `ACCOMMODATION_COUNTRY_FULLDATA`
- `src/lib/clients.ts` - Singleton Prisma client (uses global in dev to prevent hot-reload exhaustion)
- `src/lib/getSession.ts` - React `cache()`-wrapped `auth()` for server component session reads
- `src/lib/utils.ts` - `cn()` for merging Tailwind classes

### Auth

NextAuth v5 beta with Credentials provider (`src/auth.ts`). JWT stores `id` and `role`. Users have an `isBlock` field that prevents login. Roles: `superadmin`, `admin`, `partner`, `student`. Middleware excludes `api`, `_next/*`, `favicon.ico`, and `study-destinations` routes; role guards live in layout files.

### Email

Nodemailer via `src/actions/mailSending.ts`. SMTP host: `uniguru.co`, port 465, user `noreply@uniguru.co`. Key functions: `sendContactEmail`, `sendConsultationEmail`, `sendFinanceSupportEmail`, `sendAccommodationEnquiryEmail`, `sendScholarshipEnquiryEmail`, `sendEligibilityAssessmentEmail`, `sendNewQuestionnaireSubmitted`, `sendNewMessageFromStudent`. Templates exist in `src/lib/emailTemplates/` but most email functions currently use plain text.

### Study Destinations

Statically generated via `generateStaticParams()` from `STUDY_DESTINATIONS_FULLDATA` constant (not DB). Each destination has typed data including quick facts, costs, careers, resources. Current destinations: UK, Canada, Australia, Netherlands, Germany.

### Services

Services landing page at `/services` organizes all services into 4 stages: Decide → Prepare → Secure → Settle. Individual service pages:

| Route | Component |
|---|---|
| `/services/accommodation` | AccommodationPageV2 |
| `/services/accommodation/[country]` | AccommodationCountryPage |
| `/services/admissions-support` | AdmissionsSupportPageV2 |
| `/services/air-ticketing` | AirTicketingPageV2 |
| `/services/arrival-settlement` | ArrivalSettlementPageV2 |
| `/services/document-readiness` | DocumentReadinessPageV2 |
| `/services/eligibility-shortlist` | EligibilityShortlistPageV2 |
| `/services/financial-help` | FinancialHelpPageV2 |
| `/services/free-ielts-service` | FreeIeltsServicePageV2 |
| `/services/ielts-interview-prep` | IeltsInterviewPrepPageV2 |
| `/services/part-time-work` | PartTimeWorkPageV2 |

### AI Search

`/ai-search` - Gemini AI-powered course finder. Server action in `src/actions/gemini.ts` uses `gemini-2.5-flash` with `responseMimeType: "application/json"`. Returns course recommendations with university, country, fees, match percentage. Client component in `src/app/(root)/ai-search/AISearchClient.tsx`.

## Patterns

- Always use `"use server"` directive at top of files in `src/actions/`
- Import Prisma client from `@/lib/clients`, never instantiate directly
- Use `getSession()` from `@/lib/getSession.ts` for server-side session reads
- Use `cn()` from `@/lib/utils` for Tailwind class merging
- Use `COMPANY_INFO` from `@/constants/data` for phone, email, WhatsApp links - never hardcode contact info
- Nav links are defined in `src/constants/data.ts` via `NAVBAR_DATA`

## Design System

### Header

`HeaderV2` - Fixed position, transparent by default, white bg on scroll. Text colors swap dynamically based on scroll state (white on transparent for dark hero pages, dark on white bg). AI Search link stays gold `#D4AF37` in all states. Height: `h-14`. Container: `max-w-[1400px]`.

### Service Pages

Premium service pages share a consistent design system:
- **Colors:** Navy `#0f2554` / `#1a3b85`, gold accent `#D4AF37`, hero overlay `#0a1628`
- **Container:** `max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8`
- **Structure:** Hero (image bg + gradient overlay) → TrustBarSection → What You Get cards → Content sections → How It Works (timeline) → Boundaries table (will/won't) → Form section with 3/5 + 2/5 grid layout
- **Form pattern:** `lg:grid-cols-5` with `lg:col-span-3` form + `lg:col-span-2` sidebar (glass cards: `bg-white/10 backdrop-blur-sm rounded-xl border border-white/15`). All form rows use `sm:grid-cols-2`
- **CustomDropdown:** Reusable dropdown with icons, descriptions, click-outside-close, clear option
- **MultiSelectDropdown:** Used in part-time-work for selecting up to N items with chip tags
- **Icons:** `lucide-react` exclusively
- **Toasts:** `react-hot-toast`
- **CTAs:** Primary gold button links to `/book`, secondary WhatsApp link via `COMPANY_INFO.whatsapp`
- **Hero overlay:** `bg-black/50` + `bg-gradient-to-b from-black/40 via-transparent to-black/50` (no decorative blur orbs)
- **Badges:** `inline-flex items-center gap-2` with gold icon (size 14-16) + `text-xs font-semibold text-[#D4AF37] uppercase tracking-widest` — NO background, NO border
- **Buttons:** Primary `h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg shadow-md`, Secondary `h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg border border-white/30`
- **Will/Won't cards:** Emerald `border-2 border-emerald-200` / Red `border-2 border-red-200` with colored icon boxes on `bg-gray-50`
- **What You Get icon boxes:** `w-14 h-14 rounded-2xl bg-[#1a3b85] text-white`
- **How It Works:** On `bg-[#0f2554]`, gold numbered circles, glass cards `bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl`
- **Form sections:** Solid `bg-[#0f2554]` background (no background images, no blur orbs)
- **Section spacing:** `py-16 sm:py-20` consistently
- **Symbols:** Use `-` not `&ndash;`, use `|` not `&middot;`
- **Images:** Always add `unoptimized` prop to `next/image` components

## Fonts & Analytics

- **Google Fonts:** Poppins (100-900 weights, project-wide) and Signika_Negative (display: swap), configured in `src/app/layout.tsx`
- **Speed Insights:** Vercel Speed Insights integrated in root layout

## Database Models

Key Prisma models for student lifecycle (`prisma/schema.prisma`):
- **User** — Auth users with role (`superadmin`, `admin`, `partner`, `student`) and `isBlock` field
- **StudentQuestionnaires** — Intake questionnaires from prospective students
- **StudentDocuments** — Document tracking (passport, degree, IELTS, CV, SOP, references)
- **StudentUniversities** — Application tracking with status, fees, scholarships, exam scores
- **Intake** — Batch/cohort management
- **Accommodation / UniversitiesList** — DB-backed destination catalogs (distinct from static `STUDY_DESTINATIONS_FULLDATA`)
- **Notices** — Admin notices system
- **Emails** — Email subscription tracking

Binary targets: `native` + `debian-openssl-1.0.x` for cross-platform compatibility.

## Build & Debug Notes

- NextAuth `debug: true` is enabled globally in `src/auth.ts`
- ESLint and TypeScript build errors are **ignored** during production builds (`next.config.mjs`)
- `reactStrictMode: true` is enabled
- Custom Tailwind animations: `blob`, `float`, `scroll`, `scroll-reverse` for hero/banner effects (`tailwind.config.ts`)
