/** Big rating figure with CSS-drawn stars (no glyphs). */
export default function Rating({ value, label, align = "center" }: { value: string; label: string; align?: "center" | "start" }) {
  return (
    <div className={`rating ${align === "start" ? "rating-start" : ""}`}>
      <p className="rating-value">
        {value}
        <span> / 5</span>
      </p>
      <div className="rating-stars" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <p className="eyebrow">{label}</p>
    </div>
  );
}
