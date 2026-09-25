import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import BookButton from "./BookButton";
import { HEAD_SPA } from "@/data/site";

export default function HeadSpaFeature({ showMore = true }: { showMore?: boolean }) {
  return (
    <section className="section section-invert headspa" id="head-spa">
      <div className="wrap two-col">
        <Reveal className="headspa-media">
          <div className="media" style={{ aspectRatio: "4 / 5" }}>
            <Image src={HEAD_SPA.images[0]} alt="Head Spa bei Dee Studio" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="media headspa-inset">
            <Image src={HEAD_SPA.images[1]} alt="" fill sizes="220px" style={{ objectFit: "cover" }} />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Neu bei Dee Studio · Neubaugürtel</p>
          <h2 className="display h-xl" style={{ margin: "18px 0 8px" }}>
            Head Spa
          </h2>
          <p className="serif" style={{ fontSize: "clamp(24px, 2.6vw, 36px)", margin: "0 0 28px" }}>
            {HEAD_SPA.tagline}
          </p>
          <p className="lead">{HEAD_SPA.lead}</p>
          <ul className="headspa-benefits">
            {HEAD_SPA.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
            <BookButton studio={HEAD_SPA.studio} className="btn btn-solid">
              Head Spa buchen
            </BookButton>
            {showMore && (
              <Link href="/head-spa" className="btn">
                Mehr erfahren
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
