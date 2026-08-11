"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface SharedProps {
  children: ReactNode;
  icon?: boolean;
  className?: string;
  loading?: boolean;
  loadingText?: string;
  "data-track-event"?: string;
  "data-track-label"?: string;
  "data-track-section"?: string;
}

interface PrimaryProps extends SharedProps {
  variant?: "primary";
  href?: string;
}

interface SecondaryProps extends SharedProps {
  variant: "secondary";
  href?: string;
}

type ButtonV6Props = (PrimaryProps | SecondaryProps) &
  Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

/**
 * V6 luxury button — two variants, three states each (base/hover/pressed),
 * implemented via .btn-v6-primary / .btn-v6-secondary in globals.css since
 * the gold -> champagne -> bronze progression needs real :hover/:active
 * pseudo-selectors. See design-system/equity-ib-v6/MASTER.md.
 */
export function ButtonV6({
  variant = "primary", href, children, icon = true, className = "",
  loading = false, loadingText = "Submitting…", disabled, ...rest
}: ButtonV6Props) {
  const isPrimary = variant === "primary";
  const base = isPrimary ? "btn-v6-primary" : "btn-v6-secondary";
  const combinedClassName = `${base} inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:pointer-events-none ${className}`.trim();

  const content = loading ? (
    <>
      <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
      {loadingText}
    </>
  ) : (
    <>
      {children}
      {icon && <ArrowUpRight className="w-4 h-4" />}
    </>
  );

  if (href?.startsWith("/") && !href.includes("#")) {
    return (
      <Link href={href} className={combinedClassName} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
}
