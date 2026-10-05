import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { STUDIOS } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum | Dee Studio Wien",
  description: "Impressum und Offenlegung von Dee Studio Wien gemäß § 5 ECG und § 25 MedienG.",
  alternates: { canonical: "/impressum" },
};

const crumbs = [{ label: "Impressum" }];

/**
 * Fields marked MISSING must be filled with the client's real data before go-live
 * (or generated with the WKO Impressum generator).
 */
const MISSING = "[bitte ergänzen]";
const OWNER = {
  name: MISSING,
  legalForm: MISSING,
  address: "Neubaugürtel 23a, 1150 Wien, Österreich",
  phone: "+43 660 6868888",
  email: "info@deestudio.at",
  uid: MISSING,
  register: MISSING,
  authority: MISSING,
  chamber: "Wirtschaftskammer Wien",
  trade: MISSING,
};

export default function ImprintPage() {
  return (
    <>
      <Header />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, "/impressum"))} />
      <main>
        <PageHead crumbs={crumbs} title="Impressum" intro="Informationen gemäß § 5 E-Commerce-Gesetz und Offenlegung gemäß § 25 Mediengesetz." />
        <section className="section">
          <div className="wrap prose">
            <h2 className="display h-md">Medieninhaber und Betreiber</h2>
            <ul className="info-list">
              <li>
                <span>Name / Firma</span>
                <span>{OWNER.name}</span>
              </li>
              <li>
                <span>Rechtsform</span>
                <span>{OWNER.legalForm}</span>
              </li>
              <li>
                <span>Anschrift</span>
                <span>{OWNER.address}</span>
              </li>
              <li>
                <span>Telefon</span>
                <span>{OWNER.phone}</span>
              </li>
              <li>
                <span>E-Mail</span>
                <span>{OWNER.email}</span>
              </li>
              <li>
                <span>UID-Nummer</span>
                <span>{OWNER.uid}</span>
              </li>
              <li>
                <span>Firmenbuch / GISA-Zahl</span>
                <span>{OWNER.register}</span>
              </li>
              <li>
                <span>Gewerbebehörde</span>
                <span>{OWNER.authority}</span>
              </li>
              <li>
                <span>Kammer</span>
                <span>{OWNER.chamber}</span>
              </li>
              <li>
                <span>Gewerbe</span>
                <span>{OWNER.trade}</span>
              </li>
              <li>
                <span>Gewerberecht</span>
                <span>Gewerbeordnung, abrufbar unter ris.bka.gv.at</span>
              </li>
            </ul>

            <section>
              <h2 className="display h-md" style={{ marginTop: 48 }}>
                Studios
              </h2>
              {STUDIOS.map((s) => (
                <p key={s.slug}>
                  {s.brand}, {s.street}, {s.city}, Telefon {s.phone}
                </p>
              ))}
            </section>

            <section>
              <h2 className="display h-md" style={{ marginTop: 48 }}>
                Grundlegende Richtung
              </h2>
              <p>Information über die Leistungen, Preise und Studios von Dee Studio Wien.</p>
            </section>

            <section>
              <h2 className="display h-md" style={{ marginTop: 48 }}>
                Online-Streitbeilegung
              </h2>
              <p>
                Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:
                ec.europa.eu/consumers/odr. Sie können allfällige Beschwerden auch an die oben angegebene E-Mail-Adresse
                richten.
              </p>
            </section>

            <section>
              <h2 className="display h-md" style={{ marginTop: 48 }}>
                Haftung für Inhalte und Links
              </h2>
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität übernehmen wir jedoch keine Gewähr. Für Inhalte externer Websites, auf die wir verlinken, sind
                ausschließlich deren Betreiber verantwortlich.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
