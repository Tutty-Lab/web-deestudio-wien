import Link from "next/link";

export type Crumb = { label: string; href?: string };

type Props = {
  /** Trail after "Start", e.g. [{ label: "Dee Studio", href: "/dee-studio" }, { label: "Preise" }] */
  crumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
};

/** Header block for every sub page: breadcrumb trail (always starting at Start) + page title. */
export default function PageHead({ crumbs, eyebrow, title, intro, children }: Props) {
  return (
    <section className="page-head">
      <div className="wrap">
        <nav aria-label="Brotkrümelnavigation">
          <ol className="crumbs">
            <li>
              <Link href="/">Start</Link>
            </li>
            {crumbs.map((c, i) =>
              c.href && i < crumbs.length - 1 ? (
                <li key={c.label}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ) : (
                <li key={c.label} aria-current={i === crumbs.length - 1 ? "page" : undefined}>
                  {c.label}
                </li>
              )
            )}
          </ol>
        </nav>
        <div className="page-head-grid">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="display h-xl" style={{ marginTop: eyebrow ? 14 : 0 }}>
              {title}
            </h1>
          </div>
          {(intro || children) && (
            <div>
              {intro && <p className="lead">{intro}</p>}
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Breadcrumb trail as {name, path} for BreadcrumbList JSON-LD, matching what PageHead renders. */
export function crumbPath(crumbs: Crumb[], currentPath: string) {
  return [
    { name: "Start", path: "/" },
    ...crumbs.map((c, i) => ({ name: c.label, path: c.href ?? (i === crumbs.length - 1 ? currentPath : "/") })),
  ];
}
