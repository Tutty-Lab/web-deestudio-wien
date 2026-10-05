import Link from "next/link";

export type Crumb = { label: string; href?: string };

type Props = {
  /** Trail after "Start"; shown on group pages only (studio pages use variant="center"). */
  crumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  /** "center": compact centred head without visible breadcrumb, used inside studio sub-sites. */
  variant?: "split" | "center";
};

/** Header block for sub pages. Breadcrumb JSON-LD is emitted by the page either way (see crumbPath). */
export default function PageHead({ crumbs, eyebrow, title, intro, children, variant = "split" }: Props) {
  if (variant === "center") {
    return (
      <section className="page-head page-head-center">
        <div className="wrap">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="display h-xl">{title}</h1>
          {intro && <p className="lead">{intro}</p>}
          {children}
        </div>
      </section>
    );
  }

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

/** Breadcrumb trail as {name, path} for BreadcrumbList JSON-LD. */
export function crumbPath(crumbs: Crumb[], currentPath: string) {
  return [
    { name: "Start", path: "/" },
    ...crumbs.map((c, i) => ({ name: c.label, path: c.href ?? (i === crumbs.length - 1 ? currentPath : "/") })),
  ];
}
