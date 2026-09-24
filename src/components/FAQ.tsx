"use client";

import { useState } from "react";
import { FAQ as ITEMS } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{item.q}</span>
              <span className="plus" aria-hidden="true">
                +
              </span>
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
