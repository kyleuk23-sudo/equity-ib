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

**Superseded 2026-08-11:** the color palette originally curated here (bg `#0A0A0C`, accent
`#D9A44E`, single `bg-elevated` tier) was replaced wholesale by an explicit "Premium Luxury
Colour System" brief with exact hex values for every role. Typography, spacing, radius,
motion, and the single-accent/anti-pattern rules below are unaffected and still apply.

All colors below were independently verified against WCAG AA using a relative-luminance
contrast script before being adopted — not taken as-given, whether from the tool or the brief.
Every text pair listed passes 4.5:1 (small text) or better.

---

## Color Palette

Three-tier background depth system (replaces the earlier single `bg`/`bg-elevated` pair):

| Role | Hex | Contrast vs bg | Usage |
|------|-----|-----------------|-------|
| `--bg` (Midnight Black) | `#080B12` | — | Page background, hero, nav, footer |
| `--bg-secondary` (Carbon Grey) | `#111827` | — | Section backgrounds, glass surfaces, feature panels, scrolled nav |
| `--bg-interactive` (Graphite) | `#1B2430` | — | Interactive cards, calculator, forms, tables, hover panels |
| `--fg-primary` | `#F8FAFC` | 18.8:1 | Headlines, nav, important content |
| `--fg-secondary` | `#CBD5E1` | 13.3:1 | Body copy, supporting text |
| `--fg-muted` | `#94A3B8` | 7.7:1 | Labels, metadata, captions — floor, never go darker |
| `--gold` | `#D4AF37` | 9.4:1 | Primary buttons, icons, dividers, tier badges, highlights, active nav |
| `--gold-champagne` | `#E6C76A` | 11.9:1 | Hover states, button gradients, premium highlights |
| `--gold-bronze` | `#8C6A1F` | 3.9:1 (large text/graphics only — fails small-text AA) | Active/pressed states, borders, shadows, gradient stop |
| `--on-accent` | `#080B12` | 9.4:1 | Text on gold/champagne fill |
| `--on-accent-pressed` | `#F8FAFC` | 4.8:1 | Text on bronze fill — **accessibility override**, see below |
| `--success` (Emerald) | `#22C55E` | 8.6:1 | Success badges, confirmations, "100% Free to Join" — sparingly |
| `--warning` (Amber) | `#F59E0B` | 9.2:1 | Warnings, risk reminders only |
| `--error` | `#EF4444` | 5.2:1 | Form/validation errors — **accessibility override**, see below |
| `--border` | `rgba(255,255,255,0.08)` | decorative | Generic dividers |
| `--border-gold` | `rgba(212,175,55,0.15)` | decorative | Card borders, nav bottom border on scroll |

**Two accessibility overrides from the literal brief** (the brief itself requires "at least
WCAG AA," so these are corrections, not deviations from intent):
1. Brief specified Crimson `#DC2626` for errors — measures 4.08:1 on Midnight Black, fails
   AA small-text (4.5:1). Swapped for `#EF4444`, same red family, 5.23:1.
2. Primary button's "Pressed" state (Bronze fill) with the brief's constant "Midnight Black"
   button text measures 3.93:1 — fails. Pressed state alone uses white (`--on-accent-pressed`)
   instead; base and hover states keep black text on Gold/Champagne exactly as specified.

**Single-accent discipline unchanged:** gold (in its base/champagne/bronze forms) is the only
accent. Feature icons and secondary UI default to `--fg-primary` / `--fg-secondary` — no
emerald/blue pairing outside the dedicated success/warning/error semantic roles above.

## Gradients & Shadows

- `--gradient-gold`: `linear-gradient(135deg, #8C6A1F 0%, #D4AF37 55%, #E6C76A 100%)`
- `--gradient-midnight`: `linear-gradient(180deg, #080B12 0%, #111827 100%)`
- `--shadow-sm`: `0 4px 12px rgba(0,0,0,0.20)`
- `--shadow-md`: `0 12px 30px rgba(0,0,0,0.30)`
- `--shadow-lg`: `0 24px 60px rgba(0,0,0,0.40)`
- `--shadow-gold-glow`: `0 0 30px rgba(212,175,55,0.20)` — sparingly, primary actions only

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

### Buttons — implemented as `.btn-v6-primary` / `.btn-v6-secondary` in `globals.css`
  (real CSS pseudo-selectors, not inline styles — base/hover/pressed each swap both fill
  and text color, which `style=` can't express)
- **Primary:** Gold fill + `--on-accent` (black) text at rest → Champagne fill on hover
  (+ `--shadow-gold-glow`, −1px lift) → Bronze fill + `--on-accent-pressed` (white) text
  on `:active` (accessibility override, see Color Palette notes)
- **Secondary:** transparent fill, Gold border + Gold text at rest → Gold fill + black text
  on hover (+ glow)
- **Tertiary/text link:** `--fg-secondary` → Gold on hover → Champagne on active, permanent
  underline (never hover-only — WCAG "don't rely on color alone")

### Cards — implemented as `.card-v6` in `globals.css`
- `--bg-secondary` (Carbon Grey) fill for feature/glass-surface cards, `--bg-interactive`
  (Graphite) for genuinely interactive ones (calculator, forms, tables)
- Border `--border-gold` (`rgba(212,175,55,0.15)`) at rest → `rgba(212,175,55,0.3)` + 
  `--shadow-gold-glow` + `--shadow-lg` on hover, −2px lift, `rounded-xl`/`rounded-2xl`

### Inputs
- Fill `--bg-secondary` (Carbon Grey), `--bg-interactive` (Graphite) border, floating label
  (moves up + shrinks on focus/filled, not placeholder-only), focus state = Gold border +
  soft ring, inline validation on blur (not keystroke), error text below field in `--error`

### Modals
- `--bg-secondary`, `rounded-2xl`, scrim `rgba(8,11,18,0.7)` + blur, animate from trigger
  (scale+fade), always keyboard-dismissible (Esc) with visible close affordance

### Navigation
- Transparent at top of page → Carbon Grey (`--bg-secondary` at ~90% opacity) + backdrop-blur
  + thin `--border-gold` bottom border after scroll threshold
- Active link = `--fg-primary` + 1px Gold underline, inactive = `--fg-secondary`, hover =
  warm white

### Badges / status indicators
- Pill shape, `--bg-secondary` fill + `--border`, text `--fg-secondary`; active/success state
  swaps text+dot to Gold or `--success` as appropriate — never color-only, always paired
  with a label

### Tier badges (rebate tiers — Starter through Diamond)
- Starter: `--fg-muted` (Slate Grey) · Bronze: `#A17E30` (lightened bronze, 5.19:1 —
  `--gold-bronze` itself fails small-text AA and this token gets reused at small
  sizes across TierTable/IBCalculator/Testimonials, see `lib/tierColorsV6.ts`)
  · Silver: a light neutral
  (silver-metallic, not yet assigned a token — pick during TierTable cascade) · Gold:
  `--gold` · Platinum: `--fg-primary` (near-white) · Diamond: light blue-white with a thin
  gold trim (`--border-gold`) — distinct per tier, cohesive because every tier still resolves
  to a value already in this palette

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
- ❌ Text below `--fg-muted` (7.7:1) anywhere — hard floor
- ❌ `--gold-bronze` as small text color on dark backgrounds (3.9:1, fails AA — large text/graphics/borders only)

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
