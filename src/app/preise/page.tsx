import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHead from "@/components/PageHead";
import PriceList from "@/components/PriceList";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = { title: "Preise | Dee Studio Wien" };

export default function PricesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHead
          crumbs={[{ label: "Preise" }]}
          eyebrow="Nails, Pediküre und Extras"
          title="Preise"
          intro={
            <>
              Gültig für beide Studios. Preise für Lashes und den{" "}
              <Link href="/head-spa" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                Head Spa
              </Link>{" "}
              erhalten Sie auf Anfrage oder bei der Online-Buchung.
            </>
          }
        />
        <section className="section">
          <div className="wrap">
            <PriceList />
            <div className="btn-row center" style={{ marginTop: 16 }}>
              <BookButton />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
