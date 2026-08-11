/**
 * Equity IB V6 design tokens — "Premium Luxury Colour System" brief, verbatim
 * hex values except where flagged. See design-system/equity-ib-v6/MASTER.md
 * for full rationale and WCAG contrast verification.
 *
 * Accessibility overrides from the literal brief (both required — the brief
 * itself mandates "at least WCAG AA"):
 *  - error: brief specified #DC2626 ("Crimson"), which measures 4.08:1 on
 *    Midnight Black — fails AA small-text (4.5:1). Swapped for #EF4444, same
 *    red family, 5.23:1.
 *  - Primary button's "Pressed" state (Deep Bronze fill) with the spec's
 *    black button text measures 3.93:1 — fails. Pressed state uses
 *    fgPrimary (white) text instead; base/hover states keep Midnight Black
 *    text on Gold/Champagne exactly as specified (9.36:1 / 11.94:1).
 */

export const V6 = {
  // Backgrounds — three-tier depth system
  bg: "#080B12",            // Midnight Black — page bg, hero, nav, footer
  bgSecondary: "#111827",   // Carbon Grey — section bg, cards, glass surfaces, scrolled nav
  bgInteractive: "#1B2430", // Graphite — interactive cards, calculator, forms, tables

  // Text
  fgPrimary: "#F8FAFC",
  fgSecondary: "#CBD5E1",
  fgMuted: "#94A3B8",

  // Gold system
  gold: "#D4AF37",
  goldChampagne: "#E6C76A", // hover
  goldBronze: "#8C6A1F",    // active/pressed, gradient stop
  onAccent: "#080B12",         // text on gold/champagne fill
  onAccentPressed: "#F8FAFC",  // text on bronze fill — accessibility override, see notes above

  // Semantic
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444", // accessibility override, see notes above (brief specified #DC2626)

  // Borders
  border: "rgba(255,255,255,0.08)",    // generic dividers
  borderGold: "rgba(212,175,55,0.15)", // card borders, nav bottom border on scroll
} as const;

export const V6_GRADIENT = {
  gold: "linear-gradient(135deg, #8C6A1F 0%, #D4AF37 55%, #E6C76A 100%)",
  midnight: "linear-gradient(180deg, #080B12 0%, #111827 100%)",
} as const;

export const V6_SHADOW = {
  sm: "0 4px 12px rgba(0,0,0,0.20)",
  md: "0 12px 30px rgba(0,0,0,0.30)",
  lg: "0 24px 60px rgba(0,0,0,0.40)",
  goldGlow: "0 0 30px rgba(212,175,55,0.20)",
} as const;
