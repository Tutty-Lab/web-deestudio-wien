"use client";

import { useState } from "react";
import { FAQ as DEFAULT_ITEMS } from "@/data/site";

type Item = { q: string; a: string };

export default function FAQ({ items = DEFAULT_ITEMS }: { items?: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{item.q}</span>
              <span className="plus" aria-hidden="true" />
            </button>
            <div className="faq-a">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
