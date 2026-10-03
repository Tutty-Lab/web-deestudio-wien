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
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const list = focus ? STUDIOS.filter((s) => s.slug === focus) : STUDIOS;

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" aria-label="Schließen" onClick={() => setOpen(false)} />
            <p className="eyebrow">Termin buchen</p>
            <h2 id="booking-title" className="display h-md">
              {focus ? list[0].brand : "Wählen Sie Ihr Studio"}
            </h2>
            <div className={`modal-grid ${focus ? "single" : ""}`}>
              {list.map((s) => (
                <div key={s.slug} className="modal-opt">
                  <p className="eyebrow">{s.district}</p>
                  <h3 className="display h-sm">{s.brand}</h3>
                  <p>{s.street}</p>
                  <a className="btn btn-primary" href={s.booking} target="_blank" rel="noopener noreferrer">
                    Online buchen
                  </a>
                  <a className="btn btn-secondary" href={s.phoneHref}>
                    Anrufen {s.phone}
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
