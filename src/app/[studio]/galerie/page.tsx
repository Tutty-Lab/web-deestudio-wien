import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import BookButton from "@/components/BookButton";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { STYLES, imagesForStyle } from "@/data/gallery";
import { STUDIOS, getStudio, studioPath } from "@/data/site";
import { soft } from "@/lib/text";

export const dynamicParams = false;

// Only studios with their own photo gallery get these pages.
export function generateStaticParams() {
  return STUDIOS.filter((s) => s.gallery).map((s) => ({ studio: s.slug }));
}

type Params = { params: Promise<{ studio: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).studio);
  if (!s) return {};
  return {
    title: `Nagel Galerie Wien | Nageldesign Ideen | ${s.brand}`,
    description: `Nageldesign Ideen von ${s.brand} am ${s.location}: French Nails, Chrome, Nail Art, XXL, Acryl, Babyboomer und Wimpernverlängerung.`,
    alternates: { canonical: studioPath(s, "galerie") },
  };
}

export default async function GalleryPage({ params }: Params) {
  const s = getStudio((await params).studio);
  if (!s?.gallery) notFound();

  return (
    <>
      <Header studio={s} />
      <JsonLd
        data={breadcrumbLd([
          { name: s.brand, path: studioPath(s) },
          { name: "Galerie", path: studioPath(s, "galerie") },
        ])}
      />
      <main>
        <PageHead
          home={{ label: s.brand, href: studioPath(s) }}
          crumbs={[{ label: "Galerie" }]}
          eyebrow="Nageldesign Ideen aus Wien"
          title="Galerie"
          intro={`Echte Arbeiten aus unserem Studio am ${s.location}. Wählen Sie einen Stil, um mehr Beispiele, Preise und Antworten zu sehen.`}
        />

        <section className="section">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Nach Stil</p>
              <h2 className="display h-lg">Stile entdecken</h2>
            </Reveal>
            <ul className="style-grid">
              {STYLES.map((st) => {
                const imgs = imagesForStyle(st.slug);
                return (
                  <li key={st.slug}>
                    <Link href={studioPath(s, `galerie/${st.slug}`)} className="style-card group">
                      <div className="media bw zoom">
                        <Image src={imgs[0].src} alt={imgs[0].alt} fill sizes="(max-width: 600px) 50vw, 25vw" />
                      </div>
                      <h3 className="display h-sm">{soft(st.name)}</h3>
                      <p>
                        {imgs.length} {imgs.length === 1 ? "Beispiel" : "Beispiele"}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">@dee.studio.wien</p>
              <h2 className="display h-lg">Alle Arbeiten</h2>
            </Reveal>
            <Gallery />
            <div className="btn-row center" style={{ marginTop: 48 }}>
              <BookButton studio={s.slug} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
