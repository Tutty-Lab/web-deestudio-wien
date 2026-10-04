import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { ARTICLES } from "@/data/magazin";

export const metadata: Metadata = {
  title: "Magazin | Nails, Lashes & Head Spa Tipps | Dee Studio",
  description:
    "Wissen und Tipps von Dee Studio Wien: Head Spa, Unterschied zwischen Acryl, Gel-X und Shellac, Nagelpflege für eine Maniküre, die länger hält.",
  alternates: { canonical: "/magazin" },
};

export default function MagazinPage() {
  return (
    <>
      <Header />
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Magazin", path: "/magazin" }])} />
      <main>
        <PageHead
          crumbs={[{ label: "Magazin" }]}
          eyebrow="Wissen & Tipps"
          title="Magazin"
          intro="Was Sie über Nails, Lashes und den Head Spa wissen sollten, erklärt von unserem Team."
        />
        <section className="section">
          <div className="wrap">
            <ul className="article-grid">
              {ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link href={`/magazin/${a.slug}`} className="article-card group">
                    <div className="media bw zoom">
                      <Image src={a.image} alt={a.imageAlt} fill sizes="(max-width: 860px) 100vw, 33vw" />
                    </div>
                    <p className="eyebrow" style={{ marginTop: 16 }}>
                      {a.readMin} Min. Lesezeit
                    </p>
                    <h2 className="display h-sm" style={{ marginTop: 8 }}>
                      {a.h1}
                    </h2>
                    <p className="article-lead">{a.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
