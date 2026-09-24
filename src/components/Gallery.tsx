"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY, type GalleryItem } from "@/data/site";

const TABS: { key: "all" | GalleryItem["cat"]; label: string }[] = [
  { key: "all", label: "Alle" },
  { key: "nails", label: "Nails" },
  { key: "lashes", label: "Lashes" },
  { key: "spa", label: "Head Spa" },
  { key: "studio", label: "Studio" },
];

export default function Gallery({ limit, bw = false }: { limit?: number; bw?: boolean }) {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  const items = GALLERY.filter((g) => tab === "all" || g.cat === tab).slice(0, limit);

  return (
    <>
      <div className="gal-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            className={tab === t.key ? "active" : ""}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="gal-grid">
        {items.map((g) => (
          <div key={g.src} className={`media zoom ${bw ? "bw" : ""}`}>
            <Image src={g.src} alt={g.alt} fill sizes="(max-width: 800px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </>
  );
}
