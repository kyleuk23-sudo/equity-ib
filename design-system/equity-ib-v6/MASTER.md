# Design System Master File — Equity IB V6

> **LOGIC:** When building a specific page, first check `design-system/equity-ib-v6/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file. Otherwise, follow the rules below.

---

**Project:** Equity IB V6 — ground-up redesign
**Curated:** 2026-08-11 (raw UI/UX Pro Max output reviewed and overridden below — see Curation Notes)
**Category:** B2B fintech partner platform
**Inspiration:** Apple, Stripe, Linear, Mercury, Ramp, Vercel, Notion, Arc — clarity, restraint, single-accent precision

---

## Curation Notes

The raw `--design-system` search returned a purple accent (`#8B5CF6`) and a serif/boutique
display font (Calistoga). Both were rejected:

- **Purple/violet is off-limits.** Established during the V5 pass and reconfirmed here — it
  reads as generic "AI SaaS," not fintech precision, and conflicts with the brief's explicit
  "minimal gradients" instruction.
- **Calistoga (display serif) doesn't match the named references.** Stripe, Linear, Mercury,
  Vercel, Arc all run single-family grotesque sans systems (SF Pro / Inter-class). A serif
  display face reads "boutique editorial," not "precision fintech."

All colors below were independently verified against WCAG AA using a relative-luminance
contrast script before being adopted — not taken as-given from the tool. Every text pair
listed passes 4.5:1 (small text) or better.

---

## Color Palette

| Role | Hex | Contrast vs bg | Usage |
|------|-----|-----------------|-------|
| `--bg` | `#0A0A0C` | — | Page background, deep charcoal (not pure black) |
| `--bg-elevated` (card) | `#131316` | — | Cards, panels, modals |
| `--fg-primary` | `#F7F4F0` | 18.0:1 | Headlines, warm white (not `#FFF`) |
| `--fg-secondary` | `#9C968F` | 6.8:1 | Body copy |
| `--fg-muted` | `#8B8580` | 5.4:1 | Labels, captions, timestamps — floor, never go darker |
| `--accent-gold` | `#D9A44E` | 8.8:1 | CTAs, active states, key numbers, brand marks only |
| `--on-accent` | `#0A0A0C` | 8.8:1 | Text/icons on gold fill |
| `--border` | `#2A2A2E` | 1.4:1 (decorative, not text) | Thin dividers, card outlines |
| `--destructive` | `#E5533D` | 5.2:1 (verify before use) | Form errors only |

**Single-accent discipline:** gold is reserved exclusively for the primary CTA, active/selected
states, and key numeric highlights (rebate figures, tier badges). Feature icons, secondary
UI, and decorative elements default to `--fg-primary` / `--fg-secondary` at reduced opacity —
**no second accent color** (no emerald, no alternating hues). This is a deliberate tightening
from V5, which alternated gold/emerald; V6 follows the Stripe/Linear pattern of near-monochrome
plus one reserved accent.

## Typography

- **Family:** Inter only (400/500/600/700) — single-family precision system, matches the
  named references directly (their "Modern Dark Cinema" pairing in the tool's own database).
- **Scale:** Display 56–72px / H1 40–48px / H2 28–32px / H3 20–24px / Body 16–18px / Label 12–13px
  (uppercase, tracking +0.06em)
- **Weights:** 700 for display/H1 (tracking −0.02em), 600 for H2/H3, 400 for body, 500 uppercase
  for labels/badges
- **Line-height:** 1.1 for display/headings, 1.6 for body

## Spacing (8px system)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` — maps directly onto Tailwind's default
4px-based scale (`space-1` through `space-32`); no custom config needed, just discipline about
which steps get used.

## Radius

`12px` (`rounded-xl`) default, `16px` (`rounded-2xl`) for hero-scale panels and modals.
Nothing larger — no `rounded-3xl`.

## Shadows (dark-surface calibrated)

Standard light-mode shadow recipes (`rgba(0,0,0,...)`) are invisible on a near-black
background, so elevation here comes from **border + subtle gold-tinted glow**, not black
drop-shadows:

| Level | Recipe | Usage |
|-------|--------|-------|
| `--elevation-sm` | `border: 1px solid var(--border)` | Default card |
| `--elevation-md` | `border + 0 8px 24px rgba(217,164,78,0.06)` | Hover state |
| `--elevation-lg` | `border + 0 16px 48px rgba(217,164,78,0.10)` | Featured/floating cards, modals |

## Motion

- Micro-interactions: 150–250ms, `ease-out` entering / `ease-in` exiting
- Complex transitions (page/section reveals): ≤400ms, spring-physics preferred over linear
- Scroll reveals: fade + 12–16px translate-y, staggered 40–60ms per item, `viewport={{once:true}}`
- Respect `prefers-reduced-motion: reduce` globally (already implemented in `globals.css`)
- Max 1–2 animated elements per viewport at once — no simultaneous multi-element motion

---

## Component Specs

### Buttons
- **Primary:** solid `--accent-gold` fill, `--on-accent` text, `rounded-xl`, 150ms hover
  (opacity 0.92, no translate/scale — Stripe/Linear avoid button jump on hover)
- **Secondary:** transparent, `--fg-primary` text, `--border` outline, hover fills `--bg-elevated`
- **Tertiary/text link:** `--fg-secondary`, permanent underline (never hover-only — WCAG
  "don't rely on color alone")

### Cards
- `--bg-elevated` fill, `--elevation-sm` at rest, `--elevation-md` on hover, `rounded-xl`,
  no hover-scale (translate-y −2px max, if any movement at all)

### Inputs
- Dark fill (`--bg-elevated`), `--border` outline, floating label (moves up + shrinks on
  focus/filled, not placeholder-only), focus state = `--accent-gold` border + soft ring,
  inline validation on blur (not keystroke), error text below field in `--destructive`

### Modals
- `--bg-elevated`, `rounded-2xl`, scrim `rgba(10,10,12,0.7)` + blur, animate from trigger
  (scale+fade), always keyboard-dismissible (Esc) with visible close affordance

### Navigation
- Transparent at top of page, `--bg` at 80% opacity + `backdrop-blur` after scroll threshold,
  active link = `--fg-primary` + 1px `--accent-gold` underline, inactive = `--fg-secondary`

### Badges / status indicators
- Pill shape, `--bg-elevated` fill + `--border`, text `--fg-secondary`; active/success state
  swaps text+dot to `--accent-gold` — never color-only, always paired with a label

---

## Page Pattern

Not the tool's "Minimal Single Column" (too thin for a multi-section conversion site with
6 rebate tiers, a calculator, and an application form). Using **editorial alternating
composition** instead, per the brief: hero (asymmetric/split, not centered-only) → alternating
left/right content blocks → floating card interludes → full-width calculator panel → tier
table as horizontal scroller/cards (not a plain stacked list) → application form as a
focused two-column split (context + form) → FAQ as accordion.

---

## Anti-Patterns (Do NOT Use)

- ❌ Purple/violet/indigo anywhere (accent or otherwise)
- ❌ A second accent color alongside gold (no emerald/blue pairing)
- ❌ Serif/display fonts — Inter only
- ❌ `rounded-3xl` or larger
- ❌ Light-mode shadow recipes on dark surfaces (invisible — use border+glow instead)
- ❌ Emojis as icons — SVG only (Lucide)
- ❌ Hover-only link underlines (color-alone violation)
- ❌ Layout-shifting hover transforms (width/height/scale that reflows siblings)
- ❌ More than 2 animated elements visible at once
- ❌ Text below `--fg-muted` (5.4:1) anywhere — hard floor

## Pre-Delivery Checklist

- [ ] Every new text/background pair verified via contrast script (not assumed)
- [ ] No purple, no second accent, no serif — matches curation notes above
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover transitions 150–300ms, no layout shift
- [ ] Focus states visible (ring or border-color change, never removed with nothing replacing it)
- [ ] `prefers-reduced-motion` respected
- [ ] Touch targets ≥44×44px, ≥8px spacing between adjacent targets
- [ ] Responsive: 375 / 768 / 1024 / 1440px
- [ ] No content hidden behind fixed navbar; no horizontal scroll on mobile
