import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { OWNER } from "@/data/legal";

export const metadata: Metadata = {
  title: "Datenschutz | Dee Studio Wien",
  description: "Datenschutzerklärung von Dee Studio Wien gemäß DSGVO: Hosting, Google Maps, Treatwell, Kontakt und Ihre Rechte.",
  alternates: { canonical: "/datenschutz" },
};

const crumbs = [{ label: "Datenschutz" }];

// Describes what this site actually does (static hosting, no cookies or analytics, two-click Google Maps,
// self-hosted fonts). Controller details must match the Impressum; review with the client before go-live.
const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: "Verantwortlicher",
    p: [
      `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${OWNER.name}, ${OWNER.business}, ${OWNER.seat}, Telefon ${OWNER.phone}, E-Mail ${OWNER.email}.`,
    ],
  },
  {
    h: "Hosting und Server-Logfiles",
    p: [
      "Diese Website wird bei Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaka, Zypern, gehostet. Die Server stehen in einem Rechenzentrum in Frankfurt am Main (Deutschland). Beim Aufruf werden technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browsertyp in Server-Logfiles verarbeitet, um die Website sicher und stabil bereitzustellen.",
      "Rechtsgrundlage ist unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Mit Hostinger besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.",
    ],
  },
  {
    h: "Cookies und Einwilligung",
    p: [
      "Beim ersten Besuch fragen wir, ob Sie neben den technisch notwendigen Speicherungen auch Analyse- und Marketing-Cookies erlauben. Ihre Auswahl speichern wir im lokalen Speicher Ihres Browsers. Sie können sie jederzeit über den Link Cookie-Einstellungen im Fußbereich der Website ändern oder widerrufen.",
      "Schriftarten werden lokal von unserem Server geladen, es findet keine Verbindung zu Google Fonts statt.",
    ],
  },
  {
    h: "Google Analytics und Google Ads",
    p: [
      "Nur wenn Sie Alle akzeptieren wählen, nutzen wir Google Analytics 4 (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland), um die Nutzung unserer Website statistisch auszuwerten. Dabei werden Cookies gesetzt und Daten wie gekürzte IP-Adresse, Geräteinformationen und besuchte Seiten verarbeitet, gegebenenfalls auch in den USA. Außerdem messen wir mit Google Ads (Conversion-Tracking), ob Besucherinnen und Besucher, die über eine Anzeige kommen, einen Termin buchen oder uns anrufen. Diese Daten können von Google auch für personalisierte Werbung genutzt werden.",
      "Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Ohne Einwilligung werden Google Analytics und Google Ads nicht geladen. Die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework.",
    ],
  },
  {
    h: "Google Maps",
    p: [
      "Auf unseren Studio-Seiten zeigen wir zunächst ein Kartenbild, das auf unserem eigenen Server liegt (Kartendaten © OpenStreetMap-Mitwirkende). Dabei werden keine Daten an Dritte übertragen.",
      "Die interaktive Karte von Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) wird nur geladen, wenn Sie auf „Interaktive Karte“ klicken oder im Cookie-Hinweis Alle akzeptieren gewählt haben. Erst dann werden Daten wie Ihre IP-Adresse an Google übertragen, gegebenenfalls auch in die USA. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.",
    ],
  },
  {
    h: "Online-Buchung über Treatwell",
    p: [
      "Für Terminbuchungen verlinken wir auf Treatwell. Mit dem Klick auf „Online buchen“ verlassen Sie unsere Website. Für die Verarbeitung Ihrer Daten bei der Buchung ist Treatwell verantwortlich, es gilt die Datenschutzerklärung von Treatwell.",
    ],
  },
  {
    h: "Kontakt per Telefon, E-Mail oder Instagram",
    p: [
      "Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage und für die Terminvereinbarung (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.",
    ],
  },
  {
    h: "Ihre Rechte",
    p: [
      `Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Wenden Sie sich dazu an ${OWNER.email}.`,
      "Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Österreichischen Datenschutzbehörde (dsb.gv.at) beschweren.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, "/datenschutz"))} />
      <main>
        <PageHead crumbs={crumbs} title="Datenschutz" intro="Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO." />
        <section className="section">
          <div className="wrap prose">
            {SECTIONS.map((s) => (
              <section key={s.h}>
                <h2 className="display h-md">{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            <p className="price-note" style={{ marginTop: 48 }}>
              Stand: Oktober 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
