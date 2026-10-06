import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { OWNER } from "@/data/legal";
import { STUDIOS } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum | Dee Studio Wien",
  description: "Impressum und Offenlegung von Dee Studio Wien gemäß § 5 ECG und § 25 MedienG.",
  alternates: { canonical: "/impressum" },
};

const crumbs = [{ label: "Impressum" }];

export default function ImprintPage() {
  const rows: [string, string][] = [
    ["Unternehmen", OWNER.business],
    ["Inhaber", OWNER.name],
    ["Rechtsform", OWNER.legalForm],
    ["Firmensitz", OWNER.seat],
    ["Telefon", OWNER.phone],
    ["E-Mail", OWNER.email],
    ["UID-Nummer", OWNER.uid],
    ["Steuernummer", OWNER.taxNumber],
    ["Gewerbebehörde", OWNER.authority],
    ["Kammer", OWNER.chamber],
    ["Gewerberecht", "Gewerbeordnung, abrufbar unter ris.bka.gv.at"],
  ];

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
              {rows.map(([k, v]) => (
                <li key={k}>
                  <span>{k}</span>
                  {k === "E-Mail" ? <a href={`mailto:${v}`}>{v}</a> : k === "Telefon" ? <a href={OWNER.phoneHref}>{v}</a> : <span>{v}</span>}
                </li>
              ))}
            </ul>

            <section>
              <h2 className="display h-md" style={{ marginTop: 48 }}>
                Standorte
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
              <p>Information über die Leistungen, Preise und Standorte von Dee Studio Wien.</p>
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
