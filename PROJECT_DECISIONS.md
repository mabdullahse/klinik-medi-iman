# Klinik Medi Iman — Project Decisions & Guardrails

> This file is the single source of truth for all design, content, and technical decisions.
> Update it as new decisions are made. Claude must follow this before generating any code.

---

## 1. Project Overview

- **Client:** Klinik Medi Iman
- **Tagline:** "Care with Compassion" | "Your Health, Our Priority."
- **Doctor:** Dr. Shahrul Effendi Bin Shuib — MD (Indonesia), OHD (NIOSH)
- **Phone/WhatsApp:** 011 6986 3974
- **Address:** No 2-G, Jalan Kiara 2, Pusat Perniagaan Kiara, 43500 Semenyih, Selangor
- **Google Maps:** https://maps.app.goo.gl/yXh4jaY3FttJU7Q26

---

## 2. Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Language:** TypeScript
- **Images:** next/image with local assets from `/public/assets/`
- **Icons:** Lucide React (ships with shadcn)
- **Fonts:** Google Fonts — `Playfair Display` (headings, premium feel) + `Inter` (body)
- **Map Embed:** Google Maps iframe embed
- **SEO:** Next.js Metadata API (per-page), sitemap.xml, robots.txt, structured data (JSON-LD)

---

## 3. Design Decisions

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Gold | `#C9A84C` | CTAs, accents, highlights |
| Deep Maroon | `#7B1C2E` | Headers, nav, footer background |
| Warm Cream | `#FAF6EF` | Page background |
| Soft White | `#FFFFFF` | Cards, sections |
| Text Dark | `#1A1A1A` | Body text |
| Text Muted | `#6B7280` | Subtitles, captions |

### Typography
- **Headings:** Playfair Display — elegant, premium, trustworthy
- **Body/UI:** Inter — clean, modern, readable

### Theme
- **Light theme** with warm cream background — clean clinical feel with premium warmth

### Tone
- Warm, approachable, trustworthy
- Bilingual: primarily **Bahasa Malaysia** with English for medical/technical terms
- Copy should feel human, never cold or corporate

---

## 4. Site Structure & Pages (SEO-optimised)

Multi-page structure is best for SEO — each service gets its own URL and meta.

| Route | Page | SEO Purpose |
|-------|------|-------------|
| `/` | Home | Brand landing, trust signals, CTA |
| `/tentang-kami` | About Us | Doctor profile, clinic story, trust |
| `/perkhidmatan` | Services Overview | All services listed |
| `/perkhidmatan/kesihatan-am` | General Health | Target: "klinik semenyih" |
| `/perkhidmatan/kesihatan-mental` | Mental Health | Target: "klinik kesihatan mental semenyih" |
| `/perkhidmatan/lutut-tumit` | Knee & Heel | Target: "suntikan lutut semenyih" |
| `/perkhidmatan/pengurusan-berat` | Weight Management | Target: "pengurusan berat badan klinik" |
| `/perkhidmatan/osh-fomema` | OSH & FOMEMA | Target: "FOMEMA semenyih", "OHD klinik" |
| `/temujanji` | Appointment | Booking form + WhatsApp |
| `/hubungi-kami` | Contact | Map, hours, address |

---

## 5. SEO Guardrails

- Every page has a unique `<title>` and `<meta description>` in BM + English
- Target local keywords: "Klinik Semenyih", "Doktor Perempuan Semenyih", "FOMEMA Semenyih"
- Add JSON-LD `LocalBusiness` schema on homepage with all clinic details
- Add JSON-LD `MedicalClinic` schema
- `sitemap.xml` auto-generated via next-sitemap
- `robots.txt` to allow full crawl
- `canonical` URLs on all pages
- All images have descriptive `alt` text in BM
- Page load performance: use `next/image`, no unused fonts, minimal JS

---

## 6. Key Sections (Homepage)

1. **Hero** — Full-width, headline + tagline + CTA (WhatsApp + Book Appointment), video placeholder
2. **Trust Bar** — Key stats (years, patients, services, partners)
3. **Services Grid** — 6 service cards with icons linking to service pages
4. **About the Doctor** — Dr. Shahrul's credentials, warm photo placeholder
5. **Mental Health Highlight** — Special package RM149 promo banner
6. **Operation Hours** — Clean schedule card
7. **Testimonials** — Placeholder cards (3 reviews)
8. **Partners** — MIOSH + MFASB logos
9. **Contact + Map** — Address, phone, embedded Google Map
10. **Footer** — Full links, social, WhatsApp sticky button

---

## 7. Appointment & Booking

- WhatsApp button: sticky on mobile, prominent in nav and hero
- Contact form: Name, Phone, Service, Preferred Date, Message
- WhatsApp deep link: `https://wa.me/601169863974`
- Form submission: uses `mailto` or server action (TBD — to be confirmed by client)

---

## 8. Assets Available

Located in `/public/assets/` (copied from project root `/assets/`):

| File | Usage |
|------|-------|
| `logo.jpeg` | Navbar, footer |
| `clinic-front.jpeg` | Hero or About section |
| `clinic_front.jpeg` | Alternate clinic exterior |
| `mental-health.jpeg` | Mental Health page hero |
| `mental-helth-program.jpeg` | Mental Health package section |
| `services.jpeg` | Services page hero |
| `services_in_details.jpeg` | Services detail section |
| `timing.jpeg` | Operating hours section |
| `VACCINATION PROGRAM.jpeg` | Vaccination section |

---

## 9. Image Generation Prompts (via Gemini)

Generate these and add to `/public/assets/generated/`:

| Image | Prompt |
|-------|--------|
| `hero-bg.jpg` | A warm, bright Malaysian clinic reception area, clean modern interior, soft gold and white tones, natural light, no people, ultra realistic, 16:9 |
| `doctor-placeholder.jpg` | A professional female Malaysian doctor in white coat smiling warmly, clinic background, soft studio lighting, clean and elegant, portrait orientation |
| `mental-wellness.jpg` | Peaceful Malaysian woman meditating in a calm bright room, soft natural light, warm tones, serene and hopeful mood, no text |
| `knee-treatment.jpg` | Close-up of a doctor gently examining a patient's knee, clinical setting, warm lighting, trust and care conveyed |
| `weight-management.jpg` | Healthy Malaysian lifestyle — fresh food, light exercise, bright warm tones, optimistic feel |
| `osh-workplace.jpg` | Malaysian corporate workers in a bright office, one receiving a health check from a doctor, professional and warm |

---

## 10. Final Decisions (Confirmed)

- [x] **Testimonials:** AI-written realistic BM testimonials, avatar placeholders
- [x] **Doctor photo:** Placeholder image — client will provide later
- [x] **Domain name:** `klinikimedi.com` — used for SEO canonical URLs
- [x] **Form backend:** WhatsApp deep link — form submits via `wa.me/601169863974`
- [x] **Social media:** Placeholder links — client will provide Instagram/Facebook later
- [x] **Video:** Hero video section stays as stylish placeholder with play button
- [x] **Style reference:** Theme image — deep maroon accent wall, warm cream, gold tones, premium elegant clinic feel

## 11. Style Reference Notes (from theme.png)

- Deep rich maroon/burgundy accent wall — use as primary brand color
- Warm cream/beige backgrounds — never cold white
- Gold/amber lighting accents — use for hover states and highlights
- Warm wood tones — use as subtle border/divider color
- Premium, uncluttered layout — generous whitespace
- Chairs and furnishings: burgundy/plum — reinforce with color system

---

## 11. Guardrails for Claude

- Always follow this file before generating or editing any code
- Do not change color tokens without updating section 3 here first
- BM is the primary language — all headings, CTAs, and nav labels should be in BM
- English is acceptable for medical terms (ECG, FOMEMA, PHQ-9, etc.)
- No dark mode — light theme only
- No unnecessary animations — subtle fade-in on scroll is fine, no heavy parallax
- shadcn/ui components preferred over custom-built equivalents
- Every new page must have metadata exported (title + description)
- WhatsApp CTA must appear on every page (sticky mobile button + nav)
- Keep the site fast — no heavy libraries, compress all images
- **NEVER read or search inside the `.next/` folder** — it is a build cache directory; any type errors or file references found there are stale artifacts, not real source issues. Always search and fix in `app/`, `components/`, `lib/`, `locales/`, etc.
