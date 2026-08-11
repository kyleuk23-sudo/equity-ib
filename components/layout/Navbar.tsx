"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { V6 } from "@/lib/designTokensV6";

const NAV_LINKS = [
  { label: "Why Equity IB", href: "/#why-equity-ib" },
  { label: "IB Rebates",    href: "/#ib-rebates"    },
  { label: "Why PU Prime",  href: "/#why-pu-prime"  },
  { label: "FAQ",           href: "/faq"              },
  { label: "Contact",       href: "/contact"         },
];

const SECTION_IDS = ["why-equity-ib", "ib-rebates", "why-pu-prime"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (els.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const isActive = (href: string) => href.includes(`#${activeSection}`) && activeSection !== null;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <motion.div
          animate={
            scrolled
              ? {
                  background: `${V6.bgSecondary}E6`,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderBottomColor: V6.borderGold,
                }
              : { background: "transparent", backdropFilter: "blur(0px)", borderBottomColor: "transparent" }
          }
          transition={{ duration: 0.3 }}
          className="border-b"
          style={{ borderBottomWidth: 1 }}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px] gap-6">
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <Image src="/logo.png" alt="Equity IB" width={36} height={36} className="rounded-full" priority />
              <span className="font-semibold text-[16px] tracking-tight hidden sm:block" style={{ color: V6.fgPrimary }}>
                Equity <span style={{ color: V6.gold }}>IB</span>
              </span>
            </Link>

            <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    data-track-event="nav"
                    data-track-label={item.label}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                    style={{ color: isActive(item.href) ? V6.fgPrimary : V6.fgSecondary }}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute left-4 right-4 -bottom-0.5 h-px"
                        style={{ background: V6.gold }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                href="/#apply"
                data-track-event="cta"
                data-track-label="Apply Now"
                data-track-section="navbar_desktop"
                className="btn-v6-primary inline-flex items-center font-semibold px-5 py-2.5 rounded-xl text-sm"
              >
                Apply Now
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}` }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-4 h-4" style={{ color: V6.fgPrimary }} />
              ) : (
                <Menu className="w-4 h-4" style={{ color: V6.fgPrimary }} />
              )}
            </button>
          </nav>
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[80px] z-40 mx-4 rounded-2xl overflow-hidden"
            style={{ background: `${V6.bgSecondary}F5`, backdropFilter: "blur(24px)", border: `1px solid ${V6.border}` }}
          >
            <div className="p-6 space-y-1">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    data-track-event="nav"
                    data-track-label={item.label}
                    className="block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors"
                    style={{ color: V6.fgSecondary }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4" style={{ borderTop: `1px solid ${V6.border}` }}>
                <Link
                  href="/#apply"
                  onClick={() => setMenuOpen(false)}
                  data-track-event="cta"
                  data-track-label="Apply Now"
                  data-track-section="navbar_mobile"
                  className="btn-v6-primary flex items-center justify-center font-semibold px-5 py-3.5 rounded-xl text-sm w-full"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
