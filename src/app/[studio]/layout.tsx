import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { STUDIOS, getStudio } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return STUDIOS.map((s) => ({ studio: s.slug }));
}

export default async function StudioLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ studio: string }>;
}) {
  const studio = getStudio((await params).studio);
  if (!studio) notFound();

  return (
    <>
      {children}
      <Footer studio={studio} />
    </>
  );
}
