/**
 * Equity IB V6 design tokens — see design-system/equity-ib-v6/MASTER.md for
 * rationale and WCAG contrast verification. Kept as a standalone module during
 * the flagship (Hero/Navbar) phase so the rest of the site, still on V5 tokens,
 * isn't affected until the full cascade.
 */

export const V6 = {
  bg: "#0A0A0C",
  bgElevated: "#131316",
  fgPrimary: "#F7F4F0",
  fgSecondary: "#9C968F",
  fgMuted: "#8B8580",
  accentGold: "#D9A44E",
  onAccent: "#0A0A0C",
  border: "#2A2A2E",
  destructive: "#E5533D",
} as const;

export const V6_ELEVATION = {
  sm: `1px solid ${V6.border}`,
  md: `1px solid ${V6.border}, 0 8px 24px rgba(217,164,78,0.06)`,
  lg: `1px solid ${V6.border}, 0 16px 48px rgba(217,164,78,0.10)`,
} as const;
