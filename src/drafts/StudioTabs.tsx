"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { STUDIOS } from "@/data/site";
import StudioInfo from "@/components/StudioInfo";

export default function StudioTabs({ base }: { base: string }) {
  const [active, setActive] = useState(0);
  const s = STUDIOS[active];

  return (
    <>
      <div className="tabs-line" role="tablist">
        {STUDIOS.map((st, k) => (
          <button
            key={st.slug}
            role="tab"
            aria-selected={k === active}
            className={k === active ? "active" : ""}
            onClick={() => setActive(k)}
          >
            {st.brand} <span style={{ opacity: 0.5 }}>· {st.district.split(" ")[0]}</span>
          </button>
        ))}
      </div>
      <div className="two-col" key={s.slug} style={{ alignItems: "start", animation: "fade .6s var(--ease)" }}>
        <div className="group">
          <div className="media bw" style={{ aspectRatio: "4 / 5" }}>
            <Image src={s.cover} alt={s.brand} fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div>
          <p className="lead" style={{ marginTop: 0, marginBottom: 36 }}>
            {s.intro}
          </p>
          <StudioInfo studio={s} showMap={false} />
          <Link href={`${base}/studio/${s.slug}`} className="link-arrow" style={{ marginTop: 32 }}>
            Mehr über {s.location} →
          </Link>
        </div>
      </div>
    </>
  );
}
