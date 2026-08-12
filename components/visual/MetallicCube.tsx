"use client";

import { motion, useReducedMotion } from "framer-motion";

const FACES = [
  { transform: "rotateY(0deg)",   shade: "linear-gradient(135deg, #C8952A 0%, #8C6A1F 100%)" },
  { transform: "rotateY(90deg)",  shade: "linear-gradient(135deg, #A6832B 0%, #6E5218 100%)" },
  { transform: "rotateY(180deg)", shade: "linear-gradient(135deg, #8C6A1F 0%, #5A4212 100%)" },
  { transform: "rotateY(-90deg)", shade: "linear-gradient(135deg, #A6832B 0%, #6E5218 100%)" },
  { transform: "rotateX(90deg)",  shade: "linear-gradient(135deg, #E6C76A 0%, #D4AF37 100%)" },
  { transform: "rotateX(-90deg)", shade: "linear-gradient(135deg, #6E5218 0%, #3D2E0D 100%)" },
];

/**
 * Real CSS 3D transform cube (transform-style: preserve-3d, six faces
 * translated along Z), not an image -- a genuine "custom 3D asset" per
 * the brief, without a WebGL dependency. Rotates slowly and continuously.
 */
export function MetallicCube({ size = 64, className = "" }: { size?: number; className?: string }) {
  const half = size / 2;
  const reduceMotion = useReducedMotion();
  return (
    <div className={className} style={{ width: size, height: size, perspective: 600 }}>
      <motion.div
        style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}
        animate={reduceMotion ? { rotateY: 24, rotateX: 12 } : { rotateY: 360, rotateX: [12, -8, 12] }}
        transition={{
          rotateY: { duration: 18, repeat: reduceMotion ? 0 : Infinity, ease: "linear" },
          rotateX: { duration: 9, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" },
        }}
      >
        {FACES.map((f, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              background: f.shade,
              opacity: 0.92,
              border: "1px solid rgba(255,255,255,0.12)",
              transform: `${f.transform} translateZ(${half}px)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
