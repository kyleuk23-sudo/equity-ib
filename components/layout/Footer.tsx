import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const NAV = [
  { label: "Why Equity IB", href: "/#why-equity-ib" },
  { label: "IB Rebates",    href: "/#ib-rebates"    },
  { label: "Why PU Prime",  href: "/#why-pu-prime"  },
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
    <footer className="relative border-t border-white/[0.06] mt-16">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="group inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Equity IB"
                width={64}
                height={64}
                className="rounded-full w-16 h-16 transition-all duration-200 group-hover:scale-[1.03] group-hover:[filter:drop-shadow(0_0_12px_rgba(200,149,42,0.5))]"
              />
            </Link>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 gradient-text-gold">
              Grow &bull; Earn &bull; Succeed
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Helping Introducing Brokers build long-term recurring rebate businesses through
              premium broker partnerships.
            </p>
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium">Daily Rebate Settlements</span>
            </div>
            <div className="flex items-center gap-2.5 mb-5">
              {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed pt-4 border-t border-white/[0.05]">
              Joining Equity IB is completely free. Apply today and begin your Introducing Broker
              journey with no registration or membership fees.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Get Started</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-2">
              Ready to build a recurring rebate income? Joining is completely free — apply today.
            </p>
            <p className="text-xs text-slate-500 mb-5">No registration fees · No membership costs</p>
            <Link
              href="/#apply"
              className="btn-glow inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all hover:opacity-90 relative overflow-hidden group"
            >
              <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              Apply Free Today
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Equity IB. All rights reserved. Trading CFDs and forex involves significant risk of loss.
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              Rebate rates are indicative. Actual rebates depend on your individual agreement, trading volume, broker and instruments traded.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
            <span className="text-xs text-slate-400">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
