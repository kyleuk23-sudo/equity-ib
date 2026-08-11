import Link from "next/link";
import { V6 } from "@/lib/designTokensV6";

interface Crumb {
  label: string;
  href?: string;
}

/**
 * Shared breadcrumb, replacing the text-slate-400 markup repeated across
 * every secondary page. Last item (no href) renders as the current page.
 */
export function BreadcrumbV6({ items, className = "" }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-2 text-xs flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" style={{ color: V6.fgMuted }}>/</span>}
              {isLast || !item.href ? (
                <span style={{ color: V6.fgSecondary }} aria-current={isLast ? "page" : undefined}>{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors" style={{ color: V6.fgMuted }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
