"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { V6, V6_GRADIENT } from "@/lib/designTokensV6";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99990] flex flex-col items-center justify-center"
          style={{ background: V6.bg }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{ background: "radial-gradient(ellipse 60% 45% at 50% 40%, rgba(212,175,55,0.10) 0%, transparent 70%)" }}
          />

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="relative mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 0 0 rgba(212,175,55,0.5), 0 0 40px rgba(212,175,55,0.3)" }}
            />
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212,175,55,0.5), 0 0 20px rgba(212,175,55,0.3)",
                  "0 0 0 12px rgba(212,175,55,0), 0 0 40px rgba(212,175,55,0.5)",
                  "0 0 0 0 rgba(212,175,55,0.5), 0 0 20px rgba(212,175,55,0.3)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full"
            >
              <Image
                src="/logo.png"
                alt="Equity IB"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xs mb-8 tracking-widest uppercase"
            style={{ color: V6.fgMuted }}
          >
            Grow &bull; Earn &bull; Succeed
          </motion.div>

          <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: V6.border }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full rounded-full"
              style={{ background: V6_GRADIENT.gold }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs mt-4"
            style={{ color: V6.fgMuted }}
          >
            Earn Up To $30 Per Lot
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
