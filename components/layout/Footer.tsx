import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { CookiePreferencesButton } from "@/components/ui/CookiePreferencesButton";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";

const NAV = [
  { label: "Why Equity IB", href: "/#why-equity-ib" },
  { label: "IB Rebates",    href: "/#ib-rebates"    },
  { label: "Why PU Prime",  href: "/#why-pu-prime"  },
  { label: "Insights",      href: "/insights"       },
  { label: "FAQ",           href: "/faq"              },
  { label: "Contact",       href: "/contact"         },
  { label: "Apply Now",     href: "/#apply"          },
];

const LEGAL = [
  { label: "Legal Centre",         href: "/legal"                      },
  { label: "Privacy Policy",       href: "/legal/privacy-policy"       },
  { label: "Terms & Conditions",   href: "/legal/terms"                },
  { label: "Risk Disclosure",      href: "/legal/risk-disclosure"      },
  { label: "IB Programme Terms",   href: "/legal/ib-terms"             },
  { label: "AML Policy",           href: "/legal/aml-policy"           },
  { label: "Contact & Complaints", href: "/legal/complaints"           },
];

export function Footer() {
  return (
    <footer className="relative mt-16" style={{ background: V6.bg, borderTop: `1px solid ${V6.border}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="group inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Equity IB"
                width={80}
                height={80}
                className="rounded-full w-20 h-20 transition-all duration-200 group-hover:scale-[1.03] group-hover:[filter:drop-shadow(0_0_14px_rgba(212,175,55,0.5))]"
              />
            </Link>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: V6.gold }}>
              Grow &bull; Earn &bull; Succeed
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: V6.fgSecondary }}>
              Helping Introducing Brokers build long-term recurring rebate businesses through
              premium broker partnerships.
            </p>
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: V6.success }} />
              <span className="text-xs font-medium" style={{ color: V6.success }}>Daily Rebate Settlements</span>
            </div>
            <div className="flex items-center gap-2.5 mb-5">
              <a
                href="https://www.instagram.com/equityib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Equity IB on Instagram"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgSecondary }}
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs leading-relaxed pt-4" style={{ color: V6.fgMuted, borderTop: `1px solid ${V6.border}` }}>
              Joining Equity IB is completely free. Apply today and begin your Introducing Broker
              journey with no registration or membership fees.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: V6.fgSecondary }}>Navigation</h3>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} data-track-event="footer" data-track-label={l.label} className="text-sm transition-colors" style={{ color: V6.fgMuted }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: V6.fgSecondary }}>Legal</h3>
            <ul className="space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} data-track-event="footer" data-track-label={l.label} className="text-sm transition-colors" style={{ color: V6.fgMuted }}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton className="text-sm transition-colors text-[#94A3B8] hover:text-[#F8FAFC]" />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: V6.fgSecondary }}>Get Started</h3>
            <p className="text-sm leading-relaxed mb-2" style={{ color: V6.fgSecondary }}>
              Ready to build a recurring rebate income? Joining is completely free — apply today.
            </p>
            <p className="text-xs mb-5" style={{ color: V6.fgMuted }}>No registration fees · No membership costs</p>
            <ButtonV6
              href="/#apply"
              data-track-event="cta"
              data-track-label="Apply Free Today"
              data-track-section="footer_cta"
            >
              Apply Free Today
            </ButtonV6>
          </div>
        </div>

        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${V6.border}` }}>
          <div>
            <p className="text-xs" style={{ color: V6.fgMuted }}>
              © {new Date().getFullYear()} Equity IB. All rights reserved. Trading CFDs and forex involves significant risk of loss.
            </p>
            <p className="text-xs mt-0.5" style={{ color: V6.fgMuted }}>
              Rebate rates are indicative. Actual rebates depend on your individual agreement, trading volume, broker and instruments traded.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: V6.success }} />
            <span className="text-xs" style={{ color: V6.fgMuted }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
