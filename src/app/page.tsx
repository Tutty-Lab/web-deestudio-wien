import Image from "next/image";
import Link from "next/link";
import { DRAFTS } from "@/data/drafts";

export default function DraftIndex() {
  return (
    <main className="site theme-dark" style={{ minHeight: "100svh" }}>
      <div className="wrap" style={{ padding: "clamp(48px, 8vw, 96px) var(--gutter)" }}>
        <p className="eyebrow">Website Redesign · Drafts</p>
        <h1 className="display h-lg" style={{ margin: "16px 0 12px" }}>
          Dee Studio <span className="serif">×</span> Vanilla by Dee
        </h1>
        <p className="lead" style={{ margin: "0 0 56px" }}>
          3 phương án giao diện mới gộp 2 tiệm (Neubaugürtel 1150 &amp; Fasangasse 1030) trong một website. Phong cách
          đen trắng lấy cảm hứng từ Monlis. Bấm vào từng draft để xem; mỗi draft có đủ trang chủ, trang từng studio
          và bảng giá.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {DRAFTS.map((d) => (
            <Link key={d.key} href={`/${d.key}`} className="group" style={{ display: "block" }}>
              <div className="media bw zoom" style={{ aspectRatio: "4 / 5" }}>
                <Image src={d.cover} alt={d.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h2 className="display h-sm" style={{ margin: "20px 0 8px" }}>
                {d.title}
              </h2>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>{d.desc}</p>
              <span className="link-arrow" style={{ marginTop: 16 }}>
                Xem draft →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
