"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A tilted, slowly-rotating gold ring -- suggests a torus/halo without
 * real 3D geometry. The tilt is a static CSS perspective transform; only
 * the rotation animates, kept slow so it reads as ambient, not spinning.
 */
export function FloatingRing({
  size = 160, className = "", duration = 22,
}: { size?: number; className?: string; duration?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className={className} style={{ width: size, height: size, perspective: 800 }}>
      <motion.div
        style={{ width: "100%", height: "100%", transformStyle: "preserve-3d", transform: "rotateX(62deg)" }}
        animate={reduceMotion ? {} : { rotateZ: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none">
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8C6A1F" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#E6C76A" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" stroke="url(#ring-grad)" strokeWidth="2.5" opacity="0.55" />
        </svg>
      </motion.div>
    </div>
  );
}
