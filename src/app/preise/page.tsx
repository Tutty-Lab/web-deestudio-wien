import type { Metadata } from "next";
import Header from "@/components/Header";
import PriceList from "@/components/PriceList";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = { title: "Preisliste | Dee Studio Wien" };

export default function PricesPage() {
  return (
    <>
      <Header />
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
                Gültig für beide Studios. Preise für Lashes und unser Head Spa (bei Dee Studio) erhalten Sie auf Anfrage oder direkt bei der
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
