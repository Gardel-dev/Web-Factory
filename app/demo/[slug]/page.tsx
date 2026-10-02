import { notFound } from "next/navigation";
import { prospects, prospectBySlug } from "@/lib/data";
import { TemplateRenderer } from "@/components/TemplateRenderer";

export function generateStaticParams() {
  return prospects.map((p) => ({ slug: p.slug }));
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prospect = prospectBySlug(slug);
  if (!prospect) notFound();
  return <TemplateRenderer prospect={prospect} />;
}
