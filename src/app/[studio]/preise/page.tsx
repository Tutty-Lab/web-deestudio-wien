import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead, { crumbPath } from "@/components/PageHead";
import PriceList from "@/components/PriceList";
import BookButton from "@/components/BookButton";
import SubNav from "@/components/SubNav";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { getStudio, studioPath } from "@/data/site";

type Params = { params: Promise<{ studio: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).studio);
  if (!s) return {};
  return {
    title: `Preise | ${s.brand} ${s.district}`,
    description: `Preisliste von ${s.brand}, ${s.street}: neues Set ab 50 €, Auffüllen ab 42 €, Shellac ab 30 €, Pediküre ab 40 €.`,
    alternates: { canonical: studioPath(s, "preise") },
  };
}

export default async function PricesPage({ params }: Params) {
  const s = getStudio((await params).studio);
  if (!s) notFound();
  const crumbs = [{ label: s.brand, href: studioPath(s) }, { label: "Preise" }];

  return (
    <>
      <Header studio={s} />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, studioPath(s, "preise")))} />
      <main>
        <PageHead
          variant="center"
          crumbs={crumbs}
          eyebrow={`${s.brand}, ${s.location}`}
          title="Preise"
          intro={
            <>
              {s.tagline}. Alle Behandlungen im Detail finden Sie unter{" "}
              <Link href={studioPath(s, "leistungen")} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                Leistungen
              </Link>
              .
            </>
          }
        />
        <SubNav label="Preisgruppen" items={s.prices.map((g) => ({ id: g.id, label: g.title }))} />
        <section className="section">
          <div className="wrap">
            <PriceList groups={s.prices} />
            <div className="btn-row center" style={{ marginTop: 16 }}>
              <BookButton studio={s.slug} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
