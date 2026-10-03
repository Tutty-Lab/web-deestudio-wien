"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY, type GalleryItem } from "@/data/gallery";

const TABS: { key: "all" | GalleryItem["cat"]; label: string }[] = [
  { key: "all", label: "Alle" },
  { key: "nails", label: "Nails" },
  { key: "lashes", label: "Lashes" },
  { key: "spa", label: "Head Spa" },
  { key: "studio", label: "Studio" },
];

type Props = { limit?: number; bw?: boolean; items?: GalleryItem[]; tabs?: boolean };

export default function Gallery({ limit, bw = false, items = GALLERY, tabs = true }: Props) {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  const shown = items.filter((g) => tab === "all" || g.cat === tab).slice(0, limit);
  const available = TABS.filter((t) => t.key === "all" || items.some((g) => g.cat === t.key));

  return (
    <>
      {tabs && available.length > 2 && (
        <div className="gal-tabs" role="tablist" aria-label="Galerie filtern">
          {available.map((t) => (
            <button key={t.key} role="tab" aria-selected={tab === t.key} onClick={() => setTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
      )}
      <div className="gal-grid">
        {shown.map((g) => (
          <figure key={g.src} className={`media zoom group ${bw ? "bw" : ""}`} style={{ margin: 0 }}>
            <Image src={g.src} alt={g.alt} fill sizes="(max-width: 860px) 50vw, 25vw" />
          </figure>
        ))}
      </div>
    </>
  );
}
