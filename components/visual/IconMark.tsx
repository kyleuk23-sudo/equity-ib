import { V6 } from "@/lib/designTokensV6";

/**
 * Bespoke icon presentation -- a custom hexagon backdrop (hand-drawn SVG
 * path, gradient stroke, corner accent) wrapping a Lucide glyph. Keeps one
 * icon library (per the V7 scope decision) while giving each concept an
 * illustrated, not just boxed, feel. Brightens on hover via the parent's
 * `group` class.
 */
export function IconMark({ children, size = 48 }: { children: React.ReactNode; size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.06]"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 48 48" width={size} height={size} className="absolute inset-0" fill="none">
        <defs>
          <linearGradient id="iconmark-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6C76A" />
            <stop offset="100%" stopColor="#8C6A1F" />
          </linearGradient>
        </defs>
        <path
          d="M24 3 L42 13.5 L42 34.5 L24 45 L6 34.5 L6 13.5 Z"
          stroke="url(#iconmark-stroke)"
          strokeWidth="1.25"
          opacity="0.55"
          className="transition-opacity duration-300 group-hover:opacity-90"
        />
        <circle cx="24" cy="3" r="1.5" fill={V6.gold} opacity="0.7" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
