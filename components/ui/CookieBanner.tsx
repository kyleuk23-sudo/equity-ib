"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { getConsent, setConsent, onReopenRequest } from "@/lib/consent";
import { V6 } from "@/lib/designTokensV6";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) {
      const t = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => onReopenRequest(() => setVisible(true)), []);

  const decide = (analytics: boolean) => {
    setConsent(analytics);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-50"
        >
          <div className="card-v6 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(212,175,55,0.10)" }}>
                <Cookie className="w-4 h-4" style={{ color: V6.gold }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium mb-1" style={{ color: V6.fgPrimary }}>We use cookies</p>
                <p className="text-xs leading-relaxed" style={{ color: V6.fgSecondary }}>
                  Necessary cookies keep the site working. With your permission we&apos;d also like to use
                  analytics cookies to understand traffic. View our{" "}
                  <a href="/legal/privacy-policy" className="underline underline-offset-2 transition-colors" style={{ color: V6.gold }}>Privacy Policy</a>.
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => decide(true)}
                    className="btn-v6-primary text-xs font-semibold px-3 py-1.5 rounded-lg"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => decide(false)}
                    className="text-xs px-3 py-1.5 rounded-lg transition-colors"
                    style={{ color: V6.fgMuted }}
                  >
                    Necessary Only
                  </button>
                </div>
              </div>
              <button
                onClick={() => decide(false)}
                aria-label="Dismiss cookie notice"
                className="p-3.5 -m-3.5 transition-colors flex-shrink-0"
                style={{ color: V6.fgMuted }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
