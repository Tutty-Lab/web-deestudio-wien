import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead, { crumbPath } from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { getStudio, servicesOf, studioPath } from "@/data/site";

type Params = { params: Promise<{ studio: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).studio);
  if (!s) return {};
  const names = servicesOf(s).map((sv) => sv.title).join(", ");
  return {
    title: `Leistungen | ${s.brand} ${s.district}`,
    description: `${names} bei ${s.brand}, ${s.street}, ${s.city}. Alle Behandlungen mit Dauer und Preisen.`,
    alternates: { canonical: studioPath(s, "leistungen") },
  };
}

export default async function ServicesPage({ params }: Params) {
  const s = getStudio((await params).studio);
  if (!s) notFound();
  const services = servicesOf(s);
  const crumbs = [{ label: s.brand, href: studioPath(s) }, { label: "Leistungen" }];

  return (
    <>
      <Header studio={s} />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, studioPath(s, "leistungen")))} />
      <main>
        <PageHead
          crumbs={crumbs}
          eyebrow={`${s.brand}, ${s.location}`}
          title="Leistungen"
          intro={`${s.tagline}. Hier finden Sie alle Behandlungen von ${s.brand} im Überblick.`}
        >
          <nav className="chips" aria-label="Leistungen">
            {services.map((sv) => (
              <a key={sv.key} href={`#${sv.key}`}>
                {sv.title}
              </a>
            ))}
          </nav>
        </PageHead>

        {services.map((sv, i) => (
          <section key={sv.key} id={sv.key} className={`section ${i % 2 ? "section-alt" : ""}`}>
            <div className="wrap split">
              <Reveal className={i % 2 ? "order-last-desktop" : ""}>
                <div className="media" style={{ aspectRatio: "4 / 5" }}>
                  <Image src={sv.image} alt={`${sv.title} bei ${s.brand}`} fill sizes="(max-width: 860px) 100vw, 50vw" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <p className="eyebrow">{sv.from}</p>
                <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                  {sv.title}
                </h2>
                {sv.description.map((p) => (
                  <p key={p} className="lead">
                    {p}
                  </p>
                ))}
                {sv.duration && (
                  <ul className="info-list" style={{ marginTop: 28 }}>
                    <li>
                      <span>Dauer</span>
                      <span>{sv.duration}</span>
                    </li>
                    <li>
                      <span>Preis</span>
                      <span>{sv.from}</span>
                    </li>
                  </ul>
                )}
                <div className="btn-row" style={{ marginTop: 32 }}>
                  <BookButton studio={s.slug} />
                  <Link href={`${studioPath(s, "preise")}#${sv.priceGroup}`} className="btn btn-secondary">
                    Preise ansehen
                  </Link>
                  {sv.key === "head-spa" && s.headSpa && (
                    <Link href={studioPath(s, "head-spa")} className="btn btn-secondary">
                      Zum Head Spa
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
