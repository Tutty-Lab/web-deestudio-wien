import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { ARTICLES, getArticle } from "@/data/magazin";
import { SITE } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/magazin/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, images: [a.image] },
  };
}

export default async function ArticlePage({ params }: Params) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const more = ARTICLES.filter((o) => o.slug !== a.slug);
  const date = new Date(a.date).toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <Header />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.h1,
          description: a.description,
          image: `${SITE.url}${a.image}`,
          datePublished: a.date,
          author: { "@type": "Organization", name: SITE.name, url: SITE.url },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
          mainEntityOfPage: `${SITE.url}/magazin/${a.slug}`,
        }}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", path: "/" },
          { name: "Magazin", path: "/magazin" },
          { name: a.h1, path: `/magazin/${a.slug}` },
        ])}
      />
      <main>
        <PageHead
          crumbs={[{ label: "Magazin", href: "/magazin" }, { label: a.h1 }]}
          eyebrow={`${date}, ${a.readMin} Min. Lesezeit`}
          title={a.h1}
        />
        <article className="section">
          <div className="wrap prose">
            <p className="lead prose-lead">{a.lead}</p>
            <div className="media" style={{ aspectRatio: "16 / 10", margin: "40px 0" }}>
              <Image src={a.image} alt={a.imageAlt} fill priority sizes="(max-width: 860px) 100vw, 820px" />
            </div>
            {a.sections.map((sec) => (
              <section key={sec.h2}>
                <h2 className="display h-md">{sec.h2}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {sec.list && (
                  <ul>
                    {sec.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <div className="prose-links">
              <p className="eyebrow">Weiterlesen bei uns</p>
              <div className="btn-row" style={{ marginTop: 16 }}>
                {a.links.map((l) => (
                  <Link key={l.href} href={l.href} className="btn btn-secondary">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
        <section className="section section-alt">
          <div className="wrap">
            <h2 className="display h-lg" style={{ marginBottom: 40 }}>
              Mehr aus dem Magazin
            </h2>
            <ul className="article-grid">
              {more.map((o) => (
                <li key={o.slug}>
                  <Link href={`/magazin/${o.slug}`} className="article-card group">
                    <div className="media bw zoom">
                      <Image src={o.image} alt={o.imageAlt} fill sizes="(max-width: 860px) 100vw, 33vw" />
                    </div>
                    <h3 className="display h-sm" style={{ marginTop: 16 }}>
                      {o.h1}
                    </h3>
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
