import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  /** First breadcrumb, normally the studio's own start page. */
  home?: { label: string; href: string };
  crumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
};

/** Header block for every sub page: breadcrumb trail + page title, so visitors always know where they are. */
export default function PageHead({ home = { label: "Start", href: "/" }, crumbs, eyebrow, title, intro, children }: Props) {
  return (
    <section className="page-head">
      <div className="wrap">
        <nav aria-label="Brotkrümelnavigation">
          <ol className="crumbs">
            <li>
              <Link href={home.href}>{home.label}</Link>
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
