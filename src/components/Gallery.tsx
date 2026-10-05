"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

type Props = {
  items: GalleryItem[];
  /** Filter buttons; omit for a plain grid. The active filter is mirrored in the URL hash (#french). */
  filters?: { slug: string; name: string }[];
  limit?: number;
  bw?: boolean;
};

export default function Gallery({ items, filters, limit, bw = false }: Props) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<number | null>(null);

  // Pick up a filter from the URL hash, e.g. /dee-studio/galerie#chrome
  useEffect(() => {
    if (!filters) return;
    const fromHash = () => {
      const h = decodeURIComponent(window.location.hash.slice(1));
      setFilter(filters.some((f) => f.slug === h) ? h : "all");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [filters]);

  const choose = (slug: string) => {
    setFilter(slug);
    const url = slug === "all" ? window.location.pathname : `#${slug}`;
    window.history.replaceState(null, "", url);
  };

  const shown = items.filter((g) => filter === "all" || g.styles.includes(filter)).slice(0, limit);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? null : (i + d + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  const current = open === null ? null : shown[open];

  return (
    <>
      {filters && filters.length > 0 && (
        <div className="gal-tabs" role="toolbar" aria-label="Galerie nach Stil filtern">
          {[{ slug: "all", name: "Alle" }, ...filters].map((f) => (
            <button key={f.slug} aria-pressed={filter === f.slug} onClick={() => choose(f.slug)}>
              {f.name}
            </button>
          ))}
        </div>
      )}
      <ul className="gal-grid">
        {shown.map((g, i) => (
          <li key={g.src}>
            <button className={`media zoom group gal-item ${bw ? "bw" : ""}`} onClick={() => setOpen(i)} aria-label={`${g.alt} vergrößern`}>
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 860px) 50vw, 25vw" />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={() => setOpen(null)}>
          <button className="lb-close" aria-label="Schließen" onClick={() => setOpen(null)} />
          {shown.length > 1 && (
            <>
              <button
                className="lb-nav prev"
                aria-label="Vorheriges Bild"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              />
              <button
                className="lb-nav next"
                aria-label="Nächstes Bild"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              />
            </>
          )}
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <div className="lb-image">
              <Image src={current.src} alt={current.alt} fill sizes="90vw" style={{ objectFit: "contain" }} />
            </div>
            <figcaption>{current.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
