"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { damping: 50, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 600 });

  const ringX = useSpring(mouseX, { damping: 22, stiffness: 180 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 180 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onPointerCheck = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const clickable = el.closest("a, button, [role='button'], input, select, textarea, label, [tabindex='0']");
      const cursorStyle = window.getComputedStyle(el).cursor;
      setIsPointer(!!clickable || cursorStyle === "pointer");
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onPointerCheck, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onPointerCheck);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.style.cursor = "";
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: isClicking ? 4 : isPointer ? 8 : 6,
            height: isClicking ? 4 : isPointer ? 8 : 6,
            backgroundColor: isPointer ? "#6366F1" : "#ffffff",
            opacity: isClicking ? 0.6 : 1,
          }}
          transition={{ duration: 0.12 }}
          className="rounded-full"
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: isClicking ? 24 : isPointer ? 44 : 32,
            height: isClicking ? 24 : isPointer ? 44 : 32,
            borderColor: isPointer ? "rgba(99,102,241,0.7)" : "rgba(255,255,255,0.25)",
            boxShadow: isPointer
              ? "0 0 20px rgba(99,102,241,0.35), 0 0 40px rgba(99,102,241,0.15)"
              : "none",
            opacity: isClicking ? 0.5 : 1,
          }}
          transition={{ duration: 0.18 }}
          className="rounded-full border"
        />
      </motion.div>
    </>
  );
}
