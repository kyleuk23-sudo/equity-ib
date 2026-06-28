import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Broker Portal", href: "/#portal" },
    { label: "Earnings Calculator", href: "/#calculator" },
    { label: "Tier System", href: "/#tiers" },
    { label: "Daily Rebates", href: "/#calculator" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Partner Stories", href: "/#testimonials" },
    { label: "Press", href: "/about" },
    { label: "Apply Now", href: "/contact" },
  ],
  "Marketing Hub": [
    { label: "Landing Pages", href: "/marketing-hub/landing-pages" },
    { label: "Email Templates", href: "/marketing-hub/email-templates" },
    { label: "Social Content", href: "/marketing-hub/social-media" },
    { label: "All Resources", href: "/marketing-hub" },
  ],
  Legal: [
    { label: "Legal Centre",        href: "/legal"                       },
    { label: "Privacy Policy",      href: "/legal/privacy-policy"        },
    { label: "Terms & Conditions",  href: "/legal/terms"                 },
    { label: "Risk Disclosure",     href: "/legal/risk-disclosure"       },
    { label: "IB Programme Terms",  href: "/legal/ib-terms"              },
    { label: "Cookie Policy",       href: "/legal/cookie-policy"         },
    { label: "AML Policy",          href: "/legal/aml-policy"            },
    { label: "Disclaimer",          href: "/legal/disclaimer"            },
    { label: "Marketing Disclaimer",href: "/legal/marketing-disclaimer"  },
    { label: "Copyright Notice",    href: "/legal/copyright"             },
    { label: "Contact & Complaints",href: "/legal/complaints"            },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] mt-24">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-block mb-3">
              <Image
                src="/logo.png"
                alt="Equity IB"
                width={72}
                height={72}
                className="rounded-full w-[72px] h-[72px] transition-all duration-200 group-hover:scale-[1.03] group-hover:[filter:drop-shadow(0_0_12px_rgba(200,149,42,0.5))]"
              />
            </Link>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 gradient-text-gold">
              Grow &bull; Earn &bull; Succeed
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Helping Introducing Brokers build long-term recurring rebate businesses through premium broker partnerships.
            </p>
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium">Daily Rebate Settlements</span>
            </div>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Equity IB. All rights reserved. Trading CFDs and forex involves significant risk of loss.
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              Rebate rates up to $30 per lot are indicative. Actual rebates depend on your individual agreement, trading volume, broker and instruments traded.
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
