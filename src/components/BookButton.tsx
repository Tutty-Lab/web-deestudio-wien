"use client";

import { useBooking } from "./BookingProvider";

type Props = { studio?: string; className?: string; children?: React.ReactNode };

export default function BookButton({ studio, className = "btn btn-primary", children = "Termin buchen" }: Props) {
  const { openBooking } = useBooking();
  return (
    <button className={className} onClick={() => openBooking(studio)}>
      {children}
    </button>
  );
}
