/**
 * Reusable soft mesh-gradient backdrop -- several overlapping low-opacity
 * radial gradients at different positions/hues within the gold family.
 * Each section can vary `variant` to feel distinct while sharing one
 * visual language, per the brief's "unique but cohesive" requirement.
 */
const VARIANTS: Record<string, string> = {
  hero: `
    radial-gradient(ellipse 60% 50% at 15% 20%, rgba(212,175,55,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 85% 10%, rgba(230,199,106,0.08) 0%, transparent 60%),
    radial-gradient(ellipse 70% 60% at 50% 100%, rgba(140,106,31,0.06) 0%, transparent 65%)
  `,
  calm: `
    radial-gradient(ellipse 50% 40% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 65%)
  `,
  corner: `
    radial-gradient(ellipse 55% 45% at 90% 100%, rgba(212,175,55,0.08) 0%, transparent 60%),
    radial-gradient(ellipse 40% 35% at 5% 0%, rgba(230,199,106,0.05) 0%, transparent 60%)
  `,
};

export function MeshGradientBg({ variant = "calm", className = "" }: { variant?: keyof typeof VARIANTS; className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ background: VARIANTS[variant] }}
      aria-hidden="true"
    />
  );
}
