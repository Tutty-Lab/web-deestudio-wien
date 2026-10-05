"use client";

import { useState } from "react";
import PriceList from "./PriceList";
import type { PriceGroup } from "@/data/site";

/** Price list grouped under horizontal labels (Nägel, Pediküre, Wimpern...), one label at a time. */
export default function PriceMenu({ groups }: { groups: PriceGroup[] }) {
  const labels = [...new Set(groups.map((g) => g.category))];
  const [active, setActive] = useState(labels[0]);

  return (
    <>
      <div className="gal-tabs price-tabs" role="tablist" aria-label="Preise nach Kategorie">
        {labels.map((l) => (
          <button key={l} role="tab" aria-selected={active === l} aria-pressed={active === l} onClick={() => setActive(l)}>
            {l}
          </button>
        ))}
      </div>
      <PriceList groups={groups.filter((g) => g.category === active)} />
    </>
  );
}
