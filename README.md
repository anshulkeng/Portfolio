# Portfolio — Next.js + Tailwind + Framer Motion

## 1. Install
```bash
npm install
```

## 2. Run locally
```bash
npm run dev
```
Open http://localhost:3000

## 3. Customize your content
Everything text-based lives in **`lib/data.ts`** — name, tagline, badges,
stats, tech stack, projects, social links, and nav. Edit that one file
first before touching components.

Update the resume link and email in:
- `components/Hero.tsx` (Download Resume button)
- `components/CTA.tsx` / `lib/data.ts` (email + Get in Touch button)

## 4. Replace placeholder visuals
The hero circle uses an animated neural-network canvas
(`components/NeuralCanvas.tsx`) instead of a photo — on-brand for an AI/ML
profile. If you'd rather use your own photo, swap it into
`components/Hero.tsx` where `<NeuralCanvas />` is rendered.

Project card thumbnails are simple generated SVGs (`components/Projects.tsx`).
Replace with real screenshots via `next/image` when you have them — put
images in `/public` and reference as `/your-image.png`.

## 5. Deploy (free)
Push to GitHub, then:
1. Go to https://vercel.com → "Add New Project"
2. Import your GitHub repo
3. Vercel auto-detects Next.js — click Deploy
4. Add a custom domain in Project Settings → Domains (optional)

## Structure
```
app/
  layout.tsx     — fonts, metadata/SEO
  page.tsx       — assembles all sections
  globals.css    — base styles, focus states, reduced-motion support
components/
  Navbar, Hero, TechStack, About, Projects, StatsBar, CTA, Footer
  NeuralCanvas.tsx    — signature animated hero background
  MagneticButton.tsx  — buttons that pull toward the cursor
  CursorGlow.tsx       — ambient glow following the mouse (desktop only)
lib/data.ts      — ALL editable content lives here
```

## Notes
- Fully responsive: mobile nav collapses to a hamburger menu, grids stack on small screens.
- Respects `prefers-reduced-motion` — animations disable for users who need that.
- Keyboard focus is visible on all interactive elements.
- Cursor glow and mouse-tilt effects auto-disable on touch devices.
