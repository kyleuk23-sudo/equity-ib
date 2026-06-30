"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Why Equity IB", href: "/#why-equity-ib" },
  { label: "IB Rebates",    href: "/#ib-rebates"    },
  { label: "Why PU Prime",  href: "/#why-pu-prime"  },
  { label: "FAQ",           href: "/faq"              },
  { label: "Contact",       href: "/contact"         },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Announcement bar */}
      <div className="fixed top-0 inset-x-0 z-50 h-10 flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(90deg, rgba(200,149,42,0.14) 0%, rgba(52,211,153,0.08) 50%, rgba(200,149,42,0.10) 100%)" }}>
        <Link href="/#apply" className="text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          Earn Up To $30 Per Lot As An Introducing Broker
          <ArrowRight className="w-3 h-3 text-primary" />
        </Link>
      </div>

      {/* Main header */}
      <header className="fixed top-10 inset-x-0 z-50">
        <motion.div
          animate={scrolled ? {
            background: "rgba(5,5,9,0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          } : {}}
          transition={{ duration: 0.3 }}
          className="mx-4 sm:mx-6 lg:mx-8 mt-2 rounded-2xl"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-6">

            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{ transition: "filter 200ms" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 10px rgba(200,149,42,0.6))"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "none"; }}
              >
                <Image src="/logo.png" alt="Equity IB" width={42} height={42} className="rounded-full w-[42px] h-[42px]" priority />
              </motion.div>
              <span className="font-extrabold text-[17px] tracking-tight hidden sm:block group-hover:opacity-90 transition-opacity">
                Equity <span className="gradient-text-gold">IB</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link
                href="/#apply"
                className="btn-glow relative flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all hover:opacity-90 overflow-hidden group"
              >
                <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                Apply Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden w-10 h-10 glass rounded-xl flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </nav>
        </motion.div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[88px] z-40 mx-4 rounded-2xl overflow-hidden"
            style={{ background: "rgba(5,5,9,0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="p-6 space-y-1">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/[0.06]">
                <Link
                  href="/#apply"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-3.5 rounded-xl text-sm w-full"
                >
                  Apply Free Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
