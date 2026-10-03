import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StudioHome from "@/components/StudioHome";
import { getStudio, studioPath } from "@/data/site";

type Params = { params: Promise<{ studio: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).studio);
  if (!s) return {};
  return {
    title: `${s.brand} | Nagelstudio ${s.district}, ${s.location}`,
    description: `${s.intro} ${s.street}, ${s.city}.`,
    alternates: { canonical: studioPath(s) },
  };
}

export default async function StudioPage({ params }: Params) {
  const s = getStudio((await params).studio);
  if (!s) notFound();
  return <StudioHome studio={s} />;
}
