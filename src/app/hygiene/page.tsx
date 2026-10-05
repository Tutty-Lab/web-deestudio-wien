import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { MoreAbout } from "@/components/Blocks";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { HYGIENE } from "@/data/home";

export const metadata: Metadata = {
  title: "Hygiene & Sauberkeit | Dee Studio Wien",
  description:
    "Unsere Hygieneregeln in beiden Studios: Handschuhe, Desinfektion, sterilisierte Instrumente, Einwegmaterial und frische Wäsche nach jeder Behandlung.",
  alternates: { canonical: "/hygiene" },
};

const crumbs = [{ label: "Hygiene" }];

export default function HygienePage() {
  return (
    <>
      <Header />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, "/hygiene"))} />
      <main>
        <PageHead crumbs={crumbs} eyebrow="Sicherheit" title="Hygiene & Sauberkeit" intro={HYGIENE.intro} />
        <section className="section">
          <div className="wrap split top">
            <Reveal>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={HYGIENE.image} alt="Saubere Behandlungsplätze bei Dee Studio" fill priority sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ol className="hygiene-list">
                {HYGIENE.items.map((h, i) => (
                  <li key={h.title}>
                    <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h2 className="display h-sm">{h.title}</h2>
                      <p>{h.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>
        <MoreAbout current="/hygiene" />
      </main>
      <Footer />
    </>
  );
}
