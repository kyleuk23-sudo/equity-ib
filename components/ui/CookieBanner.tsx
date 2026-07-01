"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { getConsent, setConsent, onReopenRequest } from "@/lib/consent";

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
          <div className="glass-strong rounded-2xl p-4 shadow-glass">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white mb-1">We use cookies</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Necessary cookies keep the site working. With your permission we&apos;d also like to use
                  analytics cookies to understand traffic. View our{" "}
                  <a href="/legal/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => decide(true)}
                    className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => decide(false)}
                    className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Necessary Only
                  </button>
                </div>
              </div>
              <button onClick={() => decide(false)} aria-label="Dismiss cookie notice" className="text-slate-500 hover:text-white transition-colors flex-shrink-0">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
