"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Pseudo-3D glass orb -- layered radial gradients + blur + a specular
 * highlight fake a lit glass/crystal sphere without WebGL. Used sparingly
 * as a floating accent, never as a dominant element.
 */
export function GlassSphere({
  size = 120, className = "", floatDelay = 0,
}: { size?: number; className?: string; floatDelay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ width: size, height: size, position: "relative" }}
      animate={reduceMotion ? {} : { y: [0, -14, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55) 0%, transparent 22%),
            radial-gradient(circle at 65% 70%, rgba(212,175,55,0.25) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, rgba(230,199,106,0.12) 0%, rgba(8,11,18,0.55) 75%)
          `,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.2)",
        }}
      />
    </motion.div>
  );
}
