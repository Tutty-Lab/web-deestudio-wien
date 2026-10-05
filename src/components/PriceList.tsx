import type { PriceGroup } from "@/data/site";

export default function PriceList({ groups }: { groups: PriceGroup[] }) {
  return (
    <div className="price-cols">
      {groups.map((g) => (
        <div key={g.id} id={g.id} className="price-group">
          <h2 className="display h-sm">{g.title}</h2>
          {g.note && <p className="price-note">{g.note}</p>}
          {g.items.map(([name, val]) => (
            <div key={name} className="price-row">
              <span>{name}</span>
              <span className="val">{val}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
