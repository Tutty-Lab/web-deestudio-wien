"use client";

import { useState } from "react";
import type { PriceGroup } from "@/data/site";

// Item names that only make sense with their group ("Mit Farbe") get the group name in front.
const needsGroup = (label: string) => /^(Mit |Ohne |Basic \+|Deluxe \+|Basis Paket|Premium Paket|VIP Paket)/.test(label);

/** Treatwell-style price menu: horizontal labels (Nägel, Gesicht, Massage), one flat list per label. */
export default function PriceMenu({ groups }: { groups: PriceGroup[] }) {
  const ORDER = ["Nägel", "Gesicht", "Massage"];
  const labels = [...[...new Set(groups.map((g) => g.category))].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))];
  const [active, setActive] = useState(labels[0]);
  const rows = groups
    .filter((g) => g.category === active)
    .flatMap((g) => g.items.map(([label, price]) => [needsGroup(label) ? `${g.title} ${label[0].toLowerCase()}${label.slice(1)}` : label, price]));

  return (
    <>
      <div className="gal-tabs price-tabs" role="tablist" aria-label="Preise nach Kategorie">
        {labels.map((l) => (
          <button key={l} role="tab" aria-selected={active === l} aria-pressed={active === l} onClick={() => setActive(l)}>
            {l}
          </button>
        ))}
      </div>
      <ul className="price-flat">
        {rows.map(([label, price]) => (
          <li key={label + price} className="price-row">
            <span>{label}</span>
            <span className="val">{price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
