# Roman Riezanov — Portfolio

Modern, minimal single-page portfolio built with Vite + React + TypeScript.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | TypeScript check + build |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
src/
├── components/
│   ├── About/          — About section
│   ├── Contact/        — Contact links + copy email
│   ├── Experience/     — Work history timeline
│   ├── Footer/         — Page footer
│   ├── Header/         — Fixed navigation with mobile menu
│   ├── Hero/           — Landing hero with CTA
│   ├── Projects/       — Project cards grid
│   ├── Section/        — Reusable section wrapper with scroll animation
│   ├── Skills/         — Skill tags by category
│   └── Icons.tsx       — SVG icon components
├── hooks/
│   └── useScrollReveal.ts — IntersectionObserver-based reveal animation
├── styles/
│   └── globals.scss    — CSS custom properties, reset, base styles
├── App.tsx             — Root component assembling all sections
├── data.ts             — All portfolio content in one place
└── main.tsx            — Entry point
```

## What Was Removed (from frontend-core)

- **All providers** — API, session, cart, cookie, currency, error, locale, payment, socket, storage, user, confirm
- **Router** — react-router and all routing logic
- **Layouts** — admin, guest, user layout wrappers
- **Feature screens** — admin panel, home screen
- **Shared components** — AdminTable, CookieConsent, PdfViewer, SocketExample
- **UI components** — Button, Checkbox, CurrencySelector, Modal, Input, LanguageSelector, LazyVideo, Select, Spinner, Textarea, Toast, UploadFile
- **i18n** — Lingui localization (de, en, fr, uk)
- **Assets** — all SVG icons, admin icons
- **Helpers** — format-date, getBase64ImageSrc, getImageUrl, truncate-string
- **Hooks** — use-fingerprint, use-form, use-infinite-scroll-observer, use-component-did-update, and others
- **Heavy dependencies** — axios, zod, react-router, react-modal, react-select, react-toastify, react-pdf, socket.io-client, fingerprintjs, jwt-decode, js-cookie, date-fns, lingui

## What Was Simplified

- **Entry point** — from 50+ lines with 12 nested providers to 10 lines with a single `<App />`
- **Dependencies** — from 25+ packages to 4 (react, react-dom, sass, vite)
- **Architecture** — flat component structure, no abstractions, no providers, no routing
- **Styling** — CSS custom properties + SCSS modules, no complex variable system
- **Config** — clean vite.config.ts, single `@/` path alias

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — build & dev server
- **SCSS Modules** — scoped component styles
- **IntersectionObserver** — scroll reveal animations (no extra library)
- **CSS Custom Properties** — theming
- **Google Fonts** — Inter

## Design Decisions

- One accent color scheme (blue)
- Max content width: 1140px
- Subtle scroll-triggered fade-in animations
- Card hover effects (lift + shadow)
- `prefers-reduced-motion` respected
- Mobile-responsive with hamburger menu
- PDF resume available for download from `/public`
