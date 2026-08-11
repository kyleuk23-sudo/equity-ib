import { V6 } from "@/lib/designTokensV6";

/**
 * Single source of truth for per-tier accent color, shared by TierTable and
 * IBCalculator so the two never drift. Every value resolves to a token
 * already defined (and contrast-verified) in designTokensV6.ts — Diamond's
 * light blue-white is the one exception, verified separately at 17.15:1
 * against bg. See design-system/equity-ib-v6/MASTER.md.
 */
export const TIER_COLORS_V6: Record<string, string> = {
  Starter: V6.fgMuted,
  Bronze: V6.goldBronze,
  Silver: V6.fgSecondary,
  Gold: V6.gold,
  Platinum: V6.fgPrimary,
  Diamond: "#E0F2FE",
};
