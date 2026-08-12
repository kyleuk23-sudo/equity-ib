"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Soft diagonal gold light beams -- two or three blurred, angled gradient
 * bars, breathing very slowly in opacity. Cinematic ambient lighting, not
 * a spotlight or neon glow.
 */
export function LightBeams({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  // Fixed pixel offsets, not percentages -- keeps these decorative beams
  // independent of the parent's content-driven height, so a font-swap
  // reflow can't register as a (technically true, practically invisible)
  // layout shift for a blurred, pointer-events-none background element.
  const beams = [
    { top: -60, left: 80, width: 220, rotate: 24, delay: 0, duration: 9 },
    { top: 60,  left: 260, width: 160, rotate: 18, delay: 1.5, duration: 11 },
    { top: -90, left: 380, width: 140, rotate: 28, delay: 3, duration: 10 },
  ];
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {beams.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2 }}
          animate={reduceMotion ? {} : { opacity: [0.15, 0.32, 0.15] }}
          transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            width: b.width,
            height: 900,
            background: "linear-gradient(180deg, rgba(230,199,106,0.5) 0%, rgba(212,175,55,0.08) 55%, transparent 100%)",
            transform: `rotate(${b.rotate}deg)`,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
}
