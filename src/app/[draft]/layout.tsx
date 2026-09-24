import { notFound } from "next/navigation";
import BookingProvider from "@/components/BookingProvider";
import Footer from "@/components/Footer";
import DraftBar from "@/components/DraftBar";
import { DRAFTS, isDraft } from "@/data/drafts";

export const dynamicParams = false;

export function generateStaticParams() {
  return DRAFTS.map((d) => ({ draft: d.key }));
}

export default async function DraftLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ draft: string }>;
}) {
  const { draft } = await params;
  if (!isDraft(draft)) notFound();
  const dark = DRAFTS.find((d) => d.key === draft)?.dark;

  return (
    <div className={`site ${dark ? "theme-dark" : ""}`}>
      <BookingProvider>
        {children}
        <Footer base={`/${draft}`} />
        <DraftBar current={draft} />
      </BookingProvider>
    </div>
  );
}
