import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { V6 } from "@/lib/designTokensV6";

export const mdxComponents: MDXRemoteProps["components"] = {
  h2: (props) => (
    <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 tracking-[-0.02em]" style={{ color: V6.fgPrimary }} {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold mt-8 mb-3" style={{ color: V6.fgPrimary }} {...props} />
  ),
  p: (props) => (
    <p className="leading-relaxed mb-5" style={{ color: V6.fgSecondary }} {...props} />
  ),
  ul: (props) => (
    <ul className="space-y-2 mb-5 list-disc list-outside pl-5" style={{ color: V6.fgSecondary }} {...props} />
  ),
  ol: (props) => (
    <ol className="space-y-2 mb-5 list-decimal list-outside pl-5" style={{ color: V6.fgSecondary }} {...props} />
  ),
  li: (props) => (
    <li className="leading-relaxed pl-1" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold" style={{ color: V6.fgPrimary }} {...props} />
  ),
  a: ({ href, ...props }) => {
    const isInternal = href?.startsWith("/");
    if (isInternal && href) {
      return <Link href={href} className="underline underline-offset-2 transition-colors" style={{ color: V6.gold }} {...props} />;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition-colors"
        style={{ color: V6.gold }}
        {...props}
      />
    );
  },
  blockquote: (props) => (
    <blockquote
      className="pl-4 my-6 italic"
      style={{ borderLeft: `2px solid ${V6.borderGold}`, color: V6.fgSecondary }}
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6 rounded-xl" style={{ border: `1px solid ${V6.border}` }}>
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead style={{ background: "rgba(212,175,55,0.06)" }} {...props} />,
  th: (props) => (
    <th className="text-left text-xs font-semibold uppercase tracking-wide px-4 py-3" style={{ color: V6.fgSecondary }} {...props} />
  ),
  td: (props) => (
    <td className="px-4 py-3" style={{ color: V6.fgSecondary, borderTop: `1px solid ${V6.border}` }} {...props} />
  ),
};
