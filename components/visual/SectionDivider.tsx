import { V6 } from "@/lib/designTokensV6";

/**
 * Replaces hard section borders. Since sections deliberately share one
 * background (the V6 restraint decision), this isn't a color transition --
 * it's a fading gradient line with a small centered geometric mark, a
 * quiet "premium spacing" pause rather than a visible seam.
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px w-full ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${V6.border} 50%, transparent 100%)` }}
      />
      <svg
        width="16" height="16" viewBox="0 0 16 16"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: V6.bg }}
      >
        <rect x="6" y="6" width="4" height="4" fill={V6.gold} opacity="0.5" transform="rotate(45 8 8)" />
      </svg>
    </div>
  );
}
