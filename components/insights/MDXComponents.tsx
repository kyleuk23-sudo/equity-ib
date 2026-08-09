import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: MDXRemoteProps["components"] = {
  h2: (props) => (
    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-12 mb-4 tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold text-white mt-8 mb-3" {...props} />
  ),
  p: (props) => (
    <p className="text-slate-400 leading-relaxed mb-5" {...props} />
  ),
  ul: (props) => (
    <ul className="space-y-2 mb-5 list-disc list-outside pl-5 text-slate-400" {...props} />
  ),
  ol: (props) => (
    <ol className="space-y-2 mb-5 list-decimal list-outside pl-5 text-slate-400" {...props} />
  ),
  li: (props) => (
    <li className="leading-relaxed pl-1" {...props} />
  ),
  strong: (props) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  a: ({ href, ...props }) => {
    const isInternal = href?.startsWith("/");
    if (isInternal && href) {
      return <Link href={href} className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors" {...props} />;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
        {...props}
      />
    );
  },
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-primary/40 pl-4 my-6 text-slate-300 italic"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-white/[0.08]">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-white/[0.04]" {...props} />,
  th: (props) => (
    <th className="text-left text-xs font-semibold text-slate-300 uppercase tracking-wide px-4 py-3" {...props} />
  ),
  td: (props) => (
    <td className="px-4 py-3 text-slate-400 border-t border-white/[0.05]" {...props} />
  ),
};
