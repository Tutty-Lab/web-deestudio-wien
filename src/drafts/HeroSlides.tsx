"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlides({ images }: { images: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % images.length), 5500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="slides" aria-hidden="true">
      {images.map((src, k) => (
        <div key={src} className={`slide ${k === i ? "on" : ""}`}>
          {/* key restarts the Ken Burns animation each time the slide becomes active */}
          <Image key={k === i ? `${src}-on` : src} src={src} alt="" fill priority={k === 0} sizes="100vw" />
        </div>
      ))}
    </div>
  );
}
