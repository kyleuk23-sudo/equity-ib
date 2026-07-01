import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import { LegalDocContent } from "@/components/legal/LegalDocContent";
import { LEGAL_DOCS, getLegalDoc } from "@/lib/legalContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return LEGAL_DOCS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return { title: "Legal Document" };

  return {
    title:       doc.title,
    description: doc.description,
    alternates:  { canonical: `https://equityib.uk/legal/${doc.slug}` },
    openGraph: {
      title:       `${doc.title} | Equity IB`,
      description: doc.description,
      url:         `https://equityib.uk/legal/${doc.slug}`,
    },
    robots: { index: true, follow: false },
  };
}

export default async function LegalDocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();
  return <LegalDocContent doc={doc} />;
}
