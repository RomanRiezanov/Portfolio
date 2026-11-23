# Roman Riezanov — Portfolio

Personal portfolio of a Frontend Lead: skills, live projects, experience and contacts.

Live: https://portfolio-navy-mu-91.vercel.app/

## Tech Stack

- React 19 + TypeScript
- Vite 6
- SCSS Modules and CSS custom properties (light and dark theme)
- IntersectionObserver for scroll reveal, no animation libraries
- Deployed on Vercel

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start the dev server      |
| `npm run build`   | Type check and build      |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                |

## Project Structure

```
public/
├── projects/            — screenshots of live projects (WebP)
└── CV_*.pdf             — downloadable resume
src/
├── data.ts              — all content: personal info, skills, projects, experience
├── hooks/
│   └── useScrollReveal.ts
├── screens/Home/
│   ├── HomeScreen.tsx   — page composition
│   └── components/      — Header, Hero, Skills, Projects, Experience, About, Contact, Footer, Section, Icons
├── styles/globals.scss  — theme tokens, reset, base styles
├── App.tsx
└── main.tsx
```

## Updating Content

All text lives in `src/data.ts`. To add a project, add an entry to `projects` and put a 720×480 WebP screenshot in `public/projects/`.

## Details

- Light and dark theme, starting from the system setting, with no flash on load
- `prefers-reduced-motion` is respected
- Responsive layout with a mobile menu
