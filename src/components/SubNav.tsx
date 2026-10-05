"use client";

import { useEffect, useState } from "react";

/** Sticky in-page navigation under the header; highlights the section currently in view. */
export default function SubNav({ items, label }: { items: { id: string; label: string }[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="subnav" aria-label={label}>
      <div className="wrap subnav-inner">
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`} aria-current={active === i.id ? "true" : undefined}>
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
