import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { STATIC_PAGES } from "@/data/home";
import { STUDIOS, studioPath, type Studio } from "@/data/site";

/** "Mehr über Dee Studio": links to the other static pages of the group site. */
export function MoreAbout({ current }: { current: string }) {
  const pages = STATIC_PAGES.filter((p) => p.href !== current);
  return (
    <section className="section section-alt">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Dee Studio Wien</p>
          <h2 className="display h-lg">Mehr über Dee Studio</h2>
        </Reveal>
        <ul className="link-cards">
          {pages.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="link-card">
                <span className="display h-sm">{p.label}</span>
                <span>{p.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="btn-row" style={{ marginTop: 40 }}>
          <Link href="/#studios" className="btn btn-primary">
            Zu den Studios
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Closing block on studio landings: the other studio + a way back to the group start page. */
export function BackToStart({ studio }: { studio: Studio }) {
  const others = STUDIOS.filter((s) => s.slug !== studio.slug);
  return (
    <section className="section section-dark">
      <div className="wrap split">
        <Reveal>
          <p className="eyebrow">Dee Studio Wien</p>
          <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
            Zwei Studios in Wien
          </h2>
          <p className="lead">Lernen Sie unsere ganze Geschichte kennen oder besuchen Sie unser zweites Studio.</p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/" className="btn btn-light">
              Zur Startseite
            </Link>
          </div>
        </Reveal>
        <Reveal delay={100}>
          {others.map((s) => (
            <Link key={s.slug} href={studioPath(s)} className="studio-card group">
              <div className="media bw zoom" style={{ aspectRatio: "4 / 3" }}>
                <Image src={s.cover} alt={`${s.brand}, ${s.location}`} fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
              <div className="studio-card-body">
                <div>
                  <p className="eyebrow">
                    {s.location}, {s.district}
                  </p>
                  <h3 className="display h-md" style={{ marginTop: 8 }}>
                    {s.brand}
                  </h3>
                  <p>{s.tagline}</p>
                </div>
                <span className="text-link">Zum Studio</span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
