"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface SharedProps {
  children: ReactNode;
  icon?: boolean;
  className?: string;
  /** Shows a spinner in place of the icon and disables the button — for form submits. */
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

type ButtonProps = (PrimaryProps | SecondaryProps) &
  Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

const PRIMARY_STYLE =
  "relative inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-sm overflow-hidden group transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

const PRIMARY_INLINE_STYLE = {
  background: "linear-gradient(135deg, #F5C842 0%, #C8952A 55%, #A97A1F 100%)",
  color: "#050509",
  boxShadow: "0 8px 30px rgba(200,149,42,0.28)",
};

const SECONDARY_STYLE =
  "inline-flex items-center justify-center gap-1.5 text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/50 transition-colors text-stone-300";

/**
 * Two variants only, matching the luxury design system:
 * - primary: gold-gradient, shine sweep, hover lift — for the one action per
 *   section that should actually convert
 * - secondary: a plain underlined text link — never a second competing button
 */
export function Button({
  variant = "primary", href, children, icon = true, className = "",
  loading = false, loadingText = "Submitting…", disabled, ...rest
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const style = isPrimary ? PRIMARY_STYLE : SECONDARY_STYLE;
  const inlineStyle = isPrimary ? PRIMARY_INLINE_STYLE : undefined;

  const content = loading ? (
    <>
      <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
      {loadingText}
    </>
  ) : (
    <>
      {isPrimary && (
        <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      )}
      {children}
      {icon && <ArrowRight className={isPrimary ? "w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" : "w-3.5 h-3.5"} />}
    </>
  );

  const combinedClassName = `${style} ${className}`.trim();

  if (href?.startsWith("/") && !href.includes("#")) {
    return (
      <Link href={href} className={combinedClassName} style={inlineStyle} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} style={inlineStyle} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} style={inlineStyle} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
}
