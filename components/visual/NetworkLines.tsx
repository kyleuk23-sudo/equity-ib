"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
}

// Fixed, hand-placed node layout (not random) so the composition stays
// deliberate rather than noisy -- an abstract suggestion of a global
// partner network, not a literal diagram.
const NODES: Node[] = [
  { x: 60, y: 40 }, { x: 220, y: 15 }, { x: 340, y: 90 },
  { x: 140, y: 130 }, { x: 300, y: 210 }, { x: 40, y: 220 },
  { x: 200, y: 260 }, { x: 380, y: 40 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [3, 4], [4, 6], [3, 5],
  [2, 7], [5, 6], [0, 3],
];

/**
 * Abstract financial-network backdrop -- thin gold-tinted lines connecting
 * a handful of nodes, with one or two edges carrying a slow traveling
 * pulse. Deliberately low-opacity: texture, not a focal illustration.
 */
export function NetworkLines({ className = "", pulseEdges = [0, 4] }: { className?: string; pulseEdges?: number[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 420 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="nl-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="nl-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6C76A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
        </radialGradient>
      </defs>

      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x} y1={NODES[a].y}
          x2={NODES[b].x} y2={NODES[b].y}
          stroke="url(#nl-line)"
          strokeWidth="1"
        />
      ))}

      {!reduceMotion && pulseEdges.map((edgeIdx, i) => {
        const [a, b] = EDGES[edgeIdx];
        return (
          <motion.circle
            key={`pulse-${i}`}
            r="2.5"
            fill="#E6C76A"
            initial={{ opacity: 0 }}
            animate={{
              cx: [NODES[a].x, NODES[b].x],
              cy: [NODES[a].y, NODES[b].y],
              opacity: [0, 0.9, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: i * 1.6, ease: "easeInOut" }}
          />
        );
      })}

      {NODES.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i % 3 === 0 ? 3 : 2} fill="url(#nl-node)" />
      ))}
    </svg>
  );
}
