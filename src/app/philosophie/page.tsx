import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { MoreAbout } from "@/components/Blocks";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import { VALUES } from "@/data/home";

export const metadata: Metadata = {
  title: "Vision, Mission & Philosophie | Dee Studio Wien",
  description:
    "Wofür Dee Studio Wien steht: unsere Vision, unsere Mission und die Philosophie Relax. Refresh. Glow. hinter jeder Behandlung.",
  alternates: { canonical: "/philosophie" },
};

const crumbs = [{ label: "Philosophie" }];

export default function PhilosophyPage() {
  return (
    <>
      <Header />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, "/philosophie"))} />
      <main>
        <PageHead
          crumbs={crumbs}
          eyebrow="Wofür wir stehen"
          title="Philosophie"
          intro="Vision, Mission und die Werte, die jede Behandlung bei Dee Studio prägen."
        />
        {VALUES.map((v, i) => (
          <section key={v.key} id={v.key} className={`section ${i === 1 ? "section-dark" : ""}`}>
            <div className="wrap split top">
              <Reveal>
                <p className="eyebrow">{v.label}</p>
                <h2 className="display h-lg" style={{ marginTop: 14 }}>
                  {v.title}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="lead">{v.text}</p>
                {v.details.map((d) => (
                  <p key={d} className="lead">
                    {d}
                  </p>
                ))}
              </Reveal>
            </div>
          </section>
        ))}
        <MoreAbout current="/philosophie" />
      </main>
      <Footer />
    </>
  );
}
