# Equity IB

**The Global Partner Network for Serious Introducing Brokers**

A premium fintech website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 + custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner
- **UI Primitives**: Radix UI

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm / pnpm / yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
equity-ib/
├── app/
│   ├── layout.tsx          # Root layout, metadata, providers
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles, design tokens
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt
│   ├── about/page.tsx
│   ├── partners/page.tsx
│   ├── resources/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mega menu
│   │   └── Footer.tsx      # Animated footer
│   ├── sections/           # Page sections (Hero, FAQ, etc.)
│   └── ui/                 # Shared UI (ScrollProgress, BackToTop, CookieBanner)
├── lib/
│   └── utils.ts            # cn(), formatCurrency(), formatNumber()
├── content/
│   └── blog/               # MDX blog posts go here
└── public/                 # Static assets
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Why Us, Calculator, How It Works, Benefits, Dashboard, Testimonials, FAQ, CTA |
| `/about` | Mission, vision, values, timeline, leadership |
| `/partners` | Commission models (CPA, Rev Share, Hybrid), performance bonuses |
| `/resources` | IB Academy, guides, marketing toolkit, blog |
| `/contact` | Partner application form, schedule call, live chat |

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in the Vercel dashboard as needed.

### Other platforms

Any platform supporting Node.js 18+ works (Railway, Render, Fly.io, AWS Amplify). Run `npm run build && npm start`.

---

## Customisation

- **Colours**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Brand copy**: Update section components in `components/sections/`
- **Commission rates**: Edit `CommissionCalculator.tsx` formula
- **Blog**: Add `.mdx` files to `content/blog/`

---

## Backend Integration

The contact form posts to `console.log` (mock). To connect a real backend:

1. Create an API route at `app/api/apply/route.ts`
2. Update `ContactContent.tsx` `onSubmit` to `fetch('/api/apply', ...)`
3. Add email delivery (Resend, SendGrid) and CRM integration

---

## License

Private. All rights reserved.
