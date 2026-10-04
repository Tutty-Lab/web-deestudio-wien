import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead from "@/components/PageHead";
import PriceList from "@/components/PriceList";
import BookButton from "@/components/BookButton";
import { DEE_EXTRA_PRICES, HEAD_SPA, PRICES, getStudio, studioPath } from "@/data/site";

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

  return (
    <>
      <Header studio={s} />
      <main>
        <PageHead
          home={{ label: s.brand, href: studioPath(s) }}
          crumbs={[{ label: "Preise" }]}
          eyebrow={`${s.brand}, ${s.location}`}
          title="Preise"
          intro={
            s.headSpa ? (
              <>
                Head Spa, Wimpern, Nails und Pediküre. Mehr zum{" "}
                <Link href={studioPath(s, "head-spa")} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                  Head Spa Ritual
                </Link>
                .
              </>
            ) : (
              "Alle Preise für Nails und Pediküre. Online buchen oder einfach anrufen."
            )
          }
        />
        <section className="section">
          <div className="wrap">
            <PriceList groups={s.slug === HEAD_SPA.studio ? [...DEE_EXTRA_PRICES, ...PRICES] : PRICES} />
            <div className="btn-row center" style={{ marginTop: 16 }}>
              <BookButton studio={s.slug} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
