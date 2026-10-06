"use client";

import { useState } from "react";
import type { PriceGroup } from "@/data/site";

const ORDER = ["Nägel", "Gesicht", "Massage"];

/**
 * Two-level price menu: main labels (Nägel, Gesicht, Massage), sub labels per group
 * (Neues Set, Auffüllen, ...). Only one group is shown at a time, so the list stays short.
 */
export default function PriceMenu({ groups }: { groups: PriceGroup[] }) {
  const labels = [...new Set(groups.map((g) => g.category))].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
  const [label, setLabel] = useState(labels[0]);
  const subs = groups.filter((g) => g.category === label);
  const [groupId, setGroupId] = useState<string | undefined>(subs[0]?.id);
  const group = subs.find((g) => g.id === groupId) ?? subs[0];

  const chooseLabel = (l: string) => {
    setLabel(l);
    setGroupId(groups.find((g) => g.category === l)?.id);
  };

  return (
    <div className="price-menu">
      <div className="gal-tabs price-tabs" role="tablist" aria-label="Kategorie">
        {labels.map((l) => (
          <button key={l} role="tab" aria-selected={label === l} aria-pressed={label === l} onClick={() => chooseLabel(l)}>
            {l}
          </button>
        ))}
      </div>
      {subs.length > 1 && (
        <div className="price-subs" role="tablist" aria-label={`${label}: Bereich`}>
          {subs.map((g) => (
            <button key={g.id} role="tab" aria-selected={group?.id === g.id} onClick={() => setGroupId(g.id)}>
              {g.title}
            </button>
          ))}
        </div>
      )}
      {group && (
        <div className="price-panel" key={group.id}>
          {group.note && <p className="price-note">{group.note}</p>}
          <ul className="price-flat">
            {group.items.map(([name, price]) => (
              <li key={name + price} className="price-row">
                <span>{name}</span>
                <span className="val">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
