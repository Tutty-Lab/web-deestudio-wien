import Link from "next/link";
import { DRAFTS } from "@/data/drafts";

export default function DraftBar({ current }: { current: string }) {
  return (
    <nav className="draft-bar" aria-label="Draft auswählen">
      <Link href="/">≡<span className="full"> Übersicht</span></Link>
      {DRAFTS.map((d) => (
        <Link key={d.key} href={`/${d.key}`} className={d.key === current ? "active" : ""}>
          {d.key.toUpperCase()}<span className="full"> · {d.name}</span>
        </Link>
      ))}
    </nav>
  );
}
