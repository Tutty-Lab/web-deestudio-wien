"use client";

import { useState } from "react";
import PriceList from "./PriceList";
import type { PriceGroup } from "@/data/site";

/** Full price list with category filter; "Alle" shows everything. */
export default function PriceMenu({ groups }: { groups: PriceGroup[] }) {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? groups : groups.filter((g) => g.id === active);

  return (
    <>
      <div className="gal-tabs price-tabs" role="toolbar" aria-label="Preise nach Kategorie">
        {[{ id: "all", title: "Alle" }, ...groups].map((g) => (
          <button key={g.id} aria-pressed={active === g.id} onClick={() => setActive(g.id)}>
            {g.title}
          </button>
        ))}
      </div>
      <PriceList groups={shown} />
    </>
  );
}
