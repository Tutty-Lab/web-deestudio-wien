import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import BookButton from "./BookButton";
import { HEAD_SPA, studioPath } from "@/data/site";

export default function HeadSpaFeature({ showMore = true }: { showMore?: boolean }) {
  return (
    <section className="section section-dark" id="head-spa">
      <div className="wrap split">
        <Reveal className="feature-media">
          <div className="media main">
            <Image src={HEAD_SPA.images[0]} alt="Head Spa bei Dee Studio" fill sizes="(max-width: 860px) 100vw, 50vw" />
          </div>
        </Reveal>
        <Reveal delay={100} className="feature-copy">
          <p className="eyebrow">Neu bei Dee Studio, Neubaugürtel</p>
          <h2 className="display h-xl">Head Spa</h2>
          <span className="serif">{HEAD_SPA.tagline}</span>
          <p className="lead">{HEAD_SPA.lead}</p>
          <ul className="checklist">
            {HEAD_SPA.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="btn-row">
            <BookButton studio={HEAD_SPA.studio} className="btn btn-light">
              Head Spa buchen
            </BookButton>
            {showMore && (
              <Link href={studioPath(HEAD_SPA.studio, "head-spa")} className="btn btn-outline-light">
                Mehr erfahren
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
