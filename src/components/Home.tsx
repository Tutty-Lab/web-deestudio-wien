import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import HeadSpaFeature from "@/components/HeadSpaFeature";
import { HEAD_SPA, SERVICES, STUDIOS } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header transparent />
      <main>
        {/* HERO */}
        <section className="hero">
          <Image src="/images/site/g-11.34.webp" alt="Nail Art von Dee Studio" fill priority sizes="100vw" />
          <div className="wrap hero-inner">
            <Link href="/head-spa" className="hero-badge">
              Neu: Head Spa bei Dee Studio
            </Link>
            <p className="eyebrow">Nails, Lashes &amp; Head Spa in Wien</p>
            <h1 className="display h-xl">
              Ja! Das ist
              <br />
              Dee Studio!
            </h1>
            <div className="btn-row center">
              <BookButton className="btn btn-light" />
              <a className="btn btn-outline-light" href="#studios">
                Unsere Studios
              </a>
            </div>
          </div>
        </section>

        {/* HEAD SPA (promoted service) */}
        <HeadSpaFeature />

        {/* STUDIOS */}
        <section id="studios" className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Zwei Adressen in Wien</p>
              <h2 className="display h-lg">Unsere Studios</h2>
            </Reveal>
            <div className="studio-grid">
              {STUDIOS.map((s, i) => (
                <Reveal key={s.slug} delay={i * 100}>
                  <Link href={`/studio/${s.slug}`} className="studio-card group">
                    <div className="media bw zoom">
                      <Image src={s.cover} alt={`${s.brand}, ${s.location}`} fill sizes="(max-width: 600px) 100vw, 50vw" />
                    </div>
                    <div className="studio-card-body">
                      <div>
                        <p className="eyebrow">{s.district}</p>
                        <h3 className="display h-md" style={{ marginTop: 8 }}>
                          {s.brand}
                          {s.slug === HEAD_SPA.studio && <span className="tag">Head Spa</span>}
                        </h3>
                        <p>{s.street}</p>
                      </div>
                      <span className="text-link">Zum Studio</span>
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
                Bei Dee Studio beginnt Schönheit mit Pflege. Unsere Artists arbeiten mit aktuellen Techniken und
                hochwertigen Produkten. Für Nail Art, die Ihre Persönlichkeit zeigt, und Momente, in denen Sie ganz
                abschalten.
              </p>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Behandlungen</p>
              <h2 className="display h-lg">Services</h2>
            </Reveal>
            <div className="service-grid">
              {SERVICES.map((s, i) => (
                <Reveal key={s.key} delay={i * 80} className="service-tile group">
                  <Link href={s.key === "head-spa" ? "/head-spa" : "/preise"}>
                    <div className="media bw zoom">
                      <Image src={s.image} alt={s.title} fill sizes="(max-width: 1000px) 50vw, 25vw" />
                    </div>
                    <h3 className="display h-sm">{s.title}</h3>
                    <p>{s.lead}</p>
                    <p className="price">{s.from}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="btn-row center" style={{ marginTop: 48 }}>
              <Link href="/preise" className="btn btn-secondary">
                Alle Preise
              </Link>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">@dee.studio.wien</p>
              <h2 className="display h-lg">Unsere Arbeiten</h2>
            </Reveal>
            <Gallery bw limit={8} />
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <Reveal className="section-head center">
              <p className="eyebrow">FAQ</p>
              <h2 className="display h-lg">Gut zu wissen</h2>
            </Reveal>
            <FAQ />
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-alt" id="kontakt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Besuchen Sie uns</p>
              <h2 className="display h-lg">Kontakt</h2>
            </Reveal>
            <div className="info-grid">
              {STUDIOS.map((s) => (
                <StudioInfo key={s.slug} studio={s} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
