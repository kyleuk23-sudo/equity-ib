import { V6 } from "@/lib/designTokensV6";

/**
 * Single source of truth for per-tier accent color, shared by TierTable,
 * IBCalculator, Testimonials and PartnersContent so they never drift.
 *
 * Bronze deliberately does NOT use V6.goldBronze (#8C6A1F) — that token
 * measures 3.93:1 against bg, which only clears the 3:1 large-text/graphics
 * floor. It gets reused here at small and borderline-large text sizes
 * (tier badges, progression labels) across several components, so a single
 * failing value would need fixing in every consumer. #A17E30 (5.19:1)
 * passes small-text AA everywhere instead. Diamond's light blue-white is
 * verified separately at 17.15:1 against bg. See
 * design-system/equity-ib-v6/MASTER.md.
 */
export const TIER_COLORS_V6: Record<string, string> = {
  Starter: V6.fgMuted,
  Bronze: "#A17E30",
  Silver: V6.fgSecondary,
  Gold: V6.gold,
  Platinum: V6.fgPrimary,
  Diamond: "#E0F2FE",
};
