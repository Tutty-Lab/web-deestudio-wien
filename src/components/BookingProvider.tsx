"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { STUDIOS } from "@/data/site";

type Ctx = { openBooking: (slug?: string) => void };
const BookingContext = createContext<Ctx>({ openBooking: () => {} });
export const useBooking = () => useContext(BookingContext);

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState<string | undefined>();

  const openBooking = useCallback((slug?: string) => {
    setFocus(slug);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const list = focus ? STUDIOS.filter((s) => s.slug === focus) : STUDIOS;

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Schließen" onClick={() => setOpen(false)}>
              ×
            </button>
            <p className="eyebrow">Termin buchen</p>
            <h2 className="display h-md" style={{ margin: "12px 0 0" }}>
              {focus ? list[0].brand : "Wählen Sie Ihr Studio"}
            </h2>
            <div className="modal-grid" style={focus ? { gridTemplateColumns: "1fr" } : undefined}>
              {list.map((s) => (
                <div key={s.slug} className="modal-opt">
                  <div>
                    <p className="eyebrow" style={{ margin: 0 }}>
                      {s.district}
                    </p>
                    <h3 className="display h-sm" style={{ margin: "8px 0 4px" }}>
                      {s.brand}
                    </h3>
                    <p style={{ margin: 0, fontSize: 14, color: "#6b6b6b" }}>{s.street}</p>
                  </div>
                  <a className="btn btn-solid" href={s.booking} target="_blank" rel="noopener noreferrer">
                    Online buchen
                  </a>
                  <a className="btn" href={s.phoneHref}>
                    {s.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
