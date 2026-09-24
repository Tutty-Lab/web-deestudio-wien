import type { Metadata } from "next";
import Header from "@/components/Header";
import PriceList from "@/components/PriceList";
import BookButton from "@/components/BookButton";
import { DRAFTS } from "@/data/drafts";

export const dynamicParams = false;

export function generateStaticParams() {
  return DRAFTS.map((d) => ({ draft: d.key }));
}

export const metadata: Metadata = { title: "Preisliste | Dee Studio Wien" };

export default async function PricesPage({ params }: { params: Promise<{ draft: string }> }) {
  const { draft } = await params;

  return (
    <>
      <Header base={`/${draft}`} />
      <main style={{ paddingTop: "var(--header-h)" }}>
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow">Nails · Pediküre · Extras</p>
              <h1 className="display h-xl" style={{ margin: 0 }}>
                Preisliste
              </h1>
              <span className="rule" />
              <p className="lead" style={{ textAlign: "center" }}>
                Gültig für beide Studios. Preise für Lashes und Head Spa erhalten Sie auf Anfrage oder direkt bei der
                Online-Buchung.
              </p>
            </div>
            <PriceList />
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <BookButton className="btn btn-solid" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
