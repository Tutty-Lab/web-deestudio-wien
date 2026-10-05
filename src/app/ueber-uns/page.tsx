import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { MoreAbout } from "@/components/Blocks";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { LETTER, TEAM } from "@/data/home";

export const metadata: Metadata = {
  title: "Über uns | Dee Studio Wien",
  description:
    "Wer hinter Dee Studio Wien steht: unser Brief an Sie, unser Team aus Nail Artists, Lash Artists und Head Spa, zwei Studios am Neubaugürtel und in der Fasangasse.",
  alternates: { canonical: "/ueber-uns" },
};

const crumbs = [{ label: "Über uns" }];

export default function AboutPage() {
  return (
    <>
      <Header />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, "/ueber-uns"))} />
      <main>
        <PageHead crumbs={crumbs} eyebrow="Dee Studio Wien" title="Über uns" intro={LETTER.excerpt} />

        <section className="section">
          <div className="wrap split top">
            <Reveal>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={LETTER.image} alt="Empfang bei Dee Studio Wien" fill priority sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100} className="letter">
              <h2 className="display h-lg" style={{ marginBottom: 28 }}>
                {LETTER.title}
              </h2>
              {LETTER.paragraphs.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
              <p className="serif letter-sign">{LETTER.signature}</p>
            </Reveal>
          </div>
        </section>

        <section id="team" className="section section-dark">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Team</p>
              <h2 className="display h-lg">Die Menschen hinter Dee Studio</h2>
              <p className="lead">{TEAM.intro}</p>
            </Reveal>
            <ul className="team-grid">
              {TEAM.groups.map((g) => (
                <li key={g.title}>
                  <div className="media bw" style={{ aspectRatio: "4 / 5" }}>
                    <Image src={g.image} alt={g.title} fill sizes="(max-width: 860px) 100vw, 33vw" />
                  </div>
                  <h3 className="display h-sm" style={{ marginTop: 16 }}>
                    {g.title}
                  </h3>
                  <p className="team-text">{g.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MoreAbout current="/ueber-uns" />
      </main>
      <Footer />
    </>
  );
}
