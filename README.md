# NexusAI — Next-Gen AI Data Automation Platform

A premium, high-converting, responsive SaaS landing page built for the FB Hackathon Round 1.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (utility-first styling)
- **Zero runtime animation libraries** — all motion via native CSS transitions
- **Zero external UI component libraries** — built from scratch

## Color Palette (from colorPallet.pdf)

| Name | Hex |
|------|-----|
| Forsythia | `#FFC801` |
| Nocturnal Expedition | `#114C5A` |
| Arctic Powder | `#F1F6F4` |
| Mystic Mint | `#D9E8E2` |
| Deep Saffron | `#FF9932` |
| Oceanic Noir | `#172B36` |

## Typography (from fonts.pdf)

- **JetBrains Mono** — headers, code, labels, monospace elements
- **Inter** — body text, UI elements

## Features Implemented

### Feature 1: Matrix-Driven Pricing Engine
- Multi-dimensional config matrix in `lib/pricing.ts`
- Base USD rates × regional tariff multipliers → all prices derived dynamically
- Annual = monthly × 12 × 0.8 (20% off)
- Currencies: INR (₹), USD ($), EUR (€)
- State strictly isolated via `React.memo` + `useMemo` — price text nodes only re-render, no parent/layout reflow

### Feature 2: Bento-to-Accordion with State Persistence
- Desktop: Bento Grid with hover-tracked active index
- Mobile (<768px): Touch-optimized Accordion
- On resize past breakpoint: active index transfers from bento hover to accordion open state via `useRef`
- Zero external animation libraries — pure CSS `grid-template-rows` transition

### Motion Constraints (matched from scoring matrix)
- Micro-interactions (hover/toggle): 150–200ms `ease-out`
- Structural reflows (accordion/menu): 300–400ms `ease-in-out`
- All animations: hardware-accelerated CSS only (no Framer Motion, no WAAPI overhead)

### SEO & Accessibility
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dl>/<dt>/<dd>`, `<blockquote>/<cite>`, `<ul role="list">`
- Full Open Graph + Twitter Card metadata
- `aria-label`, `aria-expanded`, `aria-controls`, `aria-labelledby` on all interactive elements
- Keyboard navigable accordion/FAQ

### Asset Compliance
- All 14 SVGs from `asset_package.zip` integrated throughout the UI
- Both fonts loaded via Google Fonts in layout
- All 6 brand colors used systematically

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) and set:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

No environment variables required.

## Project Structure

```
nexus-ai/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky nav with scroll effect + mobile drawer
│   │   ├── Hero.tsx           # Hero + trusted companies section
│   │   ├── Features.tsx       # Bento Grid (desktop) / Accordion (mobile) + state sync
│   │   ├── Pricing.tsx        # Matrix pricing + isolated currency/billing switchers
│   │   ├── Testimonials.tsx   # Masonry testimonials grid
│   │   ├── FAQ.tsx            # Semantic DL accordion
│   │   ├── CTA.tsx            # Call-to-action section
│   │   └── Footer.tsx         # Multi-column footer
│   ├── globals.css            # CSS custom properties + transition classes
│   ├── layout.tsx             # Root layout + metadata + font imports
│   └── page.tsx               # Page composition
├── lib/
│   └── pricing.ts             # Multi-dimensional pricing matrix (all logic here)
├── public/
│   └── svgs/                  # All 14 SVGs from asset pack
├── tailwind.config.ts         # Brand color + font tokens
└── README.md
```

## Scoring Rationale

| Criterion | Implementation |
|-----------|---------------|
| Dynamic pricing matrix | `lib/pricing.ts` — base rates + tariffs, no hardcoded UI |
| Re-render isolation | `React.memo` on `PriceDisplay`, `CurrencySwitcher`, `BillingToggle` |
| Bento→Accordion | `useRef` carries hover index to accordion on resize |
| Zero banned libs | No Framer Motion, Shadcn, Radix, HeadlessUI in deps |
| Semantic HTML | Full landmark roles, DL for FAQ, article/section throughout |
| OG/Meta tags | Complete in `layout.tsx` |
| Performance | CSS-only transitions, no blocking animations, fonts via preconnect |
| Asset compliance | All 14 SVGs + both fonts + all 6 colors used |
| Responsive | Mobile-first, fluid breakpoints, no horizontal overflow |
| Motion accuracy | 150-200ms ease-out micro / 300-400ms ease-in-out structural |
