import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd, { salonLd } from "@/components/JsonLd";
import { STUDIOS, studioPath } from "@/data/site";

export const metadata: Metadata = {
  title: "Dee Studio Wien | Nagelstudios Neubaugürtel & Fasangasse",
  description:
    "Dee Studio Wien: zwei Nagelstudios. Dee Studio am Neubaugürtel (1150) mit Nails, Lashes und Head Spa, Vanilla by Dee in der Fasangasse (1030).",
  alternates: { canonical: "/" },
};

/** Group landing page: short introduction, then one entrance per studio. */
export default function LandingPage() {
  return (
    <>
      <Header transparent />
      {STUDIOS.map((s) => (
        <JsonLd key={s.slug} data={salonLd(s)} />
      ))}
      <main>
        {/* INTRO */}
        <section className="hero hero-short">
          <Image src="/images/studio/dee-studio-neubauguertel-innen.webp" alt="Dee Studio Wien" fill priority sizes="100vw" />
          <div className="wrap hero-inner">
            <h1 className="display h-xl">
              Ja! Das ist
              <br />
              Dee Studio!
            </h1>
            <p className="serif hero-sub">Zwei Studios in Wien</p>
            <div className="btn-row center">
              <a className="btn btn-light" href="#studios">
                Studio wählen
              </a>
            </div>
          </div>
        </section>

        {/* STUDIO ENTRANCES */}
        <section id="studios" className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Wählen Sie Ihr Studio</p>
              <h2 className="display h-lg">Unsere Studios</h2>
            </Reveal>
            <div className="studio-grid">
              {STUDIOS.map((s, i) => (
                <Reveal key={s.slug} delay={i * 100}>
                  <Link href={studioPath(s)} className="studio-card entry group">
                    <div className="media bw zoom">
                      <Image src={s.cover} alt={`${s.brand}, ${s.location}`} fill sizes="(max-width: 600px) 100vw, 50vw" />
                    </div>
                    <div className="studio-card-body">
                      <div>
                        <p className="eyebrow">
                          {s.location}, {s.district}
                        </p>
                        <h3 className="display h-lg" style={{ marginTop: 10 }}>
                          {s.brand}
                        </h3>
                        <p>{s.tagline}</p>
                      </div>
                      <span className="btn btn-primary">Zum Studio</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-dark">
          <Reveal className="wrap">
            <div className="section-head center" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Über uns</p>
              <h2 className="display h-lg">Relax. Refresh. Glow.</h2>
              <p className="lead">
                Dee Studio steht für kreative Nail Art, sorgfältige Pflege und eine Atmosphäre, in der Sie abschalten
                können. Am Neubaugürtel finden Sie Nails, Lashes und unseren Head Spa, in der Fasangasse Nails und
                Pediküre bei Vanilla by Dee.
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
